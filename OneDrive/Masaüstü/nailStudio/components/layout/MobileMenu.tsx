"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/config/site";
import { CloseIcon, InstagramIcon, TiktokIcon, WhatsappIcon } from "@/components/ui/Icons";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/designs", label: "Tasarımlar" },
  { href: "/services", label: "Hizmetler" },
  { href: "/#sonuclar", label: "Sonuçlar" },
  { href: "/about", label: "Hakkımda" },
  { href: "/book", label: "Randevu" },
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-0 z-50 flex flex-col bg-mocha text-cream"
    >
      <div className="container-x flex h-16 items-center justify-between">
        <span className="font-condensed text-[1.9rem] tracking-[0.04em]">{site.shortName}</span>
        <button
          type="button"
          onClick={onClose}
          className="-mr-2 flex h-11 w-11 items-center justify-center"
          aria-label="Menüyü kapat"
        >
          <CloseIcon width={26} height={26} />
        </button>
      </div>
      <nav className="container-x flex flex-1 flex-col justify-center gap-2" aria-label="Mobil menü">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className="font-display-tight block py-1 text-[clamp(2.5rem,12vw,4.5rem)] italic text-cream transition-colors hover:text-blush"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="container-x flex items-center gap-3 pb-10">
        {[
          { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
          { href: site.social.tiktok, Icon: TiktokIcon, label: "TikTok" },
          { href: site.social.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 transition-colors hover:bg-cream hover:text-mocha"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
