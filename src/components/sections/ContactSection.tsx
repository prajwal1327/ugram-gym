'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, MessageCircle, ExternalLink } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Our Location',
    lines: [
      'UGRAMM FITNESS',
      'Bidar, Karnataka 585401',
      'Near [Landmark], Bidar',
    ],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=Bidar,Karnataka,585401' },
    color: '#C9A84C',
  },
  {
    icon: Phone,
    label: 'Phone & WhatsApp',
    lines: [
      '+91 70194 97XXX',
      'Available 5AM – 10PM',
      'Quick response on WhatsApp',
    ],
    action: {
      label: 'WhatsApp Us',
      href: 'https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS.',
    },
    color: '#25D366',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: [
      'Mon – Sat: 5:00 AM – 10:00 PM',
      'Sunday: 6:00 AM – 8:00 PM',
      'Open 365 days a year',
    ],
    action: null,
    color: '#E8D5A3',
  },
];

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
              Find Us
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            <span className="text-white">COME TRAIN </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              WITH US
            </span>
          </h2>
          <p className="mt-3 text-white/50 text-sm font-[family-name:var(--font-montserrat)]">
            Bidar, Karnataka — Where champions are made.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CONTACT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/20 transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                {/* Label */}
                <p
                  className="text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-[0.25em] mb-3"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>

                {/* Lines */}
                <div className="space-y-1.5 mb-5">
                  {item.lines.map((line, j) => (
                    <p
                      key={j}
                      className={`font-[family-name:var(--font-montserrat)] text-sm ${
                        j === 0 ? 'text-white font-semibold' : 'text-white/50'
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Action */}
                {item.action && (
                  <a
                    href={item.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest transition-all duration-200"
                    style={{ color: item.color }}
                  >
                    {item.action.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Google Maps embed + Social */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Maps iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 h-72 relative"
          >
            <iframe
              title="UGRAMM FITNESS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30567.258!2d76.9214!3d17.9104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfb7f82c43e6f5%3A0xe14a5d1d0000000!2sBidar%2C%20Karnataka%20585401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Social + CTA column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/ugrammfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-pink-500/20 rounded-2xl p-5 hover:border-pink-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-white font-[family-name:var(--font-montserrat)] font-bold text-sm">
                  @ugrammfitness
                </p>
                <p className="text-white/40 text-xs font-[family-name:var(--font-montserrat)]">
                  Follow us for daily motivation
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 ml-auto" />
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-5 hover:border-[#25D366]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-white font-[family-name:var(--font-montserrat)] font-bold text-sm">
                  WhatsApp Us
                </p>
                <p className="text-white/40 text-xs font-[family-name:var(--font-montserrat)]">
                  +91 70194 97XXX
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 ml-auto" />
            </a>

            {/* Join CTA */}
            <a
              href="https://wa.me/917019497000?text=Hi! I want to join UGRAMM FITNESS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black rounded-2xl p-5 font-[family-name:var(--font-montserrat)] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:scale-[1.02]"
            >
              JOIN UGRAMM FITNESS TODAY
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
