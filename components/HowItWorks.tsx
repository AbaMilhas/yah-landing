"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Você faz a cotação",
      text: "Nos envia seus pontos e recebe rapidamente uma proposta clara e justa.",
    },
    {
      number: "2",
      title: "Se fizer sentido, fala com nosso time",
      text: "Confirmamos todos os detalhes juntos, sem complicação ou burocracia.",
    },
    {
      number: "3",
      title: "Emitimos e você recebe em até 48h úteis",
      text: "Após a emissão das passagens, o pagamento é liberado com agilidade.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 bg-[#1A0429] text-white border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Títulos */}
        <div className="space-y-3">
          <p className="text-teal-300 font-semibold tracking-[0.24em] uppercase text-sm">
            Como funciona
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Simples para você. Eficiente para seus resultados.
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Todo o processo foi criado para ser leve, objetivo e seguro — você sempre sabe
            exatamente qual é o próximo passo.
          </p>
        </div>

        {/* Cards em coluna */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative p-6 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                hover:bg-white/10 hover:border-teal-300/40
                transition-all duration-300
              "
            >
              {/* Número */}
              <div
                className="
                  h-10 w-10 mb-4 flex items-center justify-center rounded-full
                  text-[#1A0429] font-bold
                  bg-teal-300
                "
              >
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
