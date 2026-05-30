'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function PerfilPage() {
  const [nombre, setNombre] = useState('')
  const [notas, setNotas] = useState('')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('socios')
        .select('nombre, notas')
        .eq('email', user.email!)
        .single()
      if (data) {
        setNombre(data.nombre ?? '')
        setNotas(data.notas ?? '')
      }
      setLoading(false)
    }
    load()
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase
        .from('socios')
        .update({ nombre, notas })
        .eq('email', user.email!)
    }
    setSaving(false)
    setSaved(true)
    setTimeout(() => { setSaved(false); router.push('/panel') }, 1500)
  }

  if (loading) return <div className="font-libre text-sm text-zinc-400">Cargando...</div>

  return (
    <div className="bg-white border border-zinc-200 p-6">
      <h1 className="font-crimson font-bold text-zinc-900 text-2xl mb-6">Editar mi ficha</h1>
      <form onSubmit={handleSave} className="space-y-5">
        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">Nombre</label>
          <input
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
            className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
          />
        </div>
        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
            Mi relación con Mariano
          </label>
          <p className="font-libre text-xs text-zinc-400 mb-2">
            Cuéntanos cómo le conociste, qué significó para ti, algún recuerdo...
          </p>
          <textarea
            value={notas}
            onChange={e => setNotas(e.target.value)}
            rows={6}
            placeholder="Conocí a Mariano en..."
            className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y placeholder:text-zinc-400"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase px-5 py-2 hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            {saving ? 'Guardando...' : 'Guardar'}
          </button>
          {saved && <span className="font-libre text-xs text-zinc-400">Guardado ✓</span>}
          <button
            type="button"
            onClick={() => router.push('/panel')}
            className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
