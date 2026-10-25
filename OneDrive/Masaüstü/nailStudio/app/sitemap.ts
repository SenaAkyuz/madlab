import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getCategories, getDesigns } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cats, designs] = await Promise.all([getCategories(), getDesigns()]);
  const staticRoutes = ["", "/designs", "/services", "/about", "/book", "/contact"];
  return [
    ...staticRoutes.map((p) => ({ url: `${site.url}${p}` })),
    ...cats.map((c) => ({ url: `${site.url}/designs/${c.slug}` })),
    ...designs.map((d) => ({ url: `${site.url}/designs/${d.categorySlug}/${d.slug}` })),
  ];
}
