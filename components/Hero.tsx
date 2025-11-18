"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type AnimatedNumberProps = {
  target: number;
  duration?: number;
  format?: (value: number) => string;
};

function AnimatedNumber({ target, duration = 1500, format }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId: number;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  const display = format ? format(value) : value.toString();
  return <>{display}</>;
}

export default function Hero() {
  const stats = [
    {
      label: "emissões/ano",
      target: 3700,
      format: (v: number) => `${v.toLocaleString("pt-BR")}+`,
    },
    {
      label: "milhas negociadas",
      target: 300,
      format: (v: number) => `${v}M+`,
    },
    {
      label: "agências parceiras",
      target: 100,
      format: (v: number) => `${v}+`,
    },
    {
      label: "clientes embarcados",
      target: 10000,
      format: (v: number) =>
        v >= 1000 ? `${Math.floor(v / 1000)}k+` : `${v}+`,
    },
  ];

  return (
    <section className="bg-[#2A063A] text-white pb-16 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center">
        
        {/* COLUNA ESQUERDA */}
        <div className="flex-1 space-y-4">
          {/* Selo */}
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300 -mb-1">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Banco de milhas
          </p>

          {/* Logo */}
          <div className="-mt-2">
            <img
              src="/logo-yah-header.png"
              alt="Yah Milhas"
              className="h-[180px] w-auto sm:h-[190px] lg:h-[200px]"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* Subtítulo */}
          <p className="max-w-xl text-lg sm:text-xl text-slate-200 leading-relaxed -mt-3">
            Milhas negociadas com inteligência — simples, rápido e confiável.
          </p>

          {/* CTA */}
          <Link
            href="#contato"
            className="inline-flex items-center rounded-full bg-[#00E5E5] px-10 py-3 text-base font-semibold text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00d4d4] hover:shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
          >
            Falar com especialista
          </Link>

          {/* MÉTRICAS com contador */}
          <div className="mt-2 grid gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-4 text-center shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/20"
              >
                <p className="text-xl font-bold">
                  <AnimatedNumber target={item.target} format={item.format} />
                </p>
                <p className="text-[11px] text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA – CARD NOVO DE BENEFÍCIOS */}
        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-white/12 bg-white/[0.05] px-7 py-7 shadow-[0_16px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {/* Cabeçalho */}
            <div className="space-y-1 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-300">
                Benefícios Yah milhas
              </span>
              <h2 className="text-xl font-semibold leading-tight">
                Por que escolher a Yah?
              </h2>
              <p className="text-[11px] text-slate-200/85 leading-relaxed">
                Um modelo pensado para dar previsibilidade, atendimento sério
                e segurança em cada operação com milhas.
              </p>
            </div>

            {/* Lista numerada de benefícios */}
            <div className="space-y-3">
              {[
                {
                  title: "Liquidez rápida",
                  description:
                    "Compra e venda estruturadas para você girar milhas sem travar o caixa.",
                },
                {
                  title: "Atendimento imediato",
                  description:
                    "Time dedicado no WhatsApp, acompanhando de perto cada emissão.",
                },
                {
                  title: "Segurança & compliance",
                  description:
                    "Processos documentados e rastreáveis, protegendo dados e acordos.",
                },
              ].map((item, index) => (
                <div key={item.title}>
                  <div className="flex gap-3 rounded-xl bg-white/[0.03] px-3 py-3 transition-all duration-300 hover:bg-white/[0.1] hover:-translate-y-0.5">
                    <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/22 text-[11px] font-semibold text-teal-200">
                      {`0${index + 1}`}
                    </div>
                    <div className="space-y-[2px]">
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-[11px] leading-relaxed text-slate-200/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < 2 && (
                    <div className="mx-3 my-2 h-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
