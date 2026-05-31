import { createClient as createAdminClient } from '@supabase/supabase-js'
import VotacionesManager from './VotacionesManager'

export default async function VotacionesPage() {
  const supabase = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: votaciones } = await supabase
    .from('votaciones')
    .select('*, votos(opcion_index)')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Votaciones</h1>
        <p className="font-libre text-zinc-500 text-sm">Votaciones activas y cerradas para socios.</p>
      </div>
      <VotacionesManager votaciones={votaciones ?? []} />
    </div>
  )
}
