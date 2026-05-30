import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          backgroundColor: '#F2BE2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          fontSize: 16,
          color: '#8B1A1A',
          letterSpacing: '-1px',
        }}
      >
        MM
      </div>
    ),
    { ...size }
  )
}
