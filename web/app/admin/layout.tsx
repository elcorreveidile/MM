import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return children // middleware handles redirect, this is for login page

  async function signOut() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <nav className="bg-zinc-900 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#F2BE2A] flex items-center justify-center">
              <span className="font-crimson font-bold text-[#8B1A1A] text-xs">MM</span>
            </div>
            <span className="font-libre text-xs tracking-widest uppercase text-zinc-300">Admin</span>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/admin/socios" className="font-libre text-xs text-zinc-300 hover:text-white transition-colors">
              Socios
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-libre text-xs text-zinc-400">{user.email}</span>
          <form action={signOut}>
            <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-white transition-colors">
              Salir
            </button>
          </form>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  )
}
