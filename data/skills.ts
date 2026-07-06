export interface SkillGroup {
  title: string;
  variant: "sage" | "gold";
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Government & Administration",
    variant: "sage",
    items: [
      "ISO 9001:2015 QMS",
      "Citizen's Charter",
      "Records Management",
      "Compliance Reporting",
      "Stakeholder Liaison",
      "Performance Reports",
    ],
  },
  {
    title: "Development & Technical",
    variant: "gold",
    items: [
      "Next.js / React",
      "PostgreSQL / SQLite",
      "Prisma ORM",
      "Google APIs",
      "AI Integration",
      "Excel / PDF Export",
    ],
  },
];

export const certifications = [
  {
    title: "Google Data Analytics Certificate",
    status: "In progress",
    icon: "📜",
  },
];
