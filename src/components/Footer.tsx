import ContactForm from "@/components/ContactForm";

const FOOTER_LINKS = {
  navigate: [
    { label: "Systems", href: "#systems" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Proof", href: "#proof" },
  ],
  connect: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/paramveer-marwah/",
    },
    { label: "GitHub", href: "https://github.com/paramveer02" },
    { label: "WhatsApp", href: "https://wa.me/4917643835327" },
    { label: "Email", href: "mailto:service@monpro-ai.com" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="section-divider bg-bg-secondary">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24">
          {/* Left — Contact form */}
          <div>
            <h2 className="text-text-primary text-xl sm:text-2xl font-bold mb-2">
              Get in touch
            </h2>
            <p className="text-text-secondary text-sm mb-6 sm:mb-8">
              Describe your backend challenge. I’ll review it personally and
              respond directly.
            </p>
            <ContactForm />
          </div>

          {/* Right — Links & Info */}
          <div className="space-y-8 sm:space-y-10">
            {/* Logo */}
            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1.5">
                <span className="text-accent font-mono text-xl sm:text-2xl font-bold tracking-tight">
                  MonPro
                </span>
                <span className="text-text-muted font-mono text-xl sm:text-2xl">
                  -AI
                </span>
              </div>
              <span className="text-text-muted font-mono text-xs sm:text-sm mt-1">
                Shopify Systems for Scaling D2C Brands
              </span>
              <p className="text-text-secondary text-sm mt-3 max-w-xs">
                AI-driven backend systems for Shopify D2C brands. No hype. Just
                systems that work.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div>
                <h3 className="text-text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
                  Navigate
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.navigate.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">
                  Connect
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.connect.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Calendly CTA */}
            <div className="rounded-xl border border-border bg-bg-card p-4 sm:p-6">
              <p className="text-text-primary font-semibold text-sm mb-2">
                Prefer a live call?
              </p>
              <p className="text-text-secondary text-sm mb-4">
                Book a free 30-minute backend audit.
              </p>
              <a
                href="https://calendly.com/paramvir-marwah/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-hover transition-colors"
              >
                Schedule on Calendly
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-container py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} MonPro-AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="mailto:service@monpro-ai.com"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors py-1 min-h-[44px] flex items-center"
            >
              service@monpro-ai.com
            </a>
            <a
              href="https://wa.me/4917643835327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors py-1 min-h-[44px] flex items-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
