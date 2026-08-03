'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, CheckCircle, Instagram, Youtube, Facebook } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  interest: '',
  message: '',
};

const infoCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['UGRAMM FITNESS', 'Bidar, Karnataka 585401'],
    color: '#C9A84C',
  },
  {
    icon: Phone,
    title: 'Contact',
    lines: ['+91 70194 97XXX', 'Available on WhatsApp'],
    color: '#4ADE80',
    isPhone: true,
  },
  {
    icon: Clock,
    title: 'Timings',
    lines: ['Mon–Sat: 5:00 AM – 10:00 PM', 'Sun: 6:00 AM – 8:00 PM'],
    color: '#60A5FA',
  },
];

const socials = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/ugrammfitness/', color: '#E1306C' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com/ugrammfitness', color: '#1877F2' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ugrammfitness', color: '#FF0000' },
];

export default function ContactPage() {
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
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });
    } catch {
      // proceed to success state regardless
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl tracking-wider mb-6 font-black"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              CONTACT US
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            We&apos;re here to answer your questions and help you start your journey.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex gap-4 items-start hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                <card.icon className="w-5 h-5" style={{ color: card.color }} />
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-wider uppercase mb-2"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  {card.title}
                </p>
                {card.lines.map(line => (
                  <p key={line} className="text-white text-sm font-medium leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two Column: Form + Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black tracking-wider mb-8"
              style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
              SEND A <span className="text-[#C9A84C]">MESSAGE</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-12 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-black mb-3 text-white"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                  MESSAGE SENT!
                </h3>
                <p className="text-white/60"
                  style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                  Thank you! We&apos;ll contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                      style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                      style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Interested In
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                  >
                    <option value="" className="bg-[#111]">Select an option</option>
                    <option value="membership" className="bg-[#111]">Membership</option>
                    <option value="personal-training" className="bg-[#111]">Personal Training</option>
                    <option value="general" className="bg-[#111]">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-wider uppercase mb-2"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 flex items-center justify-center gap-3 text-lg tracking-widest disabled:opacity-60"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">SENDING...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Map + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black tracking-wider mb-6"
              style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
              FIND <span className="text-[#C9A84C]">US</span>
            </h2>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60882.51!2d77.5151!3d17.9115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bceb90d44c73261%3A0x8a0b37a30e6a94a3!2sBidar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UGRAMM FITNESS Location"
              />
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/40 text-xs tracking-wider uppercase mb-4"
                style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                Follow Us
              </p>
              <div className="flex gap-4">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-white/20 transition-all duration-300 text-white/60 hover:text-white"
                  >
                    <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917019497000?text=Hi UGRAMM FITNESS! I have a question."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold px-6 py-4 rounded-xl hover:bg-[#25D366]/20 transition-all duration-300 w-full"
              style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#25D366]/[0.06] border border-[#25D366]/20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl font-black tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
              PREFER <span className="text-[#25D366]">WHATSAPP?</span>
            </h2>
            <p className="text-white/50"
              style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
              Message us directly for faster responses — we reply within minutes.
            </p>
          </div>
          <a
            href="https://wa.me/917019497000?text=Hi UGRAMM FITNESS! I want to know more."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 whitespace-nowrap text-lg"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)', letterSpacing: '0.1em' }}
          >
            <MessageCircle className="w-5 h-5" />
            MESSAGE ON WHATSAPP
          </a>
        </motion.div>
      </section>
    </div>
  );
}
