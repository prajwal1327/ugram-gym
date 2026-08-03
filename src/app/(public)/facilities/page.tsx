'use client';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Zap, Target, Droplets, Shield, Apple, Wifi, Clock, Users, CheckCircle, Car, Music, Camera } from 'lucide-react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

type Facility = {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  color: string;
};

const facilities: Facility[] = [
  {
    id: 'strength',
    name: 'Strength Zone',
    icon: Dumbbell,
    tagline: '200+ Equipment Pieces',
    description:
      'Our premium strength zone features free weights from 1kg to 50kg, 8 professional power racks, 4 Smith machines, cable crossover stations, dedicated bench press area, and isolation machines for every muscle group.',
    features: [
      'Free Weights: 1kg–50kg Dumbbells',
      '8 Olympic Power Racks',
      '4 Smith Machines',
      'Cable Crossover Station',
      '6 Bench Press Stations',
      'Leg Press & Hack Squat',
      'Preacher Curl & Calf Raise',
      'Plate-loaded Isolation Machines',
    ],
    gradient: 'from-orange-900/20 to-zinc-950',
    color: '#F97316',
  },
  {
    id: 'cardio',
    name: 'Cardio Arena',
    icon: Activity,
    tagline: '30+ Cardio Machines',
    description:
      'State-of-the-art cardio floor with commercial-grade machines, individual entertainment screens, and heart rate monitoring. Ideal for fat burning, endurance training, and warm-up sessions.',
    features: [
      '10 Commercial Treadmills',
      '6 Cross Trainers/Ellipticals',
      '4 Stationary Bikes',
      '2 Rowing Machines',
      '1 StairMaster',
      'Individual TV/Music Screens',
      'Heart Rate Monitoring',
      'Air Conditioning Throughout',
    ],
    gradient: 'from-blue-900/20 to-zinc-950',
    color: '#60A5FA',
  },
  {
    id: 'crossfit',
    name: 'CrossFit Box',
    icon: Zap,
    tagline: 'Competition-Grade Setup',
    description:
      'A dedicated CrossFit space with a full 8-station rig, Olympic barbells, bumper plates, and all the equipment needed for WODs, functional movements, and competitive CrossFit training.',
    features: [
      '8-Station CrossFit Rig',
      '10 Olympic Barbells',
      'Bumper Plates (full set)',
      'Pull-up & Dip Bars',
      'Wall Balls (all weights)',
      'Jump Ropes',
      'Gymnastics Rings',
      'Box Jumps (20"/24"/30")',
    ],
    gradient: 'from-yellow-900/20 to-zinc-950',
    color: '#FACC15',
  },
  {
    id: 'functional',
    name: 'Functional Training',
    icon: Target,
    tagline: 'Athletic Performance Zone',
    description:
      'Designed for sport-specific training, injury prevention, and athletic performance. Features the latest functional training equipment used by professional athletes.',
    features: [
      'Battle Ropes (15m & 20m)',
      'TRX Suspension Systems',
      'Kettlebells (4kg–40kg)',
      'Medicine Balls',
      'Agility Ladder & Cones',
      'Prowler/Sled Push',
      'Bulgarian Bags',
      'Resistance Bands (all levels)',
    ],
    gradient: 'from-purple-900/20 to-zinc-950',
    color: '#A78BFA',
  },
  {
    id: 'steam',
    name: 'Steam Room',
    icon: Droplets,
    tagline: 'Post-Workout Recovery',
    description:
      'Recover faster and feel rejuvenated in our modern steam room. Regular use improves circulation, reduces muscle soreness, and promotes relaxation after intense training sessions.',
    features: [
      '6-Person Capacity Steam Room',
      'Digital Temperature Control',
      'Anti-bacterial Tiling',
      'Towel Service Available',
      'Open for Members Daily',
      'Available After Each Session',
    ],
    gradient: 'from-teal-900/20 to-zinc-950',
    color: '#2DD4BF',
  },
  {
    id: 'lockers',
    name: 'Locker Rooms',
    icon: Shield,
    tagline: 'Premium Changing Facilities',
    description:
      'Separate, spacious locker rooms for men and women with individual lockable lockers, shower cubicles, and vanity areas for post-workout grooming.',
    features: [
      'Separate Men & Women Areas',
      'Individual Lockers with Lock',
      'Private Shower Cubicles',
      'Vanity Mirrors & Bench',
      'Hot & Cold Water Supply',
      'Clean Daily Deep Cleaning',
    ],
    gradient: 'from-gray-900/20 to-zinc-950',
    color: '#9CA3AF',
  },
];

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Car, label: 'Parking' },
  { icon: Droplets, label: 'Drinking Water' },
  { icon: Activity, label: 'Air Conditioning' },
  { icon: Music, label: 'Music System' },
  { icon: Camera, label: 'CCTV Security' },
  { icon: Clock, label: 'Long Hours' },
  { icon: Users, label: 'Trained Staff' },
];

const overviewStats = [
  { value: '5,000', unit: 'sqft', label: 'Gym Space' },
  { value: '200+', unit: '', label: 'Equipment Pieces' },
  { value: '6', unit: '', label: 'Training Zones' },
  { value: '500+', unit: '', label: 'Active Members' },
];

export default function FacilitiesPage() {
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
            Premium Infrastructure
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl tracking-wider mb-6 font-black"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            WORLD-CLASS{' '}
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              FACILITIES
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            Everything you need to train, recover, and transform — all under one roof in Bidar.
          </motion.p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y-0 md:divide-x md:divide-white/10">
            {overviewStats.map(s => (
              <div key={s.label} className="text-center py-2">
                <p className="text-5xl font-black text-[#C9A84C] leading-none"
                  style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
                  {s.value}
                  {s.unit && <span className="text-2xl ml-1">{s.unit}</span>}
                </p>
                <p className="text-white/50 text-sm mt-2 tracking-wide"
                  style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Facility Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-8">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className={`bg-gradient-to-br ${facility.gradient} border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300`}
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Visual panel */}
                <div
                  className="lg:w-80 flex-shrink-0 flex flex-col items-center justify-center p-10 relative"
                  style={{ borderRight: isEven ? `1px solid rgba(255,255,255,0.08)` : 'none', borderLeft: !isEven ? `1px solid rgba(255,255,255,0.08)` : 'none' }}
                >
                  {/* Decorative accent bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: facility.color, opacity: 0.6 }}
                  />
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${facility.color}15`, border: `2px solid ${facility.color}30` }}
                  >
                    <Icon className="w-9 h-9" style={{ color: facility.color }} />
                  </div>
                  <h3
                    className="text-3xl font-black tracking-wider text-center"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)', color: facility.color }}
                  >
                    {facility.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-2 text-center"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    {facility.tagline}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <p className="text-white/70 text-base leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.features.map(feat => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: facility.color }}
                        />
                        <span className="text-white/70 text-sm"
                          style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Additional Amenities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black tracking-wider"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
            ADDITIONAL <span className="text-[#C9A84C]">AMENITIES</span>
          </h2>
          <p className="text-white/50 mt-3"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
            Everything else that makes your gym experience seamless
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
            >
              <a.icon className="w-7 h-7 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white/70 text-sm font-medium text-center"
                style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                {a.label}
              </span>
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
          className="relative overflow-hidden bg-gradient-to-r from-[#C9A84C]/10 via-[#D4AF37]/5 to-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <h2 className="text-5xl md:text-6xl font-black tracking-wider mb-4 relative"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}>
            EXPERIENCE IT <span className="text-[#C9A84C]">YOURSELF</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto relative"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
            Book a free tour and see why UGRAMM FITNESS is Bidar&apos;s #1 premium gym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-10 py-4 rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-300 text-lg tracking-widest"
              style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
            >
              BOOK A FREE TOUR
            </Link>
            <Link
              href="/join"
              className="border border-[#C9A84C]/40 text-[#C9A84C] font-bold px-10 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 text-lg tracking-widest"
              style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
            >
              JOIN NOW
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
