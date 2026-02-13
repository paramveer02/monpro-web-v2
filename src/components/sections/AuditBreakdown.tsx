import SectionHeading from "@/components/ui/SectionHeading";
import IntakeForm from "@/components/IntakeForm";

/* ── Audit deliverables ── */
const DELIVERABLES = [
  {
    number: "01",
    title: "Revenue Leak Report",
    description:
      "We map every point in your order flow where money is leaking. RTO patterns, failed COD, manual gaps.",
  },
  {
    number: "02",
    title: "Operations Snapshot",
    description:
      "A clear breakdown of where your team’s time goes and what should be automated first.",
  },
  {
    number: "03",
    title: "Custom Action Plan",
    description: "A prioritized execution roadmap with expected impact.",
  },
];

export default function AuditBreakdown() {
  return (
    <section id="get-started" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="Free audit"
          heading="Your Free Backend Audit — Here’s Exactly What You Get"
          align="center"
        />

        {/* Deliverable cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {DELIVERABLES.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-border bg-bg-card p-5 sm:p-6"
            >
              <span className="text-accent font-mono text-xs opacity-50 block mb-3">
                {item.number}
              </span>
              <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance line */}
        <p className="text-center text-text-muted text-sm mb-10 sm:mb-14">
          30-minute strategy call. No cost. No obligation.
        </p>

        {/* Inline intake form */}
        <div className="max-w-lg mx-auto">
          <div className="rounded-xl border border-border bg-bg-card p-6 sm:p-8">
            <IntakeForm compact={false} />
          </div>

          {/* Alternative contact */}
          <p className="text-center text-text-muted text-xs mt-6">
            Or reach out directly:{" "}
            <a
              href="https://wa.me/4917643835327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              WhatsApp
            </a>
            {" \u00B7 "}
            <a
              href="mailto:service@monpro-ai.com"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
