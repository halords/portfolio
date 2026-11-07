"use client";

import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { person } from "@/data/person";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#va", label: "VA & Admin" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

const focusStyles =
  "focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bone">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          className={`flex min-h-11 items-baseline gap-3 ${focusStyles}`}
          onClick={() => setOpen(false)}
        >
          <span className="font-mono text-[15px] font-medium tracking-[0.08em] text-charcoal">
            halords
          </span>
          <span className="hidden text-[13px] text-faded md:inline">
            Harold Erick M. Jamora
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-11 items-center font-mono text-[12px] uppercase tracking-[0.16em] text-charcoal-soft transition-colors hover:text-accent motion-reduce:transition-none ${focusStyles}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`mailto:${person.email}`}
            className={`hidden min-h-11 items-center gap-2 border border-charcoal px-4 font-mono text-[12px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone motion-reduce:transition-none sm:inline-flex ${focusStyles}`}
          >
            <Mail size={14} aria-hidden="true" />
            Email me
          </a>

          <button
            type="button"
            className={`inline-flex min-h-11 min-w-11 items-center justify-center text-charcoal lg:hidden ${focusStyles}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-hairline lg:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              event.currentTarget.parentElement
                ?.querySelector<HTMLButtonElement>(
                  'button[aria-controls="mobile-nav"]',
                )
                ?.focus();
            }
          }}
        >
          <div className="section-container flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center font-mono text-[13px] uppercase tracking-[0.16em] text-charcoal ${focusStyles}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${person.email}`}
              className={`flex min-h-11 items-center py-2 font-mono text-[13px] uppercase tracking-[0.16em] text-accent ${focusStyles}`}
              onClick={() => setOpen(false)}
            >
              <span className="min-w-0 [overflow-wrap:anywhere]">
                Email me — {person.email}
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}