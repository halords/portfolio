"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <SectionLabel text="Projects" />
          <h2
            className="font-serif text-ink mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            Systems I&apos;ve built
          </h2>
          <p className="text-[14px] text-ink-muted max-w-lg">
            Seven internal systems designed to solve real workflow problems
            inside our provincial government
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
