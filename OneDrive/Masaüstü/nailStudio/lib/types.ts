export type Shape = "Badem" | "Kare" | "Oval" | "Stiletto" | "Coffin";
export type Length = "Kısa" | "Orta" | "Uzun";
export type Badge = "Yeni" | "Çok Tercih Edilen" | "Gelin";

export interface Category {
  slug: string;
  name: string;
  description: string;
  cover: string;
  banner: string;
  alt: string;
}

export interface Extra {
  label: string;
  price: number;
}

export interface Design {
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  duration: number;
  shape: Shape;
  length: Length;
  technique: string;
  colors: string[];
  swatches: string[];
  tags: string[];
  badge?: Badge;
  difficulty: 1 | 2 | 3 | 4;
  longevity: string;
  description: string;
  includes: string[];
  extras: Extra[];
  images: string[];
  alt: string;
  order: number;
}

export interface Service {
  name: string;
  price: number;
  plus?: boolean;
  duration: number;
  description: string;
}

export interface Review {
  name: string;
  service: string;
  stars: number;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface DesignFilters {
  category?: string;
  shape?: string;
  length?: string;
  maxPrice?: number;
  maxDuration?: number;
  q?: string;
  sort?: "recommended" | "price-asc" | "price-desc" | "new";
}
