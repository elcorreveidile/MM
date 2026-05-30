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

      {/* CTA */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">

          <div>
            <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
              Añade tu recuerdo
            </p>
            <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-4">
              ¿Tienes algo que contar sobre Mariano?
            </h2>
            <p className="font-libre text-zinc-700 text-sm leading-relaxed mb-4">
              No importa si le conociste en persona o si llegaste hasta él a través de un libro,
              una revista o una conversación ajena. La memoria no entiende de jerarquías: lo que
              tú recuerdas también es parte de quién fue.
            </p>
            <p className="font-libre text-zinc-700 text-sm leading-relaxed mb-6">
              Hacerse amigo o amiga de Mariano no tiene coste. Solo necesitas escribirnos.
            </p>
            <a
              href="mailto:olvidosdegranada@gmail.com?subject=Quiero%20ser%20amigo%20de%20Mariano"
              className="inline-block bg-zinc-900 text-white font-libre text-xs tracking-widest uppercase px-6 py-3 hover:bg-zinc-700 transition-colors"
            >
              Escríbenos →
            </a>
          </div>

          <div className="md:border-l md:border-zinc-100 md:pl-12">
            <p className="font-libre text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
              Ayuda a mantener esta web
            </p>
            <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-4">
              La memoria tiene un coste
            </h2>
            <p className="font-libre text-zinc-700 text-sm leading-relaxed mb-4">
              Esta página existe gracias a quienes la sostienen. Mantenerla viva —el dominio,
              el servidor, el trabajo— tiene un precio pequeño pero real.
            </p>
            <p className="font-libre text-zinc-700 text-sm leading-relaxed mb-4">
              Si quieres contribuir, puedes hacerlo con una cuota simbólica de{' '}
              <strong>1&nbsp;€ al mes</strong>, pagadera de forma anual. No es obligatorio.
              Pero si lo haces, estás poniendo tu nombre detrás de todo esto.
            </p>
            <p className="font-libre text-zinc-500 text-xs">
              Para colaborar, escríbenos a{' '}
              <a href="mailto:olvidosdegranada@gmail.com" className="text-[#E84878] hover:underline">
                olvidosdegranada@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}
