import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import AdminNav from './AdminNav'

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
      <AdminNav email={user.email!} pendientes={pendientes ?? 0} signOut={signOut} />
      <main className="p-4 sm:p-6">{children}</main>
    </div>
  )
}
