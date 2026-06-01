import { createClient as createAdminClient } from '@supabase/supabase-js'
import { aprobarContinuacion, rechazarContinuacion, despublicarContinuacion } from './actions'

const FRASE = 'Sabrás por la presente que empeoré de vida'

export default async function AdminFrasePage() {
  const admin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: todas } = await admin
    .from('frase_continuaciones')
    .select('id, autor_email, texto, publicada, created_at')
    .order('created_at', { ascending: false })

  const emails = todas?.map(c => c.autor_email) ?? []
  let nombresMap: Record<string, string> = {}
  if (emails.length > 0) {
    const { data: socios } = await admin.from('socios').select('email, nombre').in('email', emails)
    socios?.forEach(s => { nombresMap[s.email] = s.nombre })
  }

  const pendientes = todas?.filter(c => !c.publicada) ?? []
  const publicadas = todas?.filter(c => c.publicada) ?? []

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">La presente</h1>
        <p className="font-libre text-zinc-500 text-sm italic">
          «{FRASE}…»
        </p>
        <p className="font-libre text-zinc-400 text-xs mt-2">
          {pendientes.length} pendiente{pendientes.length !== 1 ? 's' : ''} · {publicadas.length} publicada{publicadas.length !== 1 ? 's' : ''}
        </p>
      </div>

      {pendientes.length > 0 && (
        <div className="mb-8">
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">Pendientes</p>
          <div className="space-y-3">
            {pendientes.map(c => (
              <div key={c.id} className="bg-white border border-zinc-200 p-5">
                <p className="font-libre text-xs text-zinc-400 mb-2">
                  {nombresMap[c.autor_email] ?? c.autor_email} · {new Date(c.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <p className="font-crimson text-lg italic text-zinc-800 leading-relaxed mb-4">«{c.texto}»</p>
                <div className="flex gap-2">
                  <form action={async () => { 'use server'; await aprobarContinuacion(c.id) }}>
                    <button type="submit" className="font-libre text-xs bg-zinc-900 text-white px-4 py-1.5 hover:bg-zinc-700 transition-colors">
                      Aprobar y publicar
                    </button>
                  </form>
                  <form action={async () => { 'use server'; await rechazarContinuacion(c.id) }}>
                    <button type="submit" className="font-libre text-xs border border-zinc-300 text-zinc-500 px-4 py-1.5 hover:bg-zinc-50 transition-colors">
                      Rechazar
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {pendientes.length === 0 && (
        <div className="bg-white border border-zinc-200 px-6 py-8 text-center mb-8">
          <p className="font-libre text-sm text-zinc-400">No hay continuaciones pendientes.</p>
        </div>
      )}

      {publicadas.length > 0 && (
        <div>
          <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-3">Publicadas</p>
          <div className="space-y-3">
            {publicadas.map(c => (
              <div key={c.id} className="bg-white border border-zinc-200 p-5">
                <p className="font-libre text-xs text-zinc-400 mb-2">
                  {nombresMap[c.autor_email] ?? c.autor_email}
                </p>
                <p className="font-crimson text-lg italic text-zinc-800 leading-relaxed mb-4">«{c.texto}»</p>
                <div className="flex gap-2">
                  <form action={async () => { 'use server'; await despublicarContinuacion(c.id) }}>
                    <button type="submit" className="font-libre text-xs border border-zinc-300 text-zinc-500 px-4 py-1.5 hover:bg-zinc-50 transition-colors">
                      Despublicar
                    </button>
                  </form>
                  <form action={async () => { 'use server'; await rechazarContinuacion(c.id) }}>
                    <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors px-2 py-1.5">
                      × Eliminar
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
