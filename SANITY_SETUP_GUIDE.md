# 🚀 Guía de Instalación de Sanity CMS

## 📅 Fecha: 22 de abril de 2026

---

## ✅ COMPLETADO - 80% Sanity CMS:

### Schemas (7 tipos de contenido):
- ✅ biography.ts - Biografía completa
- ✅ event.ts - Eventos cronológicos
- ✅ project.ts - Proyectos
- ✅ discipline.ts - Disciplinas artísticas
- ✅ document.ts - Documentos de archivo
- ✅ galleryItem.ts - Elementos multimedia
- ✅ exhibition.ts - Información de la exposición

### Configuración:
- ✅ sanity.config.ts - Configuración completa
- ✅ Todos los schemas exportados correctamente
- ✅ package.json con scripts de Sanity

---

## ⏳ PENDIENTE - 20%:

### 1. Crear Proyecto Sanity Cloud
### 2. Integrar datos en páginas web
### 3. Crear contenido inicial

---

## 🎯 PASO 1: CREAR PROYECTO SANITY (10 minutos)

### Opción A: Interfaz Web (Recomendado)

1. **Ir a Sanity:**
   ```
   https://www.sanity.io/getting-started
   ```

2. **Crear cuenta:**
   - Click en "Get started for free"
   - Registrarte con email o GitHub
   - Verificar email

3. **Crear nuevo proyecto:**
   - Nombre del proyecto: `mariano-maresca-exposicion`
   - Dataset: `production`
   - Plan: Free (suficiente para empezar)

4. **Obtener credenciales:**
   -projectId se generará automáticamente
   - Copiar el projectId para el siguiente paso

### Opción B: CLI (Más rápido)

```bash
# En una nueva terminal
cd web
npx @sanity/cli login
npx @sanity/cli init
```

Seguir las instrucciones del CLI.

---

## 🎯 PASO 2: CONFIGURAR PROYECTO (5 minutos)

### 1. Actualizar projectId en sanity.config.ts

**Archivo:** `web/sanity.config.ts`

Cambiar:
```typescript
projectId: 'demo',
```

Por:
```typescript
projectId: 'TU_PROJECT_ID_DE_SANITY',
```

### 2. Instalar dependencias adicionales

```bash
cd web
npm install @sanity/image-url
```

---

## 🎯 PASO 3: EJECUTAR STUDIO (Opcional)

```bash
cd web
npm run sanity
```

El Sanity Studio se abrirá en:
```
http://localhost:3333/studio
```

---

## 🎯 PASO 4: CREAR CONTENIDO INICIAL (30 minutos)

### Documento 1: Biografía

**En Sanity Studio:**
1. Click en "Biografía"
2. Click "New biography"
3. Rellenar:
   - fullName: "Mariano Maresca García-Esteller"
   - shortName: "Mariano Maresca"
   - birth: { year: 1945, city: "Almería", country: "España" }
   - death: { year: 2023, month: "Enero", day: 10, city: "Granada" }
   - profession: "Profesor de Filosofía del Derecho"
   - roles: ["Editor", "Director", "Productor Cultural", "Comisario"]
   - summary: "Profesor de Filosofía del Derecho, editor de Olvidosdegranada y figura fundamental de la cultura granadina (Almería 1945 - Granada 2023)."
   - content: [Bloques con biografía completa]
   - keyPlaces: [
       { name: "Botánico", description: "Café en Granada, su mesa habitual", type: "cafe" }
     ]

### Documento 2: Exposición

1. Click en "Exhibition"
2. Crear documento con:
   - title: "Mariano Maresca - Memoria Viva"
   - subtitle: "Memoria Viva de la Cultura Granadina"
   - type: "Exposición Conmemorativa"
   - year: 2026
   - promoter: "Asociación Cultural Olvidos de Granada"
   - curators: [
       { name: "Javier Benítez", role: "Comisario principal" }
     ]
   - status: "Planificación"

### Documentos 3-10: Eventos Clave

Crear eventos cronológicos importantes:
1. **1945** - Nacimiento en Almería
2. **1983** - Rimado de ciudad
3. **1984** - Olvidos de Granada comienza
4. **1985** - Libro sobre Clarín
5. **1989** - La Fábrica del Sur
6. **1993** - Libro sobre Pasolini
7. **2004** - Columnas en El País comienzan
8. **2011** - Ictus (noviembre)
9. **2015** - Documental "Palabra a palabra"
10. **2023** - Fallecimiento y exposición Botánico

### Documentos 11-17: Proyectos Destacados

1. Olvidos de Granada (1984-87)
2. La Fábrica del Sur (1989-90)
3. Rimado de ciudad (1983)
4. Libro sobre Clarín (1985)
5. Libro sobre Pasolini (1993)
6. Columnas El País (2004-08)
7. Exposición Botánico (2023)

### Documentos 18-24: Disciplinas

1. Literatura
2. Música
3. Cine
4. Fotografía
5. Arquitectura
6. Diseño
7. Cómic

---

## 🎯 PASO 5: INTEGRACIÓN WEB (Próxima sesión)

Una vez creado el proyecto y contenido inicial:

1. **Actualizar cliente Sanity:**
   - Configurar queries para fetch datos
   - Implementar en páginas /biografía, /cronologia, etc.

2. **Reemplazar contenido estático:**
   - Biografía: Datos de Sanity
   - Cronología: Eventos de Sanity
   - Disciplinas: Contenido de Sanity

3. **Testear:**
   - Verificar que los datos se muestran correctamente
   - Probar Sanity Studio para edición en vivo

---

## 📊 ESTRUCTURA DE DATOS ESPERADA:

```
Proyecto Sanity: mariano-maresca-exposicion
├── biography (1 documento)
├── exhibition (1 documento)
├── events (30-50 eventos cronológicos)
├── projects (20+ proyectos)
├── disciplines (7 disciplinas artísticas)
├── documents (100+ documentos de archivo)
└── galleryItems (50+ elementos multimedia)
```

---

## 🔐 CREDENCIALES:

**Una vez creado el proyecto:**
- Project ID: [Se generará automáticamente]
- Dataset: `production`
- API Token: [Generar en Sanity Dashboard → Settings → API]

---

## 📖 DOCUMENTACIÓN DE SANITY:

- **Docs:** https://www.sanity.io/docs
- **GROQ:** https://www.sanity.io/docs/groq
- **Next.js:** https://www.sanity.io/docs/nextjs

---

## ⏱️ TIEMPO ESTIMADO:

- **Creación proyecto:** 10 minutos
- **Configuración:** 5 minutos
- **Contenido inicial:** 30-45 minutos
- **Total:** ~1 hora

---

## 🎯 SIGUIENTE SESIÓN:

Una vez completado esto, la siguiente sesión será:

1. Implementar queries GROQ en Next.js
2. Crear componentes para mostrar datos de Sanity
3. Migrar /biografía a Sanity
4. Migrar /cronologia a Sanity
5. Testear integración completa

---

**Estado actual: 80% completado**
**Falta: Configurar proyecto Sanity cloud + integración web**
