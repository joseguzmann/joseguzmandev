# joseguzman.dev

Sitio personal y portafolio de Jose Guzmán. Next.js (App Router) + Tailwind CSS v4,
desplegado en Vercel como sitio estático.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint
```

## Dónde se edita el contenido

**Todo el texto vive en un solo archivo: [`src/content/site.ts`](src/content/site.ts).**
Los componentes no tienen texto hardcodeado, así que para actualizar el sitio no hace
falta tocar JSX.

| Export | Qué controla |
| --- | --- |
| `site` | Nombre, rol, correo, dominio, redes, disponibilidad |
| `nav` | Enlaces del menú (deben coincidir con los `id` de las secciones) |
| `stats` | Los tres números del hero |
| `services` | Tarjetas de la sección Servicios |
| `projects` | Casos de la sección Trabajo |
| `process` | Las cuatro etapas |
| `stack` | La cinta de tecnologías |
| `about` | Bio |
| `faqs` | Preguntas frecuentes |

Detalles útiles:

- En `site.socials`, dejar una red en `""` hace que el enlace **no se renderice**.
- En un proyecto, sin `href` se muestra la etiqueta *"Proyecto privado"*; con `href`
  aparece el enlace *"Ver el proyecto"*.
- `featured: true` hace que la tarjeta ocupe el ancho completo en escritorio.

### Pendientes marcados en el código

Buscá `TODO(jose)` en `src/content/site.ts`:

1. **El correo** (`site.email`) es un placeholder: `hola@joseguzman.dev`.
2. **Los números de `stats`** son un punto de partida, no un dato verificado.

Los proyectos están descritos **sin nombrar clientes**, a propósito. Si querés nombrarlos,
pediles permiso primero: el repo es público.

## Estructura

```
src/
  app/
    layout.tsx           metadata, JSON-LD, script anti-destello del tema
    page.tsx             compone las secciones
    globals.css          tokens de diseño (claro/oscuro) y animaciones
    opengraph-image.tsx  imagen 1200×630 generada en build
    icon.tsx             favicon generado
    sitemap.ts / robots.ts
    not-found.tsx
  components/            una sección por archivo
  content/site.ts        ← el contenido
  lib/utils.ts
```

## Diseño

- **Tema claro/oscuro** por variables CSS. Sigue la preferencia del sistema y el botón
  del header la sobrescribe (se guarda en `localStorage`). Un script inline pinta el
  tema antes del primer frame para que no haya destello.
- **Paleta** definida como tokens en `globals.css`: `--bg`, `--surface`, `--fg`,
  `--muted`, `--line`, `--accent`… Cambiar el acento es cambiar `--accent` en los dos
  bloques (claro y oscuro).
- **Animaciones de entrada** vía `IntersectionObserver` (`src/components/Reveal.tsx`).
  Se aplican solo si hay JS (`<html class="js">`) y se desactivan con
  `prefers-reduced-motion`.

## Desplegar en Vercel

1. Vercel → **Add New… → Project** → importar `joseguzmann/joseguzmandev`.
2. El framework se detecta solo (Next.js). No hay variables de entorno.
3. En **Settings → Domains**, agregar `joseguzman.dev` y `www.joseguzman.dev` y apuntar
   el DNS del registrador a los valores que indique Vercel.

Cada push a `main` despliega a producción.

> Si cambiás el dominio, actualizá `site.url` en `src/content/site.ts`: de ahí salen las
> URLs canónicas, el sitemap y las metaetiquetas de OpenGraph.
