'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function generar(genero: string | null, m: string, f: string, neutro: string) {
  if (genero === 'm') return m
  if (genero === 'f') return f
  return neutro
}

async function enviarBienvenidaConAcceso(nombre: string, email: string, tipo: string, genero: string | null) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const resendKey = process.env.RESEND_API_KEY
  if (!serviceKey || !resendKey) return

  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marianomaresca.com'

  const redirectTo = `${siteUrl}/auth/callback?next=/panel`
  let magicLink: string | null = null

  // invite funciona para usuarios nuevos sin cuenta en auth; no envía email por su cuenta
  const { data: inviteData, error: inviteError } = await admin.auth.admin.generateLink({
    type: 'invite',
    email,
    options: { redirectTo },
  })
  if (!inviteError && inviteData?.properties?.action_link) {
    magicLink = inviteData.properties.action_link
  } else {
    // Usuario ya existe en auth: enlazamos a la página de login del panel
    // (no usamos type:'magiclink' porque enviaría un segundo email de Supabase)
    magicLink = `${siteUrl}/panel/login`
  }

  const esSocio = tipo === 'socio'

  const bienvenidoA = generar(genero, 'Bienvenido', 'Bienvenida', 'Bienvenido/a')
  const querido = generar(genero, 'Querido', 'Querida', 'Querido/a')
  const amigo = generar(genero, esSocio ? 'Socio' : 'Amigo', esSocio ? 'Socia' : 'Amiga', esSocio ? 'Socio/a' : 'Amigo/a')

  const tratamiento = esSocio
    ? `${amigo} de Olvidos`
    : `${amigo} de Mariano Maresca`

  const asunto = esSocio
    ? `${bienvenidoA} a la Asociación Olvidos de Granada`
    : `${bienvenidoA} como ${amigo} de Mariano Maresca`

  const textoBienvenida = esSocio
    ? `Gracias por hacerte <strong>${amigo} de Olvidos</strong>. Tu apoyo es fundamental para mantener
        viva la memoria de Mariano Maresca y seguir impulsando la cultura en Granada.
        Como ${amigo.toLowerCase()}, formas parte de la historia de la asociación. Nos alegra mucho tenerte con nosotros.`
    : `Gracias por hacerte <strong>${amigo} de Mariano Maresca</strong>. Nos alegra que formes parte
        de nuestra comunidad y de su memoria.`

  const textoAmigo = !esSocio
    ? `<p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
        Si algún día quieres dar el paso de hacerte ${generar(genero, 'socio', 'socia', 'socio/a')}, escríbenos a
        <a href="mailto:olvidosdegranada@gmail.com" style="color: #E84878;">olvidosdegranada@gmail.com</a>.
        Será un placer contarte todo.
      </p>`
    : ''

  const bloqueAcceso = magicLink
    ? `<div style="margin: 32px 0; padding: 24px; background: #FAF7F2; border-left: 3px solid #E84878;">
        <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #E84878; margin: 0 0 12px;">
          Tu espacio personal
        </p>
        <p style="font-family: Georgia, serif; font-size: 15px; color: #1a1a1a; line-height: 1.6; margin: 0 0 16px;">
          Tienes acceso a un panel privado donde puedes ver tu ficha y personalizar tu relación con Mariano.
        </p>
        <a href="${magicLink}"
           style="display: inline-block; background: #1a1a1a; color: #ffffff; font-family: 'Trebuchet MS', sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; padding: 12px 24px;">
          Acceder a mi panel
        </a>
        <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; color: #a1a1aa; margin: 12px 0 0;">
          Este enlace es de un solo uso y caduca en 24 horas.
        </p>
      </div>`
    : ''

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background: #FAF7F2; padding: 40px 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; padding: 40px;">
    <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #E84878; margin: 0 0 24px;">
      ${tratamiento}
    </p>
    <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
      ${querido} ${nombre},
    </p>
    <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
      ${textoBienvenida}
    </p>
    ${textoAmigo}
    ${bloqueAcceso}
    <p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">
      Un saludo afectuoso,<br/>
      <strong>Asociación Olvidos de Granada</strong>
    </p>
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
      'Authorization': `Bearer ${resendKey}`,
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

export async function addSocio(formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const tipo = formData.get('tipo') as string
  const genero = (formData.get('genero') as string) || null
  const notas = (formData.get('notas') as string) || null
  const telefono = (formData.get('telefono') as string) || null
  const direccion = (formData.get('direccion') as string) || null
  const ciudad = (formData.get('ciudad') as string) || null

  const { error } = await supabase.from('socios').insert([{ nombre, email, tipo, genero, notas, telefono, direccion, ciudad }])

  if (error) {
    if (error.code === '23505') return { error: 'Ese email ya existe en la base de datos.' }
    return { error: error.message }
  }

  await enviarBienvenidaConAcceso(nombre, email, tipo, genero)

  revalidatePath('/admin/socios')
  return { error: null }
}

export async function updateSocio(id: number, formData: FormData) {
  const supabase = await createClient()
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const tipo = formData.get('tipo') as string
  const genero = (formData.get('genero') as string) || null
  const notas = (formData.get('notas') as string) || null
  const telefono = (formData.get('telefono') as string) || null
  const direccion = (formData.get('direccion') as string) || null
  const ciudad = (formData.get('ciudad') as string) || null

  const { error } = await supabase
    .from('socios')
    .update({ nombre, email, tipo, genero, notas, telefono, direccion, ciudad })
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

export async function togglePublicarTestimonio(id: number, publicar: boolean) {
  const supabase = await createClient()
  await supabase.from('socios').update({ publicar_testimonio: publicar }).eq('id', id)
  revalidatePath('/admin/socios')
  revalidatePath('/memorias')
}
