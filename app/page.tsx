import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBadge } from "@/components/TrustBadge";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { services, trustBadges, whyElvez, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Bandeau de réassurance — visible dès le premier scroll */}
      <section className="relative border-y border-white/10 bg-ink-800/60 py-8">
        <div className="container-elvez grid grid-cols-1 gap-4 sm:grid-cols-3">
          {trustBadges.map((b) => (
            <TrustBadge key={b.label} {...b} />
          ))}
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-24 sm:py-30" id="secteurs">
        <div className="container-elvez">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Nos secteurs d'activité</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-1 text-bone">
              Un dispositif adapté à chaque terrain
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                icon={<s.icon size={26} strokeWidth={1.75} aria-hidden="true" />}
                title={s.title}
                tagline={s.tagline}
                description={s.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Elvez */}
      <section className="border-t border-white/10 bg-ink-800/40 py-24 sm:py-30">
        <div className="container-elvez">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Pourquoi choisir Elvez</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-1 text-bone">
              La sécurité prise au sérieux, sans discours
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyElvez.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber/10 text-amber">
                    <item.icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-bone">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-t border-white/10 py-24 sm:py-30">
        <div className="container-elvez">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Elvez en chiffres</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-1 text-bone">
              Un acteur établi dans les Bouches-du-Rhône
            </h2>
          </Reveal>
          <div className="mt-14">
            <StatsCounter stats={stats} />
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="border-t border-white/10 bg-ink-800/40 py-24 sm:py-30">
        <div className="container-elvez">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Ils nous font confiance</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-display-1 text-bone">
              Ce qu'en disent nos clients
            </h2>
          </Reveal>
          <div className="mt-14">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="border-t border-white/10 py-24 sm:py-30" id="devis">
        <div className="container-elvez grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Demande de devis</p>
            <h2 className="mt-4 text-balance font-display text-display-1 text-bone">
              Un dispositif de sécurité en moins de 24h
            </h2>
            <p className="mt-5 max-w-md text-balance leading-relaxed text-bone-muted">
              Décrivez votre besoin en quelques champs, nous revenons vers vous avec une proposition claire
              et chiffrée. Pour une urgence, contactez directement notre astreinte.
            </p>
            <Button href="/contact" variant="secondary" className="mt-8" icon={<ArrowRight size={16} aria-hidden="true" />}>
              Voir tous les moyens de contact
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <QuoteForm compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
