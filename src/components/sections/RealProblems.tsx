import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";

const PROBLEMS = [
  "COD RTO quietly eating 15–30% of revenue",
  "Manual COD verification draining team bandwidth",
  "Disconnected tools without system logicc",
  "Support tickets escalating due to backend gaps",
  "No backend visibility",
  "Founders reacting instead of operating",
];

export default function RealProblems() {
  return (
    <section className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="The real problems"
          heading="What's Actually Breaking Your Margins"
        />
        <BulletList items={PROBLEMS} columns={2} />
      </div>
    </section>
  );
}
