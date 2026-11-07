"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type CaseStudyProps = {
  project: Project;
  numeral: string;
  featured?: boolean;
};

export function CaseStudy({
  project,
  numeral,
  featured = false,
}: CaseStudyProps) {
  const [expanded, setExpanded] = useState(false);
  const regionId = `case-${project.id}`;
  const articleRef = useRef<HTMLElement>(null);
  const labelColor = featured ? "text-charcoal-soft" : "text-faded";

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === `#work-${project.id}`) {
        setExpanded(true);
      }
    };

    const openByDefault = () => {
      if (
        project.id === "feedback" &&
        window.innerWidth >= 1024 &&
        !window.location.hash
      ) {
        setExpanded(true);
      }
    };

    openFromHash();
    openByDefault();
    window.addEventListener("hashchange", openFromHash);

    return () => {
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [project.id]);

  const metaRow = (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <span className="font-mono text-[13px] font-medium text-accent tabular">
        {numeral}
      </span>
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.16em] ${labelColor}`}
      >
        {project.type}
      </span>
      <span className="ml-auto border border-hairline px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-charcoal-soft">
        {project.status}
      </span>
    </div>
  );

  const headerContent = (
    <>
      <h3
        className={
          featured
            ? "mt-4 font-display text-[30px] leading-tight text-charcoal sm:text-[34px]"
            : "mt-3 font-display text-[24px] leading-tight text-charcoal"
        }
      >
        {project.title}
      </h3>

      <p className="mt-2 max-w-3xl text-[15.5px] leading-relaxed text-charcoal-soft">
        {project.outcomeLine}
      </p>

      <p className={`mt-3 font-mono text-[12px] ${labelColor}`}>
        {project.role}
      </p>

      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={regionId}
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-accent hover:text-accent-deep focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        {expanded ? "Close case study" : "Read the case study"}
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={
            expanded
              ? "rotate-180 transition-transform motion-reduce:transition-none"
              : "transition-transform motion-reduce:transition-none"
          }
        />
      </button>
    </>
  );

  return (
    <article
      ref={articleRef}
      id={`work-${project.id}`}
      className={
        featured
          ? "scroll-mt-28 bg-parchment p-6 sm:p-9"
          : "scroll-mt-28 border-t border-hairline py-7"
      }
    >
      {featured ? (
        <>
          {metaRow}

          <div className="mt-2 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">{headerContent}</div>

            {project.plate && (
              <figure className="lg:col-span-5 lg:mt-3">
                <div className="border border-hairline bg-bone p-2">
                  <img
                    src={project.plate.src}
                    alt={project.plate.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="h-auto w-full border border-hairline"
                  />
                </div>
                <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-charcoal-soft">
                  {project.plate.caption}
                </figcaption>
              </figure>
            )}
          </div>
        </>
      ) : (
        <div className="flex gap-4 sm:gap-5">
          {project.plate && (
            <div className="w-[84px] shrink-0 sm:w-28">
              <img
                src={project.plate.src}
                alt={project.plate.alt}
                className="aspect-[16/10] w-full border border-hairline object-cover"
                loading="lazy"
                width={320}
                height={200}
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            {metaRow}
            {headerContent}
          </div>
        </div>
      )}

      {expanded && (
        <div
          id={regionId}
          role="region"
          aria-label={`${project.title} case study`}
          className={`mt-6 grid gap-8 border-t pt-6 lg:grid-cols-12 ${
            featured ? "border-charcoal/20" : "border-hairline"
          }`}
        >
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className={`kicker ${labelColor}`}>The problem</p>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
                {project.problem}
              </p>
            </div>

            <div>
              <p className={`kicker ${labelColor}`}>What I built</p>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
                {project.solution}
              </p>
            </div>

            {project.decision && (
              <div>
                <p className={`kicker ${labelColor}`}>The decision</p>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">
                  {project.decision}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <p className={`kicker ${labelColor}`}>Outcomes</p>
            <ul className="mt-2 space-y-2">
              {project.outcomes.map((item, index) => (
                <li
                  key={`${project.id}-outcome-${index}`}
                  className="flex gap-3 text-[15px] leading-relaxed text-charcoal-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className={`kicker mt-6 ${labelColor}`}>Stack</p>
            <p className="mt-2 font-mono text-[12.5px] leading-relaxed text-charcoal-soft">
              {project.tech.join(" · ")}
            </p>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent hover:text-accent-deep focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    Live site
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent hover:text-accent-deep focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    Repository
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
