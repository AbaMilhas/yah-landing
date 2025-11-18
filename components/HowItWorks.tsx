export default function HowItWorks() {
  const steps = [
    {
      title: "1. Você nos conta sua necessidade",
      description:
        "Informe quantas milhas tem, em quais bancos/programas e se prefere vender ou usar para emissão.",
    },
    {
      title: "2. Analisamos as melhores opções",
      description:
        "A equipe Yah cruza regras, tarifas e oportunidades para chegar no cenário mais vantajoso para você.",
    },
    {
      title: "3. Você aprova e concluímos",
      description:
        "Com tudo alinhado, fechamos a operação com agilidade, transparência e acompanhamento até o final.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="bg-white py-16 text-slate-900 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase text-teal-500">
            Como funciona
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Processo simples, resultado profissional.
          </h2>
          <p className="text-sm text-slate-600">
            Você fala com um time especialista em milhas. Nós cuidamos da
            inteligência e da operação para que tudo seja leve pra você.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f9fafb] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-600">
                {index + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 t
