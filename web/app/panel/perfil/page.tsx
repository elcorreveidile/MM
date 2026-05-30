'use client'

import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function PerfilPage() {
  const [nombre, setNombre] = useState('')
  const [notas, setNotas] = useState('')
  const [mostrarNombre, setMostrarNombre] = useState(true)
  const [fotoUrl, setFotoUrl] = useState<string | null>(null)
  const [originalNotas, setOriginalNotas] = useState('')
  const [originalPublicado, setOriginalPublicado] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [savedMsg, setSavedMsg] = useState('')
  const [fotoLoading, setFotoLoading] = useState(false)
  const [fotoError, setFotoError] = useState('')
  const [loading, setLoading] = useState(true)
  const fotoInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('socios')
        .select('nombre, notas, mostrar_nombre, foto_url, publicar_testimonio')
        .eq('email', user.email!)
        .single()
      if (data) {
        setNombre(data.nombre ?? '')
        setNotas(data.notas ?? '')
        setOriginalNotas(data.notas ?? '')
        setMostrarNombre(data.mostrar_nombre ?? true)
        setFotoUrl(data.foto_url ?? null)
        setOriginalPublicado(data.publicar_testimonio ?? false)
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
      const notasChanged = notas.trim() !== originalNotas.trim()
      const updates: Record<string, unknown> = { nombre, notas, mostrar_nombre: mostrarNombre }
      if (notasChanged && originalPublicado) {
        updates.publicar_testimonio = false
      }
      await supabase.from('socios').update(updates).eq('email', user.email!)
      if (notasChanged && originalPublicado) {
        setSavedMsg('Guardado. Tu testimonio ha vuelto a revisión para ser publicado de nuevo.')
        setOriginalPublicado(false)
      } else {
        setSavedMsg('Guardado ✓')
      }
      setOriginalNotas(notas.trim())
    }
    setSaving(false)
    setSaved(true)
    setTimeout(() => { setSaved(false); router.push('/panel') }, 2500)
  }

  async function handleFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setFotoError('')
    if (file.size > 5 * 1024 * 1024) {
      setFotoError('La imagen no puede superar 5 MB.')
      return
    }
    if (!file.type.startsWith('image/')) {
      setFotoError('Solo se aceptan imágenes.')
      return
    }
    setFotoLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setFotoLoading(false); return }
    const ext = file.name.split('.').pop() ?? 'jpg'
    const path = `${user.id}/foto.${ext}`
    const { error: uploadError } = await supabase.storage
      .from('fotos-memorias')
      .upload(path, file, { upsert: true })
    if (uploadError) {
      setFotoError('Error al subir la imagen. Inténtalo de nuevo.')
      setFotoLoading(false)
      return
    }
    const { data: { publicUrl } } = supabase.storage.from('fotos-memorias').getPublicUrl(path)
    await supabase.from('socios').update({ foto_url: publicUrl }).eq('email', user.email!)
    setFotoUrl(`${publicUrl}?t=${Date.now()}`)
    setFotoLoading(false)
  }

  async function handleEliminarFoto() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('socios').update({ foto_url: null }).eq('email', user.email!)
    setFotoUrl(null)
  }

  if (loading) return <div className="font-libre text-sm text-zinc-400">Cargando...</div>

  return (
    <div className="space-y-6">

      {/* Texto */}
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
              Cuéntanos cómo le conociste, qué significó para ti, algún recuerdo... o cómo llegaste hasta él si no le conociste en persona.
            </p>
            <textarea
              value={notas}
              onChange={e => setNotas(e.target.value)}
              rows={6}
              placeholder="Conocí a Mariano en..."
              className="w-full border border-zinc-300 text-zinc-900 font-libre text-sm px-3 py-2 focus:outline-none focus:border-zinc-900 resize-y placeholder:text-zinc-400"
            />
            {originalPublicado && notas.trim() !== originalNotas.trim() && (
              <p className="font-libre text-xs text-amber-600 mt-1">
                Al guardar, tu testimonio volverá a revisión antes de publicarse de nuevo.
              </p>
            )}
          </div>
          <div className="border border-zinc-100 p-4 bg-zinc-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={mostrarNombre}
                onChange={e => setMostrarNombre(e.target.checked)}
                className="mt-0.5"
              />
              <div>
                <span className="font-libre text-sm text-zinc-900 block">Quiero aparecer con mi nombre en la página Memorias</span>
                <span className="font-libre text-xs text-zinc-400">Si no lo marcas, tu testimonio se publicará de forma anónima</span>
              </div>
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={saving}
              className="bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase px-5 py-2 hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
            {saved && <span className="font-libre text-xs text-zinc-500">{savedMsg}</span>}
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

      {/* Foto */}
      <div className="bg-white border border-zinc-200 p-6">
        <h2 className="font-crimson font-bold text-zinc-900 text-xl mb-1">Foto</h2>
        <p className="font-libre text-xs text-zinc-400 mb-5">
          Opcional. Puede ser una foto contigo y Mariano, o una que te identifique. Se mostrará junto a tu testimonio en Memorias.
        </p>
        <div className="flex items-start gap-5">
          {fotoUrl ? (
            <div className="relative shrink-0">
              <img src={fotoUrl} alt="Tu foto" className="w-24 h-24 object-cover" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-zinc-100 shrink-0 flex items-center justify-center">
              <span className="font-libre text-xs text-zinc-400">Sin foto</span>
            </div>
          )}
          <div className="space-y-3">
            <input
              ref={fotoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFoto}
            />
            <button
              type="button"
              onClick={() => fotoInputRef.current?.click()}
              disabled={fotoLoading}
              className="font-libre text-xs bg-zinc-900 text-white px-4 py-2 hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {fotoLoading ? 'Subiendo...' : fotoUrl ? 'Cambiar foto' : 'Subir foto'}
            </button>
            {fotoUrl && (
              <button
                type="button"
                onClick={handleEliminarFoto}
                className="block font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors"
              >
                Eliminar foto
              </button>
            )}
            {fotoError && <p className="font-libre text-xs text-[#E84878]">{fotoError}</p>}
            <p className="font-libre text-xs text-zinc-400">Máximo 5 MB. JPG, PNG o WebP.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
