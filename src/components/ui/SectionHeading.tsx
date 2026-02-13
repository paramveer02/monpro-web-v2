interface SectionHeadingProps {
  label?: string;        // small uppercase label above heading
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <p className="text-accent text-xs font-mono uppercase tracking-[0.2em] mb-3 sm:mb-4">
          {label}
        </p>
      )}
      <h2 className="text-heading-mobile sm:text-heading md:text-display-sm text-text-primary font-bold">
        {heading}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
