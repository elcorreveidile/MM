'use client'

import { useState, useTransition } from 'react'
import { crearEvento, actualizarEvento, eliminarEvento } from './actions'

type Evento = { id: number; titulo: string; descripcion: string | null; fecha: string }

function formatFecha(f: string) {
  return new Date(f + 'T12:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function CalendarioManager({ eventos }: { eventos: Evento[] }) {
  const [modal, setModal] = useState<'new' | Evento | null>(null)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  function closeModal() { setModal(null); setError('') }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = modal === 'new'
        ? await crearEvento(fd)
        : await actualizarEvento((modal as Evento).id, fd)
      if (res.error) setError(res.error)
      else closeModal()
    })
  }

  const editing = modal !== null && modal !== 'new' ? modal as Evento : null

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => setModal('new')}
          className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] transition-colors">
          + Nuevo evento
        </button>
      </div>

      <div className="bg-white space-y-px">
        {eventos.length === 0 && (
          <p className="px-4 py-8 font-libre text-sm text-zinc-400 text-center">No hay eventos todavía.</p>
        )}
        {eventos.map(e => (
          <div key={e.id} className="flex items-start gap-4 px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50">
            <div className="shrink-0 text-center w-14">
              <p className="font-crimson font-bold text-zinc-900 text-lg leading-none">
                {new Date(e.fecha + 'T12:00:00').getDate()}
              </p>
              <p className="font-libre text-xs text-zinc-400 uppercase">
                {new Date(e.fecha + 'T12:00:00').toLocaleDateString('es-ES', { month: 'short' })}
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-libre text-sm font-medium text-zinc-900">{e.titulo}</p>
              {e.descripcion && <p className="font-libre text-xs text-zinc-400 mt-0.5">{e.descripcion}</p>}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => { setModal(e); setError('') }}
                className="font-libre text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                Editar
              </button>
              <form action={async () => { if (!confirm('¿Eliminar este evento?')) return; await eliminarEvento(e.id) }}>
                <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors">×</button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {modal !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <form onSubmit={handleSubmit} className="bg-white p-6 w-full max-w-lg space-y-4">
            <h2 className="font-crimson font-bold text-xl">{modal === 'new' ? 'Nuevo evento' : 'Editar evento'}</h2>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Título</label>
              <input name="titulo" required defaultValue={editing?.titulo ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Fecha</label>
              <input name="fecha" type="date" required defaultValue={editing?.fecha ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Descripción (opcional)</label>
              <textarea name="descripcion" rows={3} defaultValue={editing?.descripcion ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y" />
            </div>
            {error && <p className="font-libre text-xs text-[#E84878]">{error}</p>}
            <div className="flex gap-3">
              <button type="submit" disabled={isPending}
                className="flex-1 bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase py-2 hover:bg-[#d03868] disabled:opacity-50">
                {isPending ? 'Guardando...' : 'Guardar'}
              </button>
              <button type="button" onClick={closeModal}
                className="flex-1 border border-zinc-300 font-libre text-xs tracking-widest uppercase py-2 hover:bg-zinc-50">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
