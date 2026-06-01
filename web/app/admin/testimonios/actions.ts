'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function borrarTestimonio(id: number) {
  const supabase = await createClient()
  await supabase.from('socios').update({ notas: null, publicar_testimonio: false }).eq('id', id)
  revalidatePath('/admin/testimonios')
  revalidatePath('/memorias')
}

export async function toggleTestimonio(id: number, publicar: boolean) {
  const supabase = await createClient()
  await supabase.from('socios').update({ publicar_testimonio: publicar }).eq('id', id)
  revalidatePath('/admin/testimonios')
  revalidatePath('/memorias')
}
