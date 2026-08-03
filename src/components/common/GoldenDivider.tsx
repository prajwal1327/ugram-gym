interface GoldenDividerProps {
  className?: string;
}

/**
 * A reusable gold divider with a miniature lion-emblem centrepiece.
 * Suitable as a visual separator between page sections.
 */
export default function GoldenDivider({ className = '' }: GoldenDividerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full py-1 select-none ${className}`}
      aria-hidden="true"
      role="separator"
    >
      {/* Left arm */}
      <div className="flex-1 flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/35" />
        <div className="w-10 h-px bg-[#C9A84C]/55" />
        <div className="w-4  h-px bg-[#C9A84C]/75" />
      </div>

      {/* Centre emblem */}
      <div className="mx-3 flex items-center">
        <svg
          viewBox="0 0 48 48"
          width={40}
          height={40}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#C9A84C" />
              <stop offset="50%"  stopColor="#E8D5A3" />
              <stop offset="100%" stopColor="#C9A84C" />
            </linearGradient>
            <filter id="divGlow">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g stroke="url(#divGold)" fill="none" filter="url(#divGlow)">
            {/* Outer mane burst — 8 points */}
            <path
              d="M24,2  L27,9  L34,5  L33,13 L40,11 L37,18
                 L46,20 L40,25 L46,30 L37,32 L40,39 L33,37
                 L34,45 L27,41 L24,48 L21,41 L14,45 L15,37
                 L8,39  L11,32 L2,30  L8,25  L2,20  L11,18
                 L8,11  L15,13 L14,5  L21,9  Z"
              strokeWidth="1"
              strokeLinejoin="round"
              opacity="0.7"
            />

            {/* Inner mane ring */}
            <circle cx="24" cy="24" r="14" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.5" />

            {/* Face oval */}
            <ellipse cx="24" cy="25.5" rx="9.5" ry="11" strokeWidth="1.2" />

            {/* Eyes */}
            <path d="M18,23 Q21,20 24,23 Q21,26 18,23 Z" strokeWidth="0.9" />
            <path d="M24,23 Q27,20 30,23 Q27,26 24,23 Z" strokeWidth="0.9" />

            {/* Nose diamond */}
            <path d="M22.5,27 L24,25.5 L25.5,27 L24,28.5 Z" strokeWidth="0.8" fill="url(#divGold)" fillOpacity="0.3" />

            {/* Mouth */}
            <path d="M20.5,30.5 Q24,33 27.5,30.5" strokeWidth="0.8" strokeLinecap="round" />

            {/* Crown mane spokes (top quarter) */}
            <path d="M24,4   Q23.5,10 24,15"  strokeWidth="0.7" opacity="0.4" />
            <path d="M30,5.5 Q28.5,11 27,16"  strokeWidth="0.7" opacity="0.4" />
            <path d="M18,5.5 Q19.5,11 21,16"  strokeWidth="0.7" opacity="0.4" />

            {/* Forehead diamond */}
            <path d="M24,16 L25.5,18 L24,20 L22.5,18 Z" strokeWidth="0.8" fill="url(#divGold)" fillOpacity="0.2" />

            {/* Brows */}
            <path d="M17.5,21 Q20.5,19 23,20.5" strokeWidth="0.9" strokeLinecap="round" />
            <path d="M25,20.5 Q27.5,19 30.5,21" strokeWidth="0.9" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Right arm (mirror of left) */}
      <div className="flex-1 flex items-center">
        <div className="w-4  h-px bg-[#C9A84C]/75" />
        <div className="w-10 h-px bg-[#C9A84C]/55" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/35" />
      </div>
    </div>
  );
}
