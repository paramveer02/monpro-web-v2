import SectionHeading from "@/components/ui/SectionHeading";
import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function Proof() {
  return (
    <section id="results" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="Results"
          heading="What Strong Backend Systems Achieve (Industry Examples)"
        />

        {/* Screenshots grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <ScreenshotPlaceholder
            label="cod-verification-flow.png"
            description="COD verification flow (example system snapshot)"
          />
          <ScreenshotPlaceholder
            label="shopify-tags.png"
            description="Tagging logic patterns (example)"
          />
          <ScreenshotPlaceholder
            label="ops-dashboard.png"
            description="Ops dashboard patterns (example)"
          />
        </div>

        {/* Case studies */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <CaseStudyCard
            brand="DaMENSCH"
            industry="D2C Menswear (India)"
            challenge="High RTO rates and inefficient delivery exception handling causing revenue leaks and operational chaos."
            solution="Implemented improved delivery exception handling and NDR (Non-Delivery Report) operations with automated workflows."
            results="54% reduction in RTO"
            source="Source: ClickPost customer story"
          />
          <CaseStudyCard
            brand="6thStreet"
            industry="Fashion & Lifestyle Retail"
            challenge="Low conversion rates for first-time shoppers and high abandoned cart rates impacting revenue."
            solution="Implemented automated recovery systems across WhatsApp with structured tracking and tagging. for cart recovery and new customer engagement."
            results="10x higher first-time shopper conversions and 6x higher abandoned cart conversions"
            source="Source: WhatsApp Business success story (with Gupshup)"
          />
        </div>

        <p className="mt-6 text-text-muted text-xs">
          These examples are drawn from publicly available case studies.
          MonPro-AI did not execute these specific projects. They illustrate
          what structured backend systems can achieve. Results vary by brand,
          category, and implementation.
        </p>
      </div>
    </section>
  );
}
