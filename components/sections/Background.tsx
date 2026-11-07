import { person } from "@/data/person";
import { career } from "@/data/career";
import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Award } from "lucide-react";

export function Background() {
  return (
    <section
      id="background"
      className="section-container scroll-mt-20 py-20 lg:py-28"
    >
      <Reveal>
        <SectionHeading
          index="04"
          eyebrow="Background"
          title="Eight years where software meets operations"
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          {person.bio.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-[16px] leading-relaxed text-charcoal-soft"
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <h3 className="kicker mt-16 text-charcoal-soft">Career</h3>
      <div className="mt-4">
        {career.map((e) => (
          <Reveal key={e.role}>
            <article className="grid gap-3 border-t border-hairline py-7 lg:grid-cols-12 lg:gap-8">
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-faded lg:col-span-3">
                {e.year}
              </p>
              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h4 className="font-display text-[22px] leading-tight text-charcoal">
                    {e.role}
                  </h4>
                  {e.isCurrent ? (
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      {e.badge || "Current role"}
                    </span>
                  ) : (
                    e.badge && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-charcoal-soft">
                        <Award
                          size={13}
                          className="shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {e.badge}
                      </span>
                    )
                  )}
                </div>
                <p className="mt-1 font-mono text-[12px] text-faded">{e.org}</p>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-charcoal-soft">
                  {e.description}
                </p>
                <p className="mt-3 font-mono text-[11.5px] uppercase tracking-[0.1em] text-charcoal-soft">
                  {e.tags.join(" · ")}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="kicker text-charcoal-soft">Certifications</h3>
          <div className="mt-4">
            {certifications.map((c) => {
              const verifyUrl = `https://www.coursera.org/account/accomplishments/verify/${c.credentialId}`;

              return (
                <article
                  key={c.credentialId}
                  className="border-t border-hairline py-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-[20px] text-charcoal">
                      {c.title}
                    </h4>
                    <span className="font-mono text-[12px] text-faded">
                      {c.date}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[12px] text-faded">
                    {c.issuer}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft">
                    {c.skills.join(" · ")}
                  </p>
                  <a
                    href={verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent hover:text-accent-deep focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Verify credential
                    <ArrowUpRight
                      size={14}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      {" "}
                      for {c.title} (opens in a new tab)
                    </span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="kicker text-charcoal-soft">Skills</h3>
          <div className="mt-4">
            {skills.map((g) => (
              <div key={g.title} className="border-t border-hairline py-6">
                <h4 className="font-display text-[20px] text-charcoal">
                  {g.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14.5px] text-charcoal-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}