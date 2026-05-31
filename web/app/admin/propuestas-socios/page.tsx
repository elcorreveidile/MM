import { createClient as createAdminClient } from '@supabase/supabase-js'
import PropuestasManager from './PropuestasManager'

export default async function PropuestasSociosPage() {
  const supabase = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: propuestas } = await supabase
    .from('propuestas')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Propuestas de socios</h1>
        <p className="font-libre text-zinc-500 text-sm">{propuestas?.length ?? 0} propuestas recibidas.</p>
      </div>
      <PropuestasManager propuestas={propuestas ?? []} />
    </div>
  )
}
