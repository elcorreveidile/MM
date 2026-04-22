export default function BiographyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-4">
            Biografía
          </h1>
          <p className="text-xl text-zinc-600 font-libre max-w-3xl">
            La vida y obra de Mariano Maresca, profesor, editor y figura fundamental de la cultura granadina
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main biography text */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-crimson font-bold text-zinc-900 mb-6">
                Una vida dedicada a la cultura
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-zinc-700 leading-relaxed mb-4 font-libre">
                  Mariano Maresca fue profesor de Filosofía del Derecho en la Universidad de Granada, pero su labor trascendió el ámbito académico para convertirse en una de las figuras más influyentes de la cultura granadina contemporánea.
                </p>
                <p className="text-zinc-700 leading-relaxed mb-4 font-libre">
                  Desde finales de los años 60 hasta su fallecimiento en 2023, Maresca trabajó incansablemente en múltiples disciplinas artísticas y culturales, dejando una huella imborrable en la ciudad que tanto amó.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Como editor de la revista Olvidosdegranada, creó un archivo vivo de la memoria cultural granadina, dando voz a escritores, artistas, músicos y pensadores que de otra manera habrían quedado en el olvido.
                </p>
              </div>
            </section>

            {/* Early Life and Education */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-crimson font-bold text-zinc-900 mb-6">
                Formación y primeros años
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Mariano Maresca nació en Granada, donde desarrolló desde joven una pasión por la filosofía, el arte y la literatura. Su formación académica le llevó a especializarse en Filosofía del Derecho, disciplina que ejerció como profesor en la Universidad de Granada.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Sin embargo, su interés por las manifestaciones artísticas y culturales trascendió el ámbito puramente académico, llevándole a involucrarse activamente en la vida cultural de la ciudad desde muy joven.
                </p>
              </div>
            </section>

            {/* Professional Career */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-crimson font-bold text-zinc-900 mb-6">
                Trayectoria profesional
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-crimson font-semibold text-zinc-900 mb-3">
                    Profesor de Filosofía del Derecho
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-libre">
                    Como profesor universitario, Maresca formó a generaciones de juristas, transmitiendo no solo conocimientos teóricos sino también una visión crítica y comprometida del derecho y la justicia.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-crimson font-semibold text-zinc-900 mb-3">
                    Editor de Olvidosdegranada
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-libre">
                    En 1984 comenzó a publicarse la revista Olvidos de Granada, convirtiéndose Maresca en su editor principal. Durante décadas, la revista ha sido un referente ineludible para entender la cultura granadina, publicando artículos, ensayos, entrevistas y documentos que han construido un archivo invaluable.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-crimson font-semibold text-zinc-900 mb-3">
                    Comisario y promotor cultural
                  </h3>
                  <p className="text-zinc-700 leading-relaxed font-libre">
                    Más allá de su labor editorial, Maresca organizó y comisarió numerosos eventos culturales, desde conciertos de tango hasta exposiciones de fotografía, ciclos de cine y presentaciones de libros.
                  </p>
                </div>
              </div>
            </section>

            {/* Legacy */}
            <section className="bg-zinc-900 text-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-crimson font-bold mb-6">
                Legado y reconocimiento
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4 font-libre">
                El legado de Mariano Maresca es inmenso y diverso. A través de Olvidosdegranada y sus innumerables proyectos culturales, construyó un archivo de la memoria granadina que sigue siendo referencia obligada para investigadores, artistas y amantes de la cultura.
              </p>
              <p className="text-zinc-300 leading-relaxed font-libre">
                Esta exposición, que tendrá lugar en el Hospital Real de la Universidad de Granada, pretende rendir homenaje a su figura y recuperar su importancia para las generaciones presentes y futuras.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-crimson font-bold text-zinc-900 mb-4">
                Datos clave
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-semibold text-zinc-600">Nacimiento</dt>
                  <dd className="text-zinc-900 font-libre">Finales de los años 60</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-zinc-600">Fallecimiento</dt>
                  <dd className="text-zinc-900 font-libre">2023</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-zinc-600">Profesión</dt>
                  <dd className="text-zinc-900 font-libre">Profesor de Filosofía del Derecho</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-zinc-600">Proyecto principal</dt>
                  <dd className="text-zinc-900 font-libre">Editor de Olvidosdegranada</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-zinc-600">Lugar de actividad</dt>
                  <dd className="text-zinc-900 font-libre">Granada, España</dd>
                </div>
              </dl>
            </div>

            {/* Disciplines */}
            <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-crimson font-bold text-zinc-900 mb-4">
                Áreas de trabajo
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Literatura
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Música
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Cine
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Fotografía
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Arquitectura
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Diseño
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Cómic
                </li>
                <li className="flex items-center text-zinc-700 font-libre">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-2"></span>
                  Filosofía del Derecho
                </li>
              </ul>
            </div>

            {/* Featured Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-crimson font-bold text-zinc-900 mb-4">
                Proyectos destacados
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
                    Festival de Tango de Granada
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
                    Disco Omega de Morente
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
                    Rimado de Ciudad de TNT
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
                    Letra Clara en la Facultad de Letras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
                    Archivo de Fotografía Granadina
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
