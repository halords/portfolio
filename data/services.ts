export interface Service {
  id: string;
  /** lucide-react icon name key used by the Services section */
  icon: "code" | "bot" | "workflow" | "clipboard";
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "fullstack",
    icon: "code",
    title: "Full-Stack Web Development",
    tagline: "Production web apps, end to end",
    description:
      "Custom web applications built with Next.js, React, PostgreSQL, and Prisma — from database schema to deployed production. Dashboards, portals, internal tools, and public-facing sites.",
    deliverables: [
      "Next.js / React applications with PostgreSQL + Prisma",
      "Authentication & role-based access (NextAuth)",
      "Admin dashboards and reporting interfaces",
      "Deployed, documented, and handover-ready",
    ],
  },
  {
    id: "ai",
    icon: "bot",
    title: "AI Integration",
    tagline: "Practical AI inside real workflows",
    description:
      "AI features that do actual work: sentiment classification, trend detection, AI-generated content, and chat interfaces — wired into your existing systems, not demo toys.",
    deliverables: [
      "Sentiment analysis & text classification pipelines",
      "AI-assisted content and question generation",
      "Chat interfaces over your own data",
      "Ollama (self-hosted) or Gemini / cloud models",
    ],
  },
  {
    id: "automation",
    icon: "workflow",
    title: "Workflow Automation",
    tagline: "Kill the spreadsheet shuffle",
    description:
      "I find the manual work hiding in your operations — re-typing between sheets, hand-assembled reports, email-chased approvals — and replace it with systems that run themselves.",
    deliverables: [
      "Google Sheets / Workspace automation & integrations",
      "One-click Excel & PDF report generation",
      "Approval workflows with audit trails",
      "Web scraping & data pipelines (Puppeteer)",
    ],
  },
  {
    id: "va-systems",
    icon: "clipboard",
    title: "VA & Admin Systems",
    tagline: "Operations support that scales",
    description:
      "Eight years inside government administration means I speak records, compliance, and reporting fluently. I build the systems — and can operate them — for teams drowning in admin work.",
    deliverables: [
      "Records management & digitization systems",
      "Compliance & performance reporting",
      "Data entry pipelines with validation",
      "Documentation (ISO 9001:2015, Citizen's Charter)",
    ],
  },
];
