"use client";

import { useState, useEffect } from "react";
import IntakeForm from "@/components/IntakeForm";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  /* Show after scrolling past hero */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded intake widget */}
      {expanded && (
        <div className="bg-bg-card border border-border rounded-xl p-4 w-[calc(100vw-2rem)] max-w-[20rem] sm:w-80 shadow-2xl animate-fade-in">
          <IntakeForm compact />

          {/* Divider + quick links */}
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-center gap-4">
            <a
              href="https://wa.me/4917643835327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-border-light">·</span>
            <a
              href="mailto:service@monpro-ai.com"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              Email
            </a>
            <span className="text-border-light">·</span>
            <a
              href="https://calendly.com/paramvir-marwah/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-accent transition-colors"
            >
              Calendly
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-accent text-bg-primary flex items-center justify-center shadow-lg hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-label={expanded ? "Close" : "Get free audit"}
      >
        {expanded ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        )}
      </button>
    </div>
  );
}
