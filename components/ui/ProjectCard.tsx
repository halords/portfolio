"use client";

import { motion } from "framer-motion";
import { Tag } from "./Tag";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured;
  const isWide = project.wide;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative rounded-xl border transition-all duration-300 hover:-translate-y-[3px] ${
        isWide ? "md:col-span-2 lg:col-span-3" : ""
      } ${
        isFeatured
          ? "bg-gradient-to-br from-sage-light/60 to-white border-sage-mid/40"
          : "bg-white border-[var(--border)] hover:border-sage-mid"
      }`}
    >
      {/* Top accent line */}
      {isFeatured && (
        <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-sage to-gold" />
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg ${
              project.iconVariant === "sage"
                ? "bg-sage-light"
                : "bg-gold-light"
            }`}
          >
            {project.icon}
          </div>
          {isFeatured && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage/10 text-sage text-[10px] font-semibold uppercase tracking-wider">
              ⭐ Flagship
            </span>
          )}
        </div>

        {/* Type label */}
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted mb-2">
          {project.type}
        </div>

        {/* Title */}
        <h3 className="font-serif text-[19px] text-ink mb-3 relative">
          {project.title}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sage transition-all duration-300 group-hover:w-full" />
        </h3>

        {/* Description */}
        <p className="text-[15px] text-ink-soft leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Tag
              key={tech}
              text={tech}
              variant={project.iconVariant}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
