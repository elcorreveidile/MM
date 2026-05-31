import { createClient as createAdminClient } from '@supabase/supabase-js'
import AvisosManager from './AvisosManager'

export default async function AvisosPage() {
  const supabase = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: avisos } = await supabase.from('avisos').select('*').order('created_at', { ascending: false })

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Tablón de avisos</h1>
        <p className="font-libre text-zinc-500 text-sm">Mensajes visibles para socios en su panel.</p>
      </div>
      <AvisosManager avisos={avisos ?? []} />
    </div>
  )
}
