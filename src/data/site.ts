// Datos de contacto y enlaces. Lo que esté en null no se muestra.
export const site = {
  name: 'José Guzmán',
  title: 'José Guzmán — Software engineer. Systems that keep working after the demo.',
  description:
    'I build and operate the software businesses run on — operations platforms, ERPs, and LLM agents that can only say what they can prove. Quito, Ecuador. Remote.',
  // PENDIENTE (Jose): no hay email público definido todavía.
  email: null as string | null,
  linkedin: 'https://www.linkedin.com/in/joseguzmann/',
  github: 'https://github.com/joseguzmann',
  location: 'Quito, Ecuador · working remote',
};

/** A dónde lleva "Start a project": email si existe, si no LinkedIn. */
export const contactHref = site.email
  ? `mailto:${site.email}?subject=${encodeURIComponent('A project')}`
  : site.linkedin;

/** El botón dice a dónde lleva. */
export const contactLabel = site.email ? 'Email me about a project' : 'Message me on LinkedIn';
