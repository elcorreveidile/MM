import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jornadas poéticas — El páramo lee',
  description: 'Recitales, talleres y noches de poesía organizados por la asociación cultural El páramo lee.',
}

const formats = [
  {
    title: 'Recitales al atardecer',
    desc: 'Una hora de poesía bajo el cielo del páramo. Poetas invitadas e invitados leen su obra en espacios al aire libre o en rincones íntimos de nuestros pueblos.',
    icon: '🌅',
  },
  {
    title: 'Slam Poetry',
    desc: 'Competición abierta de poesía oral donde cualquier persona puede subirse al escenario y compartir sus versos. El público decide. La emoción, el fondo.',
    icon: '🎤',
  },
  {
    title: 'Talleres de escritura poética',
    desc: 'Sesiones guiadas para iniciarse o profundizar en la escritura de poesía. Abiertos a todos los niveles, con tutoras y tutores con amplia experiencia.',
    icon: '✍️',
  },
  {
    title: 'Lectura compartida',
    desc: 'Círculos de lectura en voz alta donde el libro de poemas es el protagonista. Leer juntos, escuchar y comentar: la poesía como conversación.',
    icon: '📖',
  },
]

const poems = [
  {
    verse: 'Hay un lugar entre el viento y la piedra donde las palabras crecen como hierba.',
    author: 'Extracto del recital inaugural, 2015',
  },
  {
    verse: 'El páramo no es silencio. Es la pausa que precede a todo cuanto merece ser dicho.',
    author: 'Taller de escritura poética, 2022',
  },
]

export default function JornadasPoeticasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#8b3a2a] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/actividades" className="inline-flex items-center gap-2 text-[#f5c5b5] text-sm font-sans hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Actividades
          </Link>
          <p className="font-sans text-[#f5c5b5] text-xs tracking-widest uppercase mb-4">
            Actividades — Poesía
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Jornadas poéticas
          </h1>
          <p className="font-sans text-[#f8ddd5] text-lg max-w-2xl leading-relaxed">
            La música de las palabras. Espacios donde la poesía cobra voz, crea vínculos
            y nos recuerda que el lenguaje también puede ser emoción pura.
          </p>
        </div>
      </section>

      {/* Cita */}
      <section className="bg-[#fdf0ed] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-[#8b3a2a] text-4xl select-none">"</span>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-[#5a1e12] leading-relaxed mt-2">
            La poesía es el lugar donde el lenguaje recupera su infancia.
          </blockquote>
          <p className="mt-4 font-sans text-sm text-[#8b3a2a]">— Gaston Bachelard</p>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl font-bold text-[#1a3a28] mb-2">Qué ofrecemos</h2>
            <p className="font-sans text-[#5a5a55] max-w-xl mx-auto">
              Las Jornadas Poéticas tienen distintos formatos para que todo el mundo encuentre
              su forma de acercarse a la poesía.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formats.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-[#e8e0d5] flex gap-5">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#8b3a2a] mb-2">{f.title}</h3>
                  <p className="font-sans text-sm text-[#5a5a55] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versos */}
      <section className="py-16 bg-[#8b3a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {poems.map((p, i) => (
            <div key={i} className={`flex ${i % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-lg">
                <p className="font-serif text-xl italic text-white leading-relaxed">
                  "{p.verse}"
                </p>
                <p className="font-sans text-xs text-[#f5c5b5] mt-3">{p.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Próxima jornada */}
      <section className="py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fdf0ed] rounded-2xl p-10 border border-[#f0c8b8]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="font-sans text-[#8b3a2a] text-xs tracking-widest uppercase mb-2">
                  Próxima jornada
                </p>
                <h2 className="font-serif text-3xl font-bold text-[#5a1e12] mb-4">
                  Noche de Poesía: Voces del páramo
                </h2>
                <p className="font-sans text-[#5a3a35] leading-relaxed mb-4">
                  Un recital con cuatro poetas contemporáneas que han hecho del territorio y la
                  memoria el eje de su escritura. Entrada libre hasta completar aforo.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-sans text-[#5a3a35]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    21 de mayo, 20:00 h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Casa de la Cultura
                  </span>
                </div>
              </div>
              <Link
                href="/agenda"
                className="flex-shrink-0 px-6 py-3 bg-[#8b3a2a] hover:bg-[#6e2e20] text-white font-sans font-semibold text-sm rounded-full transition-colors"
              >
                Ver en la agenda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
