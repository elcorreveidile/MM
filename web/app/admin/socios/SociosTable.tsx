'use client'

import { useState, useTransition } from 'react'
import { addSocio, updateSocio, deleteSocio, togglePublicarTestimonio } from './actions'

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
  publicar_testimonio: boolean
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
          + Añadir
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white">
        {/* Cabecera — solo desktop */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_auto_auto_auto_auto] gap-0 border-b border-zinc-200 px-4 py-2">
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Nombre</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Email</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400">Tipo</span>
          <span className="font-libre text-xs tracking-widest uppercase text-zinc-400 ml-4">Pub.</span>
          <span></span>
          <span></span>
        </div>

        {filtered.map(s => {
          const tipoBadge = (
            <span className={`font-libre text-xs px-2 py-0.5 whitespace-nowrap ${s.tipo === 'socio' ? 'bg-[#E84878] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
              {s.tipo === 'socio' ? 'Socio' : 'Amigo'}
            </span>
          )

          const pubToggle = (
            <form action={async () => {
              if (!s.notas) return
              await togglePublicarTestimonio(s.id, !s.publicar_testimonio)
            }}>
              <button
                type="submit"
                title={s.notas ? (s.publicar_testimonio ? 'Publicado en Memorias' : 'No publicado') : 'Sin testimonio'}
                disabled={!s.notas}
                className={`font-libre text-xs px-2 py-0.5 transition-colors ${
                  !s.notas
                    ? 'text-zinc-200 cursor-default'
                    : s.publicar_testimonio
                    ? 'bg-[#E84878] text-white hover:bg-[#d03868]'
                    : 'border border-zinc-300 text-zinc-400 hover:border-zinc-500 hover:text-zinc-600'
                }`}
              >
                {s.publicar_testimonio ? '✓' : '—'}
              </button>
            </form>
          )

          const editBtn = (
            <button
              onClick={() => openEdit(s)}
              className="font-libre text-xs text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              Editar
            </button>
          )

          const deleteBtn = (
            <form action={async () => {
              if (!confirm('¿Eliminar este contacto?')) return
              await deleteSocio(s.id)
            }}>
              <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors">
                ×
              </button>
            </form>
          )

          return (
            <div key={s.id} className="border-b border-zinc-100 hover:bg-zinc-50">
              {/* Móvil */}
              <div className="lg:hidden px-4 py-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-libre text-sm text-zinc-900 font-medium leading-tight">{s.nombre}</span>
                  {tipoBadge}
                </div>
                <div className="font-libre text-xs text-zinc-400 mb-3 truncate">{s.email}</div>
                <div className="flex items-center gap-3">
                  {pubToggle}
                  {editBtn}
                  {deleteBtn}
                </div>
              </div>
              {/* Desktop */}
              <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_auto_auto_auto_auto] gap-0 px-4 py-3 items-center">
                <span className="font-libre text-sm text-zinc-900">{s.nombre}</span>
                <span className="font-libre text-sm text-zinc-500">{s.email}</span>
                {tipoBadge}
                <div className="ml-4">{pubToggle}</div>
                <div className="ml-4">{editBtn}</div>
                <div className="ml-4">{deleteBtn}</div>
              </div>
            </div>
          )
        })}

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
