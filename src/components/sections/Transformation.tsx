'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Dumbbell, MessageCircle } from 'lucide-react';

const TRANSFORMATIONS = [
  {
    name: 'Rahul',
    duration: '3 Months',
    weightLost: '-14 kg',
    bodyFat: '-7%',
    quote:
      'I never thought I could look like this in just 3 months. The trainers at UGRAMM pushed me every single day.',
    goal: 'Fat Loss',
    gradient: 'from-[#1A2A1A] to-[#0A1A0A]',
    accentColor: '#4CAF50',
  },
  {
    name: 'Aisha',
    duration: '6 Months',
    weightLost: '-18 kg',
    bodyFat: '-9%',
    quote:
      'As a woman, I was nervous about joining a gym. UGRAMM made me feel safe and the results speak for themselves.',
    goal: 'Body Recomposition',
    gradient: 'from-[#1A1A2A] to-[#0A0A1A]',
    accentColor: '#C9A84C',
  },
  {
    name: 'Siddharth',
    duration: '4 Months',
    weightLost: '+8 kg',
    bodyFat: '-5%',
    quote:
      'I wanted to bulk up and the personalised programme with diet plan made all the difference. Gained quality muscle!',
    goal: 'Muscle Gain',
    gradient: 'from-[#2A1A1A] to-[#1A0A0A]',
    accentColor: '#E8D5A3',
  },
  {
    name: 'Priya',
    duration: '5 Months',
    weightLost: '-22 kg',
    bodyFat: '-11%',
    quote:
      'After my second pregnancy I struggled to get back in shape. UGRAMM FITNESS gave me my confidence back.',
    goal: 'Post-Pregnancy',
    gradient: 'from-[#1A2A2A] to-[#0A1A1A]',
    accentColor: '#C9A84C',
  },
];

export default function Transformation() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
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
              Success Stories
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            <span className="text-white">REAL RESULTS. </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              REAL PEOPLE.
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-sm font-[family-name:var(--font-montserrat)] max-w-lg mx-auto leading-relaxed">
            Join <span className="text-[#C9A84C]">200+ members</span> who transformed their lives at UGRAMM
            FITNESS, Bidar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRANSFORMATIONS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/20 transition-all duration-400 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
            >
              {/* Before/After image placeholder */}
              <div className="relative h-52 overflow-hidden">
                {/* Before */}
                <div
                  className={`absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mx-auto mb-1">
                      <TrendingDown className="w-6 h-6 text-white/30" />
                    </div>
                    <span className="text-white/30 text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-wider">
                      Before
                    </span>
                  </div>
                </div>
                {/* After */}
                <div
                  className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, #1A1200, #2A1E00)`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-1 border"
                      style={{
                        background: `${item.accentColor}20`,
                        borderColor: `${item.accentColor}40`,
                      }}
                    >
                      <Dumbbell className="w-6 h-6" style={{ color: item.accentColor }} />
                    </div>
                    <span
                      className="text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-wider"
                      style={{ color: `${item.accentColor}80` }}
                    >
                      After
                    </span>
                  </div>
                </div>
                {/* Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#C9A84C]/40 -translate-x-1/2" />

                {/* Duration badge */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 border border-[#C9A84C]/30 backdrop-blur-sm rounded-full px-3 py-1 whitespace-nowrap text-center"
                >
                  <span className="text-[#C9A84C] text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest">
                    {item.duration}
                  </span>
                </div>

                {/* Stats overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 flex gap-2"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  }}
                >
                  <div className="flex-1 text-center">
                    <div className="font-[family-name:var(--font-bebas)] text-xl leading-none" style={{ color: item.accentColor }}>
                      {item.weightLost}
                    </div>
                    <div className="text-white/50 text-[10px] font-[family-name:var(--font-montserrat)]">Weight</div>
                  </div>
                  <div className="w-[1px] bg-white/10" />
                  <div className="flex-1 text-center">
                    <div className="font-[family-name:var(--font-bebas)] text-xl leading-none text-[#C9A84C]">
                      {item.bodyFat}
                    </div>
                    <div className="text-white/50 text-[10px] font-[family-name:var(--font-montserrat)]">Body Fat</div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 bg-[#111111]">
                {/* Goal badge */}
                <span
                  className="inline-flex text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2 py-1 rounded-full mb-3 border"
                  style={{
                    color: item.accentColor,
                    background: `${item.accentColor}15`,
                    borderColor: `${item.accentColor}30`,
                  }}
                >
                  {item.goal}
                </span>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-bebas)] text-white text-2xl mb-2">
                  {item.name}
                </h3>

                {/* Quote */}
                <p className="text-white/50 text-xs font-[family-name:var(--font-montserrat)] leading-relaxed italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-sm font-[family-name:var(--font-montserrat)] mb-6">
            Your transformation story could be next.
          </p>
          <a
            href="https://wa.me/917019497000?text=Hi! I want to start my transformation at UGRAMM FITNESS."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Transformation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
