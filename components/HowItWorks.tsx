export default function HowItWorks() {
  const steps = [
    {
      title: "1. Você envia sua demanda",
      description:
        "Conta para a Yah quantas milhas tem, em quais bancos/programas e qual o objetivo.",
    },
    {
      title: "2. Análise inteligente",
      description:
        "Nos bastidores, combinamos contas, tarifas e regras para chegar na melhor utilização.",
    },
    {
      title: "3. Fechamento com liquidez",
      description:
        "Você aprova a proposta, fechamos a operação e acompanha tudo com suporte próximo.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="bg-[#12051d] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase text-teal-300">
            Como funciona
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Simples pra você, sofisticado por trás.
          </h2>
          <p className="text-sm text-slate-300">
            A Yah milhas cuida da inteligência, da segurança e da operação para
            que você foque no resultado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#170822] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/10 text-xs font-semibold text-teal-300">
                {index + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-teal-300">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
