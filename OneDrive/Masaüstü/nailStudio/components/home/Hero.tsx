"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { site } from "@/config/site";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";

const stats = ["4.000+ set", "8 yıl deneyim", "Sertifikalı"];

const items = [
  { src: "/images/showcase/1.webp", alt: "Üç kadın, ellerinde farklı tırnak tasarımları", label: "Fransız & detay", arch: false },
  { src: "/images/showcase/2.webp", alt: "Dört model, renkli desenli badem tırnaklar", label: "Renkli nail art", arch: true },
  { src: "/images/showcase/3.webp", alt: "Farklı ten tonlarında ellerin çember kompozisyonu", label: "Jel renkler", arch: false },
  { src: "/images/showcase/4.webp", alt: "Kokteyl kadehi tutan desenli tırnaklar", label: "Akşam şıklığı", arch: true },
  { src: "/images/showcase/5.webp", alt: "Gümüş ve yeşil krom badem tırnaklar", label: "Krom detaylar", arch: false },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: easeOut },
});

// Yatay, sürekli kayan galeri: üzerine gelince durur; hareketi azaltanlarda elle kaydırılır
function Slider() {
  const row = [...items, ...items];
  return (
    <div className="no-scrollbar motion-reduce:overflow-x-auto">
      <div className="marquee-track flex hover:[animation-play-state:paused]" style={{ animationDuration: "55s" }}>
        {[0, 1].map((k) => (
          <ul key={k} aria-hidden={k === 1} className="flex shrink-0 items-end gap-4 pr-4 md:gap-6 md:pr-6">
            {row.map((it, i) => (
              <li key={i} className={`w-[62vw] shrink-0 sm:w-[300px] lg:w-[320px] ${i % 2 ? "sm:mb-10" : ""}`}>
                <div className={`relative aspect-[3/4] overflow-hidden bg-sand ${it.arch ? "rounded-t-[999px] rounded-b-[28px]" : "rounded-[28px]"}`}>
                  <SafeImage
                    src={it.src}
                    alt={it.alt}
                    fill
                    priority={k === 0 && i < 3}
                    sizes="(min-width:1024px) 320px, (min-width:640px) 300px, 62vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <span className="label mt-3 inline-block rounded-full bg-lavender px-4 py-1.5 text-espresso">{it.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

// Dönen yazı rozeti: randevuya yönlendirir
function Badge() {
  return (
    <Link
      href="/book"
      aria-label="Randevu al"
      className="relative hidden size-[116px] shrink-0 place-items-center rounded-full bg-blush text-espresso shadow-lg transition-transform hover:scale-105 md:grid"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="hero-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="10.5" letterSpacing="2.4" fill="currentColor" className="font-mono uppercase">
          <textPath href="#hero-ring">Randevu al • Randevu al • Randevu al •</textPath>
        </text>
      </motion.svg>
      <span className="text-2xl leading-none" aria-hidden>
        ↗
      </span>
    </Link>
  );
}

// İlk ekran: dev başlık + slogan + eylem, altında yatay kayan galeri
export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="overflow-hidden pb-6 pt-8 sm:pt-12">
        <div className="container-x grid items-end gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div>
            <motion.p {...rise(0.05, 12)} className="label text-ink-soft">
              Hoş geldin
            </motion.p>
            <h1 className="relative mt-3">
              <span className="sr-only">
                {site.shortName} {site.script}
              </span>
              <span aria-hidden className="font-condensed block whitespace-nowrap text-[clamp(5.5rem,22vw,12.5rem)] leading-[0.82] lg:text-[clamp(6rem,13.5vw,12.5rem)] tracking-[0.03em] text-mocha">
                {site.shortName.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: "55%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: easeOut }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
              <motion.span
                aria-hidden
                {...rise(0.8, 14)}
                className="font-script -mt-[0.1em] block -rotate-3 pl-[4%] text-[clamp(3rem,9vw,6.5rem)] leading-none text-lilac-deep"
              >
                {site.script}
              </motion.span>
            </h1>
          </div>

          <div className="flex flex-col gap-6 lg:pb-4">
            <motion.p {...rise(0.4)} className="max-w-md text-[1.05rem] text-ink-soft">
              {site.tagline} Özenli bakım, kusursuz detaylar, acele etmeyen bir deneyim.
            </motion.p>
            <motion.div {...rise(0.5)} className="flex flex-wrap items-center gap-3">
              <Button href="/book" variant="mocha">
                Randevu Al
              </Button>
              <Button href="/designs" variant="outline">
                Tasarımları Gez
              </Button>
              <Badge />
            </motion.div>
            <motion.ul {...rise(0.6, 12)} className="flex flex-wrap gap-2">
              {stats.map((s) => (
                <li key={s} className="font-mono rounded-full border border-[var(--line)] bg-cream px-4 py-1.5 text-[0.75rem]">
                  {s}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div {...rise(0.7, 40)} className="mt-10 md:mt-14">
          <Slider />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
