'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard, Users, UserPlus, CreditCard, CheckSquare,
  Dumbbell, Package, Target, ImageIcon, Star, FileText,
  Megaphone, Settings, Bell, LogOut, Menu, X, ChevronRight,
} from 'lucide-react';

interface NavItem { label: string; href: string; icon: React.ElementType; }

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',        href: '/admin',                  icon: LayoutDashboard },
  { label: 'Members',          href: '/admin/members',          icon: Users           },
  { label: 'Add Member',       href: '/admin/members/add',      icon: UserPlus        },
  { label: 'Payments',         href: '/admin/payments',         icon: CreditCard      },
  { label: 'Attendance',       href: '/admin/attendance',       icon: CheckSquare     },
  { label: 'Trainers',         href: '/admin/trainers',         icon: Dumbbell        },
  { label: 'Plans',            href: '/admin/plans',            icon: Package         },
  { label: 'Personal Training',href: '/admin/personal-training',icon: Target          },
  { label: 'Gallery',          href: '/admin/gallery',          icon: ImageIcon       },
  { label: 'Testimonials',     href: '/admin/testimonials',     icon: Star            },
  { label: 'Blog',             href: '/admin/blog',             icon: FileText        },
  { label: 'Offers / Banners', href: '/admin/offers',           icon: Megaphone       },
  { label: 'Settings',         href: '/admin/settings',         icon: Settings        },
];

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Dashboard', '/admin/members': 'Members', '/admin/members/add': 'Add Member',
  '/admin/payments': 'Payments', '/admin/attendance': 'Attendance', '/admin/trainers': 'Trainers',
  '/admin/plans': 'Plans', '/admin/personal-training': 'Personal Training', '/admin/gallery': 'Gallery',
  '/admin/testimonials': 'Testimonials', '/admin/blog': 'Blog', '/admin/offers': 'Offers & Banners',
  '/admin/settings': 'Settings',
};

function NavLink({ item, isActive, onClick }: { item: NavItem; isActive: boolean; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer',
        background: isActive ? 'linear-gradient(135deg, #C9A84C, #D4AF37)' : 'transparent',
        color: isActive ? '#000' : 'rgba(255,255,255,0.6)',
        fontWeight: isActive ? 700 : 500, fontSize: '14px',
        borderLeft: isActive ? 'none' : '2px solid transparent',
      }}
      onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)'; (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderLeft = '2px solid #C9A84C'; } }}
      onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.borderLeft = '2px solid transparent'; } }}
    >
      <Icon size={20} style={{ flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{item.label}</span>
      {isActive && <ChevronRight size={14} style={{ opacity: 0.7 }} />}
    </Link>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ── Guaranteed cursor fix for admin ── */
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'admin-cursor-override';
    style.textContent = `
      * { cursor: auto !important; }
      button, a, [role="button"], label, select, .cursor-pointer { cursor: pointer !important; }
      input, textarea { cursor: text !important; }
    `;
    document.head.appendChild(style);
    return () => document.getElementById('admin-cursor-override')?.remove();
  }, []);

  const pageTitle = PAGE_TITLES[pathname] || 'Admin Panel';

  const sidebar = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d', borderRight: '1px solid rgba(201,168,76,0.15)' }}>

      {/* ── Sidebar header with lion ── */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '20px 20px 16px', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        {/* Lion photo background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.12 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(201,168,76,0.05) 100%)' }} />
        {/* Content */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid rgba(201,168,76,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.1)', flexShrink: 0 }}>
            <span style={{ fontSize: 22 }}>🦁</span>
          </div>
          <div>
            <p style={{ color: '#C9A84C', fontWeight: 800, fontSize: 15, letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1.2 }}>UGRAMM FITNESS</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 2 }}>Admin Panel</p>
          </div>
        </div>
        {/* Gold bottom line */}
        <div style={{ position: 'absolute', bottom: 0, left: 20, right: 20, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)' }} />
      </div>

      {/* ── Nav ── */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} isActive={pathname === item.href} onClick={() => setSidebarOpen(false)} />
        ))}
      </nav>

      {/* ── User / Logout ── */}
      <div style={{ padding: '12px', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', marginBottom: 4 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1.5px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: 13 }}>A</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Admin</p>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>admin@ugrammfitness.com</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', borderRadius: 10, background: 'transparent', border: 'none', color: '#f87171', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(239,68,68,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#0A0A0A', position: 'relative' }}>

      {/* ── Animated lion background ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.04, animation: 'adminLionPan 25s ease-in-out infinite alternate' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 60% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)' }} />
      </div>

      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex flex-col" style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: 280, zIndex: 40 }}>
        {sidebar}
      </aside>

      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 40 }} className="lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Mobile Sidebar ── */}
      <aside
        style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: 280, zIndex: 50, transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s ease' }}
        className="lg:hidden flex flex-col"
      >
        {sidebar}
      </aside>

      {/* ── Main area ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }} className="lg:ml-[280px]">

        {/* ── Top Header ── */}
        <header style={{ position: 'sticky', top: 0, zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: 60, background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
              style={{ padding: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 3, height: 20, background: 'linear-gradient(to bottom, #C9A84C, #D4AF37)', borderRadius: 2 }} />
              <h2 style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{pageTitle}</h2>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{ position: 'relative', padding: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
              <Bell size={18} />
              <span style={{ position: 'absolute', top: 8, right: 8, width: 6, height: 6, background: '#C9A84C', borderRadius: '50%' }} />
            </button>
            <Link href="/admin/members/add" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'linear-gradient(135deg, #C9A84C, #D4AF37)', borderRadius: 8, color: '#000', fontWeight: 700, fontSize: 12, textDecoration: 'none', letterSpacing: '0.05em', cursor: 'pointer' }}>
              <UserPlus size={14} />
              Add Member
            </Link>
          </div>
        </header>

        {/* ── Page Content ── */}
        <main style={{ flex: 1, padding: '24px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
