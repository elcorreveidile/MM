'use client'

import { useState, useTransition, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

type Propuesta = {
  id: number; titulo: string; cuerpo: string
  estado: string; respuesta: string | null; created_at: string
}

const ESTADOS: Record<string, { label: string; color: string }> = {
  recibida:    { label: 'Recibida',    color: 'bg-zinc-100 text-zinc-600' },
  en_revision: { label: 'En revisión', color: 'bg-[#F2BE2A] text-[#8B1A1A]' },
  respondida:  { label: 'Respondida',  color: 'bg-[#E84878] text-white' },
}

export default function PanelPropuestasPage() {
  const [propuestas, setPropuestas] = useState<Propuesta[]>([])
  const [titulo, setTitulo] = useState('')
  const [cuerpo, setCuerpo] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return
      fetch('/api/panel/propuestas?email=' + encodeURIComponent(user.email!))
        .then(r => r.json())
        .then(d => { if (d.propuestas) setPropuestas(d.propuestas) })
    })
  }, [enviado])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    startTransition(async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const res = await fetch('/api/panel/propuestas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, cuerpo, email: user.email }),
      })
      const data = await res.json()
      if (data.error) { setError(data.error); return }
      setTitulo(''); setCuerpo(''); setEnviado(v => !v)
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Área de socios</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Propuestas a la junta</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 p-5 space-y-4">
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-400">Nueva propuesta</p>
        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Título</label>
          <input value={titulo} onChange={e => setTitulo(e.target.value)} required
            className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
            placeholder="Resumen de la propuesta" />
        </div>
        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Descripción</label>
          <textarea value={cuerpo} onChange={e => setCuerpo(e.target.value)} required rows={4}
            className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
            placeholder="Explica tu propuesta con detalle..." />
        </div>
        {error && <p className="font-libre text-xs text-[#E84878]">{error}</p>}
        <button type="submit" disabled={isPending}
          className="bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase px-5 py-2 hover:bg-zinc-700 disabled:opacity-50 transition-colors">
          {isPending ? 'Enviando...' : 'Enviar propuesta'}
        </button>
      </form>

      {propuestas.length > 0 && (
        <div className="space-y-3">
          <p className="font-libre text-xs tracking-widest uppercase text-zinc-400">Mis propuestas</p>
          {propuestas.map(p => {
            const est = ESTADOS[p.estado] ?? ESTADOS.recibida
            return (
              <div key={p.id} className="bg-white border border-zinc-200 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-libre text-sm font-medium text-zinc-900">{p.titulo}</p>
                  <span className={`font-libre text-xs px-2 py-0.5 shrink-0 ${est.color}`}>{est.label}</span>
                </div>
                <p className="font-libre text-xs text-zinc-500 leading-relaxed">{p.cuerpo}</p>
                {p.respuesta && (
                  <div className="mt-3 border-l-4 border-[#E84878] pl-3">
                    <p className="font-libre text-xs text-zinc-400 mb-1">Respuesta de la junta:</p>
                    <p className="font-libre text-sm text-zinc-700">{p.respuesta}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
