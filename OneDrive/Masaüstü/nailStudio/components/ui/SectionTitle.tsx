import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "xl" | "l";
  as?: "h1" | "h2";
  className?: string;
}

// Dev, ince, yüksek kontrastlı Bodoni başlık (Amber referansı)
export default function SectionTitle({ children, size = "l", as: Tag = "h2", className = "" }: Props) {
  const sz = size === "xl" ? "text-display-xl" : "text-display-l";
  return (
    <Tag className={`font-display-tight uppercase ${sz} ${className}`}>{children}</Tag>
  );
}
