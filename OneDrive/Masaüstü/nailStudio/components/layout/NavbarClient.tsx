"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { MenuIcon } from "@/components/ui/Icons";
import SafeImage from "@/components/ui/SafeImage";
import MobileMenu from "./MobileMenu";

export interface NavCategory {
  slug: string;
  name: string;
  cover: string;
}

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/designs", label: "Tasarımlar" },
  { href: "/services", label: "Hizmetler" },
  { href: "/#sonuclar", label: "Sonuçlar" },
  { href: "/about", label: "Hakkımda" },
];

export default function NavbarClient({ categories }: { categories: NavCategory[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-[var(--line)] bg-cream/80 backdrop-blur-md"
            : "border-b border-transparent bg-cream"
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
          <Link href="/" className="flex items-baseline gap-2" aria-label={`${site.name} ana sayfa`}>
            <span className="font-condensed text-[1.9rem] leading-none tracking-[0.04em] text-mocha">
              {site.shortName}
            </span>
            <span className="font-script text-xl leading-none text-rosewood">{site.script}</span>
          </Link>

          <nav aria-label="Ana menü" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => setMega(l.href === "/designs")}
                onFocus={() => setMega(l.href === "/designs")}
                className="font-condensed flex min-h-11 items-center px-4 text-[1.05rem] uppercase tracking-[0.06em] text-ink transition-colors hover:text-rosewood"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="font-condensed ml-2 inline-flex min-h-11 items-center rounded-full bg-blush px-6 text-[1.05rem] uppercase tracking-[0.06em] text-espresso transition-colors hover:bg-[#f1c3cf]"
            >
              Randevu
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-mocha lg:hidden"
            aria-label="Menüyü aç"
          >
            <MenuIcon width={26} height={26} />
          </button>
        </div>

        {mega && (
          <div className="absolute inset-x-0 top-full hidden border-b border-[var(--line)] bg-cream/95 backdrop-blur-md lg:block">
            <ul className="container-x grid grid-cols-6 gap-6 py-8">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/designs/${c.slug}`}
                    onClick={() => setMega(false)}
                    className="group flex flex-col items-center gap-3 text-center"
                  >
                    <span className="relative block h-24 w-24 overflow-hidden rounded-full">
                      <SafeImage
                        src={c.cover}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="font-condensed text-lg uppercase tracking-[0.06em] group-hover:text-rosewood">
                      {c.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
