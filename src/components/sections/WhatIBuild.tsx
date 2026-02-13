import SectionHeading from "@/components/ui/SectionHeading";

/* ── System block data ── */
interface SystemBlock {
  number: string;
  title: string;
  bullets: string[];
}

const SYSTEMS: SystemBlock[] = [
  {
    number: "01",
    title: "COD Verification That Runs Itself",
    bullets: [
      "WhatsApp confirmation flows",
      "RTO risk filtering logic",
      "Real-time order tagging in Shopify",
    ],
  },
  {
    number: "02",
    title: "Find Where You\u2019re Losing Money",
    bullets: [
      "End-to-end order lifecycle tracking",
      "RTO pattern analysis",
      "Automated alerts",
    ],
  },
  {
    number: "03",
    title: "Operations on Autopilot",
    bullets: [
      "Custom workflow automation (Shopify + WhatsApp + CRM)",
      "Order state management",
      "Backend workflows",
    ],
  },
  {
    number: "04",
    title: "Dashboards That Show What Matters",
    bullets: [
      "Clean, decision-focused dashboards",
      "Structured tracking",
      "Decision-ready reporting",
    ],
  },
];

export default function WhatIBuild() {
  return (
    <section id="systems" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="What you get"
          heading="Backend Systems. Not Random Automations."
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {SYSTEMS.map((system) => (
            <div
              key={system.number}
              className="rounded-xl border border-border bg-bg-card p-5 sm:p-6 md:p-8 hover:border-accent-border transition-colors duration-300"
            >
              {/* Number + Title */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-accent font-mono text-sm opacity-50">
                  {system.number}
                </span>
                <h3 className="text-text-primary font-semibold text-base sm:text-lg">
                  {system.title}
                </h3>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 ml-7 sm:ml-9">
                {system.bullets.map((bullet, i) => (
                  <li key={i} className="bullet-item">
                    <span className="bullet-dot" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
