import { cn } from "@/lib/utils";

type Variant = "default" | "gold" | "success" | "warning" | "danger" | "navy";

interface BadgeProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  default: "bg-bg-grouped text-text-secondary",
  gold: "bg-gold/15 text-gold",
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/15 text-danger",
  navy: "bg-accent/10 text-accent",
};

export function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2 font-text text-caption font-semibold uppercase",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
