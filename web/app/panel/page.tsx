import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
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

  async function retirarTestimonio() {
    'use server'
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase
      .from('socios')
      .update({ publicar_testimonio: false })
      .eq('email', user.email!)
    revalidatePath('/panel')
    revalidatePath('/memorias')
  }

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
            {esSocio ? 'Socio de Olvidos' : 'Amigo de Mariano'}
          </span>
        </div>

        <div className="border-t border-zinc-100 pt-5">
          <div className="flex items-start gap-4 mb-2">
            <div className="flex-1">
              <p className="font-libre text-xs tracking-widest uppercase text-zinc-400 mb-2">Mi relación con Mariano</p>
              {socio.notas ? (
                <>
                  <p className="font-libre text-zinc-700 text-sm leading-relaxed">{socio.notas}</p>
                  {socio.publicar_testimonio && (
                    <p className="font-libre text-xs text-[#E84878] mt-2">✓ Publicado en Memorias</p>
                  )}
                </>
              ) : (
                <p className="font-libre text-zinc-400 text-sm italic">Aún no has escrito nada.</p>
              )}
            </div>
            {socio.foto_url && (
              <img
                src={socio.foto_url}
                alt="Tu foto"
                className="w-16 h-16 object-cover shrink-0"
              />
            )}
          </div>
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <Link
              href="/panel/perfil"
              className="font-libre text-xs text-zinc-500 hover:text-zinc-900 underline transition-colors"
            >
              Editar mi ficha →
            </Link>
            {socio.notas && (
              <Link
                href="/memorias"
                className="font-libre text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                Ver página Memorias →
              </Link>
            )}
            {socio.publicar_testimonio && (
              <form action={retirarTestimonio}>
                <button
                  type="submit"
                  className="font-libre text-xs text-zinc-400 hover:text-red-500 transition-colors"
                >
                  Retirar de Memorias
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* CTA mantenimiento de la web — solo para amigos */}
      {!esSocio && (
        <div className="bg-white border border-zinc-200 p-6">
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">
            Apoya la web
          </p>
          <h2 className="font-crimson font-bold text-zinc-900 text-xl mb-3">
            Esta página depende de ti
          </h2>
          <p className="font-libre text-zinc-700 text-sm leading-relaxed mb-4">
            Mantener viva la memoria de Mariano en la red tiene un coste. Esta web, que estás
            viendo, existe gracias a quienes la sostienen. Si quieres contribuir a su mantenimiento,
            puedes hacerlo con una cuota simbólica de <strong>1&nbsp;€ al mes</strong>, pagadera
            de forma anual.
          </p>
          <p className="font-libre text-zinc-500 text-xs">
            Para colaborar, escríbenos a{' '}
            <a href="mailto:olvidosdegranada@gmail.com" className="text-[#E84878] hover:underline">
              olvidosdegranada@gmail.com
            </a>
          </p>
        </div>
      )}

      {/* CTA hacerse socio — solo para amigos */}
      {!esSocio && (
        <div className="bg-zinc-900 text-white p-6">
          <a href="https://www.olvidosdegranada.es" target="_blank" rel="noopener noreferrer" className="inline-block mb-5">
            <img src="/logo-olvidos.jpg" alt="Olvidos de Granada" className="h-10 w-auto" />
          </a>
          <p className="font-libre text-xs tracking-widest uppercase text-[#E84878] mb-3">
            Únete a la asociación
          </p>
          <h2 className="font-crimson font-bold text-xl mb-3">
            Hazte Socio de Olvidos de Granada
          </h2>
          <p className="font-libre text-zinc-300 text-sm leading-relaxed mb-4">
            Olvidos de Granada es la revista cultural que Mariano puso en marcha y que sigue viva:
            publica, organiza encuentros y mantiene activa una forma de entender la cultura en Granada
            que él encarnó como nadie. La asociación que lleva su nombre es quien la sostiene y la impulsa.
          </p>
          <p className="font-libre text-zinc-300 text-sm leading-relaxed mb-4">
            Hacerse socio es comprometerse con ese proyecto. La cuota anual es de <strong>30&nbsp;€</strong>.
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
