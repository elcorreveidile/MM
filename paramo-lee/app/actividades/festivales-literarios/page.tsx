import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Festivales literarios — El páramo lee',
  description: 'El Festival Literario del Páramo: encuentros anuales que reúnen autores, lectores y la comunidad en torno a los libros.',
}

const pastEditions = [
  { year: '2024', theme: 'Raíces y memoria', guests: 'Ana Merino, Marcos Giralt Torrente, Elvira Navarro', attendance: '1.200 asistentes' },
  { year: '2023', theme: 'Voces del margen', guests: 'Cristina Morales, Edurne Portela, Ander Izagirre', attendance: '980 asistentes' },
  { year: '2022', theme: 'El tiempo y la palabra', guests: 'Almudena Sánchez, Care Santos, Sergio del Molino', attendance: '850 asistentes' },
]

const program = [
  { time: '10:00', event: 'Apertura oficial e inauguración de la Feria del Libro' },
  { time: '11:00', event: 'Mesa redonda: "La literatura rural en el siglo XXI"' },
  { time: '12:30', event: 'Taller de escritura creativa para adultos (inscripción previa)' },
  { time: '16:00', event: 'Lectura en voz alta: autoras y autores invitados' },
  { time: '18:00', event: 'Presentación del libro del festival' },
  { time: '19:30', event: 'Recital poético y clausura musical' },
]

export default function FestivalesLiterariosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a28] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/actividades" className="inline-flex items-center gap-2 text-[#a8c5b0] text-sm font-sans hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Actividades
          </Link>
          <p className="font-sans text-[#a8c5b0] text-xs tracking-widest uppercase mb-4">
            Actividades — Festival
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Festivales literarios
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            La gran fiesta anual de la palabra. Un fin de semana completo dedicado a la
            literatura, los libros y las personas que los hacen posibles.
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-6">
                Qué es el Festival Literario del Páramo
              </h2>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                Cada otoño, el páramo se convierte en capital literaria durante dos días. El Festival
                Literario del Páramo reúne a escritoras y escritores de toda España, editoras,
                libreras y, sobre todo, a miles de lectoras y lectores que disfrutan de una
                programación pensada para todos los públicos y edades.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                El festival nació en 2011 con la vocación de acercar la literatura a la gente de la
                comarca y, desde entonces, no ha dejado de crecer. Hoy es uno de los festivales
                literarios de referencia en la región.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed">
                La programación incluye charlas con autoras e invitados, mesas redondas temáticas,
                talleres de escritura, recitales poéticos, feria del libro con libreras locales y
                una velada musical de cierre que convierte las palabras en música.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-[#1a3a28] text-white rounded-2xl p-7">
                <h3 className="font-serif text-xl font-semibold text-[#e8c980] mb-5">
                  Próxima edición
                </h3>
                <div className="space-y-3 font-sans text-sm text-[#d4e8da]">
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>14–15 de octubre de 2025</span>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>Plaza Mayor y Casa de la Cultura</span>
                  </div>
                  <div className="flex gap-3">
                    <svg className="w-4 h-4 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Entrada gratuita</span>
                  </div>
                </div>
                <Link
                  href="/agenda"
                  className="mt-6 block text-center px-5 py-2.5 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold text-sm rounded-full transition-colors"
                >
                  Ver en la agenda
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-[#e8e0d5]">
                <h3 className="font-sans font-semibold text-xs uppercase tracking-widest text-[#5a5a55] mb-4">
                  Datos del festival
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Ediciones', value: '14' },
                    { label: 'Autores invitados acumulados', value: '+80' },
                    { label: 'Actividades por edición', value: '20+' },
                    { label: 'Asistentes máximos', value: '1.200' },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b border-[#f0ebe3]">
                      <span className="font-sans text-sm text-[#5a5a55]">{s.label}</span>
                      <span className="font-serif text-xl font-bold text-[#1a3a28]">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programa tipo */}
      <section className="py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-2 text-center">
            Programa tipo
          </h2>
          <p className="font-sans text-sm text-[#5a5a55] text-center mb-10">
            Ejemplo de programación de una jornada del festival
          </p>
          <div className="space-y-3">
            {program.map((p) => (
              <div key={p.time} className="flex items-center gap-5 bg-[#faf6f0] rounded-xl px-6 py-4">
                <span className="font-mono text-[#c4893a] font-bold text-sm w-14 flex-shrink-0">
                  {p.time}
                </span>
                <span className="font-sans text-[#3a3a35] text-sm">{p.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ediciones anteriores */}
      <section className="py-16 bg-[#f5efe6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-10 text-center">
            Ediciones anteriores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEditions.map((e) => (
              <div key={e.year} className="bg-white rounded-2xl p-7 border border-[#e0d5c8]">
                <div className="font-serif text-4xl font-bold text-[#c4893a] mb-2">{e.year}</div>
                <h3 className="font-serif text-xl font-semibold text-[#1a3a28] mb-3">
                  "{e.theme}"
                </h3>
                <p className="font-sans text-sm text-[#5a5a55] mb-2">
                  <span className="font-semibold text-[#3a3a35]">Invitados: </span>{e.guests}
                </p>
                <p className="font-sans text-xs text-[#5a8a6a] font-semibold">{e.attendance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1a3a28] text-center text-white">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">¿Te lo vas a perder?</h2>
          <p className="font-sans text-[#d4e8da] mb-8">Apunta la fecha y cuéntaselo a quien quieras.</p>
          <Link href="/agenda" className="inline-block px-8 py-4 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors">
            Ver la agenda
          </Link>
        </div>
      </section>
    </div>
  )
}
