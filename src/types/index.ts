// Member types
export type MembershipType = 'monthly' | 'quarterly' | 'halfYearly' | 'annual' | 'corporate' | 'student' | 'pt';
export type MemberStatus = 'active' | 'expired' | 'pending' | 'suspended';
export type Gender = 'male' | 'female' | 'other';
export type GoalType = 'weight_loss' | 'muscle_gain' | 'maintenance' | 'athletic_performance' | 'rehabilitation';
export type PaymentStatus = 'paid' | 'pending' | 'partial' | 'advance';
export type PaymentMethod = 'cash' | 'upi' | 'card' | 'bank_transfer' | 'cheque';

export interface Member {
  id: string;
  memberId: string; // UF-001 format
  photo?: string;
  fullName: string;
  phone: string;
  email?: string;
  dob?: Date;
  gender: Gender;
  emergencyContact?: string;
  emergencyPhone?: string;
  address?: string;
  occupation?: string;
  joiningDate: Date;
  membershipType: MembershipType;
  expiryDate: Date;
  status: MemberStatus;
  trainerId?: string;
  batch?: string; // Morning/Evening
  height?: number; // cm
  weight?: number; // kg
  bmi?: number;
  bodyFat?: number;
  muscleMass?: number;
  medicalIssues?: MedicalIssues;
  currentGoal?: GoalType;
  beforePhoto?: string;
  afterPhoto?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MedicalIssues {
  bloodPressure: boolean;
  diabetes: boolean;
  backPain: boolean;
  kneePain: boolean;
  heartIssues: boolean;
  allergies?: string;
  other?: string;
}

export interface Payment {
  id: string;
  memberId: string;
  memberName: string;
  amount: number;
  amountPaid: number;
  amountDue: number;
  paymentDate: Date;
  dueDate?: Date;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  membershipType: MembershipType;
  membershipPeriod: { start: Date; end: Date };
  receiptNumber: string;
  gstAmount?: number;
  notes?: string;
  createdAt: Date;
}

export interface Trainer {
  id: string;
  photo?: string;
  fullName: string;
  phone: string;
  email?: string;
  specialization: string[];
  experience: number; // years
  certifications: string[];
  bio: string;
  isActive: boolean;
  joinedDate: Date;
  instagram?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  type: MembershipType;
  duration: number; // months
  price: number;
  originalPrice?: number;
  features: string[];
  isPopular?: boolean;
  isActive: boolean;
  badge?: string; // 'Best Value', 'Most Popular', etc.
}

export interface Testimonial {
  id: string;
  memberName: string;
  memberPhoto?: string;
  rating: number;
  review: string;
  transformation?: string;
  weightLost?: number;
  duration?: string;
  isApproved: boolean;
  source: 'google' | 'direct' | 'instagram';
  createdAt: Date;
}

export interface GalleryItem {
  id: string;
  url: string;
  thumbnailUrl?: string;
  type: 'photo' | 'video' | 'reel';
  caption?: string;
  category: 'gym' | 'transformation' | 'event' | 'members' | 'equipment';
  isPublished: boolean;
  sortOrder: number;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: 'nutrition' | 'workout' | 'lifestyle' | 'news' | 'tips';
  tags: string[];
  author: string;
  isPublished: boolean;
  publishedAt?: Date;
  readTime: number; // minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  bgColor?: string;
  image?: string;
  expiresAt?: Date;
  isActive: boolean;
  showPopup: boolean;
  createdAt: Date;
}

export interface Enquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
  interestedIn: 'membership' | 'pt' | 'general';
  source: 'website' | 'whatsapp' | 'instagram' | 'walk_in';
  status: 'new' | 'contacted' | 'converted' | 'not_interested';
  createdAt: Date;
}

export interface AttendanceRecord {
  id: string;
  memberId: string;
  memberName: string;
  date: Date;
  checkIn: Date;
  checkOut?: Date;
  batch?: string;
}

export interface DashboardStats {
  totalMembers: number;
  activeMembers: number;
  expiredMembers: number;
  todayJoining: number;
  todayBirthdays: Member[];
  renewalsDue7Days: number;
  renewalsDue3Days: number;
  expiredToday: number;
  pendingPayments: number;
  monthlyRevenue: number;
  totalRevenue: number;
  ptMembers: number;
  todayAttendance: number;
}

export interface BMIResult {
  bmi: number;
  category: 'Underweight' | 'Normal weight' | 'Overweight' | 'Obese' | 'Severely Obese';
  idealWeightMin: number;
  idealWeightMax: number;
  color: string;
  suggestion: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
