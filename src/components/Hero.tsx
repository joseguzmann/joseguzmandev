import { site, stats } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop opacity-70" />
        <div className="float-slow absolute -left-24 -top-24 size-[420px] rounded-full bg-accent/12 blur-[110px]" />
        <div className="float-slow absolute -right-32 top-32 size-[380px] rounded-full bg-accent/8 blur-[120px] [animation-delay:-6s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {site.tagline}
            <span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Soy <span className="font-medium text-fg">{site.name}</span>, {site.role.toLowerCase()}.
            Diseño y construyo productos web, backends y agentes de IA para empresas que dependen de
            su operación: pedidos, órdenes de trabajo, atención al cliente y datos.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              Contame tu proyecto
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#trabajo"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-elevated"
            >
              Ver trabajo
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse bg-surface px-6 py-6">
                <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
