'use client'

import { useState, useMemo } from 'react'
import inventario from './inventario.json'

type Entry = { title: string; author: string; dedicated?: boolean; annotated?: boolean }
type Category = { name: string; count: number; slug: string; entries: Entry[] }

const ALL_SLUG = 'todos'

export default function ArchivoPage() {
  const [activeSlug, setActiveSlug] = useState(ALL_SLUG)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'todos' | 'dedicados' | 'anotados'>('todos')

  const categories: Category[] = inventario.categories as Category[]

  const activeEntries = useMemo(() => {
    let entries: (Entry & { category: string })[] = []
    const cats = activeSlug === ALL_SLUG ? categories : categories.filter(c => c.slug === activeSlug)
    for (const cat of cats) {
      for (const e of cat.entries) {
        entries.push({ ...e, category: cat.name })
      }
    }
    if (filter === 'dedicados') entries = entries.filter(e => e.dedicated)
    if (filter === 'anotados') entries = entries.filter(e => e.annotated)
    if (search.trim()) {
      const q = search.toLowerCase()
      entries = entries.filter(e =>
        e.title.toLowerCase().includes(q) || e.author.toLowerCase().includes(q)
      )
    }
    return entries
  }, [activeSlug, search, filter, categories])

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Header */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Donación Mariano Maresca
          </p>
          <h1 className="font-crimson font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            La Biblioteca
          </h1>
          <p className="font-libre text-zinc-300 max-w-2xl text-lg leading-relaxed">
            Selección de obras canónicas, dedicadas y anotadas de la biblioteca personal
            de Mariano Maresca, clasificadas por temas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { n: '3.794', label: 'entradas totales' },
              { n: '3.521', label: 'libros' },
              { n: String(inventario.summary.dedicated), label: 'libros dedicados' },
              { n: String(inventario.summary.annotated), label: 'con anotaciones' },
            ].map(s => (
              <div key={s.label} className="border border-zinc-700 p-4">
                <div className="font-crimson font-bold text-3xl text-[#E84878]">{s.n}</div>
                <div className="font-libre text-xs text-zinc-400 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          <div className="flex gap-0 overflow-x-auto border-b border-zinc-100">
            <button
              onClick={() => setActiveSlug(ALL_SLUG)}
              className={`flex-shrink-0 px-4 py-3 font-libre text-xs uppercase tracking-widest border-b-2 transition-colors ${
                activeSlug === ALL_SLUG
                  ? 'border-[#E84878] text-zinc-900 font-bold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Todos
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveSlug(cat.slug)}
                className={`flex-shrink-0 px-4 py-3 font-libre text-xs uppercase tracking-widest border-b-2 transition-colors whitespace-nowrap ${
                  activeSlug === cat.slug
                    ? 'border-[#E84878] text-zinc-900 font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {cat.name} <span className="text-zinc-400 ml-1">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-3 py-3">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar título o autor…"
              className="flex-1 px-4 py-2 border border-zinc-300 font-libre text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 bg-white"
            />
            <div className="flex gap-2">
              {(['todos', 'dedicados', 'anotados'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 font-libre text-xs uppercase tracking-wider border transition-colors ${
                    filter === f
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-900'
                  }`}
                >
                  {f === 'todos' ? 'Todos' : f === 'dedicados' ? '★ Dedicados' : '✎ Anotados'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="font-libre text-sm text-zinc-500 mb-6">
          {activeEntries.length} {activeEntries.length === 1 ? 'obra' : 'obras'}
          {search ? ` para «${search}»` : ''}
        </p>

        <div className="divide-y divide-zinc-200 bg-white">
          {activeEntries.map((entry, i) => (
            <div key={i} className="py-3 px-4 flex items-baseline justify-between gap-4 hover:bg-[#FAF7F2] transition-colors">
              <div className="min-w-0">
                <span className="font-crimson text-zinc-900 text-base leading-snug">
                  {entry.dedicated && <span className="text-[#E84878] mr-1" title="Libro dedicado">★</span>}
                  {entry.annotated && <span className="text-purple-500 mr-1" title="Con anotaciones de Maresca">✎</span>}
                  {entry.title}
                </span>
                {entry.author && (
                  <span className="font-libre text-zinc-500 text-sm ml-2">— {entry.author}</span>
                )}
              </div>
              {activeSlug === ALL_SLUG && (
                <span className="flex-shrink-0 font-libre text-xs text-zinc-400 uppercase tracking-wider hidden sm:block">
                  {entry.category}
                </span>
              )}
            </div>
          ))}
        </div>

        {activeEntries.length === 0 && (
          <div className="text-center py-20 text-zinc-400 font-libre">
            Sin resultados{search ? ` para «${search}»` : ''}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-6 font-libre text-xs text-zinc-500">
          <span><span className="text-[#E84878]">★</span> Libro con dedicatoria autógrafa</span>
          <span><span className="text-purple-500">✎</span> Libro con anotaciones de Maresca</span>
        </div>
      </div>

    </div>
  )
}
