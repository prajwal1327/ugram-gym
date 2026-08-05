'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, type FC } from 'react';
import Image from 'next/image';

interface LoaderProps {
  onComplete?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  initialOpacity: number;
}

// Generate particles deterministically to avoid SSR/client mismatch
const PARTICLES: Particle[] = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: ((i * 137.5) % 100),
  y: ((i * 97.3) % 100),
  size: (i % 3) + 1,
  duration: 2 + (i % 3),
  delay: (i * 0.15) % 2,
  initialOpacity: 0.1 + ((i % 5) * 0.1),
}));

const Loader: FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete?.(), 600);
          }, 350);
          return 100;
        }
        const increment =
          prev < 25 ? 3.5 :
          prev < 55 ? 2.0 :
          prev < 80 ? 1.2 :
          prev < 95 ? 0.8 : 2.5;
        return Math.min(prev + increment, 100);
      });
    }, 28);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.04, delay: 0.5 + i * 0.04 },
    }),
  };

  const brandName = 'UGRAMM FITNESS';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden select-none"
        >
          {/* Ambient radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.07)_0%,transparent_100%)] pointer-events-none" />

          {/* Corner accent lines */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-[#C9A84C]/30" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-[#C9A84C]/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-[#C9A84C]/30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-[#C9A84C]/30" />

          {/* Gold shimmer particles */}
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-[#C9A84C] pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                opacity: [0, p.initialOpacity + 0.3, 0],
                scale: [0.5, 1.8, 0.5],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.34, 1.3, 0.64, 1] }}
            className="relative mb-7"
          >
            <div className="absolute inset-0 blur-2xl bg-[#C9A84C]/20 rounded-full scale-125 pointer-events-none" />
            <div className="relative w-32 h-32" style={{ filter: 'drop-shadow(0 0 28px rgba(201,168,76,0.5))' }}>
              <Image
                src="/images/logo.jpeg"
                alt="UGRAMM FITNESS"
                fill
                className="object-cover rounded-full"
                style={{ border: '2.5px solid rgba(201,168,76,0.5)' }}
                priority
              />
            </div>
          </motion.div>

          {/* Brand name — letter-by-letter reveal */}
          <div
            className="flex overflow-hidden mb-3"
            aria-label="UGRAMM FITNESS"
          >
            {brandName.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`text-5xl sm:text-6xl font-black tracking-[0.18em] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent`}
                style={{
                  fontFamily: 'var(--font-bebas)',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 0.6, letterSpacing: '0.42em' }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-[#A1A1AA] text-[10px] sm:text-xs tracking-[0.42em] uppercase mb-20"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            RISE.&nbsp; ROAR.&nbsp; RULE.
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-56 sm:w-72"
          >
            {/* Track */}
            <div className="w-full h-[1.5px] bg-[#1A1A1A] rounded-full overflow-hidden relative">
              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#D4AF37] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ left: 0 }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span
                className="text-[#A1A1AA]/60 text-[9px] tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Loading
              </span>
              <motion.span
                className="text-[#C9A84C] text-[9px] font-semibold tabular-nums"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
