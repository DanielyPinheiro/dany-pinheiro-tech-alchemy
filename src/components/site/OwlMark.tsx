type Props = { className?: string };

export function OwlMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coruja Tech Alquimia"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.13 85)" />
          <stop offset="100%" stopColor="oklch(0.72 0.16 60)" />
        </linearGradient>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.84 0.13 80 / 0.55)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#goldGlow)" />
      {/* head */}
      <path
        d="M60 70 C60 40 140 40 140 70 L140 110 C140 140 60 140 60 110 Z"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        fill="none"
      />
      {/* tufts */}
      <path d="M60 70 L48 50" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 70 L152 50" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="82" cy="92" r="13" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
      <circle cx="118" cy="92" r="13" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
      <circle cx="82" cy="92" r="3" fill="url(#goldGrad)" />
      <circle cx="118" cy="92" r="3" fill="url(#goldGrad)" />
      {/* beak */}
      <path d="M100 100 L94 112 L106 112 Z" fill="url(#goldGrad)" />
      {/* chest lines */}
      <path d="M82 122 Q100 132 118 122" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
      <path d="M88 132 Q100 140 112 132" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
    </svg>
  );
}
