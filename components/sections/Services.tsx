"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Workflow, ClipboardCheck, Check } from "lucide-react";
import { services, type Service } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";

const icons: Record<Service["icon"], typeof Code2> = {
  code: Code2,
  bot: Bot,
  workflow: Workflow,
  clipboard: ClipboardCheck,
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <SectionLabel text="Services" index="02" />
          <h2
            className="font-serif text-ink mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
          >
            What I can do for you
          </h2>
          <p className="text-[14px] text-ink-muted max-w-xl">
            Four ways to work with me — from full product builds to taking
            operations work off your plate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7 hover:border-sage-mid hover:-translate-y-[3px] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
                  <Icon size={22} className="text-sage" />
                </div>
                <div className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-sage mb-2">
                  {service.tagline}
                </div>
                <h3 className="font-serif text-[22px] text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-[14.5px] text-ink-soft leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-[13.5px] text-ink-soft"
                    >
                      <Check
                        size={15}
                        className="text-sage shrink-0 mt-[3px]"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
