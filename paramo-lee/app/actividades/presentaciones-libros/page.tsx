import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Presentaciones de libros — El páramo lee',
  description: 'Presentaciones de libros organizadas por El páramo lee: encuentros íntimos entre autoras, autores y lectores.',
}

const recentBooks = [
  {
    title: 'Raíces en el viento',
    author: 'Carmen Valverde',
    genre: 'Novela',
    date: '10 de junio, 2025',
    desc: 'Una historia sobre memoria familiar y desarraigo que ha emocionado a miles de lectoras.',
  },
  {
    title: 'El último labrador',
    author: 'Ignacio Prados',
    genre: 'Crónica',
    date: '22 de abril, 2025',
    desc: 'Retrato de la España rural que desaparece, narrado desde la tierra y la ternura.',
  },
  {
    title: 'Piedra y cielo',
    author: 'Lourdes Arias',
    genre: 'Poesía',
    date: '15 de marzo, 2025',
    desc: 'Segundo poemario de esta voz imprescindible de la nueva poesía española.',
  },
]

export default function PresentacionesLibrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2d5a3d] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/actividades" className="inline-flex items-center gap-2 text-[#d4e8da] text-sm font-sans hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Actividades
          </Link>
          <p className="font-sans text-[#d4e8da] text-xs tracking-widest uppercase mb-4">
            Actividades — Presentaciones
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Presentaciones<br />de libros
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            Cada libro, una conversación. Actos íntimos donde autoras y autores dialogan
            con su obra y con quienes la leen.
          </p>
        </div>
      </section>

      {/* Qué son */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-5">
                Más que un acto, un encuentro
              </h2>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                Las presentaciones de libros de El páramo lee no son actos protocolarios.
                Son encuentros íntimos donde la autora o el autor comparte el proceso de
                creación, las dudas, las fuentes de inspiración y los miedos que acompañan
                a cada libro.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                El coloquio abierto es la parte más viva de cada presentación: preguntas,
                debate, risas y emoción. Después, la firma de ejemplares y la conversación
                informal que sigue siendo cultura.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed">
                Colaboramos con las librerías locales para que los libros estén disponibles
                en el acto. Comprar en la librería del barrio también es cultura.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🗣️', title: 'Coloquio abierto', text: 'El público participa activamente en la conversación con la autora o autor.' },
                { icon: '✍️', title: 'Firma de ejemplares', text: 'Cada asistente puede llevarse su libro firmado con dedicatoria personal.' },
                { icon: '📚', title: 'Venta de libros', text: 'En colaboración con librerías locales, los libros están disponibles en el acto.' },
                { icon: '🍷', title: 'Ambiente distendido', text: 'Con un pequeño aperitivo, la conversación continúa de forma más informal.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 bg-white rounded-xl p-5 border border-[#e8e0d5]">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h4 className="font-sans font-semibold text-[#1a3a28] mb-1">{f.title}</h4>
                    <p className="font-sans text-sm text-[#5a5a55]">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Libros recientes */}
      <section className="py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-2 text-center">
            Presentaciones recientes
          </h2>
          <p className="font-sans text-sm text-[#5a5a55] text-center mb-10">
            Algunos de los libros que han pasado por nuestros actos este año
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBooks.map((b) => (
              <div key={b.title} className="bg-[#faf6f0] rounded-2xl overflow-hidden border border-[#e8e0d5]">
                {/* Simulated book cover */}
                <div className="h-32 bg-[#2d5a3d] flex items-end p-5">
                  <div>
                    <p className="font-sans text-[#a8c5b0] text-xs uppercase tracking-widest">{b.genre}</p>
                    <h3 className="font-serif text-xl font-bold text-white">{b.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans font-semibold text-sm text-[#2d5a3d] mb-2">{b.author}</p>
                  <p className="font-sans text-sm text-[#5a5a55] leading-relaxed mb-4">{b.desc}</p>
                  <p className="font-sans text-xs text-[#c4893a] font-semibold">
                    Presentado el {b.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proponer */}
      <section className="py-16 bg-[#f5efe6] border-t border-[#e0d5c8] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-4">
            ¿Tienes un libro que presentar?
          </h2>
          <p className="font-sans text-[#5a5a55] mb-8">
            Si eres autora o autor y quieres presentar tu obra con nosotros, escríbenos.
            También puedes sugerirnos libros que te gustaría ver en nuestro programa.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[#2d5a3d] hover:bg-[#1a3a28] text-white font-sans font-semibold rounded-full transition-colors"
          >
            Escribirnos
          </Link>
        </div>
      </section>
    </div>
  )
}
