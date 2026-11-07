import { Mail } from "lucide-react";
import { person } from "@/data/person";

type ContactCTAProps = {
  text: string;
  className?: string;
};

export function ContactCTA({ text, className }: ContactCTAProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-4 border-y border-hairline py-6 ${className ?? ""}`}
    >
      <p className="font-display text-[22px] leading-snug text-charcoal">
        {text}
      </p>
      <a
        href={`mailto:${person.email}`}
        className="inline-flex min-h-11 items-center gap-2 bg-charcoal px-5 font-mono text-[12px] uppercase tracking-[0.16em] text-bone transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-bone focus-visible:outline-offset-2 motion-reduce:transition-none"
      >
        <Mail size={14} aria-hidden="true" />
        Email me
      </a>
    </div>
  );
}

export default ContactCTA;
