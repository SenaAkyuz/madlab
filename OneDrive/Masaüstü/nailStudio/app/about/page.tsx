import type { Metadata } from "next";
import { site } from "@/config/site";
import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import MeetArtist from "@/components/home/MeetArtist";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: `${site.name} stüdyo hikâyesi, değerleri ve çalışma şekli.`,
};

const values = [
  { t: "Hijyen", d: "Her müşteri için sterilize edilmiş aletler ve tek kullanımlık dosyalar." },
  { t: "Detay", d: "Her tırnağın şekli, kenarı ve parlaklığı tek tek kontrol edilir." },
  { t: "Sakin Ortam", d: "Telefonu bırakıp yavaşlayabileceğin, acele edilmeyen bir koltuk." },
];

export default function AboutPage() {
  return (
    <>
      <div className="container-x pt-10 md:pt-16">
        <SectionTitle as="h1" size="xl">Hakkımda</SectionTitle>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-sand">
            <SafeImage src="/images/atmosphere/about.webp" alt="Parıltılı çalışma masasında takı takılı ellerle tırnak uygulaması" fill priority sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div className="space-y-5 text-[1.05rem] text-ink-soft">
            <p>
              {site.name}, hızlı ve kalabalık salonların arasında küçük bir mola vermek isteyenler için
              açıldı. Randevular birbirine değmeyecek şekilde planlanır; böylece her müşteri aynı özeni
              ve aynı süreyi alır.
            </p>
            <p>
              Aletlerimiz her müşteriden sonra sterilize edilir, dosyalar tek kullanımlıktır. Mümkün
              olduğunda tüy dökmeyen, kokusu hafif, vegan formüllü ürünleri tercih ederiz.
            </p>
            <p>
              Amacımız tırnağını bir süs eşyası gibi değil, kendine ayırdığın küçük bir zaman gibi
              hissettirmek: acele yok, baskı yok, sadece sana uyan bir set.
            </p>
          </div>
        </div>

        <ul className="mt-20 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <li key={v.t} className="border-t border-[var(--line)] pt-6">
              <h2 className="font-display text-3xl italic">{v.t}</h2>
              <p className="mt-3 text-ink-soft">{v.d}</p>
            </li>
          ))}
        </ul>
      </div>
      <MeetArtist />
      <div className="container-x pb-8 text-center">
        <Button href="/book">Randevu Al</Button>
      </div>
    </>
  );
}
