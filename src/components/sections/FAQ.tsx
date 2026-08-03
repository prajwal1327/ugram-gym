'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What are your gym timings?',
    a: 'UGRAMM FITNESS is open Monday to Saturday from 5:00 AM to 10:00 PM, and on Sundays from 6:00 AM to 8:00 PM. We are open 365 days a year, including most public holidays.',
  },
  {
    q: 'What is the membership fee?',
    a: 'Our memberships start from ₹900/month (Student) and go up to ₹10,000/year (Annual). We offer Monthly (₹1,200), Quarterly (₹3,200), Half-Yearly (₹5,800), and Annual (₹10,000) plans. Personal Training is ₹8,000/month. Contact us on WhatsApp for the latest offers.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Yes! Our expert certified personal trainers offer 1-on-1 sessions starting at ₹8,000/month. Personal training includes a custom workout programme, personalised diet plan, nutrition counselling, weekly progress tracking, monthly body assessment, fat % analysis, and more.',
  },
  {
    q: 'Is there a free trial session available?',
    a: 'Absolutely! We offer a complimentary free trial session for new members. Simply WhatsApp us at +91-70194-97XXX to book your free trial session and see our facility firsthand.',
  },
  {
    q: 'What facilities do you have?',
    a: 'UGRAMM FITNESS features 100+ premium machines across dedicated Strength, Cardio, CrossFit, and Functional Training zones. We also have a steam room, fully-equipped locker rooms with showers, a nutrition corner, and free high-speed WiFi throughout.',
  },
  {
    q: 'Do you provide diet plans?',
    a: 'Yes! Diet and nutrition plans are included with our Personal Training package. Our certified trainers provide customised meal plans based on your fitness goals, body composition, and lifestyle. Nutrition counselling sessions are also available separately.',
  },
  {
    q: 'Are there separate facilities for women?',
    a: 'UGRAMM FITNESS provides a safe, welcoming environment for all members. We have dedicated time slots and training areas for women, along with female trainers available upon request. Our locker rooms and shower facilities are fully segregated.',
  },
  {
    q: 'How do I join UGRAMM FITNESS?',
    a: 'Joining is easy! You can walk in during our operating hours with a valid ID proof and we will get you enrolled immediately. Or you can WhatsApp us at +91-70194-97XXX or DM us on Instagram @ugrammfitness to enquire and book a free trial before committing.',
  },
  {
    q: 'Do you offer corporate memberships?',
    a: 'Yes, we offer special corporate membership packages for companies and their employees. Corporate packages come with discounted rates, flexible billing, and a dedicated relationship manager. Contact us at admin@ugrammfitness.com for a custom corporate quote.',
  },
  {
    q: 'What makes UGRAMM FITNESS different from other gyms in Bidar?',
    a: 'UGRAMM FITNESS is Bidar\'s only truly premium fitness facility, with 100+ machines, certified expert trainers, a steam room, CrossFit box, and a genuine transformation community. We are not just a gym — we track your progress, customise your programme, and invest in your results. Over 200 documented transformations speak for our commitment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
            <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C]/70 uppercase">
              FAQ
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}
          >
            <span className="text-white">FREQUENTLY ASKED </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              QUESTIONS
            </span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C9A84C]/30 bg-[#C9A84C]/[0.04]'
                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-[family-name:var(--font-montserrat)] font-semibold text-sm leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-[#E8D5A3]' : 'text-white/80'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#C9A84C]/50 bg-[#C9A84C]/15'
                        : 'border-white/15 bg-white/[0.04]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen ? 'text-[#C9A84C]' : 'text-white/40'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="w-full h-[1px] bg-[#C9A84C]/10 mb-4" />
                        <p className="font-[family-name:var(--font-montserrat)] text-white/55 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12 p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl"
        >
          <p className="text-white/50 text-sm font-[family-name:var(--font-montserrat)] mb-4">
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href="https://wa.me/917019497000?text=Hi! I have a question about UGRAMM FITNESS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:bg-[#25D366]/20 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)]"
          >
            Chat With Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
