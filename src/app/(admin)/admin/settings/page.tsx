'use client';

import { useState } from 'react';
import {
  Save,
  CheckCircle,
  Eye,
  EyeOff,
  Instagram,
  Youtube,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  AlertTriangle,
  Lock,
} from 'lucide-react';

// ---- Types ----

interface GymInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
}

interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
}

interface WaTemplates {
  welcome: string;
  renewal: string;
  birthday: string;
  expiry: string;
}

interface ClosureSettings {
  isClosed: boolean;
  reason: string;
  message: string;
}

// ---- Section Card ----

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        className="flex items-center gap-2 px-6 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        <span className="text-[#C9A84C]">{icon}</span>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function FormInput({
  label, icon, ...props
}: { label: string; icon?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          {...props}
          className={`w-full bg-white/5 border border-white/8 rounded-xl py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors ${icon ? 'pl-10 pr-4' : 'px-4'}`}
        />
      </div>
    </div>
  );
}

function Textarea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">{label}</label>
      <textarea
        {...props}
        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
      />
    </div>
  );
}

// ---- Page ----

export default function SettingsPage() {
  const [gymInfo, setGymInfo] = useState<GymInfo>({
    name: 'UGRAMM FITNESS',
    address: 'Near Old Bus Stand, Bidar, Karnataka 585401',
    phone: '+91 98765 43210',
    whatsapp: '919876543210',
    email: 'info@ugrammfitness.com',
    hoursWeekday: '5:00 AM – 10:00 PM',
    hoursSaturday: '5:00 AM – 10:00 PM',
    hoursSunday: '6:00 AM – 8:00 PM',
  });

  const [social, setSocial] = useState<SocialLinks>({
    instagram: 'https://instagram.com/ugrammfitness',
    facebook: 'https://facebook.com/ugrammfitness',
    youtube: 'https://youtube.com/@ugrammfitness',
  });

  const [waTemplates, setWaTemplates] = useState<WaTemplates>({
    welcome: 'Welcome to UGRAMM FITNESS, {{name}}! 🦁\n\nYour membership is now active. Our team is here to help you achieve your fitness goals.\n\nYour membership details:\n• Type: {{type}}\n• Valid till: {{expiry}}\n\nSee you at the gym!\nUGRAMM FITNESS Team',
    renewal: 'Hello {{name}},\n\nYour UGRAMM FITNESS membership expires on {{expiry}}. Renew now to continue your fitness journey without interruption.\n\nRenewal options available at the gym.\n\nStay strong! 💪\nUGRAMM FITNESS',
    birthday: 'Happy Birthday {{name}}! 🎂🎉\n\nThe entire UGRAMM FITNESS family wishes you a fantastic birthday. May this year bring you health, strength, and success!\n\nWe have a special birthday surprise waiting for you at the gym today!\n\nUGRAMM FITNESS Team',
    expiry: 'Hello {{name}},\n\nYour UGRAMM FITNESS membership expired on {{expiry}}. We miss you! 😢\n\nRejoin today and pick up where you left off. Our trainers are ready to help you get back on track.\n\nContact us to renew.\nUGRAMM FITNESS',
  });

  const [closure, setClosure] = useState<ClosureSettings>({
    isClosed: false,
    reason: '',
    message: 'UGRAMM FITNESS is currently closed. We will reopen soon. We apologise for the inconvenience.',
  });

  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });

  const [saved, setSaved] = useState<string | null>(null);

  function save(section: string) {
    setSaved(section);
    setTimeout(() => setSaved(null), 2500);
  }

  function SaveButton({ section }: { section: string }) {
    const isSaved = saved === section;
    return (
      <button
        onClick={() => save(section)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
          isSaved
            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
            : 'bg-[#C9A84C] hover:bg-[#B8962E] text-black'
        }`}
      >
        {isSaved ? <><CheckCircle size={15} /> Saved!</> : <><Save size={15} /> Save Changes</>}
      </button>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-white font-bold text-2xl">Settings</h1>
        <p className="text-white/40 text-sm">Manage gym information and system preferences</p>
      </div>

      {/* Gym Information */}
      <Section title="Gym Information" icon={<MapPin size={17} />}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <FormInput
                label="Gym Name"
                value={gymInfo.name}
                onChange={(e) => setGymInfo((p) => ({ ...p, name: e.target.value }))}
                placeholder="UGRAMM FITNESS"
              />
            </div>
            <div className="sm:col-span-2">
              <FormInput
                label="Address"
                icon={<MapPin size={15} />}
                value={gymInfo.address}
                onChange={(e) => setGymInfo((p) => ({ ...p, address: e.target.value }))}
                placeholder="Full address"
              />
            </div>
            <FormInput
              label="Phone"
              icon={<Phone size={15} />}
              value={gymInfo.phone}
              onChange={(e) => setGymInfo((p) => ({ ...p, phone: e.target.value }))}
              placeholder="+91 98765 43210"
            />
            <FormInput
              label="WhatsApp Number"
              icon={<MessageCircle size={15} />}
              value={gymInfo.whatsapp}
              onChange={(e) => setGymInfo((p) => ({ ...p, whatsapp: e.target.value }))}
              placeholder="919876543210"
            />
            <FormInput
              label="Email"
              icon={<Mail size={15} />}
              type="email"
              value={gymInfo.email}
              onChange={(e) => setGymInfo((p) => ({ ...p, email: e.target.value }))}
              placeholder="info@ugrammfitness.com"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormInput
              label="Mon – Fri Hours"
              icon={<Clock size={15} />}
              value={gymInfo.hoursWeekday}
              onChange={(e) => setGymInfo((p) => ({ ...p, hoursWeekday: e.target.value }))}
              placeholder="5:00 AM – 10:00 PM"
            />
            <FormInput
              label="Saturday Hours"
              icon={<Clock size={15} />}
              value={gymInfo.hoursSaturday}
              onChange={(e) => setGymInfo((p) => ({ ...p, hoursSaturday: e.target.value }))}
              placeholder="5:00 AM – 10:00 PM"
            />
            <FormInput
              label="Sunday Hours"
              icon={<Clock size={15} />}
              value={gymInfo.hoursSunday}
              onChange={(e) => setGymInfo((p) => ({ ...p, hoursSunday: e.target.value }))}
              placeholder="6:00 AM – 8:00 PM"
            />
          </div>
          <div className="flex justify-end">
            <SaveButton section="gym" />
          </div>
        </div>
      </Section>

      {/* Social Links */}
      <Section title="Social Media Links" icon={<Instagram size={17} />}>
        <div className="space-y-4">
          <FormInput
            label="Instagram"
            icon={<Instagram size={15} />}
            type="url"
            value={social.instagram}
            onChange={(e) => setSocial((p) => ({ ...p, instagram: e.target.value }))}
            placeholder="https://instagram.com/yourhandle"
          />
          <FormInput
            label="Facebook"
            icon={<Facebook size={15} />}
            type="url"
            value={social.facebook}
            onChange={(e) => setSocial((p) => ({ ...p, facebook: e.target.value }))}
            placeholder="https://facebook.com/yourpage"
          />
          <FormInput
            label="YouTube"
            icon={<Youtube size={15} />}
            type="url"
            value={social.youtube}
            onChange={(e) => setSocial((p) => ({ ...p, youtube: e.target.value }))}
            placeholder="https://youtube.com/@yourchannel"
          />
          <div className="flex justify-end">
            <SaveButton section="social" />
          </div>
        </div>
      </Section>

      {/* WhatsApp Templates */}
      <Section title="WhatsApp Message Templates" icon={<MessageCircle size={17} />}>
        <div className="space-y-4">
          <p className="text-white/30 text-xs">
            Use <code className="bg-white/5 px-1 rounded text-[#C9A84C]">{'{{name}}'}</code>,{' '}
            <code className="bg-white/5 px-1 rounded text-[#C9A84C]">{'{{type}}'}</code>,{' '}
            <code className="bg-white/5 px-1 rounded text-[#C9A84C]">{'{{expiry}}'}</code> as placeholders.
          </p>
          <Textarea
            label="Welcome Message"
            value={waTemplates.welcome}
            onChange={(e) => setWaTemplates((p) => ({ ...p, welcome: e.target.value }))}
            rows={6}
          />
          <Textarea
            label="Renewal Reminder"
            value={waTemplates.renewal}
            onChange={(e) => setWaTemplates((p) => ({ ...p, renewal: e.target.value }))}
            rows={5}
          />
          <Textarea
            label="Birthday Message"
            value={waTemplates.birthday}
            onChange={(e) => setWaTemplates((p) => ({ ...p, birthday: e.target.value }))}
            rows={5}
          />
          <Textarea
            label="Post-Expiry Message"
            value={waTemplates.expiry}
            onChange={(e) => setWaTemplates((p) => ({ ...p, expiry: e.target.value }))}
            rows={5}
          />
          <div className="flex justify-end">
            <SaveButton section="templates" />
          </div>
        </div>
      </Section>

      {/* Gym Closed Toggle */}
      <Section title="Gym Closure Settings" icon={<AlertTriangle size={17} />}>
        <div className="space-y-4">
          <div
            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
              closure.isClosed
                ? 'bg-red-500/8 border-red-500/20'
                : 'bg-white/3 border-white/8'
            }`}
          >
            <div>
              <p className="text-white font-medium text-sm">Gym Closed Mode</p>
              <p className="text-white/40 text-xs mt-0.5">
                {closure.isClosed ? 'Website will show closure banner' : 'Gym is open for members'}
              </p>
            </div>
            <button
              onClick={() => setClosure((p) => ({ ...p, isClosed: !p.isClosed }))}
              className={`relative w-12 h-6 rounded-full transition-colors ${closure.isClosed ? 'bg-red-500' : 'bg-white/15'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${closure.isClosed ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {closure.isClosed && (
            <>
              <FormInput
                label="Closure Reason"
                value={closure.reason}
                onChange={(e) => setClosure((p) => ({ ...p, reason: e.target.value }))}
                placeholder="e.g. Public holiday, maintenance, etc."
              />
              <Textarea
                label="Closure Message (shown on website)"
                value={closure.message}
                onChange={(e) => setClosure((p) => ({ ...p, message: e.target.value }))}
                rows={3}
              />
            </>
          )}
          <div className="flex justify-end">
            <SaveButton section="closure" />
          </div>
        </div>
      </Section>

      {/* Change Password */}
      <Section title="Change Admin Password" icon={<Lock size={17} />}>
        <div className="space-y-4">
          {(
            [
              { key: 'current', label: 'Current Password' },
              { key: 'new', label: 'New Password' },
              { key: 'confirm', label: 'Confirm New Password' },
            ] as { key: keyof typeof passwords; label: string }[]
          ).map(({ key, label }) => (
            <div key={key}>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">{label}</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input
                  type={showPasswords[key] ? 'text' : 'password'}
                  value={passwords[key]}
                  onChange={(e) => setPasswords((p) => ({ ...p, [key]: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/8 rounded-xl pl-10 pr-10 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords((p) => ({ ...p, [key]: !p[key] }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPasswords[key] ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
          ))}

          {passwords.new && passwords.confirm && passwords.new !== passwords.confirm && (
            <p className="text-red-400 text-xs flex items-center gap-1.5">
              <AlertTriangle size={13} />
              Passwords do not match
            </p>
          )}

          <div className="flex justify-end">
            <button
              onClick={() => {
                if (passwords.new !== passwords.confirm) return;
                save('password');
                setPasswords({ current: '', new: '', confirm: '' });
              }}
              disabled={!passwords.current || !passwords.new || !passwords.confirm || passwords.new !== passwords.confirm}
              className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] disabled:opacity-30 disabled:cursor-not-allowed text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
            >
              {saved === 'password' ? <><CheckCircle size={15} /> Password Updated!</> : <><Save size={15} /> Update Password</>}
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
