// Lo que va dentro de cada experiencia: bajada, líneas que se abren y herramientas con logo. Cada
// título es algo que Jose hizo, no algo que hace el producto (Jose, 2026-10-13); sin etiqueta
// FEAT/TEST, `type` queda sólo como dato. Fuente: el material de carrera de Jose, verificado (ver
// previews/role-lines y previews/job-lines). Criterios: sin nombres de clientes ni de personas; en
// Agents Booster no se afirma producción frente a clientes finales. Clave: "org|role" de kit.experience.
export type Commit = { type?: 'feat' | 'test' | 'fix' | 'refactor' | 'perf' | 'docs'; s: string; body: string };
export type RoleCommits = { summary: string; commits: Commit[]; tools: string[] };

export const roleCommits: Record<string, RoleCommits> = {
  'Dynecron|Lead Software Engineer · part-time': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'Software company I co-founded and run part-time alongside my full-time roles, building custom business systems for clients in Ecuador. I run projects end to end, from the first meeting to deployment, and share the technical lead on each one with another senior engineer.',
    commits: [
      { s: 'Co-built the system an engine workshop has run on since July 2025', body: '971 work orders and ~USD 433,000 invoiced through it. I worked on it from the contract to the Docker deploy.' },
      { s: 'Co-built the operations platform a freight forwarder runs daily', body: 'Nine people ran 324 shipments on it in its first ~2.5 months. Shipment data is pulled from PDFs with AI.' },
      { s: 'Co-built a multi-company ERP with electronic tax invoicing', body: '~30 modules and 175+ tables for an automotive service company. I carried more of the front end and shared the backend.' },
      { s: 'Co-built a RAG checker for public procurement documents', body: 'The legal corpus is versioned, so any past analysis can be reproduced. Each LLM call is stored with its tokens and latency.' },
      { s: 'Took clients from first meeting to signed contract', body: 'Requirements, NDAs and SLAs, and almost a year of negotiation on the largest one.' },
    ],
    tools: ['python', 'fastapi', 'postgresql', 'pgvector', 'next', 'react', 'reactnative', 'docker', 'githubactions'],
  },
  'Agents Booster|AI Engineer · contract': {
    // Opción 1 de previews/role-lines (elegida por Jose el 2026-10-13): cada línea es algo que él hizo.
    summary: 'AI Engineer on a platform where businesses build AI sales agents for WhatsApp, Instagram and Messenger. I focused on the agent’s reliability, and worked across the backend, web console and mobile app around it.',
    commits: [
      { s: 'Started the eval suite for the agent, and wrote most of it', body: 'Each scenario runs 3 to 8 times with custom Python assertions, so I measure pass rates, not a single pass.' },
      { s: 'Built the leads, calendar and resources modules from scratch', body: 'None of them existed before I joined.' },
      { s: 'Brought automated testing to a web console that had none', body: '24 end-to-end specs. The first one reproduced a bug before the fix went in.' },
      { s: 'Tracked a payment bug down through the traces', body: 'I had added Langfuse. The trace showed no AI call, so the fix went in the webhook, not the prompt.' },
      { s: 'Replaced ~25 text-parsing hacks with typed output', body: 'Rolled out in phases behind a flag, without stopping feature work.' },
      { s: 'Cut the dashboard load from ~8.8 s to ~3.1 s', body: 'And the inbox from three database round-trips to one, with local token verification instead of a call to the auth provider on every request.' },
    ],
    tools: ['python', 'fastapi', 'langgraph', 'promptfoo', 'langfuse', 'langsmith', 'postgresql', 'pgvector', 'mongodb', 'redis', 'rabbitmq', 'angular'],
  },
  'Stack Builders|Software Developer': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'Software consultancy serving international clients. I worked on a Python platform for ski competitions, and on front-end and QA work for other clients.',
    commits: [
      { s: 'Made a ski competition platform update scores live', body: 'Server-sent events and HTMX on Django and Flask templates, which had no reactivity of their own. Until then, operators reloaded the page by hand.' },
      { s: 'Built features for international and US federation rules', body: 'What the platform needed before it could be used in sanctioned competitions.' },
      { s: 'Labelled the training data for automatic jump scoring', body: 'Jumps, scores and tricks, for a YOLO model on SageMaker. The model itself was built by others.' },
      { s: 'Migrated a client’s site from Vue 2 to Vue 3 and Nuxt 4', body: 'From Bootstrap to Tailwind, split into modular components with composables.' },
      { s: 'Took QA tickets on a Java CMS for a large communications client', body: 'Adobe Experience Manager, new to me. I tested the tickets and fixed a few of them myself.' },
    ],
    tools: ['python', 'django', 'flask', 'htmx', 'vue', 'nuxt', 'tailwind', 'java'],
  },
  'Torre|Software Engineer': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'Torre is a hiring platform with over a million user accounts, and EmmaLLM is its multi-agent system that talks to and screens candidates for employers. I worked on how the agent talked to candidates, and was code owner of the process layer underneath it.',
    commits: [
      { s: 'Cut users blocking us by more than half with a WhatsApp opt-in', body: 'I held notifications until the candidate gave consent, instead of messaging first.' },
      { s: 'Stopped the follow-ups once a candidate said they were out', body: 'The system now noticed when someone didn’t want to finish the application, saved the reason and cut the screening reminders.' },
      { s: 'Changed when candidates get asked for reference checks', body: 'Only for jobs up to USD 50K or with compensation to agree, skipping current roles and education.' },
      { s: 'Cleared ~3,500 notifications stuck waiting for a callback', body: 'Along with other delivery bugs: an unhealthy notifications queue and mixed English/Spanish copies.' },
      { s: 'Built agent features in Langchain4j on a Scala backend', body: 'Inside the team’s five-agent pipeline, connected to the EmmaBPM flows that moved candidates through their applications.' },
    ],
    tools: ['scala', 'playframework', 'langchain4j', 'pinecone', 'kotlin', 'node', 'vue', 'nuxt', 'scalatest'],
  },
  'AI Dev Group|Frontend Developer · freelance': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'A startup building AI tools that generate advertising content: copy, images and banners. I worked on the front end, both cleaning up its code and building the chat and payment flows on top of it.',
    commits: [
      { s: 'Cleaned up a front end full of duplicated logic', body: 'Moved the logic into hooks and server state into React Query, instead of repeating it in every component.' },
      { s: 'Wired the real-time chat to an OpenAI-backed service', body: 'The front end side of the socket.io connection was mine. Users asked the chat for ad copy.' },
      { s: 'Built the PayPal credits flow', body: 'Users bought credits with the PayPal JavaScript SDK and spent them generating images or copy.' },
      { s: 'Merged a rebrand branch that had drifted from our work', body: 'Another freelancer redesigned the whole app in one branch; I did the merge and resolved the conflicts.' },
    ],
    tools: ['react', 'next', 'typescript', 'tailwind', 'reactquery', 'storybook', 'socketio', 'paypal'],
  },
  'Torre|Software Engineer Intern': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'Torre is a hiring platform with over a million user accounts and about 50 engineers. My first engineering role: an internship, but full-time, mostly on the Scala backend of the chatbot that contacts applicants.',
    commits: [
      { s: 'Fixed an ORM bug that lost tens of thousands of notifications', body: 'Pulling too many at once broke Slick’s limit. I moved retrieval onto a queue of IDs and refactored the chatbot flow around it.' },
      { s: 'Turned process diagrams into features across Scala services', body: 'Each feature started as a change to a BPM: I found the new condition in the diagram, then where it lived in the code.' },
      { s: 'Wrote the SQL metrics for the features I shipped', body: 'Applicants per job opportunity, notifications sent and failed, candidates by channel, on Metabase. The squad read them in the daily.' },
      { s: 'Fixed Vue.js bugs for three other squads between my own tickets', body: 'The operators’ console, the job pages candidates saw, and the recruiters’ hiring pipeline.' },
    ],
    tools: ['scala', 'playframework', 'slick', 'vue', 'sql', 'metabase', 'twilio'],
  },
  'IQ Bit|Frontend & Mobile Developer': {
    // Opción combinada de previews/job-lines (elegida por Jose el 2026-10-13).
    summary: 'Internship at a Quito software studio that builds web and mobile apps for its clients. I worked on six projects in ten months; these are the ones I took furthest.',
    commits: [
      { s: 'Rebuilt a Miami car wash’s website from a designer’s mockup', body: 'I owned it end to end in WordPress, SEO included. It stayed live years after handoff.' },
      { s: 'Shipped a sports short-video app to App Store and Google Play', body: 'I did the redesign and ran both store submissions myself.' },
      { s: 'Built screens for a KPI dashboard for a company’s owners', body: 'React and Next.js with react-hook-form. Some real KPIs were already showing on it.' },
      { s: 'Took features from the Product Owner to production', body: 'Through pull requests in GitLab, on React, React Native and Firebase apps.' },
    ],
    tools: ['react', 'reactnative', 'typescript', 'javascript', 'firebase', 'next', 'wordpress', 'gitlab'],
  },
};
