import Link from "next/link";
import { site } from "@/config/site";
import { getCategories } from "@/lib/data";
import { InstagramIcon, TiktokIcon, WhatsappIcon } from "@/components/ui/Icons";
import WatermarkText from "./WatermarkText";

const menu = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/designs", label: "Tasarımlar" },
  { href: "/services", label: "Hizmetler" },
  { href: "/about", label: "Hakkımda" },
  { href: "/book", label: "Randevu" },
  { href: "/contact", label: "İletişim" },
];

export default async function Footer() {
  const categories = await getCategories();
  return (
    <footer className="relative mt-24 bg-espresso text-cream">
      <WatermarkText>Nail Atelier</WatermarkText>
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-baseline gap-2">
            <span className="font-condensed text-4xl tracking-[0.04em]">{site.shortName}</span>
            <span className="font-script text-2xl text-blush">{site.script}</span>
          </p>
          <p className="mt-4 max-w-xs text-[0.95rem] text-cream/70">{site.tagline} {site.subtagline}</p>
        </div>

        <nav aria-label="Alt menü">
          <h2 className="label mb-4 text-cream/50">Menü</h2>
          <ul className="space-y-1">
            {menu.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-cream/85 transition-colors hover:text-blush">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kategoriler">
          <h2 className="label mb-4 text-cream/50">Kategoriler</h2>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/designs/${c.slug}`} className="inline-flex min-h-9 items-center text-cream/85 transition-colors hover:text-blush">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label mb-4 text-cream/50">İletişim</h2>
          <address className="space-y-2 not-italic text-cream/85">
            <p>{site.address}</p>
            <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-blush">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-blush">{site.email}</a></p>
          </address>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: site.social.tiktok, Icon: TiktokIcon, label: "TikTok" },
              { href: site.social.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:border-blush hover:bg-blush hover:text-espresso"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-cream/10">
        <p className="container-x py-6 text-[0.8125rem] text-cream/50">
          © {new Date().getFullYear()} {site.name}. Bu site bir demo çalışmasıdır; fiyat, adres ve yorumlar örnek içeriktir.
        </p>
      </div>
    </footer>
  );
}
