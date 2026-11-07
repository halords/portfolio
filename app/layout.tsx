import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/nav/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Harold Erick Jamora — Full-Stack Developer (Next.js · AI Integration)";
const socialDescription =
  "Production Next.js systems, AI integration, and internal tools — plus administrative & VA services backed by 8 years in government operations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-three-smoky-nsmn4d28em.vercel.app"),
  title: {
    default: title,
    template: "%s · Harold Erick Jamora",
  },
  description:
    "Full-stack developer in La Union, Philippines. I build production Next.js systems, AI integrations, and internal tools that automate document-heavy work — 7 systems running in production for the Provincial Government of La Union. Available part-time for remote work.",
  keywords: [
    "Harold Erick Jamora",
    "halords",
    "Next.js developer Philippines",
    "full-stack developer",
    "AI integration",
    "internal tools",
    "workflow automation",
    "virtual assistant Philippines",
  ],
  authors: [{ name: "Harold Erick Jamora" }],
  openGraph: {
    type: "website",
    siteName: "Harold Erick Jamora — Portfolio",
    title,
    description: socialDescription,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-bone text-charcoal font-sans antialiased">
        <a
          href="#main"
          className="sr-only font-mono text-xs focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:min-w-11 focus:items-center focus:bg-bone focus:px-4 focus:py-2 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}