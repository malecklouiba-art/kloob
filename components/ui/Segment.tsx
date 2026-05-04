"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface SegmentOption<T extends string> {
  value: T;
  label: string;
}

interface SegmentProps<T extends string> {
  value: T;
  onChange: (next: T) => void;
  options: ReadonlyArray<SegmentOption<T>>;
  className?: string;
}

export function Segment<T extends string>({
  value,
  onChange,
  options,
  className,
}: SegmentProps<T>) {
  const id = useId();
  return (
    <div
      role="tablist"
      className={cn(
        "relative inline-flex rounded-md bg-bg-grouped p-1",
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative z-10 px-4 py-1.5 text-subhead font-medium transition-colors duration-180",
              active ? "text-text-primary" : "text-text-secondary",
            )}
          >
            {active && (
              <motion.span
                layoutId={`segment-${id}`}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-[10px] bg-surface shadow-elev-1"
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
