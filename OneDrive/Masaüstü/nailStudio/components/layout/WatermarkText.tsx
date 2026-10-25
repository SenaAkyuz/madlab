// Dev, soluk, taşan dekoratif yazı (Amber referansı)
export default function WatermarkText({ children }: { children: string }) {
  return (
    <div
      aria-hidden
      className="font-display-tight pointer-events-none absolute inset-x-0 bottom-full translate-y-[28%] select-none overflow-hidden whitespace-nowrap text-center text-[20vw] uppercase leading-none text-cream opacity-[0.06]"
    >
      {children}
    </div>
  );
}
