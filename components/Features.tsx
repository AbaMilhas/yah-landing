export default function Features() {
  const items = [
    { t: "Compra de milhas", d: "Pagamos à vista, sem complicação e com contrato." },
    { t: "Venda de milhas", d: "Melhor taxa com análise dinâmica do mercado." },
    { t: "Emissão inteligente", d: "Rotas e combinações para reduzir o total de pontos." },
    { t: "SLA ágil", d: "Atendimento rápido com status e transparência." },
  ];

  const steps = [
    { n: "01", t: "Solicite", d: "Envie dados do voo ou proposta de milhas." },
    { n: "02", t: "Validação", d: "Avaliamos tarifas, rotas e regras." },
    { n: "03", t: "Confirmação", d: "Você aprova valores/condições." },
    { n: "04", t: "Emissão", d: "Emitimos e enviamos os bilhetes." },
  ];

  return (
    <>
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Serviços <span className="text-teal-500">Yah</span>
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="h-2 w-10 rounded bg-teal-500 mb-3" />
              <h3 className="font-semibold">{it.t}</h3>
              <p className="text-ink-muted text-sm mt-1">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Como <span className="text-teal-500">funciona</span>
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-teal-500 font-extrabold text-2xl">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="text-ink-muted text-sm mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
