import { getCategories } from "@/lib/data";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <NavbarClient
      categories={categories.map((c) => ({ slug: c.slug, name: c.name, cover: c.cover }))}
    />
  );
}
