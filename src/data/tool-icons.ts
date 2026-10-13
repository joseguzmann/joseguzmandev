// Logos de herramientas desde simple-icons (CC0), incrustados en el build: no hay pedidos externos.
// Las que simple-icons no tiene van con monograma.
import * as si from 'simple-icons';

const map: Record<string, string> = {
  python: 'siPython', fastapi: 'siFastapi', langgraph: 'siLanggraph', langchain: 'siLangchain', postgresql: 'siPostgresql',
  mongodb: 'siMongodb', redis: 'siRedis', rabbitmq: 'siRabbitmq', angular: 'siAngular', react: 'siReact', docker: 'siDocker',
  typescript: 'siTypescript', scala: 'siScala', vue: 'siVuedotjs', nuxt: 'siNuxt', next: 'siNextdotjs', django: 'siDjango',
  flask: 'siFlask', htmx: 'siHtmx', tailwind: 'siTailwindcss', firebase: 'siFirebase', supabase: 'siSupabase',
  kotlin: 'siKotlin', node: 'siNodedotjs', javascript: 'siJavascript', wordpress: 'siWordpress', gitlab: 'siGitlab',
  storybook: 'siStorybook', reactquery: 'siReactquery', socketio: 'siSocketdotio', paypal: 'siPaypal', java: 'siOpenjdk',
  metabase: 'siMetabase', githubactions: 'siGithubactions', reactnative: 'siReact',
};
const fallback: Record<string, { title: string; hex: string; mono: string }> = {
  promptfoo: { title: 'promptfoo', hex: 'e6edf3', mono: 'pf' },
  langfuse: { title: 'Langfuse', hex: 'e6edf3', mono: 'LF' },
  langsmith: { title: 'LangSmith', hex: '7FC8FF', mono: 'LS' },
  pgvector: { title: 'pgvector', hex: '79A6FF', mono: 'pg' },
  playframework: { title: 'Play Framework', hex: '92D13D', mono: 'Pl' },
  langchain4j: { title: 'Langchain4j', hex: '7FC8FF', mono: 'L4' },
  pinecone: { title: 'Pinecone', hex: 'e6edf3', mono: 'Pc' },
  scalatest: { title: 'ScalaTest', hex: 'DC322F', mono: 'ST' },
  slick: { title: 'Slick', hex: 'e6edf3', mono: 'Sl' },
  sql: { title: 'SQL', hex: 'e6edf3', mono: 'SQ' },
  twilio: { title: 'Twilio', hex: 'F22F46', mono: 'Tw' },
  aws: { title: 'AWS', hex: 'FF9900', mono: 'AW' },
};
// Marcas casi negras: sobre fondo oscuro se pintan claras.
const lum = (hex: string) => { const n = parseInt(hex, 16); return (0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255; };

export type Tool = { id: string; title: string; color: string; path?: string; mono?: string };
export const tool = (id: string): Tool => {
  const k = map[id]; const icon = k ? (si as any)[k] : null;
  if (icon) return { id, title: id === 'reactnative' ? 'React Native' : id === 'java' ? 'Java' : icon.title, color: lum(icon.hex) < 0.25 ? '#e6edf3' : `#${icon.hex}`, path: icon.path };
  const f = fallback[id] ?? { title: id, hex: 'e6edf3', mono: id.slice(0, 2) };
  return { id, title: f.title, color: `#${f.hex}`, mono: f.mono };
};
