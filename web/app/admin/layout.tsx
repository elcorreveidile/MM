import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return children // middleware handles redirect, this is for login page

  const { count: pendientes } = await supabase
    .from('solicitudes_memorias')
    .select('*', { count: 'exact', head: true })
    .eq('estado', 'pendiente')

  async function signOut() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <nav className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#F2BE2A] flex items-center justify-center shrink-0">
              <span className="font-crimson font-bold text-[#8B1A1A] text-xs">MM</span>
            </div>
            <span className="font-libre text-xs tracking-widest uppercase text-zinc-300 hidden sm:inline">Admin</span>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <Link href="/admin" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/admin/socios" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors">
              Contactos
            </Link>
            <Link href="/admin/solicitudes" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
              Solicitudes
              {!!pendientes && pendientes > 0 && (
                <span className="bg-[#E84878] text-white font-libre text-xs px-1.5 py-0.5 rounded-full leading-none">
                  {pendientes}
                </span>
              )}
            </Link>
            <Link href="/admin/contenido" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors hidden sm:inline">
              Contenido
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-libre text-xs text-zinc-400 hidden md:inline">{user.email}</span>
          <form action={signOut}>
            <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-white transition-colors">
              Salir
            </button>
          </form>
        </div>
      </nav>
      <main className="p-4 sm:p-6">{children}</main>
    </div>
  )
}
