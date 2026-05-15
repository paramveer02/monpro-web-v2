import type { Metadata } from "next";
import { notes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes — MonPro-AI",
  description:
    "Short pieces from ongoing founder conversations and technical breakdowns. By Paramvir Marwah.",
};

export default function NotesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-container">
        <p className="text-accent text-xs font-mono uppercase tracking-[0.2em] mb-4">
          NOTES
        </p>
        <h1 className="text-display-mobile sm:text-display-sm text-text-primary font-bold mb-6">
          Working in public.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-12 sm:mb-16">
          Founder conversations, technical breakdowns, and notes from building
          practical AI automation systems.
        </p>

        <div className="grid gap-4 sm:gap-6">
          {notes.map((note) => (
            <a
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="block rounded-xl border border-border bg-bg-card p-5 sm:p-6 md:p-8 hover:border-accent-border transition-colors duration-300 group"
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-[0.15em] mb-4">
                {note.publishedAt} · {note.readingTime}
              </p>
              <h2 className="text-text-primary text-xl sm:text-2xl font-bold leading-tight mb-3">
                {note.title}
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl group-hover:text-text-primary transition-colors duration-200">
                {note.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
