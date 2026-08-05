'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(
  () => import('@/components/common/ParticleBackground'),
  { ssr: false }
);

const STATS = [
  { value: '500+', label: 'Members' },
  { value: '100+', label: 'Machines' },
  { value: '5+',   label: 'Years' },
  { value: '200+', label: 'Wins' },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle gold grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gold glow left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 25% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Gold glow right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 70% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 45%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>

      {/* ── Particles ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <ParticleBackground />
      </div>

      {/* ── Crown lion — right side hero visual (desktop only) ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] z-[2] pointer-events-none hidden lg:block">
        {/* Left fade blend */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.3) 35%, transparent 65%)' }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 25%, transparent 70%, rgba(10,10,10,0.9) 100%)' }}
        />
        {/* Gold glow overlay */}
        <div
          className="absolute inset-0 z-[9]"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 35%, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
        />
        <Image
          src="/images/lion-crown.webp"
          alt="Roaring crowned lion — UGRAMM FITNESS"
          fill
          priority
          className="object-cover object-center hero-lion-photo"
          style={{ opacity: 0.88 }}
        />
      </div>

      {/* ── HUGE faded UGRAMM background text ── */}
      <div className="absolute inset-0 flex items-center justify-start z-[2] pointer-events-none select-none overflow-hidden pl-4">
        <span
          className="font-[family-name:var(--font-bebas)] text-white"
          style={{ fontSize: 'clamp(120px, 25vw, 340px)', opacity: 0.025, letterSpacing: '0.04em', lineHeight: 1 }}
        >
          UGRAMM
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">

          {/* LEFT — brand + headline + CTA */}
          <div className="flex-1 flex flex-col justify-center lg:max-w-[58%]">

            {/* Brand badge row */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="relative w-[68px] h-[68px] shrink-0" style={{ filter: 'drop-shadow(0 0 18px rgba(201,168,76,0.35))' }}>
                <Image
                  src="/images/logo.jpeg"
                  alt="UGRAMM FITNESS Logo"
                  fill
                  className="object-cover rounded-full"
                  style={{ border: '2px solid rgba(201,168,76,0.55)' }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-px bg-[#C9A84C]" />
                  <span
                    className="text-[#C9A84C] text-[10px] font-bold tracking-[0.35em] uppercase"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Est. 2026
                  </span>
                  <div className="w-5 h-px bg-[#C9A84C]" />
                </div>
                <p
                  className="text-white/35 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Bidar, Karnataka
                </p>
              </div>
            </motion.div>

            {/* Main headline */}
            <div className="mb-5">
              {['RISE.', 'ROAR.', 'RULE.'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -80, skewX: -4 }}
                  animate={{ opacity: 1, x: 0, skewX: 0 }}
                  transition={{ delay: 0.35 + i * 0.14, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  style={{ paddingLeft: `${i * 1.2}rem` }}
                >
                  <span
                    className="block font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                    style={{ fontSize: 'clamp(68px, 11.5vw, 136px)' }}
                  >
                    {line}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="text-white/45 text-xs font-semibold tracking-[0.35em] uppercase mb-8"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Where Lions Train · Bidar's Finest Gym
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex gap-6 sm:gap-10 mb-10"
            >
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                    style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-white/35 text-[9px] font-bold tracking-widest uppercase mt-0.5"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_36px_rgba(201,168,76,0.6)] hover:scale-105 overflow-hidden"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                <span className="relative z-10">JOIN NOW</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#E8D5A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://wa.me/917019497000?text=Hi! I want to book a free trial at UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#C9A84C]/55 text-[#C9A84C] font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] hover:shadow-[0_0_24px_rgba(201,168,76,0.2)]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                BOOK FREE TRIAL
              </a>

              <a
                href="https://wa.me/917019497000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] rounded-full transition-all duration-300 hover:bg-[#25D366]/25 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Crown lion (mobile only; desktop version is absolute-positioned above) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden relative w-72 h-72 sm:w-80 sm:h-80 mx-auto shrink-0"
          >
            {/* Gold ring */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: '0 0 60px rgba(201,168,76,0.2), 0 0 120px rgba(201,168,76,0.08)' }}
            />
            <Image
              src="/images/lion-crown.webp"
              alt="Roaring crowned lion"
              fill
              className="object-cover rounded-2xl"
              style={{ border: '1px solid rgba(201,168,76,0.2)' }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.75) 100%)' }}
            />
            {/* Logo overlay on mobile lion */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="relative w-8 h-8 shrink-0">
                <Image src="/images/logo.jpeg" alt="Logo" fill className="object-cover rounded-full" />
              </div>
              <span
                className="text-white text-xs font-black tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-bebas)', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              >
                UGRAMM FITNESS
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-white/25 text-[9px] font-bold tracking-[0.35em] uppercase"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#C9A84C]/45" />
        </motion.div>
      </motion.div>
    </section>
  );
}
