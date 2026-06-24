'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/actividades', label: 'Actividades' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#1a3a28] text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="w-10 h-10 border-2 border-[#c4893a] rounded-full flex items-center justify-center text-[#c4893a] font-serif font-bold text-lg select-none group-hover:bg-[#c4893a] group-hover:text-white transition-colors">
              EP
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-lg font-semibold tracking-wide text-white group-hover:text-[#e8c980] transition-colors">
                El páramo lee
              </span>
              <span className="block text-xs text-[#a8c5b0] tracking-wider uppercase font-sans">
                Asociación Cultural
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-sans text-[#d4e8da] hover:text-[#e8c980] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/agenda"
              className="ml-2 px-4 py-2 bg-[#c4893a] hover:bg-[#a8722e] text-white text-sm font-sans font-semibold rounded-full transition-colors"
            >
              Próximos eventos
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[#d4e8da] hover:text-white hover:bg-[#2d5a3d] transition-colors"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-[#2d5a3d] space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[#d4e8da] hover:text-white hover:bg-[#2d5a3d] rounded-md font-sans text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/agenda"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-2 bg-[#c4893a] hover:bg-[#a8722e] text-white text-sm font-sans font-semibold rounded-full transition-colors"
              >
                Próximos eventos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
