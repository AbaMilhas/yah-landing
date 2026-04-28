"use client";

import FadeIn from "./FadeIn";

const STEPS = [
  {
    title: "Você faz a cotação",
    text: "Envia seus dados de milhas pelo simulador. Em minutos, você recebe uma proposta clara e justa.",
  },
  {
    title: "Nosso time entra em contato",
    text: "Alinhamos tudo com você pelo WhatsApp, tiramos dúvidas e confirmamos a negociação de forma transparente.",
  },
  {
    title: "Receba em até 48h úteis",
    text: "As passagens são emitidas e o pagamento das suas milhas é liberado com agilidade, dentro do prazo combinado.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-yah-900 py-24">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 pt-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <FadeIn direction="up">
            <div className="space-y-5">
              <span className="tag">Como funciona</span>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Você no controle,{" "}
                <br className="hidden sm:block" />
                <span className="gradient-text">a Yah na operação.</span>
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-sm">
                Processo pensado para que você entenda cada etapa e receba o pagamento sem surpresas.
              </p>
              <a href="#simular" className="btn-primary w-fit text-sm">
                Começar agora
              </a>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <FadeIn key={step.title} direction="left" delay={i * 120}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-sm font-bold text-teal-400 ring-1 ring-teal-500/30">
                      {i + 1}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-teal-500/20 to-transparent" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-1.5 text-base font-semibold">{step.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
