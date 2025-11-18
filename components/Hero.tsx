"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#2A063A] text-white pb-16 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center">

        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-4">

          {/* Selo — MUITO PRÓXIMO DO TOPO */}
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300 -mb-1">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* LOGO — PERFEITA, MAS COM ESPAÇAMENTO MINIMAL */}
          <div className="-mt-2">
            <img
              src="/logo-yah-header.png"
              alt="Yah Milhas"
              className="h-[180px] w-auto sm:h-[190px] lg:h-[200px]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Subtítulo — COLADO NA LOGO */}
          <p className="max-w-xl text-lg sm:text-xl text-slate-200 leading-relaxed -mt-3">
            Milhas negociadas com inteligência — simples, rápido e confiável.
          </p>

          {/* CTA — SEM SETA */}
          <Link
            href="#contato"
            className="inline-flex items-center rounded-full bg-[#00E5E5] px-10 py-3 text-base font-semibold text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00d4d4] hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
          >
            Falar com especialista
          </Link>

          {/* MÉTRICAS — COM ANIMAÇÃO DE CRESCER NO HOVER */}
          <div className="grid gap-3 sm:grid-cols-4 mt-2">
            {[
              { label: "emissões/ano", value: "3.700+" },
              { label: "milhas negociadas", value: "300M+" },
              { label: "agências parceiras", value: "100+" },
              { label: "clientes embarcados", value: "10k+" },
            ].map((item) => (
              <div
                key={item.label}
                className="transform rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-center shadow-md transition-transform transition-colors duration-300 hover:-translate-y-1 hover:scale-105 hover:bg:white/20 hover:bg-white/20"
              >
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-[11px] text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA — CARD BENEFÍCIOS */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_18px_55px_rgba(0,0,0,0.5)] backdrop-blur-xl">

            <div className="mb-4 space-y-1">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-300">
                Benefícios Yah milhas
              </span>
              <h2 className="text-xl font-semibold leading-tight">
                Por que escolher a Yah?
              </h2>
              <p className="text-[11px] text-slate-200/85 leading-relaxed">
                O que torna a Yah a parceira ideal para transformar suas milhas em valor real.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Liquidez rápida",
                  description:
                    "Venda estável, previsível e com pagamento ágil.",
                },
                {
                  title: "Atendimento imediato",
                  description:
                    "Respostas rápidas e suporte humano, sempre que precisar.",
                },
                {
                  title: "Segurança & compliance",
                  description:
                    "Transparência total e proteção em todas as etapas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-3 rounded-xl bg-white/[0.05] px-3 py-3 transition-all duration-300 hover:bg-white/[0.13] hover:-translate-y-0.5"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-xs text-teal-300">
                    ●
                  </div>
                  <div className="space-y-[2px]">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-[11px] leading-relaxed text-slate-200/85">
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
