'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const ALLOWED_ADMINS = [
  'olvidosdegranada@gmail.com',
  'alfonso.olvidos@gmail.com',
  'ramonrepiso@gmail.com',
  'benitezl@go.ugr.es',
]

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!ALLOWED_ADMINS.includes(email.toLowerCase().trim())) {
      setError('Este correo no tiene acceso al panel de administración.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email: email.toLowerCase().trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
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
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F2BE2A] mb-4">
            <span className="font-crimson font-bold text-[#8B1A1A] text-lg">MM</span>
          </div>
          <h1 className="font-crimson font-bold text-white text-2xl">Panel de administración</h1>
          <p className="font-libre text-zinc-400 text-sm mt-1">Mariano Maresca</p>
        </div>

        {sent ? (
          <div className="bg-zinc-800 p-6 text-center">
            <p className="font-libre text-white mb-2">Enlace enviado</p>
            <p className="font-libre text-zinc-400 text-sm">
              Revisa tu correo <strong className="text-white">{email}</strong> y haz clic en el enlace para entrar.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 space-y-4">
            <div>
              <label className="font-libre text-xs tracking-widest uppercase text-zinc-400 block mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="tu@correo.com"
                className="w-full bg-zinc-700 border border-zinc-600 text-white font-libre text-sm px-3 py-2 focus:outline-none focus:border-[#E84878] placeholder:text-zinc-500"
              />
            </div>
            {error && (
              <p className="font-libre text-[#E84878] text-xs">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E84878] text-white font-libre text-sm tracking-widest uppercase py-2 hover:bg-[#d03868] transition-colors disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Recibir enlace de acceso'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
