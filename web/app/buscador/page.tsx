'use client'

import { useState } from 'react'
import Link from 'next/link'

interface SearchResult {
  tipo: string
  titulo: string
  descripcion: string
}

export default function BuscadorPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setHasSearched(true)
    // Aquí irá la lógica de búsqueda real con Sanity CMS
    // Por ahora simulamos resultados
    if (query.trim()) {
      setResults([
        { tipo: 'biografía', titulo: 'Mariano Maresca', descripcion: 'Profesor de Filosofía del Derecho y editor de Olvidosdegranada' },
        { tipo: 'artículo', titulo: 'Granada tiene un tango', descripcion: 'Discurso fundacional de 1982' },
        { tipo: 'evento', titulo: 'Festival de Tango 1990', descripcion: 'Primer festival organizado por Maresca' }
      ])
    } else {
      setResults([])
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-4">
            Buscador
          </h1>
          <p className="text-xl text-zinc-600 font-libre max-w-3xl">
            Busca en toda la información sobre Mariano Maresca y Olvidosdegranada
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="¿Qué estás buscando?"
              className="w-full px-6 py-4 pr-12 text-lg border-2 border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-900 text-white px-6 py-2 rounded-lg font-libre font-semibold hover:bg-zinc-800 transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Quick Categories */}
        {!hasSearched && (
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-crimson font-bold text-zinc-900 mb-6">
              Búsquedas populares
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Granada Tango', 'Festival Tango', 'Olvidosdegranada', 'Javier Egea', 'Cuarteto Cedrón', 'La otra sentimentalidad'].map(term => (
                <button
                  key={term}
                  onClick={() => { setQuery(term); handleSearch({ preventDefault: () => {} } as React.FormEvent); }}
                  className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full font-libre hover:bg-zinc-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <p className="text-zinc-600 font-libre">
                {query.trim() ? `Resultados para "${query}"` : 'Introduce un término de búsqueda'}
              </p>
              {results.length > 0 && (
                <p className="text-sm text-zinc-500 mt-1">
                  Se encontraron {results.length} resultados
                </p>
              )}
            </div>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-libre font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">
                        {result.tipo}
                      </span>
                    </div>
                    <h3 className="text-xl font-crimson font-bold text-zinc-900 mb-2">
                      {result.titulo}
                    </h3>
                    <p className="text-zinc-700 font-libre leading-relaxed">
                      {result.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-zinc-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-zinc-600 font-libre">
                  No se encontraron resultados para "{query}"
                </p>
                <p className="text-zinc-500 text-sm mt-2">
                  Intenta con otros términos de búsqueda
                </p>
              </div>
            ) : null}
          </div>
        )}

        {/* Help */}
        <div className="mt-16 bg-zinc-50 p-8 rounded-lg">
          <h3 className="text-2xl font-crimson font-bold text-zinc-900 mb-4">
            Consejos de búsqueda
          </h3>
          <ul className="space-y-2 text-zinc-700 font-libre">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Usa términos específicos para mejores resultados
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Puedes buscar por nombres, fechas, lugares o disciplinas artísticas
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              La búsqueda no distingue entre mayúsculas y minúsculas
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
