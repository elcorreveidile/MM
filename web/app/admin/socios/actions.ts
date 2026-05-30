'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

async function enviarBienvenida(nombre: string, email: string, tipo: string) {
  const esSocio = tipo === 'socio'
  const tratamiento = esSocio ? 'Socio de Olvidos' : 'Amigo de Olvidos'
  const asunto = esSocio
    ? 'Bienvenido/a a la Asociación Olvidos de Granada'
    : 'Bienvenido/a como Amigo/a de Olvidos de Granada'

  const cuerpo = esSocio
    ? `<p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Querido/a ${nombre},
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Gracias por hacerte <strong>Socio de Olvidos</strong>. Tu apoyo es fundamental para mantener
        viva la memoria de Mariano Maresca y seguir impulsando la cultura en Granada.
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Como socio, formas parte de la historia de la asociación. Nos alegra mucho tenerte con nosotros.
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Un saludo afectuoso,<br/>
        <strong>Asociación Olvidos de Granada</strong>
      </p>`
    : `<p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Querido/a ${nombre},
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Gracias por hacerte <strong>Amigo de Olvidos</strong>. Nos alegra que formes parte
        de nuestra comunidad y de la memoria de Mariano Maresca.
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Si algún día quieres dar el paso de hacerte socio, escríbenos a
        <a href="mailto:olvidosdegranada@gmail.com" style="color: #E84878;">olvidosdegranada@gmail.com</a>.
        Será un placer contarte todo.
      </p>
      <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Un saludo afectuoso,<br/>
        <strong>Asociación Olvidos de Granada</strong>
      </p>`

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background: #FAF7F2; padding: 40px 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; padding: 40px;">
    <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #E84878; margin: 0 0 24px;">
      ${tratamiento}
    </p>
    ${cuerpo}
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; color: #a1a1aa; letter-spacing: 1px; text-transform: uppercase;">
      Asociación Cultural Olvidos de Granada · <a href="https://marianomaresca.com" style="color: #a1a1aa;">marianomaresca.com</a>
    </p>
  </div>
</body>
</html>`

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Olvidos de Granada <noreply@marianomaresca.com>',
      to: [email],
      subject: asunto,
      html,
    }),
  })
}

async function invitarAlPanel(email: string) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceKey) return
  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey)
  await admin.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marianomaresca.com'}/auth/callback?next=/panel`,
  })
}

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

  await Promise.all([
    enviarBienvenida(nombre, email, tipo),
    invitarAlPanel(email),
  ])

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
