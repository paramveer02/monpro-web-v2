import SectionHeading from "@/components/ui/SectionHeading";

interface PrimitiveCard {
  title: string;
  description: string;
}

const PRIMITIVES: PrimitiveCard[] = [
  {
    title: "Workflow automation",
    description:
      "n8n and Make pipelines connecting CRMs, spreadsheets, messaging, and LLMs. Built for reliability, not demos.",
  },
  {
    title: "Shopify integrations",
    description:
      "Order tagging, inventory sync, post-purchase flows, custom admin actions. API-level work, not app-store glue.",
  },
  {
    title: "Conversational interfaces",
    description:
      "WhatsApp Business and chat workflows that handle real operational logic — qualification, routing, follow-up.",
  },
  {
    title: "Internal tooling",
    description:
      "Lightweight dashboards and ops tools. Replacing spreadsheets and manual handoffs with systems your team trusts.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="build" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="WHAT I BUILD"
          heading="Systems, not prompts."
          description="Three years as a software developer before this. Below is the kind of work I ship — concrete, not theoretical."
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {PRIMITIVES.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-bg-card p-5 sm:p-6 md:p-8 hover:border-accent-border transition-colors duration-300"
            >
              <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
