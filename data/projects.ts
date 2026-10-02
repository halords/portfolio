export interface Project {
  id: string;
  type: string;
  title: string;
  description: string;
  /** Problem the system was built to solve. */
  problem: string;
  /** What was built and how it works. */
  solution: string;
  /** Concrete outcomes / capabilities delivered. */
  outcomes: string[];
  tech: string[];
  featured?: boolean;
  wide?: boolean;
  /** Screenshot shown on the card. Falls back to a styled placeholder. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "drrrf",
    image: "/projects/drrrf.svg",
    type: "Document Management · Routing",
    title: "Document Revision Request System",
    description:
      "Replaced a paper-and-email ISO document revision process with a role-based routing system — proposals, reviews, and approvals now flow through one tracked pipeline instead of getting lost in inboxes.",
    problem:
      "ISO procedure revisions were proposed over email and tracked on spreadsheets. Reviews stalled, versions conflicted, and nobody could answer 'where is this document right now?'",
    solution:
      "A Next.js application with role-based access: staff propose revisions, reviewers are auto-routed in sequence, and every action is timestamped. Real-time status updates via SWR keep every stakeholder looking at the same state.",
    outcomes: [
      "Single source of truth for every document revision in flight",
      "Automatic reviewer routing — no more chasing signatures by email",
      "Full audit trail supporting ISO 9001:2015 documentation requirements",
    ],
    tech: ["Next.js", "Prisma", "Tailwind CSS", "SWR", "NextAuth.js"],
    featured: true,
  },
  {
    id: "feedback",
    image: "/projects/feedback.svg",
    type: "Feedback · AI · Analytics",
    title: "feedbackV3 — AI Customer Feedback System",
    description:
      "In production use at the Provincial Government of La Union — citizen feedback is collected, AI-classified for sentiment, and trended automatically instead of being read and tallied by hand.",
    problem:
      "Citizen feedback arrived as paper forms and online submissions. Reading and categorizing everything manually meant insights arrived months late — or never.",
    solution:
      "A unified collection platform with an AI pipeline: Ollama Claude classifies sentiment and detects trends, with Gemini as fallback. Role-based dashboards surface what's actually going wrong, while it's still fixable.",
    outcomes: [
      "Running in the workplace on real citizen feedback",
      "Trend detection flags recurring service issues early",
      "Role-based access keeps raw responses visible only to authorized staff",
    ],
    tech: ["Next.js", "Ollama Claude", "Gemini AI", "PostgreSQL", "Prisma", "NextAuth"],
    featured: true,
  },
  {
    id: "cc",
    image: "/projects/cc.svg",
    type: "Public-Facing · Civic Tech",
    title: "PGLU Citizen's Charter Portal",
    description:
      "Used in the workplace to streamline Citizen's Charter generation, revision, and compliance — and citizens can now access services interactively instead of visiting offices blind.",
    problem:
      "Producing and revising the Citizen's Charter was a manual, document-heavy process, and staying compliant meant constant re-checking. Citizens had no way to interact with services before visiting in person.",
    solution:
      "A structured-data platform: charter content is authored once, then generated into a public portal and Puppeteer-rendered printable versions. Revision workflows keep everything compliant, and clients access services interactively, 24/7.",
    outcomes: [
      "Charter generation and revision centralized in one system",
      "Compliance tracking built into the workflow",
      "Interactive 24/7 client access to services and requirements",
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "Turborepo",
      "Tailwind CSS v4",
      "NextAuth v5",
      "PostgreSQL",
      "Puppeteer",
      "pdf-lib",
    ],
    featured: true,
  },
  {
    id: "iam",
    image: "/projects/iam.svg",
    type: "Identity · SSO · Platform",
    title: "iam-console — Unified Identity for PGLU Apps",
    description:
      "One identity for every app in the organization — shared login across the feedback system and the Citizen's Charter web portal, designed to grow into an OAuth-style identity provider.",
    problem:
      "Every org app kept its own user store. Staff juggled separate logins per system, and admins provisioned the same person over and over.",
    solution:
      "A central identity service: one account, JWT sessions, Argon2id password hashing, and email flows — consumed by the feedback system and the CC portal today, with an OAuth-style provider model on the roadmap so any future app can delegate login to it.",
    outcomes: [
      "Single sign-on across the organization's apps",
      "One user store to administer instead of one per app",
      "SSO-ready architecture for future systems",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "JWT", "Argon2id", "Zod"],
    featured: true,
  },
  {
    id: "leave",
    image: "/projects/leave-tracker.svg",
    liveUrl: "https://leave-tracker-sable.vercel.app",
    type: "HR · Leave Management",
    title: "Leave Tracker",
    description:
      "My daily driver for leave management — credit balances, applications, and approvals in one place, with official Form 6 PDFs generated on the spot.",
    problem:
      "Leave applications moved on paper: forms filled by hand, supervisors signed, HR re-encoded everything. Balances lived in someone's spreadsheet — always out of date.",
    solution:
      "Digital leave requests with approval tracking, automatic balance computation across leave types (vacation, sick, privilege, wellness), an accrual audit trail, and one-click PDF generation of the official Form 6 via pdf-lib. NextAuth sign-in, Prisma + libSQL, scheduled accruals with node-cron. I open it daily.",
    outcomes: [
      "Real balances and applications tracked daily — no spreadsheet reconciliation",
      "Accrual increments audited with reasons (e.g. mid-year credit resets)",
      "Official Form 6 and DTS receipts printed directly from the app",
    ],
    tech: ["Next.js", "NextAuth", "Prisma", "libSQL", "pdf-lib", "node-cron"],
    repoUrl: "https://github.com/halords/leave-tracker",
  },
  {
    id: "ld",
    image: "/projects/lnd-forms.svg",
    liveUrl: "https://lnd-form.vercel.app",
    type: "Training · Forms",
    title: "L&D Form Builder",
    description:
      "Form templates and training events for the province's Learning & Development program — build once, distribute by shortlink, collect submissions centrally.",
    problem:
      "Training assessments were static paper forms. Creating them took hours, collecting responses took weeks, and analyzing results meant tallying by hand.",
    solution:
      "Reusable form templates (training evaluations, needs assessments) with edit, preview, duplicate, and publish controls; training events that distribute via shortlink; centralized submission collection; plus user management and training archives.",
    outcomes: [
      "Reusable templates replace rebuilding forms for every training",
      "Shortlink distribution with centralized response collection",
      "Full lifecycle in one portal: templates → events → submissions → archives",
    ],
    tech: ["Next.js"],
  },
  {
    id: "ambagan",
    image: "/projects/ambagan.svg",
    liveUrl: "https://ambagan-web.vercel.app",
    type: "Finance · Travel · Web",
    title: "Ambagan — Travel Expense Splitter",
    description:
      "Group travel expense splitting for real trips — an integer-based calculation engine guarantees every split reconciles to the exact centavo, with strict member-only authorization.",
    problem:
      "Splitting group travel expenses meant messy chat threads and disputed math. Nobody wanted to be the accountant.",
    solution:
      "A Turborepo + pnpm monorepo: add expenses, auto-compute who owes whom with zero rounding drift, and generate transparent receipts showing direct net payables between members. Only verified trip members can mutate expenses or budgets. Google sign-in.",
    outcomes: [
      "Integer-based math engine — splits always reconcile exactly",
      "Member-only authorization on every expense mutation",
      "Transparent receipts with direct net payables",
    ],
    tech: ["Next.js", "Turborepo", "pnpm", "TypeScript"],
    featured: true,
  },
  {
    id: "doceditor",
    image: "/projects/nexusdocs.svg",
    liveUrl: "https://web-editor-phi.vercel.app",
    type: "Documents · Search · Cloud",
    title: "NexusDocs — Personal Document Cloud",
    description:
      "My daily document hub — I create, search, and print my documents from anywhere with internet. No more opening Word files and scrolling through pages to find things.",
    problem:
      "Documents lived scattered across Word files. Finding anything meant opening file after file and scrolling — and printing required being at the right computer.",
    solution:
      "A strictly template-driven editor: upload a PDF or image template as the immutable background, then overlay interactive text, images, and tables on a Konva canvas — every object stored as structured JSON, editable with Tiptap rich text. Full-text search across everything created, and printing from any device. State managed with Zustand, persisted to Turso/libSQL.",
    outcomes: [
      "Used daily — search replaces scrolling through Word files",
      "Create and print documents from anywhere with internet",
      "Templates keep recurring documents consistent",
    ],
    tech: [
      "Next.js 16",
      "Konva.js",
      "Tiptap",
      "Turso/libSQL",
      "Zustand",
      "Tailwind CSS v4",
    ],
  },
  {
    id: "booking",
    image: "/projects/booking.svg",
    liveUrl: "https://booking-blond-chi.vercel.app",
    type: "Hospitality · CRM · Hobby",
    title: "Cozy Stays — Direct Booking CRM",
    description:
      "A host portal for a vacation-rental business: verification queue, booking logs, calendars, and guest automation — built as the CRM front-end for n8n automation workflows.",
    problem:
      "Direct bookings came through chat threads and spreadsheets — payments unverified, no audit trail, and follow-up emails sent by hand.",
    solution:
      "A host verification dashboard with a payment review queue, searchable booking master logs with settlement tracking, per-property availability calendars, PayMongo payment gateway integration, and automated guest email triggers (confirmation, check-in instructions, review requests). Multi-channel intake across direct web and Telegram.",
    outcomes: [
      "End-to-end booking ops: verification → settlement → review",
      "Full audit trail of booking events (OTP, submission, confirmation)",
      "Designed to pair with n8n workflow automation",
    ],
    tech: ["Next.js", "PayMongo"],
  },
  {
    id: "printerpos",
    type: "POS · Desktop · Hobby",
    title: "PrintShop Manager — Offline POS & Licensing",
    description:
      "An offline-first point-of-sale, ID photo studio, and job-order pipeline for a print shop — with Ed25519 hardware-bound licensing so the software itself is a product.",
    problem:
      "A print shop runs on counter sales, ID photos, and job orders — three disconnected workflows, plus no way to license the software per machine.",
    solution:
      "A Turborepo monorepo: a Tauri v2 desktop POS client (React 18 + TypeScript) that runs 100% offline, a FastAPI + OpenCV vision sidecar for AI ID photo processing (face detection, auto-crop, background removal), an 11-step job-order pipeline from NEW to RELEASED, dynamic pricing calculators, and a Next.js licensing portal with Ed25519 signatures bound to hardware fingerprints.",
    outcomes: [
      "100% offline-first daily operations — zero internet dependency",
      "AI ID photo suite: face detection, 70–75% head-height auto-crop, 300 DPI output",
      "Cryptographic per-machine licensing (Ed25519 + hardware binding)",
    ],
    tech: ["Tauri v2", "React 18", "TypeScript", "FastAPI", "OpenCV", "Next.js 14", "Drizzle", "Turso"],
  },
];
