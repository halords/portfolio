export interface Project {
  id: string;
  icon: string;
  iconVariant: "sage" | "gold";
  type: string;
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  wide?: boolean;
}

export const projects: Project[] = [
  {
    id: "drrrf",
    icon: "📄",
    iconVariant: "sage",
    type: "Document Management · Routing",
    title: "Document Revision Request System (DRRS)",
    description:
      "A robust, role-based document management and routing system built to streamline the process of ISO Procedures revision. Digitizes the workflow for proposing, reviewing, and approving document revisions with automated routing and real-time updates.",
    tech: ["Next.js", "Prisma", "Tailwind CSS", "SWR", "NextAuth.js"],
    featured: true,
  },
  {
    id: "pdr",
    icon: "📊",
    iconVariant: "sage",
    type: "Attendance · Reporting · Gov't",
    title: "Personnel Discipline Report System",
    description:
      "Automated attendance tracking and discipline reporting system for the Provincial Government. Pulls data from Google Sheets, generates compliance reports with ExcelJS, and integrates with internal PGLU APIs for seamless workflow.",
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
    icon: "💬",
    iconVariant: "sage",
    type: "Feedback · AI · Management",
    title: "Customer Feedback System",
    description:
      "AI-powered feedback collection and analysis platform. Uses Ollama Claude as the primary AI model with Gemini as fallback for sentiment classification and trend detection, with role-based access control via NextAuth.",
    tech: ["Next.js", "Ollama Claude", "Gemini AI", "PostgreSQL", "Prisma", "NextAuth"],
    featured: true,
  },
  {
    id: "cc",
    icon: "🏛️",
    iconVariant: "sage",
    type: "Public-Facing · Civic Tech",
    title: "PGLU Citizen's Charter Web",
    description:
      "Public-facing web portal for the Provincial Government's Citizen's Charter — making government services transparent and accessible to every citizen of La Union.",
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
    icon: "📅",
    iconVariant: "gold",
    type: "HR · Leave Management",
    title: "Leave Tracker",
    description:
      "Streamlined leave management system with automated PDF generation for leave forms, approval workflows, and balance tracking across departments.",
    tech: ["Next.js", "Turso/libSQL", "Prisma", "pdf-lib", "NextAuth"],
  },
  {
    id: "ld",
    icon: "📋",
    iconVariant: "gold",
    type: "Training · Analytics",
    title: "L&D Form Builder",
    description:
      "Dynamic form builder for Learning & Development assessments. Features AI-generated questions, real-time collaboration via Pusher, and analytics dashboards with Recharts.",
    tech: ["Next.js", "Ollama Cloud", "Pusher", "Recharts", "Puppeteer", "Turso/libSQL", "NextAuth"],
  },
  {
    id: "ambagan",
    icon: "✈️",
    iconVariant: "gold",
    type: "Finance · Travel · Collaboration",
    title: "Ambagan – Travel Expense Splitter",
    description:
      "Collaborative travel expense splitting app built as a monorepo. Simplifies group travel accounting with real-time calculations and shareable expense reports.",
    tech: ["Next.js", "Turborepo", "pnpm monorepo", "TypeScript", "Ollama Cloud", "React Native", "Expo", "Android", "Web", "Google OAuth"],
    featured: true,
  },
  {
    id: "doceditor",
    icon: "✏️",
    iconVariant: "gold",
    type: "Document Editor · Canvas",
    title: "Template-Based Document Editor",
    description:
      "Canvas-based document editor with template support. Combines Konva.js for visual editing with Tiptap for rich text, enabling drag-and-drop document composition with reusable templates.",
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
