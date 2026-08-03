'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight, Zap } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  savingsLabel?: string;
  popular?: boolean;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹1,200',
    period: '/month',
    features: [
      'Full gym access',
      'Locker room',
      'Free WiFi',
      'Basic fitness assessment',
    ],
    cta: 'Start Monthly',
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '₹3,200',
    period: '/3 months',
    badge: 'Most Flexible',
    savingsLabel: 'Save ₹400',
    features: [
      'Full gym access',
      'Locker room & shower',
      'Free WiFi',
      'Fitness assessment',
      'Group class access',
    ],
    cta: 'Start Quarterly',
  },
  {
    id: 'half-yearly',
    name: 'Half Yearly',
    price: '₹5,800',
    period: '/6 months',
    badge: 'Best Value',
    savingsLabel: 'Save ₹1,400',
    features: [
      'Full gym access',
      'Locker room & shower',
      'Free WiFi',
      'Monthly assessment',
      'Group class access',
      'Diet consultation',
    ],
    cta: 'Start Half Yearly',
    highlight: true,
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '₹10,000',
    period: '/year',
    badge: 'Most Popular',
    savingsLabel: 'Save ₹4,400',
    popular: true,
    features: [
      'Full gym access',
      'Premium locker room',
      'Free WiFi',
      'Monthly assessment',
      'All group classes',
      'Diet consultation',
      'Body composition analysis',
      'Priority trainer access',
    ],
    cta: 'Go Annual',
  },
  {
    id: 'student',
    name: 'Student',
    price: '₹900',
    period: '/month',
    badge: 'Student Offer',
    features: [
      'Full gym access',
      'Locker room',
      'Free WiFi',
      'Fitness assessment',
      'Valid ID proof required',
    ],
    cta: 'Student Plan',
  },
  {
    id: 'pt',
    name: 'Personal Training',
    price: '₹8,000',
    period: '/month',
    badge: 'Transform',
    features: [
      '1-on-1 PT sessions',
      'Custom diet plan',
      'Nutrition counselling',
      'Weekly progress tracking',
      'Body assessment',
      'Full gym access',
    ],
    cta: 'Book PT',
    highlight: true,
  },
];

export default function MembershipPreview() {
  const annual = PLANS.find((p) => p.id === 'annual')!;
  const others = PLANS.filter((p) => p.id !== 'annual');

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
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
              Membership Plans
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            <span className="text-white">CHOOSE YOUR </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              PLAN
            </span>
          </h2>
          <p className="mt-3 text-white/50 text-sm font-[family-name:var(--font-montserrat)]">
            Invest in your greatest asset — <span className="text-[#C9A84C]">YOU</span>
          </p>
        </motion.div>

        {/* ANNUAL CARD (Hero) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div
            className="relative rounded-2xl p-8 lg:p-10 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1A1200 0%, #2A1E00 50%, #1A1200 100%)',
              boxShadow: '0 0 60px rgba(201,168,76,0.15), 0 0 120px rgba(201,168,76,0.06)',
            }}
          >
            {/* Gold border */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                padding: '1px',
                background: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C, #8B6914)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Left info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-[#C9A84C] text-black text-xs font-[family-name:var(--font-montserrat)] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    <Star className="w-3 h-3 fill-current" />
                    MOST POPULAR
                  </span>
                  <span className="text-[#C9A84C]/70 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-3 py-1">
                    {annual.savingsLabel}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-white text-5xl mb-1">
                  {annual.name} Membership
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <span
                    className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent"
                    style={{ fontSize: 'clamp(52px, 7vw, 72px)', lineHeight: 1 }}
                  >
                    {annual.price}
                  </span>
                  <span className="text-white/50 font-[family-name:var(--font-montserrat)] text-sm mb-3">
                    {annual.period}
                  </span>
                </div>
                <p className="text-white/50 text-sm font-[family-name:var(--font-montserrat)]">
                  Best value — just ₹833/month. Over ₹4,400 in savings compared to monthly plans.
                </p>
              </div>

              {/* Features */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {annual.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
                      <span className="text-white/70 text-sm font-[family-name:var(--font-montserrat)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="lg:ml-8 shrink-0">
                <a
                  href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS on the Annual plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:scale-105"
                >
                  {annual.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #C9A84C, transparent 70%)' }}
            />
          </div>
        </motion.div>

        {/* Other plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group rounded-2xl p-6 overflow-hidden transition-all duration-400 hover:scale-[1.02] ${
                plan.highlight
                  ? 'bg-[#C9A84C]/5 border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]'
                  : 'bg-white/[0.03] border border-white/10 hover:border-[#C9A84C]/20 hover:bg-[#C9A84C]/[0.03]'
              }`}
            >
              {plan.badge && (
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-[family-name:var(--font-montserrat)] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${
                      plan.highlight
                        ? 'bg-[#C9A84C] text-black'
                        : 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20'
                    }`}
                  >
                    {plan.highlight && <Zap className="w-3 h-3" />}
                    {plan.badge}
                  </span>
                  {plan.savingsLabel && (
                    <span className="text-[10px] text-[#C9A84C]/60 font-[family-name:var(--font-montserrat)] font-bold">
                      {plan.savingsLabel}
                    </span>
                  )}
                </div>
              )}

              <h3 className="font-[family-name:var(--font-bebas)] text-white text-3xl mb-1">
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="font-[family-name:var(--font-bebas)] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent text-4xl leading-none">
                  {plan.price}
                </span>
                <span className="text-white/40 text-xs font-[family-name:var(--font-montserrat)] mb-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]/70 shrink-0" />
                    <span className="text-white/60 text-xs font-[family-name:var(--font-montserrat)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS on the ${plan.name} plan.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3 text-sm font-[family-name:var(--font-montserrat)] font-bold tracking-widest uppercase transition-all duration-300 rounded-lg ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]'
                    : 'border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/70'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs font-[family-name:var(--font-montserrat)] mt-8"
        >
          All memberships include free gym induction session. Prices inclusive of all taxes.
        </motion.p>
      </div>
    </section>
  );
}
