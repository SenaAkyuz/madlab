import type { Metadata } from "next";
import { getDesigns, getFaq } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import BookForm from "@/components/designs/BookForm";
import Policies from "@/components/home/Policies";

export const metadata: Metadata = {
  title: "Randevu",
  description: "Tasarımını seç, tarih ve saat bırak; WhatsApp'tan dönüş yapalım.",
};

export default async function BookPage({ searchParams }: PageProps<"/book">) {
  const sp = await searchParams;
  const pre = Array.isArray(sp.tasarim) ? sp.tasarim[0] : sp.tasarim;
  const [designs, faq] = await Promise.all([getDesigns(), getFaq()]);

  return (
    <div className="container-x section-y pt-10 md:pt-16">
      <SectionTitle as="h1" size="xl">Randevu</SectionTitle>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <BookForm
          designs={designs.map((d) => ({ slug: d.slug, name: d.name, price: d.price }))}
          defaultDesign={pre}
        />
        <aside className="rounded-[32px] bg-platinum p-8 sm:p-10">
          <h2 className="font-display mb-8 text-3xl">Politikalar</h2>
          <Policies compact />
        </aside>
      </div>

      <section className="mx-auto mt-24 max-w-3xl">
        <h2 className="font-display mb-8 text-4xl">Sık sorulanlar</h2>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faq.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-[1.05rem] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-2xl text-lilac-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pr-8 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
