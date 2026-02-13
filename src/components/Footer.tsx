import ContactForm from "@/components/ContactForm";

const FOOTER_LINKS = {
  navigate: [
    { label: "Systems", href: "#systems" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Results", href: "#results" },
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
              Describe your backend challenge. I review every submission
              personally and respond directly.
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
                Backend Systems for Scaling Shopify D2C Brands
              </span>
              <p className="text-text-secondary text-sm mt-3 max-w-xs">
                No hype. Just systems that work.
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
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-container py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} MonPro-AI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="/privacy-policy"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Terms
            </a>

            <a
              href="/disclaimer"
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              Disclaimer
            </a>

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
