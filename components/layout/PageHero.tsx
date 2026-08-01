import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

/** Bandeau d'en-tête réutilisé sur les pages secondaires (services, à propos, contact). */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="container-elvez relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-display-1 text-bone">{title}</h1>
        <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-bone-muted">{description}</p>
        {children}
      </div>
    </section>
  );
}
