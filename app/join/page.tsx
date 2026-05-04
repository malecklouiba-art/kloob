"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  MessageSquare,
  Calendar,
  Sparkles,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Sheet } from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";

const benefits = [
  { Icon: Users, label: "Un cercle coopté", desc: "Des membres engagés, sélectionnés un par un." },
  { Icon: MessageSquare, label: "Le canal d'entraide", desc: "Une réponse en moins de 48 h, garantie par la charte." },
  { Icon: Sparkles, label: "Échanges de services", desc: "Compétences, conseils, mises en relation entre pairs." },
  { Icon: Calendar, label: "Rituels & événements", desc: "Afterworks, masterclass, gala annuel." },
  { Icon: Award, label: "Score de contribution", desc: "Ta présence reconnue chaque trimestre." },
  { Icon: ShieldCheck, label: "Discrétion absolue", desc: "Pas de promo, pas de spam, jamais de revente." },
];

export default function JoinPage() {
  const [yearly, setYearly] = useState(false);
  const [referred] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);

  const entryFee = referred ? 100 : 150;
  const recurring = yearly ? 300 : 30;

  return (
    <div className="min-h-svh bg-bg-primary">
      {/* Hero */}
      <section className="bg-[#0A1F44] px-5 py-9 lg:py-9 lg:px-7">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="inline-block">
            <span className="font-display text-title-3 text-white">
              kloob<span className="text-gold">.</span>
            </span>
          </Link>
          <h1 className="mt-7 font-display text-display text-white">
            Bienvenue dans Kloob.
          </h1>
          <p className="mt-3 font-display text-title-3 text-gold">
            L'entrée se mérite et se confirme.
          </p>
          <p className="mt-4 max-w-xl text-callout text-white/70">
            Tu as été coopté, reçu en entretien, et la charte t'attend. Une dernière étape.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-5 py-7 lg:py-9 lg:px-7">
        <div className="mx-auto max-w-2xl">
          <Card elevated className="relative overflow-hidden p-6 lg:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-caption uppercase text-gold">Adhésion</p>
                <h2 className="mt-1 font-display text-title-1 text-text-primary">
                  Membre Kloob
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className={cn("text-subhead", !yearly ? "text-text-primary" : "text-text-tertiary")}>
                  Mensuel
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={yearly}
                  onClick={() => setYearly((y) => !y)}
                  className={cn(
                    "relative h-6 w-11 rounded-full transition-colors duration-180",
                    yearly ? "bg-accent" : "bg-border",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-elev-1 transition-transform duration-220 ease-spring",
                      yearly ? "translate-x-[22px]" : "translate-x-0.5",
                    )}
                  />
                </button>
                <span className={cn("text-subhead", yearly ? "text-text-primary" : "text-text-tertiary")}>
                  Annuel
                </span>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            <dl className="space-y-4">
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-callout text-text-secondary">Droit d'entrée</dt>
                <dd className="font-display">
                  {referred && (
                    <span className="mr-2 text-headline text-text-tertiary line-through">
                      150 €
                    </span>
                  )}
                  <span className="font-mono text-title-2 text-text-primary">{entryFee} €</span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-callout text-text-secondary">
                  Cotisation {yearly ? "annuelle" : "mensuelle"}
                </dt>
                <dd className="font-display">
                  <span className="font-mono text-title-2 text-text-primary">
                    {recurring} €
                  </span>
                  <span className="ml-1 text-footnote text-text-tertiary">
                    /{yearly ? "an" : "mois"}
                  </span>
                </dd>
              </div>
              {yearly && (
                <p className="text-footnote text-success">Tu économises 60 € sur l'année.</p>
              )}
            </dl>

            <div className="my-6 h-px bg-border" />

            <h3 className="mb-4 text-headline text-text-primary">Ce que tu obtiens</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map(({ Icon, label, desc }) => (
                <li key={label} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-headline text-text-primary">{label}</p>
                    <p className="text-subhead text-text-secondary">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              fullWidth
              size="lg"
              className="mt-7"
              onClick={() => setSheetOpen(true)}
            >
              Confirmer mon adhésion · {entryFee} € puis {recurring} €/{yearly ? "an" : "mois"}
            </Button>
            <p className="mt-3 text-center text-footnote text-text-tertiary">
              En adhérant, tu signes la{" "}
              <Link href="/charter" className="underline decoration-text-tertiary underline-offset-2 hover:text-text-secondary">
                charte du membre
              </Link>
              .
            </p>
          </Card>
        </div>
      </section>

      <Sheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Paiement"
      >
        <p className="text-body text-text-secondary">
          Paiement Stripe — Apple Pay & Google Pay disponibles. (Intégration à venir.)
        </p>
        <div className="mt-5 flex gap-2">
          <Button variant="secondary" onClick={() => setSheetOpen(false)} fullWidth>
            Annuler
          </Button>
          <Button fullWidth>Continuer</Button>
        </div>
      </Sheet>
    </div>
  );
}
