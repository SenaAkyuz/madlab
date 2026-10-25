import type { Badge as BadgeType } from "@/lib/types";

const tone: Record<BadgeType, string> = {
  Yeni: "bg-lavender text-espresso",
  "Çok Tercih Edilen": "bg-blush text-espresso",
  Gelin: "bg-platinum text-espresso",
};

export default function Badge({ kind }: { kind: BadgeType }) {
  return (
    <span className={`label inline-flex items-center rounded-full px-3 py-1 ${tone[kind]}`}>
      {kind}
    </span>
  );
}
