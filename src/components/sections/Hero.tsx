import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-12">
      {/* Subtle top-left accent glow */}
      <div
        className="absolute top-0 left-0 w-[min(600px,100vw)] h-[min(600px,100vh)] opacity-[0.04] pointer-events-none overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, #38BDF8, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container w-full">
        <div className="max-w-3xl">
          <p className="text-accent text-xs font-mono uppercase tracking-[0.2em] mb-4 sm:mb-6 animate-fade-in">
            AI AUTOMATION · IN DISCOVERY
          </p>

          <h1 className="text-display-mobile sm:text-display-sm md:text-display text-text-primary font-bold mb-4 sm:mb-6 animate-slide-up">
            Talking to founders.{" "}
            <span className="text-accent">Building what actually helps.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10 animate-slide-up">
            I&apos;m a developer turned AI consultant. Right now I&apos;m in conversation
            with founders of small agencies and Shopify merchants to understand
            where AI workflows actually move the needle — and where they&apos;re hype.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animate-slide-up">
            <Button
              variant="primary"
              href="https://calendly.com/paramvir-marwah/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 20-min conversation
            </Button>
            <a
              href="#notes"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200 flex items-center gap-1 py-3"
            >
              Read the notes →
            </a>
          </div>

          <p className="text-text-muted font-mono text-xs sm:text-sm tracking-wide animate-fade-in">
            Paramveer Marwah · Leipzig, Germany
          </p>
        </div>
      </div>
    </section>
  );
}
