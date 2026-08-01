"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/Button";
import { PHONE_EMERGENCY } from "@/lib/data";

/** Hero plein écran de la page d'accueil : accroche, zone d'intervention, double CTA. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-950 pt-28">
      {/* Motif géométrique subtil en fond, placeholder en attendant les vraies photos */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-noise"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-elvez relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Agréé CNAPS · Bouches-du-Rhône
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl text-balance font-display text-hero text-bone"
        >
          Elvez, votre société de sécurité dans les Bouches-du-Rhône
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-bone-muted sm:text-xl"
        >
          Chantiers, événements, sites tertiaires et industriels : nos agents cartes professionnelles
          protègent vos biens et vos personnes de Marseille à Salon-de-Provence, avec une réactivité
          de terrain et une astreinte 24h/24.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Demander un devis
          </Button>
          <Button
            href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
            size="lg"
            variant="emergency"
            icon={<PhoneCall size={18} aria-hidden="true" />}
          >
            Appel d'urgence 24h/24
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[11px] font-medium uppercase tracking-wider text-bone-faint">Défiler</span>
        <span className="h-9 w-px bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>
    </section>
  );
}
