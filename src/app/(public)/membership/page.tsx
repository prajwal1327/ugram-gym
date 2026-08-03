'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Star,
  Crown,
  GraduationCap,
  Building2,
  Calendar,
  TrendingUp,
  Award,
  Wind,
  Droplets,
  Car,
  Wifi,
  Music,
  ChevronDown,
  ChevronUp,
  Zap,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    icon: Calendar,
    duration: '1 Month',
    price: 1200,
    originalPrice: null,
    badge: null,
    isPopular: false,
    features: [
      'Full Gym Access',
      'Locker Facility',
      'Drinking Water',
      'Basic Cardio Area',
      'Strength Training Zone',
    ],
    color: 'border-white/10',
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    icon: TrendingUp,
    duration: '3 Months',
    price: 3200,
    originalPrice: 3600,
    badge: 'Save ₹400',
    isPopular: false,
    features: [
      'All Monthly Benefits',
      '1 Guest Pass/Month',
      'Steam Room (2x/week)',
      'CrossFit Access',
      'Fitness Assessment',
    ],
    color: 'border-white/10',
  },
  {
    id: 'halfyearly',
    name: 'Half Yearly',
    icon: Award,
    duration: '6 Months',
    price: 5800,
    originalPrice: 7200,
    badge: 'Best Value 🔥',
    isPopular: false,
    features: [
      'All Quarterly Benefits',
      '1 Diet Consultation',
      '2 Guest Passes/Month',
      'Monthly Body Assessment',
      'Priority Class Booking',
      'Supplement Advice',
    ],
    color: 'border-[#C9A84C]/30',
  },
  {
    id: 'annual',
    name: 'Annual',
    icon: Crown,
    duration: '12 Months',
    price: 10000,
    originalPrice: 14400,
    badge: 'Most Popular ⭐',
    isPopular: true,
    features: [
      'All Half-Yearly Benefits',
      'Monthly Diet Plan Update',
      'Unlimited Steam Room',
      'Quarterly Body Assessment',
      '2 Free PT Sessions',
      'Guest Passes Unlimited',
      'Priority Trainer Access',
      'Annual Progress Report',
    ],
    color: 'border-[#C9A84C]',
  },
  {
    id: 'student',
    name: 'Student',
    icon: GraduationCap,
    duration: '1 Month',
    price: 900,
    originalPrice: 1200,
    badge: 'Student Offer',
    isPopular: false,
    features: [
      'Full Gym Access',
      'Locker Facility',
      'Valid Student ID Required',
      'Cardio + Strength Zone',
      'Morning/Evening Batch',
    ],
    color: 'border-white/10',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    icon: Building2,
    duration: 'Custom',
    price: null,
    originalPrice: null,
    badge: 'Team Plans',
    isPopular: false,
    features: [
      'Minimum 10 Members',
      'Dedicated Batch Timing',
      'Monthly Health Reports',
      'Quarterly Assessments',
      'Custom Branding Options',
      'Invoice & GST Bill',
    ],
    color: 'border-white/10',
  },
];

const amenities = [
  { icon: Wind, label: 'AC Gym' },
  { icon: Droplets, label: 'Clean Washrooms' },
  { icon: Droplets, label: 'Drinking Water' },
  { icon: Car, label: 'Free Parking' },
  { icon: Wifi, label: 'WiFi Access' },
  { icon: Music, label: 'Music System' },
];

const faqs = [
  {
    q: 'Can I freeze my membership?',
    a: 'Yes, members on Half-Yearly and Annual plans can freeze their membership for up to 30 days per year due to travel or medical reasons. Contact our front desk with a valid reason.',
  },
  {
    q: 'Are there any joining fees?',
    a: 'There is a one-time registration fee of ₹500 for all new members. This covers your locker key deposit and welcome kit.',
  },
  {
    q: 'Can I upgrade my plan mid-membership?',
    a: 'Absolutely! You can upgrade at any time and we will adjust the pricing proportionally for the remaining days on your current plan.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Memberships are non-refundable once activated. However, in case of medical emergencies with a valid doctor\'s certificate, we offer credit to your account for future use.',
  },
  {
    q: 'What are the gym timings?',
    a: 'UGRAMM FITNESS is open Monday to Saturday: 5:30 AM – 10:00 PM. Sundays: 7:00 AM – 2:00 PM. Holiday timings may vary.',
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="font-[var(--font-montserrat)] font-semibold text-white text-sm md:text-base pr-4">
          {faq.q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 font-[var(--font-inter)] text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6 font-[var(--font-inter)]">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">Membership</span>
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
            MEMBERSHIP
            <br />
            PLANS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[var(--font-montserrat)] text-xl md:text-2xl text-white/60 mb-8"
          >
            Invest in your greatest asset — <span className="text-[#C9A84C]">YOU</span>
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider text-white mb-3">
              CHOOSE YOUR{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                PLAN
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50">
              All plans include access to our full-equipped 5000 sqft facility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const isAnnual = plan.isPopular;

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isAnnual
                      ? 'lg:scale-[1.05] shadow-[0_0_40px_rgba(201,168,76,0.25)] border-2 border-[#C9A84C] bg-[#111111]'
                      : `bg-white/[0.03] border ${plan.color} hover:border-[#C9A84C]/30`
                  }`}
                >
                  {/* Popular badge */}
                  {isAnnual && (
                    <div className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black text-xs font-[var(--font-montserrat)] font-bold text-center py-2 tracking-widest uppercase">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  {/* Badge chip */}
                  {plan.badge && !isAnnual && (
                    <div className="absolute top-4 right-4 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full px-3 py-1">
                      <span className="text-[#C9A84C] text-xs font-[var(--font-inter)] font-semibold">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                          isAnnual
                            ? 'bg-[#C9A84C]/20 border-[#C9A84C]/50'
                            : 'bg-white/[0.05] border-white/10'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isAnnual ? 'text-[#C9A84C]' : 'text-white/60'}`} />
                      </div>
                      <div>
                        <div className={`font-[var(--font-montserrat)] font-bold text-lg ${isAnnual ? 'text-white' : 'text-white/90'}`}>
                          {plan.name}
                        </div>
                        <div className="font-[var(--font-inter)] text-xs text-white/40">{plan.duration}</div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {plan.price !== null ? (
                        <>
                          <div className="flex items-end gap-2">
                            <span
                              className={`font-[var(--font-bebas)] text-5xl leading-none ${
                                isAnnual ? 'text-[#C9A84C]' : 'text-white'
                              }`}
                            >
                              ₹{plan.price.toLocaleString('en-IN')}
                            </span>
                            <span className="font-[var(--font-inter)] text-white/40 text-sm mb-1">
                              /{plan.duration === '1 Month' ? 'month' : plan.duration.toLowerCase().replace(' ', '-')}
                            </span>
                          </div>
                          {plan.originalPrice && (
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-[var(--font-inter)] text-white/30 text-sm line-through">
                                ₹{plan.originalPrice.toLocaleString('en-IN')}
                              </span>
                              <span className="text-green-400 text-xs font-semibold">
                                Save ₹{(plan.originalPrice - plan.price).toLocaleString('en-IN')}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="font-[var(--font-bebas)] text-4xl text-[#C9A84C]">
                          Contact Us
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isAnnual ? 'bg-[#C9A84C]/20' : 'bg-white/[0.07]'
                            }`}
                          >
                            <Check
                              className={`w-2.5 h-2.5 ${isAnnual ? 'text-[#C9A84C]' : 'text-white/50'}`}
                              strokeWidth={3}
                            />
                          </div>
                          <span className="font-[var(--font-inter)] text-sm text-white/65">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {plan.id === 'corporate' ? (
                      <Link
                        href="/contact"
                        className="block w-full text-center border border-[#C9A84C]/50 text-[#C9A84C] font-bold py-3 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 font-[var(--font-montserrat)] text-sm"
                      >
                        GET QUOTE
                      </Link>
                    ) : isAnnual ? (
                      <Link
                        href="/join"
                        className="block w-full text-center bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold py-3 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 font-[var(--font-montserrat)] text-sm"
                      >
                        ENROLL NOW
                      </Link>
                    ) : (
                      <Link
                        href="/join"
                        className="block w-full text-center border border-white/20 text-white/70 font-bold py-3 rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300 font-[var(--font-montserrat)] text-sm"
                      >
                        GET STARTED
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── INCLUDED FOR ALL ─── */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider text-white mb-2">
              INCLUDED IN{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ALL PLANS
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50 text-sm">
              Every membership comes with these standard amenities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <span className="font-[var(--font-inter)] text-xs text-white/60 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider text-white mb-2">
              FREQUENTLY ASKED{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                QUESTIONS
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/8 via-transparent to-[#D4AF37]/5" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Zap className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
            <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl text-white mb-4 leading-none">
              READY TO START?
            </h2>
            <p className="font-[var(--font-inter)] text-white/60 mb-8 text-lg">
              Join UGRAMM FITNESS today and get your first week absolutely free.
            </p>
            <Link
              href="/join"
              className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 font-[var(--font-montserrat)] text-lg"
            >
              ENROLL NOW
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
