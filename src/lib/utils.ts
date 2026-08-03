import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type BMIResult } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  }).format(new Date(date));
}

export function calculateBMI(weightKg: number, heightCm: number): BMIResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const roundedBMI = Math.round(bmi * 10) / 10;

  const idealWeightMin = Math.round(18.5 * heightM * heightM);
  const idealWeightMax = Math.round(24.9 * heightM * heightM);

  let category: BMIResult['category'];
  let color: string;
  let suggestion: string;

  if (bmi < 18.5) {
    category = 'Underweight'; color = '#60A5FA';
    suggestion = 'Focus on strength training and increase caloric intake with nutrient-dense foods.';
  } else if (bmi < 25) {
    category = 'Normal weight'; color = '#4ADE80';
    suggestion = 'Great! Maintain your healthy weight with balanced diet and regular exercise.';
  } else if (bmi < 30) {
    category = 'Overweight'; color = '#FACC15';
    suggestion = 'Consider cardio and strength training combined with a calorie-controlled diet.';
  } else if (bmi < 35) {
    category = 'Obese'; color = '#FB923C';
    suggestion = 'Consult our trainers for a personalized plan. Start with low-impact cardio.';
  } else {
    category = 'Severely Obese'; color = '#F87171';
    suggestion = 'Please consult a healthcare professional. Our trainers can assist with safe exercise plans.';
  }

  return { bmi: roundedBMI, category, idealWeightMin, idealWeightMax, color, suggestion };
}

export function generateMemberId(count: number): string {
  return `UF-${String(count + 1).padStart(4, '0')}`;
}

export function generateReceiptNumber(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `UF-${year}${month}-${random}`;
}

export function getDaysUntilExpiry(expiryDate: Date | string): number {
  const expiry = new Date(expiryDate);
  const today = new Date();
  const diffTime = expiry.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getMembershipStatus(expiryDate: Date | string): {
  status: 'active' | 'expiring_soon' | 'expired';
  daysLeft: number;
  label: string;
  color: string;
} {
  const daysLeft = getDaysUntilExpiry(expiryDate);
  if (daysLeft < 0) return { status: 'expired', daysLeft, label: 'Expired', color: '#EF4444' };
  if (daysLeft <= 7) return { status: 'expiring_soon', daysLeft, label: `${daysLeft}d left`, color: '#F59E0B' };
  return { status: 'active', daysLeft, label: 'Active', color: '#10B981' };
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const MEMBERSHIP_PRICES: Record<string, { price: number; duration: number; label: string }> = {
  monthly: { price: 1200, duration: 1, label: 'Monthly' },
  quarterly: { price: 3200, duration: 3, label: 'Quarterly' },
  halfYearly: { price: 5800, duration: 6, label: 'Half Yearly' },
  annual: { price: 10000, duration: 12, label: 'Annual' },
  student: { price: 900, duration: 1, label: 'Student' },
  pt: { price: 8000, duration: 1, label: 'Personal Training' },
};

export const GYM_INFO = {
  name: 'UGRAMM FITNESS',
  tagline: 'RISE. ROAR. RULE.',
  subtitle: 'Where Lions Train',
  address: 'Bidar, Karnataka 585401', // TODO: Fill with exact address
  phone: '+91 70194 97XXX', // TODO: Fill with actual number
  whatsapp: '+917019497XXX', // TODO: Fill with actual number
  email: 'info@ugrammfitness.com',
  instagram: 'https://instagram.com/ugrammfitness/',
  hours: {
    weekdays: '5:00 AM – 10:00 PM',
    sunday: '6:00 AM – 8:00 PM',
  },
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30623.2!2d77.5199!3d17.9224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bceda3c91d0c1a1%3A0x0!2sBidar%2C+Karnataka!5e0!3m2!1sen!2sin!4v1234567890',
  socialLinks: {
    instagram: 'https://instagram.com/ugrammfitness/',
    facebook: 'https://facebook.com/ugrammfitness',
    youtube: 'https://youtube.com/@ugrammfitness',
  },
};
