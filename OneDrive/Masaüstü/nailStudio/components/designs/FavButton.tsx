"use client";

import { useSyncExternalStore } from "react";
import { HeartIcon } from "@/components/ui/Icons";

const KEY = "reverie:favs";
const EVENT = "reverie:favs-change";

function snapshot(): string {
  try {
    return localStorage.getItem(KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

function parse(raw: string): string[] {
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default function FavButton({ slug, name }: { slug: string; name: string }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const on = parse(raw).includes(slug);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const cur = parse(snapshot());
    const next = cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug];
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* depolama kapalıysa sessizce geç */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? `${name} favorilerden çıkar` : `${name} favorilere ekle`}
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-cream/70 backdrop-blur-md transition-colors hover:bg-cream ${
        on ? "text-rosewood" : "text-espresso"
      }`}
    >
      <HeartIcon filled={on} />
    </button>
  );
}
