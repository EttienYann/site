import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
      <p className="font-mono text-emerald-400">Bonjour, je suis</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
        {site.name}.
      </h1>
      <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-500 md:text-5xl">
        {site.role}.
      </p>
      <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">{site.bio}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="rounded-md bg-emerald-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
