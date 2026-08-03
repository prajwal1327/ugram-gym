'use client';

import {
  Users,
  UserPlus,
  AlertTriangle,
  IndianRupee,
  UserX,
  Clock,
  Target,
  Activity,
  PartyPopper,
  MessageCircle,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

// ---- Placeholder Data ----

const STATS = [
  {
    label: 'Active Members',
    value: 247,
    icon: Users,
    trend: '+12',
    trendDir: 'up',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.15)',
  },
  {
    label: 'New Today',
    value: 3,
    icon: UserPlus,
    trend: '+1',
    trendDir: 'up',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    label: 'Expiring This Week',
    value: 18,
    icon: AlertTriangle,
    trend: '-2',
    trendDir: 'down',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    label: 'Monthly Revenue',
    value: '₹1,24,500',
    icon: IndianRupee,
    trend: '+8%',
    trendDir: 'up',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.15)',
    isString: true,
  },
  {
    label: 'Expired Members',
    value: 34,
    icon: UserX,
    trend: '+5',
    trendDir: 'up',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.15)',
  },
  {
    label: 'Pending Payments',
    value: 7,
    icon: Clock,
    trend: '-3',
    trendDir: 'down',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.15)',
  },
  {
    label: 'PT Members',
    value: 29,
    icon: Target,
    trend: '+4',
    trendDir: 'up',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.15)',
  },
  {
    label: "Today's Attendance",
    value: 61,
    icon: Activity,
    trend: '0',
    trendDir: 'neutral',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.15)',
  },
];

const RECENT_MEMBERS = [
  { id: 'UF-247', name: 'Arjun Reddy', phone: '98765 43210', type: 'Annual', date: 'Today', status: 'active' },
  { id: 'UF-246', name: 'Priya Sharma', phone: '87654 32109', type: 'Quarterly', date: 'Today', status: 'active' },
  { id: 'UF-245', name: 'Mohammed Farouk', phone: '76543 21098', type: 'Monthly', date: 'Yesterday', status: 'active' },
  { id: 'UF-244', name: 'Sunita Kulkarni', phone: '65432 10987', type: 'Half-Yearly', date: '2 days ago', status: 'active' },
  { id: 'UF-243', name: 'Kiran Patil', phone: '54321 09876', type: 'PT Package', date: '3 days ago', status: 'active' },
];

const BIRTHDAYS = [
  { id: 'UF-101', name: 'Deepak Chavan', phone: '98001 12345' },
  { id: 'UF-078', name: 'Sana Begum', phone: '97002 23456' },
];

const RENEWALS = [
  { id: 'UF-211', name: 'Ravi Deshmukh', expiry: 'Today', daysLeft: 0, phone: '96003 34567' },
  { id: 'UF-198', name: 'Anita Joshi', expiry: 'Tomorrow', daysLeft: 1, phone: '95004 45678' },
  { id: 'UF-185', name: 'Sanjay More', expiry: '3 days', daysLeft: 3, phone: '94005 56789' },
  { id: 'UF-174', name: 'Lakshmi Rao', expiry: '5 days', daysLeft: 5, phone: '93006 67890' },
  { id: 'UF-163', name: 'Abdul Khan', expiry: '7 days', daysLeft: 7, phone: '92007 78901' },
];

function renewalColor(daysLeft: number) {
  if (daysLeft <= 0) return { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', text: '#EF4444', label: 'EXPIRED' };
  if (daysLeft <= 3) return { bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)', text: '#F97316', label: `${daysLeft}d left` };
  return { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', text: '#F59E0B', label: `${daysLeft}d left` };
}

function TrendIcon({ dir }: { dir: string }) {
  if (dir === 'up') return <TrendingUp size={12} />;
  if (dir === 'down') return <TrendingDown size={12} />;
  return <Minus size={12} />;
}

// ---- Component ----

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-2xl">Dashboard</h1>
          <p className="text-white/40 text-sm mt-0.5">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
        <Link
          href="/admin/members/add"
          className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          <UserPlus size={16} />
          Add Member
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden"
              style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${stat.color}20` }}
                >
                  <Icon size={20} style={{ color: stat.color }} />
                </div>
                <span
                  className="flex items-center gap-1 text-xs font-medium"
                  style={{ color: stat.trendDir === 'up' ? '#10B981' : stat.trendDir === 'down' ? '#EF4444' : '#9CA3AF' }}
                >
                  <TrendIcon dir={stat.trendDir} />
                  {stat.trend}
                </span>
              </div>
              <div>
                <p
                  className="font-bebas text-3xl leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.isString ? stat.value : stat.value.toLocaleString('en-IN')}
                </p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two column section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Members */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
            <h3 className="text-white font-semibold text-sm">Recent Members</h3>
            <Link href="/admin/members" className="text-[#C9A84C] text-xs hover:underline flex items-center gap-1">
              View all <ChevronRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-white/5">
            {RECENT_MEMBERS.map((m) => (
              <div key={m.id} className="flex items-center justify-between px-5 py-3 hover:bg-white/3 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center">
                    <span className="text-[#C9A84C] text-xs font-bold">{m.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{m.name}</p>
                    <p className="text-white/30 text-xs">{m.id} · {m.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full">
                    Active
                  </span>
                  <p className="text-white/30 text-[10px] mt-0.5">{m.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Renewal Alerts */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
            <h3 className="text-white font-semibold text-sm">Renewal Alerts</h3>
            <span className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-[10px] px-2 py-0.5 rounded-full">
              {RENEWALS.length} members
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {RENEWALS.map((r) => {
              const c = renewalColor(r.daysLeft);
              return (
                <div
                  key={r.id}
                  className="flex items-center justify-between px-5 py-3 hover:bg-white/3 transition-colors"
                  style={{ borderLeft: `3px solid ${c.text}` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: c.bg }}>
                      <span className="text-xs font-bold" style={{ color: c.text }}>{r.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{r.name}</p>
                      <p className="text-white/30 text-xs">{r.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ background: c.bg, borderColor: c.border, color: c.text }}
                    >
                      {c.label}
                    </span>
                    <a
                      href={`https://wa.me/91${r.phone.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-green-500/10 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors"
                    >
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Birthdays */}
        <div
          className="rounded-2xl p-5"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <PartyPopper size={18} className="text-[#C9A84C]" />
            <h3 className="text-white font-semibold text-sm">Today&apos;s Birthdays</h3>
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-[10px] px-2 py-0.5 rounded-full ml-auto">
              {BIRTHDAYS.length} today
            </span>
          </div>
          {BIRTHDAYS.length === 0 ? (
            <p className="text-white/30 text-sm">No birthdays today.</p>
          ) : (
            <div className="space-y-3">
              {BIRTHDAYS.map((b) => (
                <div key={b.id} className="flex items-center justify-between p-3 bg-[#C9A84C]/5 border border-[#C9A84C]/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                      <span className="text-[#C9A84C] text-xs font-bold">{b.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{b.name}</p>
                      <p className="text-white/30 text-xs">{b.id}</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/91${b.phone.replace(/\s/g, '')}?text=${encodeURIComponent('Happy Birthday! 🎂 Wishing you a great day from UGRAMM FITNESS!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-1.5 rounded-lg hover:bg-green-500/20 transition-colors"
                  >
                    <MessageCircle size={12} />
                    Wish
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className="rounded-2xl p-5"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h3 className="text-white font-semibold text-sm mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <Link
              href="/admin/members/add"
              className="flex items-center gap-3 p-3 bg-[#C9A84C]/5 border border-[#C9A84C]/15 rounded-xl hover:border-[#C9A84C]/30 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center">
                <UserPlus size={17} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Add New Member</p>
                <p className="text-white/30 text-xs">Register a new gym member</p>
              </div>
              <ChevronRight size={16} className="text-white/20 ml-auto group-hover:text-[#C9A84C] transition-colors" />
            </Link>

            <Link
              href="/admin/payments"
              className="flex items-center gap-3 p-3 bg-blue-500/5 border border-blue-500/15 rounded-xl hover:border-blue-500/30 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                <CreditCard size={17} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Record Payment</p>
                <p className="text-white/30 text-xs">Add a new payment record</p>
              </div>
              <ChevronRight size={16} className="text-white/20 ml-auto group-hover:text-blue-400 transition-colors" />
            </Link>

            <a
              href={`https://wa.me/91?text=${encodeURIComponent('Hello! Your UGRAMM FITNESS membership is expiring soon. Please renew to continue your fitness journey. Contact us at [phone].')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-500/5 border border-green-500/15 rounded-xl hover:border-green-500/30 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-green-500/15 flex items-center justify-center">
                <MessageCircle size={17} className="text-green-400" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Send Renewal Reminder</p>
                <p className="text-white/30 text-xs">WhatsApp renewal reminder</p>
              </div>
              <ChevronRight size={16} className="text-white/20 ml-auto group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
