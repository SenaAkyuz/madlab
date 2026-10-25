import Link from "next/link";
import { getCategories } from "@/lib/data";
import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function CategoryCapsules() {
  const categories = await getCategories();
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x">
        {/* Amber stili: başlık görsellerin üstüne taşar */}
        <SectionTitle className="relative z-10 -mb-[0.2em]">Kategoriler</SectionTitle>
      </div>
      <div className="container-x relative">
        <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pt-0 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 xl:grid-cols-6">
          {categories.map((c) => (
            <li key={c.slug} className="w-[46%] shrink-0 snap-start md:w-auto">
              <Link href={`/designs/${c.slug}`} className="group block">
                <div className="relative aspect-[3/5] overflow-hidden rounded-t-full rounded-b-[28px] bg-sand">
                  <SafeImage
                    src={c.cover}
                    alt={c.alt}
                    fill
                    sizes="(min-width:1280px) 190px, (min-width:768px) 30vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="label mt-4 inline-block rounded-full bg-lavender px-4 py-1.5 text-espresso">
                  {c.name}
                </span>
                <p className="mt-2 line-clamp-2 text-[0.85rem] leading-snug text-ink-soft">{c.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
