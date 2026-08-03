import Link from 'next/link';
import LionSVG from '@/components/common/LionSVG';

const QUICK_LINKS = [
  { href: '/',                  label: 'Home' },
  { href: '/about',             label: 'About Us' },
  { href: '/membership',        label: 'Membership' },
  { href: '/personal-training', label: 'Personal Training' },
  { href: '/gallery',           label: 'Gallery' },
  { href: '/trainers',          label: 'Trainers' },
  { href: '/blog',              label: 'Blog' },
  { href: '/contact',           label: 'Contact' },
];

const SERVICES = [
  'Personal Training',
  'Strength Training',
  'Cardio Zone',
  'CrossFit',
  'Nutrition Coaching',
  'Steam Room',
  'Group Classes',
  'Zumba',
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] overflow-hidden" aria-label="Site footer">
      {/* Gold gradient top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />

      {/* Lion watermark — absolute center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <LionSVG size={420} color="#C9A84C" opacity={0.025} />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Main grid ─── */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group" aria-label="UGRAMM FITNESS">
              <LionSVG size={42} color="#C9A84C" />
              <div>
                <div
                  className="text-xl font-black tracking-[0.18em] bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent leading-tight"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  UGRAMM FITNESS
                </div>
                <div
                  className="text-[#A1A1AA] text-[9px] tracking-[0.32em] uppercase mt-0.5"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  RISE. ROAR. RULE.
                </div>
              </div>
            </Link>

            <p
              className="text-[#A1A1AA] text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Bidar's premier fitness destination. We forge champions through discipline, dedication, and elite training in a world-class facility.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { href: 'https://instagram.com/ugrammfitness/', label: 'Instagram', Icon: InstagramIcon },
                { href: 'https://facebook.com',                 label: 'Facebook',  Icon: FacebookIcon },
                { href: 'https://youtube.com',                  label: 'YouTube',   Icon: YouTubeIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/60 hover:scale-110 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-[#C9A84C] text-[10px] font-bold tracking-[0.32em] uppercase mb-6 pb-2.5 border-b border-[#C9A84C]/20"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {QUICK_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C9A84C] text-sm transition-colors duration-200 group"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    <span className="inline-block w-3 h-px bg-[#C9A84C]/35 group-hover:w-5 group-hover:bg-[#C9A84C] transition-all duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3
              className="text-[#C9A84C] text-[10px] font-bold tracking-[0.32em] uppercase mb-6 pb-2.5 border-b border-[#C9A84C]/20"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Our Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICES.map(service => (
                <li
                  key={service}
                  className="flex items-center gap-2.5 text-[#A1A1AA] text-sm"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              className="text-[#C9A84C] text-[10px] font-bold tracking-[0.32em] uppercase mb-6 pb-2.5 border-b border-[#C9A84C]/20"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#A1A1AA] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  Bidar, Karnataka<br />585401, India
                </p>
              </div>

              {/* Phone */}
              <a href="tel:+917019497000" className="flex gap-3 group">
                <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span
                  className="text-[#A1A1AA] group-hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  +91 70194 97XXX
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917019497000?text=Hi!%20I%20want%20to%20join%20UGRAMM%20FITNESS."
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 group"
              >
                <span className="text-[#25D366] mt-0.5">
                  <WhatsAppIcon />
                </span>
                <span
                  className="text-[#A1A1AA] group-hover:text-[#25D366] text-sm transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  WhatsApp Chat
                </span>
              </a>

              {/* Hours */}
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-[#A1A1AA] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  <p>Mon – Sat: 5AM – 10PM</p>
                  <p>Sun: 6AM – 8PM</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* ─── Newsletter strip ─── */}
        <div className="py-9 border-t border-[#C9A84C]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-white text-base font-bold mb-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Join Our Fitness Community
              </h3>
              <p
                className="text-[#A1A1AA] text-sm"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Get tips, updates, and exclusive offers straight to your inbox.
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={e => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                className="flex-1 md:w-60 px-4 py-2.5 bg-[#111111] border border-[#C9A84C]/20 rounded-full text-white text-sm placeholder:text-[#A1A1AA]/40 focus:outline-none focus:border-[#C9A84C]/50 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-5 py-2.5 rounded-full text-[10px] tracking-[0.18em] uppercase hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 shrink-0"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="py-5 border-t border-[#C9A84C]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center">
            <p
              className="text-[#A1A1AA]/70 text-xs"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              © 2024 UGRAMM FITNESS. All rights reserved.
            </p>
            <p
              className="text-[#A1A1AA]/40 text-xs"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Made with ❤️ in Bidar, Karnataka
            </p>
          </div>

          <nav aria-label="Legal links" className="flex items-center gap-4">
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms',   label: 'Terms' },
              { href: '/refund',  label: 'Refund Policy' },
            ].map(({ href, label }, i, arr) => (
              <span key={href} className="flex items-center gap-4">
                <Link
                  href={href}
                  className="text-[#A1A1AA]/60 hover:text-[#C9A84C] text-xs transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-[#C9A84C]/25 text-xs" aria-hidden="true">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
