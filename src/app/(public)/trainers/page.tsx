'use client';
import { motion } from 'framer-motion';
import { Instagram, Award, Star, Dumbbell, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';

const trainers = [
  {
    id: 1,
    name: 'Ravi Kumar',
    title: 'Head Trainer & Co-Founder',
    experience: 8,
    specializations: ['Strength & Conditioning', 'Powerlifting', 'Body Transformation'],
    certifications: ['ISSA Certified Personal Trainer', 'Sports Nutrition Certificate', 'CrossFit Level 1'],
    bio: 'Ravi is the backbone of UGRAMM FITNESS. With 8+ years of training experience and multiple national-level powerlifting titles, he brings elite-level expertise to every training session.',
    instagram: 'https://instagram.com/ugrammfitness/',
    gradient: 'from-orange-900/40 to-zinc-900',
    initials: 'RK',
    membersTransformed: 200,
    rating: 4.9,
    accentColor: '#F97316',
  },
  {
    id: 2,
    name: 'Mohammed Farhan',
    title: 'Fitness Trainer & Nutritionist',
    experience: 5,
    specializations: ['Weight Loss', 'Cardio Conditioning', 'Indian Nutrition Planning'],
    certifications: ['ACE Certified Personal Trainer', 'Precision Nutrition Level 1'],
    bio: 'Farhan specializes in sustainable weight loss through smart nutrition and progressive cardio training. He has helped 100+ members achieve their weight loss goals using evidence-based methods.',
    instagram: 'https://instagram.com/ugrammfitness/',
    gradient: 'from-blue-900/40 to-zinc-900',
    initials: 'MF',
    membersTransformed: 100,
    rating: 4.8,
    accentColor: '#60A5FA',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    title: "Women's Fitness Specialist",
    experience: 4,
    specializations: ["Women's Fitness", 'Yoga & Flexibility', 'Post-Natal Fitness'],
    certifications: ['RYT-200 Certified Yoga Instructor', 'NSCA-CPT', 'Pre/Post Natal Fitness'],
    bio: "Priya creates safe, effective programs tailored specifically for women's health and fitness goals. Her holistic approach combines strength, flexibility, and mindfulness.",
    instagram: 'https://instagram.com/ugrammfitness/',
    gradient: 'from-pink-900/30 to-zinc-900',
    initials: 'PS',
    membersTransformed: 80,
    rating: 5.0,
    accentColor: '#F472B6',
  },
  {
    id: 4,
    name: 'Dr. Anil Patil',
    title: 'Sports Nutritionist',
    experience: 6,
    specializations: ['Sports Nutrition', 'Diet Planning', 'Supplementation'],
    certifications: ['MSc Sports Nutrition', 'Certified Sports Nutritionist', 'Diabetes Nutrition Specialist'],
    bio: 'Dr. Anil brings academic rigor to practical nutrition. He designs individualized diet plans based on body composition analysis, lifestyle, and performance goals.',
    instagram: 'https://instagram.com/ugrammfitness/',
    gradient: 'from-green-900/30 to-zinc-900',
    initials: 'AP',
    membersTransformed: 150,
    rating: 4.9,
    accentColor: '#4ADE80',
  },
];

const stats = [
  { value: '4', label: 'Expert Trainers' },
  { value: '23+', label: 'Years Combined Experience' },
  { value: '530+', label: 'Members Transformed' },
  { value: '4.9', label: 'Average Rating' },
];

const philosophyCards = [
  {
    icon: '🔬',
    title: 'Science-Based',
    desc: 'Every program is grounded in exercise science, biomechanics, and evidence-based nutrition principles — no fads, just results.',
  },
  {
    icon: '📈',
    title: 'Progressive Overload',
    desc: 'We systematically increase training stimulus over time to ensure continuous adaptation, strength gains, and muscle development.',
  },
  {
    icon: '🌿',
    title: 'Holistic Approach',
    desc: 'True fitness goes beyond the gym. We address sleep, stress, nutrition, and lifestyle to create lasting, sustainable transformation.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A84C] font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            The People Behind Your Success
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl tracking-wider mb-6 font-black"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            MEET OUR{' '}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              TRAINERS
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            Expert Coaches. Real Results.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y-0 md:divide-x md:divide-white/10">
            {stats.map(s => (
              <div key={s.label} className="text-center py-2">
                <p className="text-4xl font-black text-[#C9A84C] mb-1"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                  {s.value}
                </p>
                <p className="text-white/50 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trainer Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {trainers.map(trainer => (
            <motion.div
              key={trainer.id}
              variants={item}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Profile photo area */}
                <div className={`sm:w-48 min-h-48 bg-gradient-to-br ${trainer.gradient} flex-shrink-0 flex items-center justify-center relative`}>
                  <span
                    className="text-5xl font-black text-white/80"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
                  >
                    {trainer.initials}
                  </span>
                  {/* Experience badge */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold" style={{ color: trainer.accentColor }}>
                      {trainer.experience} YRS
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white"
                          style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                          {trainer.name}
                        </h3>
                        <p className="text-sm font-medium" style={{ color: trainer.accentColor }}>
                          {trainer.title}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                        <span className="text-white font-bold text-sm">{trainer.rating}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-white/60 text-sm leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                      {trainer.bio}
                    </p>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.specializations.map(s => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 rounded-full border font-medium"
                          style={{ borderColor: `${trainer.accentColor}40`, color: trainer.accentColor, backgroundColor: `${trainer.accentColor}10` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-1 mb-4">
                      {trainer.certifications.map(cert => (
                        <div key={cert} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                          <span className="text-white/50 text-xs"
                            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">{trainer.membersTransformed}+ Transformed</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={trainer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-white/10 rounded-full hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300 text-white/50"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href="https://wa.me/917019497000?text=Hi! I want to book a personal training session."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-4 py-2 rounded-full text-xs tracking-wider hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
                        style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
                      >
                        Book Session
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Training Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
            OUR TRAINING{' '}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              PHILOSOPHY
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-[#C9A84C]/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-[#C9A84C]"
                style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                {card.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#C9A84C]/10 to-[#D4AF37]/10 border border-[#C9A84C]/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-5xl font-black tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
            TRAIN WITH A <span className="text-[#C9A84C]">PRO</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
            Get a personalized training program built around your goals, schedule, and fitness level.
          </p>
          <Link
            href="/personal-training"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-300 text-lg tracking-widest"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            <Dumbbell className="w-5 h-5" />
            EXPLORE PERSONAL TRAINING
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
