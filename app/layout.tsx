import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "halords — Harold Erick Jamora · Full-Stack Developer",
  description:
    "halords is the studio site of Harold Erick Jamora, full-stack developer at the Provincial Government of La Union. Production systems, workflow automation, and AI integration — software people actually use every day.",
  openGraph: {
    title: "halords — Harold Erick Jamora",
    description: "I build web applications that automate real workflows.",
    url: "https://haroldjamora.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  keywords: [
    "halords",
    "Harold Jamora",
    "La Union developer",
    "Next.js",
    "government IT",
    "civic tech Philippines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
