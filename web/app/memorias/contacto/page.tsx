'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { enviarContacto } from './actions'

export default function ContactoPage() {
  const [humanConfirmed, setHumanConfirmed] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!humanConfirmed) return
    setError('')
    const formData = new FormData(e.currentTarget)
    startTransition(async () => {
      const result = await enviarContacto(formData)
      if (result.ok) {
        setSent(true)
      } else {
        setError(result.error ?? 'Error desconocido.')
      }
    })
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
        <div className="bg-white p-10 max-w-md w-full text-center">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">Recibido</p>
          <h1 className="font-crimson font-bold text-zinc-900 text-3xl mb-4">Gracias</h1>
          <p className="font-libre text-zinc-600 text-sm leading-relaxed mb-8">
            Hemos recibido tu mensaje. Nos pondremos en contacto contigo en breve.
          </p>
          <Link
            href="/memorias"
            className="font-libre text-xs text-zinc-500 hover:text-zinc-900 underline transition-colors"
          >
            ← Volver a Memorias
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/memorias" className="font-libre text-xs text-zinc-400 hover:text-white transition-colors">
            ← Memorias
          </Link>
          <h1 className="font-crimson font-bold text-4xl mt-4 mb-2">Escríbenos</h1>
          <p className="font-libre text-zinc-300 text-sm leading-relaxed">
            Cuéntanos tu relación con Mariano o cómo llegaste hasta él. Al enviarnos tu mensaje,
            solicitarás unirte como <strong>amigo o amiga de Mariano Maresca</strong> y recibirás
            un correo de bienvenida cuando lo aprobemos.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6">

          {/* Honeypot oculto para bots */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
              Nombre <span className="text-[#E84878]">*</span>
            </label>
            <input
              name="nombre"
              type="text"
              required
              autoComplete="name"
              className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
              Email <span className="text-[#E84878]">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
              Tu mensaje <span className="text-[#E84878]">*</span>
            </label>
            <p className="font-libre text-xs text-zinc-400 mb-2">
              Puedes contarnos cómo le conociste, qué significó para ti, cómo llegaste hasta él o simplemente que quieres hacerte amigo o amiga de Mariano.
            </p>
            <textarea
              name="mensaje"
              required
              rows={7}
              className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y"
            />
          </div>

          {/* Preferencias de publicación */}
          <div className="border border-zinc-200 p-5 space-y-3">
            <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-1">
              Publicación en Memorias
            </p>
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="publicar"
                defaultChecked
                className="mt-0.5 cursor-pointer"
              />
              <span className="font-libre text-sm text-zinc-700">
                Quiero que publiquéis mi recuerdo en la página Memorias
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="mostrar_nombre"
                defaultChecked
                className="mt-0.5 cursor-pointer"
              />
              <span className="font-libre text-sm text-zinc-700">
                Podéis mostrar mi nombre junto al recuerdo
              </span>
            </label>
          </div>

          {/* Verificación humana */}
          <div className="border border-zinc-200 p-4 bg-zinc-50">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={humanConfirmed}
                onChange={e => setHumanConfirmed(e.target.checked)}
                className="mt-0.5 cursor-pointer"
              />
              <span className="font-libre text-sm text-zinc-700">
                Confirmo que soy una persona
              </span>
            </label>
          </div>

          {error && (
            <p className="font-libre text-xs text-[#E84878]">{error}</p>
          )}

          <button
            type="submit"
            disabled={!humanConfirmed || isPending}
            className="w-full bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase py-3 hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isPending ? 'Enviando...' : 'Enviar mensaje'}
          </button>

        </form>
      </div>

    </div>
  )
}
