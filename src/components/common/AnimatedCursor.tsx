'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const currentSize = useRef(8);
  const targetSize = useRef(8);
  const isHover = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"], label')) {
        isHover.current = true;
        targetSize.current = 30;
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('a, button, [role="button"], label')) {
        isHover.current = false;
        targetSize.current = 8;
      }
    };

    const tick = () => {
      // Smooth position lerp
      pos.current.x += (mouse.current.x - pos.current.x) * 0.16;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.16;

      // Smooth size lerp
      currentSize.current += (targetSize.current - currentSize.current) * 0.18;
      const s = currentSize.current;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - s / 2}px, ${pos.current.y - s / 2}px)`;
        cursorRef.current.style.width = `${s}px`;
        cursorRef.current.style.height = `${s}px`;
        cursorRef.current.style.backgroundColor = isHover.current
          ? 'rgba(201,168,76,0.2)'
          : '#C9A84C';
        cursorRef.current.style.border = isHover.current
          ? '1.5px solid #C9A84C'
          : 'none';
      }

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `html, html * { cursor: none !important; }` }} />
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#C9A84C',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
    </>
  );
}
