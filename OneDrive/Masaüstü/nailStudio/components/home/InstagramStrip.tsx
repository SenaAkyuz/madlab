import { site } from "@/config/site";
import SafeImage from "@/components/ui/SafeImage";
import { InstagramIcon } from "@/components/ui/Icons";

const tiles = [
  { src: "/images/instagram/1.webp", alt: "İnci krom tırnaklar, eğik açıdan" },
  { src: "/images/instagram/2.webp", alt: "Bordo kedi gözü tırnaklar" },
  { src: "/images/instagram/3.webp", alt: "Oje şişeleri rafı" },
  { src: "/images/instagram/4.webp", alt: "Kiraz desenli tırnak, yakın çekim" },
];

export default function InstagramStrip() {
  return (
    <section className="container-x pb-6">
      <h2 className="font-display mb-8 text-center text-3xl italic">{site.instagram}</h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {tiles.map((t) => (
          <li key={t.src}>
            <a href={site.social.instagram} className="group relative block aspect-square overflow-hidden bg-sand" aria-label={`Instagram: ${t.alt}`}>
              <SafeImage src={t.src} alt={t.alt} fill sizes="(min-width:640px) 25vw, 50vw" className="object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-espresso/55 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <InstagramIcon width={32} height={32} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
