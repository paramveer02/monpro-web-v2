import SectionHeading from "@/components/ui/SectionHeading";
import BulletList from "@/components/ui/BulletList";

const PROBLEMS = [
  "COD RTO eating 15\u201330% of profits",
  "Manual verification draining team bandwidth",
  "Automation tools without logic",
  "Customer support chaos",
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
