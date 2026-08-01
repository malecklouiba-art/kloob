"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Positions approximatives, à but illustratif, sur un repère abstrait du département
const markers = [
  { city: "Marseille", x: 62, y: 68, primary: true },
  { city: "Aix-en-Provence", x: 48, y: 40 },
  { city: "Aubagne", x: 70, y: 62 },
  { city: "Martigues", x: 30, y: 55 },
  { city: "Salon-de-Provence", x: 32, y: 25 },
  { city: "Istres", x: 20, y: 40 },
  { city: "Vitrolles", x: 45, y: 52 },
  { city: "Arles", x: 8, y: 20 },
];

/** Représentation stylisée de la zone d'intervention Elvez dans les Bouches-du-Rhône. */
export function ZoneMap() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 bg-ink-800">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" aria-hidden="true" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M6,22 L20,12 L38,10 L52,18 L58,14 L74,20 L82,32 L78,48 L84,58 L76,72 L62,80 L48,86 L34,78 L24,66 L14,58 L8,44 Z"
          fill="rgba(76,134,245,0.06)"
          stroke="rgba(76,134,245,0.35)"
          strokeWidth="0.5"
        />
      </svg>

      {markers.map((m, i) => (
        <motion.div
          key={m.city}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group absolute -translate-x-1/2 -translate-y-full"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          <div className="flex flex-col items-center">
            <span
              className={`whitespace-nowrap rounded-xs px-2 py-1 text-[11px] font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
                m.primary ? "bg-accent text-ink-950" : "glass-panel text-bone"
              }`}
            >
              {m.city}
            </span>
            <MapPin
              size={m.primary ? 26 : 18}
              className={m.primary ? "text-accent drop-shadow-[0_0_8px_rgba(76,134,245,0.6)]" : "text-bone-muted"}
              fill={m.primary ? "currentColor" : "none"}
              aria-label={m.city}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
