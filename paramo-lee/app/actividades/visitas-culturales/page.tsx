import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Visitas culturales — El páramo lee',
  description: 'Rutas y excursiones culturales organizadas por la asociación El páramo lee para descubrir el patrimonio de la comarca.',
}

const routes = [
  {
    title: 'Ruta literaria por la comarca',
    desc: 'Recorremos los lugares que inspiraron a escritoras y escritores que nacieron o vivieron en el páramo. Historia y literatura a cada paso.',
    duration: '5–6 horas',
    difficulty: 'Fácil',
    transport: 'Autobús',
    badge: 'Popular',
    badgeColor: 'bg-[#c4893a] text-white',
  },
  {
    title: 'Visita al Monasterio de Santa María',
    desc: 'La biblioteca monástica y los scriptorium medievales como tesoros culturales. Guía especializada en historia del libro y la escritura.',
    duration: '3 horas',
    difficulty: 'Fácil',
    transport: 'Autobús',
    badge: 'Imperdible',
    badgeColor: 'bg-[#1a3a28] text-white',
  },
  {
    title: 'Museo de la Imprenta y el Libro',
    desc: 'Una visita a la historia de la imprenta y la evolución del libro desde los manuscritos hasta la era digital. Taller de encuadernación artesanal.',
    duration: '2,5 horas',
    difficulty: 'Fácil',
    transport: 'Autobús',
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Ruta arqueológica: el páramo antiguo',
    desc: 'Yacimientos y restos que cuentan la historia del territorio desde la prehistoria. Conectar con las raíces para entender el presente.',
    duration: '6 horas',
    difficulty: 'Moderada',
    transport: 'Autobús + tramo a pie',
    badge: 'Nuevo',
    badgeColor: 'bg-[#8b3a2a] text-white',
  },
]

export default function VisitasCulturalesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#c4893a] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/actividades" className="inline-flex items-center gap-2 text-[#fef7ed] text-sm font-sans hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Actividades
          </Link>
          <p className="font-sans text-[#fef7ed] text-xs tracking-widest uppercase mb-4">
            Actividades — Patrimonio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Visitas culturales
          </h1>
          <p className="font-sans text-[#fef7ed] text-lg max-w-2xl leading-relaxed">
            Cultura con los pies en la tierra. Rutas y excursiones guiadas para descubrir
            el patrimonio histórico, artístico y natural que nos rodea.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-5">
                Descubrir el territorio es también leer
              </h2>
              <p className="font-sans text-[#3a3a35] leading-relaxed mb-5">
                Las Visitas Culturales son uno de los programas más queridos de la asociación.
                Cada salida es una lectura diferente del paisaje, la historia y el arte. Una
                forma de comprender que el territorio también es texto.
              </p>
              <p className="font-sans text-[#3a3a35] leading-relaxed">
                Colaboramos con guías locales, historiadores, arqueólogos y expertos en
                patrimonio que convierten cada excursión en una experiencia enriquecedora
                e irrepetible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '30+', label: 'Rutas realizadas' },
                { value: '600+', label: 'Participantes totales' },
                { value: '8', label: 'Guías colaboradoras/es' },
                { value: 'Gratuitas', label: 'Para socias y socios' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-6 text-center border border-[#e0d5c8] shadow-sm">
                  <div className="font-serif text-3xl font-bold text-[#c4893a] mb-1">{s.value}</div>
                  <div className="font-sans text-xs text-[#5a5a55]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-16 bg-white border-t border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-10 text-center">
            Rutas y excursiones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((r) => (
              <div key={r.title} className="bg-[#faf6f0] rounded-2xl p-7 border border-[#e8e0d5] relative">
                {r.badge && (
                  <span className={`absolute top-5 right-5 text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${r.badgeColor}`}>
                    {r.badge}
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold text-[#1a3a28] mb-3 pr-20">
                  {r.title}
                </h3>
                <p className="font-sans text-sm text-[#5a5a55] leading-relaxed mb-5">{r.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs font-sans">
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e0d5c8] text-[#5a5a55]">
                    <svg className="w-3.5 h-3.5 text-[#c4893a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {r.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e0d5c8] text-[#5a5a55]">
                    <svg className="w-3.5 h-3.5 text-[#c4893a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    {r.difficulty}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e0d5c8] text-[#5a5a55]">
                    <svg className="w-3.5 h-3.5 text-[#c4893a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    {r.transport}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-16 bg-[#f5efe6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-5">
            ¿Cómo apuntarse?
          </h2>
          <p className="font-sans text-[#5a5a55] mb-10 max-w-xl mx-auto">
            Las plazas para cada visita son limitadas. Consúlta la agenda y reserva tu
            plaza a través del formulario de contacto o en nuestra sede.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agenda" className="px-8 py-4 bg-[#c4893a] hover:bg-[#a8722e] text-white font-sans font-semibold rounded-full transition-colors">
              Ver próximas visitas
            </Link>
            <Link href="/contacto" className="px-8 py-4 border-2 border-[#1a3a28] text-[#1a3a28] hover:bg-[#1a3a28] hover:text-white font-sans font-semibold rounded-full transition-colors">
              Reservar plaza
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
