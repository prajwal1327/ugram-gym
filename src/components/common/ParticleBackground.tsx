'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDir: number;
  twinkleSpeed: number;
}

interface ParticleBackgroundProps {
  /** Scale particle density (default 1.0). */
  intensity?: number;
  className?: string;
}

export default function ParticleBackground({
  intensity = 1,
  className = '',
}: ParticleBackgroundProps) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rafRef       = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Sizing ──────────────────────────────────────────────
    const setSize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    // ── Init particles ──────────────────────────────────────
    const init = () => {
      const count = Math.floor(80 * Math.min(Math.max(intensity, 0.2), 3));
      particlesRef.current = Array.from({ length: count }, () => ({
        x:            Math.random() * canvas.width,
        y:            Math.random() * canvas.height,
        vx:           (Math.random() - 0.5) * 0.28,
        vy:           (Math.random() - 0.5) * 0.28,
        radius:       Math.random() * 1.4 + 0.4,
        opacity:      Math.random() * 0.45 + 0.08,
        opacityDir:   Math.random() > 0.5 ? 1 : -1,
        twinkleSpeed: Math.random() * 0.004 + 0.0015,
      }));
    };
    init();

    // ── Render loop ─────────────────────────────────────────
    const MAX_LINK_DIST = 110;
    const GOLD_R = 201, GOLD_G = 168, GOLD_B = 76;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      const w  = canvas.width;
      const h  = canvas.height;

      // Update positions and opacity
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacityDir * p.twinkleSpeed;
        if (p.opacity > 0.6)  p.opacityDir = -1;
        if (p.opacity < 0.04) p.opacityDir =  1;
        if (p.x < 0)  p.x = w;
        if (p.x > w)  p.x = 0;
        if (p.y < 0)  p.y = h;
        if (p.y > h)  p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < ps.length - 1; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx   = ps[i].x - ps[j].x;
          const dy   = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= MAX_LINK_DIST) continue;

          const alpha = 0.09 * (1 - dist / MAX_LINK_DIST);
          ctx.beginPath();
          ctx.moveTo(ps[i].x, ps[i].y);
          ctx.lineTo(ps[j].x, ps[j].y);
          ctx.strokeStyle = `rgba(${GOLD_R},${GOLD_G},${GOLD_B},${alpha.toFixed(3)})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of ps) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD_R},${GOLD_G},${GOLD_B},${p.opacity.toFixed(3)})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    // ── Responsive resize ───────────────────────────────────
    const ro = new ResizeObserver(() => {
      setSize();
      init();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
