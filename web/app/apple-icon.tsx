import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          backgroundColor: '#F2BE2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          fontSize: 72,
          color: '#8B1A1A',
          letterSpacing: '-4px',
        }}
      >
        MM
      </div>
    ),
    { ...size }
  )
}
