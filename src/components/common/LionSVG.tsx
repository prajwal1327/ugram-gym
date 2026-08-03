import type { FC } from 'react';

interface LionSVGProps {
  size?: number;
  color?: string;
  className?: string;
  opacity?: number;
}

const LionSVG: FC<LionSVGProps> = ({
  size = 100,
  color = '#C9A84C',
  className = '',
  opacity = 1,
}) => {
  // Stable IDs derived from props — safe for SSR hydration
  const colorKey    = color.replace(/[^a-zA-Z0-9]/g, '');
  const filterId    = `lsvg-glow-${colorKey}`;
  const innerGlowId = `lsvg-inner-${colorKey}`;
  const gradId      = `lsvg-grad-${colorKey}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-label="UGRAMM FITNESS Lion"
      role="img"
    >
      <defs>
        <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={innerGlowId} x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#E8D5A3" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>

      {/* ── OUTER MANE — 12-point starburst ── */}
      <g filter={`url(#${filterId})`}>
        <path
          d="M100,8 L119,29 L146,20 L152,48 L180,54 L172,81
             L192,100 L172,119 L180,146 L152,152 L146,180
             L119,172 L100,192 L81,172 L54,180 L48,152
             L20,146 L29,119 L8,100 L29,81 L20,54 L48,48
             L54,20 L81,29 Z"
          stroke={color}
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* ── INNER MANE RING — secondary starburst rotated 15° ── */}
        <path
          d="M100,22 L117,38 L138,31 L148,52 L170,61
             L164,82 L180,100 L164,118 L170,139 L148,148
             L138,169 L117,162 L100,178 L83,162 L62,169
             L52,148 L30,139 L36,118 L20,100 L36,82 L30,61
             L52,52 L62,31 L83,38 Z"
          stroke={color}
          strokeWidth="1"
          strokeLinejoin="round"
          strokeDasharray="4,3"
          opacity="0.45"
        />

        {/* ── MANE FLOW LINES — radial texture ── */}
        {/* Top quadrant */}
        <path d="M100,22 Q97,36 100,52"   stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M117,25 Q113,39 110,54"  stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M83,25 Q87,39 90,54"     stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M134,32 Q127,45 122,58"  stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M66,32 Q73,45 78,58"     stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        {/* Right quadrant */}
        <path d="M178,100 Q164,97 148,100" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M175,83 Q161,87 146,92"   stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M175,117 Q161,113 146,108" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        {/* Left quadrant */}
        <path d="M22,100 Q36,97 52,100"   stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M25,83 Q39,87 54,92"     stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M25,117 Q39,113 54,108"  stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        {/* Bottom quadrant */}
        <path d="M100,178 Q97,164 100,148" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
        <path d="M117,175 Q113,161 110,146" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M83,175 Q87,161 90,146"   stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* ── EARS ── */}
      <g filter={`url(#${innerGlowId})`} stroke={color} fill="none">
        <path d="M76,58 Q68,44 79,38 Q89,44 87,60 Z"    strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M124,58 Q132,44 121,38 Q111,44 113,60 Z" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Ear inner detail */}
        <path d="M78,57 Q73,47 80,42 Q86,47 85,58 Z"    strokeWidth="0.8" opacity="0.5" />
        <path d="M122,57 Q127,47 120,42 Q114,47 115,58 Z" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* ── FACE OUTLINE ── */}
      <ellipse
        cx="100" cy="110"
        rx="52" ry="60"
        stroke={color} strokeWidth="1.8"
        filter={`url(#${innerGlowId})`}
      />

      {/* ── FOREHEAD STRUCTURE ── */}
      <path
        d="M75,72 Q100,64 125,72"
        stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5"
      />

      {/* ── BROW RIDGES ── */}
      <path d="M68,86 Q80,78 93,83"  stroke={color} strokeWidth="2"   strokeLinecap="round" />
      <path d="M107,83 Q120,78 132,86" stroke={color} strokeWidth="2"   strokeLinecap="round" />
      {/* Brow inner accent */}
      <path d="M72,84 Q80,80 91,84"  stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M109,84 Q120,80 128,84" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* ── LEFT EYE — almond/diamond shape ── */}
      <g filter={`url(#${innerGlowId})`}>
        <path
          d="M68,97 Q80,87 92,97 Q80,107 68,97 Z"
          stroke={color} strokeWidth="1.6"
        />
        {/* Iris ring */}
        <circle cx="80" cy="97" r="4.5" stroke={color} strokeWidth="1" opacity="0.7" />
        {/* Pupil */}
        <circle cx="80" cy="97" r="2"   fill={color} opacity="0.9" />
        {/* Highlight */}
        <circle cx="81.5" cy="95.5" r="0.9" fill="white" opacity="0.8" />
      </g>

      {/* ── RIGHT EYE ── */}
      <g filter={`url(#${innerGlowId})`}>
        <path
          d="M108,97 Q120,87 132,97 Q120,107 108,97 Z"
          stroke={color} strokeWidth="1.6"
        />
        <circle cx="120" cy="97" r="4.5" stroke={color} strokeWidth="1" opacity="0.7" />
        <circle cx="120" cy="97" r="2"   fill={color} opacity="0.9" />
        <circle cx="121.5" cy="95.5" r="0.9" fill="white" opacity="0.8" />
      </g>

      {/* ── NOSE BRIDGE ── */}
      <path
        d="M96,104 L96,116 Q100,118 104,116 L104,104"
        stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"
      />

      {/* ── NOSE — diamond shape ── */}
      <path
        d="M93,116 Q100,111 107,116 L107,122 Q100,127 93,122 Z"
        stroke={color} strokeWidth="1.6"
        fill={color} fillOpacity="0.2"
        strokeLinejoin="round"
        filter={`url(#${innerGlowId})`}
      />
      {/* Nostril dots */}
      <circle cx="97"  cy="119" r="1.5" fill={color} opacity="0.6" />
      <circle cx="103" cy="119" r="1.5" fill={color} opacity="0.6" />

      {/* ── CHEEKBONE STRUCTURE ── */}
      {/* Left cheek arc */}
      <path d="M62,104 Q56,120 62,134" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Right cheek arc */}
      <path d="M138,104 Q144,120 138,134" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* ── WHISKER LINES — left ── */}
      <path d="M64,108 L82,112" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      <path d="M62,116 L80,117" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      <path d="M64,124 L81,122" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.45" />
      {/* Whisker dots left */}
      <circle cx="69" cy="111" r="1" fill={color} opacity="0.5" />
      <circle cx="67" cy="117" r="1" fill={color} opacity="0.5" />

      {/* ── WHISKER LINES — right ── */}
      <path d="M136,108 L118,112" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      <path d="M138,116 L120,117" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      <path d="M136,124 L119,122" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.45" />
      <circle cx="131" cy="111" r="1" fill={color} opacity="0.5" />
      <circle cx="133" cy="117" r="1" fill={color} opacity="0.5" />

      {/* ── MOUTH / MUZZLE ── */}
      <path
        d="M88,132 Q100,140 112,132"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.8"
      />
      {/* Philtrum */}
      <path d="M100,127 L100,133"  stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Lip corners */}
      <path d="M100,133 L97,140"   stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M100,133 L103,140"  stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* ── CHIN / JAW DETAIL ── */}
      <path
        d="M84,144 Q100,158 116,144 Q112,165 100,168 Q88,165 84,144 Z"
        stroke={color} strokeWidth="1.4" strokeLinejoin="round"
        fill={color} fillOpacity="0.05"
        opacity="0.7"
      />

      {/* ── FOREHEAD CROWN MARKINGS ── */}
      <path d="M96,72 L100,66 L104,72"   stroke={color} strokeWidth="1" strokeLinejoin="round" opacity="0.5" />
      <path d="M88,76 Q100,70 112,76"    stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />

      {/* ── CENTER FOREHEAD DIAMOND ── */}
      <path
        d="M100,74 L104,78 L100,82 L96,78 Z"
        stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15"
        filter={`url(#${innerGlowId})`}
      />
    </svg>
  );
};

export default LionSVG;
