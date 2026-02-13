"use client";

import { useState, FormEvent } from "react";

/* ── Problem options — pill selector ── */
const PROBLEMS = [
  "High RTO / COD returns",
  "Manual order verification",
  "No visibility into operations",
  "Team stuck in daily chaos",
];

/* ── Form size variants ── */
interface IntakeFormProps {
  compact?: boolean; // true = floating CTA version, false = full inline version
}

export default function IntakeForm({ compact = false }: IntakeFormProps) {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [status, setStatus] = useState<"select" | "details" | "sending" | "done" | "error">("select");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("problem", selectedProblem || "Not specified");
    data.append("source", "intake_form");

    try {
      const res = await fetch("https://formspree.io/f/xbdagpzd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  /* ── Success state ── */
  if (status === "done") {
    return (
      <div className={`rounded-xl border border-accent-border bg-accent-dim ${compact ? "p-4" : "p-6 sm:p-8"}`}>
        <p className="text-accent font-semibold text-sm mb-3">
          Got it. Here&apos;s what happens next:
        </p>
        <ol className={`space-y-2 mb-5 ${compact ? "text-xs" : "text-sm"} text-text-secondary`}>
          <li className="flex gap-2">
            <span className="text-accent font-mono">1.</span>
            I&apos;ll review your situation within 24 hours
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-mono">2.</span>
            You&apos;ll get a custom audit outline on WhatsApp/email
          </li>
          <li className="flex gap-2">
            <span className="text-accent font-mono">3.</span>
            We do a free 30-min call to walk through it
          </li>
        </ol>
        <a
          href="https://calendly.com/paramvir-marwah/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-hover transition-colors"
        >
          Want to skip the wait? Book now
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a>
      </div>
    );
  }

  /* ── Step 1: Problem selection ── */
  if (status === "select") {
    return (
      <div>
        <p className={`text-text-primary font-semibold mb-3 ${compact ? "text-sm" : "text-base sm:text-lg"}`}>
          What&apos;s hurting your brand most?
        </p>
        <div className={`flex flex-wrap gap-2 ${compact ? "gap-1.5" : "gap-2 sm:gap-3"}`}>
          {PROBLEMS.map((problem) => (
            <button
              key={problem}
              onClick={() => {
                setSelectedProblem(problem);
                setStatus("details");
              }}
              className={`rounded-full border border-border-light px-4 py-2.5 text-text-secondary hover:border-accent hover:text-accent transition-all duration-200 text-left min-h-[44px] ${
                compact ? "text-xs px-3 py-2" : "text-sm"
              }`}
            >
              {problem}
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ── Step 2: Contact details ── */
  return (
    <div>
      {/* Selected problem badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`rounded-full bg-accent-dim border border-accent-border text-accent px-3 py-1 ${compact ? "text-xs" : "text-sm"}`}>
          {selectedProblem}
        </span>
        <button
          onClick={() => { setSelectedProblem(null); setStatus("select"); }}
          className="text-text-muted text-xs hover:text-text-secondary transition-colors"
        >
          Change
        </button>
      </div>

      <form onSubmit={handleSubmit} className={`space-y-3 ${compact ? "space-y-2" : ""}`}>
        {/* Contact — WhatsApp or Email */}
        <div>
          <label htmlFor="intake-contact" className={`block text-text-secondary mb-1.5 ${compact ? "text-xs" : "text-sm"}`}>
            WhatsApp number or email
          </label>
          <input
            id="intake-contact"
            name="contact"
            type="text"
            required
            className={`w-full rounded-lg border border-border bg-bg-secondary text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
              compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
            }`}
            placeholder="+91 98765 43210 or you@brand.com"
          />
        </div>

        {/* Brand name (optional) */}
        <div>
          <label htmlFor="intake-brand" className={`block text-text-secondary mb-1.5 ${compact ? "text-xs" : "text-sm"}`}>
            Brand name <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="intake-brand"
            name="brand"
            type="text"
            className={`w-full rounded-lg border border-border bg-bg-secondary text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
              compact ? "px-3 py-2 text-xs" : "px-4 py-3 text-sm"
            }`}
            placeholder="Your brand"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full rounded-full bg-accent text-bg-primary font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50 min-h-[44px] ${
            compact ? "py-2.5 text-xs" : "py-3 text-sm"
          }`}
        >
          {status === "sending" ? "Sending..." : "Get Your Free Audit Plan"}
        </button>

        {status === "error" && (
          <p className="text-red-400 text-xs">Something went wrong. Try again or WhatsApp directly.</p>
        )}
      </form>
    </div>
  );
}
