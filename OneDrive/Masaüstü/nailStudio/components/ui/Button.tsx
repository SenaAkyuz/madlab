import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "blush" | "mocha" | "outline" | "rosewood" | "lavender" | "link";

const styles: Record<Variant, string> = {
  blush: "bg-blush text-espresso hover:bg-[#f1c3cf]",
  mocha: "bg-mocha text-cream hover:bg-cocoa",
  outline: "border border-lilac-deep text-inherit hover:bg-lavender hover:text-espresso",
  rosewood: "bg-rosewood text-cream hover:bg-[#955a6a]",
  lavender: "bg-lavender text-espresso hover:bg-[#dbd2ea]",
  link: "underline-link px-0 min-h-0 py-1 rounded-none tracking-[0.12em]",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 font-condensed text-[1.05rem] uppercase tracking-[0.06em] transition-colors duration-300";

interface Props {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
}

export default function Button({
  variant = "blush",
  href,
  className = "",
  children,
  ...rest
}: Props & Omit<ComponentProps<"button">, keyof Props>) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
