'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

async function verificarConsejo(): Promise<string | null> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) return null
  const admin = getAdmin()
  const { data } = await admin.from('socios').select('consejo_redaccion').eq('email', user.email).single()
  return data?.consejo_redaccion === true ? user.email : null
}

export async function aprobarTestimonio(id: number, publicar: boolean) {
  const email = await verificarConsejo()
  if (!email) return
  const admin = getAdmin()
  await admin.from('socios').update({ publicar_testimonio: publicar }).eq('id', id)
  revalidatePath('/panel/consejo')
  revalidatePath('/memorias')
  revalidatePath('/admin/socios')
}

export async function crearDiscusion(formData: FormData) {
  const email = await verificarConsejo()
  if (!email) return
  const titulo = (formData.get('titulo') as string).trim()
  const cuerpo = (formData.get('cuerpo') as string).trim()
  if (!titulo || !cuerpo) return
  const admin = getAdmin()
  await admin.from('discusiones_consejo').insert({ titulo, cuerpo, autor_email: email })
  revalidatePath('/panel/consejo')
}

export async function responderDiscusion(discusion_id: number, cuerpo: string) {
  const email = await verificarConsejo()
  if (!email || !cuerpo.trim()) return
  const admin = getAdmin()
  await admin.from('comentarios_discusion').insert({ discusion_id, autor_email: email, cuerpo: cuerpo.trim() })
  revalidatePath('/panel/consejo')
}

export async function publicarDiscusionComoAviso(discusion_id: number) {
  const email = await verificarConsejo()
  if (!email) return
  const admin = getAdmin()
  const { data: disc } = await admin.from('discusiones_consejo').select('titulo, cuerpo').eq('id', discusion_id).single()
  if (!disc) return
  await admin.from('avisos').insert({ titulo: disc.titulo, cuerpo: disc.cuerpo, publicado: true })
  await admin.from('discusiones_consejo').update({ publicado_como_aviso: true }).eq('id', discusion_id)
  revalidatePath('/panel/consejo')
  revalidatePath('/panel/avisos')
  revalidatePath('/admin/avisos')
}
