import FadeIn from "./FadeIn";

const DEPOIMENTOS = [
  {
    nome: "Rafael Monteiro",
    cargo: "Empresário",
    texto: "Vendi 200 mil milhas Latam e recebi em menos de 48h. Processo sem complicação, time sempre disponível no WhatsApp.",
    initials: "RM",
  },
  {
    nome: "Camila Duarte",
    cargo: "Consultora",
    texto: "Já operei com outros bancos de milhas e a Yah foi a que mais passou transparência. Proposta clara, sem surpresas.",
    initials: "CD",
  },
  {
    nome: "Gustavo Faria",
    cargo: "Agente de viagens",
    texto: "Parceiro da Yah há mais de um ano. Liquidez rápida e preço competitivo. Recomendo para qualquer agência.",
    initials: "GF",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-yah-900 py-24">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 pt-24">

        <FadeIn direction="up">
          <div className="mb-12 space-y-2">
            <span className="tag">Depoimentos</span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Quem negociou{" "}
              <span className="gradient-text">aprovou</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <FadeIn key={d.nome} direction="up" delay={i * 100}>
              <div className="flex h-full flex-col gap-5 rounded-2xl surface surface-hover p-6 shadow-card">
                <span className="text-3xl font-serif leading-none text-teal-500/40 select-none">&ldquo;</span>
                <p className="flex-1 text-sm text-white/60 leading-relaxed -mt-2">{d.texto}</p>
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs font-bold text-teal-400">
                    {d.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{d.nome}</p>
                    <p className="text-xs text-white/35">{d.cargo}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
