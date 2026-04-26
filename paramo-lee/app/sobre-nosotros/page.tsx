import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre nosotros — El páramo lee',
  description: 'Historia, misión y valores de la asociación cultural El páramo lee.',
}

const team = [
  { name: 'María Fernández', role: 'Presidenta', initials: 'MF' },
  { name: 'Carlos Ruiz', role: 'Secretario', initials: 'CR' },
  { name: 'Ana Martínez', role: 'Tesorera', initials: 'AM' },
  { name: 'Luis García', role: 'Coordinador de actividades', initials: 'LG' },
  { name: 'Elena López', role: 'Responsable de comunicación', initials: 'EL' },
  { name: 'Tomás Herrero', role: 'Vocal', initials: 'TH' },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Comunidad',
    text: 'Creemos que la cultura se construye juntas y juntos, en el diálogo y el encuentro entre personas de todas las edades y procedencias.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Pasión',
    text: 'Amamos los libros, la poesía y el arte. Esa pasión es el motor que nos mueve a organizar cada evento con dedicación y entusiasmo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: 'Territorio',
    text: 'Estamos enraizados en el páramo. Reivindicamos la identidad y el patrimonio del territorio como fuente de inspiración y orgullo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Accesibilidad',
    text: 'La cultura no tiene precio de entrada. Trabajamos para que todos los eventos sean gratuitos o de bajo coste, sin excluir a nadie.',
  },
]

const milestones = [
  { year: '2009', text: 'Fundación de la asociación por un grupo de lectoras y lectores del municipio.' },
  { year: '2011', text: 'Primer Festival Literario del Páramo, con 200 asistentes.' },
  { year: '2014', text: 'Inicio de las Jornadas Poéticas y apertura a municipios vecinos.' },
  { year: '2017', text: 'Lanzamiento del programa de Visitas Culturales por la comarca.' },
  { year: '2020', text: 'Adaptación digital durante la pandemia: lecturas y talleres en línea.' },
  { year: '2023', text: 'Más de 200 socias y socios y 12 municipios participantes.' },
]

export default function SobreNosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a28] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-[#a8c5b0] text-xs tracking-widest uppercase mb-4">
            Quiénes somos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre nosotros
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            Somos una asociación cultural sin ánimo de lucro nacida del amor por la lectura
            y el deseo de compartirla con el mayor número de personas posible.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
                Nuestra misión
              </p>
              <h2 className="font-serif text-4xl font-bold text-[#1a3a28] mb-6">
                Llevar la cultura a cada rincón del páramo
              </h2>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                El páramo lee nació en 2009 de la inquietud de un pequeño grupo de lectoras y lectores
                que creían que vivir en un entorno rural no debía ser un obstáculo para acceder a la
                cultura. Desde entonces hemos crecido hasta convertirnos en un referente cultural de
                la comarca.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                Organizamos festivales literarios, jornadas poéticas, visitas culturales y
                presentaciones de libros. Cada actividad es una invitación a descubrir, reflexionar
                y disfrutar en compañía.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed">
                Colaboramos con bibliotecas, ayuntamientos, centros educativos y libreros locales
                para tejer una red cultural viva que beneficie a toda la comunidad.
              </p>
            </div>
            <div className="bg-[#1a3a28] rounded-2xl p-10 text-white">
              <h3 className="font-serif text-2xl font-semibold mb-8 text-[#e8c980]">
                Nuestros valores
              </h3>
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="text-[#a8c5b0] mt-0.5 flex-shrink-0">{v.icon}</div>
                    <div>
                      <h4 className="font-sans font-semibold text-white mb-1">{v.title}</h4>
                      <p className="font-sans text-sm text-[#a8c5b0] leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia / Timeline */}
      <section className="py-20 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
              Nuestra trayectoria
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a3a28]">Historia</h2>
            <div className="w-16 h-0.5 bg-[#c4893a] mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-20 top-0 bottom-0 w-px bg-[#e0d5c8] hidden sm:block" />

            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-serif text-2xl font-bold text-[#c4893a]">{m.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-3 h-3 rounded-full bg-[#c4893a] mt-2 -ml-1.5 border-2 border-white" />
                  <p className="font-sans text-[#3a3a35] leading-relaxed pt-0.5 sm:pt-0">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-[#f5efe6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-3">
              Las personas detrás
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#1a3a28]">La junta directiva</h2>
            <div className="w-16 h-0.5 bg-[#c4893a] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((person) => (
              <div key={person.name} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-[#1a3a28] text-white flex items-center justify-center font-serif text-xl font-bold mx-auto mb-3 group-hover:bg-[#c4893a] transition-colors">
                  {person.initials}
                </div>
                <p className="font-sans font-semibold text-sm text-[#1a3a28]">{person.name}</p>
                <p className="font-sans text-xs text-[#5a5a55] mt-0.5">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a3a28] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Quieres colaborar?</h2>
          <p className="font-sans text-[#d4e8da] mb-8">
            Si compartes nuestra pasión por la cultura y los libros, te esperamos.
            Escríbenos y únete a nuestra comunidad.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors"
          >
            Ponerse en contacto
          </Link>
        </div>
      </section>
    </div>
  )
}
