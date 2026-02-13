import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";

const AUDIENCE = [
  "₹1–20 Cr/yr Shopify brands",
  "High COD dependency",
  "Growing paid + organic demand",
  "Manual WhatsApp workflows",
  "Fragmented backend operations",
  "Founder stuck in daily ops",
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
