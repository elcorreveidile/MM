import { NextRequest, NextResponse } from 'next/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')
  if (!email) return NextResponse.json({ error: 'Email requerido' }, { status: 400 })

  const { data: propuestas } = await getAdmin()
    .from('propuestas')
    .select('id, titulo, cuerpo, estado, respuesta, created_at')
    .eq('socio_email', email)
    .order('created_at', { ascending: false })

  return NextResponse.json({ propuestas: propuestas ?? [] })
}

export async function POST(req: NextRequest) {
  const { titulo, cuerpo, email } = await req.json()
  if (!titulo || !cuerpo || !email) return NextResponse.json({ error: 'Faltan campos.' }, { status: 400 })

  const admin = getAdmin()
  const { data: socio } = await admin.from('socios').select('nombre, tipo').eq('email', email).single()
  if (!socio) return NextResponse.json({ error: 'Email no registrado.' }, { status: 403 })
  if (socio.tipo !== 'socio') return NextResponse.json({ error: 'Solo los socios pueden enviar propuestas.' }, { status: 403 })

  const { error } = await admin.from('propuestas').insert({
    socio_email: email,
    socio_nombre: socio.nombre,
    titulo: titulo.trim(),
    cuerpo: cuerpo.trim(),
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
