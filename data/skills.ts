export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Development & Technical",
    items: [
      "Next.js / React / TypeScript",
      "PostgreSQL · Prisma ORM",
      "NextAuth & role-based access",
      "AI integration (Ollama, Gemini)",
      "Excel / PDF generation (ExcelJS, pdf-lib)",
      "Google APIs & Workspace automation",
      "Data pipelines (Puppeteer)",
      "Turso / libSQL",
    ],
  },
  {
    title: "Operations & Compliance",
    items: [
      "ISO 9001:2015 QMS",
      "Citizen's Charter",
      "Records management",
      "Compliance reporting",
      "Stakeholder liaison",
      "Performance reports",
    ],
  },
];
