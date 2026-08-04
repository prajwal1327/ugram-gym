'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CreditCard,
  CheckSquare,
  Dumbbell,
  Package,
  Target,
  Image,
  Star,
  FileText,
  Megaphone,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import LionSVG from '@/components/common/LionSVG';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Members', href: '/admin/members', icon: Users },
  { label: 'Add Member', href: '/admin/members/add', icon: UserPlus },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'Attendance', href: '/admin/attendance', icon: CheckSquare },
  { label: 'Trainers', href: '/admin/trainers', icon: Dumbbell },
  { label: 'Plans', href: '/admin/plans', icon: Package },
  { label: 'Personal Training', href: '/admin/personal-training', icon: Target },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
  { label: 'Offers / Banners', href: '/admin/offers', icon: Megaphone },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/members': 'Members',
  '/admin/members/add': 'Add Member',
  '/admin/payments': 'Payments',
  '/admin/attendance': 'Attendance',
  '/admin/trainers': 'Trainers',
  '/admin/plans': 'Plans',
  '/admin/personal-training': 'Personal Training',
  '/admin/gallery': 'Gallery',
  '/admin/testimonials': 'Testimonials',
  '/admin/blog': 'Blog',
  '/admin/offers': 'Offers & Banners',
  '/admin/settings': 'Settings',
};

function NavLink({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative ${
        isActive
          ? 'bg-[#C9A84C] text-black'
          : 'text-white/50 hover:text-white hover:bg-white/5'
      }`}
    >
      {!isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#C9A84C] rounded-full group-hover:h-8 transition-all duration-200" />
      )}
      <Icon size={17} className="shrink-0" />
      <span className="truncate">{item.label}</span>
      {isActive && <ChevronRight size={14} className="ml-auto shrink-0 opacity-60" />}
    </Link>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitle = PAGE_TITLES[pathname] || 'Admin Panel';

  const sidebar = (
    <div
      className="flex flex-col h-full"
      style={{ background: '#111111', borderRight: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/6">
        <div className="w-10 h-10 shrink-0">
          <LionSVG className="w-full h-full" />
        </div>
        <div>
          <p className="font-bebas text-[#C9A84C] tracking-widest text-sm leading-tight">UGRAMM FITNESS</p>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Admin Panel</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5 scrollbar-thin scrollbar-thumb-white/10">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            isActive={pathname === item.href}
            onClick={() => setSidebarOpen(false)}
          />
        ))}
      </nav>

      {/* User + Logout */}
      <div className="px-3 py-4 border-t border-white/6">
        <div className="flex items-center gap-3 px-3 py-2.5 mb-2">
          <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center">
            <span className="text-[#C9A84C] text-xs font-bold">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Admin</p>
            <p className="text-white/30 text-xs truncate">admin@ugrammfitness.com</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
        >
          <LogOut size={17} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="admin-area min-h-screen flex relative" style={{ background: '#0A0A0A' }}>
      {/* Lion watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center lg:ml-[260px]" aria-hidden>
        <LionSVG className="w-[500px] h-[500px] opacity-[0.025]" />
      </div>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[260px] z-40">
        {sidebar}
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-[260px] z-50 lg:hidden transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebar}
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
        {/* Top Header */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-14"
          style={{
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 text-white/50 hover:text-white transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h2 className="text-white font-semibold text-sm">{pageTitle}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-white/40 hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center">
              <span className="text-[#C9A84C] text-xs font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
