import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-crimson font-bold mb-6 leading-tight">
              Mariano Maresca
            </h1>
            <p className="text-xl md:text-2xl font-libre text-zinc-300 mb-8 leading-relaxed">
              Memoria Viva de la Cultura Granadina
            </p>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-2xl">
              Editor de Olvidosdegranada, director de La Fábrica del Sur y productor cultural. Nació en Almería (1945) y falleció en Granada (2023). Su mesa habitual en el Botánico se convirtió en legendario punto de encuentro de la cultura granadina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/biografia" className="bg-white text-zinc-900 px-8 py-4 rounded-full font-libre font-semibold hover:bg-zinc-100 transition-colors text-center">
                Descubrir su biografía
              </Link>
              <Link href="/exposicion" className="border-2 border-white text-white px-8 py-4 rounded-full font-libre font-semibold hover:bg-white hover:text-zinc-900 transition-colors text-center">
                Información de la exposición
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Disciplines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-4 text-center">
            Las 7 Disciplinas Artísticas
          </h2>
          <p className="text-center text-zinc-600 mb-16 font-libre max-w-2xl mx-auto">
            Mariano Maresca trabajó incansablemente en múltiples manifestaciones artísticas que enriquecieron la vida cultural de Granada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Literatura', slug: 'literatura', icon: '📚', color: 'bg-amber-100 text-amber-800' },
              { name: 'Música', slug: 'musica', icon: '🎵', color: 'bg-blue-100 text-blue-800' },
              { name: 'Cine', slug: 'cine', icon: '🎬', color: 'bg-purple-100 text-purple-800' },
              { name: 'Fotografía', slug: 'fotografia', icon: '📸', color: 'bg-green-100 text-green-800' },
              { name: 'Arquitectura', slug: 'arquitectura', icon: '🏛️', color: 'bg-orange-100 text-orange-800' },
              { name: 'Diseño', slug: 'diseno', icon: '✨', color: 'bg-pink-100 text-pink-800' },
              { name: 'Cómic', slug: 'comic', icon: '💬', color: 'bg-indigo-100 text-indigo-800' },
              { name: 'Filosofía', slug: 'filosofia', icon: '🤔', color: 'bg-zinc-100 text-zinc-800' },
            ].map((discipline) => (
              <Link
                key={discipline.slug}
                href={`/disciplinas/${discipline.slug}`}
                className="group"
              >
                <div className="bg-zinc-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`text-4xl mb-4 ${discipline.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                    {discipline.icon}
                  </div>
                  <h3 className="text-xl font-crimson font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">
                    {discipline.name}
                  </h3>
                  <p className="text-sm text-zinc-600 font-libre">
                    Explorar proyectos y contribuciones
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Olvidosdegranada Section */}
      <section className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-6">
                Olvidosdegranada
              </h2>
              <p className="text-lg text-zinc-700 mb-6 leading-relaxed font-libre">
                Mariano Maresca fue el editor de la revista Olvidosdegranada, una publicación fundamental para la cultura de la ciudad desde 1984. Durante décadas, la revista ha sido un archivo vivo de la creación artística y cultural granadina.
              </p>
              <p className="text-zinc-600 mb-8 leading-relaxed font-libre">
                A través de sus páginas, Mariano dio voz a escritores, artistas, músicos y pensadores, construyendo un corpus documental invaluable que hoy seguimos consultando y valorando.
              </p>
              <Link
                href="https://olvidosdegranada.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-zinc-900 text-white px-8 py-4 rounded-full font-libre font-semibold hover:bg-zinc-800 transition-colors"
              >
                Visitar Olvidosdegranada.es
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="border-l-4 border-zinc-900 pl-6">
                  <h3 className="font-crimson font-semibold text-xl text-zinc-900 mb-2">
                    Editoriales
                  </h3>
                  <p className="text-zinc-600 font-libre text-sm">
                    Reflexiones sobre la cultura y la sociedad granadina
                  </p>
                </div>
                <div className="border-l-4 border-zinc-700 pl-6">
                  <h3 className="font-crimson font-semibold text-xl text-zinc-900 mb-2">
                    Palabras
                  </h3>
                  <p className="text-zinc-600 font-libre text-sm">
                    Ensayos, artículos y crónicas culturales
                  </p>
                </div>
                <div className="border-l-4 border-zinc-600 pl-6">
                  <h3 className="font-crimson font-semibold text-xl text-zinc-900 mb-2">
                    Piezas y Procesos
                  </h3>
                  <p className="text-zinc-600 font-libre text-sm">
                    Entrevistas y documentación de procesos creativos
                  </p>
                </div>
                <div className="border-l-4 border-zinc-500 pl-6">
                  <h3 className="font-crimson font-semibold text-xl text-zinc-900 mb-2">
                    Memoria de Granada
                  </h3>
                  <p className="text-zinc-600 font-libre text-sm">
                    Archivo histórico y recuperación de la memoria cultural
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-crimson font-bold text-zinc-900 mb-4 text-center">
            Proyectos Destacados
          </h2>
          <p className="text-center text-zinc-600 mb-16 font-libre max-w-2xl mx-auto">
            Algunas de las contribuciones más significativas de Mariano Maresca a la cultura granadina
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Festival de Tango',
                year: '1990-2023',
                description: 'Fundación y organización del festival que llevó el tango a las calles de Granada.',
                category: 'Música',
              },
              {
                title: 'Disco Omega de Morente',
                year: '2008',
                description: 'Contribución crítica y divulgativa en este álbum seminal del flamenco.',
                category: 'Música',
              },
              {
                title: 'Rimado de Ciudad de TNT',
                year: '1994',
                description: 'Proyecto poético y visual que fusionó literatura y arte urbano.',
                category: 'Literatura',
              },
              {
                title: 'Letra Clara en la Facultad de Letras',
                year: '1980-1990',
                description: 'Serie de conferencias y encuentros literarios que marcaron una generación.',
                category: 'Literatura',
              },
              {
                title: 'Archivo de Fotografía Granadina',
                year: '1985-2023',
                description: 'Recopilación y preservación de la historia visual de Granada.',
                category: 'Fotografía',
              },
              {
                title: 'Crítica de Arquitectura',
                year: '1978-2023',
                description: 'Análisis y divulgación del urbanismo y la arquitectura granadina.',
                category: 'Arquitectura',
              },
            ].map((project, index) => (
              <div key={index} className="bg-zinc-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-libre font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-zinc-500 font-libre">{project.year}</span>
                </div>
                <h3 className="text-2xl font-crimson font-semibold text-zinc-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 font-libre leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition CTA */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-crimson font-bold mb-6">
            Proyecto de Exposición 2026
          </h2>
          <p className="text-xl text-zinc-300 mb-8 font-libre max-w-2xl mx-auto">
            Una oportunidad única para conocer en profundidad la vida y obra de Mariano Maresca a través de documentos, fotografías, multimedia y experiencias interactivas.
          </p>
          <Link
            href="/exposicion"
            className="inline-block bg-white text-zinc-900 px-8 py-4 rounded-full font-libre font-semibold hover:bg-zinc-100 transition-colors"
          >
            Información del proyecto
          </Link>
        </div>
      </section>
    </div>
  )
}
