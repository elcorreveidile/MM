import Link from 'next/link'

const activities = [
  {
    href: '/actividades/festivales-literarios',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Festivales literarios',
    description:
      'Encuentros multitudinarios que reúnen autoras, autores y lectores en torno a la palabra escrita. Charlas, lecturas y celebración de la literatura.',
    color: 'bg-[#1a3a28]',
    accent: 'text-[#a8c5b0]',
  },
  {
    href: '/actividades/jornadas-poeticas',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'Jornadas poéticas',
    description:
      'Espacios de creación y escucha donde la poesía cobra voz. Recitales, talleres y noches de versos para sentir la música del lenguaje.',
    color: 'bg-[#8b3a2a]',
    accent: 'text-[#f5c5b5]',
  },
  {
    href: '/actividades/visitas-culturales',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visitas culturales',
    description:
      'Rutas y excursiones que descubren la historia, el arte y los paisajes del territorio. Cultura en movimiento, con los pies en la tierra.',
    color: 'bg-[#c4893a]',
    accent: 'text-[#fef3e2]',
  },
  {
    href: '/actividades/presentaciones-libros',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h.01M15 9h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    title: 'Presentaciones de libros',
    description:
      'Actos íntimos donde autoras y autores dialogan con su obra y su público. Un libro, muchas lecturas: conversaciones que enriquecen.',
    color: 'bg-[#2d5a3d]',
    accent: 'text-[#d4e8da]',
  },
]

const upcomingEvents = [
  {
    date: { day: '14', month: 'May' },
    title: 'Festival del Libro del Páramo',
    type: 'Festival literario',
    location: 'Plaza Mayor',
    typeColor: 'bg-[#1a3a28] text-white',
  },
  {
    date: { day: '21', month: 'May' },
    title: 'Noche de Poesía: Voces del páramo',
    type: 'Jornada poética',
    location: 'Casa de la Cultura',
    typeColor: 'bg-[#8b3a2a] text-white',
  },
  {
    date: { day: '3', month: 'Jun' },
    title: 'Ruta literaria por la comarca',
    type: 'Visita cultural',
    location: 'Salida desde la biblioteca',
    typeColor: 'bg-[#c4893a] text-white',
  },
  {
    date: { day: '10', month: 'Jun' },
    title: 'Presentación: "Raíces en el viento"',
    type: 'Presentación de libro',
    location: 'Biblioteca Municipal',
    typeColor: 'bg-[#2d5a3d] text-white',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative bg-[#1a3a28] text-white overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #a8c5b0 0, #a8c5b0 1px, transparent 0, transparent 50%)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        {/* Amber accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c4893a] via-[#e8b84b] to-[#c4893a]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="font-sans text-[#a8c5b0] text-sm tracking-[0.2em] uppercase mb-4">
              Asociación Cultural
            </p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none mb-6 text-white">
              El&nbsp;páramo
              <br />
              <span className="text-[#e8c980] italic">lee.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#d4e8da] mb-10 leading-relaxed max-w-xl">
              Donde la lectura es raíz, la poesía es viento y la cultura
              es el camino que recorremos juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/actividades"
                className="px-8 py-4 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors text-center"
              >
                Conoce nuestras actividades
              </Link>
              <Link
                href="/agenda"
                className="px-8 py-4 border-2 border-[#a8c5b0] text-[#d4e8da] hover:bg-[#2d5a3d] font-sans font-semibold rounded-full transition-colors text-center"
              >
                Ver agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-[#f5efe6] py-14 border-b border-[#e0d5c8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-[#c4893a] text-4xl select-none">"</span>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-[#2d5a3d] leading-relaxed mt-2">
            Un libro abierto es un cerebro que habla; cerrado, un amigo que espera.
          </blockquote>
          <p className="mt-4 font-sans text-sm text-[#5a5a55]">— Proverbio</p>
        </div>
      </section>

      {/* ── ACTIVIDADES ── */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
              Lo que hacemos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a28]">
              Nuestras actividades
            </h2>
            <div className="w-16 h-0.5 bg-[#c4893a] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => (
              <Link key={a.href} href={a.href} className="group">
                <div className={`${a.color} rounded-2xl p-7 h-full flex flex-col card-lift`}>
                  <div className={`${a.accent} mb-4`}>{a.icon}</div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-[#e8c980] transition-colors">
                    {a.title}
                  </h3>
                  <p className={`font-sans text-sm leading-relaxed ${a.accent} flex-1`}>
                    {a.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-[#e8c980] text-sm font-sans font-medium">
                    <span>Saber más</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÓXIMOS EVENTOS ── */}
      <section className="py-20 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
                En el horizonte
              </p>
              <h2 className="font-serif text-4xl font-bold text-[#1a3a28]">
                Próximos eventos
              </h2>
            </div>
            <Link
              href="/agenda"
              className="font-sans text-sm text-[#2d5a3d] hover:text-[#1a3a28] font-medium underline underline-offset-4 transition-colors self-start md:self-end"
            >
              Ver agenda completa →
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((ev, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-[#faf6f0] hover:bg-[#f5efe6] rounded-xl p-5 transition-colors group cursor-pointer"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="font-serif text-3xl font-bold text-[#1a3a28] leading-none">
                    {ev.date.day}
                  </div>
                  <div className="font-sans text-xs uppercase tracking-widest text-[#5a8a6a] mt-1">
                    {ev.date.month}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs font-sans font-semibold px-2 py-0.5 rounded-full ${ev.typeColor}`}>
                      {ev.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#1a3a28] group-hover:text-[#2d5a3d] transition-colors truncate">
                    {ev.title}
                  </h3>
                  <p className="font-sans text-sm text-[#5a5a55] mt-1">
                    <svg className="inline w-3.5 h-3.5 mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {ev.location}
                  </p>
                </div>

                <svg className="flex-shrink-0 w-5 h-5 text-[#a8c5b0] group-hover:text-[#c4893a] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE NOSOTROS ── */}
      <section className="py-20 bg-[#f5efe6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
                Quiénes somos
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a28] mb-6">
                Una comunidad<br />de lectores y lectoras
              </h2>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                El páramo lee nació del deseo compartido de llevar la cultura más cerca de las
                personas, sin importar dónde vivan. Somos una asociación sin ánimo de lucro formada
                por voluntarias y voluntarios apasionados por los libros, la poesía y el patrimonio.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-8">
                Creemos que la lectura transforma vidas y que la cultura debe ser accesible para
                todos. Por eso organizamos eventos gratuitos o a precio simbólico que fomentan el
                encuentro, la reflexión y la alegría de leer.
              </p>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3a28] hover:bg-[#2d5a3d] text-white font-sans font-semibold rounded-full transition-colors"
              >
                Conoce nuestra historia
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '+200', label: 'Socios y socias' },
                { value: '15+', label: 'Años de historia' },
                { value: '+80', label: 'Eventos al año' },
                { value: '12', label: 'Municipios activos' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[#e0d5c8]"
                >
                  <div className="font-serif text-5xl font-bold text-[#c4893a] mb-2">
                    {s.value}
                  </div>
                  <div className="font-sans text-sm text-[#5a5a55]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA UNIRSE ── */}
      <section className="py-20 bg-[#1a3a28] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #a8c5b0 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Te unes al páramo?
          </h2>
          <p className="font-sans text-[#d4e8da] text-lg mb-10 leading-relaxed">
            Hazte socia o socio y participa en todos nuestros eventos, recibe nuestra
            newsletter y forma parte de una comunidad que ama los libros tanto como tú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors"
            >
              Hazte socia/socio
            </Link>
            <Link
              href="/actividades"
              className="px-8 py-4 border-2 border-[#a8c5b0] text-[#d4e8da] hover:bg-[#2d5a3d] font-sans font-semibold rounded-full transition-colors"
            >
              Ver actividades
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
