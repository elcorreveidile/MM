import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — El páramo lee',
  description: 'Ponte en contacto con la asociación cultural El páramo lee.',
}

const reasons = [
  'Quiero hacerme socia/socio',
  'Quiero proponer una actividad',
  'Quiero presentar mi libro',
  'Quiero colaborar como voluntaria/voluntario',
  'Tengo una pregunta sobre un evento',
  'Otro',
]

export default function ContactoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a3a28] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-[#a8c5b0] text-xs tracking-widest uppercase mb-4">
            Hablemos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="font-sans text-[#d4e8da] text-lg max-w-2xl leading-relaxed">
            ¿Quieres unirte, colaborar, proponer una actividad o simplemente saber más?
            Escríbenos. Respondemos con mucho gusto.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl font-bold text-[#1a3a28] mb-8">
                Envíanos un mensaje
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-sm font-semibold text-[#3a3a35] mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#d0c8bc] bg-white font-sans text-sm text-[#1c1c1a] focus:outline-none focus:border-[#2d5a3d] focus:ring-1 focus:ring-[#2d5a3d] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-semibold text-[#3a3a35] mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#d0c8bc] bg-white font-sans text-sm text-[#1c1c1a] focus:outline-none focus:border-[#2d5a3d] focus:ring-1 focus:ring-[#2d5a3d] transition-colors"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-semibold text-[#3a3a35] mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#d0c8bc] bg-white font-sans text-sm text-[#1c1c1a] focus:outline-none focus:border-[#2d5a3d] focus:ring-1 focus:ring-[#2d5a3d] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-semibold text-[#3a3a35] mb-2">
                    Motivo de contacto
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#d0c8bc] bg-white font-sans text-sm text-[#1c1c1a] focus:outline-none focus:border-[#2d5a3d] focus:ring-1 focus:ring-[#2d5a3d] transition-colors">
                    <option value="">Selecciona un motivo</option>
                    {reasons.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-sm font-semibold text-[#3a3a35] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0c8bc] bg-white font-sans text-sm text-[#1c1c1a] focus:outline-none focus:border-[#2d5a3d] focus:ring-1 focus:ring-[#2d5a3d] transition-colors resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 rounded border-[#d0c8bc] accent-[#2d5a3d]"
                  />
                  <label htmlFor="privacy" className="font-sans text-sm text-[#5a5a55]">
                    He leído y acepto la{' '}
                    <span className="text-[#2d5a3d] underline cursor-pointer">
                      política de privacidad
                    </span>
                    . Mis datos se usarán únicamente para responder a este mensaje.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#1a3a28] hover:bg-[#2d5a3d] text-white font-sans font-semibold rounded-full transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="bg-[#1a3a28] rounded-2xl p-8 text-white">
                <h3 className="font-serif text-xl font-semibold text-[#e8c980] mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-5 font-sans text-sm text-[#d4e8da]">
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-semibold mb-1">Sede</p>
                      <p>Biblioteca Municipal de El Páramo</p>
                      <p>C/ Mayor, 12, El Páramo</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-white font-semibold mb-1">Email</p>
                      <p>hola@elparamole.es</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 text-[#a8c5b0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-white font-semibold mb-1">Horario de atención</p>
                      <p>Martes y jueves, 17:00 – 20:00 h</p>
                      <p>Sábados, 10:00 – 13:00 h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Membership */}
              <div className="bg-[#f5efe6] rounded-2xl p-8 border border-[#e0d5c8]">
                <h3 className="font-serif text-xl font-semibold text-[#1a3a28] mb-4">
                  Hazte socia o socio
                </h3>
                <p className="font-sans text-sm text-[#5a5a55] leading-relaxed mb-5">
                  La cuota anual de la asociación es de <strong className="text-[#1a3a28]">25 €</strong>. Las socias y socios
                  disfrutan de acceso preferente a talleres y actividades con plazas limitadas,
                  descuentos en colaboradores locales y la newsletter mensual.
                </p>
                <div className="space-y-2 font-sans text-sm text-[#3a3a35]">
                  {[
                    'Acceso preferente a talleres',
                    'Descuentos en librerías colaboradoras',
                    'Newsletter mensual',
                    'Voto en la asamblea anual',
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#2d5a3d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d5]">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-[#5a5a55] mb-4">
                  Síguenos en redes
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-sans text-[#3a3a35] hover:text-[#1a3a28] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-sans text-[#3a3a35] hover:text-[#1a3a28] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
