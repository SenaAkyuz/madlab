// Unsplash'ten ücretsiz lisanslı fotoğrafları indirir ve public/images/ altına sabit dosya adlarıyla yazar.
// Çalıştır:  npm run images            (anahtar .env.local içindeki UNSPLASH_ACCESS_KEY'den okunur)
//            npm run images -- --dry   (ağ isteği yapmadan iş listesini gösterir)
// Demo anahtarı saatte 50 arama ile sınırlıdır: limit dolunca betik durur, ilerleme
// scripts/.unsplash-state.json'a kaydedilir; bir saat sonra aynı komutla kaldığı yerden devam eder.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { designs } from "../data/designs.ts";

const KEY = process.env.UNSPLASH_ACCESS_KEY;
const DRY = process.argv.includes("--dry");
const OUT = path.resolve("public/images");
const STATE = path.resolve("scripts/.unsplash-state.json");
const UTM = "utm_source=reverie_nail_atelier&utm_medium=referral";

/* ---------- iş listesi: her iş bir aramadır, sonuçlar sırayla dosyalara dağıtılır ---------- */
const designQuery = {
  "liquid-silver": "silver chrome manicure hand",
  "pearl-mirror": "pearl white nails hand",
  "lavender-chrome": "purple chrome nails manicure",
  "mocha-glaze": "brown nails hand manicure",
  "rose-gold-aura": "rose gold nails hand",
  "midnight-mirror": "black nails hand manicure",
  "classic-french": "french manicure nails",
  "milky-almond": "milky white nails hand",
  "micro-french": "micro french manicure",
  "soft-blush-gloss": "soft pink glossy nails",
  "cocoa-french": "brown french tip nails",
  "lavender-french": "lilac nails hand manicure",
  "starry-night": "star nail art",
  "wildflower": "floral nail art flowers",
  "abstract-swirl": "abstract nail art hand",
  "cherry-charm": "red cherry nails manicure",
  "zebra-latte": "zebra print nails",
  "tiny-hearts": "pink heart manicure",
  "mocha-brown": "brown gel polish nails",
  "pale-lavender": "lilac manicure hand",
  "platinum-cloud": "grey silver gel nails",
  "cherry-wine": "burgundy nails close up hand",
  "bubblegum-pink": "pink gel nails",
  "ombre-dusk": "ombre nails hand",
  "almond-gel-x": "beige almond nails",
  "coffin-acrylic": "coffin acrylic nails long",
  "stiletto-glam": "long nails manicure hand",
  "square-short-set": "short square nails",
  "russian-manicure-fill": "manicured hands",
  "long-almond-chrome": "long almond chrome nails",
  "pearl-bride": "bridal nails pearl",
  "crystal-veil": "wedding nails crystal rhinestones",
  "gold-leaf-romance": "gold leaf nails",
  "engagement-glow": "engagement ring hand nails",
  "silk-ribbon": "white bow nails hand",
  "evening-velvet": "glitter nails hand",
};

const catFallback = {
  "chrome-aynali": "metallic manicure",
  "french-minimal": "french manicure",
  "nail-art": "nail art",
  "jel-renkler": "gel nails",
  "protez-uzatma": "acrylic nails",
  "gelin-ozel": "wedding nails",
};
const jobs = [];
for (const d of designs) {
  jobs.push({
    q: designQuery[d.slug],
    orientation: "portrait",
    fallback: catFallback[d.categorySlug],
    files: [d.images[0], d.images[1], d.images[2], d.images[3]].map((p) => p.replace(/^\/images\//, "")),
  });
}
const cats = {
  "chrome-aynali": ["chrome nails", "pearl chrome nails"],
  "french-minimal": ["french manicure nude", "milky nails minimal"],
  "nail-art": ["nail art close up", "abstract nail design"],
  "jel-renkler": ["gel polish nails pastel", "colorful gel nails"],
  "protez-uzatma": ["almond acrylic nails", "coffin nails long"],
  "gelin-ozel": ["bridal nails pearl", "wedding nails"],
};
for (const [slug, [qCover, qBanner]] of Object.entries(cats)) {
  jobs.push({ q: qCover, orientation: slug === "chrome-aynali" ? "squarish" : "portrait", files: [`categories/${slug}.webp`] });
  jobs.push({ q: qBanner, orientation: "landscape", files: [`categories/${slug}-banner.webp`] });
}
jobs.push(
  { q: "nail art manicure hand", orientation: "portrait", files: ["hero/hero.webp"] },
  { q: "hand holding glass drink nails", orientation: "portrait", files: ["atmosphere/glass.webp"] },
  { q: "nail polish bottles shelf", orientation: "portrait", files: ["atmosphere/polish.webp"] },
  { q: "nail macro close up glossy", orientation: "portrait", files: ["atmosphere/macro.webp"] },
  { q: "nail technician working", orientation: "portrait", files: ["artist/work.webp"] },
  { q: "beauty portrait glossy skin woman", orientation: "portrait", files: ["artist/portrait.webp"] },
  { q: "painted nails flat lay", orientation: "squarish", files: ["instagram/1.webp", "instagram/2.webp"] },
  { q: "manicure nails hand", orientation: "squarish", files: ["instagram/3.webp", "instagram/4.webp"] },
  { q: "dark brown abstract silver liquid", orientation: "landscape", files: ["reviews/bg.webp"] },
);

if (DRY) {
  for (const j of jobs) console.log(`${j.orientation.padEnd(9)} "${j.q}" -> ${j.files.join(", ")}`);
  console.log(`\n${jobs.length} arama, ${jobs.reduce((n, j) => n + j.files.length, 0)} dosya`);
  process.exit(0);
}

if (!KEY) {
  console.error("UNSPLASH_ACCESS_KEY bulunamadı. .env.local içine ekle ve `npm run images` ile çalıştır.");
  process.exit(1);
}

/* ---------- durum ---------- */
const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : { used: [], credits: {} };
const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 1));
const api = (url) => fetch(url, { headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" } });

let stop = false;
for (const job of jobs) {
  const todo = job.files.filter((f) => !fs.existsSync(path.join(OUT, f)));
  if (todo.length === 0) continue;

  const res = await api(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(job.q)}&orientation=${job.orientation}&per_page=20&content_filter=high`,
  );
  if (res.status === 403 || res.status === 429) {
    console.log("Saatlik limit doldu. Bir saat sonra `npm run images` ile devam et.");
    stop = true;
    break;
  }
  if (!res.ok) {
    console.log(`arama hatası ${res.status}: ${job.q}`);
    continue;
  }
  let results = (await res.json()).results.filter((p) => !state.used.includes(p.id));
  // Özel sorgu yetmediyse kategori genel sorgusuyla tamamla
  if (results.length < todo.length && job.fallback) {
    const r2 = await api(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(job.fallback)}&orientation=${job.orientation}&per_page=30&content_filter=high`,
    );
    if (r2.ok) {
      const more = (await r2.json()).results.filter((p) => !state.used.includes(p.id) && !results.some((x) => x.id === p.id));
      results = [...results, ...more];
    }
  }

  for (const file of todo) {
    const photo = results.shift();
    if (!photo) {
      console.log(`sonuç yetmedi: ${file} ("${job.q}")`);
      continue;
    }
    const [w, h] = job.orientation === "landscape" ? [2000, 900] : job.orientation === "squarish" ? [1000, 1000] : [1200, 1500];
    const img = await fetch(`${photo.urls.raw}&w=${w}&h=${h}&fit=crop&q=80&fm=jpg`);
    if (!img.ok) {
      console.log(`indirilemedi: ${file}`);
      continue;
    }
    // Unsplash API kuralı: indirmeyi bildir
    api(`${photo.links.download_location}`).catch(() => {});
    const out = path.join(OUT, file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await sharp(Buffer.from(await img.arrayBuffer())).webp({ quality: 82, effort: 6 }).toFile(out);
    state.used.push(photo.id);
    state.credits[file] = {
      by: photo.user.name,
      profile: `${photo.user.links.html}?${UTM}`,
      photo: `${photo.links.html}?${UTM}`,
      alt: photo.alt_description ?? "",
    };
    save();
    console.log("✓", file, "—", photo.user.name);
  }
  if (Number(res.headers.get("x-ratelimit-remaining")) <= 1) {
    console.log("Saatlik limit doldu. Bir saat sonra `npm run images` ile devam et.");
    stop = true;
    break;
  }
}

/* ---------- CREDITS.md ---------- */
const lines = ["# Görsel kaynakları", "", "Fotoğraflar [Unsplash](https://unsplash.com/?" + UTM + ") üzerinden, Unsplash Lisansı ile kullanılmıştır.", ""];
for (const [file, c] of Object.entries(state.credits).sort()) {
  lines.push(`- \`${file}\` — [${c.by}](${c.profile}) · [fotoğraf](${c.photo})`);
}
fs.writeFileSync(path.join(OUT, "CREDITS.md"), lines.join("\n") + "\n");

const missing = jobs.flatMap((j) => j.files).filter((f) => !fs.existsSync(path.join(OUT, f)));
console.log(missing.length ? `\n${missing.length} dosya eksik${stop ? " (limit nedeniyle)" : ""}.` : "\nTüm görseller tamam.");
