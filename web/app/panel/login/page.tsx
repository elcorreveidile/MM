'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function PanelLoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email: email.toLowerCase().trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/panel`,
      },
    })

    if (error) {
      setError('Error al enviar el enlace. Inténtalo de nuevo.')
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F2BE2A] mb-4">
            <span className="font-crimson font-bold text-[#8B1A1A] text-lg">MM</span>
          </div>
          <h1 className="font-crimson font-bold text-zinc-900 text-2xl">Área de miembros</h1>
          <p className="font-libre text-zinc-500 text-sm mt-1">Asociación Olvidos de Granada</p>
        </div>

        {sent ? (
          <div className="bg-white border border-zinc-200 p-6 text-center">
            <p className="font-libre text-zinc-900 mb-2">Enlace enviado</p>
            <p className="font-libre text-zinc-500 text-sm">
              Revisa tu correo <strong className="text-zinc-900">{email}</strong> y haz clic en el enlace para entrar.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 p-6 space-y-4">
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-500 block mb-2">
                Tu correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="tu@correo.com"
                className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 placeholder:text-zinc-400"
              />
            </div>
            {error && <p className="font-libre text-[#E84878] text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 text-white font-libre text-sm tracking-widest uppercase py-2 hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Recibir enlace de acceso'}
            </button>
            <p className="font-libre text-xs text-zinc-400 text-center">
              Solo para socios y amigos de Olvidos de Granada
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
