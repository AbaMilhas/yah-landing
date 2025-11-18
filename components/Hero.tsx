"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#2A063A] text-white pb-20 pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-10">
          {/* Selo */}
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* Título */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="font-bold">Yah</span>{" "}
            <span className="font-normal">milhas</span>
            <span className="text-teal-400">.</span>
          </h1>

          {/* Subtítulo */}
          <p className="max-w-xl text-lg text-slate-200 sm:text-xl leading-relaxed">
            Milhas negociadas com inteligência — simples, rápido e confiável.
          </p>

          {/* CTA principal */}
          <Link
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-[#00E5E5] px-10 py-4 text-base font-semibold text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00d4d4] hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
          >
            Falar com especialista
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Números */}
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { label: "emissões/ano", value: "3.700+" },
              { label: "milhas negociadas", value: "300M+" },
              { label: "agências parceiras", value: "100+" },
              { label: "clientes embarcados", value: "10k+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA — CARD MENOR E MODERNO */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_18px_55px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Cabeçalho do card */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-300">
                Benefícios Yah milhas
              </span>
              <h2 className="text-2xl font-semibold">Por que escolher a Yah?</h2>
              <p className="text-xs text-slate-200/85 leading-relaxed">
                Três pilares que fazem a Yah ser a parceira certa para cuidar das
                suas milhas com visão de negócio.
              </p>
            </div>

            {/* Blocos de benefícios (3 itens, mais modernos) */}
            <div className="space-y-4">
              {[
                {
                  title: "Liquidez rápida",
                  description:
                    "Operações estruturadas para transformar milhas em dinheiro com agilidade e previsibilidade.",
                },
                {
                  title: "Atendimento imediato",
                  description:
                    "Canal direto via WhatsApp com time especialista, respostas rápidas e acompanhamento próximo.",
                },
                {
                  title: "Segurança & compliance",
                  description:
                    "Processos documentados, transparência em cada etapa e cuidado com os dados de todos os envolvidos.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-3 rounded-2xl bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-0.5"
                >
                  <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-sm text-teal-300">
                    ●
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-200/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
