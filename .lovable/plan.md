# Iron Pulse Fitness — Build Plan

A premium, dark-themed, single-page-feel gym marketing site built on the existing TanStack Start + Tailwind v4 stack. Split into real routes for SEO (Home, About, Equipment, Trainers, Gallery, Reviews, Contact), with the home page carrying the primary marketing sections.

## Design system

- Fonts loaded via `<link>` in `__root.tsx`: Poppins (headings) + Inter (body).
- Tokens defined in `src/styles.css` under `@theme` and `:root`:
  - `--background` #0D0D0D, `--card` #171717, `--foreground` #FFFFFF, `--muted-foreground` #B3B3B3, `--border` rgba(255,255,255,0.08), `--primary` Electric Blue #00C2FF (with subtle gradient to a lighter cyan).
- Force dark permanently — no theme switcher, `<html class="dark">`.
- Radii 16–20px, soft shadows, glassmorphism utility (`backdrop-blur` + translucent card), premium linear-gradient accents on CTAs/headlines.
- Motion: Framer Motion for fade-in / slide-up on scroll and subtle hover scale only. Respect `prefers-reduced-motion`.

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx           layout: fonts, nav, footer, scroll-to-top, WhatsApp FAB, scroll progress
  index.tsx            Home (hero, about, stats, featured equipment, facilities, trainers preview, plans, gallery preview, testimonials, BMI, programs, nutrition, timetable, CTA, FAQ contact preview)
  about.tsx            Full About + Why Choose + Facilities + Stats
  equipment.tsx        Full categorized equipment catalogue with filters
  trainers.tsx         All trainer cards
  gallery.tsx          Masonry gallery + lightbox
  reviews.tsx          Testimonials grid + carousel
  contact.tsx          Split layout: info + form + map placeholder
```

Each route sets its own `head()` with unique title, description, og:title/description, og:type, canonical (relative). Root sets viewport, site name, org JSON-LD, sitewide og defaults (no og:image at root). Leaf pages get relevant `og:image` only when a hero image is available.

## Component structure

```
src/components/
  layout/  Navbar, Footer, ScrollProgress, ScrollToTop, WhatsAppFab
  home/    Hero, WhyChoose, Stats, EquipmentPreview, Facilities, TrainersPreview,
           MembershipPlans, GalleryPreview, Testimonials, BmiCalculator,
           WorkoutPrograms, Nutrition, Timetable, Faq, CtaBanner
  equipment/  EquipmentCard, EquipmentCategoryFilter
  trainers/   TrainerCard
  gallery/    MasonryGallery, Lightbox
  ui/         (existing shadcn primitives — Accordion, Button, Card, Dialog, Input, Textarea, Tabs)
  seo/        JsonLd helper
src/data/
  equipment.ts, trainers.ts, facilities.ts, plans.ts, testimonials.ts,
  faqs.ts, timetable.ts, programs.ts, gallery.ts
src/lib/
  bmi.ts, motion.ts (shared variants)
```

Reusable `Section` wrapper standardizes padding, max-width, and heading style.

## Feature notes

- Navbar: transparent → solid on scroll (IntersectionObserver on a sentinel), active link highlight via TanStack `useRouterState`, mobile hamburger using shadcn Sheet, animated open.
- Hero: local optimized image in `src/assets/` (generated), gradient overlay, headline + two CTAs, stat row (rating, members, trainers, years).
- Equipment: data-driven; on home show 6–8 featured; full page groups by 8 categories with tab filter. Card fields per spec (image, name, category, brand, usage, target muscles, beginner-friendly, availability, description, muscles worked, difficulty, recommended for, safety tips) — details expanded in shadcn Dialog to keep card compact.
- Facilities: icon grid (Lucide) — all 18 items.
- Trainers: 6 trainer cards with photo, name, role, experience, specialization, certifications, bio, Book Session CTA linking to contact.
- Membership: 3 pricing cards, Premium highlighted with gradient border.
- Gallery: CSS columns masonry, click opens Dialog lightbox with keyboard nav.
- Testimonials: shadcn Carousel with 6–8 reviews.
- FAQ: shadcn Accordion + FAQPage JSON-LD.
- Contact: form is client-side only (submission shows toast — no backend requested); map = styled placeholder iframe/div; address/phone/email/hours listed.
- BMI Calculator: pure client calc, metric units with imperial toggle, result category shown.
- Workout Programs, Nutrition, Timetable: static content cards / responsive table.
- Social icons row in footer; footer with logo, quick links, programs, legal placeholders, copyright.
- Scroll progress bar (fixed top), scroll-to-top button (appears >400px), floating WhatsApp button (fixed bottom-right).

## Images

Generate a small set of local optimized assets (jpg) with the image tool and import them (bundler hashes + lazy loading):
- hero-gym.jpg
- facility-interior.jpg, cardio-zone.jpg, strength-zone.jpg, functional-zone.jpg, yoga-studio.jpg, crossfit.jpg (gallery)
- 6 trainer portraits
- ~8 equipment photos (representative per category)

All `<img>` get width/height, `loading="lazy"` (except hero which is eager + `fetchpriority="high"` and preloaded via `head().links`), descriptive alt text.

## SEO / a11y / perf

- Semantic landmarks (`<header>`, `<nav>`, single `<main>` per route in `__root.tsx` wrapper, `<footer>`), one H1 per page.
- Meta description <160, title <60, per-route og tags, Organization + LocalBusiness JSON-LD on home, FAQPage JSON-LD on FAQ.
- All icon-only buttons get `aria-label`; focus-visible rings; color contrast checked against #0D0D0D.
- `h-dvh` for full-height hero, `prefers-reduced-motion` disables Framer transitions.
- `public/robots.txt` allow-all, `public/sitemap.xml` with all routes (relative-safe placeholder base).

## Dependencies to add

- `framer-motion`
- `embla-carousel-react` (for shadcn carousel if not present)
- Lucide already available via shadcn setup.

## Out of scope (not requested)

- No backend/auth/DB — contact form is UI-only with toast confirmation.
- No CMS — content lives in typed data files.
- No analytics wiring.

## Deliverable

A polished, production-feeling marketing site matching the spec, on brand palette (#0D0D0D / #171717 / #00C2FF), Poppins + Inter, that runs with `bun dev` and passes typecheck.
