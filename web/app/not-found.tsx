import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-crimson font-bold text-zinc-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-crimson font-bold text-zinc-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-zinc-600 font-libre mb-8 max-w-md mx-auto">
          Lo sentimos, pero la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-full font-libre font-semibold hover:bg-zinc-800 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
