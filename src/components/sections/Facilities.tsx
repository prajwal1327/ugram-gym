'use client';

import { motion } from 'framer-motion';
import {
  Dumbbell,
  Activity,
  Zap,
  Target,
  Droplets,
  Shield,
  Apple,
  Wifi,
  ArrowRight,
} from 'lucide-react';

const FACILITIES = [
  {
    icon: Dumbbell,
    title: 'Strength Zone',
    description: '200+ free weights, power racks, cable machines, and Olympic platforms.',
    tag: 'Power Training',
  },
  {
    icon: Activity,
    title: 'Cardio Arena',
    description: 'Latest treadmills, ellipticals, stationary bikes, and rowing machines.',
    tag: 'Cardio',
  },
  {
    icon: Zap,
    title: 'CrossFit Box',
    description: 'Dedicated CrossFit area with rig, barbells, bumper plates, and boxes.',
    tag: 'Functional',
  },
  {
    icon: Target,
    title: 'Functional Training',
    description: 'TRX suspension trainers, kettlebells, battle ropes, prowler sleds.',
    tag: 'Athletic',
  },
  {
    icon: Droplets,
    title: 'Steam Room',
    description: 'Post-workout recovery steam room for muscle relaxation and detox.',
    tag: 'Recovery',
  },
  {
    icon: Shield,
    title: 'Locker Rooms',
    description: 'Clean, secure lockers with private shower facilities and amenities.',
    tag: 'Comfort',
  },
  {
    icon: Apple,
    title: 'Nutrition Corner',
    description: 'In-house supplement bar, protein shakes, and nutrition consultation.',
    tag: 'Nutrition',
  },
  {
    icon: Wifi,
    title: 'Free High-Speed WiFi',
    description: 'Stay connected with complimentary high-speed WiFi throughout the facility.',
    tag: 'Convenience',
  },
];

export default function Facilities() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
            <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C]/70 uppercase">
              Our Facilities
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            <span className="text-white">WORLD-CLASS </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              FACILITIES
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-sm font-[family-name:var(--font-montserrat)] max-w-lg mx-auto leading-relaxed">
            Every corner of UGRAMM FITNESS is designed to push you further — from premium equipment to
            post-workout recovery.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.04] hover:shadow-[0_0_40px_rgba(201,168,76,0.06)] hover:scale-[1.02]"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C]/20 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <span className="text-[10px] font-[family-name:var(--font-montserrat)] font-bold tracking-widest text-[#C9A84C]/50 uppercase bg-[#C9A84C]/5 border border-[#C9A84C]/15 rounded-full px-3 py-1">
                    {facility.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg mb-2 group-hover:text-[#E8D5A3] transition-colors duration-300">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-montserrat)] text-white/50 text-sm leading-relaxed">
                  {facility.description}
                </p>

                {/* Arrow (appears on hover) */}
                <div className="mt-4 flex items-center gap-1 text-[#C9A84C] text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/917019497000?text=Hi! I want to visit UGRAMM FITNESS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-105"
          >
            Book a Tour
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
