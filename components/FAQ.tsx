"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const ITEMS = [
  {
    q: "É seguro vender minhas milhas pela Yah?",
    a: "Sim. Todos os processos são documentados e rastreáveis. Trabalhamos com transparência total e acompanhamento em cada etapa da operação.",
  },
  {
    q: "Quando recebo após vender minhas milhas?",
    a: "O pagamento é liberado em até 48 horas úteis após a confirmação da emissão das passagens.",
  },
  {
    q: "Quais companhias e programas vocês aceitam?",
    a: "Latam, Smiles (Gol), Azul, TAP, American Airlines, Iberia, Qatar, British Airways, Livelo, Esfera, C6 Bank, Itaú e outros mediante consulta.",
  },
  {
    q: "Existe quantidade mínima de pontos?",
    a: "Geralmente trabalhamos com no mínimo 10.000 pontos por operação. Entre em contato para confirmar a disponibilidade do seu programa.",
  },
  {
    q: "Como funciona a emissão de passagens?",
    a: "Você informa o destino e as datas. Nossa equipe busca a melhor combinação de milhas e rotas para reduzir o total de pontos utilizados.",
  },
  {
    q: "Preciso me cadastrar em alguma plataforma?",
    a: "Não. Todo o processo é feito diretamente pelo WhatsApp ou pelo formulário do site. Sem cadastro, sem burocracia.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-yah-900 py-24">
      <div className="section-divider" />
      <div className="mx-auto max-w-2xl px-6 pt-24">

        <FadeIn direction="up">
          <div className="mb-12 space-y-2 text-center">
            <span className="tag">Dúvidas</span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Perguntas <span className="gradient-text">frequentes</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-2">
          {ITEMS.map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 60}>
              <div className="overflow-hidden rounded-xl surface transition-colors duration-200 hover:border-white/[0.14]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white/90">{item.q}</span>
                  <span className={`flex-shrink-0 text-teal-400 text-lg transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="border-t border-white/[0.06] px-5 pb-5 pt-3 text-sm text-white/50 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
