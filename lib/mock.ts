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
