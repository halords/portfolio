"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { person } from "@/data/person";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import {
  Mail,
  Phone,
  FileText,
  Code2,
  ArrowUpRight,
  Send,
} from "lucide-react";

const emailjsReady = Boolean(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
);

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailjsReady || status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: String(formData.get("from_name") ?? ""),
          from_email: String(formData.get("from_email") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 bg-charcoal text-bone"
    >
      <div className="section-container py-20 lg:py-28">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[13px] font-medium text-bone/60">
            05
          </span>
          <span className="kicker text-bone/60">Contact</span>
        </div>

        <h2
          id="contact-heading"
          className="mt-4 font-display text-4xl leading-[1.05] text-bone sm:text-5xl"
        >
          Open to the right part-time role.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="text-[16.5px] leading-relaxed text-bone/80">
              I&apos;m looking for part-time remote work in two lanes:{" "}
              <strong className="text-bone">
                development &amp; AI automation
              </strong>{" "}
              (primary) and{" "}
              <strong className="text-bone">
                administrative / VA support
              </strong>
              . If your team is drowning in manual, document-heavy work, I can
              either build the system that fixes it — or run the process properly
              myself.
            </p>

            <div className="mt-8 space-y-3 border-t border-bone/15 pt-6 font-mono text-[12.5px] leading-relaxed text-bone/70">
              <p>
                <span className="text-bone/40">CAPACITY — </span>
                {person.availability}
              </p>
              <p>
                <span className="text-bone/40">HOURS — </span>
                {person.availabilityDetail}
              </p>
              <p>
                <span className="text-bone/40">SEPARATION — </span>
                Freelance work happens outside government hours, on my own
                equipment. No government data, systems, or time are involved.
              </p>
              <p>
                <span className="text-bone/40">FASTEST ROUTE — </span>
                Email. Include the role or project, expected hours, and your
                start date, and I&apos;ll reply with fit and next steps.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6">
            <p className="kicker flex items-center gap-2 text-bone/60">
              <Mail size={14} aria-hidden="true" />
              Email — primary
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex min-h-11 items-center break-all font-display text-[26px] leading-tight text-bone underline decoration-accent underline-offset-8 hover:decoration-bone focus-ring-dark"
              >
                {person.email}
              </a>
              <CopyEmail email={person.email} />
            </div>

            <dl className="mt-9 border-t border-bone/15">
              <div className="flex items-center justify-between gap-4 border-b border-bone/15 py-4">
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bone/60">
                  <Phone size={14} aria-hidden="true" />
                  Phone
                </dt>
                <dd>
                  <span className="text-bone">{person.phoneDisplay}</span>
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-bone/15 py-4">
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bone/60">
                  <FileText size={14} aria-hidden="true" />
                  Résumé
                </dt>
                <dd>
                  <a
                    href={person.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 text-bone underline decoration-bone/30 underline-offset-4 hover:decoration-bone focus-ring-dark"
                  >
                    View résumé
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-bone/15 py-4">
                <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bone/60">
                  <Code2 size={14} aria-hidden="true" />
                  GitHub
                </dt>
                <dd className="min-w-0">
                  <a
                    href={person.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 break-all text-bone underline decoration-bone/30 underline-offset-4 hover:decoration-bone focus-ring-dark"
                  >
                    github.com/halords
                    <ArrowUpRight
                      size={14}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </dd>
              </div>
            </dl>

            {emailjsReady && (
              <form
                onSubmit={onSubmit}
                className="mt-9 border-t border-bone/15 pt-7"
                noValidate={false}
                aria-busy={status === "sending"}
              >
                <p className="kicker text-bone/60">Or send a message</p>

                <div className="mt-5 flex flex-col gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-from-name"
                      className="block font-mono text-[11px] uppercase tracking-wider text-bone/60"
                    >
                      Name
                    </label>
                    <input
                      id="contact-from-name"
                      name="from_name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className="min-h-11 w-full border border-bone/25 bg-transparent px-4 py-3 text-[15px] text-bone placeholder:text-bone/35 focus:border-bone focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-bone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-from-email"
                      className="block font-mono text-[11px] uppercase tracking-wider text-bone/60"
                    >
                      Email
                    </label>
                    <input
                      id="contact-from-email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      className="min-h-11 w-full border border-bone/25 bg-transparent px-4 py-3 text-[15px] text-bone placeholder:text-bone/35 focus:border-bone focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-bone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-[11px] uppercase tracking-wider text-bone/60"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What are we building — or what needs running?"
                      className="min-h-11 w-full border border-bone/25 bg-transparent px-4 py-3 text-[15px] text-bone placeholder:text-bone/35 focus:border-bone focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-bone"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 bg-bone px-6 font-mono text-[12px] uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-accent hover:text-bone disabled:opacity-60 focus-ring-dark"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Send size={14} aria-hidden="true" />
                </button>

                {status === "sent" && (
                  <p role="status" className="mt-4 text-[14px] text-bone">
                    Message sent — I&apos;ll reply by email.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="mt-4 text-[14px] text-bone">
                    That didn&apos;t send. Email me directly at {person.email}.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
