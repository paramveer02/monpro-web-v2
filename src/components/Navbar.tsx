"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Systems", href: "#systems" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 group">
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-1.5">
              <span className="text-accent font-mono text-base sm:text-lg font-bold tracking-tight">
                MonPro
              </span>
              <span className="text-text-muted font-mono text-base sm:text-lg">-AI</span>
            </div>
            <span className="text-text-muted font-mono text-[11px] sm:text-xs mt-0.5">
              Shopify Systems for Scaling D2C Brands
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href="#contact">
            Get in Touch
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-border">
          <div className="section-container py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors py-3 min-h-[44px]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
