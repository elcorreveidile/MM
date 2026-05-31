'use client'

import { useState, useTransition } from 'react'
import { enviarCorreoMasivo, type EnvioResult } from './actions'

const AUDIENCIAS = [
  { value: 'todos', label: 'Todos (socios y amigos)' },
  { value: 'socios', label: 'Solo socios de Olvidos' },
  { value: 'amigos', label: 'Solo amigos de Mariano' },
]

export default function CorreoPage() {
  const [resultado, setResultado] = useState<EnvioResult | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!confirm('¿Enviar este correo? Esta acción no se puede deshacer.')) return
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = await enviarCorreoMasivo(formData)
      setResultado(res)
    })
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-1">Envío de correo</h1>
        <p className="font-libre text-zinc-500 text-sm">Envía un mensaje a todos los contactos o a un grupo específico.</p>
      </div>

      {resultado && (
        <div className={`mb-6 p-4 border font-libre text-sm ${resultado.error ? 'border-red-300 bg-red-50 text-red-700' : 'border-green-300 bg-green-50 text-green-700'}`}>
          {resultado.error
            ? `Error: ${resultado.error}`
            : `✓ Enviados: ${resultado.enviados}${resultado.errores > 0 ? ` · Errores: ${resultado.errores}` : ''}`
          }
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 p-6 space-y-5">
        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
            Destinatarios
          </label>
          <select
            name="audiencia"
            className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 bg-white"
          >
            {AUDIENCIAS.map(a => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
            Asunto
          </label>
          <input
            name="asunto"
            type="text"
            required
            className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
            placeholder="Asunto del correo"
          />
        </div>

        <div>
          <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
            Cuerpo del mensaje
          </label>
          <textarea
            name="cuerpo"
            required
            rows={10}
            className="w-full border border-zinc-300 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
            placeholder="Escribe el mensaje aquí. Separa párrafos con una línea en blanco."
          />
          <p className="font-libre text-xs text-zinc-400 mt-1">
            Cada párrafo separado por línea en blanco se formateará como un bloque de texto independiente.
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase py-3 hover:bg-zinc-700 transition-colors disabled:opacity-50"
        >
          {isPending ? 'Enviando...' : 'Enviar correo'}
        </button>
      </form>
    </div>
  )
}
