import { categories } from "@/data/categories";
import { designs } from "@/data/designs";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { faq } from "@/data/faq";
import type {
  Category,
  Design,
  DesignFilters,
  Faq,
  Review,
  Service,
} from "./types";

// Tüm veri erişimi bu dosyadan geçer. Sanity'ye geçişte sadece bu dosyanın içi değişecek.

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategory(slug: string): Promise<Category | undefined> {
  return categories.find((c) => c.slug === slug);
}

export async function getDesigns(f: DesignFilters = {}): Promise<Design[]> {
  let list = designs.slice();
  if (f.category) list = list.filter((d) => d.categorySlug === f.category);
  if (f.shape) list = list.filter((d) => d.shape === f.shape);
  if (f.length) list = list.filter((d) => d.length === f.length);
  if (f.maxPrice) list = list.filter((d) => d.price <= f.maxPrice!);
  if (f.maxDuration) list = list.filter((d) => d.duration <= f.maxDuration!);
  if (f.q) {
    const q = f.q.toLocaleLowerCase("tr");
    list = list.filter((d) =>
      [d.name, ...d.tags, ...d.colors, d.technique].some((t) =>
        t.toLocaleLowerCase("tr").includes(q),
      ),
    );
  }
  switch (f.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "new":
      list.sort(
        (a, b) => Number(b.badge === "Yeni") - Number(a.badge === "Yeni") || a.order - b.order,
      );
      break;
    default:
      list.sort(
        (a, b) =>
          Number(b.badge === "Çok Tercih Edilen") - Number(a.badge === "Çok Tercih Edilen") ||
          a.order - b.order,
      );
  }
  return list;
}

export async function getDesignBySlug(slug: string): Promise<Design | undefined> {
  return designs.find((d) => d.slug === slug);
}

export async function getSimilarDesigns(d: Design, n = 4): Promise<Design[]> {
  const same = designs.filter((x) => x.categorySlug === d.categorySlug && x.slug !== d.slug);
  const other = designs.filter((x) => x.categorySlug !== d.categorySlug && x.shape === d.shape);
  return [...same, ...other].slice(0, n);
}

export async function getFeaturedDesigns(n = 6): Promise<Design[]> {
  const picks = ["liquid-silver", "classic-french", "starry-night", "mocha-glaze", "almond-gel-x", "pearl-bride"];
  return picks
    .map((s) => designs.find((d) => d.slug === s))
    .filter((d): d is Design => Boolean(d))
    .slice(0, n);
}

export async function getFavoriteDesigns(): Promise<Design[]> {
  const picks = ["lavender-chrome", "ombre-dusk", "wildflower"];
  return picks
    .map((s) => designs.find((d) => d.slug === s))
    .filter((d): d is Design => Boolean(d));
}

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getReviews(): Promise<Review[]> {
  return reviews;
}

export async function getFaq(): Promise<Faq[]> {
  return faq;
}

export async function getCategoryStats(slug: string) {
  const list = designs.filter((d) => d.categorySlug === slug);
  const prices = list.map((d) => d.price);
  return { count: list.length, min: Math.min(...prices), max: Math.max(...prices) };
}
