import { languages, site } from "@/lib/data";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
      <span className="font-mono text-lg text-emerald-600 md:text-xl dark:text-emerald-400">{index}.</span>
      {title}
      <span aria-hidden className="ml-2 h-px max-w-48 grow bg-edge" />
    </h2>
  );
}

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" title="À propos" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
        <div className="space-y-4 leading-relaxed text-body">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">
            Localisation
          </p>
          <p className="mt-3 text-sm text-body">{site.location}</p>
          <p className="mt-6 font-mono text-xs tracking-widest text-subtle uppercase">
            Technologies
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-edge bg-panel px-3 py-1 font-mono text-xs text-body transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:text-emerald-300"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs tracking-widest text-subtle uppercase">
            Langues
          </p>
          <ul className="mt-4 space-y-2">
            {languages.map((language) => (
              <li key={language.name} className="text-sm text-body">
                {language.name} <span className="text-subtle">· {language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
