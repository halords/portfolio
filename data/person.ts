export interface Person {
  name: string;
  firstName: string;
  brand: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  resumeUrl: string;
  githubUrl: string;
  availability: string;
  availabilityDetail: string;
  bio: string[];
}

export const person: Person = {
  name: "Harold Erick M. Jamora",
  firstName: "Harold Erick",
  brand: "halords",
  title: "Full-Stack Developer",
  tagline: "I build production web systems — and automate the work around them.",
  location: "City of San Fernando, La Union, Philippines",
  email: "haroldjamora08@gmail.com",
  phone: "+63 975 634 3810",
  phoneDisplay: "0975 634 3810",
  resumeUrl: "http://haroldjamora.jobs180.com",
  githubUrl: "https://github.com/halords",
  availability: "Part-time · 15–20 hrs/week · UTC+8",
  availabilityDetail:
    "Mon–Thu evenings from 19:00 PHT (11:00 UTC) · Fridays flexible · async-first, daily written updates",
  bio: [
    "I'm a full-stack developer specializing in Next.js, React, PostgreSQL, and Prisma — and for eight years I've worked inside the Provincial Government of La Union, where I don't just administer workflows, I rebuild them as software. Seven of my systems are in production there today, including an AI-assisted feedback platform and the single sign-on console the other apps share.",
    "That operations background is my edge as a developer: I understand records, compliance, approvals, and reporting from the inside — which is exactly what makes internal tools, automations, and AI integrations succeed or fail. I was named one of the Ten Outstanding Provincial Public Servants in 2022.",
  ],
};