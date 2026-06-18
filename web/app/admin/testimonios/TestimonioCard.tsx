'use client'

import { useTransition } from 'react'
import { toggleTestimonio, borrarTestimonio } from './actions'

type Socio = {
  id: number
  nombre: string
  email: string
  tipo: string
  notas: string
  publicar_testimonio: boolean
}

export default function TestimonioCard({ socio, publicado }: { socio: Socio; publicado: boolean }) {
  const [pendingToggle, startToggle] = useTransition()
  const [pendingBorrar, startBorrar] = useTransition()

  function handleToggle() {
    startToggle(() => toggleTestimonio(socio.id, !publicado))
  }

  function handleBorrar() {
    if (!confirm('¿Eliminar este testimonio? Se borrará el texto del perfil permanentemente.')) return
    startBorrar(() => borrarTestimonio(socio.id))
  }

  return (
    <div className={`border p-4 bg-white ${publicado ? 'border-green-300' : 'border-zinc-200'}`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <span className="font-libre text-sm font-semibold text-zinc-900">{socio.nombre}</span>
          <span className="font-libre text-xs text-zinc-400 ml-2">{socio.email}</span>
          <span className={`ml-2 font-libre text-xs px-1.5 py-0.5 ${socio.tipo === 'socio' ? 'bg-zinc-100 text-zinc-600' : 'bg-pink-50 text-[#E84878]'}`}>
            {socio.tipo}
          </span>
        </div>
        {publicado && (
          <span className="font-libre text-xs text-green-600 shrink-0">● publicado</span>
        )}
      </div>
      <p className="font-libre text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap mb-3">{socio.notas}</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleToggle}
          disabled={pendingToggle}
          className={`font-libre text-xs px-3 py-1.5 border transition-colors disabled:opacity-50 ${
            publicado
              ? 'border-zinc-300 text-zinc-600 hover:bg-zinc-50'
              : 'border-green-400 text-green-700 hover:bg-green-50'
          }`}
        >
          {pendingToggle ? '...' : publicado ? 'Despublicar' : 'Publicar'}
        </button>
        <button
          type="button"
          onClick={handleBorrar}
          disabled={pendingBorrar}
          className="font-libre text-xs px-3 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
        >
          {pendingBorrar ? '...' : 'Borrar texto'}
        </button>
      </div>
    </div>
  )
}
