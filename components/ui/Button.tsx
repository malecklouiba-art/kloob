"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-on hover:opacity-90",
  secondary:
    "bg-transparent text-text-primary border border-border hover:bg-bg-grouped",
  ghost: "bg-transparent text-text-primary hover:bg-bg-grouped",
  danger: "bg-danger text-white hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-subhead rounded-sm",
  md: "h-11 px-4 text-headline rounded-md",
  lg: "h-12 px-5 text-headline rounded-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-text font-semibold",
          "transition-all duration-180 ease-out",
          "active:scale-[0.97] active:opacity-90",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
