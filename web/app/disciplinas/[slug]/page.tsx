import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

type Seccion = { nombre: string; count: number; autores: string }
type DisciplinaData = {
  nombre: string
  subtitulo: string
  descripcion: string
  libros: { total: number; secciones: Seccion[] } | null
}

const disciplinasData: Record<string, DisciplinaData> = {
  literatura: {
    nombre: 'Literatura',
    subtitulo: 'Poesía, narrativa y ensayo',
    descripcion: 'La literatura fue el territorio central de la curiosidad intelectual de Mariano Maresca. Su biblioteca reúne más de 800 títulos literarios distribuidos en siete tradiciones: la española —con Luis García Montero como el autor más presente, seguido de Ángel González, Javier Egea, Federico García Lorca, Luis Cernuda y Antonio Machado—, la anglosajona (Hemingway, Fitzgerald, Carver, Dickens), la alemana y centroeuropea (Brecht, Kafka, Canetti, Hölderlin), la italiana —donde Pasolini ocupa un lugar central—, la francesa (Camus, Rimbaud, Proust, Gide), la hispanoamericana (Borges, García Márquez, Bioy Casares, Rulfo) y la rusa (Chéjov, Dostoievski, Tolstói). La poesía española de la segunda mitad del siglo XX —la llamada «otra sentimentalidad», con García Montero, Álvaro Salvador y Javier Egea— es la sección más densa y personal de la biblioteca.',
    libros: {
      total: 802,
      secciones: [
        { nombre: 'Poesía y literatura española', count: 282, autores: 'Luis García Montero · Ángel González · Javier Egea · Federico García Lorca · Luis Cernuda · Antonio Machado · Álvaro Salvador · Antonio Muñoz Molina' },
        { nombre: 'Literatura anglosajona', count: 145, autores: 'Ernest Hemingway · F. Scott Fitzgerald · Raymond Carver · Charles Dickens · Shakespeare · Dylan Thomas' },
        { nombre: 'Literatura alemana y centroeuropea', count: 118, autores: 'Bertolt Brecht · Franz Kafka · Elias Canetti · Friedrich Hölderlin · Bernhard Schlink' },
        { nombre: 'Literatura italiana', count: 95, autores: 'Pier Paolo Pasolini · Antonio Tabucchi · Cesare Pavese · Carlo Ginzburg · Trieste y el mito centroeuropeo' },
        { nombre: 'Literatura francesa', count: 75, autores: 'Albert Camus · Arthur Rimbaud · Marcel Proust · André Gide · André Malraux' },
        { nombre: 'Literatura hispanoamericana', count: 65, autores: 'Jorge Luis Borges · Gabriel García Márquez · Adolfo Bioy Casares · Juan Rulfo · César Vallejo · Juan Carlos Onetti' },
        { nombre: 'Literatura rusa y eslava', count: 22, autores: 'Antón Chéjov · Fiodor Dostoievski · León Tolstói · Ryszard Kapuscinski' },
      ],
    },
  },
  filosofia: {
    nombre: 'Filosofía',
    subtitulo: 'Filosofía del Derecho y pensamiento contemporáneo',
    descripcion: 'Catedrático de Filosofía del Derecho en la Universidad de Granada, Maresca dedicó su vida académica a la reflexión filosófica sobre el poder, el derecho y la sociedad. Su biblioteca filosófica, de más de 300 títulos, refleja un pensamiento marcado por la tradición marxista y el materialismo histórico —Gramsci, Negri, Althusser, Foucault— junto a los clásicos del empirismo y la filosofía analítica anglosajona: Hume, A.J. Ayer. La sección jurídico-filosófica incluye a Beccaria, Hobbes, Adam Smith, Bobbio y Ferrajoli. El derecho no como técnica, sino como campo de disputa política y filosófica.',
    libros: {
      total: 319,
      secciones: [
        { nombre: 'Filosofía y pensamiento', count: 304, autores: 'Antonio Gramsci · Michel Foucault · Antonio Negri · Althusser · David Hume · A.J. Ayer · Friedrich Nietzsche · Alicia H. Puleo' },
        { nombre: 'Derecho y filosofía política', count: 15, autores: 'Cesare Beccaria · Thomas Hobbes · Adam Smith · Norberto Bobbio · Luigi Ferrajoli' },
      ],
    },
  },
  'pensamiento-politico': {
    nombre: 'Pensamiento Político',
    subtitulo: 'Historia, política y compromiso intelectual',
    descripcion: 'El compromiso político de Maresca estuvo siempre fundado en el rigor histórico y filosófico. Su biblioteca de historia y política —donde conviven Hobsbawm, Josep Fontana, Kapuscinski, Gramsci y Pannekoek— refleja un pensamiento de izquierdas crítico, atento a las tradiciones obreras y a la historia desde abajo. Columnista en El País Andalucía con la sección «La nuestra» y editor de Olvidos de Granada, ejerció como intelectual público durante más de cuatro décadas. La memoria —la memoria de los vencidos, la memoria cultural— fue su arma teórica y política constante.',
    libros: {
      total: 37,
      secciones: [
        { nombre: 'Historia y política', count: 37, autores: 'Eric Hobsbawm · Josep Fontana · Ryszard Kapuscinski · Antonio Gramsci · Anton Pannekoek · V.I. Lenin · Fernand Braudel' },
      ],
    },
  },
  cine: {
    nombre: 'Cine',
    subtitulo: 'Crítica cinematográfica y ciclos de cine',
    descripcion: 'El cine fue para Maresca una forma de pensamiento. Organizó ciclos de cine en Granada y publicó crítica cinematográfica en Olvidos de Granada durante décadas. Entre todos los cineastas, Pier Paolo Pasolini ocupa un lugar central en su biblioteca: varios libros sobre su obra —incluido el catálogo de sus pinturas y dibujos— revelan una afinidad profunda con ese intelectual total que fue también poeta, novelista y polemista. Maresca compartía con Pasolini la convicción de que la cultura es siempre un campo de combate.',
    libros: {
      total: 49,
      secciones: [
        { nombre: 'Arte, cine y estética', count: 49, autores: 'Pier Paolo Pasolini · Juan Vida · Velázquez · Miguel Ángel · Picasso · Fundación Rodríguez-Acosta' },
      ],
    },
  },
  fotografia: {
    nombre: 'Fotografía',
    subtitulo: 'Archivo y memoria visual',
    descripcion: 'Maresca contribuyó a preservar la memoria visual de Granada. Impulsó el Archivo de Fotografía Granadina y organizó exposiciones fotográficas que documentaron la vida cultural de la ciudad a lo largo de décadas. La fotografía, en su visión, era ante todo un instrumento de memoria histórica: una manera de fijar lo efímero y de resistir al olvido.',
    libros: null,
  },
  arquitectura: {
    nombre: 'Arquitectura',
    subtitulo: 'Urbanismo y espacio público',
    descripcion: 'La ciudad fue para Maresca un objeto de reflexión constante. A través de la crítica arquitectónica y el ensayo urbano, analizó las transformaciones del espacio público granadino y el modo en que la arquitectura configura —o destruye— la vida colectiva. Sus textos en Olvidos de Granada abordaron las grandes intervenciones urbanísticas en Granada con la misma exigencia crítica que aplicaba a la literatura o al cine.',
    libros: null,
  },
  diseno: {
    nombre: 'Diseño',
    subtitulo: 'Diseño editorial e identidad visual',
    descripcion: 'El cuidado formal de Olvidos de Granada, que dirigió durante décadas, convirtió a la publicación en una referencia del diseño editorial granadino. Maresca entendía que el diseño era parte inseparable del contenido: la forma en que se presenta un texto es también un argumento. La colaboración con Manigua para la identidad visual de este proyecto memorial —la plaquita MM, las tipografías, los colores— es heredera directa de esa convicción.',
    libros: null,
  },
  comic: {
    nombre: 'Cómic',
    subtitulo: 'El noveno arte',
    descripcion: 'Maresca fue uno de los primeros en tratar el cómic como forma artística legítima en Granada. Su trabajo de divulgación y crítica contribuyó a que la historieta fuera reconocida como parte del patrimonio cultural de la ciudad. Organizó exposiciones y publicó artículos en Olvidos de Granada que exploraban la especificidad del lenguaje del cómic y reivindicaban a sus autores como artistas de pleno derecho.',
    libros: null,
  },
  musica: {
    nombre: 'Música',
    subtitulo: 'Festival de Tango y crítica musical',
    descripcion: 'La contribución de Maresca a la música granadina fue monumental. Fundó y dirigió el Festival de Tango de Granada durante más de tres décadas, convirtiendo la ciudad en referencia del tango en España. La historia de ese festival es inseparable de la historia cultural de Granada en la democracia. También publicó crítica musical en Olvidos de Granada y colaboró en proyectos de música flamenca, incluido el célebre disco Omega de Enrique Morente, ese encuentro imposible y necesario entre el flamenco y Leonard Cohen.',
    libros: null,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = disciplinasData[slug]
  if (!data) return { title: 'Disciplina no encontrada · Mariano Maresca' }
  return {
    title: `${data.nombre} — Las cosas que hemos leído · Mariano Maresca`,
    description: data.descripcion.slice(0, 160),
  }
}

export default async function DisciplinaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = disciplinasData[slug]

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-crimson text-4xl font-bold text-zinc-900 mb-8">Disciplina no encontrada</h1>
          <Link href="/#disciplinas" className="font-libre text-zinc-600 hover:text-zinc-900">← Volver</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#disciplinas" className="font-libre text-xs tracking-[0.3em] uppercase text-zinc-400 hover:text-zinc-200 mb-6 inline-block transition-colors">
            ← Mariano Maresca
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
              <Image
                src={`/disciplinas/${slug}.png`}
                alt={data.nombre}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-2">
                {data.subtitulo}
              </p>
              <h1 className="font-crimson font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                {data.nombre}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="max-w-3xl mb-12">
          <p className="font-libre text-zinc-700 text-lg leading-relaxed">
            {data.descripcion}
          </p>
        </div>

        {data.libros && (
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <h2 className="font-crimson font-bold text-zinc-900 text-2xl">En su biblioteca</h2>
              <span className="font-libre text-sm text-zinc-500">{data.libros.total} títulos</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.libros.secciones.map((s) => (
                <div key={s.nombre} className="bg-white border border-zinc-100 p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-crimson font-bold text-zinc-900 text-lg">{s.nombre}</h3>
                    <span className="font-libre text-xs text-zinc-400 ml-2 flex-shrink-0">{s.count} títulos</span>
                  </div>
                  <p className="font-libre text-xs text-zinc-500 leading-relaxed">{s.autores}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/archivo"
                className="font-libre text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Ver el inventario completo →
              </Link>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
