import { createClient } from '@/lib/supabase/server'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Memorias — Mariano Maresca',
  description: 'Testimonios de quienes conocieron a Mariano Maresca o llegaron hasta él a través de su obra.',
}

export default async function MemoriasPage() {
  const supabase = await createClient()
  const { data: testimonios } = await supabase
    .from('socios')
    .select('nombre, notas, ciudad, mostrar_nombre')
    .eq('publicar_testimonio', true)
    .not('notas', 'is', null)
    .neq('notas', '')
    .order('nombre', { ascending: true })

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Sus amigos recuerdan
          </p>
          <h1 className="font-crimson font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Memorias
          </h1>
          <p className="font-libre text-zinc-300 max-w-2xl text-lg leading-relaxed">
            Testimonios de quienes conocieron a Mariano Maresca o llegaron hasta él a través de su obra.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {(!testimonios || testimonios.length === 0) ? (
          <p className="font-crimson text-zinc-500 text-xl italic">
            Aún no hay memorias publicadas.
          </p>
        ) : (
          <div className="space-y-8">
            {testimonios.map((t, i) => (
              <blockquote key={i} className="bg-white p-8 border-l-4 border-[#E84878]">
                <p className="font-crimson text-zinc-900 text-xl leading-relaxed italic">
                  «{t.notas}»
                </p>
                <footer className="mt-5 font-libre text-sm text-zinc-500">
                  — {t.mostrar_nombre ? t.nombre : 'Amigo/a de Mariano'}
                  {t.mostrar_nombre && t.ciudad ? `, ${t.ciudad}` : ''}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
