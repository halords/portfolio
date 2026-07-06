export interface CareerEntry {
  year: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
  badge?: string;
  badgeVariant?: "sage" | "gold";
  isCurrent?: boolean;
}

export const career: CareerEntry[] = [
  {
    year: "Apr 2024 – Present",
    role: "Administrative Officer II",
    org: "Provincial Government of La Union — Governor's Office",
    description:
      "Currently managing information systems, ISO 9001:2015 QMS documentation, and digital transformation initiatives for the provincial government. Leading the development of internal web applications that streamline government operations and improve service delivery.",
    tags: [
      "ISO 9001:2015",
      "Systems Development",
      "Digital Transformation",
      "Records Management",
    ],
    badge: "Current role",
    badgeVariant: "sage",
    isCurrent: true,
  },
  {
    year: "Dec 2021 – Apr 2024",
    role: "Administrative Assistant IV",
    org: "Provincial Government of La Union — Governor's Office",
    description:
      "Handled administrative and systems management functions. Coordinated Citizen's Charter compliance, stakeholder liaison, and performance reporting across multiple provincial offices. Recognized as one of the Ten Outstanding Provincial Public Servants in 2022.",
    tags: [
      "Citizen's Charter",
      "Compliance",
      "Stakeholder Liaison",
      "Performance Reports",
    ],
    badge: "Ten Outstanding Servant · 2022",
    badgeVariant: "gold",
  },
  {
    year: "Feb 2018 – Dec 2021",
    role: "Administrative Aide IV",
    org: "Provincial Government of La Union — HRMU",
    description:
      "Provided administrative support within the Human Resource Management Unit. Managed personnel records, processed documentation, and assisted with recruitment and training coordination.",
    tags: ["HR Support", "Personnel Records", "Recruitment", "Training"],
  },
  {
    year: "Oct – Dec 2017",
    role: "Data Entry Specialist",
    org: "DENR Region I",
    description:
      "Handled data encoding and records digitization for the Department of Environment and Natural Resources. Ensured accuracy and consistency of environmental compliance records.",
    tags: ["Data Entry", "Records Digitization", "Environmental Compliance"],
  },
  {
    year: "May – Jun 2017",
    role: "Administrative Aide II (Trainee)",
    org: "Department of Agriculture",
    description:
      "On-the-job training position that introduced foundational government processes, document management, and regulatory workflows in the agricultural sector.",
    tags: ["OJT", "Document Management", "Government Processes"],
  },
];
