'use client'

import { useEffect, useRef, useState } from 'react'
import { sendContact } from './actions'

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const tsRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (tsRef.current) {
      tsRef.current.value = String(Date.now())
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const result = await sendContact(formData)

    if ('success' in result) {
      setStatus('success')
    } else {
      if (result.error === 'spam') {
        setStatus('success') // silent — don't reveal spam detection
      } else {
        setStatus('error')
        setErrorMsg(result.error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Asociación Cultural Olvidos de Granada
          </p>
          <h1 className="font-crimson font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Contacto
          </h1>
          <p className="font-libre text-zinc-300 max-w-2xl text-lg leading-relaxed">
            Para cualquier consulta sobre la exposición, el archivo o la figura de Mariano Maresca.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {status === 'success' ? (
          <div className="bg-white p-10 text-center">
            <div
              className="w-16 h-16 flex items-center justify-center font-crimson font-bold text-2xl leading-none mx-auto mb-6"
              style={{ backgroundColor: '#F2BE2A', color: '#8B1A1A' }}
            >
              MM
            </div>
            <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-4">
              Mensaje enviado
            </h2>
            <p className="font-libre text-zinc-600 text-lg leading-relaxed">
              Gracias por ponerte en contacto. Te responderemos en breve.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8">
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />
              {/* Timestamp for time-gate */}
              <input type="hidden" name="_ts" ref={tsRef} />

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-libre text-xs tracking-widest uppercase text-zinc-500 mb-2">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-zinc-300 px-4 py-3 font-libre text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-libre text-xs tracking-widest uppercase text-zinc-500 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border border-zinc-300 px-4 py-3 font-libre text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-libre text-xs tracking-widest uppercase text-zinc-500 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    maxLength={2000}
                    className="w-full border border-zinc-300 px-4 py-3 font-libre text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-y"
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <p className="font-libre text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-zinc-900 text-white px-8 py-4 font-libre font-semibold hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-8 p-6 bg-zinc-900 text-white">
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">
            También puedes escribirnos a
          </p>
          <p className="font-crimson text-xl text-white">
            olvidosdegranada@gmail.com
          </p>
        </div>
      </div>

    </div>
  )
}
