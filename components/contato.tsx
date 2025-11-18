"use client";

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-[#0d0416] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-sm font-semibold uppercase text-teal-300">
            Contato
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Fale com um especialista Yah
          </h2>
          <p className="text-sm text-slate-300">
            Envie sua demanda de milhas e nosso time retorna rapidamente com as
            melhores possibilidades para você ou para sua agência.
          </p>
        </div>

        <div className="rounded-3xl border border-white/5 bg-[#170822] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:-translate-y-1">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-300">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none transition-all focus:border-teal-400 focus:bg-black/30"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-300">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none transition-all focus:border-teal-400 focus:bg-black/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Descreva sua demanda de milhas
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none transition-all focus:border-teal-400 focus:bg-black/30"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-teal-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.9)]"
              >
                Enviar mensagem
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              <p className="text-xs text-slate-400">
                Resposta rápida pelo WhatsApp em horário comercial.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
