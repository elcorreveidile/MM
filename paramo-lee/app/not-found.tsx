import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="font-sans text-[#c4893a] text-xs tracking-widest uppercase mb-4">Error 404</p>
      <h1 className="font-serif text-6xl font-bold text-[#1a3a28] mb-4">Página no encontrada</h1>
      <p className="font-sans text-[#5a5a55] max-w-md mb-10">
        Parece que esta página se ha perdido en el páramo. No pasa nada, volvamos al inicio.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-[#1a3a28] hover:bg-[#2d5a3d] text-white font-sans font-semibold rounded-full transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
