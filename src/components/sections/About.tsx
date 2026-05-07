import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="section-container">
        <div className="max-w-2xl">
          <SectionHeading label="ABOUT" heading="Why MonPro-AI exists." />

          <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m Paramveer. Three years building software, the last year
              deep into AI automation — n8n, LLM workflows, Shopify systems,
              WhatsApp tooling. I started MonPro-AI because most &quot;AI
              consultants&quot; are selling tools they&apos;ve never operated. I
              wanted to do the opposite: talk to founders first, understand the
              real workflow gaps, then build.
            </p>
            <p>
              Right now I&apos;m in active discovery — meeting founders of 11–50
              person agencies (PR, recruitment, marketing) and Shopify merchants.
              No retainer pitches, no rushed proposals. If your operations feel
              held together by spreadsheets and Slack, I&apos;d like to hear about it.
            </p>
          </div>

          <p className="text-text-muted font-mono text-xs sm:text-sm mt-8 tracking-wide">
            Based in Leipzig, Germany · Working across Europe and India
          </p>
        </div>
      </div>
    </section>
  );
}
