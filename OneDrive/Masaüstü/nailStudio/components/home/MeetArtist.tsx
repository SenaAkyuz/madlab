import SafeImage from "@/components/ui/SafeImage";
import Button from "@/components/ui/Button";

const stats = [
  { value: "8", unit: "yıl", label: "deneyim" },
  { value: "4.000+", unit: "", label: "tamamlanan set" },
  { value: "1:1", unit: "", label: "kişiye özel set" },
];

// Koyu, kıvrımlı bir bant: kutu yok; iki yuvarlak portre üst üste biner, metin serbest akar
export default function MeetArtist() {
  return (
    <section className="py-6 sm:py-10">
      <div className="relative overflow-hidden bg-espresso text-cream [border-radius:50%_50%_50%_50%/64px_64px_64px_64px] sm:[border-radius:50%_50%_50%_50%/120px_120px_120px_120px]">
        {/* yumuşak ışık lekeleri */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 size-[520px] rounded-full bg-lilac-deep/25 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 size-[420px] rounded-full bg-rosewood/30 blur-3xl" />

        <div className="container-x relative grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-44">
          {/* Yuvarlak portreler */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square w-[82%] overflow-hidden rounded-full ring-1 ring-cream/20">
              <SafeImage
                src="/images/artist/portrait.webp"
                alt="Elinde tırnak numune çubukları tutan nail artist"
                fill
                sizes="(min-width:1024px) 430px, 80vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
            <div className="float-slow absolute -bottom-6 right-0 aspect-square w-[52%] overflow-hidden rounded-full border-[6px] border-espresso ring-1 ring-cream/20">
              <SafeImage
                src="/images/artist/work.webp"
                alt="Tırnak frezesiyle çalışan nail artist"
                fill
                sizes="(min-width:1024px) 270px, 45vw"
                className="object-cover"
                style={{ objectPosition: "50% 38%" }}
              />
            </div>
            <span aria-hidden className="absolute -left-4 bottom-[18%] size-20 rounded-full border border-blush/60" />
            <span aria-hidden className="absolute right-[6%] top-0 size-6 rounded-full bg-blush" />
          </div>

          {/* Metin */}
          <div>
            <p className="label text-lavender">Sanatçıyla tanış</p>
            <h2 className="font-display-tight mt-4 text-display-l uppercase !leading-[1.04]">
              Merhaba,
              <br />
              <span className="font-script normal-case text-blush">ben Olivia.</span>
            </h2>
            <p className="mt-6 max-w-[48ch] leading-relaxed text-cream/75">
              Temiz, kişiye özel setlerde uzmanlaşmış sertifikalı bir nail artistiyim. Sade ve zarif
              tasarımlardan detaylı nail art&apos;a kadar her randevu tırnağına, yaşam tarzına ve sevdiğin
              görünüme göre şekillenir.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {stats.map((s, i) => (
                <div key={s.label} className={i ? "border-l border-cream/20 pl-10" : ""}>
                  <dt className="font-display text-4xl leading-none sm:text-5xl">
                    {s.value}
                    {s.unit && <span className="ml-1 text-2xl text-blush">{s.unit}</span>}
                  </dt>
                  <dd className="label mt-2 text-cream/60">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button href="/book" variant="blush">
                Randevu Al
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
