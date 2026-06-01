'use server'

import { revalidatePath } from 'next/cache'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function aprobarContinuacion(id: number) {
  await getAdmin().from('frase_continuaciones').update({ publicada: true }).eq('id', id)
  revalidatePath('/admin/frase')
  revalidatePath('/la-presente')
  revalidatePath('/panel/frase')
}

export async function rechazarContinuacion(id: number) {
  await getAdmin().from('frase_continuaciones').delete().eq('id', id)
  revalidatePath('/admin/frase')
  revalidatePath('/la-presente')
  revalidatePath('/panel/frase')
}

export async function despublicarContinuacion(id: number) {
  await getAdmin().from('frase_continuaciones').update({ publicada: false }).eq('id', id)
  revalidatePath('/admin/frase')
  revalidatePath('/la-presente')
  revalidatePath('/panel/frase')
}
