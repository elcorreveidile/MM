import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las cosas que hemos leído — Mariano Maresca',
  description: 'Exposición bibliográfica. Donación Mariano Maresca. Biblioteca de Derecho, Universidad de Granada. 29 de mayo – 31 de julio de 2026.',
}

export default function ExposicionPage() {
  return (
    <div className="min-h-screen bg-[#E8447A] text-black font-libre">

      {/* Franja de fechas y lugar */}
      <div className="border-b border-black/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-black uppercase text-xs tracking-[0.2em]">
            Inaugurada el 29 de mayo de 2026
          </p>
          <p className="font-black uppercase text-xs tracking-[0.2em]">
            Biblioteca de Derecho · Universidad de Granada · Hasta el 31 de julio
          </p>
        </div>
      </div>

      {/* Hero: título + textos */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Columna izquierda: título + texto de Javier Benítez */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tight mb-8">
              Las cosas<br />
              que hemos<br />
              leído
            </h1>
            <p className="font-black uppercase text-xs tracking-[0.2em] mb-6 opacity-60">
              Donación Mariano Maresca · Exposición Bibliográfica
            </p>

            <div className="text-base sm:text-lg leading-relaxed space-y-5 max-w-xl">
              <p>
                <span className="font-black uppercase">Las cosas que hemos leído</span> es una muestra significativa
                de la biblioteca personal de Mariano Maresca. Desde el mismo día de su despedida, la familia quiso
                que los más de tres mil títulos que conformaban el legado de su hermano, de su tío, no se perdieran.
                Contactaron con la Asociación Cultural Olvidos de Granada, creada por el propio Mariano, para gestionar
                la donación; la Universidad de Granada se comprometió a hacerse cargo, y en menos de un año el proceso
                se había completado. Los volúmenes se distribuyeron entre varias bibliotecas de la Universidad de
                Granada y la Biblioteca Pública de Andalucía, según la naturaleza temática de los fondos. Esa dispersión
                refleja también el perfil intelectual de Maresca: filósofo del derecho, lector de Clarín, Pasolini,
                Gramsci y de la poesía contemporánea española.
              </p>

              <p>
                La muestra se organiza en cuatro vitrinas: la dedicada a Pasolini y al trabajo editorial de{' '}
                <em>Saló: el infierno según Pasolini</em>; la que recoge su relación con Almudena Grandes y Luis
                García Montero; la centrada en sus propios escritos y materiales de trabajo; y la formada por libros
                dedicados por autores amigos.
              </p>

              <p>
                El recorrido se completa con ejemplares de <em>Olvidos de Granada</em> y{' '}
                <em>La Fábrica del Sur</em>, revistas que dirigió, además de diapositivas proyectadas del rodaje
                de <em>Saló</em> y fragmentos de <em>Imaginaria</em>, el programa cultural nocturno que Canal Sur
                emitía desde Granada.
              </p>

              <p className="pt-4 font-medium">
                Javier Benítez
              </p>
            </div>
          </div>

          {/* Columna derecha: MM + biografía */}
          <div>
            <div className="text-[8rem] sm:text-[10rem] font-black leading-none tracking-tighter mb-6 select-none">
              MM
            </div>

            <div className="text-sm sm:text-base leading-relaxed max-w-md space-y-4">
              <p>
                Mariano Maresca (Almería, 1945–Granada, 2023) profesor titular de Filosofía del Derecho en la UGR,
                ensayista y figura clave en la vida cultural granadina de las últimas décadas, ejerció una influencia
                notable como mentor y agitador cultural de varias generaciones impulsando proyectos de muy diversa
                índole, marcados, tanto por una lucidez alejada de cualquier dogma, como por el amor que sentía por
                todas las formas de creación artística.
              </p>

              <p>
                Entre sus obras figuran <em>Hipótesis sobre Clarín. El pensamiento crítico del reformismo español</em>{' '}
                (1985), vinculada a su investigación doctoral, y trabajos posteriores sobre Pier Paolo Pasolini, una
                referencia clave en su pensamiento. Su magisterio se asoció a una visión humanista de la universidad y
                a la conexión entre la reflexión ética y política, y las diversas artes como la literatura, el
                urbanismo, el comic, la música y el cine.
              </p>

              <p>
                En los años ochenta y noventa tuvo un papel muy activo en la vida cultural de Granada: dirigió la
                revista <em>Olvidos de Granada</em> (1982–1987, impresa y luego digital 2011) y{' '}
                <em>La Fábrica del Sur</em> (1989–90), espacios de debate estético y literario. También participó
                como guionista en <em>Imaginaria</em> (Canal Sur, 1999) y fue columnista en{' '}
                <em>El País Andalucía</em> (2004–2008).
              </p>

              <p>
                Su firme vocación como agitador de la esfera pública y como productor, se plasmó en innumerables
                iniciativas de múltiples disciplinas, llevadas a cabo siempre y de forma irrenunciable en compañía
                de amigos.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Cita Luis García Montero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-8">
            Mariano y los libros
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <blockquote className="text-lg sm:text-xl leading-relaxed text-zinc-200 space-y-5">
              <p>
                Mariano Maresca no era un libro abierto, sino una bibliografía completa. Su manera de unir el
                conocimiento universitario y la cultura vital se llenaba de citas, páginas, matices y rincones.
                Daba gusto oírle hablar sobre lo que había vivido en sus títulos más amados y lo que había leído
                en sus amores y sus desamores.
              </p>
              <p>
                Los libros de Mariano son un testimonio, reúnen en cuerpo y alma la experiencia de un tiempo en
                el que las ciudades españolas, las universidades, las barras de los bares, las librerías, los
                compañeros y los amigos lucharon por conquistar la democracia y asumieron después la necesidad de
                aprender a vivir en ella. Las preguntas sobre el poeta, el filósofo o el jurista que estábamos
                leyendo eran inseparables de los horizontes que se veían desde nuestras ventanas o de las puertas
                que se cerraban a nuestras espaldas.
              </p>
              <cite className="block text-sm text-zinc-400 not-italic pt-2">
                — Luis García Montero
              </cite>
            </blockquote>

            <div className="space-y-0 border border-zinc-700">
              <div className="p-6 border-b border-zinc-700">
                <p className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-2">Agradecimientos</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Luis García Montero · Javier Benítez · José Miguel Molero · José Sánchez Montes · Miguel Ángel Ruiz Maresca · Javier Martín Ruiz
                </p>
              </div>
              <div className="p-6 border-b border-zinc-700">
                <p className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-2">Coordinación</p>
                <p className="text-zinc-300 text-sm">Antonio Arias</p>
              </div>
              <div className="p-6 border-b border-zinc-700">
                <p className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-2">Diseño</p>
                <p className="text-zinc-300 text-sm">Manigua</p>
              </div>
              <div className="p-6">
                <p className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-2">Fotos</p>
                <p className="text-zinc-300 text-sm">Javier Martín Ruiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las cuatro vitrinas */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10 tracking-tight text-zinc-900">
            Las cuatro vitrinas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-300">

            <div className="bg-[#E84878] p-10">
              <div className="text-6xl font-black mb-6 leading-none opacity-40">I</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Pasolini</h3>
              <p className="text-sm leading-relaxed">
                Pasolini fue, para Mariano Maresca, mucho más que un cineasta o un escritor: fue una manera
                de pensar el mundo. Esta vitrina recoge ese diálogo sostenido durante décadas. En su centro,
                dos libros: <em>Saló: el infierno según Pasolini</em> (1993), que coeditó con Juan Ignacio
                Mendiguchía, y el colectivo <em>Visiones de Pasolini</em> (2006), donde firmó un texto.
                Los materiales originales de aquella maquetación —fotografías, pruebas y notas de imprenta—
                muestran además su trabajo como editor, oficio que ejerció toda la vida desde la fundación de{' '}
                <em>Olvidos de Granada</em> en 1982.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                La vitrina resume uno de los rasgos centrales de Mariano: pensar el cine como pensaba la
                literatura, la filosofía o el derecho, sin separar nunca lo aprendido en una sala oscura
                de lo aprendido en una página leída.
              </p>
            </div>

            <div className="bg-[#E8A090] p-10">
              <div className="text-6xl font-black mb-6 leading-none opacity-40">II</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Almudena Grandes y Luis García Montero</h3>
              <p className="text-sm leading-relaxed">
                Esta vitrina documenta una de las amistades más decisivas en la vida de Mariano Maresca:
                la que sostuvo durante más de cuatro décadas con Luis García Montero. No fue cercanía social;
                fue oficio compartido. Luis le dedicó, uno a uno, muchos de los libros que publicó, desde{' '}
                <em>Y ahora ya eres dueño del puente de Brooklyn</em> (1980) hasta la{' '}
                <em>Balada en la muerte de la poesía</em>, pasando por <em>El jardín extranjero</em>,{' '}
                <em>Diario cómplice</em> o la <em>Poesía reunida 1980–2005</em>.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                Con Almudena Grandes, la relación tuvo otro tono, igual de intenso. Le enviaba sus manuscritos
                antes de publicarlos. La vitrina muestra uno de esos originales mecanografiados de{' '}
                <em>El corazón helado</em> con observaciones manuscritas al margen, y la{' '}
                <em>Carta de amor para Mariano Maresca</em> que Almudena le dedicó en <em>El País Semanal</em>{' '}
                en enero de 2012.
              </p>
            </div>

            <div className="bg-[#C9B8D4] p-10">
              <div className="text-6xl font-black mb-6 leading-none opacity-40">III</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Escritos propios y papeles de trabajo</h3>
              <p className="text-sm leading-relaxed">
                Esta vitrina reúne la obra publicada y los papeles de trabajo de Maresca: el rastro material
                de un pensador que escribía a mano antes de imprimir. En el centro aparecen su tesis doctoral{' '}
                <em>Hipótesis sobre Clarín. El pensamiento crítico</em> (1982) en versión mecanografiada
                original y el volumen publicado en 1985.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                Entre sus libros como ensayista: <em>Argumentos morales</em> (2004) y{' '}
                <em>Las cosas que hemos visto</em> (2011). En colaboración: <em>Granada Tango</em> (1982),{' '}
                <em>Un debate sobre natural y artificial</em> (1997), <em>Del otro lado de la barra</em> (2005)
                y <em>Un día feliz</em>, álbum de Javier Egea en el que Maresca participó también como diseñador.
                Cierran la vitrina hojas anotadas sobre Alfred von Martin, Marcuse y Clarín.
              </p>
            </div>

            <div className="bg-[#E84878] p-10">
              <div className="text-6xl font-black mb-6 leading-none opacity-40">IV</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">Libros dedicados</h3>
              <p className="text-sm leading-relaxed">
                Una biblioteca personal es también un archivo de amistades. Esta vitrina lo demuestra.
                Reúne libros dedicados por autores con quienes Maresca compartió oficio, conversación y tiempo:
                Rafael Juárez (<em>Canciones y sonetos</em>), José Carlos Rosales (<em>Un paisaje</em>),
                Javier Egea (<em>Gris perla</em>), Luis Antonio de Villena (<em>Poesía 1970–1982</em>),
                Rafael Alberti (<em>Los hijos del drago</em>), Juan Barja (<em>Nudos de tiempo</em>),
                Sergio Hinojosa (<em>Santa Anorexia</em>). Aparece también un <em>Birthday book</em> de Andy
                Warhol con dedicatoria de Chuchi, y el <em>Federico y su mundo</em> de Francisco García Lorca
                firmado por Laura García Lorca.
              </p>
              <p className="text-sm leading-relaxed mt-4">
                Cada dedicatoria es, en el fondo, una conversación interrumpida que el visitante, al asomarse
                hoy a la vitrina, puede continuar en silencio.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
