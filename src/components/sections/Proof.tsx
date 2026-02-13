import SectionHeading from "@/components/ui/SectionHeading";
import ScreenshotPlaceholder from "@/components/ui/ScreenshotPlaceholder";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Proof() {
  return (
    <section id="proof" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="Proof"
          heading="System Snapshots"
        />

        {/* Screenshots grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <ScreenshotPlaceholder
            label="n8n-workflow.png"
            description="COD verification automation workflow"
          />
          <ScreenshotPlaceholder
            label="shopify-tags.png"
            description="Shopify tagging logic in action"
          />
          <ScreenshotPlaceholder
            label="dashboard.png"
            description="Operations decision dashboard"
          />
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <TestimonialCard
            quote="We were losing lakhs to RTO every month. Paramveer mapped the entire backend, built the verification system, and within 6 weeks our RTO dropped by 40%. No fluff, just systems."
            name="Founder Testimonial"
            role="Founder"
            brand="D2C Fashion Brand"
          />
          <TestimonialCard
            quote="Before MonPro-AI, our team was manually verifying every COD order on WhatsApp. Now it runs on autopilot. The tagging logic alone saved us 3 hours a day."
            name="Operations Lead"
            role="Ops Lead"
            brand="Shopify Fashion Brand"
          />
        </div>
      </div>
    </section>
  );
}
