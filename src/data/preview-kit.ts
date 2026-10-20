// Contenido mínimo y común a las 10 propuestas de diseño (src/pages/previews/).
// Sale de cases.ts/home.ts: nada nuevo. Las propuestas sólo cambian la forma.

export const kit = {
  name: 'José Guzmán',
  role: 'Software engineer · Quito, working remote',
  headline: 'Software that keeps working after the demo.',
  sub: 'I build and run the systems a business works on every day — operations platforms, ERPs, and LLM agents that can only say what they can prove.',
  cta: 'Message me on LinkedIn',
  ctaHref: 'https://www.linkedin.com/in/joseguzmann/',
  /** Reenvía al correo personal de Jose (alias en Namecheap; jurado del 2026-10-13 eligió hi@). */
  email: 'hi@joseguzman.dev',
  work: [
    {
      name: 'La Milésima',
      logo: { src: '/systems/la-milesima.png', bg: '#000000' },
      title: 'The system an engine shop runs its front desk on',
      kind: 'Vehicle workshop · management system',
      figure: { value: '~$433k', label: 'USD invoiced through it' },
      status: 'running since Jul 2025',
      live: true,
      href: '/work/workshop-system/',
    },
    {
      name: 'InnovoX',
      logo: { src: '/systems/innovox.png', bg: '#1a3b2f' },
      title: 'Operations platform for an international freight forwarder',
      kind: 'Logistics · operations platform',
      figure: { value: '324', label: 'shipments in ~2.5 months' },
      status: 'running since Jun 2026',
      live: true,
      href: '/work/freight-operations/',
    },
    {
      // Fwize (Dynecron); Jose lo pide como «versión beta todavía» (2026-10-13). Producción levantada y en onboarding (lectura del 2026-09-02):
      // no hay uso real que contar todavía, así que la cifra es de ingeniería, no de tracción.
      name: 'Fwize',
      logo: { src: '/systems/fwize.svg', bg: '#ffffff' },
      title: 'Multi-company ERP for an automotive service company',
      kind: 'Automotive services · ERP with electronic invoicing',
      figure: { value: '1,886', label: 'backend tests, plus 272 e2e specs' },
      status: 'in beta',
      live: false,
      beta: true,
    },
  ],
  // Experiencia: fechas tal cual el LinkedIn publicado. end: null = presente.
  // Agents Booster va como contrato (decisión de Jose del 2026-09-23).
  experience: [
    { org: 'Dynecron', role: 'Lead Software Engineer · part-time', start: '2024-01', end: null, note: 'Co-founded software company, run part-time alongside full-time roles. Projects end to end, teams of up to five.' },
    { org: 'Agents Booster', role: 'AI Engineer · contract', start: '2026-05', end: '2026-08', note: 'Reliability layer, evals and tracing for LLM sales agents.' },
    { org: 'Stack Builders', role: 'Software Developer', start: '2025-05', end: '2026-05', note: 'Software consultancy serving international clients.' },
    { org: 'Torre', role: 'Software Engineer', start: '2024-06', end: '2025-04', note: 'Process layer under a multi-agent LLM hiring system.' },
    { org: 'AI Dev Group', role: 'Frontend Developer · freelance', start: '2023-12', end: '2024-03', note: 'Front end of an AI advertising-content product.' },
    { org: 'Torre', role: 'Software Engineer Intern', start: '2023-05', end: '2023-12', note: 'First engineering role, on a platform with over a million users.' },
    { org: 'IQ Bit', role: 'Frontend & Mobile Developer', start: '2022-08', end: '2023-05', note: 'Four production apps across web and mobile, two in the app stores.' },
  ] as { org: string; role: string; start: string; end: string | null; note: string }[],
  /** Página de cada empresa (se abre en otra pestaña). AI Dev Group no tiene; IQ Bit va a su LinkedIn. */
  orgUrl: {
    'Agents Booster': 'https://agentsbooster.com/',
    Dynecron: 'https://www.dynecron.com/',
    'Stack Builders': 'https://www.stackbuilders.com/',
    Torre: 'https://torre.ai/',
    'IQ Bit': 'https://www.linkedin.com/company/iq-bit/posts/',
  } as Record<string, string>,
  /** Mes de corte para "presente": el del build. En la página, un script lo recalcula con la fecha del
   *  visitante, así que la duración de los trabajos en curso y el total no quedan viejos. */
  asOf: new Date().toISOString().slice(0, 7),
  services: [
    'Custom business systems, end to end',
    'ERPs with accounting and electronic invoicing',
    'LLM agents that don’t make things up',
  ],
};

// Del resume más reciente de Jose (2026-09-28), tal cual.
export const profile = {
  title: 'AI Engineer',
  headline: 'I build the reliability layer under LLM agents in production — and the measurement that proves it holds.',
  sub: 'Backend, Python, LangGraph, RAG, FastAPI. Four years across Python, Scala and TypeScript, from a platform with over a million users to systems I still operate.',
  open: 'Open to remote',
  location: 'Quito, Ecuador',
  skills: [
    { group: 'AI & LLM systems', ids: ['langgraph', 'langchain', 'langchain4j', 'pgvector', 'pinecone', 'promptfoo', 'langfuse', 'langsmith'], items: ['LangGraph', 'LangChain', 'Langchain4j', 'RAG and vector search (pgvector, Pinecone)', 'Agent evaluation (promptfoo)', 'Observability (Langfuse, LangSmith)', 'Tool design'] },
    { group: 'Languages', ids: ['python', 'typescript', 'javascript', 'scala', 'java', 'sql'], items: ['Python', 'TypeScript', 'JavaScript', 'Scala', 'Java', 'SQL'] },
    { group: 'Backend', ids: ['fastapi', 'django', 'flask', 'playframework', 'node'], items: ['FastAPI', 'Django', 'Flask', 'Play Framework', 'Node.js'] },
    { group: 'Frontend', ids: ['react', 'next', 'vue', 'angular', 'reactnative'], items: ['React', 'Next.js', 'Vue', 'Angular', 'React Native'] },
    { group: 'Data & infra', ids: ['postgresql', 'mongodb', 'redis', 'rabbitmq', 'docker', 'aws', 'githubactions'], items: ['AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Event-driven architecture', 'GitHub Actions'] },
  ],
  education: { degree: 'B.Eng. in Computer Science', school: 'Escuela Politécnica Nacional', place: 'Quito, Ecuador', date: '', logo: '/edu/epn.png' },
  spoken: ['Spanish (native)', 'English (C1)'],
  // Con bandera, para el pie de Skills (las previews viejas siguen usando `spoken`).
  languages: [{ name: 'Spanish', level: 'Native', flag: '/flags/es.svg' }, { name: 'English', level: 'C1', flag: '/flags/us.svg' }],
};

export type Highlight = { title: string; detail: string; figure?: string; href?: string };

// Lo que hizo en cada rol, para los nodos "how it connects". Fuente: LinkedIn publicado
// (perfil de LinkedIn publicado) y, para Dynecron, el material de casos.
// Clave: "org|role" de kit.experience.
export const highlights: Record<string, Highlight[]> = {
  'Dynecron|Lead Software Engineer · part-time': [
    { title: 'Workshop management system', detail: 'Running since Jul 2025, later a white-label product', figure: '971 work orders', href: '/work/workshop-system/' },
    { title: 'Freight forwarder operations platform', detail: 'Nine people run their day on it', figure: '324 shipments', href: '/work/freight-operations/' },
    { title: 'Multi-company ERP with e-invoicing', detail: 'Onboarding its first company', figure: '1,886 backend tests', href: '/work/multi-company-erp/' },
    { title: 'Auditable RAG over procurement law', detail: 'Versioned legal corpus, any analysis can be replayed', href: '/work/procurement-rag/' },
  ],
  'Agents Booster|AI Engineer · contract': [
    { title: 'Grounding layer for an LLM sales agent', detail: 'Every claim checked against the live catalog', href: '/work/llm-agent-reliability/' },
    { title: 'Agent evaluation suite', detail: 'Scenarios run on repeat to measure stability', figure: '13 suites' },
    { title: 'LLM observability', detail: 'Langfuse and LangSmith traces per conversation' },
    { title: 'Automated tests for the web console', detail: 'It had none when I arrived', figure: '1,405 tests' },
    { title: 'Payments end to end', detail: 'Links, webhook validation, state machine, refunds' },
  ],
  'Stack Builders|Software Developer': [
    { title: 'Live scores for alpine ski competitions', detail: 'Server-sent events and HTMX, no more manual reloads' },
    { title: 'Federation rules', detail: 'International and US rules, needed for sanctioned events' },
    { title: 'Computer-vision dataset', detail: 'Labelled data for automatic jump scoring (YOLO on SageMaker)' },
    { title: 'Vue 2 → Vue 3 migration', detail: 'Nuxt, Tailwind, components rebuilt around composables' },
  ],
  'Torre|Software Engineer': [
    { title: 'Five-stage agent pipeline', detail: 'Langchain4j over Scala, retrieval on Pinecone', href: '/work/torre-agent-platform/' },
    { title: 'Business-process layer under the agents', detail: 'Code owner; thousands of openings in automated flows' },
    { title: 'WhatsApp consent flow', detail: 'Hold the message until the candidate opts in', figure: '>½ fewer blocks' },
    { title: 'Delivery failures traced and cleared', detail: 'Notifications stalled awaiting callback', figure: '~3,500' },
  ],
  'AI Dev Group|Frontend Developer · freelance': [
    { title: 'Front end rebuilt', detail: 'Duplicated logic into hooks, React Query for server state' },
    { title: 'Component library in Storybook', detail: 'Built and tested in isolation before composing screens' },
    { title: 'Real-time layer', detail: 'Websockets to an OpenAI-backed service' },
    { title: 'Credits and payments', detail: 'Users buy credits through PayPal' },
  ],
  'Torre|Software Engineer Intern': [
    { title: 'Notification pipeline fix', detail: 'An ORM defect was silently dropping tens of thousands' },
    { title: 'Squad metrics', detail: 'Defined in SQL on Metabase, read daily' },
    { title: 'WhatsApp templated messaging', detail: 'Delivered through Twilio' },
  ],
  'IQ Bit|Frontend & Mobile Developer': [
    { title: 'Production apps shipped', detail: 'React, React Native and WordPress', figure: '4 apps' },
    { title: 'App Store and Google Play', detail: 'iOS and Android release pipeline, end to end', figure: '2 apps' },
    { title: 'Responsive WordPress site', detail: 'Built from a designer’s mockup, still live years later' },
  ],
};

/** Color por empresa (tokens del tema oscuro de GitHub Primer). */
export const orgColor: Record<string, string> = {
  Dynecron: '#4493f8', 'Agents Booster': '#ab7df8', 'Stack Builders': '#db6d28', Torre: '#3fb950', 'AI Dev Group': '#f778ba', 'IQ Bit': '#39c5cf',
};

export const previews = [
  { n: '01', slug: '01-changelog', name: 'Changelog', idea: 'Career and projects as release notes, in the style of a product changelog.' },
  { n: '02', slug: '02-trace', name: 'Trace', idea: 'An observability trace: each role is a span on one waterfall timeline.' },
  { n: '03', slug: '03-commits', name: 'Branches', idea: 'A git graph: parallel branches show the overlapping roles honestly.' },
  { n: '04', slug: '04-api-docs', name: 'API Reference', idea: 'The portfolio as developer docs: endpoints, typed responses, a code panel.' },
  { n: '05', slug: '05-issues', name: 'Issue Tracker', idea: 'Projects as issues with status, labels and properties, keyboard-first.' },
  { n: '06', slug: '06-canvas', name: 'Architecture', idea: 'A system diagram canvas: services and the companies as connected nodes.' },
  { n: '07', slug: '07-command', name: 'Command Palette', idea: 'A launcher-style command menu as the home; everything one keystroke away.' },
  { n: '08', slug: '08-database', name: 'Database View', idea: 'A clean table/board database of work, with filters and properties.' },
  { n: '09', slug: '09-status', name: 'Status Page', idea: 'The portfolio as a status page: systems and career as components with uptime.' },
  { n: '10', slug: '10-pipeline', name: 'Pipeline', idea: 'A CI/CD run view: from first meeting to production as green jobs.' },
  { n: '11', slug: '11-trace-dark', name: 'Trace · dark', idea: 'Round 3. The trace timeline in GitHub dark; pick a span and its work opens as a connected graph.' },
  { n: '12', slug: '12-connections', name: 'Connections', idea: 'Round 3. Every role gets its own “how it connects” graph, in order, each with its slot on the timeline.' },
  { n: '13', slug: '13-status-dark', name: 'Status · dark', idea: 'Round 3. The status page in the dark palette; each role expands into its graph.' },
  { n: '14', slug: '14-pipeline-trace', name: 'Pipeline + Trace', idea: 'Round 3. The pipeline page with the run history drawn as a trace, each run opening its graph.' },
  { n: '15', slug: '15-engineer', name: 'Pipeline · AI Engineer', idea: 'Round 4. Built on 14, led by your resume: AI Engineer positioning, GitHub activity, trace and graphs, skills.' },
  { n: '16', slug: '16-builder', name: 'Pipeline · Builder', idea: 'Round 4. Built on 14, led by how you work with clients: the flow first, then systems, career and activity.' },
  { n: '17', slug: '17-profile', name: 'Profile', idea: 'Round 4. A GitHub-profile layout: sidebar with your facts, main column with systems, activity and the career trace.' },
  { n: '18', slug: '18-trace-hero', name: 'Trace hero', idea: 'Round 4. The career trace is the hero itself; every run opens its graph, the flow and activity follow.' },
];
