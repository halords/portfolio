"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { person } from "@/data/person";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing from environment variables.");
      setStatus("error");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then(() => {
        setStatus("success");
        formRef.current!.reset();
      })
      .catch((error: unknown) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div
          className="relative rounded-[20px] overflow-hidden px-6 py-16 md:px-12 md:py-20"
          style={{ backgroundColor: "var(--ink)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sage/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gold/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <SectionLabel text="Let's connect" />
              <h2
                className="font-serif text-white mb-4"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)" }}
              >
                Open to the right{" "}
                <em className="text-sage-mid italic">opportunity</em>.
              </h2>
              <p className="text-[15.5px] text-white/50 max-w-md mx-auto text-justify">
                Whether you have a project in mind, a question about my work, or
                an opportunity to discuss — I&apos;d love to hear from you.
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-14"
            >
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-[14px] hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Mail size={16} />
                {person.email}
              </a>
              <a
                href={`tel:${person.phone}`}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-[14px] hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Phone size={16} />
                {person.phoneFormatted}
              </a>
              <a
                href={person.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-[14px] hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <ExternalLink size={16} />
                Resumé
              </a>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="max-w-2xl mx-auto space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-2 px-1">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] placeholder-white/20 focus:border-sage-mid/50 focus:bg-white/[0.07] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-2 px-1">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] placeholder-white/20 focus:border-sage-mid/50 focus:bg-white/[0.07] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white/30 mb-2 px-1">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[14px] placeholder-white/20 focus:border-sage-mid/50 focus:bg-white/[0.07] focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3.5 rounded-xl font-medium text-[14px] flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] ${
                    status === "success"
                      ? "bg-sage text-white"
                      : status === "error"
                        ? "bg-red-500/80 text-white"
                        : "bg-white text-ink hover:bg-white/90"
                  }`}
                >
                  {isSending ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full"
                    />
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={18} /> Message sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={18} /> Something went wrong
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
