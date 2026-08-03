'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Grid3X3, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Gym Floor', 'Transformations', 'Equipment', 'Events', 'Members'];

const galleryItems = [
  { id: 1, category: 'Gym Floor', caption: 'State-of-the-art strength training zone', gradient: 'from-zinc-800 to-zinc-900', aspect: 'aspect-square' },
  { id: 2, category: 'Equipment', caption: 'Premium cable machines & free weights', gradient: 'from-neutral-800 to-stone-900', aspect: 'aspect-video' },
  { id: 3, category: 'Transformations', caption: 'Member success story - 4 months', gradient: 'from-yellow-900/40 to-zinc-900', aspect: 'aspect-[3/4]' },
  { id: 4, category: 'Gym Floor', caption: 'Cardio arena with 10 treadmills', gradient: 'from-slate-800 to-slate-900', aspect: 'aspect-square' },
  { id: 5, category: 'Members', caption: 'Morning batch training session', gradient: 'from-zinc-700 to-zinc-900', aspect: 'aspect-video' },
  { id: 6, category: 'Equipment', caption: 'Full CrossFit rig setup', gradient: 'from-stone-800 to-stone-900', aspect: 'aspect-square' },
  { id: 7, category: 'Events', caption: 'Transformation challenge 2024', gradient: 'from-amber-900/30 to-zinc-900', aspect: 'aspect-[4/3]' },
  { id: 8, category: 'Transformations', caption: 'Before & After - 6 months journey', gradient: 'from-orange-900/30 to-zinc-900', aspect: 'aspect-square' },
  { id: 9, category: 'Gym Floor', caption: 'Functional training zone', gradient: 'from-gray-800 to-gray-900', aspect: 'aspect-video' },
  { id: 10, category: 'Members', caption: 'Personal training session', gradient: 'from-zinc-800 to-neutral-900', aspect: 'aspect-square' },
  { id: 11, category: 'Equipment', caption: 'Steam room & recovery area', gradient: 'from-teal-900/30 to-zinc-900', aspect: 'aspect-[3/4]' },
  { id: 12, category: 'Gym Floor', caption: 'Premium locker room facilities', gradient: 'from-slate-700 to-slate-900', aspect: 'aspect-square' },
  { id: 13, category: 'Events', caption: 'Fitness workshop day', gradient: 'from-violet-900/30 to-zinc-900', aspect: 'aspect-video' },
  { id: 14, category: 'Transformations', caption: 'Weight loss success story', gradient: 'from-red-900/20 to-zinc-900', aspect: 'aspect-square' },
  { id: 15, category: 'Members', caption: 'Group CrossFit session', gradient: 'from-indigo-900/30 to-zinc-900', aspect: 'aspect-[4/3]' },
  { id: 16, category: 'Gym Floor', caption: 'Night training atmosphere', gradient: 'from-zinc-900 to-black', aspect: 'aspect-square' },
  { id: 17, category: 'Equipment', caption: 'Olympic barbell & power rack', gradient: 'from-neutral-700 to-neutral-900', aspect: 'aspect-video' },
  { id: 18, category: 'Events', caption: 'Annual members meet 2024', gradient: 'from-yellow-900/20 to-zinc-900', aspect: 'aspect-square' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevItem = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const nextItem = () => setLightboxIndex(i => (i + 1) % filtered.length);

  const currentItem = filtered[lightboxIndex];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="relative py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Grid3X3 className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-[#C9A84C] font-mono text-sm tracking-[0.3em] uppercase">Visual Tour</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-7xl md:text-9xl tracking-wider mb-4"
            style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
          >
            <span className="bg-gradient-to-r from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] bg-clip-text text-transparent">
              GALLERY
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
          >
            See the <span className="text-[#C9A84C]">UGRAMM FITNESS</span> Experience
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black'
                  : 'border border-white/20 text-white/60 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
              }`}
              style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid - Masonry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="break-inside-avoid mb-4 group cursor-pointer relative overflow-hidden rounded-2xl"
                onClick={() => openLightbox(index)}
              >
                {/* Image placeholder */}
                <div className={`w-full ${item.aspect} bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-2xl`}>
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none pointer-events-none">
                    <span
                      className="text-white text-2xl font-black tracking-widest rotate-[-15deg]"
                      style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
                    >
                      UGRAMM FITNESS
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 rounded-2xl">
                    <ZoomIn className="w-10 h-10 text-[#C9A84C]" />
                    <p className="text-white text-sm text-center px-4 font-medium"
                      style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)' }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            No items in this category.
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Main image */}
              <div className={`w-full aspect-[4/3] bg-gradient-to-br ${currentItem.gradient} rounded-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none">
                  <span
                    className="text-white text-5xl font-black tracking-widest rotate-[-15deg]"
                    style={{ fontFamily: 'var(--font-bebas, "Bebas Neue", sans-serif)' }}
                  >
                    UGRAMM FITNESS
                  </span>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium"
                    style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                    {currentItem.caption}
                  </p>
                  <p className="text-[#C9A84C] text-sm mt-1">{currentItem.category}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prevItem}
                  className="flex items-center gap-2 text-white/70 hover:text-[#C9A84C] transition-colors font-medium"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>
                <span className="text-white/40 text-sm">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
                <button
                  onClick={nextItem}
                  className="flex items-center gap-2 text-white/70 hover:text-[#C9A84C] transition-colors font-medium"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
