"use client";

interface IntakeFormProps {
  compact?: boolean;
}

export default function IntakeForm({ compact = false }: IntakeFormProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-bg-secondary ${
        compact ? "p-4" : "p-6 sm:p-8"
      }`}
    >
      <a
        href="https://calendly.com/paramvir-marwah/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex justify-center items-center rounded-full bg-accent text-bg-primary font-semibold hover:bg-accent-hover transition-colors min-h-[44px] ${
          compact ? "py-2.5 text-xs" : "py-3 text-sm"
        }`}
      >
        Book Your Free Backend Audit
      </a>
    </div>
  );
}
