'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [showPassword, setShowPw]   = useState(false);
  const [error, setError]           = useState('');
  const [loading, setLoading]       = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError('Please enter both email and password.'); return; }
    setError(''); setLoading(true);
    try {
      const result = await signIn('credentials', { email, password, redirect: false });
      if (result?.error) { setError('Invalid email or password. Please try again.'); }
      else { router.push('/admin'); router.refresh(); }
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#0A0A0A' }}>

      {/* Crown lion background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/lion-crown.webp"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.08 }}
          aria-hidden="true"
        />
        {/* Radial darken so the card area is readable */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)' }} />
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* Subtle gold grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          background: 'rgba(13,13,13,0.92)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(201,168,76,0.18)',
          borderRadius: '24px',
          padding: '48px 40px',
          boxShadow: '0 0 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.04)',
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="relative w-24 h-24 mb-4"
            style={{ filter: 'drop-shadow(0 0 24px rgba(201,168,76,0.45))' }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="UGRAMM FITNESS"
              fill
              className="object-cover rounded-full"
              style={{ border: '2.5px solid rgba(201,168,76,0.5)' }}
            />
          </div>
          <div className="text-center">
            <h1
              className="text-3xl font-black text-white tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              UGRAMM FITNESS
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <div className="h-px w-8 bg-[#C9A84C]/40" />
              <span
                className="text-[#C9A84C] text-[10px] font-semibold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Admin Panel
              </span>
              <div className="h-px w-8 bg-[#C9A84C]/40" />
            </div>
          </div>
        </div>

        <h2
          className="text-white/70 font-semibold text-sm text-center mb-6 tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Sign in to continue
        </h2>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-5">
            <AlertCircle size={16} className="text-red-400 shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Email Address
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@ugrammfitness.com"
                autoComplete="email"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/[0.06] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-12 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/[0.06] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(201,168,76,0.45)] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" />Authenticating...</>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p className="text-white/20 text-[10px] text-center mt-6 tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Restricted access — authorised personnel only
        </p>
      </div>
    </div>
  );
}
