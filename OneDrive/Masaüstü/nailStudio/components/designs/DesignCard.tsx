import Link from "next/link";
import type { Design } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import SafeImage from "@/components/ui/SafeImage";
import Badge from "@/components/ui/Badge";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import FavButton from "./FavButton";

interface Props {
  design: Design;
  categoryName: string;
  priority?: boolean;
  sizes?: string;
}

export default function DesignCard({
  design: d,
  categoryName,
  priority,
  sizes = "(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw",
}: Props) {
  return (
    <article className="card-shadow group relative overflow-hidden rounded-[28px] bg-cream transition-transform duration-500 hover:-translate-y-1">
      <Link
        href={`/designs/${d.categorySlug}/${d.slug}`}
        className="block focus-visible:outline-offset-[-4px]"
        aria-label={`${d.name}, ${formatPrice(d.price)}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sand">
          <SafeImage
            src={d.images[0]}
            alt={d.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <span className="label absolute left-3 top-3 rounded-full bg-cream/60 px-3 py-1.5 text-espresso backdrop-blur-md">
            {categoryName}
          </span>
          {d.badge && (
            <span className="absolute bottom-3 left-3">
              <Badge kind={d.badge} />
            </span>
          )}
        </div>
        <div className="px-4 pb-4 pt-4 sm:px-5">
          <h3 className="font-display text-[1.25rem] leading-tight">{d.name}</h3>
          <p className="mt-1 text-[0.8125rem] text-ink-soft">
            {d.shape} • {d.length} • {d.technique.split(" + ")[0]}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[0.9rem]">{formatPrice(d.price)}</span>
            <span
              aria-hidden
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-mocha transition-colors group-hover:bg-lavender"
            >
              <ArrowUpRightIcon width={18} height={18} />
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute right-3 top-3">
        <FavButton slug={d.slug} name={d.name} />
      </div>
    </article>
  );
}
