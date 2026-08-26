export const site = {
  name: "Ettien Kouassi Yann Guy Axel",
  initials: "EY",
  role: "Développeur Web & Mobile · Data Scientist Junior",
  email: "ettienyane@gmail.com",
  location: "Côte d'Ivoire",
  bio: "Développeur web et mobile, data scientist junior. Passionné par l'analyse de données et l'IA, j'aime transformer des idées en produits concrets et des données en décisions.",
  about: [
    "Bonjour ! Je suis développeur web et mobile avec un goût prononcé pour la donnée. Je construis des applications modernes et je m'appuie sur l'analyse de données et l'intelligence artificielle pour répondre à des problèmes concrets.",
    "Mon profil hybride développement / data science me permet de couvrir l'ensemble de la chaîne : collecte et traitement des données, création des modèles, puis mise en production au sein d'applications performantes.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Python",
    "Pandas",
    "scikit-learn",
    "SQL",
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
  { label: "GitHub", href: "https://github.com/EttienYann" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ettien-kouassi-yann-guy-axel-a38278275/",
  },
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
