"use client";

import { Logo } from "@/components/brand/Logo";
import { person } from "@/data/person";

const siteLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Background", href: "#career" },
];

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white/60">
      <div className="section-container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#hero" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Logo size={34} />
            <span className="font-mono text-xl font-semibold tracking-tight text-white">
              halords<span className="text-gold">.</span>
            </span>
          </a>
          <p className="mt-4 text-[14px] italic leading-relaxed text-white/50">
            &ldquo;{person.tagline}&rdquo;
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
              Site
            </div>
            <ul className="space-y-2.5">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] text-white/60 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
              Contact
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${person.email}`} className="text-[14px] text-white/60 hover:text-gold transition-colors">
                  {person.email}
                </a>
              </li>
              <li className="text-[14px] text-white/60">{person.phoneFormatted}</li>
              <li className="text-[14px] text-white/60">{person.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="section-container py-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
          © 2026 halords · designed &amp; built by {person.name}
        </p>
      </div>
    </footer>
  );
}
