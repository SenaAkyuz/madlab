"use client";

import { useState } from "react";
import type { Design } from "@/lib/types";
import Button from "@/components/ui/Button";
import DesignCard from "./DesignCard";

interface Props {
  designs: Design[];
  categoryNames: Record<string, string>;
  pageSize?: number;
}

export default function DesignGrid({ designs, categoryNames, pageSize = 12 }: Props) {
  const [shown, setShown] = useState(pageSize);

  if (designs.length === 0) {
    return (
      <div className="rounded-[32px] bg-platinum px-6 py-20 text-center">
        <p className="font-display text-3xl italic">Bu filtrelere uyan tasarım bulunamadı.</p>
        <p className="mt-2 text-ink-soft">Filtreleri gevşetmeyi ya da aramayı temizlemeyi dene.</p>
      </div>
    );
  }

  const list = designs.slice(0, shown);
  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {list.map((d, i) => (
          <li key={d.slug} className={i % 4 === 1 || i % 4 === 2 ? "lg:translate-y-6" : ""}>
            <DesignCard
              design={d}
              categoryName={categoryNames[d.categorySlug] ?? ""}
              priority={i < 4}
            />
          </li>
        ))}
      </ul>
      {shown < designs.length && (
        <div className="mt-14 flex justify-center">
          <Button variant="outline" onClick={() => setShown((n) => n + pageSize)}>
            Daha fazla göster ({designs.length - shown})
          </Button>
        </div>
      )}
    </>
  );
}
