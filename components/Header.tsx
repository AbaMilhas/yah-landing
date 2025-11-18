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
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">

          <a
            href="#servicos"
            className="transition-colors duration-200 hover:text-white"
          >
            Serviços
          </a>

          <a
            href="#como-funciona"
            className="transition-colors duration-200 hover:text-white"
          >
            Como funciona
          </a>

          <a
            href="#contato"
            className="transition-colors duration-200 hover:text-white"
          >
            Contato
          </a>

          {/* BOTÃO ANIMADO IGUAL AO HERO */}
          <a
            href="#simular"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-teal-500 px-5 py-2 font-semibold text-slate-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-1">
              Simular cotação
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </span>

            {/* Glow animado no hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-0 bg-teal-300/30 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <a
          href="#simular"
          className="md:hidden rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md transition-all hover:bg-teal-400"
        >
          Simular
        </a>
      </div>
    </header>
  );
}
