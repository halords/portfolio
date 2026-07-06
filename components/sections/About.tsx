"use client";

import { motion } from "framer-motion";
import { person } from "@/data/person";
import { skills, certifications } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SkillItem } from "@/components/ui/SkillItem";
import { AwardPill } from "@/components/ui/AwardPill";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionLabel text="About" />
            <h2
              className="font-serif text-ink mb-3"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
            >
              Bridging governance and technology
            </h2>
            <p className="text-[14px] text-ink-muted mb-8">
              A unique path from public administration to full-stack development
            </p>

            <div className="space-y-5 mb-8">
              {person.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15.5px] text-ink-soft leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AwardPill
                icon="🏆"
                title="Ten Outstanding Provincial Public Servant"
                subtitle="C.Y. 2022"
              />
              <AwardPill
                icon="📋"
                title="Career Service Professional Eligibility"
                subtitle="82.39%"
              />
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-4">
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {group.items.map((skill) => (
                      <SkillItem
                        key={skill}
                        name={skill}
                        variant={group.variant}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certification */}
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="mt-8 p-4 bg-gold-light/50 border border-gold/10 rounded-xl flex items-center gap-3"
              >
                <span className="text-xl">{cert.icon}</span>
                <div>
                  <div className="text-[14px] font-medium text-ink">
                    {cert.title}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-gold">
                    {cert.status}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
