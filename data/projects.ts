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
    id: "pdr",
    image: "/projects/pdr.svg",
    type: "Attendance · Reporting · Automation",
    title: "Personnel Discipline Report System",
    description:
      "Turned a manual attendance-tracking and discipline-reporting chore into an automated pipeline — pulls raw data from Google Sheets and produces compliance-ready Excel reports in one click.",
    problem:
      "Monthly discipline reports were assembled by hand: copying attendance data between spreadsheets, formatting it, and re-checking formulas. Slow, error-prone, and repeated every single month.",
    solution:
      "Automated ingestion from Google Sheets API v4, server-side report assembly with ExcelJS, and one-click downloads of formatted compliance reports. Integrated with internal PGLU APIs so the data flows without re-typing.",
    outcomes: [
      "Monthly reporting reduced from days of manual assembly to minutes",
      "Eliminated copy-paste errors between source data and final reports",
      "Consistent, audit-ready formatting every cycle",
    ],
    tech: [
      "Next.js 15",
      "Google Sheets API v4",
      "ExcelJS",
      "PGLU Internal APIs",
      "Framer Motion",
    ],
  },
  {
    id: "feedback",
    image: "/projects/feedback.svg",
    type: "Feedback · AI · Analytics",
    title: "AI-Powered Customer Feedback System",
    description:
      "Feedback collection plus automatic sentiment classification and trend detection — thousands of citizen responses analyzed by AI instead of read one by one.",
    problem:
      "Citizen feedback arrived as paper forms and online submissions. Reading and categorizing them manually meant insights arrived months late — or never.",
    solution:
      "A unified collection platform with an AI pipeline: Ollama Claude classifies sentiment and detects trends, with Gemini as fallback. Role-based dashboards surface what's actually going wrong, while it's still fixable.",
    outcomes: [
      "Automated sentiment classification across all feedback channels",
      "Trend detection flags recurring service issues early",
      "Role-based access keeps raw responses visible only to authorized staff",
    ],
    tech: ["Next.js", "Ollama Claude", "Gemini AI", "PostgreSQL", "Prisma", "NextAuth"],
    featured: true,
    repoUrl: "https://github.com/halords/feedback",
  },
  {
    id: "cc",
    image: "/projects/cc.svg",
    type: "Public-Facing · Civic Tech",
    title: "PGLU Citizen's Charter Portal",
    description:
      "The province's Citizen's Charter as a fast public web portal — every government service, its requirements, and processing times, accessible to any citizen with a phone.",
    problem:
      "The Citizen's Charter existed as printed documents inside offices. Citizens couldn't check requirements or processing times before visiting — leading to wasted trips and long queues.",
    solution:
      "A public Next.js portal publishing every service's requirements, fees, and processing times, generated from structured data with Puppeteer-rendered printable versions. Built as a Turborepo monorepo for shared components.",
    outcomes: [
      "Charter information accessible 24/7 from any device",
      "Printable service guides generated directly from the same data",
      "Fewer incomplete applications and repeat office visits",
    ],
    tech: [
      "Next.js 15",
      "Turborepo",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Puppeteer",
    ],
    featured: true,
  },
  {
    id: "leave",
    image: "/projects/leave.svg",
    type: "HR · Leave Management",
    title: "Leave Tracker",
    description:
      "Leave requests, approval workflows, balance tracking, and government-form PDF generation — one system replacing the paper leave forms circulating between departments.",
    problem:
      "Leave applications moved on paper: employees filled forms by hand, supervisors signed, HR re-encoded everything. Balances lived in someone's spreadsheet.",
    solution:
      "Digital leave requests with multi-level approval workflows, automatic balance computation, and one-click PDF generation of the official leave form via pdf-lib. Backed by Turso/libSQL with Prisma.",
    outcomes: [
      "End-to-end digital leave workflow — request to approval to PDF",
      "Automatic balance tracking eliminates spreadsheet reconciliation",
      "Official-form PDFs generated directly from approved requests",
    ],
    tech: ["Next.js", "Turso/libSQL", "Prisma", "pdf-lib", "NextAuth"],
    repoUrl: "https://github.com/halords/leave-tracker",
  },
  {
    id: "ld",
    image: "/projects/ld.svg",
    type: "Training · Analytics",
    title: "L&D Form Builder",
    description:
      "A dynamic form builder for training assessments with AI-generated questions, real-time collaboration, and analytics dashboards — built for the province's Learning & Development program.",
    problem:
      "Training assessments were static paper forms. Creating them took hours, collecting responses took weeks, and analyzing results meant tallying by hand.",
    solution:
      "Drag-and-drop form builder with AI-generated question suggestions (Ollama Cloud), real-time collaboration via Pusher, and Recharts analytics dashboards. Printable versions via Puppeteer.",
    outcomes: [
      "Assessment creation time cut from hours to minutes with AI assist",
      "Real-time response collection and live analytics dashboards",
      "Printable PDF versions for blended paper/digital workflows",
    ],
    tech: ["Next.js", "Ollama Cloud", "Pusher", "Recharts", "Puppeteer", "Turso/libSQL", "NextAuth"],
  },
  {
    id: "ambagan",
    image: "/projects/ambagan.svg",
    type: "Finance · Travel · Mobile",
    title: "Ambagan — Travel Expense Splitter",
    description:
      "Group travel expense splitting across web and mobile — real-time calculations and shareable expense reports, built as a monorepo with React Native via Expo.",
    problem:
      "Splitting group travel expenses meant messy chat threads and disputed math. Nobody wanted to be the accountant.",
    solution:
      "A monorepo (Turborepo + pnpm) shipping web and native mobile from one codebase: add expenses, auto-compute who owes whom, and share the settled report. Google OAuth for sign-in.",
    outcomes: [
      "One codebase shipping to web, Android, and iOS via Expo",
      "Real-time settlement math — no more disputed splits",
      "Shareable expense reports for the whole group",
    ],
    tech: ["Next.js", "Turborepo", "pnpm monorepo", "TypeScript", "Ollama Cloud", "React Native", "Expo", "Android", "Web", "Google OAuth"],
    featured: true,
  },
  {
    id: "doceditor",
    image: "/projects/doceditor.svg",
    type: "Document Editor · Canvas",
    title: "Template-Based Document Editor",
    description:
      "Visual document composition with reusable templates — drag-and-drop canvas editing (Konva.js) combined with rich text (Tiptap), so repeat documents start from a template instead of a blank page.",
    problem:
      "Recurring office documents were rebuilt from scratch every time in Word — inconsistent formatting, no templates, no structure.",
    solution:
      "A canvas-based editor pairing Konva.js visual editing with Tiptap rich text. Templates define the structure; users drag, drop, and fill. State managed with Zustand, persisted to Turso/libSQL.",
    outcomes: [
      "Reusable templates enforce consistent document structure",
      "Visual drag-and-drop editing — no design skills required",
      "Structured storage makes documents searchable and reusable",
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
];
