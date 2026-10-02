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
    title: "AI-Powered Customer Feedback System",
    description:
      "In production use at the Provincial Government of La Union — citizen feedback is collected, AI-classified for sentiment, and trended automatically instead of being read and tallied by hand.",
    problem:
      "Citizen feedback arrived as paper forms and online submissions. Reading and categorizing everything manually meant insights arrived months late — or never.",
    solution:
      "A unified collection platform with an AI pipeline: Ollama Claude classifies sentiment and detects trends, with Gemini as fallback. Role-based dashboards surface what's actually going wrong, while it's still fixable.",
    outcomes: [
      "Running in the workplace — real citizen feedback, analyzed daily",
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
      "Used in the workplace to streamline Citizen's Charter generation, revision, and compliance — and citizens can now access services interactively instead of visiting offices blind.",
    problem:
      "Producing and revising the Citizen's Charter was a manual, document-heavy process, and staying compliant meant constant re-checking. Citizens had no way to interact with services before visiting in person.",
    solution:
      "A structured-data platform: charter content is authored once, then generated into a public portal and Puppeteer-rendered printable versions. Revision workflows keep everything compliant, and clients access services interactively, 24/7.",
    outcomes: [
      "Charter generation and revision centralized in one system",
      "Compliance tracking built into the workflow",
      "Interactive client access — fewer wasted office visits",
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
      "My daily driver for leave management — applications, approvals, and leave credit balances in one place, with official-form PDFs generated on the spot.",
    problem:
      "Leave applications moved on paper: forms filled by hand, supervisors signed, HR re-encoded everything. Balances lived in someone's spreadsheet — always out of date.",
    solution:
      "Digital leave requests with multi-level approval workflows, automatic balance computation, and one-click PDF generation of the official leave form via pdf-lib. Backed by Turso/libSQL with Prisma. I open it daily.",
    outcomes: [
      "Used daily — real leave applications and credit tracking",
      "Balances always current, no spreadsheet reconciliation",
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
    image: "/projects/nexusdocs.svg",
    liveUrl: "https://web-editor-phi.vercel.app",
    type: "Documents · Search · Cloud",
    title: "NexusDocs — Personal Document Cloud",
    description:
      "My daily document hub — I create, search, and print my documents from anywhere with internet. No more opening Word files and scrolling through pages to find things.",
    problem:
      "Documents lived scattered across Word files. Finding anything meant opening file after file and scrolling — and printing required being at the right computer.",
    solution:
      "A personal document cloud: rich-text editing with Tiptap, canvas-based template composition with Konva.js, full-text search across everything I've created, and printing from any device. State managed with Zustand, persisted to Turso/libSQL.",
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
];
