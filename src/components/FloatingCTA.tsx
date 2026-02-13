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
          {/* <IntakeForm compact /> */}

          {/* Divider + quick links */}
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-center gap-4">
            <a
              href="https://wa.me/4917643835327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Chat on WhatsApp
            </a>
            <span className="text-border-light">·</span>
            <a
              href="mailto:service@monpro-ai.com"
              className="text-text-muted text-xs hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email the details
            </a>
            <span className="text-border-light">·</span>
            <a
              href="https://calendly.com/paramvir-marwah/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book free audit call
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full bg-accent text-bg-primary flex items-center justify-center shadow-lg hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-label={expanded ? "Close contact options" : "Open contact options"}
      >
        {expanded ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8.5C4 6.567 5.79 5 8 5h8c2.21 0 4 1.567 4 3.5S18.21 12 16 12h-3.5L9 15.5V12H8c-2.21 0-4-1.567-4-3.5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9.75h.01M12 9.75h.01M15 9.75h.01"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
