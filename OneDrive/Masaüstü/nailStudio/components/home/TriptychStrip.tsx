import SafeImage from "@/components/ui/SafeImage";

// Reverie referansı: ortadaki daha küçük ve aşağıda, üstüne script yazı + çiçek sticker
export default function TriptychStrip() {
  const items = [
    { src: "/images/atmosphere/glass.webp", alt: "Kürk ve altın takılar eşliğinde mor krom, süslemeli uzun tırnaklar", cls: "aspect-[3/4]" },
    { src: "/images/atmosphere/polish.webp", alt: "Saçların önünde, yüzüklerle ve kırmızı detaylarla süslü uzun tırnaklar", cls: "aspect-[3/4] md:mt-12 md:aspect-[4/5]" },
    { src: "/images/atmosphere/macro.webp", alt: "Parlak kırmızı uzun tırnaklar ve oje fırçası", cls: "aspect-[3/4]" },
  ];
  return (
    <section className="container-x pb-8">
      <div className="relative grid grid-cols-3 items-start gap-2 sm:gap-5">
        {items.map((it) => (
          <div key={it.src} className={`relative overflow-hidden rounded-[20px] bg-sand sm:rounded-[28px] ${it.cls}`}>
            <SafeImage src={it.src} alt={it.alt} fill sizes="(min-width:1280px) 400px, 33vw" className="object-cover" />
          </div>
        ))}

        <p
          aria-hidden
          className="font-script pointer-events-none absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -rotate-6 whitespace-nowrap text-[clamp(2rem,8vw,6.5rem)] leading-none text-white [text-shadow:0_4px_24px_rgba(43,29,22,.45)]"
        >
          a state of reverie
        </p>

        <svg
          aria-hidden
          viewBox="0 0 80 80"
          className="absolute bottom-[8%] left-[calc(33%-18px)] z-10 h-12 w-12 rotate-12 sm:h-20 sm:w-20 md:bottom-[2%]"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="40" cy="18" rx="9" ry="17" fill="#F6D3DC" stroke="#E9A3BE" strokeWidth="1" transform={`rotate(${i * 45} 40 40)`} />
          ))}
          <circle cx="40" cy="40" r="8" fill="#E9C46A" />
        </svg>
      </div>
    </section>
  );
}
