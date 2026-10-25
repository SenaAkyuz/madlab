import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const InstagramIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
);
export const TiktokIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3c.4 2.4 2 4 4.5 4.2" />
  </svg>
);
export const WhatsappIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 20l1.3-4.1A8 8 0 1 1 8.2 18.8L4 20z" />
    <path d="M9.2 8.8c.2 2.4 2.4 4.6 4.9 5 .5-.3.9-.7 1-1.2l-1.6-.9-.8.6c-.8-.3-1.6-1.1-1.9-1.9l.6-.8-.9-1.6c-.5.1-.9.5-1.3.8z" />
  </svg>
);
export const HeartIcon = ({ filled, ...p }: P & { filled?: boolean }) => (
  <svg {...base(p)} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z" />
  </svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRightIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);
export const ChevronIcon = ({ dir = "right", ...p }: P & { dir?: "left" | "right" | "down" }) => (
  <svg {...base(p)}>
    {dir === "right" && <path d="M9 5l7 7-7 7" />}
    {dir === "left" && <path d="M15 5l-7 7 7 7" />}
    {dir === "down" && <path d="M5 9l7 7 7-7" />}
  </svg>
);
export const StarIcon = ({ filled = true, ...p }: P & { filled?: boolean }) => (
  <svg {...base(p)} fill={filled ? "currentColor" : "none"} strokeWidth={1.2}>
    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);
export const MapPinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const SearchIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4 4" />
  </svg>
);
export const SparkleIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z" />
  </svg>
);
export const FlowerIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M12 9.8c-1.8-2.6-1.4-5 0-6.3 1.4 1.3 1.8 3.7 0 6.3zM12 14.2c1.8 2.6 1.4 5 0 6.3-1.4-1.3-1.8-3.7 0-6.3zM9.8 12c-2.6 1.8-5 1.4-6.3 0 1.3-1.4 3.7-1.8 6.3 0zM14.2 12c2.6-1.8 5-1.4 6.3 0-1.3 1.4-3.7 1.8-6.3 0z" />
  </svg>
);
