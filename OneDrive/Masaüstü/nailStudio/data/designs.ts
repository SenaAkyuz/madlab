import type { Design, Badge, Shape, Length, Extra } from "@/lib/types";

const SW: Record<string, string> = {
  "Gümüş": "#C9C7CF", "Platin": "#E5E4E2", "İnci beyazı": "#F4EFEA", "Lavanta": "#CDBFE6",
  "Mocha": "#6F4E37", "Krem": "#F1E6D6", "Gül altını": "#D9A58F", "Pudra": "#EBC9C4",
  "Siyah": "#1E1A1C", "Süt beyazı": "#FAF6F0", "Nude": "#E3C3AC", "Sütlü nude": "#EBD5C4",
  "Beyaz": "#FFFFFF", "Pudra pembe": "#F1CFCF", "Şeffaf": "#F3E9E6", "Altın": "#C9A24B",
  "Kırmızı": "#B8212F", "Latte": "#B89478", "Kahve": "#4A3324", "Blush": "#F6D3DC",
  "Gri-gümüş": "#B9B8BC", "Bordo": "#6B1F2E", "Pembe": "#E9A3BE", "Seçmeli": "#D8C7B6",
  "İnci": "#F1ECE6", "Kristal": "#DDE6F0", "Mocha→lavanta": "#9C86A6",
};

type Row = {
  n: number; name: string; cat: string; price: number; dur: number;
  shape: Shape; len: Length; tech: string; colors: string[]; badge?: Badge;
  diff: 1 | 2 | 3 | 4; tags: string[]; desc: string; inc: string; extras?: Extra[];
};

const BASE = "Tırnak bakımı, kütikül düzenleme";
const X = {
  stone: { label: "Taş süsleme (parmak başı)", price: 50 },
  ombre: { label: "Ombre geçiş", price: 100 },
  ext: { label: "Uzatma (tırnak başı)", price: 200 },
  art: { label: "Nail art (parmak başı)", price: 40 },
};

const rows: Row[] = [
  { n: 1, name: "Liquid Silver", cat: "chrome-aynali", price: 750, dur: 120, shape: "Badem", len: "Orta", tech: "Jel + krom pigment", colors: ["Gümüş", "Platin"], badge: "Çok Tercih Edilen", diff: 3, tags: ["krom", "gümüş", "aynalı", "parlak"],
    desc: "Eriyik gümüş gibi akan, tek renk aynalı bir yüzey. Sade kıyafetlerin yanında tek başına dikkat çeker.",
    inc: `${BASE}, krom pigment uygulaması, üst kat parlatıcı, el masajı`, extras: [X.stone, X.ext, X.art] },
  { n: 2, name: "Pearl Mirror", cat: "chrome-aynali", price: 800, dur: 120, shape: "Oval", len: "Kısa", tech: "Jel + inci krom", colors: ["İnci beyazı", "Lavanta"], badge: "Yeni", diff: 3, tags: ["inci", "krom", "lavanta", "kısa"],
    desc: "Işık değiştikçe lavantaya kayan sedefli beyaz bir yüzey. Kısa ovallerde nazik ve zarif görünür.",
    inc: `${BASE}, inci krom katmanı, ince dosya şekillendirme, el masajı`, extras: [X.stone, X.ombre, X.art] },
  { n: 3, name: "Lavender Chrome", cat: "chrome-aynali", price: 780, dur: 120, shape: "Badem", len: "Orta", tech: "Jel + krom", colors: ["Lavanta", "Gümüş"], diff: 3, tags: ["lavanta", "krom", "badem"],
    desc: "Soluk lavanta zemin üstüne gümüş krom bir perde. Gün ışığında yumuşak, akşam ışığında metalik görünür.",
    inc: `${BASE}, lavanta baz jel, gümüş krom finiş, nemlendirici bakım`, extras: [X.stone, X.ext, X.art] },
  { n: 4, name: "Mocha Glaze", cat: "chrome-aynali", price: 760, dur: 110, shape: "Oval", len: "Kısa", tech: "Jel + glazed donut", colors: ["Mocha", "Krem"], badge: "Çok Tercih Edilen", diff: 2, tags: ["glazed donut", "mocha", "sütlü"],
    desc: "Sıcak kahve tonunun üstünde sütlü, çiğ bir parlaklık. Çikolata ve krem sevenler için ışıltılı ama sakin bir set.",
    inc: `${BASE}, glazed donut tozu, parlak üst kat, el masajı`, extras: [X.stone, X.art] },
  { n: 5, name: "Rose Gold Aura", cat: "chrome-aynali", price: 820, dur: 130, shape: "Stiletto", len: "Uzun", tech: "Gel-X + krom", colors: ["Gül altını", "Pudra"], diff: 4, tags: ["gül altını", "stiletto", "uzun", "gel-x"],
    desc: "Pudra zeminde gül altını bir hare; uzun stiletto formunu daha da keskinleştirir. Davet ve akşam yemekleri için biçilmiş kaftan.",
    inc: `${BASE}, Gel-X uzatma, gül altını krom, bakım yağı`, extras: [X.stone, X.ext, X.ombre] },
  { n: 6, name: "Midnight Mirror", cat: "chrome-aynali", price: 790, dur: 120, shape: "Coffin", len: "Orta", tech: "Jel + aynalı toz", colors: ["Siyah", "Gümüş"], diff: 3, tags: ["siyah", "aynalı", "coffin", "gece"],
    desc: "Derin siyahın üstünde buz gibi gümüş yansımalar. Gece çıkışlarında ve koyu kombinlerde en iyi halini gösterir.",
    inc: `${BASE}, siyah baz, aynalı toz finiş, nemlendirici bakım`, extras: [X.stone, X.art] },

  { n: 7, name: "Classic French", cat: "french-minimal", price: 550, dur: 90, shape: "Kare", len: "Kısa", tech: "Jel", colors: ["Süt beyazı", "Nude"], badge: "Çok Tercih Edilen", diff: 2, tags: ["french", "klasik", "kare", "ofis"],
    desc: "Net beyaz uç, doğal nude zemin. Hiçbir kıyafetle yarışmayan, her zaman temiz duran klasik.",
    inc: `${BASE}, el çizimi beyaz uç, kalıcı oje, el masajı`, extras: [X.stone, X.art] },
  { n: 8, name: "Milky Almond", cat: "french-minimal", price: 520, dur: 80, shape: "Badem", len: "Kısa", tech: "Jel", colors: ["Sütlü nude"], diff: 1, tags: ["sütlü", "badem", "doğal"],
    desc: "Tırnağın kendi rengini bir ton aydınlatan sütlü nude. Bakımlı görünmek isteyip fark edilmek istemeyenlere.",
    inc: `${BASE}, badem şekillendirme, sütlü jel, el masajı`, extras: [X.art, X.ext] },
  { n: 9, name: "Micro French", cat: "french-minimal", price: 580, dur: 90, shape: "Oval", len: "Kısa", tech: "Jel", colors: ["Nude", "Beyaz"], badge: "Yeni", diff: 3, tags: ["micro french", "ince uç", "oval"],
    desc: "Neredeyse bir kıl inceliğinde beyaz uç çizgisi. Klasik French'in modern, daha az gösterişli hali.",
    inc: `${BASE}, ince uç çizimi, parlak üst kat, nemlendirici bakım`, extras: [X.stone, X.art] },
  { n: 10, name: "Soft Blush Gloss", cat: "french-minimal", price: 500, dur: 75, shape: "Oval", len: "Kısa", tech: "Jel", colors: ["Pudra pembe"], diff: 1, tags: ["pudra", "pembe", "parlak"],
    desc: "Yanak kızarıklığı gibi hafif, camsı parlak pudra pembe. Günlük kullanım için en kolay, en sevimli seçim.",
    inc: `${BASE}, pudra pembe jel, cam parlaklığında üst kat`, extras: [X.art, X.stone] },
  { n: 11, name: "Cocoa French", cat: "french-minimal", price: 600, dur: 95, shape: "Badem", len: "Orta", tech: "Jel", colors: ["Mocha", "Krem"], diff: 2, tags: ["french", "mocha", "kahve"],
    desc: "Beyaz yerine sıcak mocha uç; kremsi zeminle birlikte sonbaharın en yumuşak French'i.",
    inc: `${BASE}, mocha uç çizimi, krem baz, el masajı`, extras: [X.stone, X.ombre, X.art] },
  { n: 12, name: "Lavender French", cat: "french-minimal", price: 620, dur: 95, shape: "Badem", len: "Orta", tech: "Jel", colors: ["Lavanta", "Beyaz"], badge: "Yeni", diff: 2, tags: ["french", "lavanta", "pastel"],
    desc: "Süt beyazı zemin, lavanta uç. Pastel seven ama sade kalmak isteyenler için küçük bir sürpriz.",
    inc: `${BASE}, lavanta uç çizimi, süt beyazı baz, nemlendirici bakım`, extras: [X.stone, X.art] },

  { n: 13, name: "Starry Night", cat: "nail-art", price: 900, dur: 140, shape: "Badem", len: "Orta", tech: "El boyaması", colors: ["Şeffaf", "Siyah", "Altın"], badge: "Çok Tercih Edilen", diff: 4, tags: ["yıldız", "gece", "el boyaması", "altın"],
    desc: "Şeffaf zeminde elle çizilmiş siyah yıldızlar ve altın noktalar. Her parmakta farklı bir gökyüzü köşesi.",
    inc: `${BASE}, el boyaması yıldız motifleri, altın folyo detay, el masajı`, extras: [X.stone, X.art, X.ext] },
  { n: 14, name: "Wildflower", cat: "nail-art", price: 880, dur: 135, shape: "Oval", len: "Orta", tech: "El boyaması", colors: ["Pudra", "Lavanta", "Beyaz"], diff: 4, tags: ["çiçek", "bahar", "el boyaması"],
    desc: "Kır çiçeği buketi gibi serpilmiş minik beyaz ve lavanta çiçekler. Yaz davetleri ve doğum günleri için taze bir set.",
    inc: `${BASE}, çiçek motifleri, sarı merkez detayları, parlak üst kat`, extras: [X.stone, X.art] },
  { n: 15, name: "Abstract Swirl", cat: "nail-art", price: 850, dur: 130, shape: "Badem", len: "Orta", tech: "Jel + çizim", colors: ["Mocha", "Krem", "Gümüş"], badge: "Yeni", diff: 3, tags: ["soyut", "çizgi", "girdap"],
    desc: "Mocha ve krem arasında akan, gümüş ince çizgilerle bölünen soyut dalgalar. Küçük bir sanat eseri gibi taşırsın.",
    inc: `${BASE}, serbest çizim, gümüş çizgi detayları, nemlendirici bakım`, extras: [X.stone, X.art, X.ombre] },
  { n: 16, name: "Cherry Charm", cat: "nail-art", price: 870, dur: 130, shape: "Kare", len: "Kısa", tech: "El boyaması", colors: ["Kırmızı", "Krem"], diff: 3, tags: ["kiraz", "kırmızı", "eğlenceli"],
    desc: "Krem zeminde tek tek boyanmış parlak kirazlar. Kısa karelerde oyunbaz ve ferah durur.",
    inc: `${BASE}, el boyaması kiraz motifleri, 3 boyutlu parlak finiş`, extras: [X.art, X.stone] },
  { n: 17, name: "Zebra Latte", cat: "nail-art", price: 860, dur: 130, shape: "Oval", len: "Orta", tech: "El boyaması", colors: ["Latte", "Kahve"], diff: 3, tags: ["zebra", "latte", "desen"],
    desc: "Latte zeminde kahve rengi zebra çizgileri. Hayvan desenini yumuşak, toprak tonlarda sevenlere.",
    inc: `${BASE}, zebra çizgileri, mat-parlak kontrast, el masajı`, extras: [X.art, X.stone] },
  { n: 18, name: "Tiny Hearts", cat: "nail-art", price: 820, dur: 120, shape: "Oval", len: "Kısa", tech: "Jel + sticker", colors: ["Blush", "Beyaz"], diff: 2, tags: ["kalp", "sevgililer", "sevimli"],
    desc: "Blush zeminde minik beyaz kalpler. Sevgililer Günü'nde ya da sadece moral için.",
    inc: `${BASE}, kalp sticker ve çizimleri, parlak üst kat`, extras: [X.art, X.stone] },

  { n: 19, name: "Mocha Brown", cat: "jel-renkler", price: 450, dur: 70, shape: "Oval", len: "Kısa", tech: "Jel oje", colors: ["Mocha"], badge: "Çok Tercih Edilen", diff: 1, tags: ["mocha", "kahve", "düz renk"],
    desc: "Marka paletinin kalbi: sıcak, derin, sütlü kahve. Her ten tonuna oturan toprak bir klasik.",
    inc: `${BASE}, iki kat jel oje, parlak üst kat`, extras: [X.art, X.stone] },
  { n: 20, name: "Pale Lavender", cat: "jel-renkler", price: 450, dur: 70, shape: "Oval", len: "Kısa", tech: "Jel oje", colors: ["Lavanta"], diff: 1, tags: ["lavanta", "pastel", "düz renk"],
    desc: "Bulutlu bir sabahın rengi; soluk, serin ve yumuşak lavanta. Yaz ve ilkbahar için ideal.",
    inc: `${BASE}, iki kat jel oje, parlak üst kat`, extras: [X.art, X.stone] },
  { n: 21, name: "Platinum Cloud", cat: "jel-renkler", price: 450, dur: 70, shape: "Kare", len: "Kısa", tech: "Jel oje", colors: ["Gri-gümüş"], diff: 1, tags: ["gri", "gümüş", "modern"],
    desc: "Yağmur öncesi gökyüzü gibi nötr, hafif metalik gri. Minimalist ve ofis dostu bir seçim.",
    inc: `${BASE}, iki kat jel oje, parlak üst kat`, extras: [X.art, X.stone] },
  { n: 22, name: "Cherry Wine", cat: "jel-renkler", price: 470, dur: 70, shape: "Badem", len: "Kısa", tech: "Jel oje", colors: ["Bordo"], badge: "Yeni", diff: 1, tags: ["bordo", "şarap", "sonbahar"],
    desc: "Eski şarap kadar derin, kiraz kadar canlı bordo. Sonbahar ve kış kıyafetleriyle en iyi arkadaşın.",
    inc: `${BASE}, iki kat jel oje, derin parlak üst kat`, extras: [X.art, X.stone] },
  { n: 23, name: "Bubblegum Pink", cat: "jel-renkler", price: 450, dur: 70, shape: "Oval", len: "Kısa", tech: "Jel oje", colors: ["Pembe"], diff: 1, tags: ["pembe", "neşeli", "yaz"],
    desc: "Sakız pembesi, cıvıl cıvıl ve tatlı. Bir fincan kahve kadar küçük bir mutluluk.",
    inc: `${BASE}, iki kat jel oje, parlak üst kat`, extras: [X.art, X.stone] },
  { n: 24, name: "Ombre Dusk", cat: "jel-renkler", price: 560, dur: 90, shape: "Badem", len: "Orta", tech: "Jel ombre", colors: ["Mocha→lavanta"], diff: 3, tags: ["ombre", "gün batımı", "geçiş"],
    desc: "Mocha'dan lavantaya yumuşak geçiş; gün batımının hemen sonrasındaki gökyüzü gibi. Paletin iki ana rengi tek elde.",
    inc: `${BASE}, sünger ombre geçişi, parlak üst kat, el masajı`, extras: [X.stone, X.art, X.ext] },

  { n: 25, name: "Almond Gel-X", cat: "protez-uzatma", price: 950, dur: 150, shape: "Badem", len: "Orta", tech: "Gel-X", colors: ["Nude"], badge: "Çok Tercih Edilen", diff: 2, tags: ["gel-x", "badem", "nude", "uzatma"],
    desc: "Hafif, doğal görünen ve çabuk uygulanan Gel-X uzatma. Badem form el çizgisini uzatır.",
    inc: `${BASE}, Gel-X uzatma, nude renk kaplama, bakım yağı`, extras: [X.stone, X.art, X.ombre] },
  { n: 26, name: "Coffin Acrylic", cat: "protez-uzatma", price: 1000, dur: 160, shape: "Coffin", len: "Uzun", tech: "Akrilik", colors: ["Pudra"], diff: 3, tags: ["akrilik", "coffin", "uzun"],
    desc: "Geniş, düz uçlu uzun coffin form; pudra tonunda sağlam akrilik yapı. Yoğun tempoda da şeklini korur.",
    inc: `${BASE}, akrilik uzatma, pudra renk, bakım yağı`, extras: [X.stone, X.art, X.ombre] },
  { n: 27, name: "Stiletto Glam", cat: "protez-uzatma", price: 1050, dur: 170, shape: "Stiletto", len: "Uzun", tech: "Akrilik", colors: ["Bordo", "Gümüş"], diff: 4, tags: ["stiletto", "bordo", "iddialı"],
    desc: "Bordo zeminde gümüş ince çizgilerle bitmiş keskin stiletto. Sahnede olmak isteyenler için.",
    inc: `${BASE}, akrilik stiletto, gümüş detay çizgileri, bakım yağı`, extras: [X.stone, X.art] },
  { n: 28, name: "Square Short Set", cat: "protez-uzatma", price: 850, dur: 130, shape: "Kare", len: "Kısa", tech: "Polygel", colors: ["Nude"], diff: 2, tags: ["polygel", "kare", "kısa"],
    desc: "Kısa, düz hatlı ve çok dayanıklı polygel set. Klavye başında çalışanlar için pratik ve şık.",
    inc: `${BASE}, polygel yapı, nude kaplama, nemlendirici bakım`, extras: [X.art, X.stone, X.ombre] },
  { n: 29, name: "Russian Manicure + Fill", cat: "protez-uzatma", price: 700, dur: 100, shape: "Oval", len: "Kısa", tech: "Rus manikürü + dolgu", colors: ["Seçmeli"], badge: "Yeni", diff: 3, tags: ["rus manikürü", "dolgu", "bakım"],
    desc: "Kütikül çevresi hassas çalışılarak temizlenir ve dolgu yenilenir. Kendi renginle gelip rengini seçebilirsin.",
    inc: `${BASE}, hassas kütikül temizliği, dolgu yenileme, renk seçimi`, extras: [X.art, X.stone] },
  { n: 30, name: "Long Almond Chrome", cat: "protez-uzatma", price: 1150, dur: 180, shape: "Badem", len: "Uzun", tech: "Gel-X + krom", colors: ["Lavanta", "Gümüş"], diff: 4, tags: ["uzun badem", "krom", "lavanta"],
    desc: "Uzun badem formu, lavanta krom bir yansımayla tamamlıyor. Hem uzun hem narin görünmek isteyenlere.",
    inc: `${BASE}, Gel-X uzatma, lavanta-gümüş krom, bakım yağı`, extras: [X.stone, X.art, X.ombre] },

  { n: 31, name: "Pearl Bride", cat: "gelin-ozel", price: 1400, dur: 180, shape: "Badem", len: "Orta", tech: "Jel + inci", colors: ["İnci", "Süt beyazı"], badge: "Gelin", diff: 4, tags: ["gelin", "inci", "düğün"],
    desc: "Süt beyazı zeminde tek tek yerleştirilmiş küçük inciler. Gelinliğin dantel detayıyla konuşur.",
    inc: `Deneme randevusu, ${BASE.toLowerCase()}, inci süsleme, bakım yağı`, extras: [X.stone, X.art, X.ext] },
  { n: 32, name: "Crystal Veil", cat: "gelin-ozel", price: 1500, dur: 190, shape: "Stiletto", len: "Uzun", tech: "Gel-X + taş", colors: ["Şeffaf", "Kristal"], badge: "Gelin", diff: 4, tags: ["kristal", "taş", "gelin", "stiletto"],
    desc: "Şeffaf zeminde ince bir tül gibi dizilmiş kristaller. Uzun stiletto formu bütün ışığı toplar.",
    inc: `Deneme randevusu, ${BASE.toLowerCase()}, Gel-X uzatma, kristal süsleme`, extras: [X.stone, X.art] },
  { n: 33, name: "Gold Leaf Romance", cat: "gelin-ozel", price: 1350, dur: 170, shape: "Oval", len: "Orta", tech: "Jel + altın yaprak", colors: ["Nude", "Altın"], diff: 3, tags: ["altın yaprak", "nikah", "romantik"],
    desc: "Nude zeminde dağınık altın yaprak parçaları. Nikah ve söz için sıcak ve zarif bir seçim.",
    inc: `Deneme randevusu, ${BASE.toLowerCase()}, altın yaprak uygulaması`, extras: [X.stone, X.art] },
  { n: 34, name: "Engagement Glow", cat: "gelin-ozel", price: 1200, dur: 150, shape: "Badem", len: "Orta", tech: "Jel", colors: ["Pudra", "Gül altını"], badge: "Yeni", diff: 2, tags: ["nişan", "gül altını", "ışıltı"],
    desc: "Yüzüğün ışıltısını bozmayan pudra bir zemin; ince gül altını parıltılar. Nişan fotoğrafları için tasarlandı.",
    inc: `Deneme randevusu, ${BASE.toLowerCase()}, ince gül altını parıltı`, extras: [X.stone, X.art, X.ombre] },
  { n: 35, name: "Silk Ribbon", cat: "gelin-ozel", price: 1300, dur: 160, shape: "Kare", len: "Orta", tech: "Jel + 3D detay", colors: ["Beyaz", "Blush"], diff: 4, tags: ["kurdele", "3d", "gelin"],
    desc: "Beyaz zeminde blush renkli minik 3D kurdeleler. Gelin hazırlığında eğlenceli bir detay.",
    inc: `Deneme randevusu, ${BASE.toLowerCase()}, 3D kurdele detayları`, extras: [X.stone, X.art] },
  { n: 36, name: "Evening Velvet", cat: "gelin-ozel", price: 1100, dur: 140, shape: "Coffin", len: "Orta", tech: "Jel + glitter", colors: ["Mocha", "Altın"], diff: 3, tags: ["glitter", "akşam", "davet"],
    desc: "Kadife gibi mocha zemin ve parmak uçlarında altın glitter dökülmesi. Akşam davetlerinde göz alıcı.",
    inc: `${BASE}, glitter geçişi, mat-parlak kontrast, bakım yağı`, extras: [X.stone, X.art, X.ombre] },
];

export const designs: Design[] = rows.map((r) => {
  const slug = r.name
    .toLowerCase()
    .replace(/\+/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const dir = `/images/${r.cat}`;
  const heavy = /Gel-X|Akrilik|Polygel/.test(r.tech);
  return {
    slug,
    name: r.name,
    categorySlug: r.cat,
    price: r.price,
    duration: r.dur,
    shape: r.shape,
    length: r.len,
    technique: r.tech,
    colors: r.colors,
    swatches: r.colors.map((c) => SW[c] ?? "#D8C7B6"),
    tags: r.tags,
    badge: r.badge,
    difficulty: r.diff,
    longevity: heavy ? "4–5 hafta" : "3–4 hafta",
    description: r.desc,
    includes: r.inc
      .split(",")
      .map((s) => s.trim())
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1)),
    extras: r.extras ?? [X.stone, X.art],
    images: [1, 2, 3, 4].map((i) => (i === 1 ? `${dir}/${slug}.webp` : `${dir}/${slug}-${i}.webp`)),
    alt: `${r.name}: ${r.colors.join(", ").toLowerCase()} tonlarında ${r.shape.toLowerCase()} şekilli ${r.tech.toLowerCase()} tırnak tasarımı`,
    order: r.n,
  };
});
