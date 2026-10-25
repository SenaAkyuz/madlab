import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getDesignBySlug, getDesigns, getSimilarDesigns } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import DesignGallery from "@/components/designs/DesignGallery";
import DesignSpecs from "@/components/designs/DesignSpecs";
import ExtrasCalculator from "@/components/designs/ExtrasCalculator";
import DesignCard from "@/components/designs/DesignCard";
import Badge from "@/components/ui/Badge";

export async function generateStaticParams() {
  return (await getDesigns()).map((d) => ({ category: d.categorySlug, slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/designs/[category]/[slug]">): Promise<Metadata> {
  const d = await getDesignBySlug((await params).slug);
  if (!d) return {};
  return {
    title: d.name,
    description: d.description,
    openGraph: { images: [d.images[0]] },
  };
}

export default async function DesignPage({ params }: PageProps<"/designs/[category]/[slug]">) {
  const { category, slug } = await params;
  const d = await getDesignBySlug(slug);
  if (!d || d.categorySlug !== category) notFound();

  const [cat, similar, categories] = await Promise.all([
    getCategory(d.categorySlug),
    getSimilarDesigns(d, 4),
    getCategories(),
  ]);
  const names = Object.fromEntries(categories.map((c) => [c.slug, c.name]));

  return (
    <div className="container-x pb-8 pt-6 md:pt-10">
      <nav aria-label="Konum" className="label mb-6 flex flex-wrap items-center gap-2 text-ink-soft">
        <Link href="/designs" className="hover:text-ink">Tasarımlar</Link>
        <span aria-hidden>/</span>
        <Link href={`/designs/${d.categorySlug}`} className="hover:text-ink">{cat?.name}</Link>
        <span aria-hidden>/</span>
        <span className="text-ink" aria-current="page">{d.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <DesignGallery images={d.images} alt={d.alt} />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            {d.badge && <Badge kind={d.badge} />}
          </div>
          <h1 className="font-display-tight mt-3 text-display-l uppercase !leading-[1.04]">{d.name}</h1>
          <p className="font-mono mt-4 text-2xl">{formatPrice(d.price)}</p>
          <p className="mt-4 max-w-[55ch] text-ink-soft">{d.description}</p>
          <div className="mt-8">
            <DesignSpecs design={d} />
          </div>
          <div className="mt-10">
            <ExtrasCalculator design={d} />
          </div>
        </div>
      </div>

      <section className="pt-24">
        <h2 className="font-display mb-8 text-4xl">Benzer tasarımlar</h2>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {similar.map((s) => (
            <li key={s.slug}>
              <DesignCard design={s} categoryName={names[s.categorySlug] ?? ""} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
