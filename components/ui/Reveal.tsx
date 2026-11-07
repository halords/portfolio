"use client";

import type * as React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay, className }: RevealProps) {
  return (
    <motion.div
      className={`motion-reduce:opacity-100! motion-reduce:transform-none! ${className ?? ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: delay ?? 0,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
