"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <div className="mt-16">
      <div className="mb-8 flex items-center gap-3">
        <Award size={18} className="text-gold" />
        <h3 className="font-serif text-2xl text-ink">Certifications</h3>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.credentialId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-surface p-6"
          >
            <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
              {cert.issuer} · {cert.date}
            </div>
            <div className="font-serif text-lg leading-snug text-ink">
              {cert.title}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-sage-light px-3 py-1 text-[12px] font-medium text-sage"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={`https://coursera.org/verify/professional-cert/${cert.credentialId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-soft hover:text-sage transition-colors"
            >
              Verify credential
              <ExternalLink size={13} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
