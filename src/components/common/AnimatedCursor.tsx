'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Premium custom cursor — small gold dot + lagging ring.
 * Rendered only on pointer-capable (non-touch) devices.
 * Hides the default cursor site-wide via an injected <style>.
 */
export default function AnimatedCursor() {
  const [isMounted, setIsMounted]   = useState(false);
  const [isPointer, setIsPointer]   = useState(false);
  const [isVisible, setIsVisible]   = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position (dot follows immediately)
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Ring follows with spring delay
  const springCfg = { damping: 22, stiffness: 180, mass: 0.6 };
  const ringX = useSpring(mouseX, springCfg);
  const ringY = useSpring(mouseY, springCfg);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only activate on devices that support hover (non-touch)
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    setIsMounted(true);
    setIsPointer(true);

    const onMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive =
        el.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]') !== null ||
        getComputedStyle(el).cursor === 'pointer';
      if (interactive) setIsHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive =
        el.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]') !== null;
      if (interactive) setIsHovering(false);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove',   onMove,  { passive: true });
    document.addEventListener('mouseover', onOver,  { passive: true });
    document.addEventListener('mouseout',  onOut,   { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    document.addEventListener('mouseenter', onEnter, { passive: true });

    return () => {
      window.removeEventListener('mousemove',    onMove);
      document.removeEventListener('mouseover',  onOver);
      document.removeEventListener('mouseout',   onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render at all on touch/no-hover devices or during SSR
  if (!isMounted || !isPointer) return null;

  return (
    <>
      {/* ── Global style: hide default cursor ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `html, html * { cursor: none !important; }`,
        }}
      />

      {/* ── Dot (follows instantly) ── */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full bg-[#C9A84C]"
        style={{
          width: 6,
          height: 6,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.15s',
        }}
      />

      {/* ── Ring (spring-delayed) ── */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[99998] pointer-events-none rounded-full border border-[#C9A84C]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? (isHovering ? 0.75 : 0.35) : 0,
        }}
        animate={{
          width:  isHovering ? 44 : 28,
          height: isHovering ? 44 : 28,
          backgroundColor: isHovering ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0)',
        }}
        transition={{
          width:  { type: 'spring', stiffness: 260, damping: 22 },
          height: { type: 'spring', stiffness: 260, damping: 22 },
          backgroundColor: { duration: 0.2 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  );
}
