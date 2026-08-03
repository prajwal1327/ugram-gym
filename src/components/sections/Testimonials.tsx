'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  initial: string;
  rating: number;
  text: string;
  source: 'Google Review' | 'Member';
  detail: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    initial: 'R',
    rating: 5,
    text: 'Best gym in Bidar, no doubt. The equipment is top-class — better than gyms I have seen in Hyderabad. Trainers are very knowledgeable and dedicated. Lost 12kg in 4 months!',
    source: 'Google Review',
    detail: '4 months member',
    color: '#C9A84C',
  },
  {
    name: 'Firdaus Begum',
    initial: 'F',
    rating: 5,
    text: 'As a woman I was comfortable from day one. The trainers respect everyone and the facility is very clean. I went from 78kg to 62kg in 5 months. Thank you UGRAMM FITNESS!',
    source: 'Google Review',
    detail: '5 months member',
    color: '#E8D5A3',
  },
  {
    name: 'Santosh Reddy',
    initial: 'S',
    rating: 5,
    text: 'Joined for personal training and it has been life changing. My trainer designs workouts perfectly for my goals. The gym ambience is premium — feels motivating every single day.',
    source: 'Member',
    detail: 'Personal Training client',
    color: '#C9A84C',
  },
  {
    name: 'Aisha Sultana',
    initial: 'A',
    rating: 5,
    text: 'I tried 3 gyms in Bidar before UGRAMM. This is on a completely different level. Machines are always clean and well-maintained. Staff is helpful. Highly recommended!',
    source: 'Google Review',
    detail: '6 months member',
    color: '#D4AF37',
  },
  {
    name: 'Kiran Patil',
    initial: 'K',
    rating: 5,
    text: 'The personal training programme is incredible. Got a fully customised diet plan, weekly check-ins, and my trainer is available on WhatsApp too. Real results, real guidance.',
    source: 'Member',
    detail: 'Annual member',
    color: '#E8D5A3',
  },
  {
    name: 'Mohammed Imran',
    initial: 'M',
    rating: 5,
    text: 'I have been going to gyms for 10 years and UGRAMM is hands down the best I have ever joined. The strength zone alone has over 200 pieces of equipment. World-class!',
    source: 'Google Review',
    detail: '1 year member',
    color: '#C9A84C',
  },
  {
    name: 'Deepa Nair',
    initial: 'D',
    rating: 5,
    text: 'Lost 20kg in 6 months with personal training here. My trainer tracked every measurement, every week. The nutrition plan was spot on. My family could not recognise me!',
    source: 'Google Review',
    detail: '6 months member',
    color: '#E8D5A3',
  },
  {
    name: 'Praveen Yadav',
    initial: 'P',
    rating: 4,
    text: 'Great gym with great trainers. The cardio section has all the latest machines. Locker rooms are very clean. Only suggestion is to add more parking. Otherwise 10/10!',
    source: 'Google Review',
    detail: '3 months member',
    color: '#C9A84C',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-white/20'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let animId: number;
    const speed = 0.5;

    const animate = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  // Duplicate for seamless scroll
  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 px-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
            <span className="text-xs font-[family-name:var(--font-montserrat)] font-bold tracking-[0.35em] text-[#C9A84C]/70 uppercase">
              Testimonials
            </span>
            <div className="w-12 h-[1px] bg-[#C9A84C]/50" />
          </div>
          <h2
            className="font-[family-name:var(--font-bebas)] leading-none mb-4"
            style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
          >
            <span className="text-white">WHAT OUR </span>
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              LIONS SAY
            </span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <span className="font-[family-name:var(--font-bebas)] text-[#C9A84C] text-3xl leading-none">
              4.9
            </span>
            <span className="text-white/40 text-sm font-[family-name:var(--font-montserrat)]">
              / 5.0
            </span>
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-[family-name:var(--font-montserrat)] font-bold px-3 py-1 rounded-full">
              100+ Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-end gap-3 mb-6 px-6 lg:px-12 max-w-7xl mx-auto">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrolling carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', cursor: 'grab' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {allTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.06, 0.5), duration: 0.6 }}
              className="shrink-0 w-[320px] bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/20 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#C9A84C]/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={t.rating} />
                <span
                  className={`text-[10px] font-[family-name:var(--font-montserrat)] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                    t.source === 'Google Review'
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                      : 'bg-[#C9A84C]/10 border-[#C9A84C]/20 text-[#C9A84C]'
                  }`}
                >
                  {t.source}
                </span>
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm font-[family-name:var(--font-montserrat)] leading-relaxed mb-5 line-clamp-4">
                &quot;{t.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-lg text-black shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #8B6914)` }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-[family-name:var(--font-montserrat)] font-bold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#C9A84C]/50 text-[11px] font-[family-name:var(--font-montserrat)]">
                    {t.detail}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
