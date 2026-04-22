export default function ExposicionPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-lg p-12 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-crimson font-bold mb-6">
              Exposición Mariano Maresca
            </h1>
            <p className="text-xl text-zinc-300 mb-8 font-libre leading-relaxed">
              Memoria Viva de la Cultura Granadina
            </p>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              Una exposición única que recorre la vida y obra de Mariano Maresca, editor de Olvidosdegranada y figura fundamental de la cultura granadina.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Lugar:</span> Hospital Real, Universidad de Granada
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Fechas:</span> Próximamente
              </div>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <section id="ubicacion" className="mb-16">
          <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-8">
            Ubicación y horario
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Venue Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-2">
                    Hospital Real
                  </h3>
                  <p className="text-zinc-600 font-libre">Universidad de Granada</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Dirección</h4>
                  <p className="text-zinc-700 font-libre">Calle Cuesta del Hospicio, s/n, 18001 Granada</p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">Cómo llegar</h4>
                  <ul className="text-zinc-700 font-libre space-y-1 text-sm">
                    <li>• Autobús: Líneas 4, 8, 11, 21, 33</li>
                    <li>• Metro: Estación Hospital Real (próximamente)</li>
                    <li>• A pie: 10 min desde el centro</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div id="horario" className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-2">
                    Horario
                  </h3>
                  <p className="text-zinc-600 font-libre">Horarios de visita</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-700 font-libre">Lunes a viernes</span>
                  <span className="text-zinc-900 font-semibold font-libre">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-700 font-libre">Sábados</span>
                  <span className="text-zinc-900 font-semibold font-libre">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-700 font-libre">Domingos y festivos</span>
                  <span className="text-zinc-900 font-semibold font-libre">Cerrado</span>
                </div>
                <div className="pt-4 border-t border-zinc-200">
                  <p className="text-sm text-zinc-600 font-libre">
                    * Visitas guiadas disponibles previa reserva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exhibition Sections */}
        <section className="mb-16">
          <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-8">
            Contenido de la exposición
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sala de Entrada',
                description: 'Timeline visual y contexto histórico de la vida de Mariano Maresca.',
                icon: '🚪',
              },
              {
                title: 'Sala Olvidosdegranada',
                description: 'La revista como archivo vivo: editoriales, artículos y colaboraciones.',
                icon: '📖',
              },
              {
                title: 'Sala Interdisciplinar',
                description: 'Las 7 disciplinas artísticas: literatura, música, cine, fotografía, arquitectura, diseño y cómic.',
                icon: '🎨',
              },
              {
                title: 'Sala Interactiva',
                description: 'Multimedia y experiencias auditivas: entrevistas, música, proyecciones.',
                icon: '🎧',
              },
              {
                title: 'Sala Documental',
                description: 'Archivos originales, manuscritos, correspondencia y fotografías.',
                icon: '📜',
              },
              {
                title: 'Sala de Recursos',
                description: 'Bibliografía, documentos digitales y materiales de consulta.',
                icon: '📚',
              },
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                  <h3 className="text-xl font-crimson font-bold text-zinc-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-zinc-700 font-libre leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Curators and Organization */}
        <section className="mb-16">
          <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-8">
            Comisariado y organización
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Curators */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-6">
                Comisarios
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mr-4 font-crimson font-bold">
                    MM
                  </div>
                  <div>
                    <p className="text-zinc-900 font-semibold font-libre">Mariano Maresca (póstumo)</p>
                    <p className="text-zinc-600 text-sm font-libre">Comisario honorífico</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-700 text-white rounded-full flex items-center justify-center mr-4 font-crimson font-bold">
                    JB
                  </div>
                  <div>
                    <p className="text-zinc-900 font-semibold font-libre">Javier Benítez</p>
                    <p className="text-zinc-600 text-sm font-libre">Comisario principal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-6">
                Organización
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-zinc-700 font-libre">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Universidad de Granada
                </li>
                <li className="flex items-start text-zinc-700 font-libre">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hospital Real
                </li>
                <li className="flex items-start text-zinc-700 font-libre">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Revista Olvidosdegranada
                </li>
                <li className="flex items-start text-zinc-700 font-libre">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Colaboradores y amigos de Mariano
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-crimson font-bold mb-4">
            ¿Quieres colaborar con la exposición?
          </h2>
          <p className="text-zinc-300 mb-8 font-libre max-w-2xl mx-auto">
            Si tienes material, recuerdos o documentos sobre Mariano Maresca que puedan enriquecer esta exposición,
            nos encantaría contar con tu colaboración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@marianomaresca.es"
              className="bg-white text-zinc-900 px-8 py-4 rounded-full font-libre font-semibold hover:bg-zinc-100 transition-colors"
            >
              Contactar con los comisarios
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-libre font-semibold hover:bg-white hover:text-zinc-900 transition-colors"
            >
              Más información sobre la colaboración
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
