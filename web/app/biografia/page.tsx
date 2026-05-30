export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Almería, 1945 · Granada, 2023
          </p>
          <h1 className="font-crimson font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Mariano Maresca
          </h1>
          <p className="font-libre text-zinc-300 max-w-2xl text-lg leading-relaxed">
            Profesor titular de Filosofía del Derecho, editor de Olvidos de Granada, crítico y promotor cultural.
            Una de las figuras más influyentes de la cultura granadina del siglo XX.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main biography */}
          <div className="lg:col-span-2 bg-white divide-y divide-zinc-100">

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                Una vida dedicada a la cultura
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Mariano Maresca nació en Almería en 1945. Fue profesor titular de Filosofía del Derecho en la Universidad de Granada. Desde el primer momento, su labor trascendió el ámbito académico para convertirse en una de las figuras más influyentes de la cultura granadina contemporánea.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Desde finales de los años sesenta hasta su fallecimiento en 2023 trabajó incansablemente en múltiples disciplinas: literatura, música, cine, fotografía, arquitectura, diseño, cómic, filosofía y pensamiento político. Su método siempre fue el mismo: reunir personas, crear espacios de conversación y dar voz a quienes merecían ser escuchados.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Su biblioteca personal —más de 3.500 libros donados a la Universidad de Granada— es el retrato más fiel de esa curiosidad sin fronteras: de Gramsci a Fritz Lang, de Luis García Montero a Glenn Gould, de Matisse a Bakunin, de la novela negra americana al tango rioplatense.
                </p>
              </div>
            </section>

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                La Tertulia y la mesa del Botánico
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Su mesa en el <a href="https://botanicocafe.es" target="_blank" rel="noopener noreferrer" className="hover:text-[#E84878] transition-colors underline">café Botánico</a> de la calle Duquesa fue el epicentro de una vida cultural extraordinaria. Punto de encuentro que Maresca convirtió en «informal alternativa a su despacho en la Facultad», allí se gestaron proyectos, se discutieron ideas y se tejió la red cultural que marcaría a toda una generación.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  En torno a aquella mesa y a su tertulia se formaron escritores que luego serían figuras de primer orden de las letras españolas: Antonio Muñoz Molina, Luis García Montero, Javier Egea. Maresca fue para ellos un referente, un interlocutor exigente y un impulsor generoso del talento ajeno.
                </p>
              </div>
            </section>

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                Editor de Olvidos de Granada
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  En noviembre de 1982 Maresca fundó la revista <em>Olvidos de Granada</em>, que dirigió hasta mayo de 1987. La publicación se convirtió en el archivo vivo de la creación artística y cultural granadina, dando voz a escritores, artistas, músicos y pensadores que de otra manera habrían quedado en el olvido.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  A través de sus páginas construyó un corpus documental invaluable: entrevistas, ensayos, crónicas, fotografías y memorias que hoy constituyen una fuente de primer orden para entender la cultura de Granada en los años ochenta. En 2011 nació <em>OlvidosdeGranada.es</em>, versión digital de la revista y repositorio de todos los números de la primera época en PDF.
                </p>
              </div>
            </section>

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                Obra escrita
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  Su obra académica arranca con <em>Hipótesis sobre Clarín. El pensamiento crítico del reformismo español</em> (Granada, 1985), versión revisada de su tesis doctoral. Siguió <em>Salò. El infierno según Pasolini</em> (Filmoteca Andalucía, 1993), escrito junto a Juan Ignacio Mendiguchía, que acompañó el ciclo de cine que organizó sobre Pasolini.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  <em>Argumentos morales</em> (Asociación Cultural del Diente de Oro / La Isleta del Moro, Granada, 2004) recoge las presentaciones de tres libros: <em>Los aires difíciles</em> de Almudena Grandes, <em>La intimidad de la serpiente</em> de Luis García Montero y <em>Miedo rentable</em> de José Carlos Rosales. Entre 2004 y 2008 escribió la columna «La nuestra» en <em>El País Andalucía</em>, una de las voces más singulares del periodismo cultural de aquellos años. Esos artículos se recogieron en <em>Las cosas que hemos visto</em> (Renacimiento, 2011), con prólogo de Luis García Montero —título que inspira el nombre de esta exposición.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  También publicó en colaboración: <em>Granada Tango</em> (1982), <em>Latinos</em> (1995, con Horacio Rébora) y <em>Un debate sobre natural y artificial</em> (1997). Participó en <em>Visiones de Pasolini</em> (2006) con un ensayo propio, y fue coeditor de la revista <em>Olvidos de Granada</em> y de <em>La Fábrica del Sur</em>.
                </p>
              </div>
            </section>

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                El tango, Imaginaria y Omega
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  El tango fue una de sus pasiones. Redactó las bases del concurso de letras de tango celebrado en <a href="https://www.instagram.com/tertuliagranada?igsh=Zmd2NGU4amZxYmo5" target="_blank" rel="noopener noreferrer" className="hover:text-[#E84878] transition-colors underline">La Tertulia</a> que dio lugar al libro colectivo <em>Granada Tango</em> (1982), y escribió el texto de presentación. También colaboró en el diseño del cartel de alguna edición del Festival de Tango de Granada.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  En 1999 participó como guionista en <em>Imaginaria</em> (Canal Sur), el programa cultural nocturno que se convirtió en referencia del pensamiento y las artes en Andalucía. Siguió de cerca la música flamenca y el célebre disco <em>Omega</em> de Enrique Morente ocupa un lugar destacado en su biblioteca.
                </p>
              </div>
            </section>

            <section className="p-8">
              <h2 className="font-crimson font-bold text-zinc-900 text-3xl mb-6">
                El ictus de 2011 y «Palabra a palabra»
              </h2>
              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed font-libre">
                  El 18 de noviembre de 2011 Mariano sufrió un ictus que le hizo perder el habla y la memoria. Su proceso de recuperación fue documentado por José Sánchez Montes en el documental <em>Mariano Maresca. Palabra a palabra</em> (2015, 46 min), narrado por Almudena Grandes. El filme —íntegramente optimista— muestra sus esfuerzos para reconectar los caminos de su cerebro.
                </p>
                <p className="text-zinc-700 leading-relaxed font-libre">
                  En enero de 2012, Almudena Grandes le dedicó en El País Semanal una carta: «No podía aceptar que no pudieras hablar tú, precisamente tú, el amo de todas las palabras».
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            <div className="bg-zinc-900 text-white p-6">
              <h3 className="font-crimson font-bold text-xl mb-6 pb-4 border-b border-zinc-700">
                Datos biográficos
              </h3>
              <dl className="space-y-4">
                {[
                  { label: 'Nacimiento', value: 'Almería, 1945' },
                  { label: 'Fallecimiento', value: 'Granada, 2023' },
                  { label: 'Profesión', value: 'Profesor titular de Filosofía del Derecho, UGR' },
                  { label: 'Lugar emblemático', value: 'Café Botánico, calle Duquesa, Granada' },
                  { label: 'Proyecto principal', value: 'Editor de Olvidos de Granada (nov. 1982 – may. 1987); OlvidosdeGranada.es (desde 2011)' },
                  { label: 'Tesis doctoral', value: 'Hipótesis sobre Clarín (UGR, 1982; Comares, 1985)' },
                ].map(item => (
                  <div key={item.label}>
                    <dt className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-1">{item.label}</dt>
                    <dd className="text-zinc-300 font-libre text-sm">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-[#E84878] p-6">
              <blockquote>
                <p className="font-crimson text-xl text-zinc-900 leading-snug italic mb-3">
                  «El trabajo de la memoria es esencial, casi nuestra única arma»
                </p>
                <cite className="font-libre text-xs text-zinc-900 opacity-70 not-italic tracking-wider uppercase">
                  Países · El País · 2004
                </cite>
              </blockquote>
            </div>

            <div className="bg-white border border-zinc-200 p-6">
              <blockquote>
                <p className="font-crimson text-xl text-zinc-900 leading-snug italic mb-3">
                  «Cuando un día despertemos de este sueño idiota, tendremos que volver a abrir los libros»
                </p>
                <cite className="font-libre text-xs text-zinc-500 not-italic tracking-wider uppercase">
                  Imaginaria · Canal Sur · 1999
                </cite>
              </blockquote>
            </div>

            <div className="bg-white border border-zinc-200 p-6">
              <h3 className="font-crimson font-bold text-zinc-900 text-xl mb-4 pb-3 border-b border-zinc-100">
                Proyectos destacados
              </h3>
              <ul className="space-y-3">
                {[
                  'Olvidos de Granada (nov. 1982 – may. 1987)',
                  'OlvidosdeGranada.es (desde 2011)',
                  'La Fábrica del Sur (1989–1990)',
                  'Rimado de ciudad (1983)',
                  'Hipótesis sobre Clarín (1985)',
                  'Salò. El infierno según Pasolini (1993)',
                  'Imaginaria (Canal Sur, 1999)',
                  'Columnas «La nuestra» en El País Andalucía (2004–2008)',
                  'Las cosas que hemos visto (Renacimiento)',
                  'Documental «Palabra a palabra» (2015)',
                ].map((item, i) => (
                  <li key={i} className="font-libre text-sm text-zinc-600 flex items-start gap-2">
                    <span className="text-[#E84878] flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
