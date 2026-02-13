import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";

const AUDIENCE = [
  "\u20B91\u201320 Cr D2C brands",
  "High COD dependency",
  "Growing Instagram traffic",
  "Manual WhatsApp workflows",
  "Fragmented backend operations",
  "Founders stuck in operations",
];

export default function WhoThisIsFor() {
  return (
    <section className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="Who this is for"
          heading="Built for Scaling Shopify Fashion Brands"
        />
        <BulletList items={AUDIENCE} columns={2} />
      </div>
    </section>
  );
}
