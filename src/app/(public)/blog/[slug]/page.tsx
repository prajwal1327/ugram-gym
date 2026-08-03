export const runtime = 'edge';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2, Tag, Copy, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

// ---- Types ----

interface Author {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

interface BlogPostData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
}

// ---- Static blog data ----

const BLOG_POSTS: Record<string, BlogPostData> = {
  'top-5-exercises-for-weight-loss': {
    title: 'Top 5 Exercises for Rapid Weight Loss in 2025',
    slug: 'top-5-exercises-for-weight-loss',
    excerpt: 'Discover the most effective exercises that maximise calorie burn and accelerate fat loss — backed by science and proven in our training programs.',
    category: 'Workout',
    tags: ['Weight Loss', 'Cardio', 'HIIT', 'Strength Training'],
    author: {
      name: 'Coach Arjun Kumar',
      role: 'Head Trainer, UGRAMM FITNESS',
      bio: 'NSCA-certified strength and conditioning specialist with 8 years of experience transforming bodies in Bidar and Hyderabad.',
      initials: 'AK',
    },
    publishedAt: '2025-01-15',
    readTime: 7,
    content: `
## Why Most Weight Loss Programs Fail

Most people trying to lose weight focus exclusively on diet while neglecting the critical role exercise plays — not just in burning calories, but in reshaping your metabolism, preserving muscle mass, and creating sustainable change.

At UGRAMM FITNESS, we have tracked hundreds of member transformations. The pattern is clear: members who combine smart training with proper nutrition consistently outperform those who rely on diet alone.

Here are the five exercises our coaches swear by.

---

## 1. Barbell Back Squat

The squat is the king of fat-burning exercises for one simple reason: it recruits the most muscle mass of any single movement. Your quads, hamstrings, glutes, core, and back all engage simultaneously.

**Why it works for fat loss:**
- Triggers massive hormonal response (testosterone, growth hormone)
- Creates a significant "afterburn" effect — your metabolism stays elevated for 24–48 hours
- Builds lean muscle that passively burns calories around the clock

**How to program it:** 4 sets × 8–10 reps at 65–75% of your maximum. Rest 90 seconds between sets.

---

## 2. High-Intensity Interval Training (HIIT) on the Assault Bike

HIIT has consistently beaten steady-state cardio in fat loss research, and the Assault Bike is our preferred tool at UGRAMM FITNESS because it is non-impact and works your entire body.

**Protocol we use:**
- 20 seconds all-out effort
- 40 seconds active rest
- Repeat 10–12 rounds
- Total time: 10–12 minutes

Despite the short duration, this style of training has been shown to burn up to 50% more fat than traditional 45-minute cardio sessions.

---

## 3. Deadlift

The conventional deadlift is a full-body powerhouse. Like squats, deadlifts engage a massive amount of muscle — posterior chain, core, grip, upper back — triggering significant hormonal adaptations that support fat loss.

**Key benefits:**
- Builds real-world functional strength
- Dense muscle tissue from deadlifting burns more calories at rest
- Improves posture and reduces chronic back pain

**Programming:** 3 sets × 5 reps at 70–80% of max. Focus on technique before load.

---

## 4. Battle Rope Waves

Battle ropes are a favourite at UGRAMM FITNESS because they provide cardiovascular intensity while simultaneously challenging your upper body and core in a way that traditional cardio cannot.

**A simple fat-burning protocol:**
- 30 seconds alternating waves (maximum effort)
- 30 seconds rest
- 8 rounds

The combination of metabolic stress and muscle recruitment makes this one of the highest-calorie-burning activities per minute in our gym.

---

## 5. Farmer's Walk

Surprisingly overlooked, the farmer's walk is brutally effective for fat loss. You pick up heavy dumbbells or kettlebells and walk. That is it.

**Why it is so effective:**
- Full-body tension for the entire duration
- Challenges cardiovascular system and grip simultaneously
- Builds functional muscle while burning significant calories
- Zero learning curve — anyone can do it safely

**How to use it:** Walk 30 metres, rest 60 seconds, repeat 6–8 times. Progress by adding weight each week.

---

## Putting It Together: Our 4-Week Fat Loss Circuit

Here is how our coaches at UGRAMM FITNESS combine these exercises into a weekly program:

| Day | Training |
|-----|---------|
| Monday | Squat + Deadlift (strength focus) |
| Tuesday | HIIT — Assault Bike |
| Wednesday | Rest or light stretching |
| Thursday | Battle Ropes + Farmer's Walk |
| Friday | Full-body strength circuit |
| Saturday | HIIT + Core work |
| Sunday | Active recovery |

---

## The Bottom Line

Fat loss comes down to creating a consistent caloric deficit while preserving — or building — muscle mass. These five exercises are the most efficient tools to achieve both goals simultaneously.

Pair this training with adequate protein intake (1.6–2.2g per kg of bodyweight), quality sleep, and consistency, and your transformation is inevitable.

If you want a personalised program designed specifically for your body composition goals, our coaches at UGRAMM FITNESS are ready to build one for you.
    `,
  },
  'protein-guide-for-indian-athletes': {
    title: 'The Complete Protein Guide for Indian Athletes',
    slug: 'protein-guide-for-indian-athletes',
    excerpt: 'How to meet your daily protein targets using Indian foods — dal, paneer, eggs, chicken, and affordable supplements explained.',
    category: 'Nutrition',
    tags: ['Nutrition', 'Protein', 'Diet', 'Indian Food'],
    author: {
      name: 'Coach Arjun Kumar',
      role: 'Head Trainer, UGRAMM FITNESS',
      bio: 'NSCA-certified strength and conditioning specialist with 8 years of experience transforming bodies in Bidar and Hyderabad.',
      initials: 'AK',
    },
    publishedAt: '2025-01-10',
    readTime: 9,
    content: `
## Why Protein is Non-Negotiable

Protein is the most important macronutrient for anyone training seriously. It builds and repairs muscle, supports immune function, and keeps you feeling full — making it critical for both muscle gain and fat loss goals.

The recommended intake for active individuals is 1.6–2.2 grams of protein per kilogram of bodyweight per day.

## Top Indian Protein Sources

**Paneer:** 18g protein per 100g. Versatile, widely available, and a complete protein source for vegetarians.

**Eggs:** 6g per egg. The gold standard for protein quality. Eat the whole egg — the yolk is nutritious.

**Chicken Breast:** 31g per 100g cooked. Lean, affordable, and easy to prepare.

**Toor Dal:** 22g per 100g dry. Combine with rice for a complete amino acid profile.

**Greek Yoghurt (Hung Curd):** 10g per 100g. Great post-workout or as a snack.

## Building a High-Protein Indian Meal Plan

The blog post continues with detailed meal plans and supplement guidance tailored to Indian dietary preferences.
    `,
  },
};

const RELATED_POSTS = [
  {
    title: 'The Complete Protein Guide for Indian Athletes',
    slug: 'protein-guide-for-indian-athletes',
    category: 'Nutrition',
    readTime: 9,
  },
  {
    title: '5 Morning Habits That Amplify Your Gym Results',
    slug: 'morning-habits-gym-results',
    category: 'Lifestyle',
    readTime: 5,
  },
  {
    title: 'How to Avoid the 3 Biggest Beginner Mistakes',
    slug: 'beginner-mistakes-gym',
    category: 'Tips',
    readTime: 6,
  },
];

// ---- Metadata ----

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return { title: 'Post Not Found | UGRAMM FITNESS' };
  return {
    title: `${post.title} | UGRAMM FITNESS Blog`,
    description: post.excerpt,
  };
}

// ---- Simple Markdown Renderer ----

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={key++}
          className="font-bebas text-3xl text-white tracking-wide mt-10 mb-4 border-l-4 border-[#C9A84C] pl-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-white/70 leading-relaxed ml-4 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.startsWith('| ') && line.includes('|')) {
      const cells = line.split('|').filter(Boolean).map((c) => c.trim());
      if (cells.every((c) => c.startsWith('---'))) continue;
      const isHeader = elements[elements.length - 1] === undefined || (typeof elements[elements.length - 1] !== 'object');
      elements.push(
        <tr key={key++} className="border-b border-white/5">
          {cells.map((cell, ci) => (
            <td key={ci} className="py-2.5 px-4 text-white/70 text-sm">
              {cell}
            </td>
          ))}
        </tr>
      );
    } else if (line === '---') {
      elements.push(<hr key={key++} className="border-white/10 my-8" />);
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      elements.push(
        <p key={key++} className="text-white/70 leading-relaxed">
          {line}
        </p>
      );
    }
  }
  return elements;
}

// ---- Page ----

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-5xl text-white mb-4">POST NOT FOUND</h1>
          <Link href="/blog" className="text-[#C9A84C] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0A0A0A]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-white/40 text-sm mb-8">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author.name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} min read
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl border-l-2 border-[#C9A84C]/40 pl-4">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover image placeholder */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className="w-full rounded-2xl overflow-hidden border border-white/8"
          style={{ aspectRatio: '21/9', background: 'linear-gradient(135deg, #1A1A1A, #0D0D0D)' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/10 text-sm">Cover Image</span>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Article */}
          <article>
            <div className="prose-custom space-y-2">
              {renderContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-white/30" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full hover:border-[#C9A84C]/30 hover:text-white/80 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 p-6 bg-[#111111] rounded-2xl border border-white/8">
              <div className="flex items-center gap-2 mb-4">
                <Share2 size={16} className="text-[#C9A84C]" />
                <span className="text-white font-medium text-sm">Share this article</span>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + 'https://ugrammfitness.com/blog/' + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Copy size={14} />
                  Copy Link
                </button>
              </div>
            </div>

            {/* Author card */}
            <div className="mt-8 p-6 bg-[#111111] rounded-2xl border border-[#C9A84C]/15">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-bold text-lg shrink-0">
                  {post.author.initials}
                </div>
                <div>
                  <p className="text-white font-bold">{post.author.name}</p>
                  <p className="text-[#C9A84C] text-sm mb-2">{post.author.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <div className="bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl p-6 text-center">
              <div className="font-bebas text-3xl text-[#C9A84C] mb-2">READY TO START?</div>
              <p className="text-white/60 text-sm mb-5">Transform your body with expert guidance at UGRAMM FITNESS.</p>
              <Link
                href="/join"
                className="block w-full bg-[#C9A84C] hover:bg-[#B8962E] text-black font-bold py-3 rounded-xl text-sm transition-colors"
              >
                Join Now
              </Link>
            </div>

            {/* Related Posts */}
            <div className="bg-[#111111] border border-white/8 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="space-y-4">
                {RELATED_POSTS.filter((p) => p.slug !== slug).slice(0, 3).map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="w-16 h-12 bg-white/5 rounded-lg shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]" />
                    </div>
                    <div>
                      <span className="text-[#C9A84C] text-[10px] font-medium uppercase">{rp.category}</span>
                      <p className="text-white/70 group-hover:text-white text-xs leading-snug transition-colors line-clamp-2">
                        {rp.title}
                      </p>
                      <span className="text-white/30 text-[10px] flex items-center gap-1 mt-1">
                        <Clock size={10} />
                        {rp.readTime} min
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/blog"
                className="flex items-center justify-center gap-1 mt-5 text-[#C9A84C] text-xs font-medium hover:gap-2 transition-all"
              >
                All Articles <ChevronRight size={12} />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-[#111111] border border-white/8 rounded-2xl p-5">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: 'Membership Plans', href: '/membership' },
                  { label: 'Personal Training', href: '/personal-training' },
                  { label: 'Transformations', href: '/testimonials' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-2 text-white/50 hover:text-white text-sm border-b border-white/5 transition-colors"
                  >
                    {link.label}
                    <ChevronRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
