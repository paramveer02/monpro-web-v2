import Button from "@/components/ui/Button";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-12">
      {/* Subtle top-left accent glow — clamped to prevent overflow */}
      <div
        className="absolute top-0 left-0 w-[min(600px,100vw)] h-[min(600px,100vh)] opacity-[0.04] pointer-events-none overflow-hidden"
        style={{
          background: "radial-gradient(circle at 0% 0%, #38BDF8, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
          {/* Left — Copy */}
          <div className="md:col-span-3">
            <p className="text-accent text-xs font-mono uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Backend Systems Consulting
            </p>

            <h1 className="text-display-mobile sm:text-display-sm md:text-display text-text-primary font-bold mb-4 sm:mb-6">
              Your marketing isn&apos;t the problem.{" "}
              <span className="text-accent">Your backend is leaking.</span>
            </h1>

            <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10">
              I design AI-driven backend systems for Shopify fashion brands that
              remove revenue leaks, manual chaos, and operational bottlenecks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="primary" href="#get-started">
                Get Free Audit
              </Button>
              <Button variant="secondary" href="#systems">
                View Systems
              </Button>
            </div>
          </div>

          {/* Right — Portrait (hidden on very small screens, shown from sm up) */}
          <div className="hidden sm:flex md:col-span-2 justify-center md:justify-end">
            <PortraitPlaceholder
              name="Paramveer Marwah"
              subtitle="AI Systems Architect for Shopify"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
