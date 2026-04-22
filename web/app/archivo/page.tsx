'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ArchivoPage() {
  const [filters, setFilters] = useState({
    tipo: 'todos',
    ano: 'todos',
    busqueda: ''
  })

  // Datos simulados de documentos - luego vendrán de Sanity CMS
  const documentos = [
    {
      id: 1,
      titulo: 'Granada tiene un tango',
      tipo: 'articulo',
      ano: 1982,
      revista: 'Olvidosdegranada',
      numero: 1,
      descripcion: 'Discurso fundacional de Mariano Maresca en el Ayuntamiento de Granada.',
      autor: 'Mariano Maresca',
      etiquetas: ['tango', 'fundacional', 'discurso']
    },
    {
      id: 2,
      titulo: 'La otra sentimentalidad',
      tipo: 'articulo',
      ano: 1983,
      revista: 'Olvidosdegranada',
      numero: 3,
      descripcion: 'Ensayo sobre la poesía granadina de los años 80.',
      autor: 'Javier Egea',
      etiquetas: ['poesía', 'granada', 'otra sentimentalidad']
    },
    {
      id: 3,
      titulo: 'Cuarteto Cedrón en Granada',
      tipo: 'entrevista',
      ano: 1982,
      revista: 'Olvidosdegranada',
      numero: 1,
      descripcion: 'Entrevista con el Cuarteto Cedrón sobre el exilio argentino.',
      autor: 'Mariano Maresca',
      etiquetas: ['música', 'exilio', 'tango']
    },
    {
      id: 4,
      titulo: 'Carta a los colaboradores',
      tipo: 'carta',
      ano: 1984,
      revista: 'Olvidosdegranada',
      numero: null,
      descripcion: 'Correspondencia con colaboradores de la revista.',
      autor: 'Mariano Maresca',
      etiquetas: ['editorial', 'correspondencia']
    },
    {
      id: 5,
      titulo: 'Festival de Tango 1990',
      tipo: 'foto',
      ano: 1990,
      revista: null,
      numero: null,
      descripcion: 'Fotografías del primer Festival de Tango de Granada.',
      autor: 'Archivo Olvidos',
      etiquetas: ['festival', 'tango', 'evento']
    }
  ]

  const tipos = ['articulo', 'entrevista', 'carta', 'foto', 'manuscrito']
  const anos = [...new Set(documentos.map(d => d.ano))].sort()

  const filteredDocs = documentos.filter(doc => {
    const matchTipo = filters.tipo === 'todos' || doc.tipo === filters.tipo
    const matchAno = filters.ano === 'todos' || doc.ano === parseInt(filters.ano)
    const matchBusqueda = filters.busqueda === '' ||
      doc.titulo.toLowerCase().includes(filters.busqueda.toLowerCase()) ||
      doc.descripcion.toLowerCase().includes(filters.busqueda.toLowerCase())
    return matchTipo && matchAno && matchBusqueda
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-crimson font-bold text-zinc-900 mb-4">
            Archivo Documental
          </h1>
          <p className="text-xl text-zinc-600 font-libre max-w-3xl">
            Acceso digital al archivo completo de Mariano Maresca y Olvidosdegranada
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-crimson font-bold text-zinc-900 mb-2">
              {documentos.length}
            </div>
            <div className="text-sm text-zinc-600 font-libre">Documentos digitales</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-crimson font-bold text-zinc-900 mb-2">
              17
            </div>
            <div className="text-sm text-zinc-600 font-libre">Números Olvidos</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-crimson font-bold text-zinc-900 mb-2">
              1982-2023
            </div>
            <div className="text-sm text-zinc-600 font-libre">Periodo cubierto</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-crimson font-bold text-zinc-900 mb-2">
              {anos.length}
            </div>
            <div className="text-sm text-zinc-600 font-libre">Años representados</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Tipo de documento</label>
              <select
                value={filters.tipo}
                onChange={(e) => setFilters({...filters, tipo: e.target.value})}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              >
                <option value="todos">Todos los tipos</option>
                {tipos.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Año</label>
              <select
                value={filters.ano}
                onChange={(e) => setFilters({...filters, ano: e.target.value})}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              >
                <option value="todos">Todos los años</option>
                {anos.map(ano => (
                  <option key={ano} value={ano}>{ano}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Buscar</label>
              <input
                type="text"
                value={filters.busqueda}
                onChange={(e) => setFilters({...filters, busqueda: e.target.value})}
                placeholder="Título, descripción, autor..."
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-zinc-600 font-libre">
            Mostrando <span className="font-semibold">{filteredDocs.length}</span> de {documentos.length} documentos
          </p>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-libre font-semibold bg-zinc-900 text-white px-3 py-1 rounded-full">
                    {doc.tipo.charAt(0).toUpperCase() + doc.tipo.slice(1)}
                  </span>
                  {doc.revista && (
                    <span className="ml-2 text-xs text-zinc-600 font-libre">
                      {doc.revista} {doc.numero && `#${doc.numero}`}
                    </span>
                  )}
                </div>
                <span className="text-sm text-zinc-500 font-libre">{doc.ano}</span>
              </div>
              <h3 className="text-xl font-crimson font-bold text-zinc-900 mb-2">
                {doc.titulo}
              </h3>
              <p className="text-zinc-700 font-libre mb-4 leading-relaxed">
                {doc.descripcion}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600 font-libre">
                  Autor: {doc.autor}
                </span>
                <Link
                  href={`/archivo/${doc.id}`}
                  className="text-zinc-900 hover:text-zinc-700 font-libre text-sm font-semibold"
                >
                  Ver documento →
                </Link>
              </div>
              {doc.etiquetas && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {doc.etiquetas.map(tag => (
                    <span key={tag} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-crimson font-bold mb-4">
            ¿Tienes material de Mariano Maresca?
          </h2>
          <p className="text-zinc-300 mb-6 font-libre">
            Si tienes documentos, fotografías u otros materiales que puedan enriquecer este archivo,
            nos encantaría incorporarlos.
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
