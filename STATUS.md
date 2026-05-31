# Estado del proyecto — marianomaresca.com

Sitio web memorial de Mariano Maresca, gestionado por la **Asociación Cultural Olvidos de Granada**.

**URL producción:** https://marianomaresca.com  
**Repositorio:** https://github.com/elcorreveidile/mm  
**Rama de trabajo activa:** `claude/charming-knuth-K3THG` (crear nueva por sesión si esta ya tiene PR abierta)  
**Despliegue:** Vercel — se activa automáticamente con cada merge a `main`

---

## Stack técnico

- **Framework:** Next.js 16 App Router (Server Components, Server Actions, API Routes)
- **Base de datos / Auth:** Supabase (PostgreSQL, Magic Link auth, RLS habilitado en todas las tablas)
- **Estilos:** Tailwind CSS
- **CMS (contenido editorial):** Sanity (biografía, disciplinas, exposición, galería, archivo)
- **Email:** Resend API — `fetch` directo a `https://api.resend.com/emails` (individual) y `/emails/batch` (masivo, lotes de 100)
- **Storage:** Supabase bucket `fotos-memorias` (imágenes de testimonios)

### Variables de entorno necesarias (en Vercel y `.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY     ← bypasa RLS, usar solo server-side
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_TOKEN
RESEND_API_KEY
```

### Fuentes y colores

- `font-crimson` → Crimson Text (bold, títulos)
- `font-libre` → Libre Franklin (cuerpo)
- Rosa: `#E84878`
- Amarillo (destacado): `#F2BE2A`
- Fondo: `bg-[#FAF7F2]`
- Oscuro: `bg-zinc-900`

---

## Estructura de la aplicación

```
web/
├── app/
│   ├── page.tsx                    Portada pública
│   ├── memorias/                   Testimonios públicos ("Memorias")
│   │   ├── page.tsx                Lista testimonios (usa service role para RLS)
│   │   └── contacto/               Formulario "Hazte amigo de Mariano"
│   ├── biografia/ exposicion/ galeria/ disciplinas/ archivo/
│   │                               Contenido desde Sanity
│   ├── admin/                      Área de administración (protegida)
│   │   ├── layout.tsx              Nav: Inicio · Contactos · Solicitudes · Contenido · Correo · Avisos · Calendario · Propuestas · Votaciones
│   │   ├── login/                  Magic link para admins
│   │   ├── page.tsx                Dashboard
│   │   ├── socios/                 Tabla de socios (tipo, testimonio, publicar, destacado)
│   │   │   ├── SociosTable.tsx
│   │   │   └── actions.ts
│   │   ├── solicitudes/            Solicitudes de alta pendientes
│   │   ├── contenido/              Moderar testimonios publicados en /memorias
│   │   ├── correo/                 Envío de email masivo / individual
│   │   │   ├── page.tsx
│   │   │   └── actions.ts
│   │   ├── avisos/                 Tablón de avisos para socios
│   │   │   ├── page.tsx
│   │   │   ├── AvisosManager.tsx
│   │   │   └── actions.ts
│   │   ├── calendario/             Eventos del calendario de socios
│   │   │   ├── page.tsx
│   │   │   ├── CalendarioManager.tsx
│   │   │   └── actions.ts
│   │   ├── propuestas-socios/      Buzón de propuestas enviadas por socios
│   │   │   ├── page.tsx
│   │   │   ├── PropuestasManager.tsx
│   │   │   └── actions.ts
│   │   └── votaciones/             Gestión de votaciones
│   │       ├── page.tsx
│   │       ├── VotacionesManager.tsx
│   │       └── actions.ts
│   ├── panel/                      Área de miembros (autenticados)
│   │   ├── layout.tsx              Nav secundario solo para socios: Mi ficha · Tablón · Calendario · Propuestas · Votaciones
│   │   ├── login/                  Magic link para miembros
│   │   ├── page.tsx                Mi ficha (perfil del socio/amigo)
│   │   ├── avisos/page.tsx         Tablón (solo socios)
│   │   ├── calendario/page.tsx     Calendario (solo socios)
│   │   ├── propuestas/page.tsx     Propuestas a la junta (solo socios)
│   │   └── votaciones/page.tsx     Votaciones (solo socios)
│   ├── api/
│   │   └── panel/
│   │       ├── propuestas/route.ts GET/POST propuestas del socio autenticado
│   │       └── votaciones/route.ts GET votaciones+resultados, POST votar
│   └── components/
│       └── layout/
│           ├── Header.tsx          Cabecera pública ("Mi panel" siempre visible)
│           └── Footer.tsx
├── lib/
│   ├── admins.ts                   ALLOWED_ADMINS (lista de emails admin)
│   └── supabase/
│       ├── client.ts               Cliente browser (anon key)
│       └── server.ts               Cliente server con cookies
└── middleware.ts                   Protege /admin/* y /panel/*
```

---

## Base de datos (Supabase)

Todas las tablas tienen **RLS habilitado**. Usar `createAdminClient` (service role) en server-side para leer. Las rutas API validan permisos manualmente con service role.

### Tablas principales

**`socios`**
```sql
id, email, nombre, tipo ('socio'|'amigo'), bio, foto_url,
publicar_testimonio bool, destacado bool, created_at
```

**`solicitudes`** — altas pendientes de revisión por admin

**`avisos`**
```sql
id, titulo, cuerpo text, publicado bool, created_at
```

**`eventos_calendario`**
```sql
id, titulo, descripcion text|null, fecha date, created_at
```

**`propuestas`**
```sql
id, socio_email, titulo, cuerpo text,
estado ('recibida'|'en_revision'|'respondida'),
respuesta text|null, created_at
```

**`votaciones`**
```sql
id, titulo, descripcion text|null, opciones jsonb (string[]),
activa bool default true, created_at
```

**`votos`**
```sql
id, votacion_id (FK votaciones), opcion_index int, socio_email,
UNIQUE(votacion_id, socio_email)   ← un voto por socio
```

### Storage

Bucket: `fotos-memorias` — imágenes subidas por socios al enviar testimonio.  
Policies configuradas: INSERT para autenticados, SELECT público.

---

## Control de acceso

| Usuario | Acceso |
|---------|--------|
| Visitante anónimo | Páginas públicas (/, /memorias, /biografia, …) |
| Amigo (`tipo = 'amigo'`) | + /panel (solo "Mi ficha") |
| Socio (`tipo = 'socio'`) | + /panel completo (Tablón, Calendario, Propuestas, Votaciones) |
| Admin (en ALLOWED_ADMINS) | + /admin completo, redirigido automáticamente a /admin si va a /panel |

**Admins actuales** (`web/lib/admins.ts`):
- olvidosdegranada@gmail.com
- alfonso.olvidos@gmail.com
- ramonrepiso@gmail.com
- benitezl@go.ugr.es

Para añadir un admin: editar `web/lib/admins.ts` y añadir el email.

---

## Flujo de desarrollo

### Rama y PRs

Cada sesión trabaja en la rama `claude/charming-knuth-K3THG`. Si ya hay un PR abierto en esa rama, crear una nueva: `git checkout -b claude/<nombre-descriptivo>`.

```bash
# Inicio de sesión — sincronizar con main
git fetch origin main
git rebase origin/main
# Si hay commits ya integrados:
# git rebase --skip   (repetir hasta salir del rebase)

# Trabajo normal
git add <archivos>
git commit -m "feat: descripción"
git push -u origin claude/charming-knuth-K3THG
```

### Después de cada push

Crear un PR draft usando las herramientas MCP de GitHub (`mcp__github__create_pull_request`). El repositorio es `elcorreveidile/mm`. Pedir al usuario que lo mergee (squash merge) desde la web de GitHub.

### Patrón habitual

1. Editar archivos con `Edit` / `Write`
2. `git add` específico (nunca `git add -A` por seguridad)
3. `git commit -m "feat/fix: descripción"`
4. `git push -u origin <rama>`
5. Crear PR draft con MCP
6. El usuario mergea desde GitHub → Vercel despliega automáticamente

---

## Funcionalidades implementadas

- [x] Portada con secciones: bio, memorias, disciplinas, galería, archivo (Sanity)
- [x] /memorias — testimonios públicos, destacados con borde amarillo, CTA "Hazte amigo"
- [x] /memorias/contacto — formulario de solicitud de alta
- [x] /admin — gestión completa: socios, solicitudes, contenido, correo masivo/individual
- [x] /admin/avisos — crear/editar/publicar avisos para socios
- [x] /admin/calendario — CRUD de eventos futuros
- [x] /admin/propuestas-socios — buzón de propuestas con estados y respuesta del admin
- [x] /admin/votaciones — crear votaciones con opciones dinámicas, abrir/cerrar, ver resultados
- [x] /panel — área de miembros con Magic Link auth
- [x] /panel/avisos — tablón de avisos (solo socios)
- [x] /panel/calendario — próximos eventos (solo socios)
- [x] /panel/propuestas — enviar propuestas y ver historial con respuestas (solo socios)
- [x] /panel/votaciones — votar y ver resultados en tiempo real (solo socios)
- [x] Header público con "Mi panel" siempre visible
- [x] Middleware que protege /admin/* y /panel/*

---

## Tareas pendientes

### Prioritarias

1. **Documentos reservados para socios** — Subir PDFs privados desde admin (nuevo bucket privado en Supabase Storage) y listarlos en /panel/documentos. Necesita: bucket `documentos-socios` con policy de solo autenticados, tabla `documentos` (titulo, url, created_at), página admin para subir, página panel para listar.

2. **Badge de propuestas no leídas en admin** — Contador en la nav de /admin junto a "Propuestas" cuando hay propuestas con `estado = 'recibida'`. Patrón: el layout de /admin puede hacer un count server-side y pasarlo al componente de nav.

### Mejoras UX

3. **Vista expandible de testimonios en /memorias** — Cuando haya muchos testimonios: mostrar tarjeta con nombre + primera línea + foto (si hay), expandir al hacer clic. Por ahora los testimonios son pocos y se ven completos.

4. **Nav móvil en /admin** — La barra de admin tiene muchos ítems (`hidden sm:inline`). Considerar un menú desplegable o hamburger para móvil.

5. **Reenviar magic link desde panel** — Si un socio/amigo tiene problemas para entrar, actualmente no hay botón de "reenviar enlace". Se puede añadir un botón en /panel/login.

---

## Notas para el agente

- **Siempre usar service role** (`createAdminClient` con `SUPABASE_SERVICE_ROLE_KEY`) en server-side cuando necesites leer tablas con RLS. La anon key devolverá arrays vacíos sin error.
- **No modificar `web/middleware.ts`** sin probar: controla toda la autenticación de /admin y /panel.
- **El branch puede divergir** después de que el usuario mergee un PR. Hacer siempre `git fetch origin main && git rebase origin/main` al inicio de sesión.
- **Commits de Sanity**: el CMS visual está en sanity.io/manage — los cambios editoriales no pasan por Git.
- **Vercel**: el deploy se hace desde `main`. Si algo falla en producción, revisar los logs en el dashboard de Vercel o usar las herramientas MCP `mcp__20163196-88c4-4205-881b-9fd7fc7adcec__get_deployment_build_logs`.
- **No hay tests automatizados**. Verificar manualmente que las rutas críticas funcionan tras cada deploy.
