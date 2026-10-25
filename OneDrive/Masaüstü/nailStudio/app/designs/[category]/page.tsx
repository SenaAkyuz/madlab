import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getCategoryStats, getDesigns } from "@/lib/data";
import { parseFilters } from "@/lib/filters";
import { formatPrice } from "@/lib/format";
import SafeImage from "@/components/ui/SafeImage";
import SectionTitle from "@/components/ui/SectionTitle";
import FilterBar from "@/components/designs/FilterBar";
import DesignGrid from "@/components/designs/DesignGrid";

export async function generateStaticParams() {
  return (await getCategories()).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/designs/[category]">): Promise<Metadata> {
  const cat = await getCategory((await params).category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params, searchParams }: PageProps<"/designs/[category]">) {
  const { category } = await params;
  const cat = await getCategory(category);
  if (!cat) notFound();

  const filters = parseFilters(await searchParams, category);
  const [categories, designs, stats] = await Promise.all([
    getCategories(),
    getDesigns(filters),
    getCategoryStats(category),
  ]);
  const names = Object.fromEntries(categories.map((c) => [c.slug, c.name]));
  const others = categories.filter((c) => c.slug !== category);

  return (
    <div className="container-x pb-8 pt-6 md:pt-10">
      <div className="relative overflow-hidden rounded-[32px] bg-cocoa text-cream">
        <div className="relative aspect-[16/10] sm:aspect-[2.5/1]">
          <SafeImage src={cat.banner} alt={cat.alt} fill priority sizes="(min-width:1280px) 1184px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <h1 className="font-display-tight text-display-l uppercase">{cat.name}</h1>
          <p className="mt-3 max-w-xl text-[0.98rem] text-cream/85">{cat.description}</p>
          <p className="font-mono mt-5 inline-block rounded-full bg-cream/15 px-4 py-2 text-[0.8rem] backdrop-blur-md">
            {stats.count} tasarım · {formatPrice(stats.min, false)}–{formatPrice(stats.max, false)}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Suspense fallback={<div className="h-32" />}>
          <FilterBar categories={[]} lockedCategory={category} total={designs.length} />
        </Suspense>
      </div>
      <div className="pt-10">
        <DesignGrid designs={designs} categoryNames={names} />
      </div>

      <section className="pt-24">
        <SectionTitle className="mb-10">Diğer kategoriler</SectionTitle>
        <ul className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
          {others.map((c) => (
            <li key={c.slug} className="w-[46%] shrink-0 md:w-auto">
              <Link href={`/designs/${c.slug}`} className="group block">
                <div className="relative aspect-[3/5] overflow-hidden rounded-t-full rounded-b-[28px] bg-sand">
                  <SafeImage src={c.cover} alt={c.alt} fill sizes="(min-width:768px) 220px, 46vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="label mt-4 inline-block rounded-full bg-lavender px-4 py-1.5">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
