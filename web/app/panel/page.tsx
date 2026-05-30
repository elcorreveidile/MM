import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function PanelPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: socio } = await supabase
    .from('socios')
    .select('*')
    .eq('email', user!.email!)
    .single()

  if (!socio) return null

  const esSocio = socio.tipo === 'socio'

  return (
    <div className="space-y-6">

      {/* Ficha personal */}
      <div className="bg-white border border-zinc-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-crimson font-bold text-zinc-900 text-2xl">{socio.nombre}</h1>
            <p className="font-libre text-zinc-500 text-sm mt-1">{socio.email}</p>
          </div>
          <span className={`font-libre text-xs px-3 py-1 ${esSocio ? 'bg-[#E84878] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
            {esSocio ? 'Socio de Olvidos' : 'Amigo de Olvidos'}
          </span>
        </div>

        <div className="border-t border-zinc-100 pt-5">
          <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-2">Mi relación con Mariano</p>
          {socio.notas ? (
            <p className="font-libre text-zinc-700 text-sm leading-relaxed">{socio.notas}</p>
          ) : (
            <p className="font-libre text-zinc-400 text-sm italic">Aún no has escrito nada.</p>
          )}
          <Link
            href="/panel/perfil"
            className="inline-block mt-3 font-libre text-xs text-zinc-500 hover:text-zinc-900 underline transition-colors"
          >
            Editar mi ficha →
          </Link>
        </div>
      </div>

      {/* CTA hacerse socio — solo para amigos */}
      {!esSocio && (
        <div className="bg-zinc-900 text-white p-6">
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">
            Únete a la asociación
          </p>
          <h2 className="font-crimson font-bold text-xl mb-3">
            Hazte Socio de Olvidos de Granada
          </h2>
          <p className="font-libre text-zinc-300 text-sm leading-relaxed mb-4">
            Como Amigo de Olvidos formas parte de nuestra comunidad. Dar el paso de hacerte socio
            nos ayuda a mantener viva la memoria de Mariano y a seguir impulsando la cultura en Granada.
            La cuota es un gesto simbólico de apoyo.
          </p>
          <p className="font-libre text-zinc-400 text-xs">
            Para hacerte socio, escríbenos a{' '}
            <a href="mailto:olvidosdegranada@gmail.com" className="text-[#E84878] hover:underline">
              olvidosdegranada@gmail.com
            </a>
          </p>
        </div>
      )}

    </div>
  )
}
