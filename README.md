# Exposición Mariano Maresca - Memoria Viva

Sitio web de la exposición conmemorativa sobre Mariano Maresca (Almería 1945 - Granada 2023), editor de Olvidosdegranada y figura fundamental de la cultura granadina.

## 🌐 Ver la web en producción

- **Vercel (production):** https://mm-gold-beta.vercel.app
- **Local:** http://localhost:3000

## 🚀 Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Crimson Text + Libre Franklin (Google Fonts)
- **CMS:** Sanity (configurado, pendiente implementación completa)

## 📁 Estructura del proyecto

```
web/
├── app/
│   ├── page.tsx              # Homepage
│   ├── biografia/page.tsx    # Biografía completa
│   ├── cronologia/page.tsx   # Timeline interactivo
│   ├── exposicion/page.tsx   # Información de la exposición
│   ├── archivo/page.tsx      # Archivo documental
│   ├── galeria/page.tsx      # Galería multimedia
│   ├── buscador/page.tsx     # Buscador global
│   └── disciplinas/[slug]/   # Páginas de disciplinas artísticas
├── components/
│   └── layout/
│       ├── Header.tsx        # Navegación responsive
│       └── Footer.tsx        # Footer con enlaces
├── lib/
│   └── sanity/
│       └── client.ts         # Cliente Sanity CMS
└── public/                   # Assets estáticos

investigacion/
├── HALLAZGO_BOTANICO.md      # Hallazgo Botánico café
└── HALLAZGO_PRENSA_2023.md   # Obituarios y prensa
```

## 🛠️ Desarrollo local

### Instalar dependencias:
```bash
cd web
npm install
```

### Ejecutar servidor de desarrollo:
```bash
npm run dev
```
Visitar http://localhost:3000

### Build de producción:
```bash
npm run build
```

### Iniciar servidor de producción:
```bash
npm start
```

## 📦 Deployment

### Vercel (Recomendado)

El proyecto está conectado a Vercel para deployment automático desde GitHub.

1. **Deploy automático:** Cada push a `main` hace deploy automático
2. **Configuración:** `vercel.json` en raíz del proyecto
3. **URL:** https://mm-gold-beta.vercel.app

### Manual deployment (Vercel CLI):

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=web/.next
```

## 📝 Contenido

### Secciones principales:
- **Homepage:** Presentación, 7 disciplinas, Olvidosdegranada, proyectos destacados
- **Biografía:** Vida completa, formación, carrera, Botánico, ictus y recuperación
- **Cronología:** Timeline interactivo con eventos por categorías
- **Exposición:** Información del proyecto 2026
- **Archivo:** Documentos digitales y recursos
- **Galería:** Fotografías, videos y multimedia
- **Buscador:** Búsqueda global de contenido

### Disciplinas artísticas (7):
1. Literatura
2. Música
3. Cine
4. Fotografía
5. Arquitectura
6. Diseño
7. Cómic

## 🎨 Diseño

### Inspiración:
- **Olvidosdegranada.es** - Estructura y tipografía
- **Café Botánico** - Espacio cultural de Mariano

### Paleta de colores:
- **Principal:** Zinc (#900, #800, #700, #600)
- **Acento:** White
- **Background:** Zinc-50, Zinc-100

### Tipografías:
- **Headings:** Crimson Text (serif)
- **Body:** Libre Franklin (sans-serif)
- **Ambas:** Google Fonts

## ✅ Estado del proyecto

- **Web:** ✅ Completada y funcional
- **Copy:** ✅ Actualizado con datos correctos
- **Build:** ✅ Sin errores
- **Deploy:** ⏳ En proceso

## 📚 Fuentes documentales

### Web:
- Botánico café: https://botanicocafe.es/mariano-maresca/

### Prensa:
- El Independiente de Granada (10 enero 2023)
- Ideal (10 enero 2023)
- El País - "Una carta de amor para Mariano Maresca" por Almudena Grandes (15 enero 2012)

## 👥 Organización

**Promotor:** Asociación Cultural Olvidos de Granada
**Comisario:** Javier Benítez
**Año:** 2026

## 📄 Licencia

© 2026 Proyecto Exposición Mariano Maresca. Asociación Cultural Olvidos de Granada.
