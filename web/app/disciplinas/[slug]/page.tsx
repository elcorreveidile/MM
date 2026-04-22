import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const disciplinasInfo: Record<string, { title: string; description: string }> = {
    literatura: {
      title: 'Literatura - Mariano Maresca',
      description: 'Contribuciones de Mariano Maresca a la literatura granadina: Rimado de Ciudad, Letra Clara, y la otra sentimentalidad'
    },
    musica: {
      title: 'Música - Mariano Maresca',
      description: 'Festival de Tango de Granada, disco Omega de Morente, y contribuciones a la música granadina'
    },
    cine: {
      title: 'Cine - Mariano Maresca',
      description: 'Crítica cinematográfica, ciclos de cine, y contribuciones al cine en Granada'
    },
    fotografia: {
      title: 'Fotografía - Mariano Maresca',
      description: 'Archivo de Fotografía Granadina, crítica fotográfica, y exposiciones'
    },
    arquitectura: {
      title: 'Arquitectura - Mariano Maresca',
      description: 'Crítica de arquitectura, urbanismo, y contribuciones al diseño arquitectónico en Granada'
    },
    diseno: {
      title: 'Diseño - Mariano Maresca',
      description: 'Diseño editorial, identidad visual, y contribuciones al diseño gráfico'
    },
    comic: {
      title: 'Cómic - Mariano Maresca',
      description: 'Investigación, divulgación y contribuciones al mundo del cómic en Granada'
    },
    filosofia: {
      title: 'Filosofía del Derecho - Mariano Maresca',
      description: 'Trayectoria académica como profesor de Filosofía del Derecho en la Universidad de Granada'
    }
  }

  const info = disciplinasInfo[params.slug] || {
    title: `${params.slug} - Mariano Maresca`,
    description: `Contribuciones de Mariano Maresca al ${params.slug}`
  }

  return {
    title: info.title,
    description: info.description
  }
}

export default function DisciplinaPage({ params }: { params: { slug: string } }) {
  const disciplinasData: Record<string, {
    nombre: string
    descripcion: string
    contenido: string[]
    proyectos: Array<{ nombre: string; año: string; descripcion: string }>
    icono: string
    color: string
  }> = {
    literatura: {
      nombre: 'Literatura',
      descripcion: 'Mariano Maresca desarrolló una labor fundamental en el ámbito literario granadino, tanto como crítico como promotor de autores y proyectos.',
      contenido: [
        'Rimado de Ciudad de TNT (1994): Proyecto poético y visual que fusionó literatura y arte urbano',
        'Letra Clara en la Facultad de Letras: Serie de conferencias y encuentros literarios',
        'Crítica literaria y ensayos publicados en Olvidosdegranada',
        'Promoción de "la otra sentimentalidad" con autores como Javier Egea, Juan Vida y Álvaro Salvador'
      ],
      proyectos: [
        { nombre: 'Rimado de Ciudad de TNT', año: '1994', descripcion: 'Proyecto poético y visual' },
        { nombre: 'Letra Clara', año: '1980-1990', descripcion: 'Conferencias literarias en la Facultad de Letras' },
        { nombre: 'Crítica literaria', año: '1982-2023', descripcion: 'Ensayos y artículos en Olvidosdegranada' }
      ],
      icono: '📚',
      color: 'bg-amber-100 text-amber-800'
    },
    musica: {
      nombre: 'Música',
      descripcion: 'La contribución de Maresca a la música granadina fue monumental, especialmente a través del Festival de Tango y su trabajo con Enrique Morente.',
      contenido: [
        'Festival de Tango de Granada (1990-2023): Evento que llevó el tango a las calles de la ciudad durante más de tres décadas',
        'Disco Omega de Morente (2008): Contribución crítica y divulgativa en este álbum seminal del flamenco',
        'Crítica musical y divulgación en Olvidosdegranada',
        'Organización de conciertos y eventos musicales'
      ],
      proyectos: [
        { nombre: 'Festival de Tango de Granada', año: '1990-2023', descripcion: 'Festival anual de tango' },
        { nombre: 'Disco Omega de Morente', año: '2008', descripcion: 'Contribución crítica y divulgativa' },
        { nombre: 'Conciertos y eventos', año: '1982-2023', descripcion: 'Organización de eventos musicales' }
      ],
      icono: '🎵',
      color: 'bg-blue-100 text-blue-800'
    },
    cine: {
      nombre: 'Cine',
      descripcion: 'Maresca contribuyó al cine granadino a través de la crítica, la organización de ciclos y la promoción del cine de autor.',
      contenido: [
        'Crítica cinematográfica en Olvidosdegranada',
        'Organización de ciclos de cine',
        'Proyecciones y eventos cinematográficos',
        'Ensayos sobre teoría cinematográfica'
      ],
      proyectos: [
        { nombre: 'Ciclos de cine', año: '1985-2023', descripcion: 'Organización de ciclos cinematográficos' },
        { nombre: 'Crítica de cine', año: '1982-2023', descripcion: 'Artículos y ensayos cinematográficos' }
      ],
      icono: '🎬',
      color: 'bg-purple-100 text-purple-800'
    },
    fotografia: {
      nombre: 'Fotografía',
      descripcion: 'El archivo de fotografía granadina que Maresca contribuyó a crear es una referencia fundamental para entender la historia visual de la ciudad.',
      contenido: [
        'Archivo de Fotografía Granadina: Recopilación y preservación de la historia visual',
        'Crítica fotográfica en Olvidosdegranada',
        'Organización de exposiciones fotográficas',
        'Investigación sobre fotografía granadina'
      ],
      proyectos: [
        { nombre: 'Archivo de Fotografía Granadina', año: '2010-2023', descripcion: 'Recopilación histórica' },
        { nombre: 'Exposiciones fotográficas', año: '1985-2023', descripcion: 'Comisariado de exposiciones' }
      ],
      icono: '📸',
      color: 'bg-green-100 text-green-800'
    },
    arquitectura: {
      nombre: 'Arquitectura',
      descripcion: 'La crítica arquitectónica de Maresca contribuyó al debate sobre el urbanismo y la arquitectura de Granada.',
      contenido: [
        'Crítica de arquitectura y urbanismo',
        'Ensayos sobre el espacio público granadino',
        'Análisis de intervenciones arquitectónicas',
        'Debate sobre la transformación de la ciudad'
      ],
      proyectos: [
        { nombre: 'Crítica arquitectónica', año: '1978-2023', descripcion: 'Análisis de arquitectura y urbanismo' },
        { nombre: 'Espacio público', año: '1980-2023', descripcion: 'Ensayos sobre la ciudad' }
      ],
      icono: '🏛️',
      color: 'bg-orange-100 text-orange-800'
    },
    diseno: {
      nombre: 'Diseño',
      descripcion: 'Maresca contribuyó al diseño gráfico y editorial a través de su trabajo en Olvidosdegranada y otros proyectos.',
      contenido: [
        'Diseño editorial de Olvidosdegranada',
        'Identidad visual de proyectos culturales',
        'Crítica de diseño',
        'Promoción del diseño granadino'
      ],
      proyectos: [
        { nombre: 'Diseño Olvidosdegranada', año: '1982-2023', descripcion: 'Diseño editorial' },
        { nombre: 'Identidad visual', año: '1982-2023', descripcion: 'Proyectos de identidad visual' }
      ],
      icono: '✨',
      color: 'bg-pink-100 text-pink-800'
    },
    comic: {
      nombre: 'Cómic',
      descripcion: 'Maresca investigó y divulgó el cómic como forma de arte y expresión cultural.',
      contenido: [
        'Investigación sobre cómic español',
        'Divulgación del noveno arte',
        'Artículos sobre cómic en Olvidosdegranada',
        'Promoción de autores de cómic'
      ],
      proyectos: [
        { nombre: 'Investigación cómic', año: '1985-2023', descripcion: 'Investigación y divulgación' },
        { nombre: 'Artículos sobre cómic', año: '1982-2023', descripcion: 'Publicaciones sobre cómic' }
      ],
      icono: '💬',
      color: 'bg-indigo-100 text-indigo-800'
    },
    filosofia: {
      nombre: 'Filosofía del Derecho',
      descripcion: 'Como profesor de Filosofía del Derecho en la Universidad de Granada, Maresca formó a generaciones de juristas.',
      contenido: [
        'Cátedra de Filosofía del Derecho en la UGR',
        'Investigación en teoría del derecho',
        'Publicaciones académicas',
        'Formación de generaciones de juristas'
      ],
      proyectos: [
        { nombre: 'Cátedra Filosofía del Derecho', año: '1978-2023', descripcion: 'Profesor universitario' },
        { nombre: 'Publicaciones académicas', año: '1980-2023', descripcion: 'Investigación y publicación' }
      ],
      icono: '🤔',
      color: 'bg-zinc-100 text-zinc-800'
    }
  }

  const data = disciplinasData[params.slug]

  if (!data) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-crimson font-bold text-zinc-900 mb-8">
            Disciplina no encontrada
          </h1>
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/#disciplinas" className="text-zinc-600 hover:text-zinc-900 font-libre mb-4 inline-block">
            ← Volver a disciplinas
          </Link>
          <div className="flex items-center mb-6">
            <div className={`text-6xl mr-4 ${data.color} w-20 h-20 rounded-full flex items-center justify-center`}>
              {data.icono}
            </div>
            <div>
              <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-2">
                {data.nombre}
              </h1>
              <p className="text-xl text-zinc-600 font-libre">
                Contribuciones de Mariano Maresca
              </p>
            </div>
          </div>
          <p className="text-lg text-zinc-700 font-libre leading-relaxed max-w-3xl">
            {data.descripcion}
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-crimson font-bold text-zinc-900 mb-6">
              Áreas de trabajo
            </h2>
            <div className="space-y-6">
              {data.contenido.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-zinc-700 font-libre leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-6">
              Proyectos destacados
            </h3>
            <div className="space-y-4">
              {data.proyectos.map((proyecto, index) => (
                <div key={index} className="bg-zinc-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-crimson font-semibold text-zinc-900">
                      {proyecto.nombre}
                    </h4>
                    <span className="text-sm text-zinc-600 font-libre">{proyecto.año}</span>
                  </div>
                  <p className="text-zinc-700 font-libre text-sm">
                    {proyecto.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-crimson font-bold mb-4">
            ¿Tienes información sobre estos proyectos?
          </h2>
          <p className="text-zinc-300 mb-6 font-libre max-w-2xl mx-auto">
            Si tienes documentos, fotografías u otros materiales relacionados con
            el trabajo de Mariano Maresca en {data.nombre.toLowerCase()},
            nos encantaría incorporarlos al archivo.
          </p>
          <Link
            href="/exposicion"
            className="inline-block bg-white text-zinc-900 px-8 py-3 rounded-full font-libre font-semibold hover:bg-zinc-100 transition-colors"
          >
            Contactar con los comisarios
          </Link>
        </div>
      </div>
    </div>
  )
}
