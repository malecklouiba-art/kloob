"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  slug: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  index?: number;
}

/**
 * Carte cliquable présentant un secteur d'activité, avec renvoi vers sa page dédiée.
 * `icon` est un élément déjà rendu (et non un composant) : un Server Component ne peut
 * pas transmettre une référence de fonction/composant à un Client Component.
 */
export function ServiceCard({ slug, icon, title, tagline, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-ink-800 p-7 transition-all duration-300 ease-sharp hover:-translate-y-1.5 hover:border-amber/40 hover:shadow-elev-3"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-radial-fade opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="relative flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-amber/10 text-amber transition-colors duration-300 group-hover:bg-amber group-hover:text-ink-950">
            {icon}
          </span>
          <ArrowUpRight
            size={22}
            className="text-bone-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
            aria-hidden="true"
          />
        </div>

        <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight text-bone">
          {title}
        </h3>
        <p className="relative mt-1 text-sm font-medium text-amber">{tagline}</p>
        <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-bone-muted">
          {description}
        </p>
        <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bone underline decoration-amber/40 decoration-2 underline-offset-4 group-hover:text-amber">
          Découvrir le service
        </span>
      </Link>
    </motion.div>
  );
}
