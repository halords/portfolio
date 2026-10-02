"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Background", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Transparent over the dark hero; frosted light once scrolled.
  const overDark = !scrolled && !mobileOpen;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-all duration-300"
        style={
          overDark
            ? {
                backgroundColor: "transparent",
                borderBottom: "1px solid transparent",
              }
            : {
                backgroundColor: "rgba(247, 246, 243, 0.90)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--border)",
                boxShadow: scrolled ? "0 1px 3px rgba(26,31,46,0.06)" : "none",
              }
        }
      >
        <div className="section-container w-full flex items-center justify-between">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Logo size={30} />
            <span
              className={`font-mono text-[19px] font-semibold tracking-tight ${
                overDark ? "text-white" : "text-ink"
              }`}
            >
              halords<span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[14px] transition-colors duration-200 ${
                  overDark
                    ? "text-white/70 hover:text-white"
                    : "text-ink-soft hover:text-sage"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              overDark
                ? "text-white/80 hover:text-white"
                : "text-ink-soft hover:text-ink"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-3xl text-ink hover:text-sage transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
