import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "emergency";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber text-ink-950 hover:bg-amber-400 shadow-amber-glow hover:shadow-amber-glow active:scale-[0.98]",
  secondary:
    "bg-transparent text-bone border border-bone/25 hover:border-amber/60 hover:text-amber active:scale-[0.98]",
  ghost: "bg-white/5 text-bone hover:bg-white/10 active:scale-[0.98]",
  emergency:
    "bg-ink-800 text-amber border border-amber/40 hover:bg-ink-700 hover:border-amber active:scale-[0.98]",
};

const sizeClasses = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-tight transition-all duration-200 ease-sharp whitespace-nowrap";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  href,
  ...rest
}: BaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
