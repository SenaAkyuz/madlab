// Görsel bulunamazsa devreye giren SVG: palet renkli zemin + stilize el silüeti + krom gradient.
export default function NailPlaceholder({ label }: { label?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label={label ?? "Tırnak tasarımı görseli"}
    >
      <defs>
        <linearGradient id="ph-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E6E0F0" />
          <stop offset="1" stopColor="#EADFD3" />
        </linearGradient>
        <linearGradient id="ph-chrome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".5" stopColor="#CFC9D6" />
          <stop offset="1" stopColor="#8E8697" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#ph-bg)" />
      <g fill="#EBC7AE">
        <rect x="110" y="210" width="36" height="260" rx="18" />
        <rect x="154" y="170" width="38" height="300" rx="19" />
        <rect x="200" y="160" width="40" height="310" rx="20" />
        <rect x="248" y="190" width="38" height="280" rx="19" />
      </g>
      <g fill="url(#ph-chrome)">
        <ellipse cx="128" cy="222" rx="14" ry="20" />
        <ellipse cx="173" cy="182" rx="15" ry="22" />
        <ellipse cx="220" cy="172" rx="16" ry="23" />
        <ellipse cx="267" cy="202" rx="15" ry="21" />
      </g>
    </svg>
  );
}
