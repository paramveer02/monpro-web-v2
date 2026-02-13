import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Backend Audit",
    desc: "Deep dive into your Shopify operations, order flow, and revenue leaks.",
  },
  {
    number: "02",
    title: "Problem Mapping",
    desc: "Identify revenue leaks, operational bottlenecks, and manual dependencies.",
  },
  {
    number: "03",
    title: "Solution Design",
    desc: "Blueprint the exact systems and integrations required.",
  },
  {
    number: "04",
    title: "Implementation",
    desc: "Build, connect, and deploy the systems into your live Shopify environment.",
  },
  {
    number: "05",
    title: "Monitoring & Optimization",
    desc: "Track performance, refine systems, and scale what works.",
  },
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

        {/* Custom solution highlight */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-text-primary font-medium">
                One solution doesn&apos;t fit all.
              </span>{" "}
              Each brand has unique challenges, and so do the solutions. Every
              system is custom-built for your specific operations, category, and
              growth stage.
            </p>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
          <p className="text-text-primary text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            You don&apos;t buy tools.{" "}
            <span className="text-accent">You build systems.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
