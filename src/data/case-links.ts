// Los links a casos de estudio sólo se muestran si las páginas existen en este build.
// En la rama pública se omiten hasta que Jose confirme que se pueden publicar.
// Se mira el disco y no import.meta.glob: el glob arrastraba al bundle el CSS de esas páginas.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export const casesPublished = existsSync(join(process.cwd(), 'src/pages/work/[slug].astro'));
export const caseHref = (href?: string) => (casesPublished ? href : undefined);
