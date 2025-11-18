"use client";
import { useEffect, useRef, useState } from "react";

/* Hook: dispara quando o elemento entra na viewport */
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options || { threshold: 0.2 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView } as const;
}

/* Contador animado 0 → target */
function Counter({
  target,
  formatter,
  start,
  duration = 1200,
}: {
  target: number;
  formatter: (n: number) => string;
  start: boolean;
  duration?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();

    const tick = (t: number) => {
      const elapsed = t - startTime;
      const p = Math.min(1, elapsed / duration);
      // easing out
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return <span>{formatter(val)}</span>;
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Banco de milhas
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            Yah <span className="lowercase">Milhas</span>
            <span className="text-teal-500">.</span>
          </h1>

          <p className="mt-4 text-lg text-ink-muted max-w-prose">
            Milhas negociadas com inteligência — simples, rápido e confiável.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#simular"
              className="relative overflow-hidden rounded-xl bg-teal-500 text-white font-semibold px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Simular cotação</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 animate-shine" />
            </a>
            <a href="#contato" className="text-white/90 hover:text-white transition-colors">
              Falar com especialista
            </a>
          </div>

          {/* Números rápidos (com animação) */}
          <div
            ref={ref}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          >
            {[
              {
                target: 3700,
                label: "emissões/ano",
                fmt: (n: number) => n.toLocaleString("pt-BR") + "+",
              },
              {
                target: 300,
                label: "milhas negociadas",
                fmt: (n: number) => `${n}M+`,
              },
              {
                target: 100,
                label: "agências parceiras",
                fmt: (n: number) => `${n}+`,
              },
              {
                target: 10,
                label: "clientes embarcados",
                fmt: (n: number) => `${n}k+`,
              },
            ].map(({ target, label, fmt }) => (
              <div
                key={label}
                className="rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <div className="text-2xl font-extrabold">
                  <Counter target={target} formatter={fmt} start={inView} />
                </div>
                <div className="text-xs text-ink-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card lateral */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Por que escolher a Yah?</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li>• Menos pontos com combinações inteligentes.</li>
            <li>• Liquidez rápida na compra e venda de milhas.</li>
            <li>• Atendimento imediato (SLA ágil) no WhatsApp.</li>
            <li>• Segurança e compliance em todo o processo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
