export const site = {
  name: "Ettien Kouassi Yann",
  initials: "EY",
  role: "Développeur Web & Mobile · Data Scientist Junior",
  email: "ettienyane@gmail.com",
  phone: "+225 01 01 91 18 85",
  location: "Bingerville, Côte d'Ivoire",
  bio: "Développeur web & data scientist junior, passionné par l'innovation. Je conçois des solutions data et IA pour optimiser la prise de décision.",
  about: [
    "Développeur web & data scientist junior, passionné par l'innovation, je maîtrise Python et j'ai une grande capacité d'adaptation aux autres langages. Je conçois des solutions data et IA pour optimiser la prise de décision.",
    "Curieux, autonome et orienté résultats, je couvre l'ensemble de la chaîne : collecte et traitement des données, création de modèles de machine learning, puis mise en production au sein d'applications web et mobiles.",
  ],
  skills: [
    "Python",
    "SQL",
    "DAX",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Keras",
    "NLTK",
    "Django",
    "Streamlit",
    "Power BI",
    "Tableau",
  ],
};

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Intermédiaire" },
];

export const navLinks = [
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Formation", href: "#formation" },
  { label: "Expérience", href: "#experience" },
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
    title: "Prédiction du diabète de type 2",
    description:
      "Application de techniques de machine learning sur une base de données médicale pour prédire le diabète de type 2.",
    tags: ["Python", "Scikit-learn"],
  },
  {
    title: "Campagne marketing bancaire",
    description:
      "Modèles de machine learning pour cibler efficacement les clients d'une banque dans le cadre d'une campagne marketing.",
    tags: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "Prédiction des survivants du Titanic",
    description:
      "Classification des passagers survivants à partir du célèbre jeu de données Titanic, avec comparaison de plusieurs modèles.",
    tags: ["Python", "Keras", "Matplotlib"],
  },
  {
    title: "Web scraping NASA",
    description:
      "Collecte automatisée de données par web scraping en Python, à l'aide d'une clé d'API, depuis les pages de la NASA.",
    tags: ["Python", "API REST"],
  },
  {
    title: "Interfaces ML avec Streamlit",
    description:
      "Conception d'interfaces utilisateur en Python avec Streamlit pour déployer et présenter les projets de machine learning.",
    tags: ["Python", "Streamlit"],
  },
  {
    title: "Tableaux de bord Power BI",
    description:
      "Exploration de jeux de données et création de tableaux de bord interactifs pour le suivi d'indicateurs clés.",
    tags: ["Power BI", "DAX"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  description?: string;
};

export const education: Education[] = [
  {
    degree: "Master 2 Big Data & IA",
    school: "Institut Universitaire d'Abidjan",
    period: "2025 — 2026",
  },
  {
    degree: "Master 1 Big Data & IA",
    school: "Institut Universitaire d'Abidjan",
    period: "2024 — 2025",
  },
  {
    degree: "Licence en développement d'applications web et mobile",
    school: "Université Internationale des Sciences et Technologies",
    period: "2021 — 2023",
  },
];

export const certifications = [
  {
    title: "Certification en Data Science",
    issuer: "GoMyCode",
    year: "2024",
  },
];
