// Krom / gümüş sıvı form (Reels referansı): saf SVG, gradient'ler token renklerinden.
export default function ChromeBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden
      className={className}
      style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,.35))" }}
    >
      <defs>
        <linearGradient id="cb-lin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--chrome-hi)" />
          <stop offset=".28" stopColor="var(--chrome-mid)" />
          <stop offset=".52" stopColor="var(--chrome-lo)" />
          <stop offset=".74" stopColor="var(--lavender)" />
          <stop offset="1" stopColor="var(--chrome-lo)" />
        </linearGradient>
        <radialGradient id="cb-rad" cx=".3" cy=".25" r=".7">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".05" />
          <stop offset="1" stopColor="#000" stopOpacity=".25" />
        </radialGradient>
      </defs>
      <path
        d="M120 300C80 170 220 60 340 90c120 30 190 120 170 240-20 120-120 200-230 190C190 510 150 400 120 300Z"
        fill="url(#cb-lin)"
      />
      <path
        d="M120 300C80 170 220 60 340 90c120 30 190 120 170 240-20 120-120 200-230 190C190 510 150 400 120 300Z"
        fill="url(#cb-rad)"
      />
      <ellipse cx="230" cy="170" rx="70" ry="26" fill="#fff" opacity=".55" transform="rotate(-28 230 170)" />
      <circle cx="515" cy="120" r="34" fill="url(#cb-lin)" />
      <circle cx="505" cy="110" r="10" fill="#fff" opacity=".7" />
      <circle cx="70" cy="470" r="22" fill="url(#cb-lin)" />
    </svg>
  );
}
