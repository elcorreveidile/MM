'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { enviarContinuacion } from './actions'

const MAX = 500

export default function FraseForm({
  existente,
}: {
  existente: { texto: string; publicada: boolean } | null
}) {
  const router = useRouter()
  const [editando, setEditando] = useState(!existente)
  const [texto, setTexto] = useState(existente?.texto ?? '')
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = await enviarContinuacion(fd)
      if (res.error) { setError(res.error) }
      else { setEditando(false); router.refresh() }
    })
  }

  if (existente && !editando) {
    return (
      <div>
        <div className="border-l-2 border-[#E84878] pl-5 py-1 mb-3">
          <p className="font-crimson text-zinc-800 text-xl italic leading-relaxed">«{existente.texto}»</p>
        </div>
        <div className="flex items-center justify-between">
          <span className={`font-libre text-xs ${existente.publicada ? 'text-[#E84878]' : 'text-zinc-400'}`}>
            {existente.publicada ? '✓ Publicada' : '· Pendiente de revisión'}
          </span>
          <button
            onClick={() => setEditando(true)}
            className="font-libre text-xs text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Editar →
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        name="texto"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        rows={4}
        maxLength={MAX}
        required
        placeholder="… continúa la frase"
        className="w-full border border-zinc-300 font-crimson text-xl italic px-4 py-3 focus:outline-none focus:border-zinc-900 resize-y leading-relaxed placeholder:text-zinc-300"
      />
      <div className="flex items-center justify-between">
        <span className="font-libre text-xs text-zinc-400">{texto.length} / {MAX}</span>
        <div className="flex items-center gap-3">
          {existente && (
            <button
              type="button"
              onClick={() => { setEditando(false); setTexto(existente.texto) }}
              className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            disabled={isPending || !texto.trim()}
            className="font-libre text-xs bg-zinc-900 text-white px-5 py-2 hover:bg-zinc-700 disabled:opacity-40 transition-colors"
          >
            {isPending ? 'Enviando…' : existente ? 'Guardar cambios' : 'Enviar'}
          </button>
        </div>
      </div>
      {error && <p className="font-libre text-xs text-[#E84878]">{error}</p>}
      {existente && (
        <p className="font-libre text-xs text-zinc-400">Editar vuelve a poner la continuación en revisión.</p>
      )}
    </form>
  )
}
