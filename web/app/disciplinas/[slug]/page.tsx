import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

type Seccion = { nombre: string; count?: number; autores: string }
type DisciplinaData = {
  nombre: string
  subtitulo: string
  descripcion: string
  libros: { total?: number; secciones: Seccion[] } | null
}

const disciplinasData: Record<string, DisciplinaData> = {
  literatura: {
    nombre: 'Literatura',
    subtitulo: 'Poesía, narrativa y ensayo',
    descripcion: 'La literatura fue el territorio central de la curiosidad intelectual de Mariano Maresca. Su biblioteca reúne más de 800 títulos literarios distribuidos en siete tradiciones: la española —con la poesía del último cuarto del siglo XX, la llamada «otra sentimentalidad» con García Montero, Álvaro Salvador y Javier Egea, como sección más densa y personal de la biblioteca, y nombres como Antonio Muñoz Molina o Federico García Lorca—, la anglosajona (Hemingway, Fitzgerald, Carver, Dickens), la alemana y centroeuropea (Brecht, Kafka, Canetti, Hölderlin), la italiana —donde Pasolini ocupa un lugar central—, la francesa (Camus, Rimbaud, Proust, Gide), la hispanoamericana (Borges, García Márquez, Bioy Casares, Rulfo) y la rusa (Chéjov, Dostoievski, Tolstói). Entre los libros con dedicatoria autógrafa se encuentran todos los títulos de Luis García Montero (desde la primera edición de El jardín extranjero), y ejemplares de Ángel González, Juan Marsé, Antonio Muñoz Molina, Rafael Alberti, Javier Egea o Luis Antonio de Villena.',
    libros: {
      total: 802,
      secciones: [
        { nombre: 'Poesía y narrativa española', count: 282, autores: 'Luis García Montero · Ángel González · Javier Egea · Federico García Lorca · Luis Cernuda · Antonio Machado · Álvaro Salvador · Antonio Muñoz Molina · Rafael Alberti · Luis Antonio de Villena · Rafael Juárez · José Carlos Rosales · Juan Barja · Almudena Grandes' },
        { nombre: 'Literatura anglosajona', count: 145, autores: 'Ernest Hemingway · F. Scott Fitzgerald · Raymond Carver · Charles Dickens · Shakespeare · Dylan Thomas · Joseph Conrad · Henry James · Philip Roth · Don DeLillo · Jonathan Lethem · James Ellroy · John Le Carré' },
        { nombre: 'Literatura alemana y centroeuropea', count: 118, autores: 'Bertolt Brecht · Franz Kafka · Elias Canetti · Friedrich Hölderlin · Bernhard Schlink · Thomas Mann · Heinrich Böll · Friedrich Schiller' },
        { nombre: 'Literatura italiana', count: 95, autores: 'Pier Paolo Pasolini · Antonio Tabucchi · Cesare Pavese · Leonardo Sciascia · Italo Calvino · Carlo Ginzburg · Primo Levi · Umberto Eco' },
        { nombre: 'Literatura francesa', count: 75, autores: 'Albert Camus · Arthur Rimbaud · Marcel Proust · André Gide · André Malraux · Gustave Flaubert · Stendhal · Simone de Beauvoir' },
        { nombre: 'Literatura hispanoamericana', count: 65, autores: 'Jorge Luis Borges · Gabriel García Márquez · Adolfo Bioy Casares · Juan Rulfo · César Vallejo · Juan Carlos Onetti · Mario Vargas Llosa · Julio Cortázar' },
        { nombre: 'Literatura rusa y eslava', count: 22, autores: 'Antón Chéjov · Fiodor Dostoievski · León Tolstói · Ryszard Kapuscinski · Isaak Bábel' },
      ],
    },
  },
  filosofia: {
    nombre: 'Filosofía',
    subtitulo: 'Filosofía del Derecho y pensamiento contemporáneo',
    descripcion: 'Catedrático de Filosofía del Derecho en la Universidad de Granada, Maresca dedicó su vida académica a la reflexión filosófica sobre el poder, el derecho y la sociedad. Su biblioteca filosófica, de más de 300 títulos, refleja un pensamiento marcado por la tradición marxista y el materialismo histórico —Gramsci, Negri, Althusser, Foucault— junto a los clásicos del empirismo y la filosofía analítica anglosajona: Hume, A.J. Ayer. La sección jurídico-filosófica incluye a Beccaria, Hobbes, Adam Smith, Bobbio y Ferrajoli. El derecho no como técnica, sino como campo de disputa política y filosófica. Entre los títulos señalados: sus propios trabajos —Hipótesis sobre Clarín (1982-1985), Argumentos morales (2004, La Isleta del Moro)— y los apuntes y anotaciones manuscritas que conservaba sobre Marcuse, Alfred von Martin y Clarín. También destacan los estudios sobre feminismo y teoría crítica: Alicia H. Puleo, Simone de Beauvoir, y los debates sobre autonomía y soberanía.',
    libros: {
      total: 319,
      secciones: [
        { nombre: 'Filosofía y pensamiento', count: 304, autores: 'Antonio Gramsci · Michel Foucault · Antonio Negri · Louis Althusser · David Hume · A.J. Ayer · Friedrich Nietzsche · Alicia H. Puleo · Herbert Marcuse · Walter Benjamin · György Lukács · Georg Simmel · Max Weber · Antonio Gramsci' },
        { nombre: 'Derecho y filosofía política', count: 15, autores: 'Cesare Beccaria · Thomas Hobbes · Adam Smith · Norberto Bobbio · Luigi Ferrajoli · Hans Kelsen · Carl Schmitt' },
      ],
    },
  },
  'pensamiento-politico': {
    nombre: 'Pensamiento Político',
    subtitulo: 'Historia, política y compromiso intelectual',
    descripcion: 'El compromiso político de Maresca estuvo siempre fundado en el rigor histórico y filosófico. Su biblioteca de historia y política —donde conviven Hobsbawm, Josep Fontana, Kapuscinski, Gramsci y Pannekoek— refleja un pensamiento de izquierdas crítico, atento a las tradiciones obreras y a la historia desde abajo. Columnista en El País Andalucía con la sección «La nuestra» y editor de Olvidos de Granada, ejerció como intelectual público durante más de cuatro décadas. La memoria —la memoria de los vencidos, la memoria cultural— fue su arma teórica y política constante. Su biblioteca incluye también clásicos del anarquismo (Bakunin, Kropotkin) y del movimiento obrero internacional, junto a estudios sobre la Transición española y la política andaluza.',
    libros: {
      total: 37,
      secciones: [
        { nombre: 'Historia y política', count: 37, autores: 'Eric Hobsbawm · Josep Fontana · Ryszard Kapuscinski · Antonio Gramsci · Anton Pannekoek · V.I. Lenin · Fernand Braudel · Mijaíl Bakunin · Piotr Kropotkin · E.P. Thompson · Perry Anderson · Julio Aróstegui' },
      ],
    },
  },
  cine: {
    nombre: 'Cine',
    subtitulo: 'Crítica cinematográfica y ciclos de cine',
    descripcion: 'El cine fue para Maresca una forma de pensamiento. Organizó ciclos de cine en Granada y publicó crítica cinematográfica en Olvidos de Granada durante décadas. La biblioteca de cine —en torno a 50 títulos, más una extensa colección de DVDs agrupados en varias cajas— refleja una cinefilia de gran amplitud y profundidad. Pasolini ocupa un lugar central y tiene su propia caja dedicada: decenas de libros, revistas y documentos de trabajo, entre ellos el catálogo de sus pinturas y los materiales de producción de Saló: el infierno según Pasolini (Filmoteca Andalucía, 1993), que Maresca coeditó con Juan Ignacio Mendiguchía. Fritz Lang tiene asimismo una caja entera: más de quince monografías y dos colecciones de DVDs sobre su obra completa. A estos núcleos se añaden Fassbinder, Visconti, Truffaut, Bergman, Kubrick, Orson Welles, Buñuel, Almodóvar y Woody Allen.',
    libros: {
      total: 49,
      secciones: [
        { nombre: 'Pasolini — colección completa', autores: 'Trilogía de la vida · Salò (Filmoteca Andalucía, 1993) · Visiones de Pasolini (2006) · Pinturas de Pasolini · Pasolini: crónica judicial · Il cinema in forma di poesia · Pier Paolo Pasolini: poeta delle ceneri · materiales de maquetación originales' },
        { nombre: 'Fritz Lang — colección completa', autores: 'Fritz Lang: el expresionismo alemán · M, el vampiro de Düsseldorf · Metrópolis · Los nibelungos · El testamento del Dr. Mabuse · Lang en Hollywood · DVDs obras completas (2 cajas)' },
        { nombre: 'Otros directores', autores: 'Rainer W. Fassbinder · Luchino Visconti · François Truffaut · Ingmar Bergman · Stanley Kubrick · Orson Welles · Luis Buñuel · Pedro Almodóvar · Woody Allen · Jean-Luc Godard · John Cassavetes' },
        { nombre: 'Arte cinematográfico', autores: 'El lenguaje cinematográfico · Historia del cine · La Fábrica del Sur nº1 (1989) · DVDs cine negro americano · DVDs cine europeo de autor' },
      ],
    },
  },
  fotografia: {
    nombre: 'Fotografía',
    subtitulo: 'Memoria visual e imagen documental',
    descripcion: 'La fotografía interesó a Maresca como instrumento de memoria histórica y de combate político. Su biblioteca fotográfica es más rica de lo que aparenta: junto al célebre El fotógrafo de Mauthausen —sobre Francisco Boix, el republicano catalán cuyas imágenes fueron la única prueba visual en los juicios de Núremberg—, la colección incluye una sección extensa dedicada a Manuel Falces, fotógrafo granadino con quien Maresca colaboró estrechamente en Olvidos de Granada y en múltiples proyectos culturales. Joan Fontcuberta tiene varios títulos, incluido Contranatura. También aparecen Susan Sontag (Sobre la fotografía), Henri Cartier-Bresson, Sebastião Salgado, Lewis Hine y Carlos Pérez Siquier. Maresca impulsó el Archivo de Fotografía Granadina y organizó exposiciones fotográficas que documentaron la vida cultural de la ciudad.',
    libros: {
      secciones: [
        { nombre: 'Fotografía documental y política', autores: 'Francisco Boix: El fotógrafo de Mauthausen · Imágenes de la Guerra Civil Española · Lewis Hine · Sebastião Salgado · Susan Sontag: Sobre la fotografía' },
        { nombre: 'Manuel Falces', autores: 'Catálogos y libros de Manuel Falces · Fotografías de Granada · Archivo de Fotografía Granadina · colaboraciones en Olvidos de Granada' },
        { nombre: 'Fotografía contemporánea', autores: 'Joan Fontcuberta: Contranatura y otros títulos · Henri Cartier-Bresson · Carlos Pérez Siquier · Diego Lara · fotografía española contemporánea' },
      ],
    },
  },
  arquitectura: {
    nombre: 'Arquitectura',
    subtitulo: 'Urbanismo, ciudad y espacio público',
    descripcion: 'La ciudad fue para Maresca un objeto de reflexión constante. Sus escritos en Olvidos de Granada abordaron las grandes transformaciones urbanísticas de Granada con la misma exigencia con que leía una novela. La biblioteca de arquitectura incluye desde los utópicos ilustrados —Ledoux, La ciudad ideal— hasta la modernidad radical de Le Corbusier, Mies van der Rohe y la Bauhaus. Richard Sennett (Carne y piedra) aporta la dimensión sociológica. La iconografía de la Alhambra y el libro específico sobre La Gran Vía de Granada —esa cicatriz urbana que fascina y escandaliza a partes iguales— anclan la reflexión en el territorio concreto. Las Escenografías de Adolphe Appia y las vistas de Canaletto añaden la dimensión estética: la ciudad como texto político y como imagen.',
    libros: {
      secciones: [
        { nombre: 'Modernismo y vanguardia', autores: 'Le Corbusier · Mies van der Rohe · Walter Gropius y la Bauhaus · Adolphe Appia: Escenografías · Metrópolis · constructivismo ruso' },
        { nombre: 'Historia y teoría urbana', autores: 'Claude-Nicolas Ledoux: La Arquitectura · La ciudad ideal · Richard Sennett: Carne y piedra · Álvaro Siza · Canaletto: vedute · historia del urbanismo' },
        { nombre: 'Granada y Andalucía', autores: 'La Alhambra: iconografía y simbolismo · La Gran Vía de Granada · arquitectura granadina · transformaciones urbanas de Granada' },
      ],
    },
  },
  diseno: {
    nombre: 'Diseño',
    subtitulo: 'Arte, diseño editorial e identidad visual',
    descripcion: 'La biblioteca de arte y diseño de Maresca —Matisse, Francis Bacon, Paul Cézanne, Caravaggio, Andy Warhol— revela un ojo educado en la modernidad del siglo XX. Matisse está especialmente presente: Matisse in Morocco, Matisse: Gouaches découpées, el libro sobre su estudio. La colección incluye también José Guerrero (varios catálogos), Juan Vida (múltiples catálogos de exposición), el Francisco Bores Para un Lorca, los Carteles constructivistas rusos de Rodchenko y el Equipo Crónica. Un volumen sobre la tipografía de Giambattista Bodoni completa la dimensión tipográfica. La Fábrica del Sur nº1 (1989) —la revista que dirigió— encarna ese ideal donde diseño y contenido eran inseparables. El cuidado formal de Olvidos de Granada, que dirigió durante décadas, fue heredero directo de esa convicción.',
    libros: {
      secciones: [
        { nombre: 'Arte moderno', autores: 'Henri Matisse (Matisse in Morocco · Gouaches découpées · estudio) · Paul Cézanne · Francis Bacon · Caravaggio · Andy Warhol · Pablo Picasso · Velázquez · Francisco Bores: Para un Lorca' },
        { nombre: 'Diseño gráfico y tipografía', autores: 'Rodchenko y los carteles constructivistas rusos · Equipo Crónica · Giambattista Bodoni (tipografía) · La Fábrica del Sur nº1 (1989) · diseño editorial granadino' },
        { nombre: 'Arte granadino y andaluz', autores: 'Juan Vida (catálogos de exposición) · José Guerrero (catálogos) · Juan Vida y la nueva figuración · arte contemporáneo andaluz' },
      ],
    },
  },
  comic: {
    nombre: 'Cómic',
    subtitulo: 'El noveno arte',
    descripcion: 'Maresca fue uno de los primeros en tratar el cómic como forma artística legítima en Granada. Su biblioteca en este campo es más amplia de lo que parece: junto a la revista Boronia —la publicación de historieta que incluye un número con Enrique Morente en portada—, aparecen Hola soy Gaudeamus de Andrés Sopeña (con dibujo dedicado a Mariano), Los tebeos de Granada, La Granada de papel, y números de Hermano Lobo. También Perfidia moruna de Pamies, con un dibujo original dedicado a Mariano. Su trabajo de divulgación y crítica contribuyó a que la historieta fuera reconocida como parte del patrimonio cultural de la ciudad, y publicó artículos en Olvidos de Granada que exploraban el lenguaje del cómic y reivindicaban a sus autores como artistas de pleno derecho.',
    libros: {
      secciones: [
        { nombre: 'Cómic e historieta', autores: 'Boronia (con Enrique Morente en portada) · Andrés Sopeña: Hola soy Gaudeamus (con dedicatoria y dibujo original) · Los tebeos de Granada · La Granada de papel · Hermano Lobo · Pamies: Perfidia moruna (con dibujo dedicado a Mariano)' },
      ],
    },
  },
  musica: {
    nombre: 'Música',
    subtitulo: 'Crítica musical, tango y flamenco',
    descripcion: 'La música atravesó toda la vida cultural de Maresca. Publicó crítica musical en Olvidos de Granada y siguió de cerca la música flamenca —el célebre disco Omega de Enrique Morente tiene un lugar destacado en su biblioteca—. El tango fue otra de sus pasiones: redactó las bases del concurso de letras de tango celebrado en La Tertulia, que dio lugar al libro Granada Tango (1982), y colaboró en el diseño del cartel de alguna edición del Festival de Tango de Granada. Su biblioteca musical —una de las más reveladoras de su carácter— incluye monografías sobre Wagner (dos biografías), Mozart, Mahler, Debussy, Beethoven, Verdi, Stravinsky, Bach, Glenn Gould y Chet Baker, junto al CD de Omega y el libro Universo Morente.',
    libros: {
      secciones: [
        { nombre: 'Música clásica y ópera', autores: 'Richard Wagner (dos biografías) · Wolfgang Amadeus Mozart · Gustav Mahler · Claude Debussy · Ludwig van Beethoven · Giuseppe Verdi · Igor Stravinsky · Johann Sebastian Bach · Glenn Gould · historia de la ópera' },
        { nombre: 'Jazz y música contemporánea', autores: 'Chet Baker · historia del jazz · Bob Dylan: Crónicas (con dedicatoria) · música popular del siglo XX' },
        { nombre: 'Flamenco y tango', autores: 'Enrique Morente: Omega (CD) · Universo Morente · Granada Tango (1982) · historia del flamenco · cantaores y guitarristas granadinos' },
      ],
    },
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
              {data.libros.total && <span className="font-libre text-sm text-zinc-500">{data.libros.total} títulos</span>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.libros.secciones.map((s) => (
                <div key={s.nombre} className="bg-white border border-zinc-100 p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-crimson font-bold text-zinc-900 text-lg">{s.nombre}</h3>
                    {s.count && <span className="font-libre text-xs text-zinc-400 ml-2 flex-shrink-0">{s.count} títulos</span>}
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
