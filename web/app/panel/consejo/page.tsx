import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { aprobarTestimonio } from './actions'
import DiscusionesPanel from './DiscusionesPanel'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export default async function ConsejoPanelPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) redirect('/panel/login')

  const admin = getAdmin()

  const { data: socio } = await admin
    .from('socios')
    .select('tipo, consejo_redaccion')
    .eq('email', user.email)
    .single()

  if (!socio || socio.tipo !== 'socio') redirect('/panel')

  const esConsejo = socio.consejo_redaccion === true

  const { data: miembros } = await admin
    .from('socios')
    .select('nombre, email, rol_consejo')
    .eq('consejo_redaccion', true)
    .order('created_at', { ascending: true })

  const editorPrincipal = miembros?.find(m => m.rol_consejo === 'editor_principal') ?? null
  const vocales = miembros?.filter(m => m.rol_consejo !== 'editor_principal') ?? []

  const nombres: Record<string, string> = {}
  miembros?.forEach(m => { nombres[m.email] = m.nombre })

  let pendientes: { id: number; nombre: string; email: string; notas: string; tipo: string }[] = []
  let discusiones: any[] = []

  if (esConsejo) {
    const { data: pend } = await admin
      .from('socios')
      .select('id, nombre, email, notas, tipo')
      .eq('publicar_testimonio', false)
      .not('notas', 'is', null)
      .order('created_at', { ascending: true })
    pendientes = pend ?? []

    const { data: disc } = await admin
      .from('discusiones_consejo')
      .select('*, comentarios_discusion(*)')
      .order('created_at', { ascending: false })
    discusiones = disc ?? []
  }

  return (
    <div className="space-y-10">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Área de socios</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Consejo de Redacción</h1>
      </div>

      {/* Miembros — visible para todos los socios */}
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-3">Miembros</p>
        <div className="bg-white border border-zinc-200 divide-y divide-zinc-100">
          {editorPrincipal && (
            <div className="px-5 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F2BE2A] shrink-0" />
              <div>
                <p className="font-libre text-sm text-zinc-900 font-medium">{editorPrincipal.nombre}</p>
                <p className="font-libre text-xs text-[#8B1A1A]">Editor principal</p>
              </div>
            </div>
          )}
          {vocales.map(m => (
            <div key={m.email} className="px-5 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#E84878] shrink-0" />
              <p className="font-libre text-sm text-zinc-900">{m.nombre}</p>
            </div>
          ))}
          {(!miembros || miembros.length === 0) && (
            <p className="px-5 py-4 font-libre text-sm text-zinc-400 italic">
              El consejo aún no tiene miembros designados.
            </p>
          )}
        </div>
      </div>

      {/* Secciones exclusivas del consejo */}
      {esConsejo && (
        <>
          {/* Revisión editorial */}
          <div>
            <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-3">Revisión editorial</p>
            {pendientes.length === 0 ? (
              <p className="font-libre text-sm text-zinc-400 italic">No hay testimonios pendientes de revisión.</p>
            ) : (
              <div className="space-y-3">
                {pendientes.map(p => (
                  <div key={p.id} className="bg-white border border-zinc-200 p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="font-libre text-sm font-medium text-zinc-900">{p.nombre}</p>
                        <p className="font-libre text-xs text-zinc-400">{p.email} · {p.tipo}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <form action={async () => { 'use server'; await aprobarTestimonio(p.id, true) }}>
                          <button type="submit"
                            className="font-libre text-xs bg-[#E84878] text-white px-3 py-1.5 hover:bg-[#d03868] transition-colors">
                            Publicar
                          </button>
                        </form>
                      </div>
                    </div>
                    <p className="font-libre text-sm text-zinc-600 leading-relaxed line-clamp-4">{p.notas}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Discusiones internas */}
          <DiscusionesPanel discusiones={discusiones} email={user.email} nombres={nombres} />
        </>
      )}
    </div>
  )
}
