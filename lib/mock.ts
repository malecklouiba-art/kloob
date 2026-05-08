export const currentUser = {
  name: "Yazid",
  fullName: "Yazid Belkadi",
  trimesterScore: 72,
  founder: true,
};

export const featuredRequest = {
  author: { name: "Inès Moreau", skill: "Product · early-stage" },
  body: "Je cherche un retour structuré sur mon pricing SaaS B2B avant un board mardi. 30 min suffisent — je peux échanger contre du copywriting LP.",
  skill: "Pricing",
  postedAt: "il y a 2 h",
};

export const quickActions = [
  { key: "ask", label: "Demander de l'aide", icon: "HelpCircle" },
  { key: "tip", label: "Partager un bon plan", icon: "Sparkles" },
  { key: "agenda", label: "Voir l'agenda", icon: "Calendar" },
  { key: "invite", label: "Inviter un proche", icon: "UserPlus" },
] as const;

export const nextRitual = {
  title: "Afterwork mensuel · Paris",
  date: "Jeudi 14 mai · 19 h 30",
  location: "Le Perchoir, Ménilmontant",
  attendees: 23,
  capacity: 35,
  going: false,
};

export const topContributors = [
  { name: "Camille Roux", services: 8 },
  { name: "Léo Tanaka", services: 7 },
  { name: "Hadrien V.", services: 6 },
  { name: "Sarah Benali", services: 5 },
  { name: "Marc Fournier", services: 5, founder: true },
  { name: "Eva Chen", services: 4 },
];

export const dailyQuote =
  "On entre par cooptation, on reste par contribution.";

export const openMatchingRequests = 3;

export type FeedKind = "request" | "tip" | "announcement";

export const feedPosts: Array<{
  id: string;
  author: { name: string; skill: string; founder?: boolean };
  kind: FeedKind;
  body: string;
  postedAt: string;
  replies: number;
  helped: number;
}> = [
  {
    id: "1",
    author: { name: "Inès Moreau", skill: "Product · early-stage" },
    kind: "request",
    body: "Je cherche un retour structuré sur mon pricing SaaS B2B avant un board mardi. 30 min suffisent — je peux échanger contre du copywriting LP.",
    postedAt: "il y a 2 h",
    replies: 4,
    helped: 2,
  },
  {
    id: "2",
    author: { name: "Marc Fournier", skill: "Investisseur", founder: true },
    kind: "announcement",
    body: "Petit-déjeuner fondateurs ce vendredi 8 h, café Verlet. Cinq places. RSVP en MP.",
    postedAt: "il y a 4 h",
    replies: 7,
    helped: 0,
  },
  {
    id: "3",
    author: { name: "Camille Roux", skill: "Avocate fiscaliste" },
    kind: "tip",
    body: "Bon plan : un comptable bilingue FR/EN qui prend les holdings perso à 90 €/mois. DM si intéressé·e — pas affilié.",
    postedAt: "il y a 6 h",
    replies: 12,
    helped: 5,
  },
  {
    id: "4",
    author: { name: "Léo Tanaka", skill: "Designer" },
    kind: "request",
    body: "Quelqu'un a déjà négocié un contrat de licence avec Adobe Stock ? Je tombe sur une clause bizarre, j'ai besoin d'un avis.",
    postedAt: "hier",
    replies: 2,
    helped: 1,
  },
];

export type ServiceMember = {
  id: string;
  name: string;
  skill: string;
  category: string;
  score: number;
  founder?: boolean;
  city: string;
};

export const serviceMembers: ServiceMember[] = [
  { id: "m1", name: "Sarah Benali", skill: "Levée de fonds Seed", category: "Finance", score: 86, city: "Paris" },
  { id: "m2", name: "Hadrien Vérine", skill: "Recrutement tech", category: "RH", score: 78, city: "Lyon" },
  { id: "m3", name: "Eva Chen", skill: "Growth B2B", category: "Marketing", score: 71, city: "Paris" },
  { id: "m4", name: "Marc Fournier", skill: "Conseil board", category: "Finance", score: 92, founder: true, city: "Paris" },
  { id: "m5", name: "Léo Tanaka", skill: "Design produit", category: "Produit", score: 68, city: "Bordeaux" },
  { id: "m6", name: "Camille Roux", skill: "Droit fiscal", category: "Juridique", score: 81, city: "Paris" },
];

export type ConversationItem = {
  id: string;
  with: { name: string; skill: string; founder?: boolean };
  preview: string;
  at: string;
  unread: number;
};

export const conversations: ConversationItem[] = [
  { id: "c1", with: { name: "Inès Moreau", skill: "Product · early-stage" }, preview: "Top, je t'envoie le doc dans la soirée.", at: "12:42", unread: 2 },
  { id: "c2", with: { name: "Marc Fournier", skill: "Investisseur", founder: true }, preview: "Vendredi 8 h ça marche pour moi.", at: "11:08", unread: 0 },
  { id: "c3", with: { name: "Camille Roux", skill: "Avocate fiscaliste" }, preview: "Je te partage le contact en MP.", at: "Hier", unread: 0 },
  { id: "c4", with: { name: "Sarah Benali", skill: "Levée de fonds" }, preview: "Bien reçu, je regarde demain matin.", at: "Lun", unread: 0 },
];

export type ChatMessage = {
  id: string;
  fromMe: boolean;
  body: string;
  at: string;
};

export const profile = {
  fullName: "Yazid Belkadi",
  city: "Paris",
  joinedAt: "Mars 2026",
  founder: true,
  bio:
    "Co-fondateur d'une boîte EdTech, ex-Stripe. J'aide volontiers sur le pricing, le go-to-market B2B et les premières embauches.",
  offered: ["Pricing SaaS", "GTM B2B", "Recrutement early-stage", "Pitch deck"],
  wanted: ["Levée Series A", "Droit du travail US"],
  trimesterScore: 72,
  lifetimeContributions: 38,
  badges: [
    { key: "founder", label: "Fondateur" },
    { key: "top10-q1", label: "Top 10 · Q1" },
    { key: "gold-referrer", label: "Parrain d'or" },
  ],
};

export type ChannelMsg = {
  id: string;
  author: { name: string; founder?: boolean };
  body: string;
  at: string;
  reactions?: Array<{ emoji: string; count: number }>;
  threadCount?: number;
  pinned?: boolean;
};

export const channelSections = [
  { key: "entraide", label: "Entraide" },
  { key: "bons-plans", label: "Bons plans" },
  { key: "evenements", label: "Événements" },
  { key: "presentation", label: "Présentation" },
] as const;

export const channelMessages: ChannelMsg[] = [
  {
    id: "p1",
    author: { name: "Comité Kloob" },
    body:
      "Rappel : la prochaine assemblée trimestrielle se tient le 12 juin. Ordre du jour publié dimanche.",
    at: "9:02",
    pinned: true,
  },
  {
    id: "1",
    author: { name: "Inès Moreau" },
    body:
      "Quelqu'un a un retour récent sur Notion AI vs Linear pour la gestion de roadmap produit ? Je penche Linear mais hésite encore.",
    at: "10:14",
    reactions: [{ emoji: "👍", count: 3 }, { emoji: "🤔", count: 1 }],
    threadCount: 5,
  },
  {
    id: "2",
    author: { name: "Marc Fournier", founder: true },
    body: "Linear sans hésiter pour la roadmap, Notion pour la doc à côté. J'expliquerai en thread.",
    at: "10:18",
    threadCount: 0,
  },
  {
    id: "3",
    author: { name: "Camille Roux" },
    body:
      "Pour celles et ceux qui font du SaaS B2B en Europe : la nouvelle directive omnibus simplifie pas mal de reporting RGPD. Je peux faire un récap si ça intéresse.",
    at: "11:46",
    reactions: [{ emoji: "🙌", count: 7 }],
    threadCount: 2,
  },
  {
    id: "4",
    author: { name: "Léo Tanaka" },
    body:
      "Je cherche un·e illustrateur·ice freelance pour 2 jours sur un onboarding mobile. Recommandations bienvenues.",
    at: "13:09",
    threadCount: 1,
  },
];

export const sampleThread: ChatMessage[] = [
  { id: "1", fromMe: false, body: "Salut Yazid, dispo 30 min cette semaine pour parler pricing ?", at: "10:21" },
  { id: "2", fromMe: true, body: "Avec plaisir. Mardi 15 h ?", at: "10:24" },
  { id: "3", fromMe: false, body: "Parfait, je t'envoie un Meet. Tu peux jeter un œil au deck avant ?", at: "10:25" },
  { id: "4", fromMe: true, body: "Oui, envoie. Je te fais un retour structuré avant la session.", at: "10:27" },
  { id: "5", fromMe: false, body: "Top, je t'envoie le doc dans la soirée.", at: "12:42" },
];
