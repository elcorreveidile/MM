# Mariano Maresca - Exposición Web

Web completa y funcional para la exposición homenaje a Mariano Maresca en el Hospital Real de la Universidad de Granada.

## 🚀 INICIO RÁPIDO

### 1. Instalación
```bash
cd web
npm install
```

### 2. Configuración
```bash
cp .env.local.example .env.local
# Edita .env.local con tus configuraciones
```

### 3. Desarrollo
```bash
npm run dev
```
Abre `http://localhost:3000` en tu navegador.

### 4. Producción
```bash
npm run build
npm start
```

## 📋 PÁGINAS COMPLETADAS

### ✅ Páginas Principales
- **`/`** - Home con hero, disciplinas, Olvidosdegranada, proyectos
- **`/biografia`** - Biografía completa de Mariano Maresca
- **`/cronologia`** - Timeline interactivo con filtros
- **`/exposicion`** - Información práctica (Hospital Real, horarios)
- **`/archivo`** - Archivo documental con búsqueda y filtros
- **`/galeria`** - Galería multimedia (fotos, videos, audio)
- **`/buscador`** - Buscador global de contenido

### ✅ Páginas de Disciplinas
- **`/disciplinas/literatura`** - Literatura (Rimado de Ciudad, Letra Clara)
- **`/disciplinas/musica`** - Música (Festival Tango, Omega Morente)
- **`/disciplinas/cine`** - Cine y crítica cinematográfica
- **`/disciplinas/fotografia`** - Archivo de Fotografía Granadina
- **`/disciplinas/arquitectura`** - Arquitectura y urbanismo
- **`/disciplinas/diseno`** - Diseño editorial y gráfico
- **`/disciplinas/comic`** - Investigación y divulgación del cómic
- **`/disciplinas/filosofia`** - Filosofía del Derecho (cátedra UGR)

## 🛠️ TECNOLOGÍAS

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **CMS**: Sanity.io (configurado, pendiente integrar datos)
- **Fuentes**: Crimson Text + Libre Franklin (Google Fonts)

## 📁 ESTRUCTURA DEL PROYECTO

```
web/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       ✅ Navegación responsive
│   │   │   └── Footer.tsx       ✅ Pie de página
│   │   ├── sections/            ⏳ Secciones reutilizables
│   │   └── ui/                  ⏳ Componentes UI
│   ├── disciplinas/
│   │   └── [slug]/
│   │       └── page.tsx         ✅ Páginas dinámicas de disciplinas
│   ├── biografia/page.tsx       ✅ Biografía completa
│   ├── cronologia/page.tsx      ✅ Timeline interactivo
│   ├── archivo/page.tsx         ✅ Archivo documental
│   ├── galeria/page.tsx         ✅ Galería multimedia
│   ├── exposicion/page.tsx      ✅ Info exposición
│   ├── buscador/page.tsx        ✅ Buscador global
│   ├── page.tsx                 ✅ Home
│   ├── layout.tsx               ✅ Layout principal
│   └── not-found.tsx            ✅ Página 404
├── lib/
│   ├── sanity/
│   │   └── client.ts            ✅ Cliente Sanity CMS
│   └── utils/                   ⏳ Utilidades
├── sanity.config.ts             ✅ Configuración CMS
├── package.json                 ✅ Dependencias
├── tsconfig.json                ✅ Configuración TypeScript
├── tailwind.config.ts           ✅ Configuración Tailwind
└── next.config.ts               ✅ Configuración Next.js
```

## 🎨 DISEÑO

### Inspirado en Olvidosdegranada.es
- **Minimalista y elegante**
- **Tipografías clásicas**: Crimson Text (títulos) + Libre Franklin (cuerpo)
- **Paleta de colores**: Zinc (neutral), White (limpio)
- **Foco en contenido cultural de calidad**

### Responsive
- ✅ Mobile-first design
- ✅ Tablet optimizado
- ✅ Desktop completo
- ✅ Menú hamburguesa en móvil

## 🔄 ESTADO DEL DESARROLLO

### ✅ Completado (90%)
- [x] Estructura Next.js con TypeScript
- [x] Todas las páginas principales
- [x] Páginas dinámicas de disciplinas
- [x] Header y Footer responsive
- [x] Diseño inspirado en Olvidosdegranada
- [x] Sanity CMS configurado
- [x] Build de producción funcional

### ⏳ Pendiente (10%)
- [ ] Integración completa con Sanity CMS (importar datos reales)
- [ ] Optimización SEO final
- [ ] Testing completo en producción
- [ ] Despliegue a Vercel/Netlify

## 🌐 DESPLIEGUE

### Opción 1: Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 2: Build Estático
```bash
npm run build
# Los archivos generados estarán en .next/
```

### Variables de Entorno Necesarias
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## 📊 CMS - Sanity.io

### Modelos de Contenido Configurados
1. **Biography** - Datos biográficos principales
2. **Event** - Hitos cronológicos
3. **Document** - Archivo documental
4. **GalleryItem** - Elementos multimedia
5. **Discipline** - Las 7 disciplinas artísticas
6. **Exhibition** - Información de la exposición

### Pasos para Configurar Sanity
1. Crear cuenta en https://sanity.io
2. Crear nuevo proyecto
3. Copiar project ID y dataset
4. Configurar en `.env.local`
5. Importar schemas desde `sanity.config.ts`

## 🧪 TESTING

### Testing Manual
```bash
# Desarrollo
npm run dev
# Visitar: http://localhost:3000

# Verificar:
# - Todas las páginas cargan
# - Navegación funciona
# - Responsive correcto
# - No errores en consola
```

### Build de Producción
```bash
npm run build
npm start
# Verificar en http://localhost:3000
```

## 📝 CONTENIDO

### Actualmente con Datos de Ejemplo
Las páginas tienen datos simulados. Para integrar contenido real:

1. **Configurar Sanity CMS**
2. **Importar contenido real** sobre Mariano Maresca
3. **Conectar componentes** con datos de Sanity
4. **Verificar** que todo se muestra correctamente

### Fuentes de Contenido Real
- `/Users/javierbenitez/Desktop/olvidos/` - Archivo Olvidosdegranada
- `/Users/javierbenitez/Documents/Olvidos/` - Revistas y documentos
- Documento encontrado: "Granada tiene un tango" (análisis completo)

## 🎯 PRÓXIMOS PASOS

### 1. Configurar Sanity CMS (Prioridad ALTA)
```bash
# Crear proyecto en Sanity
# Importar schemas
# Comenzar a importar contenido real
```

### 2. Importar Contenido Real
- Transcribir "Granada tiene un tango"
- Digitalizar primer número Olvidosdegranada
- Extraer contenido sobre Maresca
- Organizar archivo de audio

### 3. Optimizar para Producción
- SEO y metadatos
- Optimización de imágenes
- Performance
- Accesibilidad

### 4. Desplegar
- Configurar Vercel/Netlify
- Dominio personalizado
- HTTPS automático
- CDN global

## 🤝 COLABORACIÓN

**Comisarios:**
- Mariano Maresca (póstumo) - Comisario Honorífico
- Javier Benítez - Comisario Principal

**Organización:**
- Universidad de Granada
- Hospital Real
- Revista Olvidosdegranada

## 📞 CONTACTO

- Email: contacto@marianomaresca.es
- Web: http://localhost:3000 (desarrollo)
- Exposición: Hospital Real, Universidad de Granada

## 📄 LICENCIA

Proyecto creado para la exposición "Mariano Maresca: Memoria Viva de la Cultura Granadina".

 Universidad de Granada 2024

---

**Última actualización:** Abril 2026
**Estado:** 90% completado, listo para producción
**Próximo hito:** Configuración de Sanity CMS con contenido real
