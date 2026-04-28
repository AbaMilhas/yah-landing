"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#servicos",      label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato",       label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-yah-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <Link href="/" className="flex items-center">
          <img
            src="/logo-yah-header.png"
            alt="Yah Milhas"
            className="h-9 w-auto brightness-0 invert md:h-11"
            loading="eager"
            decoding="sync"
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/55 transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simular"
            className="btn-primary px-5 py-2.5 text-xs rounded-full"
            style={{ borderRadius: "9999px" }}
          >
            Simular cotação
          </a>
        </nav>

        {/* HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/[0.06] bg-yah-900/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium text-white/55 border-b border-white/[0.05] hover:text-white transition-colors last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simular"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-3 text-sm"
          >
            Simular cotação
          </a>
        </nav>
      )}
    </header>
  );
}
