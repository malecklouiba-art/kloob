"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScoreGaugeProps {
  value: number;
  max?: number;
  className?: string;
}

export function ScoreGauge({ value, max = 100, className }: ScoreGaugeProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn("relative h-[2px] w-full overflow-hidden rounded-full bg-border", className)}
    >
      <motion.div
        className="h-full rounded-full bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      />
    </div>
  );
}
