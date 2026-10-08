// Textos del home. Fuente: el perfil de LinkedIn publicado y el material de casos de Jose.
import type { Status } from '../components/StatusLine.astro';

export const hero = {
  title: 'Software that keeps working after the demo.',
  sub: 'I build and run the systems a business works on every day — operations platforms, ERPs, and LLM agents that can only say what they can prove. From the first meeting and the contract to running it in production.',
};

/** El "ledger": prueba de que lo que construyo está en uso. */
export const ledger: { status: Status; text: string; href: string }[] = [
  { status: 'running', text: 'Engine workshop · running since Jul 2025 · 971 work orders', href: '/work/workshop-system/' },
  { status: 'running', text: 'Freight forwarder · 9 people on it daily · 115 clients', href: '/work/freight-operations/' },
  { status: 'in-progress', text: 'Multi-company ERP · onboarding its first company', href: '/work/multi-company-erp/' },
];

export const services = [
  {
    title: 'Custom business systems, end to end',
    body: 'I scope it with you, sign the contract, design and build it, deploy it, and keep it running after launch. Workshops, logistics operations, back offices — the system your team uses every day.',
    proof: { label: 'Workshop system', href: '/work/workshop-system/' },
  },
  {
    title: 'ERPs with accounting and electronic invoicing',
    body: 'Work orders, inventory, accounting, payroll and electronic invoices through the tax authority, for one company or several on the same platform.',
    proof: { label: 'Multi-company ERP', href: '/work/multi-company-erp/' },
  },
  {
    title: 'LLM agents that don’t make things up',
    body: 'Agents grounded in your real data, with tools gated by context, evals run on repeat, and per-conversation tracing — so you find out what broke from the trace, not from a customer.',
    proof: { label: 'Agent reliability', href: '/work/llm-agent-reliability/' },
  },
  {
    title: 'Document AI you can audit',
    body: 'Pulling data out of your PDFs, or checking documents against a body of rules with RAG — with the source versioned and every LLM call logged, so each result can be traced back.',
    proof: { label: 'Procurement RAG', href: '/work/procurement-rag/' },
  },
];

export const process = [
  { title: 'Scope', body: 'We meet, I learn how your business actually runs, and we agree in writing on what gets built. Contract and NDA included.' },
  { title: 'Build', body: 'Architecture, backend, frontend, tests and CI/CD. You see working software early and test each feature as it lands.' },
  { title: 'Ship', body: 'Docker, CI/CD and deployment. Nothing is “done” until the people it’s for are using it every day.' },
  { title: 'Run', body: 'I stay on after launch. You write different code when your name is on the invoice.' },
];

export const bio = [
  'I’m a software engineer in Quito, and co-founder of Dynecron. I build the systems a business runs its day on — and then I own them after they ship.',
  'With AI, my work is the part underneath the model: making sure an agent can’t tell your customer something it can’t prove. Most of what breaks in an AI product isn’t the model.',
];

export const experience = [
  { org: 'Dynecron', role: 'Co-Founder & Lead Software Engineer', when: '2024 – now' },
  { org: 'Agents Booster', role: 'AI Engineer', when: '2026' },
  { org: 'Stack Builders', role: 'Software Developer', when: '2025 – 2026' },
  { org: 'Torre', role: 'Software Engineer', when: '2023 – 2025' },
  { org: 'AI Dev Group', role: 'Frontend Developer', when: '2023 – 2024' },
  { org: 'IQ Bit', role: 'Frontend & Mobile Developer', when: '2022 – 2023' },
];
