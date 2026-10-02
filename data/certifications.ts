export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialId: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    date: "Sep 2026",
    skills: ["Spreadsheets", "SQL", "Tableau", "Python", "Data visualization"],
    credentialId: "KRPDLU4SREXX",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google · Coursera",
    date: "Aug 2026",
    skills: ["AI fundamentals", "Prompting", "AI for data analysis", "AI app building"],
    credentialId: "9WO3SHMI67EP",
  },
];
