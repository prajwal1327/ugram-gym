'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Calendar, Dumbbell, TrendingUp } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Members',
    sublabel: 'Active gym members',
    color: '#C9A84C',
  },
  {
    icon: Calendar,
    value: 5,
    suffix: '+',
    label: 'Years',
    sublabel: 'Of excellence',
    color: '#E8D5A3',
  },
  {
    icon: Dumbbell,
    value: 100,
    suffix: '+',
    label: 'Machines',
    sublabel: 'Premium equipment',
    color: '#C9A84C',
  },
  {
    icon: TrendingUp,
    value: 200,
    suffix: '+',
    label: 'Transformations',
    sublabel: 'Lives changed',
    color: '#E8D5A3',
  },
];

const MARQUEE_ITEMS = [
  'STRENGTH', 'POWER', 'DEDICATION', 'CONSISTENCY',
  'UGRAMM FITNESS', 'RISE ROAR RULE', 'DISCIPLINE',
  'TRANSFORMATION', 'CHAMPIONS', 'BIDAR',
  'STRENGTH', 'POWER', 'DEDICATION', 'CONSISTENCY',
  'UGRAMM FITNESS', 'RISE ROAR RULE', 'DISCIPLINE',
  'TRANSFORMATION', 'CHAMPIONS', 'BIDAR',
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-[#111111] overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C]/60 uppercase">
            By The Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-400 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
              >
                {/* Gold top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>

                {/* Number */}
                <div
                  className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none mb-2"
                  style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="font-[family-name:var(--font-montserrat)] font-bold text-white text-sm uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="font-[family-name:var(--font-montserrat)] text-white/40 text-xs">
                  {stat.sublabel}
                </div>

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.color}08 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="mt-16 overflow-hidden border-t border-[#C9A84C]/10">
        <div
          className="flex items-center py-5"
          style={{ animation: 'marqueeScroll 35s linear infinite' }}
        >
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mx-5 shrink-0">
              <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.3em] text-[#C9A84C]/50 uppercase">
                {item}
              </span>
              <span className="text-[#C9A84C]/25 text-sm">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
