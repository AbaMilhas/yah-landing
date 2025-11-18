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
            className="text-white/80 transition-all duration-200 hover:text-[#00E5E5] hover:-translate-y-0.5"
          >
            Serviços
          </a>

          <a
            href="#como-funciona"
            className="text-white/80 transition-all duration-200 hover:text-[#00E5E5] hover:-translate-y-0.5"
          >
            Como funciona
          </a>

          <a
            href="#contato"
            className="text-white/80 transition-all duration-200 hover:text-[#00E5E5] hover:-translate-y-0.5"
          >
            Contato
          </a>

          {/* BOTÃO SIMULAR COTAÇÃO — IGUAL AO PRINT */}
          <a
            href="#simular"
            className="rounded-full bg-[#00E5E5] px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00cfd0]"
          >
            Simular cotação
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <a
          href="#simular"
          className="md:hidden rounded-full bg-[#00E5E5] px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#00cfd0]"
        >
          Simular
        </a>
      </div>
    </header>
  );
}
