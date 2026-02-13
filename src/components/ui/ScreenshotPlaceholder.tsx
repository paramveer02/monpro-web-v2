interface ScreenshotPlaceholderProps {
  label: string;
  description?: string;
}

export default function ScreenshotPlaceholder({ label, description }: ScreenshotPlaceholderProps) {
  return (
    <div className="rounded-xl border border-border bg-bg-secondary overflow-hidden">
      {/* Mock window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
        <span className="ml-3 text-xs text-text-muted font-mono">{label}</span>
      </div>
      {/* Content area */}
      <div className="aspect-video flex items-center justify-center p-4 sm:p-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent-dim border border-accent-border flex items-center justify-center">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <p className="text-text-muted text-sm">{description || label}</p>
        </div>
      </div>
    </div>
  );
}
