"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { person } from "@/data/person";
import { StatBox } from "@/components/ui/StatBox";
import { Tag } from "@/components/ui/Tag";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[60px]"
    >
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
          {/* Left: Text */}
          <div>
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-sage" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-sage">
                {person.org} · Developer
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-serif text-ink leading-[1.05] mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {person.firstName}{" "}
              <em className="text-sage not-italic font-serif">
                {person.lastName}
              </em>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="italic text-ink-muted text-lg mb-5"
            >
              &ldquo;{person.tagline}&rdquo;
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-[15.5px] text-ink-soft leading-relaxed mb-8 max-w-lg"
            >
              {person.bio[0]}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-white rounded-md text-[14px] font-medium hover:bg-sage/90 transition-colors"
              >
                View my work
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-mid)] text-ink-soft rounded-md text-[14px] font-medium hover:border-sage hover:text-sage transition-colors"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right: Identity Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="bg-white rounded-xl border border-[var(--border)] overflow-hidden shadow-sm">
              {/* Gradient top border */}
              <div className="h-1 bg-gradient-to-r from-sage to-gold" />

              <div className="p-6">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center">
                    <span className="font-serif text-xl text-sage">HJ</span>
                  </div>
                  <div>
                    <div className="font-serif text-lg text-ink">
                      {person.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {person.title}
                    </div>
                  </div>
                </div>

                {/* 2×2 Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <StatBox value="8+" label="Years in service" />
                  <StatBox value="7+" label="Systems built" />
                  <StatBox value="4+" label="Gov't roles held" />
                  <StatBox value="1st" label="Top 10 Awardee" />
                </div>

                {/* Tag row */}
                <div className="flex flex-wrap gap-1.5">
                  <Tag text="ISO 9001:2015" variant="sage" />
                  <Tag text="Citizen's Charter" variant="sage" />
                  <Tag text="Next.js" variant="gold" />
                  <Tag text="Full-Stack Dev" variant="gold" />
                  <Tag text="La Union, PH" variant="sage" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
