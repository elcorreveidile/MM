'use client'

import { useState, useEffect, useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'

type VotacionData = {
  id: number
  titulo: string
  descripcion: string | null
  opciones: string[]
  activa: boolean
  miVoto: number | null
  resultados: number[]
}

export default function PanelVotacionesPage() {
  const [votaciones, setVotaciones] = useState<VotacionData[]>([])
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isPending, startTransition] = useTransition()

  async function cargar(userEmail: string) {
    const res = await fetch('/api/panel/votaciones?email=' + encodeURIComponent(userEmail))
    const data = await res.json()
    if (data.votaciones) setVotaciones(data.votaciones)
    setLoading(false)
  }

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user?.email) return
      setEmail(user.email)
      cargar(user.email)
    })
  }, [])

  async function votar(votacion_id: number, opcion_index: number) {
    if (!email) return
    startTransition(async () => {
      await fetch('/api/panel/votaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ votacion_id, opcion_index, email }),
      })
      cargar(email)
    })
  }

  function Resultados({ v, seleccion }: { v: VotacionData; seleccion: number | null }) {
    const total = v.resultados.length
    return (
      <div className="space-y-3 mt-4">
        {v.opciones.map((opcion, i) => {
          const count = v.resultados.filter(r => r === i).length
          const pct = total > 0 ? Math.round((count / total) * 100) : 0
          const esMiVoto = seleccion === i
          return (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className={`font-libre text-sm ${esMiVoto ? 'text-zinc-900 font-medium' : 'text-zinc-700'}`}>
                  {esMiVoto ? '✓ ' : ''}{opcion}
                </span>
                <span className="font-libre text-xs text-zinc-400">{count} ({pct}%)</span>
              </div>
              <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${esMiVoto ? 'bg-[#E84878]' : 'bg-zinc-300'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
        <p className="font-libre text-xs text-zinc-400">{total} {total === 1 ? 'voto' : 'votos'} emitidos</p>
      </div>
    )
  }

  const activas = votaciones.filter(v => v.activa)
  const cerradas = votaciones.filter(v => !v.activa)

  return (
    <div className="space-y-8">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Área de socios</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Votaciones</h1>
      </div>

      {loading ? (
        <p className="font-libre text-sm text-zinc-400">Cargando...</p>
      ) : votaciones.length === 0 ? (
        <p className="font-libre text-sm text-zinc-400 italic">No hay votaciones activas.</p>
      ) : (
        <>
          {activas.length > 0 && (
            <div className="space-y-4">
              <p className="font-libre text-xs tracking-widest uppercase text-zinc-400">Abiertas</p>
              {activas.map(v => (
                <div key={v.id} className="bg-white border border-zinc-200 p-5">
                  <p className="font-crimson font-bold text-zinc-900 text-lg mb-1">{v.titulo}</p>
                  {v.descripcion && <p className="font-libre text-sm text-zinc-500 mb-3">{v.descripcion}</p>}

                  {v.miVoto !== null ? (
                    <>
                      <p className="font-libre text-xs text-[#E84878] mb-2">Ya has votado</p>
                      <Resultados v={v} seleccion={v.miVoto} />
                    </>
                  ) : (
                    <div className="space-y-2 mt-3">
                      {v.opciones.map((opcion, i) => (
                        <button
                          key={i}
                          disabled={isPending}
                          onClick={() => votar(v.id, i)}
                          className="w-full text-left border border-zinc-300 font-libre text-sm px-4 py-3 hover:border-zinc-900 hover:bg-zinc-50 transition-colors disabled:opacity-50"
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {cerradas.length > 0 && (
            <div className="space-y-4">
              <p className="font-libre text-xs tracking-widest uppercase text-zinc-400">Cerradas</p>
              {cerradas.map(v => (
                <div key={v.id} className="bg-white border border-zinc-200 p-5 opacity-75">
                  <p className="font-crimson font-bold text-zinc-900 text-lg mb-1">{v.titulo}</p>
                  {v.descripcion && <p className="font-libre text-sm text-zinc-500 mb-2">{v.descripcion}</p>}
                  <Resultados v={v} seleccion={v.miVoto} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
