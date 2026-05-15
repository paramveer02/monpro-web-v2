const FOOTER_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paramveer-marwah/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:service@monpro-ai.com",
    external: false,
  },
  {
    label: "Notes",
    href: "/notes",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="section-divider bg-bg-secondary">
      <div className="section-container py-10 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left — Logo + tagline */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-1.5">
              <span className="text-accent font-mono text-lg font-bold tracking-tight">
                MonPro
              </span>
              <span className="text-text-muted font-mono text-lg">-AI</span>
            </div>
            <span className="text-text-muted font-mono text-xs mt-1">
              Independent AI automation. Leipzig.
            </span>
          </div>

          {/* Right — Links */}
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-text-muted text-sm hover:text-text-secondary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-container py-5">
          <p className="text-text-muted text-xs">
            &copy; 2026 MonPro-AI · Paramvir Marwah
          </p>
        </div>
      </div>
    </footer>
  );
}
