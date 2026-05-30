import type { Metadata } from "next";
import { Crimson_Text, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.marianomaresca.com'),
  title: "Mariano Maresca - Memoria viva de la cultura granadina",
  description: "Exposición homenaje a Mariano Maresca, editor de Olvidos de Granada. Biblioteca de la Facultad de Derecho. Web de la Asociación Olvidos de Granada.",
  openGraph: {
    title: 'Mariano Maresca - Memoria viva de la cultura granadina',
    description: 'Exposición homenaje a Mariano Maresca, editor de Olvidos de Granada. Biblioteca de la Facultad de Derecho. Web de la Asociación Olvidos de Granada.',
    url: 'https://www.marianomaresca.com',
    siteName: 'Mariano Maresca',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariano Maresca - Memoria viva de la cultura granadina',
    description: 'Exposición homenaje a Mariano Maresca, editor de Olvidos de Granada. Biblioteca de la Facultad de Derecho. Web de la Asociación Olvidos de Granada.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${crimsonText.variable} ${libreFranklin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 font-crimson">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
