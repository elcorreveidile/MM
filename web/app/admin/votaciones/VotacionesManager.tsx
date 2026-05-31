'use client'

import { useState, useTransition } from 'react'
import { crearVotacion, toggleVotacion, eliminarVotacion } from './actions'

type Voto = { opcion_index: number }
type Votacion = {
  id: number; titulo: string; descripcion: string | null
  opciones: string[]; activa: boolean; created_at: string
  votos: Voto[]
}

export default function VotacionesManager({ votaciones }: { votaciones: Votacion[] }) {
  const [modalNew, setModalNew] = useState(false)
  const [viendo, setViendo] = useState<Votacion | null>(null)
  const [opciones, setOpciones] = useState(['', ''])
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  function addOpcion() { setOpciones(prev => [...prev, '']) }
  function removeOpcion(i: number) { setOpciones(prev => prev.filter((_, j) => j !== i)) }
  function setOpcion(i: number, v: string) { setOpciones(prev => prev.map((o, j) => j === i ? v : o)) }

  function openNew() { setOpciones(['', '']); setError(''); setModalNew(true) }

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = await crearVotacion(fd)
      if (res.error) setError(res.error)
      else { setModalNew(false); setError('') }
    })
  }

  function resultados(v: Votacion) {
    const total = v.votos.length
    return v.opciones.map((opcion, i) => {
      const count = v.votos.filter(x => x.opcion_index === i).length
      const pct = total > 0 ? Math.round((count / total) * 100) : 0
      return { opcion, count, pct }
    })
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={openNew}
          className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] transition-colors">
          + Nueva votación
        </button>
      </div>

      <div className="bg-white space-y-px">
        {votaciones.length === 0 && (
          <p className="px-4 py-8 font-libre text-sm text-zinc-400 text-center">No hay votaciones todavía.</p>
        )}
        {votaciones.map(v => (
          <div key={v.id} className="flex items-start gap-4 px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50">
            <div className="flex-1 min-w-0">
              <p className="font-libre text-sm font-medium text-zinc-900">{v.titulo}</p>
              <p className="font-libre text-xs text-zinc-400 mt-0.5">
                {v.opciones.length} opciones · {v.votos.length} votos
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => setViendo(v)}
                className="font-libre text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                Resultados
              </button>
              <form action={async () => { await toggleVotacion(v.id, !v.activa) }}>
                <button type="submit"
                  className={`font-libre text-xs px-2 py-0.5 transition-colors ${v.activa ? 'bg-[#E84878] text-white hover:bg-[#d03868]' : 'border border-zinc-300 text-zinc-400 hover:border-zinc-500'}`}>
                  {v.activa ? '✓ Activa' : '— Cerrada'}
                </button>
              </form>
              <form action={async () => { if (!confirm('¿Eliminar esta votación y todos sus votos?')) return; await eliminarVotacion(v.id) }}>
                <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors">×</button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* Modal nueva votación */}
      {modalNew && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <form onSubmit={handleCreate} className="bg-white p-6 w-full max-w-lg space-y-4 my-auto">
            <h2 className="font-crimson font-bold text-xl">Nueva votación</h2>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Título</label>
              <input name="titulo" required
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
                placeholder="¿Sobre qué votáis?" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Descripción (opcional)</label>
              <textarea name="descripcion" rows={2}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">Opciones</label>
              <div className="space-y-2">
                {opciones.map((o, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input name="opcion" value={o} onChange={e => setOpcion(i, e.target.value)} required
                      className="flex-1 border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
                      placeholder={`Opción ${i + 1}`} />
                    {opciones.length > 2 && (
                      <button type="button" onClick={() => removeOpcion(i)}
                        className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors">×</button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={addOpcion}
                className="mt-2 font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
                + Añadir opción
              </button>
            </div>
            {error && <p className="font-libre text-xs text-[#E84878]">{error}</p>}
            <div className="flex gap-3">
              <button type="submit" disabled={isPending}
                className="flex-1 bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase py-2 hover:bg-[#d03868] disabled:opacity-50">
                {isPending ? 'Creando...' : 'Crear votación'}
              </button>
              <button type="button" onClick={() => setModalNew(false)}
                className="flex-1 border border-zinc-300 font-libre text-xs tracking-widest uppercase py-2 hover:bg-zinc-50">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal resultados */}
      {viendo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white p-6 w-full max-w-lg space-y-4 my-auto">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-crimson font-bold text-xl">{viendo.titulo}</h2>
              <button onClick={() => setViendo(null)} className="text-zinc-400 hover:text-zinc-900 text-xl leading-none">×</button>
            </div>
            <p className="font-libre text-xs text-zinc-400">{viendo.votos.length} votos emitidos</p>
            <div className="space-y-3">
              {resultados(viendo).map(({ opcion, count, pct }) => (
                <div key={opcion}>
                  <div className="flex justify-between mb-1">
                    <span className="font-libre text-sm text-zinc-900">{opcion}</span>
                    <span className="font-libre text-xs text-zinc-400">{count} ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E84878] transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
