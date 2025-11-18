export default function Services() {
  const services = [
    {
      title: "Compra de milhas",
      description:
        "Liquidez rápida para o seu saldo, com avaliação justa e segurança em todo o fluxo.",
    },
    {
      title: "Venda com inteligência",
      description:
        "Estratégia na combinação de bancos, clubes e programas para usar menos pontos.",
    },
    {
      title: "Operação para agências",
      description:
        "Backoffice completo para agências parceiras, com suporte dedicado e acompanhamento.",
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-[#0d0416] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-300">
              Serviços
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              O que a Yah faz por você
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Soluções pensadas para quem quer rentabilizar milhas com
              previsibilidade, segurança e suporte de verdade.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/5 bg-[#170822] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
            >
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-teal-300">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
