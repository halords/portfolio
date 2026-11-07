# PORTFOLIO REVISION SPEC — FINAL (post critique rounds 1–2; reconciled by coordinator)

Subject: Harold Erick M. Jamora — portfolio at halords/portfolio (Next.js 16, App Router, Tailwind v4). Round 2 improvement on a live first revision: build on what exists, never restart.

## 0. Job of the site
Convert a part-time remote employer's 60-second visit into contact. Primary buyer: needs a Next.js/React full-stack developer for AI integration, internal tools, document automation. Secondary buyer: needs VA/admin support. Dev decides the design; VA is a distinct, professional second lane.

## 1. Positioning
- PRIMARY (first screen, nav weight, work order, services order): professional developer — Next.js/React full-stack, AI integration/automation, internal tools & dashboards, document automation (PDF/Excel).
- SECONDARY: "Administrative & VA Services" — its own section, professional framing (never "on the side" in copy), own deliverables. It appears AFTER dev services and work. Nav shows it as one link among others, not a co-headline.
- Identity: full name "Harold Erick M. Jamora" visible in hero and nav-adjacent — "halords" is the wordmark, never the only name on screen.
- Honesty rule: 8 years is public-service/operations experience, not 8 years of software engineering. Copy must never conflate them: "8 years inside government operations; 7 systems shipped to production there" is the accurate frame.

## 2. The first screen (hard requirements)
Above the fold, in this order of emphasis:
1. Full name + role line: "Harold Erick M. Jamora — Full-Stack Developer (Next.js / React)".
2. Headline naming the buyer's problems: internal tools, workflow automation, AI-assisted operations, document-heavy processes. (Fraunces, short lines — see §7.)
3. One verifiable proof pointer: "Currently running: the AI feedback system analysing citizen responses for the Provincial Government of La Union" (or equivalent true claim) + link to its case study.
4. Availability line (mono, factual): "Part-time · 15–20 hrs/week · La Union, PH (UTC+8) · Mon–Thu evenings from 19:00 PHT (11:00 UTC) · Fridays flexible · Overlap by arrangement".
5. CTAs: "See the work" → #work; "Email me" → mailto (visible address, no scroll hunt).
6. NO separate fact sheet AND proof strip — one consolidated proof strip only (§4.3).

## 3. Working-together block (availability & boundaries — appears once, linked from hero + contact)
- Capacity: part-time, 15–20 hrs/week, alongside a public-service role (Mon–Thu office schedule); work happens Mon–Thu evenings from 19:00 PHT (11:00 UTC) and Fridays (flexible daytime — his non-office day); async-first with daily written updates.
- Separation: freelance work is done outside government hours, on personal equipment, with no use of government data or systems. (States the boundary without legal overclaiming.)
- Fastest contact: email; what to include (role/project, hours, start date).

## 4. Section plan
1. **Nav** — wordmark "halords" with the full name visibly beside it on desktop nav and in the hero (§2.1) — metadata alone does not count as identification; links: Work, Services, VA & Admin, Background, Contact; solid bone bg + hairline (no blur-glass). Mobile: Work/Services/Contact visible + menu for the rest.
2. **Hero** — per §2. Asymmetric editorial: left text column; right column = ruled mono index of flagship proof (3 case-study links with one-line outcomes) instead of an identity card. Cobalt used for: headline keyword(s), index numerals, CTA underline/marker.
3. **Proof strip** — hairline row, tabular numerals, defensible claims only: "7 — PGLU systems in production (6 internal + 1 public-facing)" · "8 — years of public-service operations" · "2022 — Ten Outstanding Provincial Public Servants" · "2 — Google professional certificates, 2026". 
4. **Selected Work** — TWO tiers:
   - **Featured case studies (3)** with full inline expansion (no modal — inline panels with stable anchor ids #work-feedback, #work-iam, #work-mihon; expansion is progressive: outcome line visible when collapsed so mobile users get the evidence without tapping; panels are button-controlled with aria-expanded, fully keyboard-operable, and a panel targeted by the URL hash loads EXPANDED (hero proof links land on open evidence)):
     a. **AI-Powered Customer Feedback System** (flagship): role = sole designer/builder/maintainer; status: in production, internal (PGLU); what the AI does (sentiment classification + trend detection over citizen feedback; tech tags per his own system record: Ollama Claude, Gemini AI). PROSE RULES (critic-enforced): never imply local-only inference or data containment; distinguish the internal application from where inference runs; the verifiable claims are: classification is advisory, staff review and verify before acting, raw responses are visible only to authorized staff (role-based access). Decision note: why classification is advisory.
     b. **IAM Console (SSO)**: single identity for office systems (NextAuth → IAMC single identity); scope: authentication + role-based access for internal apps; his exact responsibility (built and maintains it); no sensitive detail beyond that.
     c. **Mihon PWA**: newest proof of range + process. Framed honestly: an original web implementation inspired by Mihon's UX, reading via MangaDex's official API; local-first (IndexedDB library, offline downloads, .tachibk backup import). Process note (short): specified, built with an AI-agent pipeline under his direction — he set architecture, reviewed every round, ran QA on-device, accepted/rejected fixes. Live link.
   - **Shipped-systems index (compact ruled table, mono metadata)**: the remaining systems, each one row: name · what it replaced · status label · tech. Status labels are mandatory and honest: "In production — internal", "Live — public", "Personal project". Rows: Document Revision Request System (production — internal), Personnel Discipline Report System (production — internal), Citizen's Charter Portal (live — public), Leave Tracker (production — internal), L&D Form Builder (production — internal), Document Editor / Nexus Docs (personal–internal tool), Ambagan (personal project), Photo Booth "Booth" (personal project, live). COUNT DISCIPLINE (critic-enforced): the claim everywhere is "7 PGLU systems in production — 6 internal, 1 public-facing". The seven: Document Revision, Personnel Discipline, AI Feedback, IAM Console, Leave Tracker, L&D Form Builder (internal) + Citizen's Charter Portal (public-facing). They are grouped together and visibly countable across Selected Work: the systems index lists ALL SEVEN rows (Feedback and IAM rows cross-reference their featured case studies above), so the count can be verified in one place. Mihon, Ambagan, Booth, and Nexus Docs are independent projects, explicitly OUTSIDE the seven. Never call all seven "internal".
5. **Services (dev)** — 4 ruled offers: Full-Stack Web Development; AI Integration; Internal Tools & Workflow Automation; Document Automation (PDF/Excel generation, report pipelines). Each with deliverables + a proof pointer linking to a case study above.
6. **Administrative & VA Services** — distinct section, own kicker "Second lane": records management, office operations, document workflows, data handling & validation, executive assistance, compliance/performance reporting; proof: 8 yrs PGLU admin, Career Service Professional Eligibility (82.39%), current role Administrative Officer III / Records Officer II. Availability cross-link to §3.
7. **Background** — career timeline UPDATED: Administrative Officer III (designated Records Officer II) Aug 2026–present (current: digital records + office automation; maintains IAM Console, Feedback System, Citizen's Charter web); Administrative Officer II Apr 2024–Aug 2026; Administrative Assistant IV Dec 2021–Apr 2024 (Top 10 badge 2022); Administrative Aide IV Feb 2018–Dec 2021; earlier entries collapsed. Awards named exactly: "Ten Outstanding Provincial Public Servants — C.Y. 2022". Certifications with verify links: Google Data Analytics Professional Certificate (Sep 2026), Google AI Professional Certificate (Aug 2026).
8. **Skills** — dev column first (Next.js/React, TypeScript, PostgreSQL/Prisma, NextAuth, Google APIs, AI integration (Ollama/Gemini), ExcelJS/pdf-lib/Puppeteer, Turso/libSQL); operations column second.
9. **Contact** — inverted charcoal section. Content before flourish: desired work (part-time dev/automation; VA/admin), capacity line, email large + copy button with confirmation, phone, résumé link, GitHub link. Repeated contact CTAs also after §4 and §5 (single-line ruled callouts: "Building something like this? → Email me").
   - Form: EmailJS ONLY if keys are present in the production build env AND a test submission is verified by the main agent post-deploy; otherwise the section ships mailto+copy only — a form that cannot send must never render.
10. **Footer** — mono: full name · Full-Stack Developer · City of San Fernando, La Union · © {current year, rendered dynamically}.

## 5. Case-study schema (featured 3; index rows use the short form)
status label · his role (sole builder unless stated) · problem (2–3 lines) · what was built · one technical decision/constraint · outcomes (observable evidence; numbers ONLY from record: e.g. PDR "monthly reporting: days of manual assembly → minutes" is on record in existing data; feedback "thousands of citizen responses" is on record; nothing else invented) · evidence link (live site / repo / verify) where public. Disclosure discipline: internal systems get abstract visuals only — no screenshots containing real records, names, or citizen data.

## 6. Mihon facts (on record — do not embellish)
Live PWA, Nov 2026: offline-first reader; library/downloads on-device in IndexedDB, no account; chapter downloads readable fully offline; Android .tachibk backup import; MangaDex via its official API; continuous webtoon reader; deployed on Vercel. Tech: Vite + React + TypeScript + vite-plugin-pwa.

## 7. Art direction (anti-AI-slop — binding, with critic-driven corrections)
- Pairing: Cobalt #2244CC + Fraunces (display, optical size, tight tracking ONLY on short display lines), Space Grotesk (body/UI), IBM Plex Mono (kickers/labels/tabular). Max 3 families, strict roles; mono never for body.
- Neutrals: bone #F4F1EA bg, parchment #EAE4D6 secondary surfaces, charcoal #1B1A17 text, faded ink #6E675C secondary, hairline #D9D2C2 1px.
- Contrast corrections (critic-verified): cobalt on bone ≈ 6.7:1 → AA for normal text, NOT AAA: fine for links/labels; don't set small body text in cobalt. Faded ink on parchment ≈ 4.4:1 → FAILS AA except for large text: RULE — charcoal for ALL secondary text on parchment; faded ink is used on bone only. On the charcoal contact section, cobalt is ~2.3:1 → cobalt there is graphic-only; focus ring on dark = bone 2px outline.
- One accent (cobalt), ≤3 roles: links+CTA markers, section/project numerals, one hero graphic element. Tints 8–12% only.
- Banned: Inter/Roboto/system-ui/Poppins/Montserrat/DM Sans; gradients; glassmorphism; glow; emoji icons (Lucide only); uniform card grids; justified text (remove the global justify rule).
- Grouping: hairlines + whitespace primary, but cards/panels allowed where they carry function (featured case studies may sit on parchment panels). Touch targets ≥44px. Hairlines never the sole indicator of interactivity.
- Motion: fade/translate reveals only, prefers-reduced-motion respected; content must not depend on animation to be visible to crawlers/no-JS (SSR HTML contains all copy).

## 8. Fundamentals
- metadataBase = https://portfolio-three-smoky-nsmn4d28em.vercel.app (until custom-domain gate); OG image generated via app/opengraph-image.tsx (bone/cobalt/Fraunces, name + role); twitter card summary_large_image; title "Harold Erick Jamora — Full-Stack Developer (Next.js · AI Integration)".
- app/robots.ts + app/sitemap.ts. Semantic landmarks, single h1, alt text, focus-visible states per §7, skip link.
- Fonts: next/font/google display=swap latin, exact weights (Fraunces var 400..700 + optical sizing axis; Space Grotesk 400/500/700; IBM Plex Mono 400/500).
- Static prerender; no new heavy deps (framer-motion stays but restrained); project SVG artwork kept (abstract) or replaced with typographic panels.
- Pre-launch truth gate: every claim on the page checked against the record (dates, cert titles + verify URLs, role dates, counts) during build QA; résumé link target checked for reachability (content consistency is a user-side item — flag if unreachable).

## 9. Non-goals
No backend/CMS/blog; no analytics in this round (deferred — user decision); no repo restructure (data/*.ts stays, extended with status/role fields); no invented metrics; no real-data screenshots of internal systems.

## 10. User gates (non-blocking)
- Custom domain attach (haroldjamora.dev suggested 2026-10) — dashboard step; metadataBase/OG swap is one line afterwards.
- EmailJS production keys + a live test submission — needed only if the form ships.
- Résumé (jobs180) content consistency with the site's updated roles/dates.
