'use client';

import type { CSSProperties } from 'react';

interface ScrollingMarqueeProps {
  /** Full text string including separators, e.g. "WORD • WORD •". Repeated internally. */
  text?: string;
  /** Seconds for one full scroll cycle (default 32). */
  speed?: number;
  /** Scroll direction (default "left"). */
  direction?: 'left' | 'right';
  className?: string;
}

const DEFAULT_TEXT =
  'STRENGTH • DISCIPLINE • POWER • CONSISTENCY • DEDICATION • UGRAMM FITNESS • RISE ROAR RULE • LIONS TRAIN HERE • ELITE FITNESS •';

// Unique animation name to avoid global collisions
const ANIM_NAME = 'ugramm-marquee-scroll';

export default function ScrollingMarquee({
  text      = DEFAULT_TEXT,
  speed     = 32,
  direction = 'left',
  className = '',
}: ScrollingMarqueeProps) {
  // Two identical tracks placed side by side; we shift by exactly -50% to loop
  const tracks = [text, text] as const;

  const animStyle: CSSProperties = {
    animation: `${ANIM_NAME} ${speed}s linear infinite`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    willChange: 'transform',
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#0D0D0D] py-3 ${className}`}
      aria-hidden="true"
    >
      {/* Top / bottom gold lines */}
      <div className="absolute inset-x-0 top-0    h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0  w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track — hover pauses */}
      <div
        className="flex whitespace-nowrap hover:[animation-play-state:paused] focus:[animation-play-state:paused]"
        style={animStyle}
      >
        {tracks.map((t, i) => (
          <span
            key={i}
            className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.28em] text-[#C9A84C]/65 uppercase px-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            aria-hidden={i > 0}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Keyframe injected inline so no globals.css edit needed */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes ${ANIM_NAME} {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `,
        }}
      />
    </div>
  );
}
