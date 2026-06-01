'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/admin', label: 'Inicio' },
  { href: '/admin/socios', label: 'Contactos' },
  { href: '/admin/solicitudes', label: 'Solicitudes' },
  { href: '/admin/contenido', label: 'Contenido' },
  { href: '/admin/correo', label: 'Correo' },
  { href: '/admin/avisos', label: 'Avisos' },
  { href: '/admin/calendario', label: 'Calendario' },
  { href: '/admin/propuestas-socios', label: 'Propuestas' },
  { href: '/admin/votaciones', label: 'Votaciones' },
  { href: '/admin/frase', label: 'La presente' },
  { href: '/admin/testimonios', label: 'Testimonios' },
]

export default function AdminNav({
  email,
  pendientes,
  signOut,
}: {
  email: string
  pendientes: number
  signOut: () => Promise<void>
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} className="relative z-50">
      <nav className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo — botón de menú en móvil */}
          <button
            onClick={() => setOpen(v => !v)}
            className="flex items-center gap-2 sm:cursor-default focus:outline-none"
            aria-label="Menú de administración"
          >
            <div className="w-7 h-7 bg-[#F2BE2A] flex items-center justify-center shrink-0">
              <span className="font-crimson font-bold text-[#8B1A1A] text-xs">MM</span>
            </div>
            <span className="font-libre text-xs tracking-widest uppercase text-zinc-300 hidden sm:inline">Admin</span>
            <span className="font-libre text-xs text-zinc-500 sm:hidden">{open ? '▲' : '▼'}</span>
          </button>

          {/* Nav links — solo desktop */}
          <div className="hidden sm:flex gap-4">
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-libre text-xs text-zinc-300 hover:text-white transition-colors flex items-center gap-1">
                {label}
                {label === 'Solicitudes' && pendientes > 0 && (
                  <span className="bg-[#E84878] text-white font-libre text-xs px-1.5 py-0.5 rounded-full leading-none">
                    {pendientes}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-libre text-xs text-zinc-400 hidden md:inline">{email}</span>
          <form action={signOut}>
            <button type="submit" className="font-libre text-xs text-zinc-400 hover:text-white transition-colors">
              Salir
            </button>
          </form>
        </div>
      </nav>

      {/* Dropdown móvil */}
      {open && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-zinc-900 border-t border-zinc-800 shadow-xl">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className="flex items-center justify-between px-5 py-3.5 font-libre text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border-b border-zinc-800">
              {label}
              {label === 'Solicitudes' && pendientes > 0 && (
                <span className="bg-[#E84878] text-white font-libre text-xs px-1.5 py-0.5 rounded-full leading-none">
                  {pendientes}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
