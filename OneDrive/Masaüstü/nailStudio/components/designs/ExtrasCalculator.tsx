"use client";

import { useState } from "react";
import type { Design } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import { WhatsappIcon } from "@/components/ui/Icons";
import { site } from "@/config/site";

export default function ExtrasCalculator({ design: d }: { design: Design }) {
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const extra = d.extras.reduce((sum, e) => sum + (picked[e.label] ? e.price : 0), 0);
  const total = d.price + extra;

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Merhaba, "${d.name}" tasarımı hakkında bilgi almak istiyorum.`,
  )}`;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="label mb-3 text-ink-soft">Fiyata dahil olanlar</h3>
        <ul className="space-y-1.5 text-[0.95rem]">
          {d.includes.map((i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac-deep" />
              {i}
            </li>
          ))}
        </ul>
      </div>

      <fieldset>
        <legend className="label mb-3 text-ink-soft">Ekstra seçenekler</legend>
        <div className="space-y-2">
          {d.extras.map((e) => (
            <label
              key={e.label}
              className="flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-full border border-[var(--line)] px-5 transition-colors has-[:checked]:bg-lavender"
            >
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={!!picked[e.label]}
                  onChange={(ev) => setPicked((p) => ({ ...p, [e.label]: ev.target.checked }))}
                  className="h-4 w-4 accent-[var(--mocha)]"
                />
                <span className="text-[0.95rem]">{e.label}</span>
              </span>
              <span className="font-mono text-[0.85rem]">+{formatPrice(e.price, false)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex items-end justify-between border-t border-[var(--line)] pt-5" aria-live="polite">
        <span className="label text-ink-soft">Toplam</span>
        <span className="font-mono text-3xl">{formatPrice(total)}</span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href={`/book?tasarim=${d.slug}`} variant="blush">
          Randevu Al
        </Button>
        <a
          href={wa}
          className="font-condensed inline-flex min-h-11 items-center gap-2 rounded-full border border-lilac-deep px-6 text-[1.05rem] uppercase tracking-[0.06em] transition-colors hover:bg-lavender"
        >
          <WhatsappIcon width={18} height={18} /> WhatsApp&apos;tan sor
        </a>
      </div>
    </div>
  );
}
