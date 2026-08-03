'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Clock, ChevronRight, Tag, User, Calendar, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const categories = ['All', 'Nutrition', 'Workout', 'Lifestyle', 'Tips', 'News'];

const posts = [
  {
    slug: 'top-exercises-weight-loss',
    title: '10 Best Exercises for Fast Weight Loss',
    excerpt:
      'Discover the most effective exercises that burn maximum calories and accelerate fat loss. From HIIT to compound movements, this guide covers everything.',
    category: 'Workout',
    author: 'Coach Ravi Kumar',
    date: 'Dec 15, 2024',
    readTime: 5,
    tags: ['weight loss', 'cardio', 'HIIT'],
    coverColor: 'from-orange-900/50 to-red-900/30',
    featured: true,
  },
  {
    slug: 'indian-diet-muscle-gain',
    title: 'The Ultimate Indian Diet Plan for Muscle Gain',
    excerpt:
      'A complete guide to building muscle with Indian foods — dal, paneer, eggs, and more. Learn how to hit your protein targets with local ingredients.',
    category: 'Nutrition',
    author: 'Coach Mohammed Farhan',
    date: 'Dec 10, 2024',
    readTime: 7,
    tags: ['diet', 'muscle gain', 'protein'],
    coverColor: 'from-green-900/50 to-emerald-900/30',
    featured: true,
  },
  {
    slug: 'gym-consistency-tips',
    title: 'How to Stay Consistent at the Gym',
    excerpt:
      '7 proven strategies to never miss a workout and build unstoppable discipline...',
    category: 'Lifestyle',
    author: 'UGRAMM FITNESS',
    date: 'Dec 5, 2024',
    readTime: 4,
    tags: ['motivation', 'consistency', 'tips'],
    coverColor: 'from-blue-900/50 to-indigo-900/30',
    featured: false,
  },
  {
    slug: 'crossfit-vs-traditional',
    title: 'CrossFit vs Traditional Training: Which Wins?',
    excerpt:
      'A detailed comparison to help you choose the right training style for your goals...',
    category: 'Workout',
    author: 'Coach Ravi Kumar',
    date: 'Nov 28, 2024',
    readTime: 6,
    tags: ['crossfit', 'strength training', 'comparison'],
    coverColor: 'from-purple-900/50 to-violet-900/30',
    featured: false,
  },
  {
    slug: 'pre-post-workout-nutrition',
    title: 'Pre & Post Workout Nutrition Guide',
    excerpt:
      'What to eat before and after training to maximize performance and recovery...',
    category: 'Nutrition',
    author: 'Coach Mohammed Farhan',
    date: 'Nov 20, 2024',
    readTime: 5,
    tags: ['nutrition', 'recovery', 'performance'],
    coverColor: 'from-yellow-900/50 to-amber-900/30',
    featured: false,
  },
  {
    slug: 'beginners-guide-gym',
    title: "Beginner's Guide to Starting Your Fitness Journey",
    excerpt:
      'Everything you need to know before walking into a gym for the first time...',
    category: 'Tips',
    author: 'UGRAMM FITNESS',
    date: 'Nov 15, 2024',
    readTime: 8,
    tags: ['beginner', 'guide', 'start'],
    coverColor: 'from-teal-900/50 to-cyan-900/30',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Workout: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Nutrition: 'bg-green-500/20 text-green-300 border-green-500/30',
  Lifestyle: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Tips: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  News: 'bg-red-500/20 text-red-300 border-red-500/30',
};

function CategoryBadge({ category }: { category: string }) {
  const cls = categoryColors[category] ?? 'bg-white/10 text-white/60 border-white/10';
  return (
    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-[var(--font-inter)] font-semibold ${cls}`}>
      {category}
    </span>
  );
}

function FeaturedPostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300 h-full">
        {/* Cover */}
        <div className={`h-52 bg-gradient-to-br ${post.coverColor} relative flex items-end p-6`}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
          <div className="relative z-10">
            <CategoryBadge category={post.category} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-[var(--font-montserrat)] font-bold text-white text-xl mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="font-[var(--font-inter)] text-white/55 text-sm leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/40 font-[var(--font-inter)]">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{post.author}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function SmallPostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 flex gap-4 p-4">
        {/* Mini cover */}
        <div
          className={`w-20 h-20 rounded-lg bg-gradient-to-br ${post.coverColor} flex-shrink-0`}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <CategoryBadge category={post.category} />
          <h3 className="font-[var(--font-montserrat)] font-semibold text-white text-sm mt-1.5 mb-1.5 group-hover:text-[#C9A84C] transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-white/35 font-[var(--font-inter)]">
            <Clock className="w-3 h-3" />
            <span>{post.readTime} min</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>

        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#C9A84C] flex-shrink-0 self-center transition-colors" />
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0];
  const remainingPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);
  const secondFeatured = remainingPosts.find((p) => p.featured);
  const smallPosts = remainingPosts.filter((p) => p.slug !== secondFeatured?.slug);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-6 font-[var(--font-inter)]">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C9A84C]">Blog</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-[var(--font-bebas)] text-7xl md:text-9xl lg:text-[10rem] leading-none mb-4"
            style={{
              background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            FITNESS
            <br />
            BLOG
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[var(--font-montserrat)] text-lg md:text-xl text-white/60 mb-8"
          >
            Expert tips, nutrition guides &amp; fitness insights from our coaches.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto"
          />
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-[var(--font-montserrat)] font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(201,168,76,0.3)]'
                  : 'border border-white/15 text-white/50 hover:border-[#C9A84C]/40 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── BLOG CONTENT ─── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPosts.length === 0 ? (
                <div className="text-center py-24">
                  <p className="font-[var(--font-montserrat)] text-white/40 text-lg">
                    No posts in this category yet. Check back soon!
                  </p>
                </div>
              ) : (
                <>
                  {/* ─── FEATURED POST (large) ─── */}
                  {featuredPost && (
                    <div className="mb-10">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-5 bg-[#C9A84C] rounded-full" />
                        <span className="font-[var(--font-montserrat)] text-sm font-semibold text-[#C9A84C] uppercase tracking-wider">
                          Featured
                        </span>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 transition-all duration-300">
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Large cover */}
                            <div
                              className={`h-60 md:h-full bg-gradient-to-br ${featuredPost.coverColor} relative min-h-[240px]`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/40 md:block hidden" />
                              <div className="absolute bottom-4 left-4">
                                <CategoryBadge category={featuredPost.category} />
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col justify-center">
                              <h2 className="font-[var(--font-montserrat)] font-bold text-white text-2xl md:text-3xl mb-4 group-hover:text-[#C9A84C] transition-colors leading-snug">
                                {featuredPost.title}
                              </h2>
                              <p className="font-[var(--font-inter)] text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                                {featuredPost.excerpt}
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-6">
                                {featuredPost.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="flex items-center gap-1 text-xs font-[var(--font-inter)] text-white/40 border border-white/10 rounded-full px-2.5 py-0.5"
                                  >
                                    <Tag className="w-2.5 h-2.5" />
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm font-[var(--font-inter)] text-white/40">
                                  <div className="flex items-center gap-1.5">
                                    <User className="w-3.5 h-3.5 text-[#C9A84C]" />
                                    <span>{featuredPost.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" />
                                    <span>{featuredPost.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                                    <span>{featuredPost.readTime} min read</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-[#C9A84C] text-sm font-[var(--font-montserrat)] font-semibold group-hover:gap-2.5 transition-all">
                                  Read More <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}

                  {/* ─── SECOND FEATURED + SMALL POSTS ─── */}
                  {(secondFeatured || smallPosts.length > 0) && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Second featured */}
                      {secondFeatured && (
                        <div className="lg:col-span-1">
                          <FeaturedPostCard post={secondFeatured} />
                        </div>
                      )}

                      {/* Small posts */}
                      {smallPosts.length > 0 && (
                        <div className={`${secondFeatured ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-4`}>
                          {!secondFeatured && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {smallPosts.slice(0, 2).map((post) => (
                                <FeaturedPostCard key={post.slug} post={post} />
                              ))}
                            </div>
                          )}
                          {(secondFeatured ? smallPosts : smallPosts.slice(2)).map((post) => (
                            <SmallPostCard key={post.slug} post={post} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── NEWSLETTER / CTA ─── */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl text-white mb-3 tracking-wider">
              STAY{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #C9A84C, #E8D5A3, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                INFORMED
              </span>
            </h2>
            <p className="font-[var(--font-inter)] text-white/50 mb-8">
              Get the latest fitness tips, nutrition advice, and UGRAMM news straight to your WhatsApp.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20UGRAMM%20FITNESS!%20I'd%20like%20to%20subscribe%20to%20fitness%20tips."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A84C] to-[#D4AF37] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 font-[var(--font-montserrat)]"
            >
              Subscribe on WhatsApp
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
