"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

function StatItem({ value, suffix = "", label }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-display-1 font-bold tabular-nums text-amber">
        <span ref={ref}>{display}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm text-bone-muted">{label}</p>
    </div>
  );
}

interface StatsCounterProps {
  stats: { value: number; suffix?: string; label: string }[];
}

/** Grille de chiffres clés qui s'animent au défilement (comptage progressif). */
export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6"
    >
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </motion.div>
  );
}
