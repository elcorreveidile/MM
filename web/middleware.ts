import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { ALLOWED_ADMINS } from '@/lib/admins'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname

  // Rutas /admin
  const isAdminRoute = path.startsWith('/admin')
  const isAdminLogin = path === '/admin/login'

  if (isAdminRoute && !isAdminLogin) {
    if (!user || !ALLOWED_ADMINS.includes(user.email ?? '')) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  if (isAdminLogin && user && ALLOWED_ADMINS.includes(user.email ?? '')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Rutas /panel — solo requieren estar autenticado (la verificación de socios se hace en el layout)
  const isPanelRoute = path.startsWith('/panel')
  const isPanelLogin = path === '/panel/login'

  if (isPanelRoute && !isPanelLogin) {
    if (!user) {
      return NextResponse.redirect(new URL('/panel/login', request.url))
    }
  }
  if (isPanelLogin && user) {
    return NextResponse.redirect(new URL('/panel', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*', '/panel/:path*'],
}
