"use client";

import { motion } from "framer-motion";

const values = [
  "Policy-aware builder",
  "ISO 9001 certified process",
  "Full-stack Next.js developer",
  "AI-integrated systems",
  "End-user focused design",
];

export function ValueBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border-y border-[var(--border)] overflow-hidden"
    >
      <div className="section-container py-3">
        <div className="flex overflow-x-auto gap-x-8 scrollbar-hide lg:justify-between" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {values.map((value) => (
            <div key={value} className="flex items-center gap-2.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
              <span className="text-[15px] font-medium text-ink-soft whitespace-nowrap">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
