'use client'

import { useTransition } from 'react'
import { aprobarSolicitud, rechazarSolicitud } from './actions'

type Solicitud = {
  id: number
  nombre: string
  email: string
  mensaje: string
  publicar: boolean
  mostrar_nombre: boolean
  estado: string
  created_at: string
}

export default function SolicitudesTable({ solicitudes, readonly }: { solicitudes: Solicitud[], readonly?: boolean }) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="space-y-4">
      {solicitudes.map(s => (
        <div key={s.id} className="bg-white border border-zinc-200 p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="font-libre text-sm font-medium text-zinc-900">{s.nombre}</span>
              <span className="font-libre text-xs text-zinc-400 ml-2">{s.email}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {s.publicar
                ? <span className="font-libre text-xs px-2 py-0.5 bg-[#E84878] text-white">Publicar</span>
                : <span className="font-libre text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500">No publicar</span>
              }
              {s.mostrar_nombre
                ? <span className="font-libre text-xs px-2 py-0.5 bg-zinc-100 text-zinc-600">Con nombre</span>
                : <span className="font-libre text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500">Anónimo</span>
              }
              {s.estado === 'aprobado' && <span className="font-libre text-xs text-zinc-400">✓ Aprobado</span>}
              {s.estado === 'rechazado' && <span className="font-libre text-xs text-zinc-400">✗ Rechazado</span>}
            </div>
          </div>

          <blockquote className="border-l-2 border-zinc-200 pl-4 my-3">
            <p className="font-crimson text-zinc-700 text-base italic leading-relaxed">{s.mensaje}</p>
          </blockquote>

          <div className="flex items-center justify-between mt-3">
            <span className="font-libre text-xs text-zinc-400">
              {new Date(s.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            {!readonly && (
              <div className="flex gap-2">
                <form action={async () => {
                  startTransition(async () => { await aprobarSolicitud(s.id) })
                }}>
                  <button type="submit" disabled={isPending}
                    className="font-libre text-xs bg-zinc-900 text-white px-4 py-1.5 hover:bg-zinc-700 transition-colors disabled:opacity-50">
                    Aprobar y publicar
                  </button>
                </form>
                <form action={async () => {
                  startTransition(async () => { await rechazarSolicitud(s.id) })
                }}>
                  <button type="submit" disabled={isPending}
                    className="font-libre text-xs border border-zinc-300 text-zinc-500 px-4 py-1.5 hover:bg-zinc-50 transition-colors disabled:opacity-50">
                    Rechazar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
