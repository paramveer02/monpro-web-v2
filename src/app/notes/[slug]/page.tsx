import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNoteBySlug, notes } from "@/lib/notes";

interface NotePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note not found — MonPro-AI",
    };
  }

  return {
    title: note.metadata.title,
    description: note.metadata.description,
    openGraph: {
      title: note.metadata.title,
      description: note.metadata.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: note.metadata.title,
      description: note.metadata.description,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 sm:pt-32 pb-24">
      <article className="section-container">
        <a
          href="/notes"
          className="inline-flex text-accent text-sm font-mono hover:text-accent-hover transition-colors duration-200 mb-10"
        >
          ← All notes
        </a>

        <header className="max-w-3xl mb-10 sm:mb-14">
          <p className="text-text-muted text-xs font-mono uppercase tracking-[0.15em] mb-4">
            {note.publishedAt} · {note.readingTime}
          </p>
          <h1 className="text-display-mobile sm:text-display-sm md:text-display text-text-primary font-bold mb-6">
            {note.title}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed">
            {note.excerpt}
          </p>
        </header>

        <div className="max-w-3xl space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
          {note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {note.sources && note.sources.length > 0 && (
          <footer className="max-w-3xl mt-12 sm:mt-16 pt-8 border-t border-border">
            <p className="text-text-muted text-xs font-mono uppercase tracking-[0.15em] mb-4">
              Sources
            </p>
            <ul className="space-y-3">
              {note.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </article>
    </main>
  );
}
