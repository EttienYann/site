import { site } from "@/lib/data";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" title="Expérience" />
      <div className="mt-10 rounded-2xl border border-edge bg-panel p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-heading">Data Scientist & Développeur Web / Mobile (Stage / Projets)</h3>
            <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">Projets académiques & pratiques professionnelles</p>
          </div>
          <span className="mt-2 inline-block w-fit rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 md:mt-0">
            2021 — Présent
          </span>
        </div>
        <p className="mt-4 leading-relaxed text-body">
          Conception et développement de solutions web/mobiles et de modèles de machine learning appliqués (prédiction de santé, marketing bancaire, traitement de données NASA, déploiement avec Streamlit et Power BI).
        </p>
      </div>
    </section>
  );
}
