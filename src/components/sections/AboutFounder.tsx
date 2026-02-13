import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";

const ABOUT_POINTS = [
  "Built and shipped real systems for D2C brands",
  "Operations-first thinking",
  "No hype",
  "Long-term operational clarity",
  "Based in Germany, focused on the Indian D2C market",
  "Built for scaling Indian D2C brands",
];

export default function AboutFounder() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Left — Content */}
          <div className="md:col-span-3">
            <SectionHeading
              label="About"
              heading="Why MonPro-AI Exists"
            />
            <BulletList items={ABOUT_POINTS} />
          </div>

          {/* Right — Portrait */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <PortraitPlaceholder
              name="Paramveer Marwah"
              subtitle="Founder, MonPro-AI"
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
