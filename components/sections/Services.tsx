import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/ui/ContactCTA";

export function Services() {
  return (
    <section
      id="services"
      className="section-container scroll-mt-20 py-20 lg:py-28"
    >
      <Reveal>
        <SectionHeading
          index="02"
          eyebrow="Services — development"
          title="What I can build for you"
        />
        <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-charcoal-soft">
          Four offers, each already proven on a system in production — the proof
          link under each one points at the real thing.
        </p>
      </Reveal>

      <div className="mt-12">
        {services.map((s, i) => (
          <Reveal key={s.id}>
            <article className="grid gap-6 border-t border-hairline py-9 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <span className="font-mono text-[13px] font-medium text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-[26px] leading-tight text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.14em] text-faded">
                  {s.tagline}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[15.5px] leading-relaxed text-charcoal-soft">
                  {s.description}
                </p>
                <a
                  href={s.proofHref}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-accent hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {s.proofLabel}
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>

              <ul className="space-y-2 lg:col-span-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-[14px] leading-relaxed text-charcoal-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <ContactCTA text="Have a workflow that eats your team's week? That's the brief I work best from." />
      </Reveal>
    </section>
  );
}
