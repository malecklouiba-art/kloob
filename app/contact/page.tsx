import type { Metadata } from "next";
import { MapPin, Mail, PhoneCall, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { ZoneMap } from "@/components/ZoneMap";
import { Reveal } from "@/components/Reveal";
import { cities, PHONE_STANDARD, PHONE_EMERGENCY, EMAIL_CONTACT, ADDRESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & devis",
  description:
    "Contactez Elvez pour une demande de devis ou une intervention d'urgence dans les Bouches-du-Rhône. Astreinte disponible 24h/24 et 7j/7.",
};

const contactPoints = [
  { icon: PhoneCall, label: "Standard", value: PHONE_STANDARD, href: `tel:${PHONE_STANDARD.replace(/\s/g, "")}` },
  {
    icon: PhoneCall,
    label: "Astreinte urgence 24/7",
    value: PHONE_EMERGENCY,
    href: `tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`,
    emphasis: true,
  },
  { icon: Mail, label: "Email", value: EMAIL_CONTACT, href: `mailto:${EMAIL_CONTACT}` },
  { icon: MapPin, label: "Adresse", value: ADDRESS },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre besoin en sécurité"
        description="Devis rapide, question sur nos prestations ou urgence : nos équipes vous répondent sur l'ensemble des Bouches-du-Rhône."
      />

      <section className="py-20 sm:py-28">
        <div className="container-elvez grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-10">
            <Reveal>
              <div className="rounded-md border border-amber/30 bg-amber/5 p-6">
                <div className="flex items-center gap-2 text-amber">
                  <Clock size={18} aria-hidden="true" />
                  <p className="text-sm font-semibold">Urgence — intervention immédiate</p>
                </div>
                <p className="mt-2 text-sm text-bone-muted">
                  Une astreinte est joignable 24h/24 et 7j/7 pour toute intervention urgente sur le département.
                </p>
                <a
                  href={`tel:${PHONE_EMERGENCY.replace(/\s/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-sm bg-amber px-5 py-3 text-sm font-semibold text-ink-950 shadow-amber-glow transition-all duration-200 hover:bg-amber-400"
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  {PHONE_EMERGENCY}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="space-y-4">
                {contactPoints.map((c) => (
                  <li key={c.label} className="flex items-start gap-3 rounded-md border border-white/10 bg-ink-800 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-amber/10 text-amber">
                      <c.icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-bone-faint">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-medium text-bone hover:text-amber">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-bone">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                  Zone d'intervention — Bouches-du-Rhône
                </p>
                <div className="mt-4">
                  <ZoneMap />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-bone-muted">{cities.join(" · ")}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-white/10 bg-ink-800 p-6 sm:p-10">
              <h2 className="font-display text-display-3 text-bone">Demande de devis</h2>
              <p className="mt-2 text-sm text-bone-muted">
                Sélectionnez la prestation concernée pour nous permettre de qualifier votre demande.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
