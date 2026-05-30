import { createClient } from '@/lib/supabase/server'
import SolicitudesTable from './SolicitudesTable'

export default async function SolicitudesPage() {
  const supabase = await createClient()
  const { data: solicitudes } = await supabase
    .from('solicitudes_memorias')
    .select('*')
    .order('created_at', { ascending: false })

  const pendientes = solicitudes?.filter(s => s.estado === 'pendiente') ?? []
  const resto = solicitudes?.filter(s => s.estado !== 'pendiente') ?? []

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Solicitudes de Memorias</h1>
        <p className="font-libre text-zinc-500 text-sm">
          {pendientes.length} pendiente{pendientes.length !== 1 ? 's' : ''} · {solicitudes?.length ?? 0} en total
        </p>
      </div>

      {pendientes.length > 0 && (
        <div className="mb-8">
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">Pendientes de aprobación</p>
          <SolicitudesTable solicitudes={pendientes} />
        </div>
      )}

      {pendientes.length === 0 && (
        <div className="bg-white border border-zinc-200 px-6 py-10 text-center mb-8">
          <p className="font-libre text-sm text-zinc-400">No hay solicitudes pendientes.</p>
        </div>
      )}

      {resto.length > 0 && (
        <div>
          <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-3">Procesadas</p>
          <SolicitudesTable solicitudes={resto} readonly />
        </div>
      )}
    </div>
  )
}
