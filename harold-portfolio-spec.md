# Portfolio Website — Technical Specification
**Harold Erick M. Jamora**
*Administrative Officer II & Developer · Provincial Government of La Union*

---

## 1. Project Overview

A personal portfolio website that presents Harold as a **versatile professional** — part government officer, part self-taught full-stack developer. The site must read as polished and intentional to both HR professionals and technical hiring managers, without leaning too heavily into either world.

**Live domain suggestion:** `haroldjamora.dev` or `harolderjamora.com`
**Deployment target:** Vercel (free tier)

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 15** (App Router) | Consistent with Harold's own projects |
| Styling | **Tailwind CSS v4** | Utility-first, no runtime |
| Fonts | Google Fonts via `next/font` | DM Serif Display + Inter + JetBrains Mono |
| Animations | **Framer Motion** | Scroll reveals, hover states |
| Icons | **Lucide React** | Clean, outline-only |
| Email | **Resend** or `nodemailer` | Contact form delivery |
| Deployment | **Vercel** | Zero-config Next.js hosting |
| Analytics | **Vercel Analytics** | Page view tracking |

No database required — all content is static (hardcoded or from a local `data/` directory).

---

## 3. Design System

### Color Palette

```css
--ink:        #1a1f2e;   /* Primary text / dark backgrounds */
--ink-soft:   #3d4460;   /* Body text */
--ink-muted:  #7c84a0;   /* Captions, labels */
--sage:       #4a7c6f;   /* Primary accent — government / institutional */
--sage-light: #e8f0ee;   /* Sage tint backgrounds */
--sage-mid:   #c2d8d2;   /* Sage borders */
--gold:       #b5863a;   /* Secondary accent — developer / craft */
--gold-light: #f5edd8;   /* Gold tint backgrounds */
--surface:    #f7f6f3;   /* Page background */
--white:      #ffffff;   /* Card surfaces */
--border:     rgba(26,31,46,0.10);
--border-mid: rgba(26,31,46,0.18);
```

### Typography

```css
/* Display headings */
font-family: 'DM Serif Display', serif;    /* Names, section titles */

/* Body / UI */
font-family: 'Inter', sans-serif;          /* All body text */

/* Monospace labels */
font-family: 'JetBrains Mono', monospace;  /* Eyebrows, dates, tags */
```

### Type Scale

| Role | Size | Weight |
|---|---|---|
| Hero name | clamp(36px, 5vw, 56px) | 400 (serif) |
| Section title | clamp(26px, 3.5vw, 38px) | 400 (serif) |
| Card name | 19px | 400 (serif) |
| Body | 15.5px | 400 |
| Eyebrow / label | 11px | 500, monospace, uppercase |
| Tech pills | 10px | 600 |

### Border Radius

- Cards: `12px` (`rounded-xl`)
- Large containers (contact section): `20px` (`rounded-2xl`)
- Buttons, pills, small elements: `6px` (`rounded-md`)
- Pill tags: `9999px` (`rounded-full`)

---

## 4. File & Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, nav
│   ├── page.tsx            # Single-page portfolio (all sections)
│   └── globals.css         # CSS variables, base resets
│
├── components/
│   ├── nav/
│   │   └── Navbar.tsx      # Sticky nav with scroll-aware state
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ValueBar.tsx
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionLabel.tsx   # Monospace eyebrow with line
│       ├── Tag.tsx            # Color-variant pill tag
│       ├── SkillItem.tsx      # Dot + label row
│       ├── StatBox.tsx        # Number + label card
│       ├── ProjectCard.tsx    # Full project card
│       ├── TimelineItem.tsx   # Single career entry
│       └── AwardPill.tsx      # Icon + award text block
│
├── data/
│   ├── projects.ts         # All 7 project records
│   ├── career.ts           # All 5 career timeline entries
│   ├── skills.ts           # Gov't + dev skill lists
│   └── person.ts           # Name, email, phone, tagline, bio
│
└── public/
    └── og-image.png        # Open Graph image (1200×630)
```

---

## 5. Page Sections (in order)

### 5.1 Navbar

- Fixed top, `backdrop-filter: blur(12px)`, height `60px`
- Background: `rgba(247,246,243,0.90)` with bottom border
- Left: logo — `Harold.` (serif, sage dot)
- Right: `About · Career · Projects · Contact` links
- On scroll past 80px: add `shadow-sm` class
- Mobile: hamburger toggle → full-screen overlay menu

### 5.2 Hero

**Layout:** Two-column grid (`1fr 1fr`), centered vertically in 100vh, `padding-top: 60px`

**Left column (text):**
- Eyebrow: `Provincial Government of La Union · Developer` (monospace, sage, with leading line)
- H1: `Harold Erick` + italic `Jamora` in sage
- Italic tagline: *"Public servant by day, builder by night."*
- Body paragraph (from `data/person.ts`)
- CTA row: `View my work` (sage filled) + `Get in touch` (ghost)

**Right column (card):**
- White card with `4px` gradient top border (sage → gold)
- Initials avatar `HJ` (sage tint circle)
- Name + role label (monospace)
- 2×2 stat grid:
  - `8+` Years in service
  - `7+` Systems built
  - `4+` Gov't roles held
  - `1st` Top 10 Awardee
- Tag row: `ISO 9001:2015`, `Citizen's Charter`, `Next.js` (gold), `Full-Stack Dev` (gold), `La Union, PH`

**Animation:** Left text fades up on load (stagger 0.1s per element). Card slides in from right.

### 5.3 Value Bar

Full-width strip between Hero and About.
Background: white, top/bottom 1px borders.
Five items in a flex row (wrap on mobile):
- Policy-aware builder
- ISO 9001 certified process
- Full-stack Next.js developer
- AI-integrated systems
- End-user focused design

Each item: `6px` sage dot + text, `font-size: 13px`.

### 5.4 About

**Layout:** Two-column grid (`1fr 1fr`)

**Left:**
- Section label + title + sub
- 3 paragraphs of bio text
- Awards row (2 pill cards):
  - 🏆 Ten Outstanding Provincial Public Servant — C.Y. 2022
  - 📋 Career Service Professional Eligibility — 82.39%

**Right:**
- Skills grid — **Government & Administration** (sage dots):
  - ISO 9001:2015 QMS, Citizen's Charter, Records Management, Compliance Reporting, Stakeholder Liaison, Performance Reports
- Skills grid — **Development & Technical** (gold dots):
  - Next.js / React, PostgreSQL / SQLite, Prisma ORM, Google APIs, AI Integration, Excel / PDF Export
- Cert bar at bottom: Google Data Analytics Certificate (in progress)

### 5.5 Career Timeline

Vertical timeline with left rail line. Each `TimelineItem` includes:

| Field | Type |
|---|---|
| `year` | string — date range |
| `role` | string — position title |
| `org` | string — agency name + division |
| `description` | string — work narrative |
| `tags` | string[] — keyword pills |
| `badge` | string? — e.g. "Current role" or "Top 10 Awardee · 2022" |
| `badgeVariant` | `'sage' \| 'gold'` |
| `isCurrent` | boolean — fills the timeline dot |

**Entries (from `data/career.ts`):**

1. **Administrative Officer II** · Apr 2024–Present · PGLU (current)
2. **Administrative Assistant IV** · Dec 2021–Apr 2024 · PGLU (gold badge: Ten Outstanding Servant · 2022)
3. **Administrative Aide IV** · Feb 2018–Dec 2021 · PGLU HRMU
4. **Data Entry Specialist** · Oct–Dec 2017 · DENR Region I
5. **Administrative Aide II (Trainee)** · May–Jun 2017 · Department of Agriculture

### 5.6 Projects

Grid layout: `repeat(3, 1fr)` with `gap: 1.25rem`

Each `ProjectCard` accepts:

```typescript
interface Project {
  id: string;
  icon: string;             // emoji
  iconVariant: 'sage' | 'gold';
  type: string;             // e.g. "Attendance · Reporting · Gov't"
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;       // adds gradient bg + "Flagship" badge
  wide?: boolean;           // spans full 3 columns (last card)
}
```

**All 7 projects (from `data/projects.ts`):**

1. **Personnel Discipline Report System** ⭐ `featured`
   - Type: Attendance · Reporting · Gov't
   - Tech: Next.js 15, Google Sheets API v4, ExcelJS, PGLU Internal APIs, Framer Motion

2. **Feedback Management System v2**
   - Type: Feedback · AI · Management
   - Tech: Next.js, Gemini AI, PostgreSQL, Prisma, NextAuth

3. **PGLU Citizen's Charter Web**
   - Type: Public-Facing · Civic Tech
   - Tech: Next.js 15, Turborepo, Tailwind CSS v4, PostgreSQL, Puppeteer

4. **Leave Tracker**
   - Type: HR · Leave Management
   - Tech: Next.js, Turso/libSQL, Prisma, pdf-lib, NextAuth

5. **L&D Form Builder**
   - Type: Training · Analytics
   - Tech: Next.js, Gemini AI, Pusher, Recharts, Puppeteer

6. **Ambagan – Travel Expense Splitter**
   - Type: Finance · Travel · Collaboration
   - Tech: Next.js, Turborepo, pnpm monorepo, TypeScript

7. **Template-Based Document Editor** `wide`
   - Type: Document Editor · Canvas
   - Tech: Next.js 16, Konva.js, Tiptap, Turso/libSQL, Zustand, Tailwind CSS v4

**Card behavior:**
- Default: white bg, 1px border, `border-radius: 12px`
- Hover: border shifts to sage-mid, card lifts `translateY(-3px)`, sage underline scales in from left
- Featured card: soft sage gradient background, gradient top underline (sage → gold), `Flagship` badge

### 5.7 Contact

Dark section (`background: var(--ink)`), `border-radius: 20px`, centered.
Decorative circles: sage tint top-right, gold tint bottom-left.

- Eyebrow: `Let's connect`
- Title: `Open to the right opportunity.` ("opportunity" in italic sage-mid)
- Sub: supporting copy
- Link row:
  - `haroldjamora08@gmail.com` (mailto)
  - `0975 634 3810` (tel)
  - `ResuméLink` → `http://haroldjamora.jobs180.com`

### 5.8 Footer

Centered, `font-size: 12.5px`, muted color, top border.
Text: `Harold Erick M. Jamora · Administrative Officer II & Developer · Provincial Government of La Union · Las-Ud, Caba, La Union`

---

## 6. Data Files

### `data/person.ts`
```typescript
export const person = {
  name: "Harold Erick M. Jamora",
  firstName: "Harold Erick",
  lastName: "Jamora",
  title: "Administrative Officer II",
  org: "Provincial Government of La Union",
  location: "Las-Ud, Caba, La Union, Region I",
  email: "haroldjamora08@gmail.com",
  phone: "09756343810",
  resumeLink: "http://haroldjamora.jobs180.com",
  tagline: "Public servant by day, builder by night.",
  bio: [
    "I started my career in clerical and administrative support...",
    "Over the years, I moved into systems and information management roles...",
    "Alongside all of that, I taught myself to build..."
  ],
  yearsOfService: 8,
  systemsBuilt: 7,
  rolesHeld: 4,
};
```

### `data/projects.ts`
```typescript
export const projects: Project[] = [
  { id: "pdr", title: "Personnel Discipline Report System", featured: true, ... },
  { id: "feedback", title: "Feedback Management System v2", ... },
  { id: "cc", title: "PGLU Citizen's Charter Web", ... },
  { id: "leave", title: "Leave Tracker", ... },
  { id: "ld", title: "L&D Form Builder", ... },
  { id: "ambagan", title: "Ambagan – Travel Expense Splitter", ... },
  { id: "doceditor", title: "Template-Based Document Editor", wide: true, ... },
];
```

---

## 7. Animations (Framer Motion)

| Element | Animation |
|---|---|
| Hero text blocks | `fadeInUp` stagger 0.1s on mount |
| Hero card | `slideInRight` on mount |
| Section titles | `fadeInUp` on scroll enter (viewport threshold 0.2) |
| Timeline items | `fadeInLeft` stagger 0.08s per item on scroll enter |
| Project cards | `fadeInUp` stagger 0.06s per card on scroll enter |
| Navbar | `opacity 0→1` + `translateY -4px→0` on mount |

Use `useInView` from Framer Motion for scroll-triggered animations.
Respect `prefers-reduced-motion` — wrap all animations in a check.

---

## 8. Responsive Breakpoints

| Breakpoint | Layout change |
|---|---|
| `< 768px` (mobile) | Hero → single column stack; Projects → single column; Nav → hamburger |
| `768px–1024px` (tablet) | Hero → single column; Projects → 2 columns |
| `> 1024px` (desktop) | Full 2-column hero, 3-column projects |

---

## 9. SEO & Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Harold Erick Jamora — Administrative Officer & Developer",
  description: "Public servant and full-stack developer at the Provincial Government of La Union. Builder of internal systems, feedback tools, and civic tech.",
  openGraph: {
    title: "Harold Erick Jamora",
    description: "Public servant by day, builder by night.",
    url: "https://haroldjamora.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  keywords: ["Harold Jamora", "La Union developer", "Next.js", "government IT", "civic tech Philippines"],
};
```

---

## 10. Performance Notes

- Use `next/font` for all typefaces (no layout shift)
- Use `next/image` if a real photo is added later
- All section content is statically rendered (no client-side fetching)
- `framer-motion` should be lazy-imported to reduce initial bundle
- Target Lighthouse score: **95+** performance, **100** accessibility

---

## 11. Environment Variables

No `.env` variables needed for the static portfolio.
If a contact form with Resend is added:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=haroldjamora08@gmail.com
```

---

## 12. Deployment Checklist

- [ ] `vercel.json` — set `framework: "nextjs"`
- [ ] Add custom domain in Vercel dashboard
- [ ] Enable Vercel Analytics
- [ ] Set `robots.txt` to allow all
- [ ] Add `sitemap.xml` (single page, easy)
- [ ] Test OG image on [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Run Lighthouse audit before launch

---

*Spec version 1.0 — generated for Harold Erick M. Jamora*
