'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Clock, Flame, Users } from 'lucide-react';
import LionSVG from '@/components/common/LionSVG';

const PT_FEATURES = [
  '1-on-1 Personal Training Sessions',
  'Custom Diet Plan',
  'Nutrition Counselling',
  'Weekly Progress Tracking',
  'Monthly Body Assessment',
  'Fat % & Muscle Mass Analysis',
  'Body Measurements Tracking',
  'Strength Analysis Reports',
  'Lifestyle Guidance',
];

export default function PersonalTrainingSection() {
  return (
    <section className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-[0.04]"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 0% 50%, rgba(201,168,76,1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C] uppercase">
                Personal Training
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none mb-3"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
            >
              <span className="text-white">TRANSFORM</span>
              <br />
              <span className="text-white">WITH AN</span>
              <br />
              <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
                EXPERT
              </span>
            </h2>

            {/* Price */}
            <div className="flex items-end gap-2 mb-6">
              <span
                className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                style={{ fontSize: 'clamp(42px, 5vw, 60px)' }}
              >
                ₹8,000
              </span>
              <span className="text-white/50 font-[family-name:var(--font-montserrat)] text-sm mb-2">
                / month
              </span>
            </div>

            <p className="font-[family-name:var(--font-montserrat)] text-white/60 text-sm leading-relaxed mb-8">
              Our expert certified personal trainers craft a fully personalised programme around your
              goals, lifestyle, and body type. From your first session to your final transformation
              reveal, every step is measured, guided, and optimised.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 gap-2.5 mb-8">
              {PT_FEATURES.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#C9A84C]" />
                  </div>
                  <span className="text-white/70 text-sm font-[family-name:var(--font-montserrat)]">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917019497000?text=Hi! I want to book a Personal Training session at UGRAMM FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-105"
              >
                Book PT Session
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/personal-training"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A84C]/40 text-[#C9A84C] font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Premium card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main premium card */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1A1200 0%, #2A1E00 50%, #1A1200 100%)',
                boxShadow: '0 0 60px rgba(201,168,76,0.12)',
              }}
            >
              {/* Gold border gradient */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, #C9A84C60, #E8D5A340, #C9A84C60)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* LIMITED SLOTS badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-[family-name:var(--font-montserrat)] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6"
              >
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                LIMITED SLOTS AVAILABLE
              </motion.div>

              {/* Lion watermark */}
              <div className="absolute top-4 right-4 opacity-[0.06] pointer-events-none">
                <LionSVG className="w-32 h-36" />
              </div>

              {/* Trainer card */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C9A84C]/30 to-[#8B6914]/20 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-white text-3xl mb-1">
                  Elite Personal Trainer
                </h3>
                <p className="text-[#C9A84C]/70 text-sm font-[family-name:var(--font-montserrat)] font-semibold">
                  NSCA & ACE Certified
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Users, value: '50+', label: 'Clients' },
                  { icon: Flame, value: '200+', label: 'Transformations' },
                  { icon: Clock, value: '5+', label: 'Years Exp.' },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/[0.04] rounded-xl p-3 text-center border border-white/10"
                    >
                      <Icon className="w-4 h-4 text-[#C9A84C] mx-auto mb-1" />
                      <div className="font-[family-name:var(--font-bebas)] text-[#C9A84C] text-2xl leading-none">
                        {stat.value}
                      </div>
                      <div className="text-white/40 text-[10px] font-[family-name:var(--font-montserrat)] uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What you get */}
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-6">
                <p className="text-[#C9A84C] text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest mb-3">
                  What&apos;s Included
                </p>
                <div className="space-y-2">
                  {['Daily workout programming', 'Customised meal plan', 'WhatsApp support', 'Photo progress tracking'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                      <span className="text-white/60 text-xs font-[family-name:var(--font-montserrat)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <span
                    className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                    style={{ fontSize: '3rem' }}
                  >
                    ₹8,000
                  </span>
                  <span className="text-white/40 text-xs font-[family-name:var(--font-montserrat)] ml-1">/month</span>
                </div>
                <a
                  href="https://wa.me/917019497000?text=Hi! I want to book Personal Training at UGRAMM FITNESS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-xs tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
