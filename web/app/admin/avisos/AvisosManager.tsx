'use client'

import { useState, useTransition } from 'react'
import { crearAviso, actualizarAviso, toggleAviso, eliminarAviso } from './actions'

type Aviso = { id: number; titulo: string; cuerpo: string; publicado: boolean; created_at: string }

export default function AvisosManager({ avisos }: { avisos: Aviso[] }) {
  const [modal, setModal] = useState<'new' | Aviso | null>(null)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  function closeModal() { setModal(null); setError('') }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = modal === 'new'
        ? await crearAviso(fd)
        : await actualizarAviso((modal as Aviso).id, fd)
      if (res.error) setError(res.error)
      else closeModal()
    })
  }

  const editing = modal !== null && modal !== 'new' ? modal as Aviso : null

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => setModal('new')}
          className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] transition-colors">
          + Nuevo aviso
        </button>
      </div>

      <div className="bg-white space-y-px">
        {avisos.length === 0 && (
          <p className="px-4 py-8 font-libre text-sm text-zinc-400 text-center">No hay avisos todavía.</p>
        )}
        {avisos.map(a => (
          <div key={a.id} className="flex items-start gap-4 px-4 py-4 border-b border-zinc-100 hover:bg-zinc-50">
            <div className="flex-1 min-w-0">
              <p className="font-libre text-sm font-medium text-zinc-900">{a.titulo}</p>
              <p className="font-libre text-xs text-zinc-400 mt-0.5 line-clamp-1">{a.cuerpo}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <form action={async () => { await toggleAviso(a.id, !a.publicado) }}>
                <button type="submit"
                  className={`font-libre text-xs px-2 py-0.5 transition-colors ${a.publicado ? 'bg-[#E84878] text-white hover:bg-[#d03868]' : 'border border-zinc-300 text-zinc-400 hover:border-zinc-500'}`}>
                  {a.publicado ? '✓ Pub.' : '— Ocult.'}
                </button>
              </form>
              <button onClick={() => { setModal(a); setError('') }}
                className="font-libre text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                Editar
              </button>
              <form action={async () => { if (!confirm('¿Eliminar este aviso?')) return; await eliminarAviso(a.id) }}>
                <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors">×</button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {modal !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <form onSubmit={handleSubmit} className="bg-white p-6 w-full max-w-lg space-y-4">
            <h2 className="font-crimson font-bold text-xl">{modal === 'new' ? 'Nuevo aviso' : 'Editar aviso'}</h2>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Título</label>
              <input name="titulo" required defaultValue={editing?.titulo ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Cuerpo</label>
              <textarea name="cuerpo" required rows={5} defaultValue={editing?.cuerpo ?? ''}
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
