import { ArrowDown, Mail } from "lucide-react";
import { person } from "@/data/person";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);
  const mailto = `mailto:${person.email}`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-bone"
    >
      <div className="section-container grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <Reveal className="min-w-0 lg:col-span-7">
          <h1
            id="hero-heading"
            className="font-sans text-[46px] font-extrabold leading-[1.0] tracking-[-0.03em] sm:text-[68px] lg:text-[80px]"
          >
            <span className="block text-charcoal">Harold Erick M.</span>
            <span className="block text-accent">Jamora</span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="block h-[3px] w-10 shrink-0 bg-accent"
            />
            <p className="kicker text-charcoal-soft">
              Full-Stack Developer · Next.js / React · La Union, PH
            </p>
          </div>

          <p className="mt-5 max-w-xl text-[25px] font-semibold leading-[1.15] tracking-[-0.02em] text-charcoal sm:text-[30px] lg:text-[34px]">
            I build production web systems — and automate the work{" "}
            <span className="text-accent">around them.</span>
          </p>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-charcoal-soft">
            In production today: an{" "}
            <a
              href="#work-feedback"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              AI-assisted feedback system
            </a>{" "}
            reading citizen responses, and the single sign-on console the rest of
            the office&apos;s apps share — two of seven systems I run for the
            Provincial Government of La Union.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center gap-2 bg-charcoal px-6 font-mono text-[12px] uppercase tracking-[0.16em] text-bone transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              See the work
              <ArrowDown size={15} aria-hidden="true" className="shrink-0" />
            </a>
            <a
              href={mailto}
              className="inline-flex min-h-11 min-w-0 items-center gap-2 border border-charcoal px-6 font-mono text-[12px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <Mail size={15} aria-hidden="true" className="shrink-0" />
              <span className="break-all">{person.email}</span>
            </a>
          </div>

          <div className="mt-9 border-t border-hairline pt-5">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-charcoal-soft">
              {person.availability}
            </p>
            <p className="mt-2 font-mono text-[12px] leading-relaxed text-faded">
              {person.availabilityDetail}
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          className="min-w-0 lg:col-span-4 lg:col-start-9 lg:pt-24"
        >
          <p id="hero-proof-heading" className="kicker text-faded">
            Selected proof
          </p>
          <ul
            aria-labelledby="hero-proof-heading"
            className="mt-4 border-t border-hairline"
          >
            {featuredProjects.map((project, index) => (
              <li key={project.id} className="border-b border-hairline">
                <a
                  href={`#work-${project.id}`}
                  className="group block min-h-11 py-4 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <span className="tabular font-mono text-[12px] tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-display text-[19px] leading-snug text-charcoal transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-charcoal-soft">
                    {project.outcomeLine}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-faded">
            7 PGLU systems in production — 6 internal, 1 public
          </p>
        </Reveal>
      </div>
    </section>
  );
}
