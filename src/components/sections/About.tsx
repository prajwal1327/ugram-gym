'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Award, Star, Shield } from 'lucide-react';
import Link from 'next/link';
import LionSVG from '@/components/common/LionSVG';

const FEATURES = [
  'State-of-the-art Equipment',
  'Expert Certified Trainers',
  'Personalized Programs',
  'Premium Facilities',
  'Nutrition Guidance',
  'Progress Tracking',
];

export default function About() {
  return (
    <section className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 100% 50%, rgba(201,168,76,1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C] uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none mb-3"
              style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}
            >
              <span className="text-white">MORE THAN</span>
              <br />
              <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
                A GYM.
              </span>
            </h2>

            <p className="font-[family-name:var(--font-montserrat)] font-semibold text-white/70 text-lg mb-6 italic">
              We forge champions.
            </p>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm leading-relaxed">
                UGRAMM FITNESS is Bidar&apos;s most premium fitness destination, founded in 2019 with a singular
                mission: to bring world-class fitness infrastructure to Karnataka&apos;s historic city. We believe every
                person in Bidar deserves access to the best training environment, elite coaching, and a community that
                pushes you beyond your limits.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm leading-relaxed">
                Our state-of-the-art facility spans over 5,000 sq ft, housing 100+ premium machines, dedicated
                strength and cardio zones, and a team of certified fitness professionals. Whether you&apos;re a first-time
                gym-goer or a seasoned athlete, UGRAMM FITNESS is built for you.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm leading-relaxed">
                With 500+ active members and 200+ documented transformations, we&apos;re not just a gym — we&apos;re a
                movement. This is where lions train. <span className="text-[#C9A84C]">Rise. Roar. Rule.</span>
              </p>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  <span className="text-white/70 text-sm font-[family-name:var(--font-montserrat)] font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[#C9A84C] font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-4"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative lion watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <LionSVG className="w-64 h-72 opacity-[0.04]" />
            </div>

            <div className="relative space-y-4">
              {/* Top card: Bidar's Finest */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-bebas)] text-white text-2xl leading-none">
                    BIDAR&apos;S FINEST GYM
                  </div>
                  <div className="text-[#C9A84C]/70 text-xs font-[family-name:var(--font-montserrat)] font-semibold tracking-widest uppercase mt-1">
                    #1 Premium Fitness Center
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center gap-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-3 py-1 text-[#C9A84C] text-xs font-[family-name:var(--font-montserrat)] font-bold">
                    <Star className="w-3 h-3 fill-current" /> 4.9
                  </span>
                </div>
              </div>

              {/* Main image placeholder */}
              <div
                className="relative rounded-2xl overflow-hidden h-64 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, #1A1200 0%, #2A1E00 30%, #1A1200 60%, #0D0900 100%)',
                }}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <LionSVG className="w-32 h-36 opacity-30" />
                  <span
                    className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent text-2xl tracking-widest mt-2"
                  >
                    UGRAMM FITNESS
                  </span>
                  <span className="text-[#C9A84C]/50 text-xs font-[family-name:var(--font-montserrat)] tracking-[0.3em] mt-1">
                    BIDAR, KARNATAKA
                  </span>
                </div>

                {/* EST badge */}
                <div className="absolute top-4 right-4 bg-[#C9A84C]/10 border border-[#C9A84C]/30 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                  <div className="text-[#C9A84C]/60 text-[10px] font-[family-name:var(--font-montserrat)] font-bold tracking-widest uppercase">
                    Est.
                  </div>
                  <div className="font-[family-name:var(--font-bebas)] text-[#C9A84C] text-2xl leading-none">
                    2019
                  </div>
                </div>
              </div>

              {/* Bottom row: two mini cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-4 text-center">
                  <div className="font-[family-name:var(--font-bebas)] text-[#C9A84C] text-3xl leading-none">
                    5000+
                  </div>
                  <div className="text-white/50 text-xs font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-widest mt-1">
                    Sq. Ft. Facility
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1">
                  <Shield className="w-5 h-5 text-[#C9A84C]" />
                  <div className="text-white/80 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-wider">
                    Certified Trainers
                  </div>
                  <div className="text-[#C9A84C]/70 text-xs font-[family-name:var(--font-montserrat)]">
                    All NSCA / ACE Certified
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
