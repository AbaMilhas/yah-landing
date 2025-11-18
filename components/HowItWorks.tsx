"use client";

export default function HowItWorks() {
  const steps = [
    {
      title: "Você faz a cotação",
      text: "Nos envia seus dados de milhas e da viagem. Em pouco tempo, você recebe uma proposta clara e justa.",
    },
    {
      title: "Se o valor fizer sentido, fala com nosso time",
      text: "A gente alinha tudo com você, tira dúvidas e confirma a negociação de forma simples e transparente.",
    },
    {
      title: "Após a emissão, você recebe em até 48h úteis",
      text: "As passagens são emitidas e o pagamento das suas milhas é liberado com agilidade, dentro do prazo combinado.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 bg-[#1A0429] text-white border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* COLUNA ESQUERDA – TÍTULOS / TEXTO */}
          <div className="space-y-4">
            <p className="text-teal-300 font-semibold tracking-[0.24em] uppercase text-sm">
              Como funciona
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Você no controle, a Yah na operação.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              O processo foi pensado para que você entenda cada etapa: você
              faz a cotação, avalia a proposta e, se fizer sentido, recebe
              o pagamento das suas milhas em até 48h úteis após a emissão.
            </p>
          </div>

          {/* COLUNA DIREITA – ETAPAS EM UMA COLUNA VERTICAL */}
          <div
            className="
              rounded-2xl border border-white/12 bg-white/6
              backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.45)]
              px-6 py-6 space-y-6
            "
          >
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                {/* coluna do número + linha */}
                <div className="flex flex-col items-center">
                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-teal-300 text-[#1A0429] text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-1 h-full w-px bg-white/20" />
                  )}
                </div>

                {/* texto da etapa */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
