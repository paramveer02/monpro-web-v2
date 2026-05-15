import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="CONTACT"
          heading="Let's talk."
          description="20 minutes. No pitch. No charge. Just a conversation about your operations."
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-start">
          {/* Left — Calendar + direct links */}
          <div>
            <Button
              variant="primary"
              href="https://calendly.com/paramvir-marwah/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 20-min call
            </Button>

            <div className="mt-8 space-y-3">
              <p className="text-text-secondary text-sm">
                Email:{" "}
                <a
                  href="mailto:service@monpro-ai.com"
                  className="text-text-primary hover:text-accent transition-colors duration-200"
                >
                  service@monpro-ai.com
                </a>
              </p>
              <p className="text-text-secondary text-sm">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/paramveer-marwah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors duration-200"
                >
                  Paramvir-marwah
                </a>
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div>
            <p className="text-text-muted text-sm mb-6 font-mono uppercase tracking-[0.15em]">
              Or send a message
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
