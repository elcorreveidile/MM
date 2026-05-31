'use client'

import { useState, useTransition } from 'react'
import { cambiarEstado, responderPropuesta } from './actions'

type Propuesta = {
  id: number; socio_nombre: string; socio_email: string
  titulo: string; cuerpo: string; estado: string
  respuesta: string | null; created_at: string
}

const ESTADOS: Record<string, { label: string; color: string }> = {
  recibida:    { label: 'Recibida',    color: 'bg-zinc-100 text-zinc-600' },
  en_revision: { label: 'En revisión', color: 'bg-[#F2BE2A] text-[#8B1A1A]' },
  respondida:  { label: 'Respondida',  color: 'bg-[#E84878] text-white' },
}

export default function PropuestasManager({ propuestas }: { propuestas: Propuesta[] }) {
  const [abierta, setAbierta] = useState<Propuesta | null>(null)
  const [respuesta, setRespuesta] = useState('')
  const [isPending, startTransition] = useTransition()

  function abrir(p: Propuesta) { setAbierta(p); setRespuesta(p.respuesta ?? '') }

  return (
    <div>
      <div className="bg-white space-y-px">
        {propuestas.length === 0 && (
          <p className="px-4 py-8 font-libre text-sm text-zinc-400 text-center">No hay propuestas todavía.</p>
        )}
        {propuestas.map(p => {
          const est = ESTADOS[p.estado] ?? ESTADOS.recibida
          return (
            <div key={p.id} className="flex items-start gap-4 px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50 cursor-pointer"
              onClick={() => abrir(p)}>
              <div className="flex-1 min-w-0">
                <p className="font-libre text-sm font-medium text-zinc-900">{p.titulo}</p>
                <p className="font-libre text-xs text-zinc-400 mt-0.5">{p.socio_nombre} · {new Date(p.created_at).toLocaleDateString('es-ES')}</p>
              </div>
              <span className={`font-libre text-xs px-2 py-0.5 shrink-0 ${est.color}`}>{est.label}</span>
            </div>
          )
        })}
      </div>

      {abierta && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white p-6 w-full max-w-lg space-y-4 my-auto">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-crimson font-bold text-xl">{abierta.titulo}</h2>
              <button onClick={() => setAbierta(null)} className="text-zinc-400 hover:text-zinc-900 text-xl leading-none">×</button>
            </div>
            <p className="font-libre text-xs text-zinc-400">{abierta.socio_nombre} ({abierta.socio_email})</p>
            <p className="font-libre text-sm text-zinc-700 leading-relaxed border-l-4 border-zinc-200 pl-4">{abierta.cuerpo}</p>

            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">Estado</label>
              <div className="flex gap-2">
                {Object.entries(ESTADOS).map(([val, { label, color }]) => (
                  <form key={val} action={async () => {
                    await cambiarEstado(abierta.id, val)
                    setAbierta({ ...abierta, estado: val })
                  }}>
                    <button type="submit"
                      className={`font-libre text-xs px-3 py-1 transition-colors ${abierta.estado === val ? color : 'border border-zinc-300 text-zinc-400 hover:border-zinc-500'}`}>
                      {label}
                    </button>
                  </form>
                ))}
              </div>
            </div>

            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
                Respuesta (visible para el socio)
              </label>
              <textarea
                rows={4}
                value={respuesta}
                onChange={e => setRespuesta(e.target.value)}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
                placeholder="Escribe una respuesta..."
              />
              <button
                disabled={isPending || !respuesta.trim()}
                onClick={() => startTransition(async () => {
                  await responderPropuesta(abierta.id, respuesta.trim())
                  setAbierta({ ...abierta, respuesta: respuesta.trim(), estado: 'respondida' })
                })}
                className="mt-2 bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-zinc-700 disabled:opacity-50 transition-colors"
              >
                {isPending ? 'Guardando...' : 'Guardar respuesta'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
