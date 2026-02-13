import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";

const ABOUT_POINTS = [
  "Built and deployed backend systems for real D2C operations",
  "Operations-first, not tool-first",
  "Focused on revenue leakage and system clarity",
  "No hype. No random automations",
  "Based in Germany, working with Shopify D2C brands",
];

export default function AboutFounder() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Left — Content */}
          <div className="md:col-span-3">
            <SectionHeading label="About" heading="Why MonPro-AI Exists" />
            <BulletList items={ABOUT_POINTS} />
          </div>

          {/* Right — Portrait */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <PortraitPlaceholder
              name="Paramveer Marwah"
              subtitle="Backend Systems Architect for Shopify D2C"
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
