import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

export default async function PanelAvisosPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/panel/login')

  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: socio } = await admin.from('socios').select('tipo').eq('email', user.email!).single()
  if (socio?.tipo !== 'socio') redirect('/panel')

  const { data: avisos } = await admin
    .from('avisos')
    .select('id, titulo, cuerpo, created_at')
    .eq('publicado', true)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Área de socios</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Tablón de avisos</h1>
      </div>

      {(!avisos || avisos.length === 0) ? (
        <p className="font-libre text-zinc-400 text-sm italic">No hay avisos publicados.</p>
      ) : (
        <div className="space-y-4">
          {avisos.map(a => (
            <div key={a.id} className="bg-white border border-zinc-200 p-5 border-l-4 border-l-[#E84878]">
              <p className="font-crimson font-bold text-zinc-900 text-lg mb-2">{a.titulo}</p>
              <p className="font-libre text-zinc-700 text-sm leading-relaxed whitespace-pre-line">{a.cuerpo}</p>
              <p className="font-libre text-xs text-zinc-400 mt-3">
                {new Date(a.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
