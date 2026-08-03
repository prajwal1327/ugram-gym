'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Calendar, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: string;
  membership: string;
  batch: string;
  goal: string;
  medical: string;
  source: string;
};

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  dob: '',
  gender: '',
  membership: '',
  batch: '',
  goal: '',
  medical: '',
  source: '',
};

const membershipOptions = [
  { value: 'monthly', label: 'Monthly', price: '₹1,200' },
  { value: 'quarterly', label: 'Quarterly', price: '₹3,200' },
  { value: 'halfyearly', label: 'Half Yearly', price: '₹5,800' },
  { value: 'annual', label: 'Annual', price: '₹10,000', badge: '⭐ Best Value' },
  { value: 'student', label: 'Student', price: '₹900' },
  { value: 'personal-training', label: 'Personal Training', price: '₹8,000' },
];

const testimonials = [
  { quote: "Joining UGRAMM FITNESS was the best decision I made. Lost 15kg in 4 months!", name: 'Suresh M.', tag: 'Weight Loss' },
  { quote: "The trainers here are genuinely invested in your progress. I feel stronger every week.", name: 'Ananya R.', tag: 'Muscle Gain' },
  { quote: "Best gym in Bidar, no doubt. Premium equipment, clean facilities, expert coaches.", name: 'Rahul B.', tag: 'Member Since 2023' },
];

const steps = [
  { num: '01', title: 'Submit Enquiry', desc: 'Fill the form or message us on WhatsApp with your details.' },
  { num: '02', title: 'We Contact You', desc: 'Our team calls or WhatsApps you within 2 hours to guide you.' },
  { num: '03', title: 'Start Training!', desc: 'Visit the gym, complete enrollment, and begin your transformation.' },
];

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'join' }),
      });
    } catch {
      // proceed to success
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const waMsg = encodeURIComponent('Hi! I want to join UGRAMM FITNESS. Please share details.');
  const selectedMembership = membershipOptions.find(m => m.value === formData.membership);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A84C] font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Enrollment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl tracking-wider mb-4 font-black"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            JOIN{' '}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              UGRAMM FITNESS
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            Start Your Transformation Today
          </motion.p>
        </div>
      </section>

      {/* Two Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border border-[#C9A84C]/30 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
              Fill the Form
            </h3>
            <p className="text-white/50 text-sm">Recommended — we&apos;ll call you back</p>
            <span className="inline-block mt-3 text-xs bg-[#C9A84C]/20 text-[#C9A84C] px-3 py-1 rounded-full font-semibold">
              RECOMMENDED
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#25D366]/[0.06] border border-[#25D366]/20 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-white mb-1"
              style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
              WhatsApp Us
            </h3>
            <p className="text-white/50 text-sm">Instant — chat directly with us</p>
            <a
              href={`https://wa.me/917019497000?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-xs bg-[#25D366]/20 text-[#25D366] px-3 py-1.5 rounded-full font-semibold hover:bg-[#25D366]/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Open WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-16 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className="w-24 h-24 mb-6" style={{ color: '#C9A84C' }} />
              </motion.div>
              <h3 className="text-4xl font-black tracking-wider mb-3"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)', color: '#C9A84C' }}>
                ENQUIRY SUBMITTED!
              </h3>
              <p className="text-white/60 text-lg mb-6"
                style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                Our team will contact you within 2 hours. Get ready to transform!
              </p>
              <a
                href={`https://wa.me/917019497000?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)', letterSpacing: '0.1em' }}
              >
                <MessageCircle className="w-5 h-5" />
                ALSO MESSAGE US ON WHATSAPP
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-black tracking-wider mb-8"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                YOUR <span className="text-[#C9A84C]">DETAILS</span>
              </h2>

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email + DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', colorScheme: 'dark' }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Gender */}
              <div className="mb-5">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Gender
                </label>
                <div className="flex gap-3">
                  {['Male', 'Female', 'Other'].map(g => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="gender"
                        value={g.toLowerCase()}
                        checked={formData.gender === g.toLowerCase()}
                        onChange={handleChange}
                        className="accent-[#C9A84C]"
                      />
                      <span className={`text-sm font-medium transition-colors ${
                        formData.gender === g.toLowerCase() ? 'text-[#C9A84C]' : 'text-white/50'
                      }`}
                        style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                        {g}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Membership */}
              <div className="mb-5">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Membership Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {membershipOptions.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, membership: opt.value }))}
                      className={`relative p-3 rounded-xl border text-left transition-all duration-300 ${
                        formData.membership === opt.value
                          ? 'border-[#C9A84C]/60 bg-[#C9A84C]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      {opt.badge && (
                        <span className="absolute -top-2 left-2 text-xs bg-[#C9A84C] text-black px-2 py-0.5 rounded-full font-bold">
                          Best Value
                        </span>
                      )}
                      <p className={`font-semibold text-sm ${formData.membership === opt.value ? 'text-[#C9A84C]' : 'text-white'}`}
                        style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                        {opt.label}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">{opt.price}</p>
                    </button>
                  ))}
                </div>
                {selectedMembership && (
                  <p className="text-[#C9A84C] text-sm mt-2">
                    Selected: {selectedMembership.label} — {selectedMembership.price}
                  </p>
                )}
              </div>

              {/* Row 5: Batch */}
              <div className="mb-5">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-3"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Preferred Batch
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'morning', label: '🌅 Morning', sub: '5AM – 9AM' },
                    { value: 'evening', label: '🌆 Evening', sub: '5PM – 9PM' },
                  ].map(b => (
                    <button
                      key={b.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, batch: b.value }))}
                      className={`flex-1 p-4 rounded-xl border text-center transition-all duration-300 ${
                        formData.batch === b.value
                          ? 'border-[#C9A84C]/60 bg-[#C9A84C]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <p className={`font-semibold text-sm ${formData.batch === b.value ? 'text-[#C9A84C]' : 'text-white'}`}
                        style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                        {b.label}
                      </p>
                      <p className="text-white/40 text-xs mt-1">{b.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Goal */}
              <div className="mb-5">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Your Goal
                </label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                  style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                >
                  <option value="" className="bg-[#111]">Select your goal</option>
                  <option value="weight-loss" className="bg-[#111]">Weight Loss</option>
                  <option value="muscle-gain" className="bg-[#111]">Muscle Gain</option>
                  <option value="maintain" className="bg-[#111]">Maintain Fitness</option>
                  <option value="strength" className="bg-[#111]">Build Strength</option>
                  <option value="general" className="bg-[#111]">General Fitness</option>
                </select>
              </div>

              {/* Row 7: Medical */}
              <div className="mb-5">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  Medical Conditions? <span className="normal-case text-white/30">(optional)</span>
                </label>
                <textarea
                  name="medical"
                  rows={2}
                  value={formData.medical}
                  onChange={handleChange}
                  placeholder="Any injuries, conditions, or health notes our trainers should know..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                />
              </div>

              {/* Row 8: Source */}
              <div className="mb-8">
                <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  How Did You Hear About Us?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                  style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                >
                  <option value="" className="bg-[#111]">Select source</option>
                  <option value="google" className="bg-[#111]">Google Search</option>
                  <option value="instagram" className="bg-[#111]">Instagram</option>
                  <option value="friend" className="bg-[#111]">Friend / Referral</option>
                  <option value="walkin" className="bg-[#111]">Walk-in</option>
                  <option value="other" className="bg-[#111]">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 flex items-center justify-center gap-3 text-xl tracking-widest disabled:opacity-60"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">SUBMITTING...</span>
                ) : (
                  <>
                    SUBMIT ENQUIRY
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>

      {/* WhatsApp Alternative */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 mb-5"
            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
            Or message us directly
          </p>
          <a
            href={`https://wa.me/917019497000?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-full hover:bg-[#20BA5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 text-xl tracking-widest"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            <MessageCircle className="w-6 h-6" />
            CHAT ON WHATSAPP
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* What Happens Next */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black tracking-wider"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
            WHAT HAPPENS <span className="text-[#C9A84C]">NEXT?</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 relative"
            >
              <span className="text-8xl font-black text-white/5 absolute top-4 right-4 leading-none"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                <span className="text-[#C9A84C] font-black text-lg"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white"
                style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase font-mono">What Members Say</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm italic leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  — {t.name}
                </span>
                <span className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20 px-2 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
