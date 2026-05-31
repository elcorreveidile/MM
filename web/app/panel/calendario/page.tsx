import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

export default async function PanelCalendarioPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/panel/login')

  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: socio } = await admin.from('socios').select('tipo').eq('email', user.email!).single()
  if (socio?.tipo !== 'socio') redirect('/panel')

  const hoy = new Date().toISOString().split('T')[0]
  const { data: eventos } = await admin
    .from('eventos_calendario')
    .select('*')
    .gte('fecha', hoy)
    .order('fecha', { ascending: true })

  return (
    <div className="space-y-6">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Área de socios</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Calendario</h1>
      </div>

      {(!eventos || eventos.length === 0) ? (
        <p className="font-libre text-zinc-400 text-sm italic">No hay próximas fechas.</p>
      ) : (
        <div className="space-y-3">
          {eventos.map(e => {
            const fecha = new Date(e.fecha + 'T12:00:00')
            return (
              <div key={e.id} className="bg-white border border-zinc-200 p-4 flex gap-4 items-start">
                <div className="shrink-0 text-center w-12 border-r border-zinc-100 pr-4">
                  <p className="font-crimson font-bold text-zinc-900 text-2xl leading-none">{fecha.getDate()}</p>
                  <p className="font-libre text-xs text-zinc-400 uppercase mt-0.5">
                    {fecha.toLocaleDateString('es-ES', { month: 'short' })}
                  </p>
                </div>
                <div>
                  <p className="font-libre text-sm font-medium text-zinc-900">{e.titulo}</p>
                  {e.descripcion && <p className="font-libre text-xs text-zinc-500 mt-1">{e.descripcion}</p>}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
