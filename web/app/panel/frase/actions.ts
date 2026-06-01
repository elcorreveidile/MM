'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

const MAX = 500

export async function enviarContinuacion(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user?.email) return { error: 'No autenticado.' }

  const texto = (formData.get('texto') as string ?? '').trim()
  if (!texto) return { error: 'Escribe algo antes de enviar.' }
  if (texto.length > MAX) return { error: `Máximo ${MAX} caracteres.` }

  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { error } = await admin
    .from('frase_continuaciones')
    .upsert({ autor_email: user.email, texto, publicada: false }, { onConflict: 'autor_email' })

  if (error) return { error: error.message }

  revalidatePath('/panel/frase')
  revalidatePath('/la-presente')
  return { error: null }
}
