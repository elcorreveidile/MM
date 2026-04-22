# Guía de Despliegue - Vercel

## 🚀 Despliegue Rápido en Vercel

### Opción 1: Desde GitHub (Recomendado)

#### 1. Preparar Repositorio
```bash
# Inicializar git (si no está hecho)
git init
git add .
git commit -m "Initial commit - Mariano Maresca Exposición"

# Crear repositorio en GitHub
git remote add origin https://github.com/TU_USUARIO/mariano-maresca-exposicion.git
git push -u origin main
```

#### 2. Desplegar en Vercel
1. Ir a https://vercel.com
2. Click "Import Project"
3. Seleccionar repositorio GitHub
4. Configurar:
   - **Framework Preset**: Next.js
   - **Root Directory**: `web`
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `.next` (automático)

#### 3. Configurar Variables de Entorno
En Vercel Dashboard > Settings > Environment Variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

#### 4. Deploy
- Click "Deploy"
- Esperar ~2-3 minutos
- ¡Listo! Tu web estará en `https://tu-dominio.vercel.app`

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Seguir instrucciones:
# - Link to existing project? N
# - Project name: mariano-maresca-exposicion
# - Directory: web
# - Settings: usar defaults
```

## 🌐 Dominio Personalizado

### En Vercel Dashboard:
1. Settings > Domains
2. Añadir dominio: `marianomaresca.es` (o el que tengas)
3. Configurar DNS:

#### DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Esperar propagación DNS (24-48h)

## ⚡ Optimizaciones para Producción

### 1. Imágenes
```typescript
// Usar Next.js Image component
import Image from 'next/image'

<Image
  src="/ruta/imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
  priority // Para imágenes above-the-fold
/>
```

### 2. Metadatos SEO
```typescript
// En app/layout.tsx
export const metadata: Metadata = {
  title: 'Mariano Maresca - Memoria Viva de la Cultura Granadina',
  description: 'Exposición homenaje a Mariano Maresca...',
  openGraph: {
    title: 'Mariano Maresca',
    description: 'Exposición en el Hospital Real',
    images: ['/og-image.jpg'],
  },
}
```

### 3. Performance
```typescript
// next.config.ts
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  compress: true,
  swcMinify: true,
}
```

## 🔧 Troubleshooting

### Build Fails
```bash
# Verificar que todo compila localmente
npm run build

# Si falla, revisar:
# - Errores de TypeScript
# - Dependencias faltantes
# - Variables de entorno
```

### Environment Variables No Funcionan
```bash
# Verificar que estén en .env.local
cat .env.local

# En Vercel, verificar:
# Settings > Environment Variables
# Deben empezar con NEXT_PUBLIC_
```

### 404 Errors
```bash
# Verificar routing en Next.js
# Usar archivo not-found.tsx personalizado
# Verificar que app/ estructura sea correcta
```

## 📊 Analytics

### Vercel Analytics (Incluido)
```bash
# Activar en Vercel Dashboard:
# Analytics > Enable Web Analytics
```

### Google Analytics
Añadir en `app/layout.tsx`:
```typescript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
```

## 🔐 Seguridad

### HTTPS Automático
Vercel proporciona HTTPS automáticamente en todos los dominios.

### Headers de Seguridad
En `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

## 🚀 Deploy Commands

### Deploy Manual
```bash
vercel --prod
```

### Preview Deploy
```bash
vercel
# Crea URL de preview para testing
```

### Ver Logs
```bash
vercel logs
```

## 💰 Costes

### Plan Free de Vercel:
- ✅ Hosting ilimitado
- ✅ HTTPS automático
- ✅ 100GB bandwidth/mes
- ✅ Deploy previews
- ✅ Analytics básico

### Plan Pro ($20/mes):
- Todo lo de Free +
- Más bandwidth
- Analytics avanzado
- Soporte prioritario

Para empezar, el plan **Free** es más que suficiente.

## 📱 Checklist Pre-Deploy

- [ ] Build local funciona: `npm run build`
- [ ] Todas las páginas cargan sin errores
- [ ] Variables de entorno configuradas
- [ ] Datos de ejemplo eliminados (o marcados como demo)
- [ ] SEO metadatos completados
- [ ] Imágenes optimizadas
- [ ] Links funcionan correctamente
- [ ] Probado en móvil y desktop
- [ ] Git commit con cambios finales

## 🎉 ¡Listo para Lanzar!

Una vez completado el checklist:
1. Push a GitHub
2. Importar en Vercel
3. Configurar variables
4. Deploy
5. ¡Compartir URL!

**URL de producción:** `https://marianomaresca.es` (o tu dominio)

---

¿Necesitas ayuda con algún paso específico? Contacta al equipo técnico.
