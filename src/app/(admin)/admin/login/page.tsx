'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import LionSVG from '@/components/common/LionSVG';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError('Invalid email or password. Please try again.');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          background: 'rgba(17, 17, 17, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(201, 168, 76, 0.15)',
          borderRadius: '24px',
          padding: '48px 40px',
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 mb-3">
            <LionSVG className="w-full h-full" />
          </div>
          <div className="text-center">
            <h1 className="font-bebas text-3xl text-white tracking-[0.15em]">UGRAMM FITNESS</h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="h-px w-8 bg-[#C9A84C]/40" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-[0.3em] uppercase">Admin Panel</span>
              <div className="h-px w-8 bg-[#C9A84C]/40" />
            </div>
          </div>
        </div>

        <h2 className="text-white font-bold text-xl text-center mb-6">ADMIN LOGIN</h2>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-5">
            <AlertCircle size={16} className="text-red-400 shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ugrammfitness.com"
                autoComplete="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/8 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
              />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-12 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/8 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 mt-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Authenticating...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-white/20 text-xs text-center mt-6">
          Restricted access — authorised personnel only
        </p>
      </div>
    </div>
  );
}
