import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/* ── Variants ── */
type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-bg-primary hover:bg-accent-hover font-semibold",
  secondary:
    "border border-border-light text-text-primary hover:border-accent hover:text-accent",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

/* ── Shared base styles ── */
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none min-h-[44px]";

/* ── As <button> ── */
interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: never;
}

/* ── As <a> ── */
interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {rest.children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {(props as ButtonAsButton).children}
    </button>
  );
}
