'use client'

import { useState, useTransition } from 'react'
import { addSocio, updateSocio, deleteSocio } from './actions'

type Socio = {
  id: number
  nombre: string
  email: string
  tipo: 'socio' | 'amigo'
  genero: string | null
  notas: string | null
  telefono: string | null
  direccion: string | null
  ciudad: string | null
}

type ModalMode = 'add' | 'edit'

export default function SociosTable({ socios }: { socios: Socio[] }) {
  const [search, setSearch] = useState('')
  const [modalMode, setModalMode] = useState<ModalMode | null>(null)
  const [editingSocio, setEditingSocio] = useState<Socio | null>(null)
  const [formError, setFormError] = useState('')
  const [isPending, startTransition] = useTransition()

  const filtered = socios.filter(s =>
    s.nombre.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  )

  function openAdd() {
    setEditingSocio(null)
    setFormError('')
    setModalMode('add')
  }

  function openEdit(s: Socio) {
    setEditingSocio(s)
    setFormError('')
    setModalMode('edit')
  }

  function closeModal() {
    setModalMode(null)
    setEditingSocio(null)
    setFormError('')
  }

  async function handleAdd(formData: FormData) {
    setFormError('')
    startTransition(async () => {
      const result = await addSocio(formData)
      if (result.error) {
        setFormError(result.error)
      } else {
        closeModal()
      }
    })
  }

  async function handleUpdate(formData: FormData) {
    if (!editingSocio) return
    setFormError('')
    startTransition(async () => {
      const result = await updateSocio(editingSocio.id, formData)
      if (result.error) {
        setFormError(result.error)
      } else {
        closeModal()
      }
    })
  }

  return (
    <div>
      {/* Cabecera con botón añadir */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="search"
          placeholder="Buscar por nombre o email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-zinc-300 font-libre text-sm px-4 py-2 focus:outline-none focus:border-zinc-900 bg-white mr-4"
        />
        <button
          onClick={openAdd}
          className="bg-[#E84878] text-white font-libre text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#d03868] transition-colors whitespace-nowrap"
        >
          + Añadir contacto
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white">
        <div className="grid grid-cols-[1fr_1fr_auto_auto_auto] gap-0 border-b border-zinc-200 px-4 py-2">
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Nombre</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Email</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Tipo</span>
          <span></span>
          <span></span>
        </div>
        {filtered.map(s => (
          <div key={s.id} className="grid grid-cols-[1fr_1fr_auto_auto_auto] gap-0 border-b border-zinc-100 px-4 py-3 items-center hover:bg-zinc-50">
            <span className="font-libre text-sm text-zinc-900">{s.nombre}</span>
            <span className="font-libre text-sm text-zinc-500">{s.email}</span>
            <span className={`font-libre text-xs px-2 py-0.5 ${s.tipo === 'socio' ? 'bg-[#E84878] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
              {s.tipo === 'socio' ? 'Socio de Olvidos' : 'Amigo de Mariano'}
            </span>
            <button
              onClick={() => openEdit(s)}
              className="font-libre text-xs text-zinc-400 hover:text-zinc-900 ml-4 transition-colors"
            >
              Editar
            </button>
            <form action={async () => {
              if (!confirm('¿Eliminar este contacto?')) return
              await deleteSocio(s.id)
            }}>
              <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 ml-4 transition-colors">
                ×
              </button>
            </form>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center font-libre text-sm text-zinc-400">
            {search ? 'Sin resultados' : 'No hay contactos todavía'}
          </div>
        )}
      </div>

      {/* Modal añadir / editar */}
      {modalMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <form
            action={modalMode === 'edit' ? handleUpdate : handleAdd}
            className="bg-white p-6 w-full max-w-md space-y-4 my-auto"
          >
            <h2 className="font-crimson font-bold text-xl">
              {modalMode === 'edit' ? 'Editar contacto' : 'Nuevo contacto'}
            </h2>

            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Nombre</label>
              <input name="nombre" required defaultValue={editingSocio?.nombre ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Email</label>
              <input name="email" type="email" required defaultValue={editingSocio?.email ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Tipo</label>
                <select name="tipo" defaultValue={editingSocio?.tipo ?? 'amigo'}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 bg-white">
                  <option value="socio">Socio de Olvidos</option>
                  <option value="amigo">Amigo de Mariano</option>
                </select>
              </div>
              <div>
                <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Género</label>
                <select name="genero" defaultValue={editingSocio?.genero ?? ''}
                  className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 bg-white">
                  <option value="">No especificar</option>
                  <option value="m">Hombre</option>
                  <option value="f">Mujer</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Teléfono</label>
              <input name="telefono" defaultValue={editingSocio?.telefono ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Dirección</label>
              <input name="direccion" defaultValue={editingSocio?.direccion ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Ciudad</label>
              <input name="ciudad" defaultValue={editingSocio?.ciudad ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900" />
            </div>
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-1">Notas</label>
              <textarea name="notas" rows={3} defaultValue={editingSocio?.notas ?? ''}
                className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y" />
            </div>

            {formError && <p className="font-libre text-xs text-[#E84878]">{formError}</p>}

            <div className="flex gap-3 pt-2">
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
