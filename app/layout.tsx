import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/Header"; // se der erro de caminho, veja nota abaixo

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

// use a URL do site (ou defina via .env)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yah Milhas",
  description: "Banco de milhas: compra, venda e emissão com confiança.",
  openGraph: {
    title: "Yah Milhas",
    description: "Seu banco de milhas.",
    siteName: "Yah Milhas",
    images: ["/og-yah-milhas.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yah Milhas",
    description: "Seu banco de milhas.",
    images: ["/og-yah-milhas.png"],
  },
};

// mover themeColor para viewport
export const viewport: Viewport = {
  themeColor: "#230F31",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
                              <head>
  {/* Meta Pixel Code */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1762040747947183');
        fbq('track', 'PageView');
      `
    }}
  />
  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=1762040747947183&ev=PageView&noscript=1"
    />
  </noscript>
</head>
      <body className={`${sora.variable} min-h-screen bg-yah-900 text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
