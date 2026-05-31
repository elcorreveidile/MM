'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { crearDiscusion, responderDiscusion, publicarDiscusionComoAviso } from './actions'

type Comentario = { id: number; autor_email: string; cuerpo: string; created_at: string }
type Discusion = {
  id: number; titulo: string; cuerpo: string; autor_email: string
  publicado_como_aviso: boolean; created_at: string
  comentarios_discusion: Comentario[]
}

function formatFecha(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

function NombreCorto({ email, nombres }: { email: string; nombres: Record<string, string> }) {
  return <span>{nombres[email] ?? email}</span>
}

export default function DiscusionesPanel({
  discusiones,
  email,
  nombres,
}: {
  discusiones: Discusion[]
  email: string
  nombres: Record<string, string>
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [showNew, setShowNew] = useState(false)
  const [abierta, setAbierta] = useState<number | null>(null)
  const [replies, setReplies] = useState<Record<number, string>>({})

  function setReply(id: number, val: string) {
    setReplies(prev => ({ ...prev, [id]: val }))
  }

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      await crearDiscusion(fd)
      setShowNew(false)
      router.refresh()
    })
  }

  async function handleRespuesta(discusion_id: number) {
    const cuerpo = replies[discusion_id] ?? ''
    if (!cuerpo.trim()) return
    startTransition(async () => {
      await responderDiscusion(discusion_id, cuerpo)
      setReply(discusion_id, '')
      router.refresh()
    })
  }

  async function handlePublicar(d: Discusion) {
    if (!confirm(`¿Publicar "${d.titulo}" como aviso para todos los socios?`)) return
    startTransition(async () => {
      await publicarDiscusionComoAviso(d.id)
      router.refresh()
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-400">Discusiones internas</p>
        <button
          onClick={() => setShowNew(v => !v)}
          className="font-libre text-xs text-[#E84878] hover:underline"
        >
          {showNew ? 'Cancelar' : '+ Nueva discusión'}
        </button>
      </div>

      {showNew && (
        <form onSubmit={handleCreate} className="bg-white border border-zinc-200 p-5 mb-4 space-y-3">
          <div>
            <label className="font-libre text-xs tracking-widest uppercase text-zinc-400 block mb-1">Título</label>
            <input name="titulo" required
              className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
              placeholder="Tema de la discusión" />
          </div>
          <div>
            <label className="font-libre text-xs tracking-widest uppercase text-zinc-400 block mb-1">Texto inicial</label>
            <textarea name="cuerpo" required rows={4}
              className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
              placeholder="Expón la cuestión..." />
          </div>
          <button type="submit" disabled={isPending}
            className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] disabled:opacity-50">
            {isPending ? 'Creando...' : 'Iniciar discusión'}
          </button>
        </form>
      )}

      {discusiones.length === 0 && !showNew && (
        <p className="font-libre text-sm text-zinc-400 italic">No hay discusiones todavía.</p>
      )}

      <div className="space-y-3">
        {discusiones.map(d => {
          const isOpen = abierta === d.id
          const comentarios = d.comentarios_discusion ?? []
          return (
            <div key={d.id} className="bg-white border border-zinc-200">
              <button
                className="w-full text-left px-5 py-4"
                onClick={() => setAbierta(isOpen ? null : d.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-crimson font-bold text-zinc-900 text-base leading-snug">{d.titulo}</p>
                    <p className="font-libre text-xs text-zinc-400 mt-0.5">
                      <NombreCorto email={d.autor_email} nombres={nombres} /> · {formatFecha(d.created_at)} · {comentarios.length} {comentarios.length === 1 ? 'respuesta' : 'respuestas'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {d.publicado_como_aviso && (
                      <span className="font-libre text-xs text-zinc-400 border border-zinc-200 px-2 py-0.5">Publicado</span>
                    )}
                    <span className="text-zinc-400 text-sm">{isOpen ? '▲' : '▼'}</span>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-zinc-100 px-5 pb-5 space-y-4">
                  <p className="font-libre text-sm text-zinc-700 leading-relaxed pt-4 whitespace-pre-wrap">{d.cuerpo}</p>

                  {comentarios.length > 0 && (
                    <div className="space-y-3 border-l-2 border-zinc-100 pl-4">
                      {comentarios.map(c => (
                        <div key={c.id}>
                          <p className="font-libre text-xs text-zinc-400 mb-1">
                            <NombreCorto email={c.autor_email} nombres={nombres} /> · {formatFecha(c.created_at)}
                          </p>
                          <p className="font-libre text-sm text-zinc-700 whitespace-pre-wrap">{c.cuerpo}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <textarea
                      value={replies[d.id] ?? ''}
                      onChange={e => setReply(d.id, e.target.value)}
                      rows={2}
                      placeholder="Escribe una respuesta..."
                      className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
                    />
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleRespuesta(d.id)}
                        disabled={isPending || !(replies[d.id] ?? '').trim()}
                        className="font-libre text-xs bg-zinc-900 text-white px-4 py-2 hover:bg-zinc-700 disabled:opacity-40 transition-colors"
                      >
                        Responder
                      </button>
                      {!d.publicado_como_aviso && (
                        <button
                          onClick={() => handlePublicar(d)}
                          disabled={isPending}
                          className="font-libre text-xs border border-zinc-300 text-zinc-500 px-4 py-2 hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-40 transition-colors"
                        >
                          Publicar como aviso →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
