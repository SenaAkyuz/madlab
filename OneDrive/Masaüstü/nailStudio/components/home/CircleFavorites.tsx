import Link from "next/link";
import { getFavoriteDesigns } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function CircleFavorites() {
  const designs = await getFavoriteDesigns();
  return (
    <section className="section-y relative overflow-hidden">
      <div aria-hidden className="absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-lavender/60" />
      <div className="container-x relative">
        <SectionTitle className="text-center">Haftanın favorileri</SectionTitle>
        <ul className="mt-16 grid gap-14 md:grid-cols-3">
          {designs.map((d) => (
            <li key={d.slug}>
              <Link href={`/designs/${d.categorySlug}/${d.slug}`} className="group block text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full bg-sand">
                  <SafeImage
                    src={d.images[0]}
                    alt={d.alt}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display mt-7 text-[1.6rem]">{d.name}</h3>
                <p className="mx-auto mt-2 max-w-[30ch] text-[0.95rem] text-ink-soft">{d.description}</p>
                <p className="font-mono mt-3">{formatPrice(d.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
