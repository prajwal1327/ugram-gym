'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, TrendingDown, TrendingUp, Target, BarChart2, ClipboardList, Activity } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const transformations = [
  {
    name: 'Rahul K.',
    duration: '4 Months',
    weightBefore: 92,
    weightAfter: 76,
    fatBefore: 28,
    fatAfter: 18,
    quote: 'UGRAMM FITNESS changed my life. Lost 16kg and gained confidence!',
    goal: 'Weight Loss',
  },
  {
    name: 'Priya S.',
    duration: '3 Months',
    weightBefore: 72,
    weightAfter: 62,
    fatBefore: 32,
    fatAfter: 22,
    quote: 'The trainers here are amazing. Best decision of my life!',
    goal: 'Weight Loss',
  },
  {
    name: 'Siddharth R.',
    duration: '6 Months',
    weightBefore: 65,
    weightAfter: 78,
    fatBefore: 15,
    fatAfter: 12,
    quote: 'Gained 13kg of pure muscle. The PT program is incredible.',
    goal: 'Muscle Gain',
  },
  {
    name: 'Faisal M.',
    duration: '5 Months',
    weightBefore: 105,
    weightAfter: 84,
    fatBefore: 35,
    fatAfter: 20,
    quote: 'Lost 21kg with the help of amazing trainers and diet plan.',
    goal: 'Weight Loss',
  },
  {
    name: 'Anita P.',
    duration: '3 Months',
    weightBefore: 68,
    weightAfter: 58,
    fatBefore: 30,
    fatAfter: 20,
    quote: 'Finally fit into my wedding dress! So grateful.',
    goal: 'Weight Loss',
  },
  {
    name: 'Kiran B.',
    duration: '8 Months',
    weightBefore: 70,
    weightAfter: 86,
    fatBefore: 14,
    fatAfter: 10,
    quote: 'My strength has doubled. The CrossFit training is world-class.',
    goal: 'Muscle Gain',
  },
  {
    name: 'Deepa N.',
    duration: '4 Months',
    weightBefore: 80,
    weightAfter: 66,
    fatBefore: 36,
    fatAfter: 24,
    quote: 'Completely transformed my lifestyle. Best gym in Bidar!',
    goal: 'Weight Loss',
  },
  {
    name: 'Arjun T.',
    duration: '6 Months',
    weightBefore: 58,
    weightAfter: 72,
    fatBefore: 12,
    fatAfter: 9,
    quote: 'Went from skinny to muscular. The PT here is unmatched.',
    goal: 'Muscle Gain',
  },
];

const stats = [
  { value: '200+', label: 'Transformations' },
  { value: 'Avg 12kg', label: 'Lost/Gained' },
  { value: '95%', label: 'Success Rate' },
  { value: '6 Months', label: 'Avg Timeline' },
];

const process = [
  {
    step: '01',
    title: 'Assessment',
    desc: 'Comprehensive body analysis: weight, fat%, muscle mass, measurements and health history.',
    icon: BarChart2,
  },
  {
    step: '02',
    title: 'Custom Plan',
    desc: 'Personalized workout program + Indian diet plan built around your body and goals.',
    icon: ClipboardList,
  },
  {
    step: '03',
    title: 'Execution',
    desc: '1-on-1 training sessions with certified coaches who push you to your best every day.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Monitoring',
    desc: 'Weekly check-ins and monthly assessments to track progress and adjust the plan.',
    icon: Activity,
  },
];

// Generates distinct gradient pairs per card based on index
function getBeforeGradient(index: number): string {
  const gradients = [
    'from-slate-700 to-slate-900',
    'from-zinc-600 to-zinc-800',
    'from-neutral-700 to-neutral-900',
    'from-stone-600 to-stone-800',
    'from-gray-600 to-gray-800',
    'from-slate-600 to-slate-900',
    'from-zinc-700 to-zinc-900',
    'from-neutral-600 to-neutral-800',
  ];
  return gradients[index % gradients.length];
}

function getAfterGradient(index: number, isGain: boolean): string {
  if (isGain) {
    const gainGradients = [
      'from-green-900 to-emerald-900',
      'from-teal-900 to-green-900',
      'from-emerald-900 to-teal-900',
      'from-green-800 to-green-900',
    ];
    return gainGradients[index % gainGradients.length];
  }
  const lossGradients = [
    'from-amber-900 to-orange-900',
    'from-yellow-900 to-amber-900',
    'from-orange-900 to-red-900',
    'from-amber-800 to-amber-900',
  ];
  return lossGradients[index % lossGradients.length];
}

function TransformationCard({
  t,
  index,
}: {
  t: (typeof transformations)[number];
  index: number;
}) {
  const isGain = t.goal === 'Muscle Gain';
  const weightChange = t.weightAfter - t.weightBefore;
  const fatChange = t.fatAfter - t.fatBefore;
  const beforeGrad = getBeforeGradient(index);
  const afterGrad = getAfterGradient(index, isGain);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 group"
    >
      {/* Before / After panels */}
      <div className="flex h-44 relative">
        {/* BEFORE panel */}
        <div className={`flex-1 bg-gradient-to-br ${beforeGrad} flex items-center justify-center relative`}>
          <div className="absolute inset-0 flex items-end justify-start p-3">
            <span className="font-[var(--font-bebas)] text-2xl text-white/20 tracking-widest">BEFORE</span>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-bebas)] text-3xl text-white/60">{t.weightBefore}</div>
            <div className="font-[var(--font-inter)] text-xs text-white/30">kg</div>
          </div>
        </div>

        {/* Divider with VS */}
        <div className="relative flex items-center justify-center w-8 bg-[#111111] z-10">
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />
          <span className="font-[var(--font-bebas)] text-xs text-[#C9A84C]/60 rotate-90">VS</span>
        </div>

        {/* AFTER panel */}
        <div className={`flex-1 bg-gradient-to-br ${afterGrad} flex items-center justify-center relative`}>
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <span className="font-[var(--font-bebas)] text-2xl text-white/20 tracking-widest">AFTER</span>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-bebas)] text-3xl text-white">{t.weightAfter}</div>
            <div className="font-[var(--font-inter)] text-xs text-white/40">kg</div>
          </div>
        </div>

        {/* Goal badge */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-[var(--font-inter)] font-semibold border ${
              isGain
                ? 'bg-green-900/60 border-green-500/40 text-green-300'
                : 'bg-[#C9A84C]/15 border-[#C9A84C]/40 text-[#C9A84C]'
            }`}
          >
            {t.goal}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="font-[var(--font-montserrat)] font-bold text-white">{t.name}</div>
            <div className="font-[var(--font-inter)] text-white/40 text-xs">{t.duration}</div>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="text-center">
              <div
                className={`font-[var(--font-bebas)] text-lg flex items-center gap-0.5 ${
                  isGain ? 'text-green-400' : 'text-[#C9A84C]'
                }`}
              >
                {isGain ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {Math.abs(weightChange)}kg
              </div>
              <div className="font-[var(--font-inter)] text-xs text-white/30">Weight</div>
            </div>
            <div className="text-center">
              <div
                className={`font-[var(--font-bebas)] text-lg flex items-center gap-0.5 ${
                  isGain ? 'text-green-400' : 'text-[#C9A84C]'
                }`}
              >
                {isGain ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {Math.abs(fatChange)}%
              </div>
              <div className="font-[var(--font-inter)] text-xs text-white/30">Fat</div>
            </div>
          </div>
        </div>

        <p className="font-[var(--font-inter)] text-white/55 text-sm leading-relaxed italic border-t border-white/10 pt-3">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export default function TransformationPage() {
  const whatsappURL =
    'https://wa.me/919876543210?text=Hi%20UGRAMM%20FITNESS!%20I%27m%20ready%20to%20start%20my%20transformation!';

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6 font-[var(--font-inter)]">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">Transformations</span>
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
            TRANS-
            <br />
            FORMATIONS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[var(--font-montserrat)] text-xl md:text-2xl text-white/60 mb-8"
          >
            Real People.{' '}
            <span className="text-[#C9A84C]">Real Results.</span>
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-2xl p-6 text-center hover:border-[#C9A84C]/50 transition-colors"
              >
                <div
                  className="font-[var(--font-bebas)] text-4xl mb-2 leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-[var(--font-inter)] text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMATION GRID ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              MEMBER{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                STORIES
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50 max-w-xl mx-auto">
              Every number represents a life changed. Every story is proof that transformation is possible.
            </p>
          </motion.div>

          {/* Masonry-style grid: 4 cols on xl, 2 on md */}
          <div className="columns-1 md:columns-2 xl:columns-4 gap-5 space-y-5">
            {transformations.map((t, i) => (
              <div key={t.name} className="break-inside-avoid">
                <TransformationCard t={t} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE DO IT ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              HOW WE{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                DO IT
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50">
              Our 4-step system is designed for measurable, sustainable transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 text-center hover:border-[#C9A84C]/40 transition-colors group"
              >
                {/* Connector arrow (desktop) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#C9A84C]/30 flex items-center justify-center">
                      <span className="text-[#C9A84C]/60 text-xs">›</span>
                    </div>
                  </div>
                )}

                <div
                  className="font-[var(--font-bebas)] text-5xl mb-3 leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #E8D5A3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.5,
                  }}
                >
                  {item.step}
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#C9A84C]" />
                </div>

                <h3 className="font-[var(--font-montserrat)] font-bold text-white mb-3">{item.title}</h3>
                <p className="font-[var(--font-inter)] text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-[#D4AF37]/5" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <p className="font-[var(--font-montserrat)] text-[#C9A84C] text-sm uppercase tracking-[4px] mb-4">
              Be The Next Story
            </p>
            <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl text-white mb-6 leading-none">
              START YOUR
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TRANSFORMATION
              </span>
              <br />
              TODAY
            </h2>
            <p className="font-[var(--font-inter)] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Every great transformation begins with a single decision. Make yours today.
            </p>

            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:bg-[#20BC5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 font-[var(--font-montserrat)] text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              BOOK FREE CONSULTATION
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
