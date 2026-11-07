import { person } from "@/data/person";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-bone/15 bg-charcoal text-bone">
      <div className="section-container flex flex-wrap items-center justify-between gap-4 py-7">
        <p className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-bone/60">
          © {new Date().getFullYear()} {person.name} · {person.title} · City of San
          Fernando, La Union
        </p>
        <a
          href="#hero"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.14em] text-bone/60 transition-colors hover:text-bone focus-ring-dark"
        >
          Back to top
          <ArrowUp size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
