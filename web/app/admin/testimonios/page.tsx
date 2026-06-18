import { createClient as createAdminClient } from '@supabase/supabase-js'
import TestimonioCard from './TestimonioCard'

export default async function TestimoniosPage() {
  const supabase = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  const { data: socios } = await supabase
    .from('socios')
    .select('id, nombre, email, tipo, notas, publicar_testimonio')
    .not('notas', 'is', null)
    .order('nombre')

  const publicados = socios?.filter(s => s.publicar_testimonio) ?? []
  const pendientes = socios?.filter(s => !s.publicar_testimonio) ?? []

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Testimonios</h1>
        <p className="font-libre text-zinc-500 text-sm">
          Textos personales de socios y amigos. Gestiona qué aparece en /memorias.
        </p>
      </div>

      {publicados.length > 0 && (
        <section className="mb-8">
          <h2 className="font-libre text-xs tracking-widest uppercase text-zinc-500 mb-3">
            Publicados ({publicados.length})
          </h2>
          <div className="space-y-3">
            {publicados.map(s => (
              <TestimonioCard key={s.id} socio={s} publicado />
            ))}
          </div>
        </section>
      )}

      {pendientes.length > 0 && (
        <section>
          <h2 className="font-libre text-xs tracking-widest uppercase text-zinc-500 mb-3">
            Sin publicar ({pendientes.length})
          </h2>
          <div className="space-y-3">
            {pendientes.map(s => (
              <TestimonioCard key={s.id} socio={s} publicado={false} />
            ))}
          </div>
        </section>
      )}

      {!socios?.length && (
        <p className="font-libre text-sm text-zinc-500">No hay testimonios registrados.</p>
      )}
    </div>
  )
}
