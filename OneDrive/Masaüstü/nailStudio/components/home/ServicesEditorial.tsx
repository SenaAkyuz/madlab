import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";
import { getDesignBySlug } from "@/lib/data";

const picks = [
  { slug: "classic-french", label: "Klasik Manikür" },
  { slug: "starry-night", label: "Nail Art" },
  { slug: "pearl-bride", label: "Özel Tasarım" },
];

// Amber referansı: dev serif başlık + neredeyse köşesiz 3'lü grid
export default async function ServicesEditorial() {
  const items = await Promise.all(picks.map(async (p) => ({ ...p, design: await getDesignBySlug(p.slug) })));
  return (
    <section className="section-y container-x">
      <SectionTitle size="xl" className="relative z-10 -mb-[0.22em] text-center">
        Hizmetler
      </SectionTitle>
      <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6">
        {items.map(({ label, design }) => (
          <li key={label} className="text-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-sand">
              {design && (
                <SafeImage
                  src={design.images[2]}
                  alt={design.alt}
                  fill
                  sizes="(min-width:640px) 33vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>
            <p className="label mt-5 tracking-[0.18em]">{label}</p>
            <Link href="/book" className="underline-link font-condensed mt-2 inline-flex min-h-11 items-center text-[1.05rem] uppercase tracking-[0.1em] hover:text-rosewood">
              Randevu Al
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center">
        <Link href="/services" className="underline-link text-ink-soft hover:text-ink">
          Tüm hizmetler ve fiyat listesi
        </Link>
      </p>
    </section>
  );
}
