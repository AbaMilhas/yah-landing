"use client";

const WHATS_NUMBER = "5551999999999"; // <-- substitui pelo número real da Yah (só números)

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-16">
      {/* título */}
      <div className="mb-8 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        <span className="text-xs tracking-widest uppercase text-ink-muted">Serviços</span>
      </div>

      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          O que a <span className="lowercase">Yah</span> faz por você
          <span className="text-teal-500">.</span>
        </h2>

        <a
          href="#simular"
          className="inline-flex items-center justify-center rounded-xl bg-teal-500 text-white font-semibold px-5 py-3 shadow-md hover:bg-teal-400 transition"
        >
          Simular cotação
        </a>
      </div>

      {/* cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* COMPRA DE MILHAS */}
        <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Compra de milhas</h3>
            <span className="text-[10px] uppercase tracking-widest rounded-full bg-teal-500/15 text-teal-300 px-2 py-1">
              Core
            </span>
          </div>

          <p className="text-sm text-ink-muted">
            Compramos milhas e pontos de programas como Latam Pass, Smiles, Azul e Esfera com 
            agilidade e total segurança.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Pagamento rápido e garantido
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Cotações em tempo real
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Suporte personalizado via WhatsApp
            </li>
          </ul>

          <div className="mt-5">
            <a
              href={`https://wa.me/${WHATS_NUMBER}?text=Olá! Quero cotar a venda das minhas milhas.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm font-semibold transition"
            >
              Vender milhas
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>

        {/* CONCIERGE DE TRANSFERÊNCIAS */}
        <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Concierge de transferências</h3>
            <span className="text-[10px] uppercase tracking-widest rounded-full bg-amber-500/15 text-amber-300 px-2 py-1">
              Novo
            </span>
          </div>

          <p className="text-sm text-ink-muted">
            Consultoria completa para quem quer aproveitar bônus de transferência e 
            multiplicar o valor das milhas com as melhores estratégias.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Monitoramento de campanhas de bônus
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Orientação sobre os melhores programas
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Suporte durante toda a negociação
            </li>
          </ul>

          <div className="mt-5">
            <a
              href={`https://wa.me/${WHATS_NUMBER}?text=Olá! Quero ajuda com bônus de transferência.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm font-semibold transition"
            >
              Falar com concierge
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>

        {/* EMISSÃO COM MILHAS */}
        <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Emissão com milhas</h3>
          </div>

          <p className="text-sm text-ink-muted">
            Realizamos emissões nacionais e internacionais com as menores taxas e 
            o melhor aproveitamento de milhas.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Emissões corporativas e particulares
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Agilidade no envio dos bilhetes
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
              Atendimento humano, direto no WhatsApp
            </li>
          </ul>

          <div className="mt-5">
            <a
              href="#simular"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-semibold transition"
            >
              Simular cotação
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
