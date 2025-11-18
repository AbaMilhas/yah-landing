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

          {/* CTA */}
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

        {/* COLUNA DIREITA — CARD PREMIUM COM FUNDO CORRETO */}
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-10 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            
            <span className="text-xs font-semibold tracking-widest uppercase text-teal-300">
              Benefícios Yah milhas
            </span>

            <h2 className="mt-2 text-3xl font-semibold">Por que escolher a Yah?</h2>

            <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
              Uma operação desenhada para extrair mais valor das suas milhas —
              com estratégia, velocidade e total segurança.
            </p>

            {/* LISTA */}
            <div className="mt-6 space-y-5">
              {[
                "Menos pontos com combinações inteligentes.",
                "Liquidez rápida na compra e venda de milhas.",
                "Atendimento imediato (SLA ágil) no WhatsApp.",
                "Segurança e compliance em todo o processo.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/25 text-sm text-teal-300">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
