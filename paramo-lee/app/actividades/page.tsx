import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Actividades — El páramo lee',
  description: 'Festivales literarios, jornadas poéticas, visitas culturales y presentaciones de libros organizadas por El páramo lee.',
}

const activities = [
  {
    href: '/actividades/festivales-literarios',
    title: 'Festivales literarios',
    tagline: 'La gran fiesta de la palabra',
    description:
      'Encuentros multitudinarios que reúnen autoras, autores, editores y lectores en torno a la palabra escrita. Charlas, mesas redondas, talleres y lecturas en voz alta que convierten el páramo en capital literaria.',
    color: 'bg-[#1a3a28]',
    lightColor: 'bg-[#eef5f0]',
    accentColor: 'text-[#1a3a28]',
    borderColor: 'border-[#1a3a28]',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Invitadas e invitados de renombre', 'Programación para todas las edades', 'Stands de librerías', 'Talleres de escritura creativa'],
  },
  {
    href: '/actividades/jornadas-poeticas',
    title: 'Jornadas poéticas',
    tagline: 'La música de las palabras',
    description:
      'Espacios de creación, escucha y emoción donde la poesía cobra voz. Recitales al atardecer, noches de versos, slam poetry y talleres donde cada persona puede explorar su propia voz poética.',
    color: 'bg-[#8b3a2a]',
    lightColor: 'bg-[#fdf0ed]',
    accentColor: 'text-[#8b3a2a]',
    borderColor: 'border-[#8b3a2a]',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    features: ['Recitales de poetas contemporáneos', 'Slam poetry abierto', 'Talleres de creación poética', 'Antología anual participativa'],
  },
  {
    href: '/actividades/visitas-culturales',
    title: 'Visitas culturales',
    tagline: 'Cultura con los pies en la tierra',
    description:
      'Rutas y excursiones guiadas que descubren la historia, el arte, la arquitectura y los paisajes del territorio. Salidas a museos, yacimientos, exposiciones y lugares con historia que nos rodean y a veces ignoramos.',
    color: 'bg-[#c4893a]',
    lightColor: 'bg-[#fef7ed]',
    accentColor: 'text-[#8b5e1a]',
    borderColor: 'border-[#c4893a]',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Guías especializadas/os', 'Rutas literarias por la comarca', 'Visitas a museos y patrimonio', 'Transporte compartido incluido'],
  },
  {
    href: '/actividades/presentaciones-libros',
    title: 'Presentaciones de libros',
    tagline: 'Cada libro, una conversación',
    description:
      'Actos íntimos donde autoras y autores dialogan con su obra y con su público. Un espacio para conocer el proceso de creación, hacer preguntas y llevarse un libro firmado. La librería hecha encuentro.',
    color: 'bg-[#2d5a3d]',
    lightColor: 'bg-[#eef5f1]',
    accentColor: 'text-[#2d5a3d]',
    borderColor: 'border-[#2d5a3d]',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    features: ['Diálogo directo con la autora/autor', 'Firma de ejemplares', 'Colaboración con librerías locales', 'Coloquio abierto al público'],
  },
]

export default function ActividadesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a28] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-[#a8c5b0] text-xs tracking-widest uppercase mb-4">
            Lo que hacemos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Actividades
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            Cuatro líneas de acción cultural para acercar la literatura, la poesía y el
            patrimonio a toda la comunidad del páramo.
          </p>
        </div>
      </section>

      {/* Activities grid */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {activities.map((a, i) => (
            <div
              key={a.href}
              className={`rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-sm border border-[#e8e0d5] ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Colored panel */}
              <div className={`${a.color} p-10 lg:col-span-2 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="text-white opacity-80 mb-6">{a.icon}</div>
                <h2 className="font-serif text-3xl font-bold text-white mb-2">{a.title}</h2>
                <p className="font-sans text-sm text-white opacity-70 italic">{a.tagline}</p>
                <Link
                  href={a.href}
                  className="mt-8 inline-flex items-center gap-2 text-[#e8c980] font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  Ver más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Content panel */}
              <div className="bg-white p-10 lg:col-span-3">
                <p className="font-sans text-[#3a3a35] leading-relaxed mb-8 text-lg">
                  {a.description}
                </p>
                <h3 className="font-sans font-semibold text-xs uppercase tracking-widest text-[#5a5a55] mb-4">
                  Qué incluye
                </h3>
                <ul className="space-y-2">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-sm text-[#3a3a35]">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f5efe6] border-t border-[#e0d5c8] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-4">
            ¿Quieres participar?
          </h2>
          <p className="font-sans text-[#5a5a55] mb-8">
            Consulta la agenda para conocer los próximos eventos o ponte en contacto con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agenda" className="px-8 py-4 bg-[#1a3a28] hover:bg-[#2d5a3d] text-white font-sans font-semibold rounded-full transition-colors">
              Ver agenda
            </Link>
            <Link href="/contacto" className="px-8 py-4 border-2 border-[#1a3a28] text-[#1a3a28] hover:bg-[#1a3a28] hover:text-white font-sans font-semibold rounded-full transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
