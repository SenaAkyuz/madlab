"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/lib/format";

interface Props {
  designs: { slug: string; name: string; price: number }[];
  defaultDesign?: string;
}

const field =
  "min-h-12 w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 text-[1rem] placeholder:text-ink-soft/60";

export default function BookForm({ designs, defaultDesign }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-[32px] bg-lavender p-10 sm:p-14">
        <p className="font-display text-4xl italic">Talebin alındı.</p>
        <p className="mt-4 max-w-md text-ink-soft">
          En kısa sürede WhatsApp&apos;tan dönüş yapacağız. Bu bir demo olduğu için gerçek bir randevu
          oluşturulmadı.
        </p>
        <div className="mt-8">
          <Button href="/designs" variant="mocha">Tasarımlara dön</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="label mb-2 block text-ink-soft">İsim</span>
          <input name="isim" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block text-ink-soft">Telefon</span>
          <input name="telefon" type="tel" required autoComplete="tel" placeholder="05xx xxx xx xx" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="label mb-2 block text-ink-soft">Tasarım</span>
        <select name="tasarim" defaultValue={defaultDesign ?? ""} className={field}>
          <option value="">Henüz karar vermedim</option>
          {designs.map((d) => (
            <option key={d.slug} value={d.slug}>
              {d.name} — {formatPrice(d.price)}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="label mb-2 block text-ink-soft">Tarih</span>
          <input name="tarih" type="date" required className={field} />
        </label>
        <label className="block">
          <span className="label mb-2 block text-ink-soft">Saat</span>
          <select name="saat" required defaultValue="" className={field}>
            <option value="" disabled>Seç</option>
            {["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="label mb-2 block text-ink-soft">Not</span>
        <textarea name="not" rows={4} placeholder="Beğendiğin bir fotoğraf, alerji ya da özel isteğin varsa yaz." className={`${field} py-3`} />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="blush" disabled={state === "sending"}>
          {state === "sending" ? "Gönderiliyor…" : "Talebi gönder"}
        </Button>
        {state === "error" && (
          <p role="alert" className="text-[0.9rem] text-rosewood">Bir sorun oluştu, lütfen tekrar dene.</p>
        )}
      </div>
    </form>
  );
}
