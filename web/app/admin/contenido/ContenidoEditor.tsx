'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Props = {
  id: number
  clave: string
  label: string
  valor: string
}

export default function ContenidoEditor({ id, clave, label, valor: initial }: Props) {
  const [open, setOpen] = useState(false)
  const [valor, setValor] = useState(initial)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setSaving(true)
    const supabase = createClient()
    await supabase.from('contenido').update({ valor }).eq('id', id)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-white border border-zinc-100">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-50 transition-colors"
      >
        <span className="font-libre text-sm text-zinc-700">{label}</span>
        <span className="font-libre text-xs text-zinc-400">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-zinc-100">
          <textarea
            value={valor}
            onChange={e => setValor(e.target.value)}
            rows={8}
            className="w-full mt-4 border border-zinc-200 font-libre text-sm text-zinc-700 px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y leading-relaxed"
          />
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
            {saved && (
              <span className="font-libre text-xs text-zinc-400">Guardado ✓</span>
            )}
            <button
              onClick={() => { setValor(initial); setOpen(false) }}
              className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
