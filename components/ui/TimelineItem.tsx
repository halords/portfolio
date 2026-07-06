"use client";

import { motion } from "framer-motion";
import { Tag } from "./Tag";
import type { CareerEntry } from "@/data/career";

interface TimelineItemProps {
  entry: CareerEntry;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex gap-6 pb-12"
    >
      {/* Timeline rail */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 mt-1.5 z-10 ${
            entry.isCurrent
              ? "bg-sage border-sage"
              : "bg-white border-ink-muted/40"
          }`}
        />
        {/* Line */}
        {!isLast && (
          <div className="w-[1.5px] flex-1 bg-gradient-to-b from-ink-muted/20 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 -mt-0.5">
        {/* Year */}
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted mb-1.5">
          {entry.year}
        </div>

        {/* Role */}
        <h3 className="font-serif text-[19px] text-ink mb-1">{entry.role}</h3>

        {/* Org */}
        <p className="text-[13px] text-ink-muted mb-3">{entry.org}</p>

        {/* Badge */}
        {entry.badge && (
          <div className="inline-flex items-center gap-1.5 mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide ${
                entry.badgeVariant === "gold"
                  ? "bg-gold-light text-gold"
                  : "bg-sage-light text-sage"
              }`}
            >
              {entry.badgeVariant === "gold" ? "🏆" : "●"} {entry.badge}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-[15px] text-ink-soft leading-relaxed mb-4 text-justify">
          {entry.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Tag key={tag} text={tag} variant="sage" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
