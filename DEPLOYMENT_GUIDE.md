# 🚀 Guía de Deployment - Exposición Mariano Maresca

## ✅ Estado Actual (22 abril 2026)

### Build Local:
- ✅ **Build exitoso** - Sin errores de TypeScript
- ✅ **Servidor local:** http://localhost:3000 funcionando
- ✅ **Todas las páginas:** Generadas correctamente
- ✅ **Contenido:** Actualizado con datos de Botánico y prensa

### GitHub:
- ✅ **Repositorio:** https://github.com/elcorreveidile/MM
- ✅ **Último commit:** `a1028b2` - deployment configuration
- ✅ **Archivos:** README.md y vercel.json añadidos

---

## 📦 Deployment Options

### Opción 1: Vercel (Automático - Recomendado)

**URL esperada:** https://mm-gold-beta.vercel.app

**Pasos:**
1. El repositorio de GitHub ya está conectado a Vercel
2. Cada push a `main` activa un deploy automático
3. El push actual (commit `a1028b2`) debería activar deployment

**Verificar deployment:**
```bash
# Visitar:
https://mm-gold-beta.vercel.app

# O ver logs en Vercel Dashboard:
https://vercel.com/elcorreveidile's-projects
```

**Si el deploy falla:**
1. Ir a https://vercel.com/dashboard
2. Seleccionar proyecto "MM"
3. Ver "Deployments" para ver logs de error
4. Verificar que "Root Directory" esté configurado correctamente

**Configuración Vercel:**
- **Framework Preset:** Next.js
- **Root Directory:** `web/` (importante)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

---

### Opción 2: Netlify (Alternativa)

**URL esperada:** https://mariano-maresca-exposicion.web.app

**Pasos:**

1. **Instalar Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Inicializar:**
```bash
cd web
netlify init
```

4. **Deploy:**
```bash
netlify deploy --prod
```

**Configuración Netlify:**
```
Build command: npm run build
Publish directory: .next
```

---

### Opción 3: Vercel CLI (Manual)

**Si el deployment automático falla:**

1. **Instalar Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy desde directorio web:**
```bash
cd web
vercel --prod --yes
```

---

## 🔍 Troubleshooting

### Error más común: "Root Directory"

**Problema:** Vercel no encuentra el package.json

**Solución:**
1. En Vercel Dashboard → Project Settings
2. Set "Root Directory" a `web`
3. Redeploy

### Error: Build falla

**Verificar:**
```bash
cd web
npm run build
```

Si falla localmente, corregir errores antes de deploy.

### Error: TypeScript errors

**Verificar:**
```bash
cd web
npx tsc --noEmit
```

---

## 📊 Checklist Pre-Deployment

- [x] Build local exitoso
- [x] Servidor local funciona
- [x] Todas las páginas accesibles
- [x] Copy actualizado y correcto
- [x] GitHub actualizado
- [x] vercel.json configurado
- [x] README.md completo
- [ ] Deployment en producción completado
- [ ] URLs de producción verificadas

---

## 🌐 URLs de Producción

### Esperadas tras deployment exitoso:

**Vercel:**
- Principal: https://mm-gold-beta.vercel.app
- Custom: (pendiente configurar)

**Netlify (si se usa):**
- https://mariano-maresca-exposicion.web.app

**GitHub Pages (no recomendado para Next.js):**
- No aplica - Next.js necesita Node.js server

---

## 📝 Post-Deployment

### Verificaciones:

1. **Homepage:** https://[domain].com
   - ✅ Se carga correctamente
   - ✅ Todas las secciones visibles
   - ✅ Links funcionan

2. **Páginas principales:**
   - ✅ /biografia
   - ✅ /cronologia
   - ✅ /exposicion
   - ✅ /archivo
   - ✅ /galeria
   - ✅ /buscador

3. **Disciplinas:**
   - ✅ /disciplinas/literatura
   - ✅ /disciplinas/musica
   - ✅ /disciplinas/cine
   - ✅ /disciplinas/fotografia
   - ✅ /disciplinas/arquitectura
   - ✅ /disciplinas/diseno
   - ✅ /disciplinas/comic

4. **Performance:**
   - ✅ Tiempo de carga < 3 segundos
   - ✅ Mobile responsive
   - ✅ No hay errores en console

---

## 🎯 Próximos pasos tras deployment exitoso:

1. Configurar dominio personalizado (si se tiene)
2. Configurar analytics (Google Analytics, etc.)
3. Añadir metadatos SEO completo
4. Configurar sitemap.xml
5. Verificar accesibilidad (WCAG)

---

**Fecha:** 22 de abril de 2026
**Responsable:** Javier Benítez
**Estado:** Ready for production deployment
