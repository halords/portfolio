import { ArrowDown } from "lucide-react";
import { vaIntro, vaGroups, vaCredentials } from "@/data/va";
import { person } from "@/data/person";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function VAServices() {
  return (
    <section
      id="va"
      className="scroll-mt-20 bg-parchment py-20 lg:py-28"
    >
      <div className="section-container">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Second lane — administration"
            title="Administrative & VA services"
          />
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-charcoal-soft">
            {vaIntro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {vaGroups.map((g) => (
            <Reveal key={g.title}>
              <h3 className="border-t-2 border-charcoal pt-4 font-display text-[21px] text-charcoal">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-charcoal-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-charcoal/20 pt-6">
            {vaCredentials.map((c) => (
              <span
                key={c}
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-charcoal-soft"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-charcoal-soft">
            Offered part-time, on the same terms as my development work —{" "}
            {person.availability} — with the full terms in the contact section
            below.
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-accent hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Working terms &amp; contact
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
