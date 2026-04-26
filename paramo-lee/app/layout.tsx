import type { Metadata } from 'next'
import { Crimson_Text, Libre_Franklin } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const crimsonText = Crimson_Text({
  variable: '--font-crimson',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const libreFranklin = Libre_Franklin({
  variable: '--font-libre',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'El páramo lee — Asociación Cultural',
  description:
    'Asociación cultural dedicada a la promoción de la lectura, la poesía y la cultura a través de festivales literarios, jornadas poéticas, visitas culturales y presentaciones de libros.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${crimsonText.variable} ${libreFranklin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf6f0] font-sans text-[#1c1c1a]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
