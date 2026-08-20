import { site } from "@/content/site";
import { CopyEmail } from "@/components/CopyEmail";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Contact() {
  return (
    <Section id="contacto">
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contacto</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          ¿Tenés algo que construir o que arreglar?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">
          Contame el problema en dos párrafos. Te respondo con si puedo ayudarte, cómo lo encararía
          y qué costaría. Sin formularios de diez campos ni llamadas de descubrimiento eternas.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Proyecto — joseguzman.dev")}`}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            {site.email}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <CopyEmail email={site.email} />
          {site.bookingUrl && (
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-elevated"
            >
              Agendar una llamada
            </a>
          )}
        </div>

        <p className="mt-8 font-mono text-xs text-subtle">
          Suelo responder el mismo día hábil.
        </p>
      </Reveal>
    </Section>
  );
}
