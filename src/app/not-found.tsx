import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-center px-5 py-32 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-md text-muted">
        El enlace está roto o la página se movió. Volvé al inicio y seguimos desde ahí.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
