import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  const { count: sociosCount } = await supabase
    .from('socios')
    .select('*', { count: 'exact', head: true })

  return (
    <div className="max-w-4xl">
      <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-2">Panel de administración</h1>
      <p className="font-libre text-zinc-500 text-sm mb-8">Mariano Maresca · Asociación Olvidos de Granada</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/admin/socios" className="bg-white p-6 hover:shadow-md transition-shadow group">
          <div className="text-3xl font-crimson font-bold text-zinc-900 mb-1">
            {sociosCount ?? '—'}
          </div>
          <div className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-2">Socios y simpatizantes</div>
          <div className="font-libre text-zinc-500 text-xs group-hover:text-zinc-700 transition-colors">
            Gestionar base de datos →
          </div>
        </Link>

        <div className="bg-white p-6 opacity-50 cursor-not-allowed">
          <div className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-2">Contenido</div>
          <div className="font-libre text-zinc-500 text-xs">Próximamente</div>
        </div>

        <div className="bg-white p-6 opacity-50 cursor-not-allowed">
          <div className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-2">Galería</div>
          <div className="font-libre text-zinc-500 text-xs">Próximamente</div>
        </div>
      </div>
    </div>
  )
}
