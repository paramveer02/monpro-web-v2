interface BulletListProps {
  items: string[];
  columns?: 1 | 2 | 3;
}

export default function BulletList({ items, columns = 1 }: BulletListProps) {
  const gridClass =
    columns === 3
      ? "md:grid-cols-3"
      : columns === 2
      ? "md:grid-cols-2"
      : "grid-cols-1";

  return (
    <ul className={`grid gap-4 ${gridClass}`}>
      {items.map((item, i) => (
        <li key={i} className="bullet-item">
          <span className="bullet-dot" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
