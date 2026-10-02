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
      className="bg-white border-y border-[var(--border)]"
    >
      <div className="section-container py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {values.map((value) => (
            <div key={value} className="flex items-center gap-2.5">
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
