'use server'

import { revalidatePath } from 'next/cache'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function cambiarEstado(id: number, estado: string) {
  await getAdmin().from('propuestas').update({ estado }).eq('id', id)
  revalidatePath('/admin/propuestas-socios')
  revalidatePath('/panel/propuestas')
}

export async function responderPropuesta(id: number, respuesta: string) {
  await getAdmin().from('propuestas').update({ respuesta, estado: 'respondida' }).eq('id', id)
  revalidatePath('/admin/propuestas-socios')
  revalidatePath('/panel/propuestas')
}
