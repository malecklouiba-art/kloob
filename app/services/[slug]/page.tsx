import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { UseCaseCard } from "@/components/UseCaseCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { QuoteForm } from "@/components/QuoteForm";
import { services, PHONE_EMERGENCY } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={`Secteur — ${service.title}`} title={service.tagline} description={service.heroDescription}>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Demander un devis
          </Button>
          <Button
            href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
            size="lg"
            variant="emergency"
            icon={<PhoneCall size={18} aria-hidden="true" />}
          >
            Urgence 24h/24
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-elvez grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Ce que couvre la prestation</p>
            <h2 className="mt-4 font-display text-display-2 text-bone">Notre dispositif « {service.title} »</h2>
            <ul className="mt-8 space-y-4">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[15px] leading-relaxed text-bone-muted">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950 p-1">
              <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-md bg-grid-pattern bg-grid p-8">
                <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
                <service.icon size={48} strokeWidth={1.25} className="relative mb-4 text-accent" aria-hidden="true" />
                <p className="relative font-display text-2xl font-bold text-bone">{service.title}</p>
                <p className="relative mt-2 text-sm text-bone-muted">
                  Intervention sur l'ensemble des Bouches-du-Rhône, agents cartes professionnelles CQP APS.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-800/40 py-20 sm:py-28">
        <div className="container-elvez">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Sur le terrain</p>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-2 text-bone">
              Cas d'usage dans les Bouches-du-Rhône
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 0.08}>
                <UseCaseCard title={uc.title} description={uc.description} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 sm:py-28">
        <div className="container-elvez">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Autres secteurs</p>
            <h2 className="mt-4 font-display text-display-2 text-bone">Explorer nos autres services</h2>
          </Reveal>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-1 items-center justify-between gap-4 rounded-md border border-white/10 bg-ink-800 px-6 py-5 transition-colors duration-200 hover:border-accent/40"
              >
                <div className="flex items-center gap-3">
                  <s.icon size={22} className="text-accent" aria-hidden="true" />
                  <span className="font-semibold text-bone">{s.title}</span>
                </div>
                <ArrowRight
                  size={18}
                  className="text-bone-faint transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-800/40 py-20 sm:py-28" id="devis">
        <div className="container-elvez">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Devis {service.title}</p>
              <h2 className="mt-4 font-display text-display-2 text-bone">Obtenez votre proposition chiffrée</h2>
              <p className="mt-4 text-bone-muted">Réponse sous 24h ouvrées, sans engagement.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <QuoteForm defaultService={service.slug} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
