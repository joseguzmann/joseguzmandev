import { projects } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="trabajo">
      <SectionHeading
        eyebrow="Trabajo"
        title="Proyectos en producción"
        lead="Sistemas que usan personas reales todos los días. Algunos son privados, así que cuento el problema y el resultado sin nombrar al cliente."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.title}
            delay={(i % 2) * 80}
            className={cn(
              "group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-all hover:border-line-strong hover:shadow-[var(--shadow)] sm:p-8",
              project.featured && "lg:col-span-2",
            )}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-subtle">
              <span>{project.sector}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>

            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
              {project.summary}
            </p>

            <p className="mt-5 border-l-2 border-accent pl-4 text-pretty text-sm font-medium leading-relaxed text-fg">
              {project.outcome}
            </p>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                Mi parte
              </p>
              <ul className="mt-3 space-y-1.5">
                {project.contributions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-[0.2rem] size-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-elevated px-2.5 py-1 font-mono text-[11px] text-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Ver el proyecto
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            ) : (
              <p className="mt-6 font-mono text-xs text-subtle">Proyecto privado · demo bajo pedido</p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
