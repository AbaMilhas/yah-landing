"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-yah-header.png"; // <-- usa exatamente o nome salvo no /public

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-yah-900/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo — ocupa quase toda a altura da barra, sem aumentá-la */}
        <Link href="/" className="flex items-center gap-3">
<img
  src="/logo-yah-header.png"
  alt="Yah Milhas"
/* antes: className="h-12 w-auto block" */
  className="h-12 md:h-14 lg:h-16 w-auto block"
  loading="eager"
  decoding="sync"
/>

</Link>
     

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicos" className="text-white/90 hover:text-white">Serviços</a>
          <a href="#como-funciona" className="text-white/90 hover:text-white">Como funciona</a>
          <a href="#contato" className="text-white/90 hover:text-white">Contato</a>
          <a
            href="#simular"
            className="rounded-xl bg-teal-500 text-white font-semibold px-4 py-2 hover:bg-teal-400 transition"
          >
            Simular cotação
          </a>
        </nav>

        {/* Botão mobile */}
        <a
          href="#simular"
          className="md:hidden rounded-lg bg-teal-500 text-white px-3 py-2 text-sm font-semibold"
        >
          Simular
        </a>
      </div>
    </header>
  );
}
