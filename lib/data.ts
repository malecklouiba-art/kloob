import type { LucideIcon } from "lucide-react";
import {
  HardHat,
  PartyPopper,
  ShieldCheck,
  Zap,
  MapPinned,
  Wallet,
  Users,
  Clock,
  Award,
  TrendingUp,
  Eye,
  Radio,
  ScanLine,
  Dog,
} from "lucide-react";

export type ServiceSlug = "btp-chantiers" | "evenementiel" | "gardiennage";

export interface Service {
  slug: ServiceSlug;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  bullets: string[];
  useCases: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "btp-chantiers",
    icon: HardHat,
    title: "BTP & Chantiers",
    shortTitle: "BTP & Chantiers",
    tagline: "Vos chantiers protégés, jour et nuit",
    description:
      "Prévention du vol de matériel, rondes de surveillance et gardiennage de nuit pour sécuriser vos chantiers dans les Bouches-du-Rhône.",
    heroDescription:
      "Câbles de cuivre, engins, matériaux stockés : un chantier non gardé est une cible. Elvez déploie des agents formés sur vos sites de Marseille à Salon-de-Provence pour dissuader l'intrusion et réagir en minutes, pas en heures.",
    bullets: [
      "Rondes de surveillance programmées et aléatoires",
      "Gardiennage de nuit et week-end en poste fixe",
      "Prévention du vol de matériel et de vandalisme",
      "Contrôle des accès et badges visiteurs sur site",
      "Levée de doute sur alarme avec compte-rendu horodaté",
      "Coordination directe avec conducteurs de travaux",
    ],
    useCases: [
      {
        title: "Base-vie et matériel en zone isolée",
        description:
          "Sur un chantier d'extension logistique près d'Istres, mise en place d'un agent de nuit avec rondes toutes les 90 minutes et main courante numérique transmise chaque matin au conducteur de travaux.",
      },
      {
        title: "Phase de gros œuvre à Aix-en-Provence",
        description:
          "Surveillance renforcée pendant le stockage de matériaux à forte valeur (cuivre, outillage électroportatif), avec agent posté et vidéosurveillance mobile en complément.",
      },
      {
        title: "Chantier en centre urbain à Marseille",
        description:
          "Filtrage des accès piétons et véhicules en journée pour sécuriser un chantier de réhabilitation en zone dense, en lien avec les riverains et la coordination SPS.",
      },
    ],
  },
  {
    slug: "evenementiel",
    icon: PartyPopper,
    title: "Événementiel",
    shortTitle: "Événementiel",
    tagline: "Des flux maîtrisés, une ambiance préservée",
    description:
      "Sécurisation d'accès, filtrage, gestion des flux et stadiers pour vos événements, soirées privées et manifestations dans le 13.",
    heroDescription:
      "Un événement réussi se prépare en amont : dimensionnement du dispositif, analyse des flux, points de contrôle. Elvez sécurise vos événements publics et privés dans les Bouches-du-Rhône sans jamais casser l'expérience de vos invités.",
    bullets: [
      "Filtrage et contrôle d'accès (billetterie, listes, palpation)",
      "Agents de sécurité incendie et stadiers qualifiés",
      "Gestion des flux et des files d'attente",
      "Sécurisation de soirées privées et réceptions",
      "Encadrement des artistes et zones VIP",
      "Dispositif conforme aux exigences des autorités locales",
    ],
    useCases: [
      {
        title: "Soirée privée à Aubagne",
        description:
          "Dispositif discret de 4 agents pour une réception de 300 personnes : filtrage à l'entrée, surveillance du vestiaire, ronde périmétrique tout au long de la soirée.",
      },
      {
        title: "Salon professionnel à Marseille",
        description:
          "Contrôle d'accès sur badges, gestion des flux entre halls d'exposition et surveillance des stands à forte valeur pendant trois jours de salon.",
      },
      {
        title: "Fête votive à Martigues",
        description:
          "Coordination avec la mairie et les forces de l'ordre pour un dispositif de sécurité événementielle sur voie publique, avec stadiers et agents SSIAP.",
      },
    ],
  },
  {
    slug: "gardiennage",
    icon: ShieldCheck,
    title: "Sécurité privée & gardiennage",
    shortTitle: "Gardiennage",
    tagline: "Une présence constante sur vos sites",
    description:
      "Surveillance de sites tertiaires, télésurveillance, rondes et agents cynophiles pour protéger vos locaux, entrepôts et copropriétés.",
    heroDescription:
      "Bureaux, entrepôts, copropriétés, commerces : chaque site a ses propres risques. Elvez conçoit un dispositif de gardiennage sur-mesure, avec des agents cartes professionnelles présents sur le terrain, pas seulement sur le papier.",
    bullets: [
      "Surveillance humaine de sites tertiaires et industriels",
      "Rondes de nuit et week-end avec compte-rendu",
      "Télésurveillance et levée de doute vidéo",
      "Agents cynophiles pour sites sensibles et entrepôts",
      "Gestion des accès et standard sécurité en journée",
      "Astreinte 24h/24 et 7j/7 sur toute la zone 13",
    ],
    useCases: [
      {
        title: "Entrepôt logistique à Salon-de-Provence",
        description:
          "Poste de gardiennage 24/7 avec agent cynophile en rondes de nuit, contrôle des entrées/sorties camions et gestion des accès prestataires.",
      },
      {
        title: "Copropriété tertiaire à Aix-en-Provence",
        description:
          "Surveillance générale du site, filtrage des visiteurs à l'accueil et rondes de fermeture pour un parc d'activités regroupant une douzaine d'entreprises.",
      },
      {
        title: "Site industriel à Martigues",
        description:
          "Dispositif combinant agent posté en journée et télésurveillance la nuit, avec levée de doute physique sous 20 minutes en cas d'alarme.",
      },
    ],
  },
];

export const trustBadges = [
  {
    icon: ShieldCheck,
    label: "Agréé CNAPS",
    detail: "Autorisation d'exercice délivrée par le Conseil National des Activités Privées de Sécurité",
  },
  {
    icon: Award,
    label: "Agents cartes professionnelles",
    detail: "Titulaires de la carte professionnelle CQP APS, formation continue assurée",
  },
  {
    icon: Clock,
    label: "Disponibilité 24/7",
    detail: "Astreinte permanente et intervention rapide sur l'ensemble du département",
  },
];

export const whyElvez = [
  {
    icon: Zap,
    title: "Réactivité locale",
    description:
      "Agents basés dans le 13, intervention rapide de Marseille à Istres sans délai de mobilisation.",
  },
  {
    icon: Users,
    title: "Encadrement direct, sans sous-traitance",
    description:
      "Nos agents sont salariés Elvez et encadrés par nos chefs d'équipe. Aucune sous-traitance en cascade.",
  },
  {
    icon: Wallet,
    title: "Tarifs transparents",
    description:
      "Devis détaillé avant intervention, facturation claire, aucune surprise en fin de mission.",
  },
  {
    icon: MapPinned,
    title: "Connaissance du territoire",
    description:
      "Une implantation historique dans les Bouches-du-Rhône et une connaissance fine des enjeux locaux.",
  },
];

export const stats = [
  { value: 12, suffix: " ans", label: "d'expérience sur le terrain" },
  { value: 85, suffix: "+", label: "agents professionnels" },
  { value: 3400, suffix: "+", label: "interventions par an" },
  { value: 98, suffix: "%", label: "de clients satisfaits" },
];

export const testimonials = [
  {
    name: "Frédéric M.",
    role: "Conducteur de travaux, Marseille",
    quote:
      "Deux vols de câbles en début de chantier, plus aucun depuis qu'Elvez assure les rondes de nuit. L'équipe est réactive et les comptes-rendus sont précis chaque matin.",
  },
  {
    name: "Sophie R.",
    role: "Directrice d'événements, Aix-en-Provence",
    quote:
      "Un dispositif dimensionné juste, des agents discrets mais efficaces. Nos invités n'ont vu que le meilleur de la soirée, la sécurité s'est occupée du reste.",
  },
  {
    name: "Karim B.",
    role: "Gérant d'entrepôt, Salon-de-Provence",
    quote:
      "La télésurveillance couplée aux rondes cynophiles nous a permis de réduire nos primes d'assurance. Interlocuteur unique, jamais de sous-traitant inconnu sur le site.",
  },
  {
    name: "Nathalie D.",
    role: "Syndic de copropriété, Aubagne",
    quote:
      "Elvez a repris la sécurité de notre parc d'activités après un prestataire décevant. Depuis, les incidents ont quasiment disparu et la communication est fluide.",
  },
];

export const cities = [
  "Marseille",
  "Aix-en-Provence",
  "Aubagne",
  "Martigues",
  "Salon-de-Provence",
  "Istres",
  "Vitrolles",
  "Arles",
  "Marignane",
  "La Ciotat",
  "Gardanne",
  "Miramas",
];

export const navServices = services.map((s) => ({
  slug: s.slug,
  title: s.shortTitle,
  tagline: s.tagline,
  icon: s.icon,
}));

export const additionalCapabilities = [
  { icon: Eye, label: "Levée de doute" },
  { icon: Radio, label: "Télésurveillance" },
  { icon: ScanLine, label: "Contrôle d'accès" },
  { icon: Dog, label: "Agents cynophiles" },
  { icon: TrendingUp, label: "Reporting digital" },
];

export const CNAPS_NUMBER = "AUT-013-2XXX-XX-XXXXXXXX";
export const PHONE_STANDARD = "04 42 00 00 00";
export const PHONE_EMERGENCY = "06 00 00 00 00";
export const EMAIL_CONTACT = "contact@elvez-securite.fr";
export const ADDRESS = "12 avenue de la Sécurité, 13001 Marseille";
