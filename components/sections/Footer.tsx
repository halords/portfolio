"use client";

import { person } from "@/data/person";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="section-container">
        <p className="text-center text-[12.5px] text-ink-muted">
          {person.name} · {person.title} &amp; Developer · {person.org} ·{" "}
          {person.location}
        </p>
      </div>
    </footer>
  );
}
