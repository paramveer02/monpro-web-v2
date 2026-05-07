import SectionHeading from "@/components/ui/SectionHeading";
import { notes } from "@/lib/notes";

export default function Notes() {
  return (
    <section id="notes" className="section-padding section-divider">
      <div className="section-container">
        <SectionHeading
          label="NOTES"
          heading="Working in public."
          description="Short pieces from ongoing founder conversations and technical breakdowns. Updated as I learn."
        />

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {notes.map((note) => (
            <a
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="rounded-xl border border-border bg-bg-card p-5 sm:p-6 hover:border-accent-border transition-colors duration-300 group block min-h-[44px]"
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-[0.15em] mb-4">
                {note.readingTime}
              </p>
              <h3 className="text-text-primary font-semibold text-base sm:text-lg leading-snug mb-3">
                {note.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-200">
                {note.excerpt}
              </p>
            </a>
          ))}
        </div>

        <a
          href="/notes"
          className="text-accent text-sm font-mono hover:text-accent-hover transition-colors duration-200"
        >
          All notes →
        </a>
      </div>
    </section>
  );
}
