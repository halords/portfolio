"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { career } from "@/data/career";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Career() {
  const [expanded, setExpanded] = useState(false);
  const recent = career.slice(0, 2);
  const earlier = career.slice(2);

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
          <SectionLabel text="Background" index="04" />
          <h2
            className="font-serif text-ink mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            Eight years where software meets operations
          </h2>
          <p className="text-[14px] text-ink-muted max-w-lg">
            My career runs on two tracks: deep operational experience inside
            government, and the systems I built to improve it.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {recent.map((entry, index) => (
            <TimelineItem
              key={entry.year}
              entry={entry}
              index={index}
              isLast={false}
            />
          ))}

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                {earlier.map((entry, index) => (
                  <TimelineItem
                    key={entry.year}
                    entry={entry}
                    index={index}
                    isLast={index === earlier.length - 1}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-mid)] rounded-md text-[13px] font-medium text-ink-soft hover:border-sage hover:text-sage transition-colors"
            >
              {expanded ? "Hide earlier roles" : "Show earlier roles"}
              <ChevronDown
                size={15}
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
