'use server'

import { createClient as createAdminClient } from '@supabase/supabase-js'

export type EnvioResult = {
  enviados: number
  errores: number
  error?: string
}

export async function enviarCorreoMasivo(formData: FormData): Promise<EnvioResult> {
  const resendKey = process.env.RESEND_API_KEY
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!resendKey || !serviceKey) return { enviados: 0, errores: 0, error: 'Faltan variables de entorno.' }

  const audiencia = formData.get('audiencia') as string
  const asunto = (formData.get('asunto') as string).trim()
  const cuerpo = (formData.get('cuerpo') as string).trim()

  if (!asunto || !cuerpo) return { enviados: 0, errores: 0, error: 'Asunto y cuerpo son obligatorios.' }

  const supabase = createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey)

  let destinatarios: { nombre: string; email: string }[] = []

  if (audiencia === 'individual') {
    const email = (formData.get('email_individual') as string).trim()
    if (!email) return { enviados: 0, errores: 0, error: 'Indica el email del destinatario.' }
    const { data } = await supabase.from('socios').select('nombre, email').eq('email', email).single()
    if (!data) return { enviados: 0, errores: 0, error: `No se encontró ningún contacto con el email ${email}.` }
    destinatarios = [data]
  } else {
    let query = supabase.from('socios').select('nombre, email')
    if (audiencia === 'socios') query = query.eq('tipo', 'socio')
    if (audiencia === 'amigos') query = query.eq('tipo', 'amigo')
    const { data, error: dbError } = await query
    if (dbError) return { enviados: 0, errores: 0, error: dbError.message }
    destinatarios = data ?? []
  }

  if (destinatarios.length === 0) return { enviados: 0, errores: 0, error: 'No hay destinatarios.' }

  const cuerpoHtml = cuerpo
    .split('\n\n')
    .map(p => `<p style="font-family: Georgia, serif; font-size: 16px; color: #1a1a1a; line-height: 1.7;">${p.replace(/\n/g, '<br/>')}</p>`)
    .join('\n')

  const emails = destinatarios.map(d => ({
    from: 'Olvidos de Granada <noreply@marianomaresca.com>',
    to: [d.email],
    subject: asunto,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background: #FAF7F2; padding: 40px 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; padding: 40px;">
    <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #E84878; margin: 0 0 24px;">
      Asociación Olvidos de Granada
    </p>
    ${cuerpoHtml}
    <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 32px 0;" />
    <p style="font-family: 'Trebuchet MS', sans-serif; font-size: 11px; color: #a1a1aa; letter-spacing: 1px; text-transform: uppercase;">
      Asociación Cultural Olvidos de Granada · <a href="https://marianomaresca.com" style="color: #a1a1aa;">marianomaresca.com</a>
    </p>
  </div>
</body>
</html>`,
  }))

  // Resend batch: max 100 por llamada
  let enviados = 0
  let errores = 0
  for (let i = 0; i < emails.length; i += 100) {
    const lote = emails.slice(i, i + 100)
    const res = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lote),
    })
    if (res.ok) {
      enviados += lote.length
    } else {
      errores += lote.length
    }
  }

  return { enviados, errores }
}
