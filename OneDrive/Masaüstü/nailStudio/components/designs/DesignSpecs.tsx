import type { Design } from "@/lib/types";
import { formatDuration } from "@/lib/format";

export default function DesignSpecs({ design: d }: { design: Design }) {
  const rows: [string, React.ReactNode][] = [
    ["Şekil", d.shape],
    ["Uzunluk", d.length],
    ["Teknik", d.technique],
    ["Süre", formatDuration(d.duration)],
    ["Kalıcılık", d.longevity],
    [
      "Renkler",
      <span key="c" className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {d.colors.map((c, i) => (
          <span key={c} className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-4 w-4 rounded-full border border-[var(--line)]"
              style={{ background: d.swatches[i] }}
            />
            {c}
          </span>
        ))}
      </span>,
    ],
    [
      "Zorluk",
      <span key="z" aria-label={`${d.difficulty} / 4`} className="tracking-[0.2em] text-mocha">
        {"●".repeat(d.difficulty)}
        <span className="text-mocha/25">{"●".repeat(4 - d.difficulty)}</span>
      </span>,
    ],
  ];
  return (
    <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)] text-[0.95rem]">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[110px_1fr] gap-4 py-3">
          <dt className="label self-center text-ink-soft">{k}</dt>
          <dd className="font-mono text-[0.88rem]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
