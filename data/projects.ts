export type ProjectGroup = "pglu" | "independent";

export interface Project {
  id: string;
  group: ProjectGroup;
  featured?: boolean;
  status: "In production — internal" | "Live — public" | "Live — personal project" | "Personal project";
  role: string;
  type: string;
  title: string;
  outcomeLine: string; // one line, visible even when the case study is collapsed
  problem: string;
  solution: string;
  decision?: string; // required for featured, optional otherwise
  outcomes: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  plate?: { src: string; alt: string; caption: string };
}

export const projects: Project[] = [
  {
    id: "feedback",
    group: "pglu",
    featured: true,
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "Feedback · AI · Analytics",
    title: "AI Customer Feedback System (feedbackV3)",
    outcomeLine:
      "Citizen feedback is AI-classified for sentiment and trended automatically — staff read insights, not piles of forms.",
    problem:
      "Citizen feedback arrived as paper forms and online submissions. Reading and categorizing everything manually meant insights arrived months late — or never.",
    solution:
      "A unified collection platform with an AI pipeline: Ollama Claude classifies sentiment and detects trends, with Gemini as fallback. Role-based dashboards surface what's actually going wrong, while it's still fixable.",
    decision:
      "Classification is advisory by design: the AI labels sentiment, staff verify before anything is acted on. The system accelerates reading — it doesn't replace judgment.",
    outcomes: [
      "Running in the workplace on real citizen feedback",
      "Trend detection flags recurring service issues early",
      "Role-based access keeps raw responses visible only to authorized staff",
    ],
    tech: [
      "Next.js",
      "Ollama Claude",
      "Gemini AI",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
    ],
    plate: {
      src: "/projects/feedback.svg",
      alt: "Artwork plate for the AI Customer Feedback System — title card reading “AI-Powered Customer Feedback System”",
      caption: "Artwork plate — abstract; internal system, no live data shown",
    },
  },
  {
    id: "iam",
    group: "pglu",
    featured: true,
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "Identity · SSO · Platform",
    title: "IAM Console — One Identity for Every Office System",
    outcomeLine:
      "A single sign-on identity shared by the feedback system and the Citizen's Charter portal — one account per staff member, administered in one place.",
    problem:
      "Every org app kept its own user store. Staff juggled separate logins per system, and admins provisioned the same person over and over.",
    solution:
      "A central identity service: one account, JWT sessions, Argon2id password hashing, and email flows — consumed by the feedback system and the CC portal today, designed to grow into an OAuth-style identity provider any future app can delegate login to.",
    decision:
      "Identity is a platform, not a feature: each app delegates authentication to the console's single user store instead of growing its own, so access is granted — and revoked — exactly once.",
    outcomes: [
      "Single sign-on across the organization's apps",
      "One user store to administer instead of one per app",
      "SSO-ready architecture for future systems",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "JWT", "Argon2id", "Zod"],
    plate: {
      src: "/projects/iam.svg",
      alt: "Artwork plate for the IAM Console — concentric-circle motif with the title “iam-console”",
      caption: "Artwork plate — abstract; internal system, no live data shown",
    },
  },
  {
    id: "mihon",
    group: "independent",
    status: "Live — personal project",
    role: "Designer & technical lead — architecture, build direction, QA",
    type: "PWA · Offline-First · Reader",
    title: "Mihon PWA — Offline-First Manga Reader for iOS",
    outcomeLine:
      "A live, installable reader: library and downloads live on-device, chapters read fully offline, Android backups import cleanly.",
    problem:
      "Mihon exists only on Android, and web readers stream page by page — lose your signal and your library is gone with it.",
    solution:
      "A browser-based implementation in Mihon's spirit, built Nov 2026: browse and read via MangaDex's official API, keep the library and downloaded chapters on-device in IndexedDB with no account, import Android .tachibk backups, and a continuous webtoon reader that chains chapters under a divider instead of hitting an end screen.",
    decision:
      "Local-first was the architecture, not a feature: downloads use the same data path as the live reader, so offline reading is exact rather than a degraded mode. I directed an AI-agent build pipeline (spec → lane builds → QA → deploy), reviewed every change, and ran acceptance testing on my own phone.",
    outcomes: [
      "Live and installable today — no account, no server-side library",
      "Downloaded chapters live on-device and read fully offline",
      ".tachibk backup import restores an existing Android library",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "IndexedDB",
      "vite-plugin-pwa",
      "MangaDex API",
    ],
    liveUrl: "https://mihon-ios.vercel.app",
    plate: {
      src: "/projects/mihon.svg",
      alt: "Artwork plate for the Mihon PWA — title card reading “Mihon PWA, Manga Reader for iOS”",
      caption: "Artwork plate",
    },
  },
  {
    id: "drrrf",
    group: "pglu",
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "Document Management · Routing",
    title: "Document Revision Request System",
    outcomeLine:
      "ISO document revisions flow through one tracked, role-based pipeline instead of email threads and spreadsheets.",
    problem:
      "ISO procedure revisions were proposed over email and tracked on spreadsheets. Reviews stalled, versions conflicted, and nobody could answer 'where is this document right now?'",
    solution:
      "A Next.js application with role-based access: staff propose revisions, reviewers are auto-routed in sequence, and every action is timestamped, with real-time status via SWR.",
    outcomes: [
      "Single source of truth for every document revision in flight",
      "Automatic reviewer routing — no more chasing signatures by email",
      "Full audit trail supporting ISO 9001:2015 documentation requirements",
    ],
    tech: ["Next.js", "Prisma", "Tailwind CSS", "SWR", "NextAuth"],
    plate: {
      src: "/projects/drrrf.svg",
      alt: "Artwork plate for the Document Revision Request System — title card",
      caption: "Artwork plate — abstract; internal system, no live data shown",
    },
  },
  {
    id: "pdr",
    group: "pglu",
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "HR · Compliance · Reporting",
    title: "Personnel Discipline Reports",
    outcomeLine:
      "Province-wide discipline reporting: standardized office submissions consolidate automatically — days of assembly became minutes.",
    problem:
      "Each office submits a monthly personnel discipline report; consolidating dozens of MS Teams form responses into the provincial summary was done by hand.",
    solution:
      "Standardized MS Teams forms per office feed a system that collects responses and consolidates them into the province-wide report automatically.",
    decision:
      "Standardize the input first: consolidation is only automatable when every office submits the same shape of data.",
    outcomes: [
      "Monthly reporting time cut from days of manual assembly to minutes",
      "Every office's submissions tracked in real time",
      "Fewer consolidation errors — one standardized form per office replaces manual merging",
    ],
    tech: ["MS Teams Forms", "Automation", "Data Collection"],
    plate: {
      src: "/projects/pdr.svg",
      alt: "Artwork plate for Personnel Discipline Reports — title card with a bar-chart motif",
      caption: "Artwork plate — abstract; internal system, no live data shown",
    },
  },
  {
    id: "cc",
    group: "pglu",
    featured: true,
    status: "Live — public",
    role: "Sole designer, builder & maintainer",
    type: "Public-Facing · Civic Tech",
    title: "PGLU Citizen's Charter Portal",
    outcomeLine:
      "Charter content authored once, generated into a public portal and printable versions — citizens check services and requirements 24/7.",
    problem:
      "Producing and revising the Citizen's Charter was manual and document-heavy, and staying compliant meant constant re-checking; citizens had no way to check services before visiting in person.",
    solution:
      "A structured-data platform: charter content is authored once, then generated into a public portal and Puppeteer-rendered printable versions, with revision workflows that keep everything compliant. Staff author and revise content through the IAM Console's single sign-on.",
    decision:
      "The charter is data, not a document: it lives as structured records in a single source of truth, and the public portal and the printed charter are both generated from those same records — a revision lands in every version, with no separate copies to keep in sync.",
    outcomes: [
      "Charter generation and revision centralized in one system",
      "Compliance tracking built into the workflow",
      "Interactive 24/7 client access to services and requirements",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "Turborepo",
      "PostgreSQL",
      "Puppeteer",
      "pdf-lib",
    ],
    liveUrl: "https://citizenscharter.launion.gov.ph",
    plate: {
      src: "/projects/cc.svg",
      alt: "Artwork plate for the PGLU Citizen's Charter Portal — title card",
      caption: "Artwork plate",
    },
  },
  {
    id: "leave",
    group: "pglu",
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "HR · Leave Management",
    title: "Leave Tracker",
    outcomeLine:
      "Leave balances, applications, and approvals in one place — with the official Form 6 PDF generated on the spot.",
    problem:
      "Leave applications moved on paper: forms filled by hand, supervisors signed, HR re-encoded everything, and balances lived in a spreadsheet that was always out of date.",
    solution:
      "Digital leave requests with approval tracking, automatic balance computation across leave types, an accrual audit trail, and one-click PDF generation of the official Form 6 via pdf-lib. NextAuth sign-in, Prisma + libSQL, scheduled accruals with node-cron.",
    outcomes: [
      "Real balances and applications tracked daily — no spreadsheet reconciliation",
      "Accrual increments audited with reasons",
      "Official Form 6 printed directly from the app",
    ],
    tech: ["Next.js", "NextAuth", "Prisma", "libSQL", "pdf-lib", "node-cron"],
    liveUrl: "https://leave-tracker-sable.vercel.app",
    repoUrl: "https://github.com/halords/leave-tracker",
    plate: {
      src: "/projects/leave-tracker.svg",
      alt: "Screenshot of the Leave Tracker application interface",
      caption: "App screenshot",
    },
  },
  {
    id: "ld",
    group: "pglu",
    status: "In production — internal",
    role: "Sole designer, builder & maintainer",
    type: "Training · Forms",
    title: "L&D Form Builder",
    outcomeLine:
      "Training form templates built once, distributed by shortlink, submissions collected centrally.",
    problem:
      "Training assessments were static paper forms: creating them took hours, collecting responses took weeks, and analyzing results meant tallying by hand.",
    solution:
      "Reusable form templates (training evaluations, needs assessments) with edit, preview, duplicate, and publish controls; training events distributed via shortlink; centralized submission collection; user management and training archives.",
    outcomes: [
      "Reusable templates replace rebuilding forms for every training",
      "Shortlink distribution with centralized response collection",
      "Full lifecycle in one portal: templates → events → submissions → archives",
    ],
    tech: ["Next.js"],
    liveUrl: "https://lnd-form.vercel.app",
    plate: {
      src: "/projects/lnd-forms.svg",
      alt: "Screenshot of the L&D Form Builder application interface",
      caption: "App screenshot",
    },
  },
  {
    id: "ambagan",
    group: "independent",
    status: "Live — personal project",
    role: "Designer & builder",
    type: "Finance · Travel · Web",
    title: "Ambagan — Travel Expense Splitter",
    outcomeLine:
      "Group trip expenses split with integer math — every split reconciles to the exact centavo.",
    problem:
      "Splitting group travel expenses meant messy chat threads and disputed math; nobody wanted to be the accountant.",
    solution:
      "A Turborepo + pnpm monorepo: add expenses, auto-compute who owes whom with zero rounding drift, and generate transparent receipts showing direct net payables between members. Only verified trip members can mutate expenses or budgets.",
    outcomes: [
      "Integer-based math engine — splits always reconcile exactly",
      "Member-only authorization on every expense mutation",
      "Transparent receipts with direct net payables",
    ],
    tech: ["Next.js", "Turborepo", "pnpm", "TypeScript"],
    liveUrl: "https://ambagan-web.vercel.app",
    plate: {
      src: "/projects/ambagan.svg",
      alt: "Artwork plate for Ambagan — title card reading “Ambagan, Travel Expense Splitter”",
      caption: "Artwork plate",
    },
  },
  {
    id: "doceditor",
    group: "independent",
    status: "Live — personal project",
    role: "Designer & builder",
    type: "Documents · Search · Cloud",
    title: "NexusDocs — Personal Document Cloud",
    outcomeLine:
      "My daily document hub: template-driven documents I can create, search, and print from anywhere.",
    problem:
      "Documents lived scattered across Word files; finding anything meant opening file after file and scrolling, and printing required the right computer.",
    solution:
      "A strictly template-driven editor: upload a PDF or image template as the immutable background, overlay interactive text, images, and tables on a Konva canvas stored as structured JSON, with Tiptap rich text, full-text search, and printing from any device. State in Zustand, persisted to Turso/libSQL.",
    outcomes: [
      "Used daily — search replaces scrolling through Word files",
      "Create and print documents from anywhere",
      "Templates keep recurring documents consistent",
    ],
    tech: ["Next.js 16", "Konva.js", "Tiptap", "Turso/libSQL", "Zustand"],
    liveUrl: "https://web-editor-phi.vercel.app",
    plate: {
      src: "/projects/nexusdocs.svg",
      alt: "Screenshot of the NexusDocs document editor interface",
      caption: "App screenshot",
    },
  },
  {
    id: "booth",
    group: "independent",
    status: "Live — personal project",
    role: "Designer & builder",
    type: "PWA · Photography · Canvas",
    title: "Booth — Photo Booth PWA",
    outcomeLine:
      "A phone photo booth with zero backend: designed strip templates composed on canvas, gallery on-device.",
    problem:
      "Photo booth software is either expensive native apps or clunky web pages that fall apart on a phone camera.",
    solution:
      "A mobile-first PWA (Next.js 15 + TypeScript): in-app camera viewfinder with countdown auto-fire, three designed strip templates (Editorial, Film, Kraft), canvas-composited photo strips, Web Share and download, and an IndexedDB gallery — no backend at all.",
    outcomes: [
      "Runs entirely on-device — no server costs, works offline after first load",
      "Strip templates are WYSIWYG, built from the real canvas composer",
      "Reusable base for a future unattended kiosk mode",
    ],
    tech: ["Next.js 15", "TypeScript", "Canvas API", "IndexedDB", "PWA"],
    liveUrl: "https://photo-booth.vercel.app",
    repoUrl: "https://github.com/halords/photo-booth",
    plate: {
      src: "/projects/booth.svg",
      alt: "Artwork plate for Booth — title card reading “Booth, Photo Booth PWA” with a photo-strip motif",
      caption: "Artwork plate",
    },
  },
  {
    id: "booking",
    group: "independent",
    status: "Live — personal project",
    role: "Designer & builder",
    type: "Hospitality · CRM",
    title: "Cozy Stays — Direct Booking CRM",
    outcomeLine:
      "A host portal for a vacation rental: payment verification queue, booking logs, calendars, guest automation.",
    problem:
      "Direct bookings came through chat threads and spreadsheets — payments unverified, no audit trail, follow-ups sent by hand.",
    solution:
      "A host verification dashboard with a payment review queue, searchable booking master logs with settlement tracking, per-property availability calendars, PayMongo integration, and automated guest email triggers, designed as the CRM front-end for n8n workflows.",
    outcomes: [
      "End-to-end booking ops: verification → settlement → review",
      "Full audit trail of booking events",
      "Designed to pair with n8n workflow automation",
    ],
    tech: ["Next.js", "PayMongo"],
    liveUrl: "https://booking-blond-chi.vercel.app",
    plate: {
      src: "/projects/booking.svg",
      alt: "Screenshot of the Cozy Stays direct-booking CRM interface",
      caption: "App screenshot",
    },
  },
  {
    id: "printerpos",
    group: "independent",
    status: "Personal project",
    role: "Designer & builder",
    type: "POS · Desktop",
    title: "PrintShop Manager — Offline POS & Licensing",
    outcomeLine:
      "Offline-first POS, ID photo studio, and job-order pipeline for a print shop — with cryptographic per-machine licensing.",
    problem:
      "A print shop runs on counter sales, ID photos, and job orders — three disconnected workflows, plus no way to license the software per machine.",
    solution:
      "A Tauri v2 desktop POS client (React 18 + TypeScript) that runs 100% offline, a FastAPI + OpenCV sidecar for ID photo processing (face detection, auto-crop, background removal), an 11-step job-order pipeline, and a Next.js licensing portal with Ed25519 signatures bound to hardware fingerprints.",
    outcomes: [
      "100% offline-first daily operations",
      "AI ID photo suite: face detection, auto-crop, 300 DPI output",
      "Cryptographic per-machine licensing (Ed25519 + hardware binding)",
    ],
    tech: [
      "Tauri v2",
      "React 18",
      "TypeScript",
      "FastAPI",
      "OpenCV",
      "Next.js",
      "Drizzle",
      "Turso",
    ],
    plate: {
      src: "/projects/printerpos.svg",
      alt: "Artwork plate for PrintShop Manager — title card with a receipt motif",
      caption: "Artwork plate",
    },
  },
];