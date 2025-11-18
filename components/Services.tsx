export default function Services() {
  const services = [
    {
      title: "Compra de milhas",
      description:
        "Transforme seu saldo de milhas em dinheiro com agilidade, segurança e condições justas.",
    },
    {
      title: "Venda com estratégia",
      description:
        "Usamos inteligência nas combinações para você usar menos pontos e extrair mais valor.",
    },
    {
      title: "Suporte para agências",
      description:
        "Operação dedicada para agências parceiras, com acompanhamento próximo e atendimento ágil.",
    },
  ];

  return (
    <section id="servicos" className="bg-[#f5f5fb] py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-500">
              Serviços
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              O que a Yah milhas faz por você
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Soluções pensadas para quem quer rentabilizar milhas sem dor de
              cabeça: simples de entender, eficiente na prática.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-600">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">{service.description}</p>
