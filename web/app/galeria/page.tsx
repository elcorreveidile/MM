import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galería — Las cosas que hemos leído · Mariano Maresca',
  description: 'Fotografías de la exposición «Las cosas que hemos leído». Biblioteca de Derecho, Universidad de Granada, 29 de mayo – 31 de julio de 2026.',
}

const fotos = [
  {
    src: '/exposición/foto-01.jpg',
    alt: 'Las estanterías de la exposición',
    caption: 'Las estanterías. Selección representativa de la biblioteca personal de Mariano Maresca: ejemplares de Olvidos de Granada, La Fábrica del Sur, cine, pensamiento político y poesía.',
  },
  {
    src: '/exposición/foto-14.jpg',
    alt: 'Cartel de la exposición en la puerta de entrada',
    caption: 'El cartel de entrada a la Biblioteca de Derecho. Mariano Maresca leyendo el periódico Ideal. Diseño: Manigua. 29.5 / 31.7 / 2026.',
  },
  {
    src: '/exposición/foto-15.jpg',
    alt: 'Vista general de la sala de exposición',
    caption: 'Vista general de la sala. Los paneles con los retratos de Mariano y el texto «Mariano y los libros», de Luis García Montero, y las vitrinas con los documentos expuestos.',
  },
  {
    src: '/exposición/foto-12.jpg',
    alt: 'La sala de exposición con paneles y estanterías',
    caption: 'La sala de la exposición. Paneles con «Las cosas que hemos leído» y el logotipo MM, las estanterías al fondo y los viniles en las ventanas.',
  },
  {
    src: '/exposición/foto-13.jpg',
    alt: 'Paneles con citas de Mariano Maresca',
    caption: '«El trabajo de la memoria es esencial, casi nuestra única arma» · «Cuando un día despertemos de este sueño idiota, tendremos que volver a abrir los libros». Junto al televisor que reproduce fragmentos de Imaginaria (Canal Sur, 1999).',
  },
  {
    src: '/exposición/foto-16.jpg',
    alt: 'Vitrina con libros dedicados y manuscritos',
    caption: 'Vitrina con libros dedicados y manuscritos. En primer plano, Granada Tango (1982).',
  },
  {
    src: '/exposición/foto-3.jpg',
    alt: 'Lectura en el acto de inauguración',
    caption: 'Antonio Mª Álvarez Arias de Saavedra leyendo en el acto de inauguración. Al fondo, Pedro Mercado, rector de la Universidad de Granada.',
  },
  {
    src: '/exposición/foto-7.jpg',
    alt: 'El público durante el acto de inauguración',
    caption: 'El público durante el acto de inauguración. Biblioteca de la Facultad de Derecho, UGR, 29 de mayo de 2026.',
  },
  {
    src: '/exposición/foto-9.jpg',
    alt: 'El público asistente',
    caption: 'En primera fila, la familia de Mariano Maresca: sus hermanas Luisa y Maruja y su hermano Paco.',
  },
  {
    src: '/exposición/foto-17.jpg',
    alt: 'Comida tras la inauguración',
    caption: 'Comida de celebración tras la inauguración. La familia de Mariano Maresca, Nene y Javier Benítez, amigos de Mariano y promotores de la exposición, junto al equipo. 29 de mayo de 2026.',
  },
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Biblioteca de Derecho · Universidad de Granada
          </p>
          <h1 className="font-crimson font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Galería
          </h1>
          <p className="font-libre text-zinc-300 max-w-2xl text-lg leading-relaxed">
            Fotografías de la exposición <em>Las cosas que hemos leído</em>. Inauguración: 29 de mayo de 2026.
          </p>
          <p className="font-libre text-zinc-500 text-xs tracking-widest uppercase mt-4">
            Fotos: Javier Martín Ruiz
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 md:columns-2 gap-4">
          {fotos.map((foto, i) => (
            <figure key={i} className="break-inside-avoid mb-4 bg-white">
              <div className="relative w-full overflow-hidden bg-zinc-200">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 border-t border-zinc-100">
                <p className="font-libre text-xs text-zinc-500 leading-relaxed">{foto.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

    </div>
  )
}
