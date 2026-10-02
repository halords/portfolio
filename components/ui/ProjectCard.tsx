"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, CodeXml, ImageIcon } from "lucide-react";
import Image from "next/image";
import { Tag } from "./Tag";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: ProjectCardProps) {
  const isFeatured = project.featured;
  const isWide = project.wide;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative rounded-xl border transition-all duration-300 hover:-translate-y-[3px] overflow-hidden flex flex-col ${
        isWide ? "md:col-span-2 lg:col-span-3" : ""
      } ${
        isFeatured
          ? "bg-gradient-to-br from-sage-light/60 to-white border-sage-mid/40"
          : "bg-white border-[var(--border)] hover:border-sage-mid"
      }`}
    >
      {/* Top accent line */}
      {isFeatured && (
        <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-sage to-gold z-10" />
      )}

      {/* Visual */}
      <button
        onClick={() => onOpenCaseStudy(project)}
        className="relative w-full aspect-[16/9] bg-sage-light/70 overflow-hidden text-left cursor-pointer"
        aria-label={`Open case study: ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sage-light via-white to-gold-light/60 p-6">
            <ImageIcon size={28} className="text-sage/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted text-center">
              Screenshot coming soon
            </span>
          </div>
        )}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/80 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Case study
          <ArrowUpRight size={13} />
        </span>
      </button>

      <div className="p-6 flex flex-col flex-1">
        {/* Type label */}
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted mb-2">
          {project.type}
        </div>

        {/* Title */}
        <h3 className="font-serif text-[19px] text-ink mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[14.5px] text-ink-soft leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
          {project.tech.length > 5 && (
            <Tag text={`+${project.tech.length - 5}`} variant="gold" />
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-[var(--border)]">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-sage hover:gap-2.5 transition-all"
          >
            Case study
            <ArrowUpRight size={14} />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <CodeXml size={13} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
