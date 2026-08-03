"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Radial glow behind 404 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Lion SVG watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-[520px] h-[520px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified lion silhouette */}
          <ellipse cx="100" cy="110" rx="52" ry="58" fill="#C9A84C" />
          {/* Mane */}
          <circle cx="100" cy="88" r="46" fill="#C9A84C" />
          <circle cx="100" cy="88" r="34" fill="#0A0A0A" />
          {/* Head */}
          <ellipse cx="100" cy="82" rx="28" ry="26" fill="#C9A84C" />
          {/* Ears */}
          <polygon points="76,62 68,44 84,58" fill="#C9A84C" />
          <polygon points="124,62 132,44 116,58" fill="#C9A84C" />
          {/* Eyes */}
          <ellipse cx="91" cy="78" rx="5" ry="5" fill="#0A0A0A" />
          <ellipse cx="109" cy="78" rx="5" ry="5" fill="#0A0A0A" />
          <circle cx="92" cy="77" r="1.5" fill="#C9A84C" />
          <circle cx="110" cy="77" r="1.5" fill="#C9A84C" />
          {/* Nose */}
          <ellipse cx="100" cy="88" rx="5" ry="3.5" fill="#0A0A0A" />
          {/* Mouth */}
          <path
            d="M95 91 Q100 96 105 91"
            stroke="#0A0A0A"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Body */}
          <ellipse cx="100" cy="148" rx="34" ry="38" fill="#C9A84C" />
          {/* Front paws */}
          <ellipse cx="80" cy="178" rx="12" ry="8" fill="#C9A84C" />
          <ellipse cx="120" cy="178" rx="12" ry="8" fill="#C9A84C" />
          {/* Tail */}
          <path
            d="M134 150 Q160 130 154 108 Q148 96 156 90"
            stroke="#C9A84C"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="158" cy="86" r="9" fill="#C9A84C" />
        </svg>
      </motion.div>

      {/* 404 number */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 select-none"
      >
        <span
          className="font-bebas text-[clamp(120px,22vw,220px)] leading-none tracking-widest"
          style={{
            background:
              "linear-gradient(90deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </span>
      </motion.div>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 w-40 h-px mb-8"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 font-bebas text-3xl sm:text-4xl tracking-widest text-white mb-3 text-center"
      >
        PAGE NOT FOUND
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 font-inter text-sm sm:text-base text-white/50 text-center max-w-xs mb-10"
      >
        Looks like this page went off-track. Even lions miss a step sometimes.
        Let&apos;s get you back on the path.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="relative z-10"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-4 font-bebas tracking-widest text-lg border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
        >
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          BACK TO HOME
        </Link>
      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 z-10 font-bebas tracking-[0.4em] text-sm text-[#C9A84C]"
      >
        RISE . ROAR . RULE
      </motion.p>
    </main>
  );
}
