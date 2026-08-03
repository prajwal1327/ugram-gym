'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Star,
  Clock,
  Target,
  TrendingUp,
  Users,
  Phone,
  MessageCircle,
  ArrowRight,
  Crown,
  Zap,
  ClipboardList,
  BarChart2,
  Calendar,
  HeartPulse,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const ptIncludes = [
  '1-on-1 Personal Training Sessions',
  'Customized Workout Program',
  'Custom Indian Diet Plan',
  'Nutrition Counselling',
  'Weekly Progress Tracking',
  'Monthly Body Assessment',
  'Fat % & Muscle Mass Analysis',
  'Body Measurements Tracking',
  'Strength Analysis Reports',
  'Lifestyle & Recovery Guidance',
  'WhatsApp Trainer Support',
  'Transformation Documentation',
];

const processSteps = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'We begin with a detailed conversation about your goals, lifestyle, health history, and timeline.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Body Assessment',
    desc: 'Comprehensive analysis: weight, body fat %, muscle mass, measurements, and strength benchmarks.',
    icon: BarChart2,
  },
  {
    step: '03',
    title: 'Custom Plan',
    desc: 'Your trainer creates a 100% personalized workout and Indian diet plan tailored for your body and goals.',
    icon: ClipboardList,
  },
  {
    step: '04',
    title: 'Training Starts',
    desc: 'Begin your sessions with dedicated 1-on-1 training. Every set, every rep — executed with precision.',
    icon: Target,
  },
  {
    step: '05',
    title: 'Weekly Check-ins',
    desc: 'Progress reviews every week. Plans adjusted based on data to keep you on the fastest track.',
    icon: Calendar,
  },
  {
    step: '06',
    title: 'Monthly Review',
    desc: 'Full monthly assessment with updated metrics, before/after comparison, and plan evolution.',
    icon: HeartPulse,
  },
];

const packages = [
  {
    name: 'Starter',
    price: 8000,
    period: '/month',
    sessions: '3 sessions/week',
    highlight: false,
    icon: Zap,
    features: [
      '3 Personal Training Sessions/Week',
      'Custom Workout Plan',
      'Basic Diet Guidance',
      'Weekly Progress Check-in',
      'WhatsApp Support',
    ],
  },
  {
    name: 'Premium',
    price: 12000,
    period: '/month',
    sessions: '5 sessions/week',
    highlight: true,
    icon: Star,
    features: [
      '5 Personal Training Sessions/Week',
      'Advanced Workout Programming',
      'Full Custom Nutrition Plan',
      'Weekly Body Assessment',
      'WhatsApp + Call Support',
      'Supplement Guidance',
      'Monthly Progress Report',
    ],
  },
  {
    name: 'Elite',
    price: 18000,
    period: '/month',
    sessions: '6 sessions/week',
    highlight: false,
    icon: Crown,
    features: [
      '6 Personal Training Sessions/Week',
      'Fully Periodized Training Program',
      'Complete Nutrition + Lifestyle Coaching',
      'Bi-weekly Body Composition Analysis',
      '24/7 Priority Support',
      'Recovery & Sleep Optimization',
      'Video Form Reviews',
      'Quarterly Transformation Report',
    ],
  },
];

const featuredTrainers = [
  {
    name: 'Ravi Kumar',
    title: 'Head Coach & Founder',
    experience: '10+ Years',
    cert: 'ACE Certified Personal Trainer',
    specializations: ['Body Transformation', 'Strength & Conditioning', 'CrossFit', 'Sports Performance'],
    clients: '150+',
    transformations: '80+',
    gradientFrom: '#C9A84C',
    gradientTo: '#8B6914',
  },
  {
    name: 'Mohammed Farhan',
    title: 'Nutrition & PT Specialist',
    experience: '7 Years',
    cert: 'NSCA Certified Strength Specialist',
    specializations: ['Weight Loss', 'Indian Nutrition Planning', 'Diabetes & Lifestyle', 'Muscle Gain'],
    clients: '120+',
    transformations: '60+',
    gradientFrom: '#D4AF37',
    gradientTo: '#6B5B1A',
  },
];

const results = [
  {
    name: 'Rahul K.',
    duration: '4 Months',
    before: '92 kg',
    after: '76 kg',
    change: '-16 kg',
    goal: 'Weight Loss',
    positive: false,
  },
  {
    name: 'Siddharth R.',
    duration: '6 Months',
    before: '65 kg',
    after: '78 kg',
    change: '+13 kg',
    goal: 'Muscle Gain',
    positive: true,
  },
  {
    name: 'Faisal M.',
    duration: '5 Months',
    before: '105 kg',
    after: '84 kg',
    change: '-21 kg',
    goal: 'Weight Loss',
    positive: false,
  },
];

export default function PersonalTrainingPage() {
  const whatsappURL =
    'https://wa.me/919876543210?text=Hi%20UGRAMM%20FITNESS!%20I%27m%20interested%20in%20a%20Free%20PT%20Consultation.';

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
            <span className="text-[#C9A84C]">Personal Training</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-[var(--font-bebas)] text-6xl md:text-9xl lg:text-[9rem] leading-none mb-4"
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            PERSONAL
            <br />
            TRAINING
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[var(--font-montserrat)] text-xl md:text-2xl text-white/60 mb-8"
          >
            Train Smarter.{' '}
            <span className="text-[#C9A84C]">Transform Faster.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20BC5A] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 font-[var(--font-montserrat)]"
            >
              <MessageCircle className="w-5 h-5" />
              BOOK FREE CONSULTATION
            </a>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-8"
          />
        </div>
      </section>

      {/* ─── PT INTRO ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — What is PT */}
          <motion.div {...fadeInUp}>
            <p className="font-[var(--font-montserrat)] text-[#C9A84C] text-xs uppercase tracking-[4px] mb-4">
              Expert-Led Training
            </p>
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl text-white mb-6 leading-tight tracking-wider">
              WHAT IS PT AT
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                UGRAMM FITNESS?
              </span>
            </h2>
            <div className="space-y-4 font-[var(--font-inter)] text-white/65 leading-relaxed">
              <p>
                Personal Training at UGRAMM FITNESS is not a generic cookie-cutter program. It is a{' '}
                <span className="text-white font-semibold">100% personalized 1-on-1 coaching system</span> designed
                around your unique body, lifestyle, and goals.
              </p>
              <p>
                Our certified trainers use a scientific methodology — combining progressive overload training with
                custom Indian diet plans — to deliver measurable results in the shortest possible time.
              </p>
              <p>
                Every metric is tracked: body fat percentage, muscle mass, strength levels, and measurements.
                You'll receive a detailed progress report every month, so you can{' '}
                <span className="text-[#C9A84C]">see your transformation on paper</span>.
              </p>
              <p>
                Whether you want to lose weight, build muscle, improve athletic performance, or simply get fit —
                our trainers will design the exact roadmap to get you there.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Price card */}
          <motion.div
            {...fadeInUp}
            className="relative bg-[#111111] border border-[#C9A84C]/40 rounded-2xl p-8 overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)]"
          >
            {/* Top glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <Crown className="w-10 h-10 text-[#C9A84C] mx-auto mb-4" />
              <p className="font-[var(--font-inter)] text-white/50 text-sm uppercase tracking-widest mb-2">
                Starting at
              </p>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span
                  className="font-[var(--font-bebas)] text-8xl leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ₹8,000
                </span>
              </div>
              <p className="font-[var(--font-montserrat)] text-white/40 text-sm mb-8">/month</p>

              <div className="bg-white/[0.03] rounded-xl p-4 mb-6 border border-white/10">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '1-on-1', label: 'Sessions' },
                    { value: 'Custom', label: 'Diet Plan' },
                    { value: 'Weekly', label: 'Check-ins' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-[var(--font-bebas)] text-xl text-[#C9A84C]">{stat.value}</div>
                      <div className="font-[var(--font-inter)] text-xs text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-full hover:bg-[#20BC5A] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 font-[var(--font-montserrat)]"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              WHAT YOU{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                GET
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50">
              Every Personal Training client at UGRAMM receives a comprehensive, end-to-end fitness solution.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {ptIncludes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-[#0A0A0A] border border-white/10 rounded-xl px-5 py-4 hover:border-[#C9A84C]/30 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A84C]/25 transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" strokeWidth={3} />
                </div>
                <span className="font-[var(--font-inter)] text-white/75 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── THE PROCESS ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              THE{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PROCESS
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50">
              From your first call to your final transformation — a clear 6-step journey.
            </p>
          </motion.div>

          {/* Desktop: horizontal. Mobile: vertical */}
          <div className="relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[calc(8.33%+20px)] right-[calc(8.33%+20px)] h-[2px] bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C]/60 to-[#C9A84C]/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B6914] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                    <span className="font-[var(--font-bebas)] text-lg text-black">{step.step}</span>
                  </div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-white text-sm mb-2">{step.title}</h3>
                  <p className="font-[var(--font-inter)] text-white/45 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PT PACKAGES ─── */}
      <section className="py-24 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              PT{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PACKAGES
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[#0A0A0A] border-2 border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.2)] md:scale-[1.03]'
                      : 'bg-[#0A0A0A] border border-white/10 hover:border-[#C9A84C]/30'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black text-xs font-[var(--font-montserrat)] font-bold text-center py-2 tracking-widest uppercase">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                          pkg.highlight ? 'bg-[#C9A84C]/20 border-[#C9A84C]/50' : 'bg-white/[0.05] border-white/10'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${pkg.highlight ? 'text-[#C9A84C]' : 'text-white/50'}`} />
                      </div>
                      <div>
                        <div className="font-[var(--font-montserrat)] font-bold text-white text-lg">{pkg.name}</div>
                        <div className="font-[var(--font-inter)] text-xs text-white/40">{pkg.sessions}</div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <span
                        className={`font-[var(--font-bebas)] text-5xl ${pkg.highlight ? 'text-[#C9A84C]' : 'text-white'}`}
                      >
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                      <span className="font-[var(--font-inter)] text-white/40 text-sm ml-1">{pkg.period}</span>
                    </div>

                    <ul className="space-y-3 mb-7">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <Check
                            className={`w-4 h-4 flex-shrink-0 ${pkg.highlight ? 'text-[#C9A84C]' : 'text-white/40'}`}
                            strokeWidth={2.5}
                          />
                          <span className="font-[var(--font-inter)] text-white/65 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={whatsappURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full font-bold py-3 rounded-full transition-all duration-300 font-[var(--font-montserrat)] text-sm ${
                        pkg.highlight
                          ? 'bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.5)]'
                          : 'border border-white/20 text-white/70 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
                      }`}
                    >
                      GET STARTED
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TRAINER CARDS ─── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              YOUR{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TRAINERS
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50">Certified experts dedicated to your success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTrainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/30 transition-colors group"
              >
                {/* Gradient avatar header */}
                <div
                  className="h-44 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${trainer.gradientFrom}22, ${trainer.gradientTo}44)`,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-[var(--font-bebas)] border-2"
                    style={{
                      background: `linear-gradient(135deg, ${trainer.gradientFrom}, ${trainer.gradientTo})`,
                      borderColor: trainer.gradientFrom,
                      color: '#0A0A0A',
                    }}
                  >
                    {trainer.name.charAt(0)}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full px-2.5 py-1">
                    <span className="font-[var(--font-inter)] text-xs text-[#C9A84C] font-semibold">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-[var(--font-montserrat)] font-bold text-white text-xl mb-1">{trainer.name}</h3>
                  <p className="font-[var(--font-inter)] text-[#C9A84C] text-sm mb-1">{trainer.title}</p>
                  <p className="font-[var(--font-inter)] text-white/40 text-xs mb-4">{trainer.cert}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm font-[var(--font-inter)]">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#C9A84C]" />
                      <span className="text-white/60">{trainer.clients} Clients</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-[#C9A84C]" />
                      <span className="text-white/60">{trainer.transformations} Transformations</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {trainer.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-white/[0.05] border border-white/10 rounded-full px-3 py-1 text-xs font-[var(--font-inter)] text-white/55"
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

      {/* ─── RESULTS ─── */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              REAL{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                RESULTS
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-[var(--font-montserrat)] font-bold text-white">{r.name}</div>
                    <div className="font-[var(--font-inter)] text-white/40 text-xs">{r.duration}</div>
                  </div>
                  <span className="bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full px-3 py-1 text-xs font-[var(--font-inter)] text-[#C9A84C]">
                    {r.goal}
                  </span>
                </div>

                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="text-center">
                    <div className="font-[var(--font-bebas)] text-3xl text-white/50">{r.before}</div>
                    <div className="font-[var(--font-inter)] text-xs text-white/30">Before</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C9A84C]" />
                  <div className="text-center">
                    <div className="font-[var(--font-bebas)] text-3xl text-white">{r.after}</div>
                    <div className="font-[var(--font-inter)] text-xs text-white/30">After</div>
                  </div>
                </div>

                <div className="text-center">
                  <span
                    className={`font-[var(--font-bebas)] text-2xl ${r.positive ? 'text-green-400' : 'text-[#C9A84C]'}`}
                  >
                    {r.change}
                  </span>
                  <span className="font-[var(--font-inter)] text-white/40 text-xs ml-1">body weight</span>
                </div>
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
            <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl text-white mb-6 leading-none">
              BOOK FREE
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CONSULTATION
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Talk to a certified trainer today. No commitment required. Just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20BC5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 font-[var(--font-montserrat)] text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-bold px-8 py-4 rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300 font-[var(--font-montserrat)] text-lg"
              >
                <Phone className="w-5 h-5" />
                or Call us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
