import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./About";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-edge bg-panel p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none dark:hover:border-emerald-400/50 dark:hover:bg-zinc-900/70 dark:hover:shadow-emerald-500/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-emerald-400/60"
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-emerald-600/80 dark:text-emerald-400/70">
            0{index + 1}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-heading">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 gap-4 text-sm text-subtle">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Démo ↗
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 leading-relaxed text-body">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {project.tags.map((tag) => (
          <li key={tag} className="font-mono text-xs text-emerald-600/90 dark:text-emerald-400/80">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="02" title="Projets" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
