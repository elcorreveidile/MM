import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: '#FAF7F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              width: 130,
              height: 130,
              backgroundColor: '#F2BE2A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 60,
              color: '#8B1A1A',
              letterSpacing: '-4px',
            }}
          >
            MM
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: '#18181B', letterSpacing: '-2px', display: 'flex' }}>
            Mariano Maresca
          </div>
          <div style={{ fontSize: 30, color: '#52525B', letterSpacing: '1px', display: 'flex' }}>
            Memoria viva de la cultura granadina
          </div>
          <div style={{ fontSize: 20, color: '#E84878', letterSpacing: '4px', display: 'flex' }}>
            ALMERÍA, 1945 · GRANADA, 2023
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
