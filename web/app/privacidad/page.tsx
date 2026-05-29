import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de privacidad — Mariano Maresca',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-libre text-xs tracking-[0.3em] uppercase text-[#E84878] mb-4">
            Información legal
          </p>
          <h1 className="font-crimson font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Política de privacidad
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 divide-y divide-zinc-100 space-y-8">

          <div>
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-4">Responsable del tratamiento</h2>
            <p className="font-libre text-zinc-700 leading-relaxed">
              Asociación Cultural Olvidos de Granada<br />
              Granada, España
            </p>
          </div>

          <div className="pt-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-4">Datos que recopilamos</h2>
            <p className="font-libre text-zinc-700 leading-relaxed">
              Este sitio web es de carácter informativo y no recopila datos personales de sus visitantes. No dispone de formularios de registro, áreas privadas ni sistemas de comentarios.
            </p>
            <p className="font-libre text-zinc-700 leading-relaxed mt-4">
              El servidor puede registrar automáticamente datos técnicos de acceso (dirección IP, navegador, páginas visitadas) con fines estadísticos y de seguridad, de acuerdo con la legislación vigente. Estos datos no se asocian a personas identificadas ni se ceden a terceros.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-4">Cookies</h2>
            <p className="font-libre text-zinc-700 leading-relaxed">
              Este sitio no utiliza cookies propias de seguimiento ni publicidad. Puede utilizarse tecnología de terceros (como servicios de alojamiento) que emplee cookies técnicas necesarias para el funcionamiento del sitio.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-4">Derechos</h2>
            <p className="font-libre text-zinc-700 leading-relaxed">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD), puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a la dirección de la Asociación Cultural Olvidos de Granada.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="font-crimson font-bold text-zinc-900 text-2xl mb-4">Contenidos de terceros</h2>
            <p className="font-libre text-zinc-700 leading-relaxed">
              Este sitio puede incluir enlaces a sitios externos (como olvidosdegranada.es). La Asociación Cultural Olvidos de Granada no se responsabiliza de las políticas de privacidad de dichos sitios.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}
