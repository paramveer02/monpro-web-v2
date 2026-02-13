interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  brand: string;
}

export default function TestimonialCard({ quote, name, role, brand }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-5 sm:p-6 md:p-8">
      {/* Quote mark */}
      <span className="text-accent text-2xl sm:text-3xl font-serif leading-none block mb-3 sm:mb-4">&ldquo;</span>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-bg-tertiary border border-border-light flex items-center justify-center">
          <span className="text-text-muted text-xs font-semibold">
            {name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-text-primary text-sm font-medium">{name}</p>
          <p className="text-text-muted text-xs">
            {role}, {brand}
          </p>
        </div>
      </div>
    </div>
  );
}
