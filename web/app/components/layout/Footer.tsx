import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white text-zinc-900 flex items-center justify-center font-serif text-2xl font-bold">
                MM
              </div>
              <div>
                <h3 className="text-lg font-crimson font-semibold text-white">
                  Mariano Maresca
                </h3>
                <p className="text-sm text-zinc-400">Memoria Viva</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Exposición homenaje a Mariano Maresca, editor de Olvidosdegranada y figura fundamental de la cultura granadina.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-libre">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/biografia" className="hover:text-white transition-colors">Biografía</Link></li>
              <li><Link href="/cronologia" className="hover:text-white transition-colors">Cronología</Link></li>
              <li><Link href="/archivo" className="hover:text-white transition-colors">Archivo</Link></li>
              <li><Link href="/galeria" className="hover:text-white transition-colors">Galería</Link></li>
              <li><Link href="/exposicion" className="hover:text-white transition-colors">Exposición</Link></li>
            </ul>
          </div>

          {/* Column 3: Información */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-libre">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/exposicion#informacion" className="hover:text-white transition-colors">Proyecto</Link></li>
              <li><Link href="/exposicion#informacion" className="hover:text-white transition-colors">Promotores</Link></li>
              <li><Link href="/exposicion#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li><Link href="https://olvidosdegranada.es" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Olvidosdegranada</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            © 2026 Proyecto Exposición Mariano Maresca. Asociación Cultural Olvidos de Granada.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/creditos" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Créditos
            </Link>
            <Link href="/privacidad" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
