import type { DesignFilters } from "./types";

type Raw = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export const SHAPES = ["Badem", "Kare", "Oval", "Stiletto", "Coffin"] as const;
export const LENGTHS = ["Kısa", "Orta", "Uzun"] as const;
export const SORTS = [
  { value: "recommended", label: "Önerilen" },
  { value: "price-asc", label: "Fiyat artan" },
  { value: "price-desc", label: "Fiyat azalan" },
  { value: "new", label: "Yeni" },
] as const;
export const PRICE_MAX = 1500;
export const DURATIONS = [
  { value: 90, label: "En çok 1,5 sa" },
  { value: 120, label: "En çok 2 sa" },
  { value: 150, label: "En çok 2,5 sa" },
  { value: 190, label: "Tümü" },
];

export function parseFilters(raw: Raw, lockedCategory?: string): DesignFilters {
  const shape = first(raw.sekil);
  const length = first(raw.uzunluk);
  const sort = first(raw.sirala) as DesignFilters["sort"];
  const price = Number(first(raw.fiyat));
  const dur = Number(first(raw.sure));
  return {
    category: lockedCategory ?? first(raw.kategori),
    shape: SHAPES.find((s) => s.toLowerCase() === shape?.toLowerCase()),
    length: LENGTHS.find((l) => l.toLowerCase() === length?.toLowerCase()),
    maxPrice: price && price < PRICE_MAX ? price : undefined,
    maxDuration: dur && dur < 190 ? dur : undefined,
    q: first(raw.q)?.trim() || undefined,
    sort: SORTS.some((s) => s.value === sort) ? sort : undefined,
  };
}
