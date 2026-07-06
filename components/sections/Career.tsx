"use client";

import { motion } from "framer-motion";
import { career } from "@/data/career";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Career() {
  return (
    <section id="career" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <SectionLabel text="Career" />
          <h2
            className="font-serif text-ink mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            A journey through public service
          </h2>
          <p className="text-[14px] text-ink-muted max-w-lg">
            Eight years of progressive responsibility across government
            agencies, evolving from clerical support to systems development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {career.map((entry, index) => (
            <TimelineItem
              key={entry.year}
              entry={entry}
              index={index}
              isLast={index === career.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
