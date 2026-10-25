export const policies = [
  { title: "Depozito", text: "Randevuyu garantilemek için iadesiz ₺200 depozito alınır, hizmet bedelinden düşülür." },
  { title: "Gecikme", text: "Lütfen zamanında gel. 10 dakikadan sonra randevun ertelenebilir." },
  { title: "Erteleme", text: "Depozitonu kaybetmemek için en az 24 saat önceden haber ver." },
  { title: "Ödeme", text: "Bakiye randevu günü ödenir. Nakit, kart ve havale kabul edilir." },
];

export default function Policies({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "container-x section-y pt-0"}>
      {!compact && <h2 className="font-display mb-10 text-center text-4xl">Randevu politikaları</h2>}
      <dl className={`font-mono grid gap-x-12 gap-y-8 ${compact ? "" : "mx-auto max-w-4xl sm:grid-cols-2"}`}>
        {policies.map((p) => (
          <div key={p.title} className="border-t border-[var(--line)] pt-5">
            <dt className="label mb-2">{p.title}</dt>
            <dd className="text-[0.9rem] leading-relaxed text-ink-soft">{p.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
