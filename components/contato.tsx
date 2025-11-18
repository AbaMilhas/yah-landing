"use client";

export default function Contato() {
  return (
    <section id="contato" className="bg-[#f5f5fb] py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-sm font-semibold uppercase text-teal-500">
            Contato
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Fale com um especialista Yah milhas
          </h2>
          <p className="text-sm text-slate-600">
            Compartilhe sua situação de milhas e receba um retorno rápido do
            nosso time com os próximos passos.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-1">
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Descreva sua demanda de milhas
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-400"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-teal-400 hover:shadow-[0_20px_55px_rgba(15,23,42,0.35)]"
              >
                Enviar mensagem
                <span className="translate-x-0 transition-t
