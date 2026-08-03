'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Dumbbell,
  Users,
  TrendingUp,
  Heart,
  Award,
  Star,
  CheckCircle,
  Target,
  Zap,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const timeline = [
  { year: '2019', event: 'Founded in Bidar', desc: 'Started with a vision to bring world-class fitness to Bidar.' },
  { year: '2020', event: 'Expanded to 5000 sqft', desc: 'Doubled our space to accommodate our growing community.' },
  { year: '2021', event: 'Launched PT Program', desc: 'Introduced certified personal training for tailored results.' },
  { year: '2022', event: '200+ Members', desc: 'Reached a milestone of 200+ active, dedicated members.' },
  { year: '2023', event: 'CrossFit Box Added', desc: 'Opened Karnataka\'s premium CrossFit facility in Bidar.' },
  { year: '2024', event: '500+ Members & Growing', desc: 'Over 500 transformations and counting.' },
];

const features = [
  {
    icon: Award,
    title: 'Expert Trainers',
    desc: 'Certified, experienced trainers with proven transformation records.',
  },
  {
    icon: Dumbbell,
    title: 'Premium Equipment',
    desc: 'Top-of-the-line machines and free weights for every fitness level.',
  },
  {
    icon: Shield,
    title: 'Clean Facilities',
    desc: 'Hygiene-first environment with daily deep cleaning protocols.',
  },
  {
    icon: Target,
    title: 'Personalized Plans',
    desc: 'Custom workout and diet plans tailored to your unique goals.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    desc: '95% of our members achieve their goals within 6 months.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'A supportive, motivating community that keeps you accountable.',
  },
];

const values = [
  {
    number: '01',
    title: 'DISCIPLINE',
    icon: Shield,
    desc: 'We believe discipline is the bridge between goals and accomplishment. Every session, every rep counts.',
  },
  {
    number: '02',
    title: 'CONSISTENCY',
    icon: TrendingUp,
    desc: 'Results are not built overnight. We champion the power of showing up every single day.',
  },
  {
    number: '03',
    title: 'INTEGRITY',
    icon: Heart,
    desc: 'Honest assessments, real results. We never promise what we cannot deliver.',
  },
  {
    number: '04',
    title: 'EXCELLENCE',
    icon: Star,
    desc: 'From equipment to coaching, we hold every aspect of our gym to the highest standard.',
  },
];

const trainers = [
  {
    name: 'Ravi Kumar',
    title: 'Head Coach & Founder',
    experience: '10+ Years',
    specializations: ['Strength Training', 'CrossFit', 'Weight Loss'],
    gradientFrom: '#C9A84C',
    gradientTo: '#8B6914',
  },
  {
    name: 'Mohammed Farhan',
    title: 'Nutrition & PT Specialist',
    experience: '7 Years',
    specializations: ['Diet Planning', 'Body Transformation', 'Sports Nutrition'],
    gradientFrom: '#D4AF37',
    gradientTo: '#6B5B1A',
  },
  {
    name: 'Sneha Patil',
    title: 'Women\'s Fitness Coach',
    experience: '5 Years',
    specializations: ['Cardio', 'HIIT', 'Flexibility & Wellness'],
    gradientFrom: '#E8D5A3',
    gradientTo: '#9A7B3C',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ─── PAGE HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        {/* Gold radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6 font-[var(--font-inter)]">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">About Us</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-[var(--font-bebas)] text-7xl md:text-9xl lg:text-[10rem] leading-none mb-4"
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ABOUT US
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[var(--font-montserrat)] text-xl md:text-2xl text-white/60 mb-8"
          >
            Our Story
          </motion.p>

          {/* Decorative gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Timeline */}
          <motion.div {...fadeInUp}>
            <h2 className="font-[var(--font-bebas)] text-4xl text-[#C9A84C] mb-10 tracking-wider">
              OUR JOURNEY
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/40 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 pl-2"
                  >
                    {/* Node */}
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border-2 border-[#C9A84C] flex items-center justify-center z-10 relative">
                        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-[var(--font-bebas)] text-2xl text-[#C9A84C]">{item.year}</span>
                        <span className="font-[var(--font-montserrat)] font-700 text-white text-sm uppercase tracking-wider">
                          {item.event}
                        </span>
                      </div>
                      <p className="font-[var(--font-inter)] text-sm text-white/50">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Story text */}
          <motion.div {...fadeInUp} className="lg:pt-4">
            <h2 className="font-[var(--font-bebas)] text-4xl text-[#C9A84C] mb-6 tracking-wider">
              THE UGRAMM STORY
            </h2>
            <div className="space-y-5 font-[var(--font-inter)] text-white/70 leading-relaxed text-lg">
              <p>
                <span className="text-white font-semibold">UGRAMM FITNESS</span> was born from a simple belief:{' '}
                <span className="text-[#C9A84C]">Bidar deserves world-class fitness.</span> Founded in 2019,
                we set out to create more than just a gym — we built a sanctuary for those who refuse to settle
                for ordinary.
              </p>
              <p>
                The name <span className="text-white font-semibold">UGRAMM</span> is inspired by the Sanskrit
                word for <em>fierce, powerful, and intense</em>. It embodies the spirit of every member who
                walks through our doors — warriors who push beyond their limits every single day.
              </p>
              <p>
                What started as a modest facility has grown into Bidar's most trusted fitness destination. We've
                expanded to a 5,000 sqft state-of-the-art facility featuring dedicated strength zones, a premium
                CrossFit box, cardio areas, and steam rooms.
              </p>
              <p>
                Today, with <span className="text-[#C9A84C] font-semibold">500+ active members</span> and a team
                of certified trainers, we continue to transform lives one rep at a time. Every transformation
                story here is a testament to what happens when passion meets discipline.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '500+', label: 'Active Members' },
                { value: '95%', label: 'Success Rate' },
                { value: '5+', label: 'Years Strong' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center"
                >
                  <div
                    className="font-[var(--font-bebas)] text-3xl"
                    style={{
                      background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-[var(--font-inter)] text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              MISSION &amp;{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                VISION
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: 'OUR MISSION',
                icon: Target,
                text:
                  'To empower every individual in Bidar with the tools, guidance, and environment needed to achieve their personal best. We are committed to delivering world-class fitness experiences that are accessible, transformative, and built on science.',
              },
              {
                label: 'OUR VISION',
                icon: Star,
                text:
                  'To be the most impactful fitness community in Karnataka — a place where every person, regardless of their starting point, can discover their strength, build their confidence, and live a healthier, more fulfilling life.',
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...fadeInUp}
                className="relative bg-[#0A0A0A] rounded-2xl p-8 border border-[#C9A84C]/30 overflow-hidden group hover:border-[#C9A84C]/60 transition-colors duration-300"
              >
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-[#C9A84C]/10 transition-colors" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5 border border-[#C9A84C]/30">
                    <item.icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-[var(--font-bebas)] text-2xl text-[#C9A84C] mb-4 tracking-wider">
                    {item.label}
                  </h3>
                  <p className="font-[var(--font-inter)] text-white/65 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              WHY CHOOSE{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                UGRAMM
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50 max-w-xl mx-auto">
              We don't just offer a gym. We offer an experience built around your transformation.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 group hover:border-[#C9A84C]/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/20 transition-colors border border-[#C9A84C]/20">
                  <feat.icon className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3 className="font-[var(--font-montserrat)] font-bold text-white text-lg mb-2">{feat.title}</h3>
                <p className="font-[var(--font-inter)] text-white/55 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              OUR CORE{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                VALUES
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/10 hover:border-[#C9A84C]/40 transition-colors duration-300 group"
              >
                <div
                  className="font-[var(--font-bebas)] text-6xl mb-3 leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #E8D5A3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.4,
                  }}
                >
                  {val.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-4 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <val.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-[var(--font-bebas)] text-2xl text-[#C9A84C] mb-3 tracking-wider">
                  {val.title}
                </h3>
                <p className="font-[var(--font-inter)] text-white/55 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM PREVIEW ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              MEET OUR{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TEAM
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50 max-w-xl mx-auto">
              Certified. Experienced. Passionate. Our trainers are here to guide your every step.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-[#C9A84C]/40 transition-all duration-300"
              >
                {/* Gradient avatar */}
                <div
                  className="h-52 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${trainer.gradientFrom}22, ${trainer.gradientTo}44)`,
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-[var(--font-bebas)] border-2"
                    style={{
                      background: `linear-gradient(135deg, ${trainer.gradientFrom}, ${trainer.gradientTo})`,
                      borderColor: trainer.gradientFrom,
                      color: '#0A0A0A',
                    }}
                  >
                    {trainer.name.charAt(0)}
                  </div>
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full px-3 py-1">
                    <span className="font-[var(--font-inter)] text-xs text-[#C9A84C] font-semibold">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-montserrat)] font-bold text-white text-xl mb-1">
                    {trainer.name}
                  </h3>
                  <p className="font-[var(--font-inter)] text-[#C9A84C] text-sm mb-4">{trainer.title}</p>

                  <div className="flex flex-wrap gap-2">
                    {trainer.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-white/[0.05] border border-white/10 rounded-full px-3 py-1 text-xs font-[var(--font-inter)] text-white/60"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN CTA ─── */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Gold gradient background hint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-[#D4AF37]/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="font-[var(--font-montserrat)] text-[#C9A84C] text-sm uppercase tracking-[4px] mb-4">
              The Time Is Now
            </p>
            <h2 className="font-[var(--font-bebas)] text-6xl md:text-8xl text-white mb-6 leading-none">
              YOUR JOURNEY
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                STARTS TODAY
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Stop dreaming. Start doing. Join 500+ members who chose to transform their lives at UGRAMM FITNESS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 font-[var(--font-montserrat)] text-center"
              >
                JOIN NOW
              </Link>
              <Link
                href="/contact"
                className="border border-[#C9A84C]/50 text-[#C9A84C] font-bold px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 font-[var(--font-montserrat)] text-center"
              >
                BOOK FREE TRIAL
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
