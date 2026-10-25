import type { Metadata } from "next";
import { getServices } from "@/lib/data";
import { formatDuration } from "@/lib/format";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Jel manikür, protez tırnak, pedikür, nail art ve gelin seti: fiyat ve süre listesi.",
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="container-x section-y pt-10 md:pt-16">
      <SectionTitle as="h1" size="xl">Hizmetler</SectionTitle>
      <p className="mt-6 max-w-[60ch] text-ink-soft">
        Fiyatlar başlangıç fiyatıdır; tasarımın detayına, tırnak yapına ve ekstra seçeneklere göre
        randevu öncesinde netleşir.
      </p>
      <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {services.map((s) => (
          <li key={s.name} className="grid items-baseline gap-x-8 gap-y-1 py-7 sm:grid-cols-[1.2fr_2fr_auto]">
            <h2 className="font-display text-[1.6rem] leading-tight">{s.name}</h2>
            <p className="text-ink-soft">{s.description}</p>
            <p className="font-mono text-right sm:min-w-40">
              <span className="text-lg">₺{new Intl.NumberFormat("tr-TR").format(s.price)}{s.plus ? "+" : ""}</span>
              <span className="block text-[0.78rem] text-ink-soft">{formatDuration(s.duration)}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Button href="/book">Randevu Al</Button>
      </div>
    </div>
  );
}
