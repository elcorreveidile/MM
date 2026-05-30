import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return children // middleware redirige al login

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

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <nav className="bg-white border-b border-zinc-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#F2BE2A] flex items-center justify-center">
            <span className="font-crimson font-bold text-[#8B1A1A] text-xs">MM</span>
          </div>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-500">
            {socio.tipo === 'socio' ? 'Socio de Olvidos' : 'Amigo de Mariano'}
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
      <main className="max-w-2xl mx-auto px-4 py-10">{children}</main>
    </div>
  )
}
