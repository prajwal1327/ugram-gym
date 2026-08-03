'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LionSVG from '@/components/common/LionSVG';

const ParticleBackground = dynamic(
  () => import('@/components/common/ParticleBackground'),
  { ssr: false }
);

const STATS = [
  { value: '500+', label: 'Members' },
  { value: '100+', label: 'Machines' },
  { value: '5+', label: 'Years' },
  { value: '200+', label: 'Transformations' },
];

const textLines = ['RISE.', 'ROAR.', 'RULE.'];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Real lion photo */}
        <Image
          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1920&q=80"
          alt="Lion"
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Radial gold gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Subtle vertical light beam */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full"
          style={{
            background:
              'linear-gradient(to bottom, rgba(201,168,76,0.15), transparent 60%)',
          }}
        />
        {/* Corner vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-1">
        <ParticleBackground />
      </div>

      {/* Huge faded background text */}
      <div className="absolute inset-0 flex items-center justify-center z-2 pointer-events-none select-none overflow-hidden">
        <span
          className="font-[family-name:var(--font-bebas)] text-white whitespace-nowrap"
          style={{ fontSize: 'clamp(100px, 22vw, 320px)', opacity: 0.03, letterSpacing: '0.05em' }}
        >
          UGRAMM
        </span>
      </div>

      {/* EST. 2019 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-6 left-6 z-10 flex items-center gap-2"
      >
        <div className="w-6 h-[1px] bg-[#C9A84C]" />
        <span className="text-[#C9A84C] text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.25em] uppercase">
          Est. 2019
        </span>
        <div className="w-6 h-[1px] bg-[#C9A84C]" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0">

          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Main headline */}
            <div className="mb-6">
              {textLines.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -80, skewX: -5 }}
                  animate={{ opacity: 1, x: 0, skewX: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ paddingLeft: `${i * 1.5}rem` }}
                >
                  <span
                    className="block font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                    style={{ fontSize: 'clamp(72px, 13vw, 140px)' }}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mb-10 space-y-1"
            >
              <p className="text-white/60 text-xs font-[family-name:var(--font-montserrat)] font-semibold tracking-[0.4em] uppercase">
                Where Lions Train
              </p>
              <p className="text-[#C9A84C]/80 text-xs font-[family-name:var(--font-montserrat)] font-medium tracking-[0.3em] uppercase">
                UGRAMM FITNESS, BIDAR
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">JOIN NOW</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E8D5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://wa.me/917019497000?text=Hi! I want to book a free trial at UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-[#C9A84C]/60 text-[#C9A84C] font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
              >
                <span>BOOK FREE TRIAL</span>
              </a>

              <a
                href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] rounded-full transition-all duration-300 hover:bg-[#25D366]/30 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* CENTER LION */}
          <div className="relative flex items-center justify-center lg:w-[380px] lg:flex-shrink-0 order-first lg:order-none">
            {/* Circular gold halo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="rounded-full"
                style={{
                  width: '340px',
                  height: '340px',
                  background:
                    'radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 50%, transparent 70%)',
                  boxShadow: '0 0 80px rgba(201,168,76,0.2), 0 0 160px rgba(201,168,76,0.08)',
                }}
              />
            </motion.div>

            {/* Rotating ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25, rotate: 360 }}
              transition={{
                opacity: { delay: 0.5, duration: 1 },
                rotate: { duration: 30, repeat: Infinity, ease: 'linear', delay: 0 },
              }}
              className="absolute"
              style={{ width: '360px', height: '360px' }}
            >
              <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="180" cy="180" r="175" stroke="#C9A84C" strokeWidth="1" strokeDasharray="8 12" />
              </svg>
            </motion.div>

            {/* Lion SVG */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                scale: { delay: 0.4, duration: 1.2, type: 'spring', stiffness: 80 },
                opacity: { delay: 0.4, duration: 1 },
                y: {
                  delay: 1.6,
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.4))' }}
            >
              <LionSVG className="w-[300px] h-[320px] lg:w-[340px] lg:h-[360px]" />
            </motion.div>
          </div>

          {/* RIGHT STATS (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-1 flex-col justify-center items-end gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-right hover:border-[#C9A84C]/30 transition-all duration-300 hover:bg-[#C9A84C]/5 min-w-[120px]"
                >
                  <div
                    className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                    style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs font-[family-name:var(--font-montserrat)] font-semibold tracking-widest uppercase mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex lg:hidden justify-center gap-6 mt-10 flex-wrap"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none text-4xl"
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-xs font-[family-name:var(--font-montserrat)] font-semibold tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] font-[family-name:var(--font-montserrat)] font-bold tracking-[0.3em] uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#C9A84C]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
