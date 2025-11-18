"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#12051d] text-white pb-20 pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-10">
          {/* Selo */}
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* Título + subtítulo */}
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="font-bold">Yah</span>{" "}
              <span className="font-normal">milhas</span>
              <span className="text-teal-400">.</span>
            </h1>

            <p className="max-w-xl text-lg text-slate-200 sm:text-xl">
              Milhas negociadas com inteligência — simples, rápido e confiável.
            </p>
          </div>

          {/* CTA principal */}
          <div>
            <Link
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00E5E5] px-8 py-3 text-sm font-semibold text-slate-900 shadow-md transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#00d4d4] hover:shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
            >
              Falar com especialista
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

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
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA – POR QUE ESCOLHER A YAH */}
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.75)] backdrop-blur-sm">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                Benefícios Yah milhas
              </span>
              <h2 className="mt-2 text-2xl font-semibold">
                Por que escolher a Yah?
              </h2>
              <p className="mt-2 text-sm text-slate-200/90">
                Uma operação desenhada para extrair mais valor das suas milhas,
                sem complicação e com segurança em cada etapa.
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {[
                "Menos pontos com combinações inteligentes.",
                "Liquidez rápida na compra e venda de milhas.",
                "Atendimento imediato (SLA ágil) no WhatsApp.",
                "Segurança e compliance em todo o processo.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/15 text-xs text-teal-300">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-slate-100">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
