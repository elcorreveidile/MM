import { createClient as createAdminClient } from '@supabase/supabase-js'
import Link from 'next/link'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'La presente — Mariano Maresca',
  description: 'Sabrás por la presente que empeoré de vida. Una frase de Mariano Maresca continuada por quienes le recuerdan.',
}

const FRASE = 'Sabrás por la presente que empeoré de vida'

export default async function LaPresentePage() {
  const admin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data: continuaciones } = await admin
    .from('frase_continuaciones')
    .select('texto, autor_email, created_at')
    .eq('publicada', true)
    .order('created_at', { ascending: true })

  const emails = continuaciones?.map(c => c.autor_email) ?? []
  let nombresMap: Record<string, { nombre: string; mostrar_nombre: boolean }> = {}
  if (emails.length > 0) {
    const { data: socios } = await admin.from('socios').select('email, nombre, mostrar_nombre').in('email', emails)
    socios?.forEach(s => { nombresMap[s.email] = { nombre: s.nombre, mostrar_nombre: s.mostrar_nombre } })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-8">
          Mariano Maresca
        </p>
        <h1 className="font-crimson font-bold italic text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          «{FRASE}…»
        </h1>
        <p className="font-libre text-zinc-500 text-sm leading-relaxed max-w-xl">
          Una frase de Mariano Maresca que seguimos escribiendo. Cada amigo la continúa a su manera.
        </p>
      </div>

      {/* Continuaciones */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        {(!continuaciones || continuaciones.length === 0) ? (
          <p className="font-crimson text-zinc-600 text-xl italic">
            Aún no hay continuaciones publicadas. Sé el primero.
          </p>
        ) : (
          <div className="space-y-12">
            {continuaciones.map((c, i) => {
              const autor = nombresMap[c.autor_email]
              const nombre = autor?.mostrar_nombre ? autor.nombre : 'Amigo/a de Mariano'
              return (
                <div key={i} className="border-l border-zinc-800 pl-8">
                  <p className="font-libre text-xs tracking-widest uppercase text-zinc-600 mb-4">
                    «{FRASE}…»
                  </p>
                  <p className="font-crimson italic text-zinc-100 leading-relaxed mb-4"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                    {c.texto}
                  </p>
                  <p className="font-libre text-xs text-zinc-600">— {nombre}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="border-t border-zinc-900 max-w-3xl mx-auto px-6 py-12">
        <p className="font-libre text-xs tracking-widest uppercase text-zinc-600 mb-4">
          ¿Tienes una continuación?
        </p>
        <Link
          href="/panel/frase"
          className="inline-block font-libre text-xs tracking-widest uppercase text-white border border-zinc-700 px-6 py-3 hover:border-white transition-colors"
        >
          Participa →
        </Link>
        <p className="font-libre text-xs text-zinc-700 mt-4">
          Necesitas estar registrado como amigo o socia de Mariano.{' '}
          <Link href="/memorias/contacto" className="text-zinc-500 hover:text-zinc-300 transition-colors underline">
            Hazte amigo →
          </Link>
        </p>
      </div>

    </div>
  )
}
