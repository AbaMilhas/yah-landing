"use client";

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#2A063A] text-white py-16 sm:py-20 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* Cabeçalho da seção */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-teal-300">
            Serviços
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            O que a Yah milhas faz por você
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Soluções pensadas para quem quer rentabilizar milhas sem dor de
            cabeça: simples de entender, eficientes na prática.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Compra de milhas */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-400/40 via-teal-500/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex h-full flex-col gap-3 rounded-2xl bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
                01
              </span>
              <h3 className="text-lg font-semibold">Compra de milhas</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Transforme seu saldo de milhas em dinheiro com agilidade,
                segurança e condições justas.
              </p>
            </div>
          </div>

          {/* Venda com estratégia */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-400/40 via-teal-500/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex h-full flex-col gap-3 rounded-2xl bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
                02
              </span>
              <h3 className="text-lg font-semibold">Venda com estratégia</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Usamos inteligência nas combinações para você usar menos pontos
                e extrair mais valor em cada operação.
              </p>
            </div>
          </div>

          {/* Emissões */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-400/40 via-teal-500/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex h-full flex-col gap-3 rounded-2xl bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
                03
              </span>
              <h3 className="text-lg font-semibold">Emissões</h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Pagando uma taxa de emissão, te auxiliamos em toda a troca da
                passagem com milhas, com suporte do time Yah do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
