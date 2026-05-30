import { createClient } from '@/lib/supabase/server'
import SociosTable from './SociosTable'

export default async function SociosPage() {
  const supabase = await createClient()
  const { data: socios } = await supabase
    .from('socios')
    .select('*')
    .order('nombre', { ascending: true })

  return (
    <div className="max-w-5xl">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Socios y simpatizantes</h1>
          <p className="font-libre text-zinc-500 text-sm">{socios?.length ?? 0} contactos</p>
        </div>
        <SociosTable socios={socios ?? []} showAddButton />
      </div>
      <SociosTable socios={socios ?? []} />
    </div>
  )
}
