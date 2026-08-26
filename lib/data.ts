export const site = {
  name: "Prénom Nom",
  initials: "PN",
  role: "Développeur Full-Stack",
  email: "contact@example.com",
  location: "Paris, France",
  bio: "Je conçois et développe des applications web modernes, rapides et accessibles. Curieux de nature, j'aime transformer des idées en produits concrets.",
  about: [
    "Bonjour ! Je suis développeur full-stack passionné par la création d'expériences web soignées. Je m'intéresse autant à l'architecture côté serveur qu'au pixel près côté interface.",
    "Au fil de mes projets, j'ai travaillé avec JavaScript, TypeScript, React et Node.js. Aujourd'hui, je cherche à rejoindre une équipe où je pourrai avoir un impact réel tout en continuant à progresser.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ],
};

export const navLinks = [
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Expériences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/votre-profil" },
  { label: "LinkedIn", href: "https://linkedin.com/in/votre-profil" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Nom du projet 1",
    description:
      "Application web de gestion de tâches avec authentification, temps réel et tableau de bord statistiques.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://exemple.com",
    repo: "https://github.com/votre-profil/projet-1",
  },
  {
    title: "Nom du projet 2",
    description:
      "API REST performante pour une plateforme e-commerce : panier, paiements et notifications par email.",
    tags: ["Node.js", "Express", "Stripe"],
    repo: "https://github.com/votre-profil/projet-2",
  },
  {
    title: "Nom du projet 3",
    description:
      "Site vitrine responsive avec optimisation SEO, scores Lighthouse au vert et déploiement continu.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    link: "https://exemple.com",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Développeur Full-Stack",
    company: "Entreprise 1",
    period: "2024 — Aujourd'hui",
    description:
      "Développement de fonctionnalités sur une application SaaS utilisée par plusieurs milliers d'utilisateurs. Refonte du design system et amélioration des performances.",
  },
  {
    role: "Développeur Front-End (alternance)",
    company: "Entreprise 2",
    period: "2022 — 2024",
    description:
      "Intégration de nouvelles interfaces React, mise en place de tests automatisés et collaboration étroite avec l'équipe design.",
  },
  {
    role: "Formation",
    company: "École / Université",
    period: "2019 — 2022",
    description:
      "Diplôme en informatique, spécialité génie logiciel. Projets académiques en équipe autour du développement web.",
  },
];
