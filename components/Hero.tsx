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

          {/* TÍTULO YAH MILHAS */}
          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-[Poppins]">
              <span className="font-bold">Yah</span>{" "}
              <span className="font-normal">milhas</span>
              <span className="text-teal-400">.</span>
            </h1>

            <p className="max-w-xl text-lg text-slate-200 sm:text-xl">
              Milhas negociadas com inteligência — simples, rápido e confiável.
            </p>
          </div>

          {/* BOTÃO PRINCIPAL */}
          <div>
            <Link
              href="#contato"
              className="
                group inline-flex items-center gap-2
                rounded-full bg-[#00E5E5] px-8 py-3
                text-slate-900 font-semibold text-sm
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#00cfd0]
                shadow-[0_6px_25px_rgba(0,229,229,0.25)]
              "
            >
              Falar com especialista
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* NÚMEROS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              { label: "emissões/ano", value: "3.700+" },
              { label: "milhas negociadas", value: "300M+" },
              { label: "agências parceiras", value: "100+" },
              { label: "clientes embarcados", value: "10k+" },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl border border-white/10 bg-white/5 
                  px-5 py-4 text-center shadow-sm
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-white/[0.08]
                "
              >
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA — “POR QUE ESCOLHER A YAH?” */}
        <div className="flex-1">
          <div className="relative">

            {/* LUZES DE BRILHO PREMIUM */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-5 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-3xl" />

            {/* CARTÃO PREMIUM COM BORDA DEGRADÊ */}
            <div className="rounded-[28px] bg-gradient-to-br from-teal-500/20 via-purple-500/15 to-sky-500/20 p-[2px] shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
              <div className="rounded-[26px] bg-[#1c0c2b]/70 px-10 py-10 backdrop-blur-md">

                {/* TOP TITLE */}
                <div className="mb-6">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-teal-300">
                    Benefícios exclusivos
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Por que escolher a Yah?
                  </h2>
                </div>

                {/* LISTA PREMIUM */}
                <ul className="space-y-4 text-slate-200">
                  {[
                    "Menos pontos com combinações inteligentes.",
                    "Liquidez rápida na compra e venda de milhas.",
                    "Atendimento imediato (SLA ágil) no WhatsApp.",
                    "Segurança e compliance em todo o processo."
                  ].map((item) => (
                    <li
                      key={item}
                      className="group flex items-start gap-3"
                    >
                      <span
                        className="
                          mt-1 flex h-5 w-5 items-center justify-center
                          rounded-full border border-teal-400/40
                          text-teal-300 text-xs
                          transition-colors duration-300
                          group-hover:bg-teal-400 group-hover:text-[#12051d]
                        "
                      >
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
