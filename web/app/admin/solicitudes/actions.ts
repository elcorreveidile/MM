'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

export async function aprobarSolicitud(id: number) {
  const supabase = await createClient()

  const { data: sol } = await supabase
    .from('solicitudes_memorias')
    .select('*')
    .eq('id', id)
    .single()

  if (!sol) return { error: 'Solicitud no encontrada' }

  const { data: existing } = await supabase
    .from('socios')
    .select('id')
    .eq('email', sol.email)
    .single()

  if (!existing) {
    const { error: insertError } = await supabase.from('socios').insert([{
      nombre: sol.nombre,
      email: sol.email,
      tipo: 'amigo',
      genero: null,
      notas: sol.mensaje,
      mostrar_nombre: sol.mostrar_nombre,
      publicar_testimonio: sol.publicar,
    }])
    if (insertError) return { error: insertError.message }

    // Enviar email de bienvenida con acceso al panel
    await enviarBienvenida(sol.nombre, sol.email)
  } else {
    await supabase.from('socios').update({
      notas: sol.mensaje,
      mostrar_nombre: sol.mostrar_nombre,
      publicar_testimonio: sol.publicar,
    }).eq('email', sol.email)
  }

  await supabase.from('solicitudes_memorias').update({ estado: 'aprobado' }).eq('id', id)

  revalidatePath('/admin/solicitudes')
  revalidatePath('/memorias')
  return { error: null }
}

export async function rechazarSolicitud(id: number) {
  const supabase = await createClient()
  await supabase.from('solicitudes_memorias').update({ estado: 'rechazado' }).eq('id', id)
  revalidatePath('/admin/solicitudes')
  return { error: null }
}

export async function eliminarSolicitud(id: number) {
  const supabase = await createClient()
  await supabase.from('solicitudes_memorias').delete().eq('id', id)
  revalidatePath('/admin/solicitudes')
}

async function enviarBienvenida(nombre: string, email: string) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const resendKey = process.env.RESEND_API_KEY
  if (!serviceKey || !resendKey) return

  const admin = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marianomaresca.com'
  const redirectTo = `${siteUrl}/auth/callback?next=/panel`

  let magicLink = `${siteUrl}/panel/login`
  const { data: inviteData, error: inviteError } = await admin.auth.admin.generateLink({
    type: 'invite', email, options: { redirectTo },
  })
  if (!inviteError && inviteData?.properties?.action_link) {
    magicLink = inviteData.properties.action_link
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#FAF7F2;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:40px;">
    <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#E84878;margin:0 0 24px;">
      Amigo/a de Mariano Maresca
    </p>
    <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;">
      Querido/a ${nombre},
    </p>
    <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;">
      Gracias por escribirnos y por hacerte <strong>amigo/a de Mariano Maresca</strong>.
      Hemos publicado tu recuerdo en la página Memorias.
    </p>
    <div style="margin:32px 0;padding:24px;background:#FAF7F2;border-left:3px solid #E84878;">
      <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#E84878;margin:0 0 12px;">
        Tu espacio personal
      </p>
      <p style="font-family:Georgia,serif;font-size:15px;color:#1a1a1a;line-height:1.6;margin:0 0 16px;">
        Tienes acceso a un panel privado donde puedes editar tu ficha y tu testimonio.
      </p>
      <a href="${magicLink}"
         style="display:inline-block;background:#1a1a1a;color:#ffffff;font-family:'Trebuchet MS',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 24px;">
        Acceder a mi panel
      </a>
      <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;color:#a1a1aa;margin:12px 0 0;">
        Este enlace es de un solo uso y caduca en 24 horas.
      </p>
    </div>
    <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;">
      Un saludo afectuoso,<br/>
      <strong>Asociación Olvidos de Granada</strong>
    </p>
    <hr style="border:none;border-top:1px solid #e4e4e7;margin:32px 0;" />
    <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;color:#a1a1aa;letter-spacing:1px;text-transform:uppercase;">
      Asociación Cultural Olvidos de Granada · <a href="https://marianomaresca.com" style="color:#a1a1aa;">marianomaresca.com</a>
    </p>
  </div>
</body>
</html>`

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Olvidos de Granada <noreply@marianomaresca.com>',
      to: [email],
      subject: `Bienvenido/a como amigo/a de Mariano Maresca`,
      html,
    }),
  })
}
