# 🚀 Instrucciones de Deployment - Mariano Maresca Web

## ✅ Estado Actual:

- **Build local:** ✅ Exitoso (sin errores)
- **GitHub:** ✅ Actualizado (commit dfb1c2c)
- **Vercel:** ⏳ Pendiente de autenticación

---

## 🎯 Opción 1: Vercel (RECOMENDADO)

### Paso 1: Autenticar Vercel

El proceso de login está actualmente abierto. Tienes dos opciones:

**Opción A - Completar autenticación en navegador:**
1. Visitar: https://vercel.com/oauth/device?user_code=FWQN-QFPH
2. Iniciar sesión con tu cuenta de GitHub
3. Introducir el código: **FWQN-QFPH**
4. Esperar confirmación

**Opción B - Reiniciar login:**
```bash
# Abrir una nueva terminal
cd /Users/javierbenitez/Desktop/AI/MM/mariano-maresca-exposicion/web
vercel login
```

### Paso 2: Deploy a producción

Una vez autenticado:
```bash
cd web
vercel --prod --yes
```

### Paso 3: Verificar deployment

Visitar: https://mm-gold-beta.vercel.app

---

## 🎯 Opción 2: Netlify (ALTERNATIVA)

### Deploy automático desde GitHub:

1. Ir a: https://app.netlify.com/start
2. Conectar cuenta de GitHub
3. Seleccionar repositorio: `elcorreveidile/MM`
4. Configurar:
   - **Build command:** `cd web && npm run build`
   - **Publish directory:** `web/.next`
   - **Root directory:** `web/`
5. Deploy

---

## 🎯 Opción 3: Deploy Manual con Vercel

Si prefieres control total:

```bash
# 1. Instalar Vercel CLI (si no está instalado)
npm install -g vercel

# 2. Login
vercel login

# 3. Ir al directorio web
cd /Users/javierbenitez/Desktop/AI/MM/mariano-maresca-exposicion/web

# 4. Deploy (primera vez - staging)
vercel

# 5. Deploy a producción
vercel --prod --yes
```

---

## 🔍 Verificación Post-Deployment

Una vez completado el deployment, verificar:

1. **Homepage:** https://[domain].com
   - ✅ Carga correctamente
   - ✅ Todas las secciones visibles
   - ✅ Links funcionan

2. **Páginas principales:**
   - ✅ /biografia
   - ✅ /cronologia
   - ✅ /exposicion
   - ✅ /archivo
   - ✅ /galeria
   - ✅ /buscador

3. **Responsive:**
   - ✅ Funciona en móvil
   - ✅ Funciona en tablet
   - ✅ Funciona en desktop

---

## 🆘 Troubleshooting

### Error: "Authentication required"

**Solución:**
```bash
vercel login
```
Seguir instrucciones en navegador

### Error: Build falla

**Verificar build local:**
```bash
cd web
npm run build
```

Si falla, corregir errores antes de deploy

### Error: "No such file or directory"

**Solución:** Asegurarse de estar en el directorio correcto:
```bash
cd /Users/javierbenitez/Desktop/AI/MM/mariano-maresca-exposicion/web
```

---

## 📊 Checklist Final

- [ ] Login completado (Vercel o Netlify)
- [ ] Deploy ejecutado
- [ ] URL de producción accesible
- [ ] Todas las páginas funcionan
- [ ] Responsive design verificado
- [ ] No hay errores en console del navegador

---

## 🌐 URLs Esperadas

**Vercel:**
- Staging: https://mm-[random].vercel.app
- Production: https://mm-gold-beta.vercel.app (o configurar custom domain)

**Netlify:**
- Production: https://[random-site-name].netlify.app

---

**Fecha:** 22 de abril de 2026
**Estado:** Ready for deployment - pending authentication
**Último commit:** dfb1c2c
