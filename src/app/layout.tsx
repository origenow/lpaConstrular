import type { Metadata } from "next";
import { Inter, Anton, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas-neue" });

export const metadata: Metadata = {
  title: "A CONSTRULAR - Construindo com Força e Tradição",
  description: "Tradição e força no mercado de construção. Entregamos o que há de melhor em materiais para sua obra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container antialiased font-body-md">
        {children}
      </body>
    </html>
  );
}
