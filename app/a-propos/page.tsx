import type { Metadata } from "next";
import { ShieldCheck, Target, Users2, ScrollText, GraduationCap, Handshake } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatsCounter } from "@/components/StatsCounter";
import { stats, CNAPS_NUMBER } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Elvez, société de sécurité privée agréée CNAPS implantée dans les Bouches-du-Rhône : histoire, valeurs et engagements qualité.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Rigueur",
    description: "Chaque mission fait l'objet d'une analyse de risques préalable et d'un dispositif écrit.",
  },
  {
    icon: Target,
    title: "Réactivité",
    description: "Une astreinte permanente et des équipes basées dans le 13 pour intervenir sans délai.",
  },
  {
    icon: Handshake,
    title: "Transparence",
    description: "Devis détaillés, comptes-rendus systématiques, un interlocuteur unique tout au long de la mission.",
  },
  {
    icon: Users2,
    title: "Proximité",
    description: "Une relation directe avec nos clients, sans intermédiaire ni sous-traitance en cascade.",
  },
];

const commitments = [
  {
    title: "Conformité au Livre VI du Code de la sécurité intérieure",
    description:
      "L'ensemble de notre activité respecte le cadre légal encadrant les activités privées de sécurité : autorisation d'exercice CNAPS, aptitude professionnelle et carte professionnelle de chaque agent.",
  },
  {
    title: "Formation continue",
    description:
      "Nos agents sont titulaires du CQP APS et suivent des recyclages réguliers (SST, habilitations spécifiques, gestes et postures, gestion de conflit).",
  },
  {
    title: "Encadrement de proximité",
    description:
      "Chaque site est suivi par un chef d'équipe Elvez, joignable directement, garant du respect des consignes et de la qualité de service.",
  },
  {
    title: "Assurance et responsabilité civile professionnelle",
    description:
      "Nos prestations sont couvertes par une assurance responsabilité civile professionnelle adaptée aux activités de sécurité privée.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos d'Elvez"
        title="Une société de sécurité ancrée dans les Bouches-du-Rhône"
        description="Depuis plus de dix ans, Elvez accompagne entreprises, promoteurs et organisateurs d'événements dans la protection de leurs sites, chantiers et manifestations sur l'ensemble du département."
      />

      <section className="py-20 sm:py-28">
        <div className="container-elvez grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Notre histoire</p>
            <h2 className="mt-4 font-display text-display-2 text-bone">Née sur le terrain, restée sur le terrain</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-bone-muted">
              <p>
                Elvez est fondée par des professionnels issus du secteur de la sécurité privée et de la gestion de
                chantiers, constatant un même problème récurrent chez leurs clients : des prestataires distants,
                peu réactifs, avec une sous-traitance difficile à contrôler.
              </p>
              <p>
                L'entreprise se construit alors autour d'un principe simple : des agents salariés Elvez, encadrés
                directement, basés dans les Bouches-du-Rhône, capables d'intervenir rapidement de Marseille à
                Salon-de-Provence.
              </p>
              <p>
                Aujourd'hui, Elvez intervient aussi bien sur des chantiers BTP que lors d'événements privés et
                publics, ou pour la surveillance permanente de sites tertiaires et industriels — toujours avec la
                même exigence de terrain.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber">Nos valeurs</p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-md border border-white/10 bg-ink-800 p-5">
                  <v.icon size={22} className="text-amber" strokeWidth={1.75} aria-hidden="true" />
                  <p className="mt-3 font-display text-base font-bold text-bone">{v.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-bone-muted">{v.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-800/40 py-20 sm:py-28">
        <div className="container-elvez">
          <Reveal>
            <StatsCounter stats={stats} />
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-elvez">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap size={22} className="text-amber" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider text-amber">Équipe & encadrement</p>
            </div>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-2 text-bone">
              Des agents formés, un encadrement présent
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-bone-muted">
              Chaque mission est confiée à des agents titulaires de la carte professionnelle CQP APS, sélectionnés
              pour leur expérience du secteur concerné (chantier, événementiel ou gardiennage). Un responsable
              d'exploitation Elvez supervise l'ensemble des sites et reste joignable en direct, sans standard
              délocalisé ni plateforme anonyme.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink-800/40 py-20 sm:py-28">
        <div className="container-elvez">
          <Reveal>
            <div className="flex items-center gap-3">
              <ScrollText size={22} className="text-amber" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-wider text-amber">Qualité & conformité</p>
            </div>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-display-2 text-bone">
              Nos engagements réglementaires
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-md border border-white/10 bg-ink-800 p-6">
                  <h3 className="font-display text-lg font-bold text-bone">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-muted">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10">
            <div className="rounded-md border border-amber/25 bg-amber/5 px-6 py-5">
              <p className="text-sm text-bone-muted">
                <span className="font-semibold text-amber">Autorisation d'exercice CNAPS n° {CNAPS_NUMBER}.</span>{" "}
                Elvez exerce ses activités de sécurité privée conformément aux dispositions du Livre VI du Code de
                la sécurité intérieure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
