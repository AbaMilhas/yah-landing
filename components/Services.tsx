"use client";

import { MdCurrencyExchange, MdTrendingUp, MdAirplaneTicket } from "react-icons/md";
import FadeIn from "./FadeIn";

const SERVICES = [
  {
    Icon: MdCurrencyExchange,
    title: "Compra de milhas",
    desc: "Transforme seu saldo de milhas em dinheiro com agilidade, segurança e condições justas.",
  },
  {
    Icon: MdTrendingUp,
    title: "Venda com estratégia",
    desc: "Usamos inteligência nas combinações para você usar menos pontos e extrair mais valor.",
  },
  {
    Icon: MdAirplaneTicket,
    title: "Emissões",
    desc: "Pagando uma taxa de emissão, te auxiliamos na troca da passagem com milhas.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-yah-900 py-24">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 pt-24">

        <FadeIn direction="up">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <span className="tag">Serviços</span>
              <h2 className="text-3xl font-bold sm:text-4xl">
                O que a Yah faz{" "}
                <span className="gradient-text">por você</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-white/45 leading-relaxed">
              Soluções para rentabilizar milhas sem dor de cabeça.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <FadeIn key={title} direction="up" delay={i * 100}>
              <div className="group relative h-full rounded-2xl surface surface-hover p-6 shadow-card">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-teal-500/[0] transition-colors duration-300 group-hover:bg-teal-500/[0.03]" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10">
                    <Icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
