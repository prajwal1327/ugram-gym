import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ScrollingMarquee from '@/components/common/ScrollingMarquee';
import About from '@/components/sections/About';
import Facilities from '@/components/sections/Facilities';
import MembershipPreview from '@/components/sections/MembershipPreview';
import PersonalTrainingSection from '@/components/sections/PersonalTrainingSection';
import Transformation from '@/components/sections/Transformation';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'UGRAMM FITNESS | Premium Gym in Bidar, Karnataka | RISE. ROAR. RULE.',
  description:
    'UGRAMM FITNESS — Bidar\'s most premium gym. 500+ members, 100+ machines, expert personal training, and proven transformations. Join Bidar\'s #1 fitness destination today.',
  keywords: [
    'gym bidar',
    'best gym bidar',
    'ugramm fitness',
    'fitness center bidar karnataka',
    'personal training bidar',
    'weight loss bidar',
    'gym membership bidar',
    'premium gym bidar',
    'transformation bidar',
  ],
  openGraph: {
    title: 'UGRAMM FITNESS | Premium Gym in Bidar, Karnataka',
    description:
      'RISE. ROAR. RULE. — 500+ members, 100+ premium machines, expert personal training. Bidar\'s finest gym.',
    url: 'https://ugrammfitness.com',
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] overflow-x-hidden">
      {/* HERO — full viewport, epic first impression */}
      <Hero />

      {/* STATS — animated counters with marquee */}
      <Stats />

      {/* SCROLLING MARQUEE — brand keywords */}
      <ScrollingMarquee />

      {/* ABOUT — story, values, features */}
      <About />

      {/* FACILITIES — world-class equipment grid */}
      <Facilities />

      {/* MEMBERSHIP — pricing cards */}
      <MembershipPreview />

      {/* PERSONAL TRAINING — premium PT highlight */}
      <PersonalTrainingSection />

      {/* TRANSFORMATIONS — before/after stories */}
      <Transformation />

      {/* TESTIMONIALS — carousel reviews */}
      <Testimonials />

      {/* FAQ — accordion questions */}
      <FAQ />

      {/* CONTACT — location, hours, maps */}
      <ContactSection />
    </div>
  );
}
