'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/',                  label: 'Home' },
  { href: '/about',             label: 'About' },
  { href: '/facilities',        label: 'Facilities' },
  { href: '/membership',        label: 'Membership' },
  { href: '/personal-training', label: 'Personal Training' },
  { href: '/gallery',           label: 'Gallery' },
  { href: '/trainers',          label: 'Trainers' },
  { href: '/blog',              label: 'Blog' },
  { href: '/contact',           label: 'Contact' },
];

const WHATSAPP_URL =
  'https://wa.me/917019497000?text=Hi!%20I%20want%20to%20join%20UGRAMM%20FITNESS.';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const toggle = useCallback(() => setIsMobileOpen(v => !v), []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ─────────────── Sticky nav bar ─────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/96 backdrop-blur-xl border-b border-[#C9A84C]/20 shadow-[0_4px_40px_rgba(0,0,0,0.7)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="UGRAMM FITNESS — Home"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className="relative w-10 h-10 md:w-12 md:h-12 shrink-0"
              style={{ filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.3))' }}
            >
              <Image
                src="/images/logo.jpeg"
                alt="UGRAMM FITNESS Logo"
                fill
                className="object-cover rounded-full"
                style={{ border: '1.5px solid rgba(201,168,76,0.45)' }}
              />
            </motion.div>
            <div className="hidden sm:block">
              <span
                className="block text-xl md:text-2xl font-black tracking-[0.18em] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-none"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                UGRAMM FITNESS
              </span>
              <span
                className="block text-[8px] tracking-[0.35em] text-white/30 uppercase leading-none mt-0.5"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Est. 2026 · Bidar
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[#C9A84C]'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4AF37]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-200"
            >
              <WhatsAppIcon />
            </a>
            <Link
              href="/join"
              className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-6 py-2.5 rounded-full text-[10px] tracking-[0.18em] uppercase hover:shadow-[0_0_28px_rgba(201,168,76,0.55)] hover:scale-[1.03] transition-all duration-300 active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Join Now
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] shrink-0"
            onClick={toggle}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-[#C9A84C] rounded-full origin-center"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-0.5 bg-[#C9A84C] rounded-full"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-[#C9A84C] rounded-full origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* ─────────────── Mobile overlay menu ─────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] lg:hidden bg-[#0A0A0A] flex flex-col"
          >
            {/* Lion crown watermark */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/lion-crown.webp"
                alt=""
                fill
                className="object-cover object-center"
                style={{ opacity: 0.04 }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.06)_0%,transparent_100%)]" />
            </div>
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

            <div className="h-16" aria-hidden="true" />

            {/* Center logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex justify-center mt-4 mb-2"
            >
              <div className="relative w-20 h-20" style={{ filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))' }}>
                <Image src="/images/logo.jpeg" alt="UGRAMM FITNESS" fill className="object-cover rounded-full" />
              </div>
            </motion.div>

            {/* Nav items */}
            <ul className="flex-1 flex flex-col items-center justify-center gap-1 px-6 relative" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.28, delay: i * 0.045 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-[1.7rem] font-black tracking-[0.2em] uppercase transition-all duration-200 ${
                      isActive(link.href)
                        ? 'text-[#C9A84C]'
                        : 'text-white/75 hover:text-[#C9A84C] hover:tracking-[0.25em]'
                    }`}
                    style={{ fontFamily: 'var(--font-bebas)' }}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.48 }}
                className="mt-8 flex flex-col gap-3 w-full max-w-xs"
              >
                <Link
                  href="/join"
                  className="block text-center bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Join Now
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-[#25D366]/40 text-[#25D366] font-semibold px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-[#25D366]/10 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="pb-8 text-center relative"
            >
              <p className="text-[#A1A1AA]/40 text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
                Bidar, Karnataka 585401 · Est. 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
