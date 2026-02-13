import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="section-padding section-divider">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-mobile sm:text-heading md:text-display-sm text-text-primary font-bold mb-6 sm:mb-8">
            If your operations are leaking revenue,{" "}
            <span className="text-accent">we should talk.</span>
          </h2>

          <p className="text-text-secondary text-sm sm:text-base mb-8">
            30-minute call. Clear diagnosis. No cost. No obligation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button variant="primary" href="#get-started">
              Get Free Audit
            </Button>
            <Button variant="secondary" href="#contact">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
