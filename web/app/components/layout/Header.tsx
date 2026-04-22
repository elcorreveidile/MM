'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-zinc-900 text-white flex items-center justify-center font-serif text-xl font-bold">
              MM
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-crimson font-semibold text-zinc-900">
                Mariano Maresca
              </h1>
              <p className="text-xs text-zinc-600 font-libre">
                Memoria Viva de la Cultura Granadina
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/biografia" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Biografía
            </Link>
            <Link href="/cronologia" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Cronología
            </Link>
            <div className="relative group">
              <button className="text-zinc-700 hover:text-zinc-900 font-libre text-sm flex items-center">
                Disciplinas
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-200 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/disciplinas/literatura" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Literatura</Link>
                <Link href="/disciplinas/musica" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Música</Link>
                <Link href="/disciplinas/cine" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Cine</Link>
                <Link href="/disciplinas/fotografia" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Fotografía</Link>
                <Link href="/disciplinas/arquitectura" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Arquitectura</Link>
                <Link href="/disciplinas/diseno" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Diseño</Link>
                <Link href="/disciplinas/comic" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Cómic</Link>
                <Link href="/disciplinas/filosofia" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50">Filosofía</Link>
              </div>
            </div>
            <Link href="/archivo" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Archivo
            </Link>
            <Link href="/galeria" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Galería
            </Link>
            <Link href="/exposicion" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Exposición
            </Link>
            <Link href="/buscador" className="text-zinc-700 hover:text-zinc-900 font-libre text-sm">
              Buscador
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link href="/biografia" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Biografía</Link>
            <Link href="/cronologia" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Cronología</Link>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-zinc-900 mb-2">Disciplinas</p>
              <div className="space-y-1 ml-4">
                <Link href="/disciplinas/literatura" className="block py-1 text-sm text-zinc-600">Literatura</Link>
                <Link href="/disciplinas/musica" className="block py-1 text-sm text-zinc-600">Música</Link>
                <Link href="/disciplinas/cine" className="block py-1 text-sm text-zinc-600">Cine</Link>
                <Link href="/disciplinas/fotografia" className="block py-1 text-sm text-zinc-600">Fotografía</Link>
                <Link href="/disciplinas/arquitectura" className="block py-1 text-sm text-zinc-600">Arquitectura</Link>
                <Link href="/disciplinas/diseno" className="block py-1 text-sm text-zinc-600">Diseño</Link>
                <Link href="/disciplinas/comic" className="block py-1 text-sm text-zinc-600">Cómic</Link>
                <Link href="/disciplinas/filosofia" className="block py-1 text-sm text-zinc-600">Filosofía</Link>
              </div>
            </div>
            <Link href="/archivo" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Archivo</Link>
            <Link href="/galeria" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Galería</Link>
            <Link href="/exposicion" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Exposición</Link>
            <Link href="/buscador" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-50 rounded-md">Buscador</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
