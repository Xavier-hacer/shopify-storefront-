export function MaskGlow({ className, animated = true }: { className?: string; animated?: boolean }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        className={`absolute inset-0 rounded-full bg-ember/30 blur-[90px] ${animated ? "motion-safe:animate-pulse-slow" : ""}`}
        aria-hidden
      />
      <div
        className="absolute inset-8 rounded-full bg-nir/20 blur-[70px]"
        aria-hidden
      />
      <svg
        viewBox="0 0 420 520"
        className="relative h-full w-full"
        fill="none"
        role="img"
        aria-label="Illustration of the Velunna Glow Mask, glowing red"
      >
        <defs>
          <linearGradient id="glowStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-nir)" />
            <stop offset="55%" stopColor="var(--color-ember)" />
            <stop offset="100%" stopColor="var(--color-ember-soft)" />
          </linearGradient>
          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M210 20 C100 20 40 90 40 220 C40 340 90 430 130 470 C160 500 190 510 210 510 C230 510 260 500 290 470 C330 430 380 340 380 220 C380 90 320 20 210 20 Z"
          stroke="url(#glowStroke)"
          strokeWidth="2.5"
          filter="url(#softGlow)"
          opacity="0.9"
        />

        <rect x="85" y="175" width="110" height="34" rx="17" stroke="url(#glowStroke)" strokeWidth="3" filter="url(#softGlow)" />
        <rect x="225" y="175" width="110" height="34" rx="17" stroke="url(#glowStroke)" strokeWidth="3" filter="url(#softGlow)" />

        <path
          d="M200 215 C200 215 220 215 220 215 L220 285 C220 300 210 310 210 310 C210 310 200 300 200 285 Z"
          stroke="url(#glowStroke)"
          strokeWidth="2"
          filter="url(#softGlow)"
          opacity="0.8"
        />
        <circle cx="210" cy="318" r="15" stroke="url(#glowStroke)" strokeWidth="2" filter="url(#softGlow)" opacity="0.8" />
      </svg>
    </div>
  );
}
