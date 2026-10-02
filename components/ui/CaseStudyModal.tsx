"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ExternalLink, CodeXml } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
          >
            {project.image && (
              <div className="relative w-full aspect-[16/9] bg-sage-light">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            )}
            <div className="p-7 sm:p-9">
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 border border-[var(--border)] flex items-center justify-center text-ink-soft hover:text-ink hover:border-ink transition-colors"
              >
                <X size={18} />
              </button>

              <div className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted mb-2">
                {project.type}
              </div>
              <h3 className="font-serif text-[28px] text-ink mb-6">
                {project.title}
              </h3>

              <div className="space-y-6 mb-7">
                <div>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-sage mb-2">
                    The problem
                  </h4>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-sage mb-2">
                    What I built
                  </h4>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-sage mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2.5">
                    {project.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2.5 text-[14px] text-ink-soft"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-sage shrink-0 mt-[2px]"
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-7">
                {project.tech.map((t) => (
                  <Tag key={t} text={t} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage text-white rounded-md text-[13.5px] font-medium hover:bg-sage/90 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-mid)] text-ink-soft rounded-md text-[13.5px] font-medium hover:border-sage hover:text-sage transition-colors"
                  >
                    <CodeXml size={15} />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
