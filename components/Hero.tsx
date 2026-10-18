import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-600 dark:border-emerald-400/30 dark:text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            Disponible pour de nouvelles opportunités
          </div>

          <p className="mt-8 animate-fade-up font-mono text-emerald-600 [animation-delay:100ms] dark:text-emerald-400">
            Bonjour, je suis
          </p>

          <h1 className="mt-4 animate-fade-up text-5xl font-bold tracking-tight text-heading [animation-delay:200ms] md:text-7xl">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300">
              {site.name}.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl animate-fade-up text-2xl font-bold tracking-tight text-subtle [animation-delay:300ms] md:text-4xl">
            {site.role}.
          </p>

          <p className="mt-6 max-w-xl animate-fade-up leading-relaxed text-body [animation-delay:400ms]">
            {site.bio}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:500ms] md:justify-start">
            <a
              href="#projets"
              className="rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-transform hover:-translate-y-0.5 dark:from-emerald-400 dark:to-teal-400 dark:text-zinc-950"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-md border border-edge px-5 py-3 text-sm font-medium text-body transition-colors hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Photo de profil extraite du CV */}
        <div className="animate-fade-up relative shrink-0 [animation-delay:250ms]">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/30 to-teal-400/30 blur-2xl dark:from-emerald-400/25 dark:to-cyan-400/25"
          />
          <div className="relative size-44 overflow-hidden rounded-full border-4 border-edge bg-panel shadow-2xl ring-4 ring-emerald-500/20 md:size-56">
            <Image
              src="/profile.jpg"
              alt={site.name}
              width={288}
              height={432}
              priority
              className="size-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
