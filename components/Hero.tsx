"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

type Stat = { label: string; value: number; suffix: string };

const STATS: Stat[] = [
  { label: "emissões/ano",      value: 3700, suffix: "+" },
  { label: "milhas negociadas", value: 300,  suffix: "M+" },
  { label: "agências parceiras",value: 100,  suffix: "+" },
  { label: "clientes embarcados",value: 10,  suffix: "k+" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  const formatted = value >= 1000 ? display.toLocaleString("pt-BR") : display.toString();
  return <span ref={ref}>{formatted}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yah-900 pb-24 pt-20">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-500/[0.06] blur-[120px]" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-purple-300/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">

          {/* COLUNA ESQUERDA */}
          <div className="flex-1 space-y-8">
            <FadeIn direction="up" delay={0}>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse-dot" />
                <span className="tag">Banco de milhas</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={80}>
              <div>
                <Image
                  src="/logo-yah-header.png"
                  alt="Yah Milhas"
                  width={200}
                  height={90}
                  priority
                  className="mb-6 brightness-0 invert"
                />
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Milhas negociadas{" "}
                  <span className="gradient-text">com inteligência.</span>
                </h1>
                <p className="mt-4 max-w-lg text-base text-white/55 leading-relaxed sm:text-lg">
                  Simples, rápido e confiável — do primeiro contato ao pagamento em até 48h úteis.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <Link href="#simular" className="btn-primary w-fit text-sm">
                Simular cotação agora
              </Link>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((item, i) => (
                <FadeIn key={item.label} direction="up" delay={280 + i * 80}>
                  <div className="rounded-xl surface surface-hover px-4 py-4 text-center">
                    <p className="text-xl font-bold text-teal-400 sm:text-2xl">
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{item.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA — card benefícios */}
          <FadeIn direction="left" delay={150} className="flex-1 lg:max-w-md">
            <div className="rounded-2xl surface px-8 py-8 shadow-card-lg backdrop-blur-sm">
              <span className="tag mb-3 block">Por que escolher a Yah?</span>
              <h2 className="mb-2 text-2xl font-bold">
                Benefícios Yah Milhas
              </h2>
              <p className="mb-7 text-sm text-white/50 leading-relaxed">
                Um modelo pensado para dar previsibilidade, atendimento sério e segurança em cada operação.
              </p>

              <div className="space-y-3">
                {[
                  { n: "01", title: "Liquidez rápida", desc: "Compra e venda estruturadas para você girar milhas sem travar o caixa." },
                  { n: "02", title: "Atendimento imediato", desc: "Time dedicado no WhatsApp, acompanhando de perto cada emissão." },
                  { n: "03", title: "Segurança & compliance", desc: "Processos documentados e rastreáveis, protegendo dados e acordos." },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 rounded-xl bg-white/[0.03] px-4 py-4 border border-white/[0.06]">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs font-bold text-teal-400">
                      {item.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
