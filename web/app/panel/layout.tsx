import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ALLOWED_ADMINS } from '@/lib/admins'

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return children // middleware redirige al login

  // Los admins tienen su propio panel
  if (ALLOWED_ADMINS.includes(user.email ?? '')) {
    redirect('/admin')
  }

  // Verificar que el usuario está en la tabla socios
  const { data: socio } = await supabase
    .from('socios')
    .select('nombre, tipo')
    .eq('email', user.email!)
    .single()

  if (!socio) {
    async function signOutAndGoHome() {
      'use server'
      const supabase = await createClient()
      await supabase.auth.signOut()
      redirect('/')
    }

    // Email autenticado pero no en la asociación
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F2BE2A] mb-4">
            <span className="font-crimson font-bold text-[#8B1A1A] text-lg">MM</span>
          </div>
          <h1 className="font-crimson font-bold text-zinc-900 text-2xl mb-2">Acceso no autorizado</h1>
          <p className="font-libre text-zinc-500 text-sm mb-6">
            Este correo no está registrado en la Asociación Olvidos de Granada.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <a href="/" className="font-libre text-xs tracking-widest uppercase bg-zinc-900 text-white px-6 py-3 hover:bg-zinc-700 transition-colors">
              Volver al inicio
            </a>
            <form action={signOutAndGoHome}>
              <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  async function signOut() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/panel/login')
  }

  const esSocio = socio.tipo === 'socio'

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <nav className="bg-white border-b border-zinc-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#F2BE2A] flex items-center justify-center">
            <span className="font-crimson font-bold text-[#8B1A1A] text-xs">MM</span>
          </div>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-500">
            {esSocio ? 'Socio de Olvidos' : 'Amigo de Mariano'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-libre text-xs text-zinc-400 hidden sm:block">{user.email}</span>
          <form action={signOut}>
            <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
              Salir
            </button>
          </form>
        </div>
      </nav>

      <div className="bg-white border-b border-zinc-100 px-6 py-2 flex gap-5 overflow-x-auto">
        <Link href="/panel" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Mi ficha</Link>
        <Link href="/panel/frase" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">La presente</Link>
        {esSocio && (
          <>
            <Link href="/panel/avisos" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Tablón</Link>
            <Link href="/panel/calendario" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Calendario</Link>
            <Link href="/panel/propuestas" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Propuestas</Link>
            <Link href="/panel/votaciones" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Votaciones</Link>
            <Link href="/panel/consejo" className="font-libre text-xs text-zinc-500 hover:text-zinc-900 transition-colors whitespace-nowrap">Consejo</Link>
          </>
        )}
      </div>

      <main className="max-w-2xl mx-auto px-4 py-10">{children}</main>
    </div>
  )
}
