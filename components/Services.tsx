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
            cabeça: simples de entender, eficiente na prática.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Compra de milhas */}
          <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/70 hover:bg-white/[0.08]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
              01
            </span>
            <h3 className="text-lg font-semibold">Compra de milhas</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Transforme seu saldo de milhas em dinheiro com agilidade,
              segurança e condições justas.
            </p>
          </div>

          {/* Venda com estratégia */}
          <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/70 hover:bg-white/[0.08]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
              02
            </span>
            <h3 className="text-lg font-semibold">Venda com estratégia</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Usamos inteligência nas combinações para você usar menos pontos e
              extrair mais valor.
            </p>
          </div>

          {/* Emissões */}
          <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/70 hover:bg-white/[0.08]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-xs font-semibold text-teal-200">
              03
            </span>
            <h3 className="text-lg font-semibold">Emissões</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Pagando uma taxa de emissão, te auxiliamos na troca da passagem
              com milhas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
