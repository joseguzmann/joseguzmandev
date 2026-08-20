import { nav, site } from "@/content/site";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  x: "X",
};

export function Footer() {
  const socials = Object.entries(site.socials).filter(([, href]) => Boolean(href));

  return (
    <footer className="mt-auto border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">
            joseguzman<span className="text-accent">.dev</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {site.name} — {site.role}. {site.location}.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          <nav aria-label="Pie de página">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Secciones</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Enlaces</p>
              <ul className="mt-3 space-y-2">
                {socials.map(([key, href]) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {socialLabels[key] ?? key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <p className="border-t border-line pt-6 font-mono text-xs text-subtle">
          © {new Date().getFullYear()} {site.name}. Hecho con Next.js.
        </p>
      </div>
    </footer>
  );
}
