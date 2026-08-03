'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Quote, Play, ExternalLink, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  photo?: string;
  initials: string;
  rating: number;
  review: string;
  duration: string;
  result?: string;
  source: 'google' | 'direct';
  bgColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar Reddy',
    initials: 'RK',
    rating: 5,
    review: 'UGRAMM FITNESS completely transformed my body and mindset. Coach Arjun designed a personalised program that helped me lose 18 kg in 5 months. The equipment is world-class and the atmosphere pushes you every single day. Best investment I have made for my health.',
    duration: '6 months',
    result: '-18 kg',
    source: 'google',
    bgColor: '#1A3A2A',
  },
  {
    id: '2',
    name: 'Sana Fatima',
    initials: 'SF',
    rating: 5,
    review: 'As a woman, I was initially hesitant to join a gym, but UGRAMM FITNESS made me feel completely safe and welcome. The trainers are respectful and professional. I have lost 12 kg and my confidence has gone through the roof. The ladies batch timing is very convenient.',
    duration: '4 months',
    result: '-12 kg',
    source: 'google',
    bgColor: '#2A1A3A',
  },
  {
    id: '3',
    name: 'Pradeep Patil',
    initials: 'PP',
    rating: 5,
    review: 'I tried three gyms in Bidar before UGRAMM FITNESS. There is simply no comparison. The equipment here is premium, the trainers actually know what they are talking about, and the results speak for themselves. Gained 8 kg of lean muscle in 7 months.',
    duration: '7 months',
    result: '+8 kg muscle',
    source: 'direct',
    bgColor: '#1A2A3A',
  },
  {
    id: '4',
    name: 'Mohammed Irfan',
    initials: 'MI',
    rating: 5,
    review: 'Coach Suresh helped me manage my Type 2 diabetes through structured exercise and nutrition guidance. My HbA1c came down significantly. The trainers here genuinely care about your overall health, not just your physique. Highly recommend to everyone.',
    duration: '8 months',
    result: 'Health improved',
    source: 'google',
    bgColor: '#3A2A1A',
  },
  {
    id: '5',
    name: 'Kavitha Desai',
    initials: 'KD',
    rating: 4,
    review: 'Joined for post-pregnancy weight loss and I am amazed at the results. The trainers understood my limitations and designed a safe, effective program. Lost 15 kg in 6 months while maintaining energy for my baby. The morning batch timings are perfect for working moms.',
    duration: '6 months',
    result: '-15 kg',
    source: 'google',
    bgColor: '#2A3A1A',
  },
  {
    id: '6',
    name: 'Santosh Nayak',
    initials: 'SN',
    rating: 5,
    review: 'As a software engineer spending 10 hours at a desk, my back pain was unbearable. UGRAMM FITNESS trainers diagnosed my posture issues and built a corrective program. Pain is gone in 3 months. The gym is clean, air-conditioned, and the vibe is always motivating.',
    duration: '5 months',
    result: 'Back pain resolved',
    source: 'direct',
    bgColor: '#1A1A3A',
  },
  {
    id: '7',
    name: 'Rekha Kulkarni',
    initials: 'RK',
    rating: 5,
    review: 'I am 52 years old and UGRAMM FITNESS gave me my life back. The trainers never made me feel out of place among younger members. They designed age-appropriate training that improved my strength, flexibility, and mental health. The staff here is like family.',
    duration: '10 months',
    result: 'Energy & strength',
    source: 'google',
    bgColor: '#3A1A2A',
  },
  {
    id: '8',
    name: 'Vinayak Bhosale',
    initials: 'VB',
    rating: 5,
    review: 'Competed in my first state-level powerlifting meet after training at UGRAMM FITNESS for one year. Coach Arjun\'s programming was exceptional — periodisation, recovery, technique. The specialised equipment for strength athletes is the best in the Bidar-Gulbarga region.',
    duration: '12 months',
    result: 'State competitor',
    source: 'direct',
    bgColor: '#1A2A1A',
  },
  {
    id: '9',
    name: 'Aisha Begum',
    initials: 'AB',
    rating: 4,
    review: 'My husband and I joined together and it has been a wonderful journey. The couple discount is a great value. The trainers track our individual progress separately and the app makes it easy to see our workout history. Bidar finally has a gym that matches big city standards.',
    duration: '5 months',
    result: 'Couple fitness',
    source: 'google',
    bgColor: '#2A1A1A',
  },
  {
    id: '10',
    name: 'Deepak Chavan',
    initials: 'DC',
    rating: 5,
    review: 'I was 110 kg when I joined. Today I am 82 kg and honestly feel like a completely different person. The nutrition guidance from the trainers, combined with the structured workouts, gave me results I never expected. Worth every rupee of the membership.',
    duration: '9 months',
    result: '-28 kg',
    source: 'google',
    bgColor: '#1A3A3A',
  },
  {
    id: '11',
    name: 'Shweta Rao',
    initials: 'SR',
    rating: 5,
    review: 'The personal training sessions at UGRAMM FITNESS are exceptional. My trainer tracks every metric — strength, endurance, body composition — and adjusts the program accordingly. The music, the lighting, the equipment... everything creates an environment that makes you want to train hard.',
    duration: '7 months',
    result: 'Total transformation',
    source: 'direct',
    bgColor: '#3A3A1A',
  },
  {
    id: '12',
    name: 'Imran Syed',
    initials: 'IS',
    rating: 5,
    review: 'Moved to Bidar for work and was worried I would not find a good gym. UGRAMM FITNESS exceeded every expectation. Premium equipment, knowledgeable trainers, and a community of serious fitness enthusiasts. The annual membership is the best deal in town. Will not go anywhere else.',
    duration: '11 months',
    result: '+10 kg muscle',
    source: 'google',
    bgColor: '#2A3A3A',
  },
];

const VIDEO_TESTIMONIALS = [
  {
    id: 'v1',
    name: 'Rajesh K. Reddy',
    result: '18 kg Weight Loss',
    duration: '2:34',
    thumbnail: '/testimonials/video-1-thumb.jpg',
  },
  {
    id: 'v2',
    name: 'Kavitha Desai',
    result: 'Post-Pregnancy Transformation',
    duration: '3:12',
    thumbnail: '/testimonials/video-2-thumb.jpg',
  },
  {
    id: 'v3',
    name: 'Deepak Chavan',
    result: '28 kg Weight Loss Journey',
    duration: '4:05',
    thumbnail: '/testimonials/video-3-thumb.jpg',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? 'fill-[#C9A84C] text-[#C9A84C]' : 'fill-gray-600 text-gray-600'}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="relative p-6 rounded-2xl border border-white/8 group hover:border-[#C9A84C]/30 transition-all duration-300"
      style={{ background: 'linear-gradient(135deg, #111111, #0D0D0D)' }}
    >
      {/* Gold accent bar */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent rounded-full" />

      {/* Source badge */}
      {testimonial.source === 'google' && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="text-white/40 text-[9px] font-medium">Google</span>
        </div>
      )}

      {/* Quote icon */}
      <Quote size={24} className="text-[#C9A84C]/20 mb-3" />

      {/* Review text */}
      <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-5">
        {testimonial.review}
      </p>

      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Member info */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: testimonial.bgColor }}
        >
          {testimonial.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{testimonial.name}</p>
          <p className="text-white/40 text-xs">Member · {testimonial.duration}</p>
        </div>
        {testimonial.result && (
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-lg px-2 py-1 text-center shrink-0">
            <p className="text-[#C9A84C] text-xs font-bold">{testimonial.result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'google' | 'direct'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeTab === 'all') return true;
    return t.source === activeTab;
  });

  const googleCount = TESTIMONIALS.filter((t) => t.source === 'google').length;
  const directCount = TESTIMONIALS.filter((t) => t.source === 'direct').length;

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="fill-[#C9A84C] text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">Member Stories</span>
          </div>

          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white tracking-wide mb-6">
            TESTIMONIALS
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Real stories from real members. Their transformation is our greatest achievement.
          </p>

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-6 bg-white/5 border border-[#C9A84C]/20 rounded-2xl px-8 py-5">
            <div className="text-center">
              <div className="font-bebas text-5xl text-[#C9A84C]">4.9</div>
              <div className="flex justify-center mt-1">
                <StarRating rating={5} />
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Excellent</p>
              <p className="text-white/50 text-sm">Based on 100+ reviews</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C9A84C] rounded-full" style={{ width: '92%' }} />
                </div>
                <span className="text-white/50 text-xs">5★ 92%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C9A84C]/60 rounded-full" style={{ width: '6%' }} />
                </div>
                <span className="text-white/50 text-xs">4★ 6%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C9A84C]/30 rounded-full" style={{ width: '2%' }} />
                </div>
                <span className="text-white/50 text-xs">3★ 2%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl">Google Reviews</h2>
                <p className="text-white/50 text-sm">{googleCount} verified reviews</p>
              </div>
            </div>
            <a
              href="https://g.page/r/ugrammfitness/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <ExternalLink size={15} />
              Write a Review
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            {(
              [
                { key: 'all', label: `All Reviews (${TESTIMONIALS.length})` },
                { key: 'google', label: `Google (${googleCount})` },
                { key: 'direct', label: `Direct (${directCount})` },
              ] as { key: 'all' | 'google' | 'direct'; label: string }[]
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#C9A84C] text-black'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide mb-3">
              VIDEO TESTIMONIALS
            </h2>
            <p className="text-white/50">Watch their transformation journeys</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-[#C9A84C]/30 transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: '16/9', background: '#111' }}
              >
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#C9A84C]/20">
                    <Play size={24} className="text-black ml-1" fill="black" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-sm">{video.name}</p>
                  <p className="text-[#C9A84C] text-xs">{video.result}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-6">
            Video testimonials coming soon. Join us and be part of the story.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide mb-4">
            JOIN OUR FAMILY
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Over 100 members have transformed their lives at UGRAMM FITNESS. Your story starts today.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Transformation
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
