"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12051d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo-yah-header.png"
            alt="Yah Milhas"
            className="h-10 w-auto md:h-12 lg:h-14"
            loading="eager"
            decoding="sync"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">

          <a
            href="#servicos"
            className="
              text-white/80 
              transition-all duration-200 
              hover:text-[#00E5E5] hover:-translate-y-0.5
            "
          >
            Serviços
          </a>

          <a
            href="#como-funciona"
            className="
              text-white/80 
              transition-all duration-200 
              hover:text-[#00E5E5] hover:-translate-y-0.5
            "
          >
            Como funciona
          </a>

          <a
            href="#contato"
            className="
              text-white/80 
              transition-all duration-200 
              hover:text-[#00E5E5] hover:-translate-y-0.5
            "
          >
            Contato
          </a>

          {/* BOTÃO PREMIUM AZUL YAH */}
          <a
            href="#simular"
            className="
              group inline-flex items-center gap-2
              rounded-full border border-[#00E5E5]
              px-5 py-2 text-[#00E5E5] font-semibold
              transition-all duration-300
              hover:bg-[#00E5E5]/10 hover:-translate-y-0.5 hover:text-white
            "
          >
            Simular cotação
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </nav>

        {/* BOTÃO MOBILE */}
        <a
          href="#simular"
          className="
            md:hidden rounded-full border border-[#00E5E5] 
            px-4 py-2 text-sm font-semibold text-[#00E5E5]
            transition-all duration-200
            hover:bg-[#00E5E5]/10 hover:text-white
          "
        >
          Simular
        </a>
      </div>
    </header>
  );
}
