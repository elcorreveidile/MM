import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agenda — El páramo lee',
  description: 'Próximos eventos de la asociación cultural El páramo lee: festivales, poesía, visitas y presentaciones de libros.',
}

type EventType = 'festival' | 'poesia' | 'visita' | 'presentacion'

interface Event {
  id: number
  date: string
  time: string
  title: string
  type: EventType
  location: string
  description: string
  free: boolean
  seats?: number
}

const events: Event[] = [
  {
    id: 1,
    date: '2025-05-14',
    time: '10:00',
    title: 'Festival del Libro del Páramo — XV Edición',
    type: 'festival',
    location: 'Plaza Mayor y Casa de la Cultura',
    description: 'Dos días de literatura, feria del libro, charlas con autoras e invitados y talleres para todos los públicos.',
    free: true,
  },
  {
    id: 2,
    date: '2025-05-21',
    time: '20:00',
    title: 'Noche de Poesía: Voces del páramo',
    type: 'poesia',
    location: 'Casa de la Cultura',
    description: 'Recital con cuatro poetas contemporáneas que han hecho del territorio y la memoria el eje de su escritura.',
    free: true,
    seats: 80,
  },
  {
    id: 3,
    date: '2025-06-03',
    time: '09:00',
    title: 'Ruta literaria por la comarca',
    type: 'visita',
    location: 'Salida desde la Biblioteca Municipal',
    description: 'Recorremos los lugares que inspiraron a escritoras y escritores de la comarca. Guía especializada incluida.',
    free: false,
    seats: 25,
  },
  {
    id: 4,
    date: '2025-06-10',
    time: '19:30',
    title: 'Presentación: "Raíces en el viento" de Carmen Valverde',
    type: 'presentacion',
    location: 'Biblioteca Municipal',
    description: 'La autora presenta su última novela sobre memoria familiar y desarraigo. Coloquio abierto y firma de ejemplares.',
    free: true,
    seats: 60,
  },
  {
    id: 5,
    date: '2025-06-21',
    time: '19:00',
    title: 'Slam Poetry — Edición verano',
    type: 'poesia',
    location: 'Patio del Ayuntamiento',
    description: 'Competición abierta de poesía oral. Inscripción como participante o asistencia como público. El páramo grita sus versos.',
    free: true,
  },
  {
    id: 6,
    date: '2025-07-05',
    time: '10:30',
    title: 'Visita al Monasterio de Santa María',
    type: 'visita',
    location: 'Monasterio de Santa María — Villanueva',
    description: 'Biblioteca monástica y scriptorium medieval. Un viaje a los orígenes del libro. Guía especializada en historia.',
    free: false,
    seats: 20,
  },
  {
    id: 7,
    date: '2025-07-18',
    time: '20:30',
    title: 'Taller de escritura creativa: relato corto',
    type: 'festival',
    location: 'Biblioteca Municipal',
    description: '4 sesiones para explorar el arte del relato corto. Dirigido por la escritora Lourdes Arias. Inscripción previa.',
    free: false,
    seats: 15,
  },
  {
    id: 8,
    date: '2025-09-15',
    time: '19:30',
    title: 'Presentación: "Piedra y cielo" de Lourdes Arias',
    type: 'presentacion',
    location: 'Librería El Páramo (sede)',
    description: 'Presentación del segundo poemario de Lourdes Arias, una voz imprescindible de la nueva poesía española.',
    free: true,
  },
]

const typeConfig: Record<EventType, { label: string; color: string; bg: string; border: string }> = {
  festival: { label: 'Festival literario', color: 'text-white', bg: 'bg-[#1a3a28]', border: 'border-[#1a3a28]' },
  poesia: { label: 'Jornada poética', color: 'text-white', bg: 'bg-[#8b3a2a]', border: 'border-[#8b3a2a]' },
  visita: { label: 'Visita cultural', color: 'text-white', bg: 'bg-[#c4893a]', border: 'border-[#c4893a]' },
  presentacion: { label: 'Presentación de libro', color: 'text-white', bg: 'bg-[#2d5a3d]', border: 'border-[#2d5a3d]' },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

function getDay(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').getDate().toString()
}

function getMonth(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('es-ES', { month: 'short' }).toUpperCase()
}

export default function AgendaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a28] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-[#a8c5b0] text-xs tracking-widest uppercase mb-4">
            Próximos eventos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Agenda
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            Todos los eventos de El páramo lee para los próximos meses. Apunta los que no
            quieres perderte y reserva tu plaza cuando sea necesario.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="bg-white border-b border-[#e8e0d5] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-sans text-xs text-[#5a5a55] uppercase tracking-widest mr-2">
              Tipo:
            </span>
            {(Object.entries(typeConfig) as [EventType, typeof typeConfig[EventType]][]).map(([, cfg]) => (
              <span
                key={cfg.label}
                className={`font-sans text-xs font-semibold px-3 py-1 rounded-full ${cfg.bg} ${cfg.color}`}
              >
                {cfg.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {events.map((ev) => {
            const cfg = typeConfig[ev.type]
            return (
              <article
                key={ev.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e0d5] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date column */}
                  <div className={`${cfg.bg} sm:w-24 flex sm:flex-col items-center justify-center p-4 sm:p-5 gap-3 sm:gap-0`}>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-white leading-none">
                      {getDay(ev.date)}
                    </div>
                    <div className="font-sans text-xs text-white opacity-80 tracking-widest sm:mt-1">
                      {getMonth(ev.date)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className={`font-sans text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
                          {cfg.label}
                        </span>
                        {ev.free ? (
                          <span className="font-sans text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#eef5f0] text-[#2d5a3d] border border-[#b0d4ba]">
                            Entrada libre
                          </span>
                        ) : (
                          <span className="font-sans text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#fef7ed] text-[#8b5e1a] border border-[#e8c980]">
                            Inscripción previa
                          </span>
                        )}
                      </div>
                      {ev.seats && (
                        <span className="font-sans text-xs text-[#5a5a55]">
                          Aforo: {ev.seats} plazas
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl font-semibold text-[#1a3a28] mb-2">
                      {ev.title}
                    </h2>
                    <p className="font-sans text-sm text-[#5a5a55] leading-relaxed mb-4">
                      {ev.description}
                    </p>

                    <div className="flex flex-wrap gap-5 text-sm font-sans text-[#5a5a55]">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#c4893a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDate(ev.date)}, {ev.time} h
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#c4893a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {ev.location}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex sm:flex-col items-center justify-end sm:justify-center border-t sm:border-t-0 sm:border-l border-[#e8e0d5] p-4 sm:p-6 gap-3">
                    <Link
                      href="/contacto"
                      className={`text-center px-5 py-2.5 text-sm font-sans font-semibold rounded-full transition-colors ${
                        ev.free
                          ? 'bg-[#1a3a28] hover:bg-[#2d5a3d] text-white'
                          : 'bg-[#c4893a] hover:bg-[#a8722e] text-white'
                      }`}
                    >
                      {ev.free ? 'Más info' : 'Reservar'}
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-[#1a3a28] text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4">
            No te pierdas ningún evento
          </h2>
          <p className="font-sans text-[#d4e8da] mb-8">
            Suscríbete a nuestra newsletter y recibe la agenda mensual directamente
            en tu correo electrónico.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-[#2d5a3d] border border-[#5a8a6a] text-white placeholder-[#5a8a6a] font-sans text-sm focus:outline-none focus:border-[#e8c980]"
            />
            <button className="px-6 py-3 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors text-sm">
              Suscribirme
            </button>
          </div>
          <p className="mt-3 text-xs text-[#5a8a6a] font-sans">
            Sin spam. Cancelación en cualquier momento.
          </p>
        </div>
      </section>
    </div>
  )
}
