# UGRAMM FITNESS

Premium gym website for UGRAMM FITNESS, located in Bidar, Karnataka, India.

Built with Next.js 15, TypeScript, Tailwind CSS, and deployed on Cloudflare Pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3, Framer Motion, GSAP |
| 3D / WebGL | Three.js, React Three Fiber, Drei |
| Database | Supabase (PostgreSQL) via Prisma ORM |
| Auth | NextAuth v5 (Auth.js) + Prisma Adapter |
| Media | Cloudinary |
| Deployment | Cloudflare Pages |
| UI Primitives | Radix UI |
| Forms | React Hook Form + Zod |
| Charts | Recharts |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- A Supabase project
- A Cloudinary account
- Wrangler CLI (installed as a dev dependency)

### 1. Clone and install dependencies

```bash
git clone https://github.com/your-org/ugramm-fitness.git
cd ugramm-fitness
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and set each value:

- **DATABASE_URL** / **DIRECT_URL** — from your Supabase project settings under *Settings > Database > Connection string*.
- **NEXT_PUBLIC_SUPABASE_URL** / **NEXT_PUBLIC_SUPABASE_ANON_KEY** — from Supabase *Settings > API*.
- **SUPABASE_SERVICE_ROLE_KEY** — from Supabase *Settings > API* (keep this server-side only).
- **NEXTAUTH_SECRET** — generate with `openssl rand -base64 32`.
- **CLOUDINARY_*** — from your Cloudinary dashboard.

### 3. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Push schema to Supabase (dev)
npx prisma db push

# Or run migrations (production)
npx prisma migrate deploy
```

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Database Setup (Supabase)

1. Create a new project at [supabase.com](https://supabase.com).
2. Copy the connection strings from *Settings > Database* into your `.env.local`.
3. Use `DATABASE_URL` with `?pgbouncer=true` for the pooled connection and `DIRECT_URL` for the direct connection (required by Prisma migrations).
4. Enable Row Level Security (RLS) on all public tables in the Supabase dashboard.

---

## Cloudflare Pages Deployment

### Build settings

| Setting | Value |
|---|---|
| Build command | `npm run pages:build` |
| Build output directory | `.vercel/output/static` |
| Node.js version | `20` |

### Step-by-step

1. Push your code to GitHub.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to **Workers & Pages > Create application > Pages > Connect to Git**.
3. Select your repository.
4. Set the build command to `npm run pages:build` and output directory to `.vercel/output/static`.
5. Add all environment variables from `.env.example` under **Settings > Environment variables**.
6. Click **Save and Deploy**.

### Manual deploy via Wrangler

```bash
# Authenticate with Cloudflare
npx wrangler login

# Build and deploy
npm run deploy
```

### Preview locally with Wrangler

```bash
npm run preview
```

---

## Project Structure

```
ugramm-fitness/
├── src/
│   ├── app/                  # Next.js App Router pages & layouts
│   │   ├── globals.css       # Global styles & design tokens
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # Radix-based primitives
│   │   └── sections/         # Page sections (Hero, Plans, etc.)
│   ├── lib/                  # Utility functions & configs
│   │   ├── prisma.ts         # Prisma client singleton
│   │   ├── supabase.ts       # Supabase client
│   │   └── utils.ts          # clsx / tailwind-merge helpers
│   ├── hooks/                # Custom React hooks
│   └── types/                # TypeScript type definitions
├── prisma/
│   └── schema.prisma         # Database schema
├── public/                   # Static assets
├── next.config.ts
├── tailwind.config.ts
├── wrangler.toml
└── .env.example
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (Node.js) |
| `npm run pages:build` | Build for Cloudflare Pages |
| `npm run preview` | Build + preview with Wrangler locally |
| `npm run deploy` | Build + deploy to Cloudflare Pages |
| `npm run lint` | Run ESLint |

---

## Design System

The site uses a dark luxury aesthetic:

- **Primary black**: `#0A0A0A`
- **Gold accent**: `#C9A84C` (DEFAULT), `#E8D5A3` (light), `#8B6914` (dark), `#D4AF37` (metallic)
- **Fonts**: Bebas Neue (headings), Montserrat (subheadings), Inter (body)
- **Custom classes**: `.text-gold-gradient`, `.gold-shimmer`, `.glass-card`, `.gold-card`, `.gradient-border`

---

## License

Private — All rights reserved. UGRAMM FITNESS, Bidar, Karnataka, India.
