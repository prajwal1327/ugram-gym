'use client';

import { useState, useEffect } from 'react';
import Navbar         from '@/components/layout/Navbar';
import Footer         from '@/components/layout/Footer';
import AnimatedCursor from '@/components/common/AnimatedCursor';
import WhatsAppFloat  from '@/components/common/WhatsAppFloat';
import Loader         from '@/components/layout/Loader';

const SESSION_KEY = 'ugramm_loaded';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // `loading` — show the intro loader
  // `ready`   — fade in the actual layout
  const [loading, setLoading] = useState(true);
  const [ready,   setReady]   = useState(false);

  useEffect(() => {
    // Skip loader on subsequent navigations within the same browser tab
    const alreadySeen = sessionStorage.getItem(SESSION_KEY);
    if (alreadySeen) {
      setLoading(false);
      setReady(true);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, '1');
    // Loader is now shown; it will call onComplete when its animation finishes
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    // Small delay so the loader's exit animation starts before
    // the content snaps into visibility
    setTimeout(() => setReady(true), 80);
  };

  return (
    <>
      {/* Premium custom cursor — desktop only, self-guards on touch */}
      <AnimatedCursor />

      {/* Full-screen intro loader (first visit only per session) */}
      {loading && <Loader onComplete={handleLoadComplete} />}

      {/*
        Main layout shell.
        Hidden (opacity-0 + visibility:hidden) while loader plays.
        Fades in smoothly once loading completes.
      */}
      <div
        style={{
          opacity:       ready ? 1 : 0,
          visibility:    ready ? 'visible' : 'hidden',
          pointerEvents: ready ? 'auto' : 'none',
          transition:    'opacity 0.5s ease',
        }}
      >
        <Navbar />

        <main
          id="main-content"
          className="min-h-screen bg-[#0A0A0A]"
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />
      </div>

      {/* Floating WhatsApp + Phone buttons — always visible */}
      <WhatsAppFloat />
    </>
  );
}
