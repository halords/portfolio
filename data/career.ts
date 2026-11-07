export interface CareerEntry {
  year: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
  badge?: string;
  isCurrent?: boolean;
}

export const career: CareerEntry[] = [
  {
    year: "Aug 2026 – Present",
    role: "Administrative Officer III",
    org: "Provincial Government of La Union — Governor's Office · designated Records Officer II",
    description: "Leading digital records and office automation for the province. I keep the IAM Console single sign-on, the AI Customer Feedback System, and the Citizen's Charter portal running in production, and own ISO 9001:2015 documentation for the office.",
    tags: ["Digital Records", "Office Automation", "IAM / SSO", "Systems in Production"],
    badge: "Current role",
    isCurrent: true,
  },
  {
    year: "Apr 2024 – Aug 2026",
    role: "Administrative Officer II",
    org: "Provincial Government of La Union — Governor's Office",
    description: "Managed information systems, ISO 9001:2015 QMS documentation, and digital transformation initiatives — the period when most of the seven production systems were designed and shipped.",
    tags: ["ISO 9001:2015", "Systems Development", "Digital Transformation", "Records Management"],
  },
  {
    year: "Dec 2021 – Apr 2024",
    role: "Administrative Assistant IV",
    org: "Provincial Government of La Union — Governor's Office",
    description: "Handled administrative and systems management functions. Coordinated Citizen's Charter compliance, stakeholder liaison, and performance reporting across multiple provincial offices. Recognized as one of the Ten Outstanding Provincial Public Servants in 2022.",
    tags: ["Citizen's Charter", "Compliance", "Stakeholder Liaison", "Performance Reports"],
    badge: "Ten Outstanding Provincial Servants · 2022",
  },
  {
    year: "Feb 2018 – Dec 2021",
    role: "Administrative Aide IV",
    org: "Provincial Government of La Union — HRMU",
    description: "Administrative support within the Human Resource Management Unit: personnel records, documentation processing, recruitment and training coordination.",
    tags: ["HR Support", "Personnel Records", "Recruitment", "Training"],
  },
  {
    year: "Oct – Dec 2017",
    role: "Data Entry Specialist",
    org: "DENR Region I",
    description: "Data encoding and records digitization for the Department of Environment and Natural Resources — accuracy and consistency of environmental compliance records.",
    tags: ["Data Entry", "Records Digitization"],
  },
  {
    year: "May – Jun 2017",
    role: "Administrative Aide II (Trainee)",
    org: "Department of Agriculture",
    description: "On-the-job training: foundational government processes, document management, and regulatory workflows.",
    tags: ["Document Management", "Government Processes"],
  },
];
