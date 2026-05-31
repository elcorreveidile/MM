import { createClient as createAdminClient } from '@supabase/supabase-js'
import CalendarioManager from './CalendarioManager'

export default async function CalendarioPage() {
  const supabase = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: eventos } = await supabase.from('eventos_calendario').select('*').order('fecha', { ascending: true })

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Calendario</h1>
        <p className="font-libre text-zinc-500 text-sm">Próximas fechas visibles para socios en su panel.</p>
      </div>
      <CalendarioManager eventos={eventos ?? []} />
    </div>
  )
}
