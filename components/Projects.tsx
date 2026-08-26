import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./About";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-emerald-400/60">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <div className="flex gap-4 text-sm text-zinc-500">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-emerald-400"
            >
              Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-emerald-400"
            >
              Démo ↗
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="font-mono text-xs text-emerald-400/80">
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
