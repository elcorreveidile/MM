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
  title: "Mariano Maresca - Memoria Viva de la Cultura Granadina",
  description: "Exposición homenaje a Mariano Maresca, editor de Olvidosdegranada y figura fundamental de la cultura granadina. Universidad de Granada, Hospital Real.",
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
