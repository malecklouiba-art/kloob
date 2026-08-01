"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { PHONE_EMERGENCY } from "@/lib/data";

/**
 * CTA unique et permanent : bouton flottant "Urgence 24/7" qui laisse
 * respirer le hero puis reste ancré en bas d'écran sur mobile.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 px-4 py-3 backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:right-6 sm:rounded-full sm:border sm:px-2 sm:py-2 sm:shadow-elev-3"
        >
          <Link
            href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 shadow-accent-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall size={17} aria-hidden="true" />
            Urgence 24/7 — {PHONE_EMERGENCY}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
