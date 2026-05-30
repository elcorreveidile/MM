import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Créditos — Mariano Maresca',
}

export default function CreditosPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Las cosas que hemos leído
          </p>
          <h1 className="font-crimson font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Créditos
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white divide-y divide-zinc-100">

          <div className="p-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-6">Exposición</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Coordinación</dt>
                <dd className="font-libre text-zinc-700">Antonio Arias · Luisa Martínez Osorio</dd>
              </div>
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Textos y selección de contenidos</dt>
                <dd className="font-libre text-zinc-700">Javier Benítez</dd>
              </div>
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Diseño y montaje</dt>
                <dd className="font-libre text-zinc-700"><a href="https://www.manigua.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 transition-colors">Manigua</a></dd>
              </div>
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Organización</dt>
                <dd className="font-libre text-zinc-700">Biblioteca de la Facultad de Derecho · Universidad de Granada</dd>
              </div>
            </dl>
          </div>

          <div className="p-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-6">Web</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Identidad visual</dt>
                <dd className="font-libre text-zinc-700">Basada en el diseño de <a href="https://www.manigua.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 transition-colors">Manigua</a> para la exposición</dd>
              </div>
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Página web</dt>
                <dd className="font-libre text-zinc-700">Asociación Cultural Olvidos de Granada</dd>
              </div>
              <div>
                <dt className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-1">Diseño y desarrollo web</dt>
                <dd className="font-libre text-zinc-700">
                  <a href="https://www.espanias.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E84878] transition-colors underline">
                    espanias.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>

    </div>
  )
}
