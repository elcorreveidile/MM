import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Las cosas que hemos leído — Mariano Maresca',
  description: 'Muestra significativa de la biblioteca personal de Mariano Maresca. Organizada por la Asociación Cultural Olvidos de Granada.',
}

export default function ExposicionPage() {
  return (
    <div className="min-h-screen bg-[#E8447A] text-black font-libre">

      {/* Hero: título + texto intro */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Columna izquierda: título + texto de la exposición */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tight mb-8">
              Las cosas<br />
              que hemos<br />
              leído
            </h1>

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

      {/* Las cuatro vitrinas */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10 tracking-tight">
            Las cuatro vitrinas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {[
              {
                num: 'I',
                title: 'Pasolini',
                desc: 'Dedicada a Pasolini y al trabajo editorial de Saló: el infierno según Pasolini.',
              },
              {
                num: 'II',
                title: 'Almudena Grandes y Luis García Montero',
                desc: 'La que recoge su relación con Almudena Grandes y Luis García Montero.',
              },
              {
                num: 'III',
                title: 'Escritos propios',
                desc: 'La centrada en sus propios escritos y materiales de trabajo.',
              },
              {
                num: 'IV',
                title: 'Libros dedicados',
                desc: 'La formada por libros dedicados por autores amigos.',
              },
            ].map((v) => (
              <div key={v.num} className="bg-black p-8">
                <div className="text-5xl font-black text-[#E8447A] mb-4 leading-none">{v.num}</div>
                <h3 className="text-lg font-bold mb-3 leading-snug">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos del proyecto */}
      <section className="bg-[#E8447A] py-12 border-t border-black/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <dt className="font-black uppercase text-xs tracking-widest mb-1 opacity-60">Organización</dt>
              <dd className="font-medium">Asociación Cultural Olvidos de Granada<br />Universidad de Granada<br />Biblioteca Pública de Andalucía</dd>
            </div>
            <div>
              <dt className="font-black uppercase text-xs tracking-widest mb-1 opacity-60">Comisariado</dt>
              <dd className="font-medium">Javier Benítez</dd>
            </div>
            <div>
              <dt className="font-black uppercase text-xs tracking-widest mb-1 opacity-60">Año</dt>
              <dd className="font-medium">2026</dd>
            </div>
          </dl>
        </div>
      </section>

    </div>
  )
}
