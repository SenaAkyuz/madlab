import { Suspense } from "react";
import type { Metadata } from "next";
import { getCategories, getDesigns } from "@/lib/data";
import { parseFilters } from "@/lib/filters";
import SectionTitle from "@/components/ui/SectionTitle";
import FilterBar from "@/components/designs/FilterBar";
import DesignGrid from "@/components/designs/DesignGrid";

export const metadata: Metadata = {
  title: "Tasarımlar",
  description: "36 tırnak tasarımı: chrome, French, nail art, jel, protez ve gelin setleri. Fiyat, süre ve özellikleriyle gez.",
};

export default async function DesignsPage({ searchParams }: PageProps<"/designs">) {
  const filters = parseFilters(await searchParams);
  const [categories, designs] = await Promise.all([getCategories(), getDesigns(filters)]);
  const names = Object.fromEntries(categories.map((c) => [c.slug, c.name]));

  return (
    <div className="container-x pb-8 pt-10 md:pt-16">
      <SectionTitle as="h1" size="xl" className="mb-10">
        Tasarımlar
      </SectionTitle>
      <Suspense fallback={<div className="h-40" />}>
        <FilterBar
          categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
          total={designs.length}
        />
      </Suspense>
      <div className="pt-10">
        <DesignGrid designs={designs} categoryNames={names} />
      </div>
    </div>
  );
}
