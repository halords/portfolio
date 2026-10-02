"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { person } from "@/data/person";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const systems = [
  "feedback v3",
  "citizen's charter web",
  "nexusdocs",
  "iam console",
  "leave tracker",
  "ambagan",
  "l&d forms",
  "printer pos",
];

const values = [
  "Policy-aware builder",
  "ISO 9001 certified process",
  "Full-stack Next.js developer",
  "AI-integrated systems",
  "End-user focused design",
];

const stats = [
  { value: "8+", label: "years of service" },
  { value: "7", label: "production systems shipped" },
  { value: "2022", label: "outstanding public servant" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-ink-deep text-surface"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-12%] h-[600px] w-[600px] rounded-full bg-sage/25 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-12%] h-[520px] w-[520px] rounded-full bg-gold/15 blur-[160px]"
      />
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-28 select-none text-center font-serif leading-none text-white/[0.03]"
        style={{ fontSize: "22vw" }}
      >
        halords
      </div>

      <div className="section-container relative flex flex-1 items-center pt-[60px]">
        <div className="max-w-3xl py-24">
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-7 flex items-center gap-3"
          >
            <div className="h-[1px] w-10 bg-gold" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-sage-mid">
              halords · full-stack developer · {person.location}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-serif leading-[1.02] text-white"
            style={{ fontSize: "clamp(44px, 7vw, 92px)" }}
          >
            I build systems that{" "}
            <span className="text-gold">run the office.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg italic text-white/55"
          >
            &ldquo;{person.tagline}&rdquo;
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/70"
          >
            {person.bio[0]}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-[14px] font-semibold text-ink-deep transition-colors hover:bg-gold/90"
            >
              View selected work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Get in touch
              <Mail size={16} />
            </a>
          </motion.div>

          {/* Value props — integrated into the hero */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8"
          >
            {values.map((v) => (
              <span
                key={v}
                className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {v}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10">
        <div className="section-container grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl text-white">{s.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipped-systems ticker */}
      <div className="relative overflow-hidden border-t border-white/10 py-4">
        <div className="animate-ticker flex w-max whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] text-white/35">
          {[...systems, ...systems].map((s, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6">{s}</span>
              <span className="text-gold/60">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
