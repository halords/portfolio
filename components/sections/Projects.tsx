"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
          <SectionLabel text="Selected work" />
          <h2
            className="font-serif text-ink mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            Systems running in production
          </h2>
          <p className="text-[14px] text-ink-muted max-w-xl">
            Every project below is a real system solving a real operational
            problem — designed, built, and maintained end to end. Open any
            card for the full case study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
