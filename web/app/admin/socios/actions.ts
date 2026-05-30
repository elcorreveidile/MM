'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function addSocio(formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const tipo = formData.get('tipo') as string
  const notas = (formData.get('notas') as string) || null
  const telefono = (formData.get('telefono') as string) || null
  const direccion = (formData.get('direccion') as string) || null
  const ciudad = (formData.get('ciudad') as string) || null

  const { error } = await supabase.from('socios').insert([{ nombre, email, tipo, notas, telefono, direccion, ciudad }])

  if (error) {
    if (error.code === '23505') return { error: 'Ese email ya existe en la base de datos.' }
    return { error: error.message }
  }

  revalidatePath('/admin/socios')
  return { error: null }
}

export async function updateSocio(id: number, formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const tipo = formData.get('tipo') as string
  const notas = (formData.get('notas') as string) || null
  const telefono = (formData.get('telefono') as string) || null
  const direccion = (formData.get('direccion') as string) || null
  const ciudad = (formData.get('ciudad') as string) || null

  const { error } = await supabase
    .from('socios')
    .update({ nombre, email, tipo, notas, telefono, direccion, ciudad })
    .eq('id', id)

  if (error) {
    if (error.code === '23505') return { error: 'Ese email ya existe en la base de datos.' }
    return { error: error.message }
  }

  revalidatePath('/admin/socios')
  return { error: null }
}

export async function deleteSocio(id: number) {
  const supabase = await createClient()
  await supabase.from('socios').delete().eq('id', id)
  revalidatePath('/admin/socios')
}
