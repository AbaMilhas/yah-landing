"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#2A063A] text-white pb-20 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">

        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-6">

          {/* Selo — AGORA COM MENOS ESPAÇAMENTO */}
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* LOGO — MUITO MAIOR E EM DESTAQUE */}
          <div className="-mt-1">
            <img
              src="/logo-yah-header.png"
              alt="Yah Milhas"
              className="h-[150px] w-auto sm:h-[180px] lg:h-[200px]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Subtítulo — AGORA BEM MAIS PRÓXIMO DA LOGO */}
          <p className="max-w-xl text-xl text-slate-200 sm:text-2xl leading-relaxed -mt-2">
            Milhas negociadas com inteligência — simples, rápido e confiável.
          </p>

          {/* CTA */}
          <Link
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-[#00E5E5] px-12 py-4 text-lg font-semibold text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00d4d4] hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
          >
            Falar com especialista
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* MÉTRICAS */}
          <div className="grid gap-4 sm:grid-cols-4 mt-2">
            {[
              { label: "emissões/ano", value: "3.700+" },
              { label: "milhas negociadas", value: "300M+" },
              { label: "agências parceiras", value: "100+" },
              { label: "clientes embarcados", value: "10k+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA — CARD BENEFÍCIOS */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] px-8 py-10 shadow-[0_18px_55px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            
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

            <div className="space-y-4">
              {[
                {
                  title: "Liquidez rápida",
                  description:
                    "Transforme suas milhas em dinheiro com velocidade e estabilidade.",
                },
                {
                  title: "Atendimento imediato",
                  description:
                    "Respostas rápidas, humanas e especializadas.",
                },
                {
                  title: "Segurança & compliance",
                  description:
                    "Processos transparentes e protegidos em todas as etapas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-3 rounded-2xl bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-0.5"
                >
                  <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-sm text-teal-300">
                    ●
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
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
