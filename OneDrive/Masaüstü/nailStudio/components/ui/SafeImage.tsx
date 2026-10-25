"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import NailPlaceholder from "./NailPlaceholder";

// Küçük, palet renkli base64 blur (cream → sand)
const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0IDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0Y3RjNFRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VBREZEMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=";

export default function SafeImage({ alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <NailPlaceholder label={alt} />;
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={BLUR}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
