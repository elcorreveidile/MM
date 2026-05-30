import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero — fondo rosa editorial */}
      <section className="bg-[#E84878] text-zinc-900 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

            {/* Nombre — ocupa 8 columnas, tipografía muy grande */}
            <div className="lg:col-span-8">
              <p className="font-libre text-xs tracking-[0.3em] uppercase mb-6 opacity-70">
                Granada, 1945 — 2023
              </p>
              <h1 className="font-crimson font-bold leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
                Mariano<br />Maresca
              </h1>
              <p className="font-libre text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90">
                Había en Granada un hombre que lo había leído todo, que escuchaba mejor que nadie y que sabía a quién presentar con quién. Se llamaba Mariano Maresca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/biografia" className="bg-zinc-900 text-white px-8 py-4 font-libre font-semibold hover:bg-zinc-700 transition-colors text-center">
                  Descubrir su biografía
                </Link>
                <Link href="/exposicion" className="border-2 border-zinc-900 text-zinc-900 px-8 py-4 font-libre font-semibold hover:bg-zinc-900 hover:text-white transition-colors text-center">
                  La exposición
                </Link>
              </div>
            </div>

            {/* Etiqueta lateral — 4 columnas */}
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-libre text-xs tracking-[0.3em] uppercase opacity-60 mb-2">
                Memoria Viva de la
              </p>
              <p className="font-crimson text-3xl md:text-4xl font-bold opacity-80 leading-tight">
                Cultura<br />Granadina
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="h-1 bg-zinc-900" />

      {/* Disciplinas — fondo crudo */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-crimson font-bold text-zinc-900" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Las 9 Disciplinas
            </h2>
            <span className="font-libre text-sm text-zinc-500 tracking-widest uppercase hidden md:block">
              Artísticas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Literatura', slug: 'literatura' },
              { name: 'Música', slug: 'musica' },
              { name: 'Cine', slug: 'cine' },
              { name: 'Fotografía', slug: 'fotografia' },
              { name: 'Arquitectura', slug: 'arquitectura' },
              { name: 'Diseño', slug: 'diseno' },
              { name: 'Cómic', slug: 'comic' },
              { name: 'Filosofía', slug: 'filosofia' },
              { name: 'Pensamiento Político', slug: 'pensamiento-politico' },
            ].map((discipline) => (
              <Link
                key={discipline.slug}
                href={`/disciplinas/${discipline.slug}`}
                className="group"
              >
                <div className="overflow-hidden bg-zinc-200">
                  <div className="relative aspect-square">
                    <Image
                      src={`/disciplinas/${discipline.slug}.png`}
                      alt={discipline.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-zinc-200 group-hover:bg-[#E84878] transition-colors duration-300">
                    <h3 className="font-libre font-semibold text-zinc-900 tracking-wide group-hover:text-white transition-colors text-sm uppercase">
                      {discipline.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Olvidosdegranada — fondo oscuro */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
                1982 · 1987 · 2011
              </p>
              <h2 className="font-crimson font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Olvidos de Granada
              </h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed font-libre">
                Mariano Maresca fundó y dirigió la revista <em>Olvidos de Granada</em> (noviembre 1982 – mayo 1987), publicación fundamental para la cultura de la ciudad. En 2011 nació OlvidosdeGranada.es, versión digital y repositorio de todos los números en PDF.
              </p>
              <p className="text-zinc-400 mb-10 leading-relaxed font-libre">
                A través de sus páginas, Mariano dio voz a escritores, artistas, músicos y pensadores, construyendo un corpus documental invaluable.
              </p>
              <Link
                href="https://olvidosdegranada.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E84878] text-white px-8 py-4 font-libre font-semibold hover:bg-[#d03868] transition-colors"
              >
                Visitar OlvidosdeGranada.es
              </Link>
            </div>
            <div className="space-y-0 border border-zinc-700">
              {[
                { title: 'Editoriales', desc: 'Reflexiones sobre la cultura y la sociedad granadina' },
                { title: 'Palabras', desc: 'Ensayos, artículos y crónicas culturales' },
                { title: 'Piezas y Procesos', desc: 'Entrevistas y documentación de procesos creativos' },
                { title: 'Memoria de Granada', desc: 'Archivo histórico y recuperación de la memoria cultural' },
              ].map((item, i) => (
                <div key={i} className="p-6 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition-colors">
                  <h3 className="font-crimson font-semibold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-500 font-libre text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Botánico y La Tertulia — fondo crudo */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
                Dos lugares · Dos épocas · Granada
              </p>
              <h2 className="font-crimson font-bold text-zinc-900 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                La Tertulia y el Botánico
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-lg text-zinc-700 leading-relaxed font-libre">
                  <a href="https://www.instagram.com/tertuliagranada?igsh=Zmd2NGU4amZxYmo5" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#E84878] transition-colors">La Tertulia</a> —el mítico bar-librería de la calle Pintor López Mezquita, fundado en 1980 por Horacio Rébora— fue el corazón de la vida cultural y nocturna de Mariano desde sus inicios. Allí nació <em>La Otra Sentimentalidad</em> con García Montero, Egea y Álvaro Salvador. Allí redactó las bases del concurso de letras de tango que dio lugar al libro colectivo <em>Granada Tango</em> (1982). Tres generaciones de escritores, músicos y artistas granadinos pasaron por sus mesas. Hoy, tras 46 años, La Tertulia busca sobrevivir convirtiéndose en asociación cultural: un grupo de clientes y amigos ha lanzado una plataforma para inscribirse como socio y comprometerse al pago de una cuota periódica.
                </p>
                <p className="text-zinc-600 leading-relaxed font-libre">
                  Con el tiempo llegó también el <a href="https://botanicocafe.es" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#E84878] transition-colors">café Botánico</a> —calle Duquesa, junto a la Facultad—: allí citaba a comer a amigos, a la familia, a compañeros y a sus discípulos. Pero La Tertulia siguió siendo La Tertulia, y Mariano siguió yendo hasta el ictus de 2011.
                </p>
              </div>
              <blockquote className="border-l-4 border-[#E84878] pl-6 py-2 mb-8">
                <p className="text-zinc-700 italic font-libre text-lg leading-relaxed">
                  «El trabajo de la memoria es esencial, casi nuestra única arma»
                </p>
                <cite className="text-sm text-zinc-500 mt-2 font-libre not-italic block">
                  — Columna «La nuestra», El País Andalucía
                </cite>
              </blockquote>
            </div>
            <div className="bg-zinc-900 text-white p-8">
              <h3 className="font-crimson font-semibold text-2xl text-white mb-8 pb-4 border-b border-zinc-700">
                Exposición homenaje 2023
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Fechas', value: 'Abril – Junio 2023 · Inauguración: 20 de abril' },
                  { label: 'Lugar', value: 'Café Botánico · Calle Duquesa, Granada' },
                  { label: 'Organizadores', value: 'José Miguel Molero, Luis Jarillo, Manuel Rodríguez Alcázar, Rafael Goicoechea, Rosa Alonso, Nacho Mendiguchía' },
                  { label: 'Contenido', value: 'Imágenes y textos, placa conmemorativa en su mesa habitual, homenaje póstumo' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-xs font-libre tracking-widest uppercase text-[#E84878] mb-1">{item.label}</p>
                    <p className="text-zinc-300 font-libre text-sm leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Proyectos — fondo blanco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-crimson font-bold text-zinc-900" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Proyectos Destacados
            </h2>
            <span className="font-libre text-sm text-zinc-400 tracking-widest uppercase hidden md:block">
              Selección
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
            {[
              { title: 'Granada Tango', year: '1982', description: 'Libro colectivo surgido de un concurso de letras de tango en La Tertulia. Maresca redactó las bases del concurso y escribió el texto de presentación.', category: 'Música' },
              { title: 'Olvidos de Granada', year: 'nov. 1982–may. 1987', description: 'Fundó y dirigió la revista que fue archivo vivo de la creación artística granadina. En 2011 nació OlvidosdeGranada.es, con todos los números en PDF.', category: 'Literatura' },
              { title: 'La Fábrica del Sur', year: '1989–1990', description: 'Dirigió esta revista donde el diseño era argumento y la tipografía tenía tanto peso como el texto.', category: 'Diseño' },
              { title: 'Las cosas que hemos visto', year: '2011', description: 'Sus columnas de El País Andalucía reunidas en libro, con prólogo de Luis García Montero. El título inspira esta exposición.', category: 'Literatura' },
              { title: 'Saló: el infierno según Pasolini', year: '1993', description: 'Coeditó con Juan Ignacio Mendiguchía el libro-catálogo de la Filmoteca Andalucía sobre Pasolini, uno de sus grandes referentes intelectuales.', category: 'Cine' },
              { title: 'Documental «Palabra a palabra»', year: '2015', description: 'José Sánchez Montes documentó su recuperación tras el ictus de 2011. Narrado por Almudena Grandes. Íntegramente optimista.', category: 'Cine' },
            ].map((project, index) => (
              <div key={index} className="bg-white p-8 hover:bg-[#FAF7F2] transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-libre font-semibold bg-[#E84878] text-white px-3 py-1">
                    {project.category}
                  </span>
                  <span className="text-sm text-zinc-400 font-libre">{project.year}</span>
                </div>
                <h3 className="font-crimson font-semibold text-zinc-900 mb-3 text-xl leading-snug">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-libre text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Exposición — fondo rosa */}
      <section className="py-20 bg-[#E84878]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-crimson font-bold text-zinc-900 mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            La Exposición · 2026
          </h2>
          <p className="text-xl text-zinc-900 mb-10 font-libre max-w-2xl mx-auto opacity-80 leading-relaxed">
            Abierta hasta el 31 de julio en la Biblioteca de Derecho de la Universidad de Granada. Documentos, fotografías y la biblioteca personal de Mariano Maresca.
          </p>
          <Link
            href="/exposicion"
            className="inline-block bg-zinc-900 text-white px-10 py-5 font-libre font-semibold hover:bg-zinc-700 transition-colors text-lg"
          >
            Ver la exposición
          </Link>
        </div>
      </section>

    </div>
  )
}
