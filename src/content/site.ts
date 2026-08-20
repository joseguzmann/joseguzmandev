/**
 * Fuente única de contenido del sitio.
 * Editá acá: los componentes no tienen texto hardcodeado.
 */

export const site = {
  name: "Jose Guzmán",
  shortName: "JG",
  role: "Ingeniero de software",
  /** Se usa en <title>, OG y JSON-LD. */
  tagline: "Construyo software que las empresas usan todos los días",
  description:
    "Ingeniero de software. Diseño y construyo productos web, backends y agentes de IA que resuelven operación real: pedidos, órdenes de trabajo, atención al cliente y datos.",
  url: "https://joseguzman.dev",
  locale: "es_EC",
  location: "Quito, Ecuador · trabajo remoto",
  /** TODO(jose): confirmá o cambiá el correo antes de publicar. */
  email: "hola@joseguzman.dev",
  /** Dejá en "" los que no quieras mostrar: el link no se renderiza. */
  socials: {
    github: "https://github.com/joseguzmann",
    linkedin: "",
    x: "",
  },
  /** Enlace de agenda (Cal.com, Calendly…). Vacío = se muestra solo el correo. */
  bookingUrl: "",
  availability: "Disponible para proyectos nuevos",
} as const;

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

/**
 * TODO(jose): confirmá estos números antes de publicar — son un punto de partida,
 * no un dato verificado. Si alguno no te representa, borralo: la grilla se adapta.
 */
export const stats = [
  { value: "8+", label: "años construyendo software" },
  { value: "5", label: "productos en producción hoy" },
  { value: "3", label: "países con usuarios activos" },
] as const;

export type Service = {
  title: string;
  description: string;
  bullets: readonly string[];
};

export const services: readonly Service[] = [
  {
    title: "Producto web a medida",
    description:
      "De la idea al producto en producción: interfaz, API, base de datos y despliegue. Sin plantillas que después hay que pelear.",
    bullets: ["Next.js / React / Angular", "Diseño de UI y estados reales", "Multi-empresa y roles"],
  },
  {
    title: "Agentes de IA que hacen cosas",
    description:
      "Asistentes que conversan por WhatsApp o web y además ejecutan: consultan catálogo, cotizan, agendan y saben cuándo pasar la conversación a una persona.",
    bullets: ["RAG sobre la base de conocimiento", "Herramientas y reglas de negocio", "Evaluación y trazas, no fe ciega"],
  },
  {
    title: "Backends y APIs",
    description:
      "El motor que aguanta cuando el negocio crece: modelo de datos claro, transacciones honestas y trabajos en segundo plano.",
    bullets: ["Python / FastAPI / Django", "PostgreSQL, Redis, colas", "Integraciones con CRM y pagos"],
  },
  {
    title: "Automatización de operación",
    description:
      "Ese proceso que hoy vive en un Excel y tres personas: lo convierto en flujo con trazabilidad, permisos y reportes.",
    bullets: ["Órdenes, inventario, cotizaciones", "Trazabilidad por ítem", "Reportes que sí se leen"],
  },
  {
    title: "Rescate y auditoría técnica",
    description:
      "Proyecto heredado, lento o frágil. Diagnóstico con evidencia —no opinión— y un plan de arreglo por prioridad.",
    bullets: ["Performance medida, no estimada", "Cobertura de tests donde duele", "Plan de deuda técnica"],
  },
  {
    title: "Infra y despliegue",
    description:
      "Que salir a producción sea aburrido: contenedores, CI/CD y entornos separados con datos que no se pisan.",
    bullets: ["Docker y VPS", "CI/CD y entornos dev/prod", "Vercel, Supabase, observabilidad"],
  },
];

export type Project = {
  title: string;
  sector: string;
  year: string;
  summary: string;
  /** Resultado concreto. Es lo primero que lee un cliente. */
  outcome: string;
  contributions: readonly string[];
  stack: readonly string[];
  /** Vacío = se muestra la etiqueta "Proyecto privado". */
  href?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    title: "Agentes de venta sobre WhatsApp",
    sector: "Plataforma SaaS · retail e inmobiliario",
    year: "2025 — hoy",
    summary:
      "Plataforma multi-empresa donde cada negocio arma su agente: carga catálogo y base de conocimiento, y el agente atiende por WhatsApp, cotiza, manda fotos, agenda y transfiere a un asesor cuando toca.",
    outcome:
      "Atención 24/7 sin sumar personal, con el historial completo de cada conversación en una consola.",
    contributions: [
      "Orquestador de conversación con herramientas y reglas por negocio",
      "Búsqueda híbrida (léxica + vectorial) sobre catálogo y documentos",
      "Consola de operación, transferencia a humano y app móvil",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Angular", "Docker"],
    featured: true,
  },
  {
    title: "ERP para taller automotriz",
    sector: "Servicios · operación interna",
    year: "2025 — hoy",
    summary:
      "Sistema de órdenes de trabajo y proformas para un taller con varias sucursales: recepción del vehículo, avance por ítem, conversión a proforma y facturación.",
    outcome:
      "Cada repuesto y cada mano de obra queda con rastro: quién, cuándo y en qué estado. Se acabó el 'creo que ya lo hicimos'.",
    contributions: [
      "Modelo de órdenes, proformas y conversión reversible",
      "Trazabilidad por ítem con bitácora de movimientos",
      "Sesiones, 2FA y permisos por empresa",
    ],
    stack: ["FastAPI", "PostgreSQL", "Next.js", "Alembic", "Playwright"],
    featured: true,
  },
  {
    title: "Plataforma de logística de carga",
    sector: "Logística internacional",
    year: "2025",
    summary:
      "Cotización, seguimiento de embarques y documentación para una operadora de carga, con clientes consultando su estado sin llamar por teléfono.",
    outcome: "Menos correos de '¿en qué va mi carga?' y cotizaciones que salen el mismo día.",
    contributions: [
      "Motor de cotización por ruta y modalidad",
      "Portal del cliente con estados y documentos",
      "Integración con el flujo operativo existente",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Gestión clínica veterinaria",
    sector: "Salud animal",
    year: "2025",
    summary:
      "Historia clínica, agenda y seguimiento de pacientes para una clínica veterinaria: ficha por mascota, consultas, vacunas y recordatorios.",
    outcome: "La ficha completa del paciente en una pantalla, en vez de tres cuadernos.",
    contributions: [
      "Ficha clínica completa con historial",
      "Agenda y recordatorios",
      "Suite de pruebas automatizadas sobre el flujo crítico",
    ],
    stack: ["Django", "Python", "PostgreSQL"],
  },
  {
    title: "Encuestas que preguntan el porqué",
    sector: "Investigación · clima laboral",
    year: "2025",
    summary:
      "Prueba de concepto: en vez de una escala del 1 al 5, un agente repregunta a quien respondió bajo hasta entender la causa real detrás del número.",
    outcome:
      "Respuestas con contexto accionable donde antes había un promedio que no explicaba nada.",
    contributions: [
      "Diseño del guion de indagación",
      "Agente conversacional con criterios de cierre",
      "Síntesis de hallazgos por área",
    ],
    stack: ["Python", "LLMs", "Next.js"],
  },
];

export const process = [
  {
    step: "01",
    title: "Entender el negocio",
    description:
      "Antes de escribir código: cómo funciona hoy, dónde se traba y qué significa 'que funcione' para vos. Salgo con un alcance escrito, no con una intuición.",
  },
  {
    step: "02",
    title: "Diseñar la solución",
    description:
      "Modelo de datos, flujos y pantallas clave. Acá se decide lo caro de cambiar después, así que se decide despacio y por escrito.",
  },
  {
    step: "03",
    title: "Construir por entregas",
    description:
      "Entregas chicas y usables cada semana, en un ambiente donde las podés probar. Nada de 'te muestro en tres meses'.",
  },
  {
    step: "04",
    title: "Medir y sostener",
    description:
      "Pruebas automatizadas, monitoreo y despliegue repetible. El proyecto tiene que poder seguir sin mí y conmigo si me necesitás.",
  },
] as const;

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Redis",
  "pgvector",
  "Docker",
  "GitHub Actions",
  "Playwright",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "LLMs / RAG",
] as const;

export const about = {
  heading: "Software que aguanta el lunes por la mañana",
  paragraphs: [
    "Soy Jose. Llevo años construyendo sistemas para empresas que no viven del software pero dependen de él: talleres, importadoras, clínicas, operadores logísticos. Gente que necesita que la herramienta funcione el lunes a las 8, con la conexión que hay y el personal que hay.",
    "Trabajo el producto completo —interfaz, backend, base de datos, despliegue— y desde 2024 dedico buena parte del tiempo a sistemas con modelos de lenguaje: agentes que atienden clientes, buscan en la base de conocimiento de la empresa y ejecutan acciones reales. Con evaluación y trazas, porque un agente sin medición es una promesa.",
    "Me interesa la parte que casi nadie muestra: el caso raro, el error a las 2 de la mañana, el dato que se duplicó. Ahí es donde un proyecto se gana o se pierde.",
  ],
} as const;

export const faqs = [
  {
    q: "¿Trabajás solo o con equipo?",
    a: "Solo en la mayoría de proyectos, que es lo que hace posible ir rápido y mantener la coherencia. Cuando el alcance lo pide, sumo especialistas de confianza y sigo siendo tu único punto de contacto.",
  },
  {
    q: "¿Cómo cobrás?",
    a: "Por alcance cerrado cuando el proyecto está definido, o por bloque mensual cuando es acompañamiento continuo. En ambos casos sabés el número antes de empezar.",
  },
  {
    q: "¿Qué pasa con el código?",
    a: "Es tuyo. Repositorio a tu nombre, documentación de despliegue y un traspaso ordenado. No dejo cajas negras ni dependencias de mí.",
  },
  {
    q: "¿Trabajás con proyectos ya empezados?",
    a: "Sí, y es buena parte de lo que hago. Empiezo con una auditoría corta con evidencia medida, y de ahí sale un plan por prioridad antes de tocar nada.",
  },
] as const;
