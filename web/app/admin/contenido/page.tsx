import { createClient } from '@/lib/supabase/server'
import ContenidoEditor from './ContenidoEditor'

const LABELS: Record<string, string> = {
  disciplina_literatura: 'Disciplina — Literatura',
  disciplina_filosofia: 'Disciplina — Filosofía',
  'disciplina_pensamiento-politico': 'Disciplina — Pensamiento Político',
  disciplina_cine: 'Disciplina — Cine',
  disciplina_fotografia: 'Disciplina — Fotografía',
  disciplina_arquitectura: 'Disciplina — Arquitectura',
  disciplina_diseno: 'Disciplina — Diseño',
  disciplina_comic: 'Disciplina — Cómic',
  disciplina_musica: 'Disciplina — Música',
}

export default async function ContenidoPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('contenido')
    .select('*')
    .order('clave')

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Editor de contenido</h1>
        <p className="font-libre text-zinc-500 text-sm">{data?.length ?? 0} secciones editables</p>
      </div>
      <div className="space-y-3">
        {(data ?? []).map(item => (
          <ContenidoEditor
            key={item.id}
            id={item.id}
            clave={item.clave}
            label={LABELS[item.clave] ?? item.clave}
            valor={item.valor}
          />
        ))}
      </div>
    </div>
  )
}
