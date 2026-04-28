import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yah Milhas | Banco de Milhas — Compra, Venda e Emissão",
  description:
    "Negocie suas milhas com segurança. Compra e venda de pontos Latam, Smiles, Azul e mais. Pagamento em até 48h úteis. Mais de 3.700 emissões por ano.",
  keywords: [
    "banco de milhas",
    "comprar milhas",
    "vender milhas",
    "milhas aéreas",
    "latam pontos",
    "smiles",
    "azul milhas",
    "emissão de passagens",
  ],
  openGraph: {
    title: "Yah Milhas | Banco de Milhas",
    description:
      "Negocie suas milhas com segurança. Pagamento em até 48h úteis.",
    siteName: "Yah Milhas",
    images: ["/og-yah-milhas.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yah Milhas | Banco de Milhas",
    description:
      "Negocie suas milhas com segurança. Pagamento em até 48h úteis.",
    images: ["/og-yah-milhas.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#230F31",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} font-sans min-h-screen bg-yah-900 text-white antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
