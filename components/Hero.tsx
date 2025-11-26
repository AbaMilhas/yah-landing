"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
};

const STATS: Stat[] = [
  { label: "emissões/ano", value: 3700, suffix: "+" },
  { label: "milhas negociadas", value: 300, suffix: "M+" },
  { label: "agências parceiras", value: 100, suffix: "+" },
  { label: "clientes embarcados", value: 10, suffix: "k+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, value]);

  // formata 3700 => "3.700", 300 => "300"
  const formatted =
    value >= 1000
      ? display.toLocaleString("pt-BR")
      : display.toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-yah-900 text-white pb-16 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-8">
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* Logo Yah no hero */}
          <div className="mt-2 mb-4">
            <Image
              src="/logo-yah-hero.png" // mesma logo que você já está usando no hero
              alt="Yah Milhas"
              width={260}
              height={120}
              priority
            />
          </div>

          {/* Headline e subtítulo */}
          <div className="space-y-4">
            <p className="max-w-xl text-xl sm:text-2xl font-semibold">
              Milhas negociadas com inteligência — simples, rápido e
              confiável.
            </p>
          </div>

          {/* >>> BOTÃO PRINCIPAL – SIMULAR COTAÇÃO <<< */}
          <div className="mt-4">
            <Link
              href="#simular"
              className="inline-flex items-center justify-center rounded-full bg-[#00d8d8] px-10 py-4 text-base font-semibold text-[#12051d] shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_22px_55px_rgba(0,0,0,0.75)]"
            >
              Simular cotação
            </Link>
          </div>

          {/* NÚMEROS – com animação de contagem */}
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
              >
                <p className="text-xl font-bold sm:text-2xl">
                  <AnimatedNumber value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-xs text-slate-200 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA – CARD DE BENEFÍCIOS */}
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.25em] text-teal-300 uppercase mb-3">
              Benefícios Yah Milhas
            </p>
            <h2 className="mb-3 text-2xl font-semibold">
              Por que escolher a Yah?
            </h2>
            <p className="mb-6 text-sm text-slate-200/90">
              Um modelo pensado para dar previsibilidade, atendimento sério e
              segurança em cada operação com milhas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 px-5 py-4">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-xs font-semibold text-teal-300">
                  01
                </div>
                <div>
                  <p className="text-sm font-semibold">Liquidez rápida</p>
                  <p className="text-xs text-slate-200/80">
                    Compra e venda estruturadas para você girar milhas sem
                    travar o caixa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 px-5 py-4">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-xs font-semibold text-teal-300">
                  02
                </div>
                <div>
                  <p className="text-sm font-semibold">Atendimento imediato</p>
                  <p className="text-xs text-slate-200/80">
                    Time dedicado no WhatsApp, acompanhando de perto cada
                    emissão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/5 px-5 py-4">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/15 text-xs font-semibold text-teal-300">
                  03
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    Segurança &amp; compliance
                  </p>
                  <p className="text-xs text-slate-200/80">
                    Processos documentados e rastreáveis, protegendo dados e
                    acordos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
