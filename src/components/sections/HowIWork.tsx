import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { number: "01", title: "Backend Audit", desc: "Deep-dive into your current Shopify operations, order flow, and backend stack." },
  { number: "02", title: "Problem Mapping", desc: "Identify every leak, bottleneck, and manual dependency in your workflow." },
  { number: "03", title: "Solution Design", desc: "Blueprint the exact systems, integrations, and automation logic needed." },
  { number: "04", title: "Implementation", desc: "Build, connect, and deploy the systems into your live Shopify environment." },
  { number: "05", title: "Monitoring & Optimization", desc: "Track performance, refine logic, and scale what works." },
];

export default function HowIWork() {
  return (
    <section id="process" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="Process"
          heading="Clear. Structured. No Guesswork."
        />

        {/* Steps */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`flex items-start gap-4 sm:gap-6 py-4 sm:py-6 ${
                i < STEPS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-accent font-mono text-sm mt-1 w-8 flex-shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-text-primary font-semibold text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
          <p className="text-text-primary text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            You don&apos;t buy tools.{" "}
            <span className="text-accent">You install systems.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
