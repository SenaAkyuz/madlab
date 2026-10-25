import Link from "next/link";
import { getFeaturedDesigns } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import SafeImage from "@/components/ui/SafeImage";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { FlowerIcon, HeartIcon, SparkleIcon } from "@/components/ui/Icons";

const icons = [HeartIcon, FlowerIcon, SparkleIcon];

export default async function FeaturedScalloped() {
  const designs = await getFeaturedDesigns(6);
  return (
    <section className="section-y bg-sand">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>Öne çıkanlar</SectionTitle>
          <Button href="/designs" variant="rosewood">
            Tümünü gör
          </Button>
        </div>
        <ul className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={d.slug}>
                <Link href={`/designs/${d.categorySlug}/${d.slug}`} className="group block text-center">
                  <div className="relative">
                    <div className="scallop-bottom relative aspect-[4/4.6] overflow-hidden bg-cream">
                      <SafeImage
                        src={d.images[0]}
                        alt={d.alt}
                        fill
                        sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-rosewood text-cream transition-transform duration-500 group-hover:rotate-12">
                      <Icon width={22} height={22} />
                    </span>
                  </div>
                  <h3 className="font-display mt-12 text-[1.6rem] leading-tight">{d.name}</h3>
                  <p className="mx-auto mt-2 line-clamp-2 max-w-[32ch] text-[0.95rem] text-ink-soft">{d.description}</p>
                  <p className="font-mono mt-3 text-[0.95rem]">{formatPrice(d.price)}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
