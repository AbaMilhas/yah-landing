"use client";

import Link from "next/link";

const waNumber =
  process.env.NEXT_PUBLIC_WA ||
  "5551999999999"; // <- substitui pelo teu número com DDI (ex.: 55 + DDD + número)

const waMsg = encodeURIComponent(
  "Olá! Tenho interesse no serviço da Yah. Fiz uma cotação e quero seguir com o processo. Pode me ajudar?"
);
const waLink = `https://wa.me/${waNumber}?text=${waMsg}`;

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-yah-900 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-xs tracking-widest uppercase text-white/60">
            passo a passo
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            Como funciona
            <span className="text-teal-400">.</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            Veja como cada serviço funciona na prática. Você pode iniciar pela
            cotação no site e finalizar com um especialista no WhatsApp.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Compra de pontos */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Compra de pontos
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Você vende seus pontos para a Yah com segurança e agilidade.
            </p>

            <ol className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <span className="font-semibold text-white">1)</span> Faça a{" "}
                <a href="#simular" className="text-teal-400 underline">
                  cotação
                </a>{" "}
                informando companhia/banco e quantidade de pontos.
              </li>
              <li>
                <span className="font-semibold text-white">2)</span> Envie a
                cotação para nós no WhatsApp para confirmar as condições.
              </li>
              <li>
                <span className="font-semibold text-white">3)</span> Validamos a
                conta/pontos e combinamos o procedimento de utilização.
              </li>
              <li>
                <span className="font-semibold text-white">4)</span>{" "}
                <span className="font-semibold">Pagamento</span> em até{" "}
                <span className="font-semibold">48h úteis</span> após a
                utilização dos pontos.
              </li>
              <li>
                <span className="font-semibold text-white">5)</span> Enviamos
                comprovantes e recibos conforme necessidade.
              </li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a
                href="#simular"
                className="rounded-xl bg-teal-500 text-white font-semibold px-4 py-2 hover:bg-teal-400 transition"
              >
                Simular cotação
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 text-white px-4 py-2 hover:bg-white/10 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-white/50">
              * Pagamento após uso: política padrão de segurança e compliance.
            </p>
          </div>

          {/* Concierge de pontos */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Concierge de pontos
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Te ajudamos a transformar pontos do seu banco no melhor retorno em
              reais, aproveitando bônus e janelas ideais.
            </p>

            <ol className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <span className="font-semibold text-white">1)</span> Informe em
                qual{" "}
                <span className="font-semibold">banco/conta</span> você possui
                os pontos (ex.: Livelo, Esfera, C6, Itaú etc.).
              </li>
              <li>
                <span className="font-semibold text-white">2)</span> Avaliamos
                promoções de transferência com{" "}
                <span className="font-semibold">bônus</span> e sugerimos o
                melhor momento/rota.
              </li>
              <li>
                <span className="font-semibold text-white">3)</span> Você
                aprova; executamos a estratégia e confirmamos resultados.
              </li>
              <li>
                <span className="font-semibold text-white">4)</span>{" "}
                Você recebe o{" "}
                <span className="font-semibold">retorno em reais</span>{" "}
                conforme combinado.
              </li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-teal-500 text-white font-semibold px-4 py-2 hover:bg-teal-400 transition"
              >
                Quero o concierge
              </a>
              <a
                href="#simular"
                className="rounded-xl border border-white/20 text-white px-4 py-2 hover:bg-white/10 transition"
              >
                Simular primeiro
              </a>
            </div>

            <p className="mt-3 text-xs text-white/50">
              * Objetivo: maximizar bônus e liquidez com segurança.
            </p>
          </div>

          {/* Emissão por milhas */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Emissão por milhas
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Você tem os pontos, mas não quer perder tempo pesquisando e
              emitindo? A gente emite por você.
            </p>

            <ol className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <span className="font-semibold text-white">1)</span> Envie os{" "}
                <span className="font-semibold">dados do voo</span> (trechos,
                datas, passageiros) e onde estão seus pontos.
              </li>
              <li>
                <span className="font-semibold text-white">2)</span> Buscamos as
                melhores opções e te apresentamos a{" "}
                <span className="font-semibold">tarifa em milhas</span>.
              </li>
              <li>
                <span className="font-semibold text-white">3)</span> Emitimos os
                bilhetes e enviamos os e-tickets no seu e-mail/WhatsApp.
              </li>
              <li>
                <span className="font-semibold text-white">4)</span> Cobrança de{" "}
                <span className="font-semibold">taxa negociada</span> com nosso
                especialista antes da emissão.
              </li>
            </ol>

            <div className="mt-6 flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-teal-500 text-white font-semibold px-4 py-2 hover:bg-teal-400 transition"
              >
                Emitir com especialista
              </a>
              <a
                href="#simular"
                className="rounded-xl border border-white/20 text-white px-4 py-2 hover:bg-white/10 transition"
              >
                Simular agora
              </a>
            </div>

            <p className="mt-3 text-xs text-white/50">
              * Taxa varia conforme complexidade e disponibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
