export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  proofLabel: string;
  proofHref: string;
}

export const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    tagline: "Production web apps, end to end",
    description: "Custom web applications built with Next.js, React, PostgreSQL, and Prisma — from database schema to deployed production. Dashboards, portals, internal tools, and public-facing sites.",
    deliverables: [
      "Next.js / React applications with PostgreSQL + Prisma",
      "Authentication & role-based access (NextAuth)",
      "Admin dashboards and reporting interfaces",
      "Deployed, documented, and handover-ready",
    ],
    proofLabel: "Proof: the IAM Console runs login for the office's other systems",
    proofHref: "#work-iam",
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    tagline: "Practical AI inside real workflows",
    description: "AI features that do actual work: sentiment classification, trend detection, AI-assisted content, and chat interfaces — wired into your existing systems, not demo toys.",
    deliverables: [
      "Sentiment analysis & text classification pipelines",
      "AI-assisted content and question generation",
      "Chat interfaces over your own data",
      "Ollama (self-hosted) or Gemini / cloud models",
    ],
    proofLabel: "Proof: the AI Feedback System classifies citizen feedback in production",
    proofHref: "#work-feedback",
  },
  {
    id: "automation",
    title: "Internal Tools & Workflow Automation",
    tagline: "Kill the spreadsheet shuffle",
    description: "I find the manual work hiding in your operations — re-typing between sheets, hand-assembled reports, email-chased approvals — and replace it with systems that run themselves.",
    deliverables: [
      "Google Sheets / Workspace automation & integrations",
      "Approval workflows with audit trails",
      "Web scraping & data pipelines (Puppeteer)",
      "Digitized paper processes with role-based routing",
    ],
    proofLabel: "Proof: document revisions route themselves in the DRRF system",
    proofHref: "#work",
  },
  {
    id: "documents",
    title: "Document Automation",
    tagline: "Reports and PDFs that generate themselves",
    description: "Official forms, summaries, and recurring reports assembled by code instead of by hand — Excel and PDF pipelines that pull from live data and come out print-ready.",
    deliverables: [
      "One-click Excel & PDF report generation (ExcelJS, pdf-lib)",
      "Official-form generation from live data (e.g. leave Form 6)",
      "Print rendering pipelines (Puppeteer)",
      "Scheduled generation and archival",
    ],
    proofLabel: "Proof: the Leave Tracker prints the official Form 6 in one click",
    proofHref: "#work",
  },
];
