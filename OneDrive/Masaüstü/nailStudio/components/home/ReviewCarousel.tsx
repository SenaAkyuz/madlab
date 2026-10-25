"use client";

import { useRef } from "react";
import type { Review } from "@/lib/types";
import { ChevronIcon, StarIcon } from "@/components/ui/Icons";

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="mt-14">
      <ul
        ref={ref}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
        aria-label="Müşteri yorumları"
      >
        {reviews.map((r) => (
          <li
            key={r.name + r.service}
            className="w-[84%] shrink-0 snap-start rounded-[28px] bg-platinum p-7 text-ink sm:w-[46%] lg:w-[calc(25%-12px)]"
          >
            <div className="flex gap-0.5 text-rosewood" role="img" aria-label={`${r.stars} yıldız`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={18} height={18} filled={i < r.stars} />
              ))}
            </div>
            <p className="mt-4 text-[0.98rem] leading-relaxed">{r.text}</p>
            <p className="mt-5 font-medium">{r.name}</p>
            <p className="font-mono text-[0.78rem] text-ink-soft">{r.service}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Önceki yorumlar"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-espresso"
        >
          <ChevronIcon dir="left" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Sonraki yorumlar"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-espresso"
        >
          <ChevronIcon dir="right" />
        </button>
      </div>
    </div>
  );
}
