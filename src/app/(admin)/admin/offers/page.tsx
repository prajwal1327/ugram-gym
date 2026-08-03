'use client';

import { useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  ToggleLeft,
  ToggleRight,
  X,
  Save,
  Megaphone,
  Bell,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  expiresAt: string;
  showPopup: boolean;
  isActive: boolean;
  bgColor: string;
}

const INITIAL_BANNERS: Banner[] = [
  {
    id: '1',
    title: 'NEW YEAR FITNESS OFFER',
    subtitle: 'Limited Time — January 2025',
    description: 'Get 2 months free on Annual membership. Start your transformation journey with UGRAMM FITNESS today.',
    ctaText: 'Join Now',
    ctaLink: '/join',
    expiresAt: '2025-01-31',
    showPopup: true,
    isActive: true,
    bgColor: '#C9A84C',
  },
  {
    id: '2',
    title: 'STUDENT SPECIAL',
    subtitle: 'For Students Only',
    description: 'Students get 25% off on all membership plans. Show your college ID at the gym.',
    ctaText: 'Avail Offer',
    ctaLink: '/membership',
    expiresAt: '2025-03-31',
    showPopup: false,
    isActive: true,
    bgColor: '#3B82F6',
  },
  {
    id: '3',
    title: 'REFER A FRIEND',
    subtitle: 'Earn ₹500 Credit',
    description: 'Refer a friend and earn ₹500 membership credit. Both of you benefit when they join.',
    ctaText: 'Refer Now',
    ctaLink: '/contact',
    expiresAt: '',
    showPopup: false,
    isActive: false,
    bgColor: '#10B981',
  },
];

const EMPTY_BANNER: Omit<Banner, 'id'> = {
  title: '',
  subtitle: '',
  description: '',
  ctaText: 'Join Now',
  ctaLink: '/join',
  expiresAt: '',
  showPopup: false,
  isActive: true,
  bgColor: '#C9A84C',
};

const PRESET_COLORS = ['#C9A84C', '#3B82F6', '#10B981', '#EF4444', '#A855F7', '#F97316', '#EC4899'];

// ---- Preview Component ----

function BannerPreview({ banner }: { banner: Omit<Banner, 'id'> }) {
  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${banner.bgColor}22, ${banner.bgColor}08)`, border: `1px solid ${banner.bgColor}30` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10" style={{ background: banner.bgColor }} />
      <div className="relative z-10">
        <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: banner.bgColor }}>
          {banner.subtitle || 'Subtitle'}
        </p>
        <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">
          {banner.title || 'BANNER TITLE'}
        </h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {banner.description || 'Banner description will appear here.'}
        </p>
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-xl text-sm font-bold text-black"
            style={{ background: banner.bgColor }}
          >
            {banner.ctaText || 'CTA Button'}
          </button>
          {banner.expiresAt && (
            <span className="text-white/30 text-xs flex items-center gap-1">
              <Calendar size={12} />
              Expires {new Date(banner.expiresAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- Banner Form Modal ----

function BannerFormModal({
  initial,
  onSave,
  onClose,
}: {
  initial: Omit<Banner, 'id'>;
  onSave: (data: Omit<Banner, 'id'>) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<Omit<Banner, 'id'>>(initial);
  function set<K extends keyof typeof form>(key: K, value: typeof form[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl z-10"
        style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-6 py-4 z-10"
          style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2">
            <Megaphone size={16} className="text-[#C9A84C]" />
            <span className="text-white font-semibold text-sm">Banner Editor</span>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Live Preview */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Live Preview</p>
            <BannerPreview banner={form} />
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Title *</label>
              <input
                type="text" value={form.title} onChange={(e) => set('title', e.target.value)}
                placeholder="e.g. NEW YEAR FITNESS OFFER"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Subtitle</label>
              <input
                type="text" value={form.subtitle} onChange={(e) => set('subtitle', e.target.value)}
                placeholder="e.g. Limited Time — January 2025"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Expiry Date</label>
              <input
                type="date" value={form.expiresAt} onChange={(e) => set('expiresAt', e.target.value)}
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Description *</label>
              <textarea
                value={form.description} onChange={(e) => set('description', e.target.value)}
                rows={3} placeholder="Banner description..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">CTA Button Text</label>
              <input
                type="text" value={form.ctaText} onChange={(e) => set('ctaText', e.target.value)}
                placeholder="e.g. Join Now"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">CTA Link</label>
              <input
                type="text" value={form.ctaLink} onChange={(e) => set('ctaLink', e.target.value)}
                placeholder="/join"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
              />
            </div>
          </div>

          {/* Color */}
          <div>
            <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Accent Color</label>
            <div className="flex flex-wrap gap-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => set('bgColor', color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${form.bgColor === color ? 'border-white scale-110' : 'border-transparent'}`}
                  style={{ background: color }}
                />
              ))}
              <input
                type="color" value={form.bgColor}
                onChange={(e) => set('bgColor', e.target.value)}
                className="w-8 h-8 rounded-full border-0 cursor-pointer bg-transparent"
                title="Custom color"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-3 cursor-pointer p-3 bg-white/3 border border-white/6 rounded-xl hover:border-white/12 transition-colors">
              <div
                className={`w-10 h-5 rounded-full relative transition-colors ${form.showPopup ? 'bg-[#C9A84C]' : 'bg-white/10'}`}
                onClick={() => set('showPopup', !form.showPopup)}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.showPopup ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </div>
              <div className="flex items-center gap-1.5">
                <Bell size={14} className={form.showPopup ? 'text-[#C9A84C]' : 'text-white/30'} />
                <span className="text-white/70 text-sm">Show as Popup</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-3 bg-white/3 border border-white/6 rounded-xl hover:border-white/12 transition-colors">
              <div
                className={`w-10 h-5 rounded-full relative transition-colors ${form.isActive ? 'bg-green-500' : 'bg-white/10'}`}
                onClick={() => set('isActive', !form.isActive)}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.isActive ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </div>
              <span className="text-white/70 text-sm">Active</span>
            </label>
          </div>

          {/* Save */}
          <button
            onClick={() => onSave(form)}
            className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold py-3 rounded-xl text-sm transition-colors"
          >
            <Save size={15} />
            Save Banner
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Page ----

export default function OffersPage() {
  const [banners, setBanners] = useState<Banner[]>(INITIAL_BANNERS);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  function toggleActive(id: string) {
    setBanners((prev) => prev.map((b) => b.id === id ? { ...b, isActive: !b.isActive } : b));
  }

  function deleteBanner(id: string) {
    if (confirm('Delete this banner?')) {
      setBanners((prev) => prev.filter((b) => b.id !== id));
    }
  }

  function handleSave(data: Omit<Banner, 'id'>) {
    if (editingBanner) {
      setBanners((prev) => prev.map((b) => b.id === editingBanner.id ? { ...b, ...data } : b));
    } else {
      setBanners((prev) => [...prev, { ...data, id: Date.now().toString() }]);
    }
    setShowForm(false);
    setEditingBanner(null);
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-bold text-2xl">Offers & Banners</h1>
          <p className="text-white/40 text-sm">{banners.filter((b) => b.isActive).length} active banners</p>
        </div>
        <button
          onClick={() => { setEditingBanner(null); setShowForm(true); }}
          className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          <Plus size={15} />
          Create Banner
        </button>
      </div>

      {/* Banners list */}
      <div className="space-y-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: banner.isActive ? '#10B981' : '#EF4444' }}
                />
                <span className="text-white font-medium text-sm">{banner.title}</span>
                {banner.showPopup && (
                  <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full">
                    Popup
                  </span>
                )}
                {banner.expiresAt && (
                  <span className="text-white/30 text-xs flex items-center gap-1">
                    <Calendar size={11} />
                    Exp. {new Date(banner.expiresAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(banner.id)}
                  className={`p-1.5 rounded-lg transition-all ${banner.isActive ? 'text-green-400 bg-green-500/10' : 'text-white/30 bg-white/5'}`}
                >
                  {banner.isActive ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                </button>
                <button
                  onClick={() => { setEditingBanner(banner); setShowForm(true); }}
                  className="p-1.5 text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/15 rounded-lg hover:bg-[#C9A84C]/20 transition-all"
                >
                  <Edit size={14} />
                </button>
                <button
                  onClick={() => deleteBanner(banner.id)}
                  className="p-1.5 text-red-400 bg-red-500/10 border border-red-500/15 rounded-lg hover:bg-red-500/20 transition-all"
                >
                  <Trash2 size={14} />
                </button>
                {banner.ctaLink && (
                  <a
                    href={banner.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-white/40 bg-white/5 border border-white/8 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            {/* Preview */}
            <div className="p-4">
              <BannerPreview banner={banner} />
            </div>
          </div>
        ))}

        {banners.length === 0 && (
          <div
            className="rounded-2xl p-12 text-center"
            style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.08)' }}
          >
            <Megaphone size={32} className="text-white/20 mx-auto mb-3" />
            <p className="text-white/40 text-sm">No banners created yet.</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <BannerFormModal
          initial={editingBanner || EMPTY_BANNER}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditingBanner(null); }}
        />
      )}
    </div>
  );
}
