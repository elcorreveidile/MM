import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import FraseForm from './FraseForm'

const FRASE = 'Sabrás por la presente que empeoré de vida'

export default async function PanelFrasePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) redirect('/panel/login')

  const admin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const [{ data: propia }, { data: publicadas }] = await Promise.all([
    admin.from('frase_continuaciones').select('texto, publicada').eq('autor_email', user.email).maybeSingle(),
    admin.from('frase_continuaciones').select('texto, autor_email').eq('publicada', true).neq('autor_email', user.email).order('created_at', { ascending: true }),
  ])

  let nombresMap: Record<string, { nombre: string; mostrar_nombre: boolean }> = {}
  const emails = publicadas?.map(c => c.autor_email) ?? []
  if (emails.length > 0) {
    const { data: socios } = await admin.from('socios').select('email, nombre, mostrar_nombre').in('email', emails)
    socios?.forEach(s => { nombresMap[s.email] = { nombre: s.nombre, mostrar_nombre: s.mostrar_nombre } })
  }

  return (
    <div className="space-y-10">
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">El juego de la frase</p>
        <h1 className="font-crimson font-bold text-zinc-900 text-2xl">La presente</h1>
      </div>

      {/* Frase original */}
      <div className="bg-zinc-900 px-6 py-8">
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-500 mb-4">Mariano Maresca</p>
        <p className="font-crimson text-2xl italic leading-relaxed text-zinc-100">
          «{FRASE}…»
        </p>
      </div>

      {/* Formulario */}
      <div>
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-3">
          {propia ? 'Tu continuación' : 'Continúa la frase'}
        </p>
        <FraseForm existente={propia ?? null} />
      </div>

      {/* Continuaciones de otros */}
      {publicadas && publicadas.length > 0 && (
        <div>
          <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-4">
            Lo que escriben los demás
          </p>
          <div className="space-y-5">
            {publicadas.map((c, i) => {
              const autor = nombresMap[c.autor_email]
              const nombre = autor?.mostrar_nombre ? autor.nombre : 'Amigo/a de Mariano'
              return (
                <blockquote key={i} className="border-l-2 border-zinc-200 pl-4">
                  <p className="font-crimson text-zinc-700 text-xl italic leading-relaxed">«{c.texto}»</p>
                  <footer className="font-libre text-xs text-zinc-400 mt-1.5">— {nombre}</footer>
                </blockquote>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
