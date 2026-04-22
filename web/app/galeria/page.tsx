'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function GaleriaPage() {
  const [filter, setFilter] = useState('todos')

  // Datos simulados de galería - luego vendrán de Sanity CMS
  const items = [
    {
      id: 1,
      titulo: 'Mariano Maresca en el Ayuntamiento',
      categoria: 'foto',
      ano: 1982,
      descripcion: 'Maresca durante la presentación de Granada Tango',
      disciplina: 'música'
    },
    {
      id: 2,
      titulo: 'Cuarteto Cedrón en concierto',
      categoria: 'video',
      ano: 1982,
      descripcion: 'Actuación del Cuarteto Cedrón en las Jornadas del Tango',
      disciplina: 'música'
    },
    {
      id: 3,
      titulo: 'Entrevista a Mariano Maresca',
      categoria: 'audio',
      ano: 1990,
      descripcion: 'Entrevista radiofónica sobre el Festival de Tango',
      disciplina: 'música'
    },
    {
      id: 4,
      titulo: 'Portada Olvidosdegranada nº1',
      categoria: 'documento',
      ano: 1982,
      descripcion: 'Primera portada de la revista',
      disciplina: 'literatura'
    },
    {
      id: 5,
      titulo: 'Javier Egea y Mariano Maresca',
      categoria: 'foto',
      ano: 1985,
      descripcion: 'Los dos editadores de Olvidosdegranada',
      disciplina: 'literatura'
    },
    {
      id: 6,
      titulo: 'Festival de Tango 1990',
      categoria: 'video',
      ano: 1990,
      descripcion: 'Imágenes del primer festival',
      disciplina: 'música'
    }
  ]

  const categorias = ['todos', 'foto', 'video', 'audio', 'documento']

  const filteredItems = filter === 'todos'
    ? items
    : items.filter(item => item.categoria === filter)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-4">
            Galería Multimedia
          </h1>
          <p className="text-xl text-zinc-600 font-libre max-w-3xl">
            Fotografías, videos, audio y documentos de la vida y obra de Mariano Maresca
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => setFilter(categoria)}
              className={`px-6 py-2 rounded-full font-libre font-semibold transition-all ${
                filter === categoria
                  ? 'bg-zinc-900 text-white'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Placeholder for media */}
              <div className="relative h-48 bg-zinc-200 flex items-center justify-center">
                {item.categoria === 'foto' && (
                  <div className="text-zinc-400 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Imagen</span>
                  </div>
                )}
                {item.categoria === 'video' && (
                  <div className="text-zinc-400 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    <span className="text-sm">Video</span>
                  </div>
                )}
                {item.categoria === 'audio' && (
                  <div className="text-zinc-400 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Audio</span>
                  </div>
                )}
                {item.categoria === 'documento' && (
                  <div className="text-zinc-400 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Documento</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-libre font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">
                    {item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1)}
                  </span>
                  <span className="text-xs text-zinc-500 font-libre">{item.ano}</span>
                </div>
                <h3 className="text-lg font-crimson font-bold text-zinc-900 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-zinc-600 font-libre text-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-zinc-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-crimson font-bold text-zinc-900 mb-4">
            Colección en crecimiento
          </h2>
          <p className="text-zinc-700 mb-6 font-libre max-w-2xl mx-auto">
            Estamos digitalizando y añadiendo constantemente nuevo material al archivo.
            Si tienes fotografías, videos o documentos relacionados con Mariano Maresca,
            nos encantaría incorporarlos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contacto@marianomaresca.es"
              className="bg-zinc-900 text-white px-6 py-3 rounded-full font-libre font-semibold hover:bg-zinc-800 transition-colors"
            >
              Enviar material
            </a>
            <a
              href="/exposicion"
              className="border-2 border-zinc-900 text-zinc-900 px-6 py-3 rounded-full font-libre font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Información sobre la exposición
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
