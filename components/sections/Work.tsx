import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudy } from "@/components/ui/CaseStudy";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const pglu = projects.filter((p) => p.group === "pglu");
  const independent = projects.filter(
    (p) => p.group === "independent" && !p.featured,
  );
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="work"
      className="section-container scroll-mt-20 py-20 lg:py-28"
    >
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Systems running in production"
        />
        <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-charcoal-soft">
          Three case studies in full, then the complete index. Every PGLU system
          below is in daily use at the Provincial Government of La Union; the
          independent projects are my own builds, labeled as such.
        </p>
      </Reveal>

      <div className="mt-12 space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <CaseStudy project={p} numeral={pad(i + 1)} featured />
          </Reveal>
        ))}
      </div>

      <div className="mt-20 border-t-2 border-charcoal pt-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="font-display text-[26px] text-charcoal">
            The full index
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faded">
            Status labels are exact — internal, public, or personal
          </p>
        </div>
      </div>

      <p className="kicker mt-10 text-charcoal-soft">
        For PGLU — 7 systems in production
      </p>
      <div>
        {pglu.map((p, i) =>
          p.featured ? (
            <div
              key={p.id}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-hairline py-5"
            >
              <span className="font-mono text-[13px] font-medium text-accent tabular">
                {pad(i + 1)}
              </span>
              <a
                href={`#work-${p.id}`}
                className="inline-flex min-h-11 items-center font-display text-[20px] text-charcoal underline decoration-hairline underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {p.title}
              </a>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faded">
                {p.status}
              </span>
              <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Featured case study ↑
              </span>
            </div>
          ) : (
            <CaseStudy key={p.id} project={p} numeral={pad(i + 1)} />
          ),
        )}
      </div>

      <p className="kicker mt-12 text-charcoal-soft">Independent projects</p>
      <div>
        {independent.map((p, i) => (
          <CaseStudy key={p.id} project={p} numeral={pad(i + 1)} />
        ))}
      </div>

      <Reveal className="mt-16">
        <ContactCTA text="Need a system like one of these — built, deployed, and documented?" />
      </Reveal>
    </section>
  );
}
