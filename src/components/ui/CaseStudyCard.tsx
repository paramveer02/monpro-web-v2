interface CaseStudyCardProps {
  brand: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  source?: string;
}

export default function CaseStudyCard({
  brand,
  industry,
  challenge,
  solution,
  results,
  source,
}: CaseStudyCardProps) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-5 sm:p-6 md:p-8">
      {/* Brand header */}
      <div className="mb-5 sm:mb-6">
        <h3 className="text-text-primary text-lg sm:text-xl font-bold mb-1">{brand}</h3>
        <p className="text-text-muted text-xs uppercase tracking-wide">{industry}</p>
      </div>

      {/* Challenge */}
      <div className="mb-4 sm:mb-5">
        <p className="text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Challenge</p>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-4 sm:mb-5">
        <p className="text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Solution</p>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{solution}</p>
      </div>

      {/* Results - highlighted */}
      <div className="pt-4 sm:pt-5 border-t border-border">
        <p className="text-text-muted text-xs font-semibold uppercase tracking-wide mb-2">Results</p>
        <p className="text-accent text-base sm:text-lg font-semibold leading-relaxed">{results}</p>
        {source && (
          <p className="text-text-muted text-xs mt-2">{source}</p>
        )}
      </div>
    </div>
  );
}
