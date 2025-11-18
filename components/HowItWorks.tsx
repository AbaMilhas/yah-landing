"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "O cliente faz a cotação",
      text: "Ele envia as informações e recebe uma proposta clara e rápida.",
    },
    {
      number: "2",
      title: "Se fizer sentido, fala com nosso time",
      text: "A equipe Yah alinha tudo com o cliente e confirma a negociação.",
    },
    {
      number: "3",
      title: "Emissão e pagamento em até 48h úteis",
      text: "Após emissão das passagens, o pagamento é liberado com agilidade.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 bg-[#1A0429] text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* Título */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-teal-300 font-semibold tracking-[0.24em] uppercase text-sm">
            Como funciona
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Processo simples, resultado profissional.
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            O fluxo foi pensado para ser rápido, seguro e transparente — do 
            primeiro contato ao pagamento final.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
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
              {/* Número circular */}
              <div
                className="
                  h-10 w-10 mb-4 flex items-center justify-center rounded-full
                  text-[#1A0429] font-bold
                  bg-teal-300
                "
              >
                {step.number}
              </div>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

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
