interface PortraitPlaceholderProps {
  name?: string;
  subtitle?: string;
  size?: "sm" | "lg";
}

export default function PortraitPlaceholder({
  name = "Paramveer Marwah",
  subtitle = "Shopify Ops Systems Architect",
  size = "lg",
}: PortraitPlaceholderProps) {
  const dimensions =
    size === "lg"
      ? "w-48 sm:w-64 h-64 sm:h-80 md:w-72 md:h-96"
      : "w-36 sm:w-48 h-48 sm:h-60";

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Portrait frame */}
      <div
        className={`${dimensions} rounded-2xl bg-bg-tertiary border border-border-light relative overflow-hidden flex items-end justify-center`}
      >
        {/* Silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-32 h-32 text-border-light"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        {/* Subtle accent line at bottom */}
        <div className="w-full h-px bg-accent/20" />
      </div>
      {/* Name + role */}
      <div className="text-center">
        <p className="text-text-primary font-semibold text-base sm:text-lg">
          {name}
        </p>
        <p className="text-text-muted text-xs sm:text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
