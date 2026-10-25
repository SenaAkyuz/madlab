const words = ["Chrome", "French", "Nail Art", "Jel", "Protez", "Gelin"];

// Sitedeki tek sürekli hareket (yavaş marquee)
export default function CategoryMarquee() {
  const row = [...words, ...words, ...words, ...words];
  return (
    <div aria-hidden className="overflow-hidden py-8 md:py-10">
      <div className="marquee-track flex">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <li key={i} className="font-display flex items-center text-3xl italic text-mocha/50 md:text-5xl">
                <span className="px-6 md:px-10">{w}</span>
                <span className="text-lilac-deep">•</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
