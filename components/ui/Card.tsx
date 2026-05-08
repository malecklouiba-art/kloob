import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  glass?: boolean;
}

export function Card({
  className,
  elevated,
  glass,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-5",
        elevated && "shadow-elev-2 border-transparent",
        glass && "glass border-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
