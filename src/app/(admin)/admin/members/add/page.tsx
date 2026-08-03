'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, Save, Plus, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// ---- Types ----

interface FormData {
  // Personal
  photo: File | null;
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  emergencyName: string;
  emergencyPhone: string;
  address: string;
  occupation: string;
  // Membership
  membershipType: string;
  startDate: string;
  batch: 'Morning' | 'Evening';
  trainerId: string;
  // Body Metrics
  height: string;
  weight: string;
  bodyFat: string;
  muscleMass: string;
  // Medical
  bloodPressure: boolean;
  diabetes: boolean;
  backPain: boolean;
  kneePain: boolean;
  heartIssues: boolean;
  allergies: string;
  medicalNotes: string;
  // Goals
  currentGoal: string;
  notes: string;
}

const INITIAL: FormData = {
  photo: null, fullName: '', phone: '', email: '', dob: '', gender: 'male',
  emergencyName: '', emergencyPhone: '', address: '', occupation: '',
  membershipType: 'monthly', startDate: '', batch: 'Morning', trainerId: '',
  height: '', weight: '', bodyFat: '', muscleMass: '',
  bloodPressure: false, diabetes: false, backPain: false, kneePain: false, heartIssues: false,
  allergies: '', medicalNotes: '',
  currentGoal: 'weight_loss', notes: '',
};

const MEMBERSHIP_TYPES = [
  { value: 'monthly', label: 'Monthly — ₹1,200' },
  { value: 'quarterly', label: 'Quarterly — ₹3,200' },
  { value: 'halfYearly', label: 'Half-Yearly — ₹5,800' },
  { value: 'annual', label: 'Annual — ₹9,999' },
  { value: 'corporate', label: 'Corporate — ₹8,500' },
  { value: 'student', label: 'Student — ₹900' },
  { value: 'pt', label: 'PT Package — ₹3,500/month' },
];

const TRAINERS = [
  { value: '', label: 'Assign Later' },
  { value: 'arjun', label: 'Arjun Kumar' },
  { value: 'suresh', label: 'Suresh Naik' },
  { value: 'priya', label: 'Priya Reddy' },
];

const GOALS = [
  { value: 'weight_loss', label: 'Weight Loss' },
  { value: 'muscle_gain', label: 'Muscle Gain' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'athletic_performance', label: 'Athletic Performance' },
  { value: 'rehabilitation', label: 'Rehabilitation' },
];

// ---- Form Field Components ----

function FormInput({
  label, required, ...props
}: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors"
      />
    </div>
  );
}

function SectionCard({ title, children, number }: { title: string; children: React.ReactNode; number: number }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        className="flex items-center gap-3 px-6 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center">
          <span className="text-black text-xs font-bold">{number}</span>
        </div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// ---- Page ----

export default function AddMemberPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const bmi =
    form.height && form.weight
      ? (Number(form.weight) / ((Number(form.height) / 100) ** 2)).toFixed(1)
      : '';

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      set('photo', file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e: React.FormEvent, saveAndPay = false) {
    e.preventDefault();
    setError('');
    if (!form.fullName.trim()) { setError('Full name is required.'); return; }
    if (!form.phone.trim()) { setError('Phone number is required.'); return; }
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1200)); // Simulate API call
    setSaving(false);
    setSuccess(true);
    setTimeout(() => {
      if (saveAndPay) router.push('/admin/payments');
      else router.push('/admin/members');
    }, 1500);
  }

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-400" />
          </div>
          <h2 className="text-white font-bold text-xl mb-2">Member Added!</h2>
          <p className="text-white/50 text-sm">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/members"
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl text-white/50 hover:text-white transition-all"
        >
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-white font-bold text-2xl">Add New Member</h1>
          <p className="text-white/40 text-sm">Complete all required fields</p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Section 1: Personal Information */}
        <SectionCard title="Personal Information" number={1}>
          <div className="space-y-5">
            {/* Photo upload */}
            <div className="flex items-center gap-5">
              <div
                className="w-20 h-20 rounded-2xl border-2 border-dashed border-white/15 flex items-center justify-center overflow-hidden shrink-0 cursor-pointer hover:border-[#C9A84C]/40 transition-colors"
                onClick={() => document.getElementById('photo-upload')?.click()}
              >
                {photoPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <Upload size={20} className="text-white/20 mx-auto mb-1" />
                    <span className="text-white/20 text-[10px]">Photo</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <div>
                <p className="text-white text-sm font-medium">Member Photo</p>
                <p className="text-white/30 text-xs mt-1">JPG, PNG up to 2MB</p>
                <button
                  type="button"
                  onClick={() => document.getElementById('photo-upload')?.click()}
                  className="mt-2 flex items-center gap-1.5 text-[#C9A84C] text-xs hover:underline"
                >
                  <Upload size={12} />
                  Upload Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <FormInput
                  label="Full Name" required
                  value={form.fullName} onChange={(e) => set('fullName', e.target.value)}
                  placeholder="e.g. Rajesh Kumar Reddy"
                />
              </div>
              <FormInput
                label="Phone Number" required type="tel"
                value={form.phone} onChange={(e) => set('phone', e.target.value)}
                placeholder="9876543210"
              />
              <FormInput
                label="Email Address" type="email"
                value={form.email} onChange={(e) => set('email', e.target.value)}
                placeholder="member@email.com"
              />
              <FormInput
                label="Date of Birth" type="date"
                value={form.dob} onChange={(e) => set('dob', e.target.value)}
              />
              <div>
                <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                  Gender
                </label>
                <div className="flex gap-3">
                  {(['male', 'female', 'other'] as const).map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={form.gender === g}
                        onChange={() => set('gender', g)}
                        className="accent-[#C9A84C]"
                      />
                      <span className="text-white/60 text-sm capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>
              <FormInput
                label="Emergency Contact Name"
                value={form.emergencyName} onChange={(e) => set('emergencyName', e.target.value)}
                placeholder="Contact person name"
              />
              <FormInput
                label="Emergency Contact Phone" type="tel"
                value={form.emergencyPhone} onChange={(e) => set('emergencyPhone', e.target.value)}
                placeholder="9876543210"
              />
              <div className="sm:col-span-2">
                <FormInput
                  label="Address"
                  value={form.address} onChange={(e) => set('address', e.target.value)}
                  placeholder="Full address"
                />
              </div>
              <FormInput
                label="Occupation"
                value={form.occupation} onChange={(e) => set('occupation', e.target.value)}
                placeholder="e.g. Software Engineer"
              />
            </div>
          </div>
        </SectionCard>

        {/* Section 2: Membership Details */}
        <SectionCard title="Membership Details" number={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                Membership Type <span className="text-red-400">*</span>
              </label>
              <select
                value={form.membershipType}
                onChange={(e) => set('membershipType', e.target.value)}
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors appearance-none cursor-pointer"
              >
                {MEMBERSHIP_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <FormInput
              label="Start Date" required type="date"
              value={form.startDate} onChange={(e) => set('startDate', e.target.value)}
            />
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                Batch
              </label>
              <div className="flex gap-3">
                {(['Morning', 'Evening'] as const).map((b) => (
                  <label key={b} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio" name="batch" value={b}
                      checked={form.batch === b} onChange={() => set('batch', b)}
                      className="accent-[#C9A84C]"
                    />
                    <span className="text-white/60 text-sm">{b}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                Assign Trainer
              </label>
              <select
                value={form.trainerId}
                onChange={(e) => set('trainerId', e.target.value)}
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C]/40 transition-colors appearance-none cursor-pointer"
              >
                {TRAINERS.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </SectionCard>

        {/* Section 3: Body Metrics */}
        <SectionCard title="Body Metrics" number={3}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <FormInput
              label="Height (cm)" type="number"
              value={form.height} onChange={(e) => set('height', e.target.value)}
              placeholder="e.g. 175"
            />
            <FormInput
              label="Weight (kg)" type="number"
              value={form.weight} onChange={(e) => set('weight', e.target.value)}
              placeholder="e.g. 80"
            />
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                BMI (auto)
              </label>
              <div className="w-full bg-white/3 border border-white/5 rounded-xl px-4 py-2.5 text-white/50 text-sm">
                {bmi || '—'}
              </div>
            </div>
            <FormInput
              label="Body Fat %" type="number"
              value={form.bodyFat} onChange={(e) => set('bodyFat', e.target.value)}
              placeholder="e.g. 22"
            />
            <FormInput
              label="Muscle Mass %" type="number"
              value={form.muscleMass} onChange={(e) => set('muscleMass', e.target.value)}
              placeholder="e.g. 35"
            />
          </div>
        </SectionCard>

        {/* Section 4: Medical History */}
        <SectionCard title="Medical History" number={4}>
          <div className="space-y-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(
                [
                  { key: 'bloodPressure', label: 'Blood Pressure' },
                  { key: 'diabetes', label: 'Diabetes' },
                  { key: 'backPain', label: 'Back Pain' },
                  { key: 'kneePain', label: 'Knee Pain' },
                  { key: 'heartIssues', label: 'Heart Issues' },
                ] as { key: keyof FormData; label: string }[]
              ).map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2.5 cursor-pointer p-3 bg-white/3 border border-white/6 rounded-xl hover:border-white/15 transition-colors">
                  <input
                    type="checkbox"
                    checked={form[key] as boolean}
                    onChange={(e) => set(key, e.target.checked as FormData[typeof key])}
                    className="accent-[#C9A84C] w-4 h-4"
                  />
                  <span className="text-white/70 text-sm">{label}</span>
                </label>
              ))}
            </div>
            <FormInput
              label="Allergies"
              value={form.allergies} onChange={(e) => set('allergies', e.target.value)}
              placeholder="List any known allergies"
            />
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                Medical Notes
              </label>
              <textarea
                value={form.medicalNotes}
                onChange={(e) => set('medicalNotes', e.target.value)}
                rows={3}
                placeholder="Any additional medical information..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
              />
            </div>
          </div>
        </SectionCard>

        {/* Section 5: Goals */}
        <SectionCard title="Goals & Notes" number={5}>
          <div className="space-y-4">
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-2">
                Primary Goal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {GOALS.map((g) => (
                  <label
                    key={g.value}
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                      form.currentGoal === g.value
                        ? 'bg-[#C9A84C]/10 border-[#C9A84C]/30 text-[#C9A84C]'
                        : 'bg-white/3 border-white/8 text-white/60 hover:border-white/15'
                    }`}
                  >
                    <input
                      type="radio" name="goal" value={g.value}
                      checked={form.currentGoal === g.value}
                      onChange={() => set('currentGoal', g.value)}
                      className="hidden"
                    />
                    <span className="text-sm">{g.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                Additional Notes
              </label>
              <textarea
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                rows={3}
                placeholder="Any additional notes about this member..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-colors resize-none"
              />
            </div>
          </div>
        </SectionCard>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pb-6">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all"
          >
            <Save size={16} />
            {saving ? 'Saving...' : 'Save Member'}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={(e) => handleSubmit(e, true)}
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all"
          >
            <Plus size={16} />
            Save &amp; Add Payment
          </button>
        </div>
      </form>
    </div>
  );
}
