"use client";

import { useState } from "react";
import SafeImage from "@/components/ui/SafeImage";

export default function DesignGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sand">
        <SafeImage
          key={images[active]}
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <ul className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Görsel ${i + 1}`}
              aria-current={i === active}
              className={`relative block aspect-square w-full overflow-hidden rounded-[18px] bg-sand transition-opacity ${
                i === active ? "ring-2 ring-mocha ring-offset-2 ring-offset-cream" : "opacity-70 hover:opacity-100"
              }`}
            >
              <SafeImage src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
