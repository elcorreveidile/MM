'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactResult = { success: true } | { error: string }

export async function sendContact(formData: FormData): Promise<ContactResult> {
  // Honeypot: bots fill hidden "website" field
  if (formData.get('website')) {
    return { error: 'spam' }
  }

  // Time gate: reject if submitted in under 3 seconds
  const ts = Number(formData.get('_ts'))
  if (!ts || Date.now() - ts < 3000) {
    return { error: 'spam' }
  }

  const name = (formData.get('name') as string | null)?.trim()
  const email = (formData.get('email') as string | null)?.trim()
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !email || !message) {
    return { error: 'Todos los campos son obligatorios.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'La dirección de correo no es válida.' }
  }

  if (message.length > 2000) {
    return { error: 'El mensaje no puede superar los 2000 caracteres.' }
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Web Mariano Maresca <noreply@olvidosdegranada.es>',
      to: 'olvidosdegranada@gmail.com',
      replyTo: email,
      subject: `Contacto web — ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return { error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' }
  }
}
