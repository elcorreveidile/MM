# 🎯 PASOS FINALES - Configurar Root Directory en Vercel

## 📍 Situación actual:

- ✅ Proyecto creado: **mariano-maresca-exposicion**
- ✅ Conectado a GitHub: https://github.com/elcorreveidile/MM
- ❌ Error: Root Directory no configurado (busca en raíz en lugar de en /web)

---

## ⚡ SOLUCIÓN - 2 minutos en el navegador:

### Paso 1: Abrir el proyecto en Vercel

**Click aquí:**
https://vercel.com/javiers-projects-cc8068ed/mariano-maresca-exposicion

### Paso 2: Configurar Root Directory

1. Click en **Settings** (pestaña superior)
2. En la sección **General**, buscar **Root Directory**
3. Cambiar el campo vacío a: **web**
4. Click en **Save**

### Paso 3: Hacer Redeploy

1. Click en **Deployments** (pestaña superior)
2. Verás el último deployment fallido (icono rojo)
3. Click en los tres puntos (⋮) del deployment
4. Click en **Redeploy**
5. Confirmar click en **Redeploy**

### Paso 4: Esperar (1 minuto)

El build debería completarse exitosamente esta vez.

### Paso 5: Verificar

Visita la URL que te da Vercel (será algo como):
https://mariano-maresca-exposicion.vercel.app

---

## 🎯 Expected Result:

Build output debería mostrar:
```
✓ Compiled successfully
Route (app)
┌ ○ /
├ ○ /biografia
├ ○ /cronologia
└ ...
```

Y la URL debería mostrar la web de Mariano Maresca.

---

## 📊 Estado del proyecto:

- **Nombre:** mariano-maresca-exposicion
- **Repo:** elcorreveidile/MM
- **Framework:** Next.js 16.2.4
- **Build Command:** cd web && npm run build
- **Install Command:** cd web && npm install
- **Output Directory:** web/.next
- **❌ Root Directory:** (necesita ser "web")

---

## ⏱️ Tiempo total estimado: 2 minutos

Es solo configurar el Root Directory y redeploy. Todo el código ya está listo en GitHub.
