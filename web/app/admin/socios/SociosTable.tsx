'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

type Socio = {
  id: number
  nombre: string
  email: string
  tipo: 'socio' | 'amigo'
  notas: string | null
}

export default function SociosTable({ socios: initial, showAddButton }: { socios: Socio[], showAddButton?: boolean }) {
  const router = useRouter()
  const [socios, setSocios] = useState(initial)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', tipo: 'amigo' as Socio['tipo'], notas: '' })
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  const filtered = socios.filter(s =>
    s.nombre.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  )

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    setSaving(true)
    const supabase = createClient()
    const { error } = await supabase
      .from('socios')
      .insert([{ ...form, notas: form.notas || null }])
    if (error) {
      setFormError(error.code === '23505' ? 'Ese email ya existe en la base de datos.' : `Error: ${error.message}`)
    } else {
      setForm({ nombre: '', email: '', tipo: 'amigo', notas: '' })
      setShowForm(false)
      router.refresh()
    }
    setSaving(false)
  }

  async function handleDelete(id: number) {
    if (!confirm('¿Eliminar este contacto?')) return
    const supabase = createClient()
    await supabase.from('socios').delete().eq('id', id)
    router.refresh()
  }

  if (showAddButton) {
    return (
      <>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] transition-colors"
        >
          + Añadir contacto
        </button>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <form onSubmit={handleAdd} className="bg-white p-6 w-full max-w-md space-y-4">
              <h2 className="font-crimson font-bold text-xl">Nuevo contacto</h2>
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Nombre</label>
                <input required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
              </div>
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
              </div>
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Tipo</label>
                <select value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value as Socio['tipo'] }))}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 bg-white">
                  <option value="socio">Socio de Olvidos</option>
                  <option value="amigo">Amigo de Olvidos</option>
                </select>
              </div>
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Notas</label>
                <input value={form.notas} onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
              </div>
              {formError && <p className="font-libre text-xs text-[#E84878]">{formError}</p>}
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving}
                  className="flex-1 bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase py-2 hover:bg-[#d03868] disabled:opacity-50">
                  {saving ? 'Guardando...' : 'Guardar'}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setFormError('') }}
                  className="flex-1 border border-zinc-300 font-libre text-xs tracking-widest uppercase py-2 hover:bg-zinc-50">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    )
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar por nombre o email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border border-zinc-300 font-libre text-sm px-4 py-2 mb-4 focus:outline-none focus:border-zinc-900 bg-white"
      />

      <div className="bg-white">
        <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-0 border-b border-zinc-200 px-4 py-2">
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Nombre</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Email</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Tipo</span>
          <span></span>
        </div>
        {filtered.map(s => (
          <div key={s.id} className="grid grid-cols-[1fr_1fr_auto_auto] gap-0 border-b border-zinc-100 px-4 py-3 items-center hover:bg-zinc-50">
            <span className="font-libre text-sm text-zinc-900">{s.nombre}</span>
            <span className="font-libre text-sm text-zinc-500">{s.email}</span>
            <span className={`font-libre text-xs px-2 py-0.5 ${s.tipo === 'socio' ? 'bg-[#E84878] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
              {s.tipo === 'socio' ? 'Socio de Olvidos' : 'Amigo de Olvidos'}
            </span>
            <button onClick={() => handleDelete(s.id)} className="font-libre text-xs text-zinc-400 hover:text-red-500 ml-4 transition-colors">
              ×
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center font-libre text-sm text-zinc-400">
            {search ? 'Sin resultados' : 'No hay contactos todavía'}
          </div>
        )}
      </div>
    </div>
  )
}
