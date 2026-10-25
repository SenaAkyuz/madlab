"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DURATIONS,
  LENGTHS,
  PRICE_MAX,
  SHAPES,
  SORTS,
} from "@/lib/filters";
import { formatPrice } from "@/lib/format";
import { SearchIcon } from "@/components/ui/Icons";

interface Props {
  categories: { slug: string; name: string }[];
  lockedCategory?: string;
  total: number;
}

const pill = (active: boolean) =>
  `label inline-flex min-h-11 shrink-0 items-center rounded-full px-5 transition-colors ${
    active ? "bg-mocha text-cream" : "border border-[var(--line)] text-ink hover:bg-lavender"
  }`;

export default function FilterBar({ categories, lockedCategory, total }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [price, setPrice] = useState(Number(params.get("fiyat")) || PRICE_MAX);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const push = (patch: Record<string, string | undefined>) => {
    const next = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(patch)) {
      if (v) next.set(k, v);
      else next.delete(k);
    }
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  // arama kutusu: yazmayı bırakınca URL'ye yaz
  useEffect(() => {
    if (q === (params.get("q") ?? "")) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => push({ q: q.trim() || undefined }), 350);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const kategori = params.get("kategori");
  const sekil = params.get("sekil");
  const uzunluk = params.get("uzunluk");
  const sure = params.get("sure");
  const sirala = params.get("sirala") ?? "recommended";
  const hasFilter = [kategori, sekil, uzunluk, sure, params.get("fiyat"), params.get("q")].some(Boolean);

  return (
    <div className="sticky top-16 z-30 -mx-5 border-y border-[var(--line)] bg-cream/90 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 md:top-[72px] lg:-mx-12 lg:px-12">
      <div className="mx-auto max-w-[1280px] space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {!lockedCategory && (
            <>
              <button type="button" className={pill(!kategori)} onClick={() => push({ kategori: undefined })}>
                Tümü
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  className={pill(kategori === c.slug)}
                  onClick={() => push({ kategori: kategori === c.slug ? undefined : c.slug })}
                >
                  {c.name}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <label className="relative min-w-[200px] flex-1 sm:max-w-xs">
            <span className="sr-only">Tasarım ara</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" width={18} height={18} />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="İsim veya etiket ara"
              className="min-h-11 w-full rounded-full border border-[var(--line)] bg-transparent pl-11 pr-4 text-[0.95rem] placeholder:text-ink-soft/70"
            />
          </label>

          <label className="flex items-center gap-2 text-[0.8125rem]">
            <span className="label text-ink-soft">Şekil</span>
            <select
              value={sekil ?? ""}
              onChange={(e) => push({ sekil: e.target.value || undefined })}
              className="min-h-11 rounded-full border border-[var(--line)] bg-transparent px-4"
            >
              <option value="">Tümü</option>
              {SHAPES.map((s) => (
                <option key={s} value={s.toLowerCase()}>{s}</option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-2 text-[0.8125rem]">
            <span className="label text-ink-soft">Uzunluk</span>
            <select
              value={uzunluk ?? ""}
              onChange={(e) => push({ uzunluk: e.target.value || undefined })}
              className="min-h-11 rounded-full border border-[var(--line)] bg-transparent px-4"
            >
              <option value="">Tümü</option>
              {LENGTHS.map((l) => (
                <option key={l} value={l.toLowerCase()}>{l}</option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-2 text-[0.8125rem]">
            <span className="label text-ink-soft">Süre</span>
            <select
              value={sure ?? "190"}
              onChange={(e) => push({ sure: e.target.value === "190" ? undefined : e.target.value })}
              className="min-h-11 rounded-full border border-[var(--line)] bg-transparent px-4"
            >
              {DURATIONS.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-3 text-[0.8125rem]">
            <span className="label text-ink-soft">Fiyat</span>
            <input
              type="range"
              min={450}
              max={PRICE_MAX}
              step={50}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              onPointerUp={() => push({ fiyat: price >= PRICE_MAX ? undefined : String(price) })}
              onKeyUp={() => push({ fiyat: price >= PRICE_MAX ? undefined : String(price) })}
              className="h-11 w-32 accent-[var(--mocha)]"
              aria-label="En yüksek fiyat"
            />
            <span className="font-mono w-24 text-[0.8rem]">
              {price >= PRICE_MAX ? "Tümü" : `≤ ${formatPrice(price, false)}`}
            </span>
          </label>

          <label className="ml-auto flex items-center gap-2 text-[0.8125rem]">
            <span className="label text-ink-soft">Sırala</span>
            <select
              value={sirala}
              onChange={(e) => push({ sirala: e.target.value === "recommended" ? undefined : e.target.value })}
              className="min-h-11 rounded-full border border-[var(--line)] bg-transparent px-4"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center gap-4 text-[0.8125rem] text-ink-soft" aria-live="polite">
          <span>{total} tasarım</span>
          {hasFilter && (
            <button
              type="button"
              className="underline-link min-h-11"
              onClick={() => {
                setQ("");
                setPrice(PRICE_MAX);
                router.replace(pathname, { scroll: false });
              }}
            >
              Filtreleri temizle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
