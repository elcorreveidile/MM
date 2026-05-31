import { NextRequest, NextResponse } from 'next/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

function getAdmin() {
  return createAdminClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')
  if (!email) return NextResponse.json({ error: 'Email requerido' }, { status: 400 })

  const admin = getAdmin()

  // Verificar que es socio
  const { data: socio } = await admin.from('socios').select('tipo').eq('email', email).single()
  if (socio?.tipo !== 'socio') return NextResponse.json({ error: 'Solo socios' }, { status: 403 })

  const { data: votaciones } = await admin
    .from('votaciones')
    .select('id, titulo, descripcion, opciones, activa, created_at')
    .order('created_at', { ascending: false })

  const { data: misVotos } = await admin
    .from('votos')
    .select('votacion_id, opcion_index')
    .eq('socio_email', email)

  const { data: todosVotos } = await admin
    .from('votos')
    .select('votacion_id, opcion_index')

  const misVotosMap: Record<number, number> = {}
  misVotos?.forEach(v => { misVotosMap[v.votacion_id] = v.opcion_index })

  const resultadosMap: Record<number, number[]> = {}
  todosVotos?.forEach(v => {
    if (!resultadosMap[v.votacion_id]) resultadosMap[v.votacion_id] = []
    resultadosMap[v.votacion_id].push(v.opcion_index)
  })

  const data = (votaciones ?? []).map(v => ({
    ...v,
    miVoto: misVotosMap[v.id] ?? null,
    resultados: resultadosMap[v.id] ?? [],
  }))

  return NextResponse.json({ votaciones: data })
}

export async function POST(req: NextRequest) {
  const { votacion_id, opcion_index, email } = await req.json()
  if (votacion_id == null || opcion_index == null || !email) {
    return NextResponse.json({ error: 'Faltan campos.' }, { status: 400 })
  }

  const admin = getAdmin()

  const { data: socio } = await admin.from('socios').select('tipo').eq('email', email).single()
  if (socio?.tipo !== 'socio') return NextResponse.json({ error: 'Solo socios pueden votar.' }, { status: 403 })

  const { data: votacion } = await admin.from('votaciones').select('activa, opciones').eq('id', votacion_id).single()
  if (!votacion?.activa) return NextResponse.json({ error: 'Esta votación ya está cerrada.' }, { status: 400 })
  if (opcion_index < 0 || opcion_index >= votacion.opciones.length) {
    return NextResponse.json({ error: 'Opción inválida.' }, { status: 400 })
  }

  const { error } = await admin.from('votos').insert({ votacion_id, opcion_index, socio_email: email })
  if (error) {
    if (error.code === '23505') return NextResponse.json({ error: 'Ya has votado en esta votación.' }, { status: 409 })
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
