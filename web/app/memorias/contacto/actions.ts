'use server'

export async function enviarContacto(formData: FormData): Promise<{ ok: boolean; error?: string }> {
  const trampa = formData.get('website') as string
  if (trampa) return { ok: true } // honeypot: silencioso para no revelar el filtro

  const nombre = (formData.get('nombre') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const mensaje = (formData.get('mensaje') as string)?.trim()

  if (!nombre || !email || !mensaje) return { ok: false, error: 'Faltan campos obligatorios.' }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) return { ok: false, error: 'Error de configuración.' }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#FAF7F2;padding:40px 20px;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:40px;">
    <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#E84878;margin:0 0 24px;">
      Nuevo mensaje desde Memorias
    </p>
    <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;margin:0 0 8px;">
      <strong>Nombre:</strong> ${nombre}
    </p>
    <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;margin:0 0 24px;">
      <strong>Email:</strong> <a href="mailto:${email}" style="color:#E84878;">${email}</a>
    </p>
    <div style="border-left:3px solid #E84878;padding-left:20px;margin:24px 0;">
      <p style="font-family:Georgia,serif;font-size:16px;color:#1a1a1a;line-height:1.7;white-space:pre-wrap;margin:0;">${mensaje.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
    </div>
    <hr style="border:none;border-top:1px solid #e4e4e7;margin:32px 0;" />
    <p style="font-family:'Trebuchet MS',sans-serif;font-size:11px;color:#a1a1aa;letter-spacing:1px;text-transform:uppercase;">
      Enviado desde marianomaresca.com/memorias
    </p>
  </div>
</body>
</html>`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Mariano Maresca <noreply@marianomaresca.com>',
      to: ['olvidosdegranada@gmail.com'],
      reply_to: email,
      subject: `Mensaje de ${nombre} — Memorias`,
      html,
    }),
  })

  if (!res.ok) return { ok: false, error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' }
  return { ok: true }
}
