"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useToast, Toast } from "./Toast";
import FadeIn from "./FadeIn";

/** CPM fixo (fallback) - se a planilha falhar, o site usa esses valores */
const CPM_FALLBACK: Record<string, number> = {
  Latam: 24.0,
  Smiles: 14.0,
  Azul: 10.0,
  TAP: 35.0,
  "American Airlines": 70.0,
  Iberia: 45.0,
  Qatar: 50.0,
  British: 50.0,
  Livelo: 25.0,
  Esfera: 25.0,
  "C6 Bank": 35.0,
  Itau: 35.0,
  Outros: 30.0,
};

type CotacaoPayload = {
  cia: string;
  pontos: number;
  nome: string;
  whats: string;
  email: string;
  valor: number;
  criadoEm: string; // ISO
};

export default function Simular() {
  const [cia, setCia] = useState("");
  const [pontos, setPontos] = useState("");
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast, show } = useToast();

  // Modal
  const [open, setOpen] = useState(false);

  // CPM vindo da planilha (prioridade)
  const [cpmSheet, setCpmSheet] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/cpm");
        const data = await res.json();
        if (data && !data.error) setCpmSheet(data);
        else setCpmSheet(null);
      } catch {
        setCpmSheet(null);
      }
    })();
  }, []);

  const cpmBase = useMemo(() => cpmSheet ?? CPM_FALLBACK, [cpmSheet]);

  // calcula valor estimado
  const valor = useMemo(() => {
    const qtd = Number(pontos || 0);
    if (!cia || !qtd) return 0;

    const cpm = cpmBase[cia] ?? cpmBase["Outros"];
    return Math.round((qtd / 1000) * cpm * 100) / 100;
  }, [cia, pontos, cpmBase]);

  // WhatsApp
  const yahNumber = "5551995761431"; // <-- número oficial (apenas dígitos)
  const waMessage = useMemo(() => {
    return [
      "Olá! Quero negociar minha cotação ✅",
      `• Companhia/Banco: ${cia}`,
      `• Pontos: ${pontos}`,
      `• Valor estimado: R$ ${valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`,
      `• Nome: ${nome}`,
      `• WhatsApp: ${whats}`,
      `• Email: ${email}`,
    ].join("\n");
  }, [cia, pontos, valor, nome, whats, email]);

  const waLink = useMemo(
    () => `https://wa.me/${yahNumber}?text=${encodeURIComponent(waMessage)}`,
    [yahNumber, waMessage]
  );

  /** Salva localmente (localStorage) */
  const salvarLocal = (payload: CotacaoPayload) => {
    try {
      const k1 = "yahmilhas_cotacoes";
      const atual1 = JSON.parse(localStorage.getItem(k1) || "[]");
      atual1.unshift(payload);
      localStorage.setItem(k1, JSON.stringify(atual1.slice(0, 500)));
    } catch {}

    try {
      const contato = {
        nome: payload.nome,
        whats: payload.whats,
        email: payload.email,
        origem: "form",
        criadoEm: payload.criadoEm,
      };
      const k2 = "yahmilhas_contatos";
      const atual2 = JSON.parse(localStorage.getItem(k2) || "[]");
      atual2.unshift(contato);
      localStorage.setItem(k2, JSON.stringify(atual2.slice(0, 1000)));
    } catch {}
  };

  /** Envia para APIs (se existirem) */
  const salvarRemoto = async (payload: CotacaoPayload) => {
    // /api/cotacao
    try {
      await fetch(`${window.location.origin}/api/cotacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {}

    // /api/contato
    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: payload.nome,
          whats: payload.whats,
          email: payload.email,
          origem: "form",
          criadoEm: payload.criadoEm,
        }),
      });
    } catch {}
  };

  /** Submit do formulário */
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!consent) {
      show("Confirme o consentimento LGPD antes de enviar.", "error");
      return;
    }
    if (!cia || !pontos || !nome || !whats || !email) {
      show("Preencha todos os campos obrigatórios.", "error");
      return;
    }

    setLoading(true);
    try {
      const payload: CotacaoPayload = {
        cia,
        pontos: Number(pontos),
        nome,
        whats,
        email,
        valor,
        criadoEm: new Date().toISOString(),
      };

      // salva local e tenta remoto
      salvarLocal(payload);
      await salvarRemoto(payload);

      // abre modal
      setOpen(true);
    } catch {
      show("Não foi possível registrar sua cotação agora. Tente novamente.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="simular" className="bg-yah-900 py-24">
      <div className="section-divider" />
      <Toast toast={toast} />

      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Lado esquerdo — texto */}
          <FadeIn direction="up" className="space-y-5 lg:sticky lg:top-24">
            <span className="tag">Simulador</span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Simule sua{" "}
              <span className="gradient-text">cotação</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-sm">
              Preencha os dados ao lado e veja instantaneamente o valor estimado das suas milhas.
            </p>

            {/* preview do valor em tempo real */}
            {valor > 0 && (
              <div className="rounded-2xl surface p-5">
                <p className="text-xs text-white/40 mb-1">Valor estimado</p>
                <p className="text-3xl font-bold gradient-text">
                  R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <p className="mt-1 text-xs text-white/30">{cia} · {pontos ? Number(pontos).toLocaleString("pt-BR") : 0} pontos</p>
              </div>
            )}
          </FadeIn>

          {/* Lado direito — formulário dark */}
          <FadeIn direction="left" delay={100} className="rounded-2xl surface p-6 shadow-card-lg sm:p-8">
            <form onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  Companhia aérea ou banco
                </label>
                <select
                  className="input-dark"
                  style={{ background: "rgba(255,255,255,0.05)", color: "white" }}
                  value={cia}
                  onChange={(e) => setCia(e.target.value)}
                  required
                >
                  <option value="" style={{ background: "#12051D" }}>Selecione...</option>
                  {["Latam","Smiles","Azul","TAP","American Airlines","Iberia","Qatar","British","Livelo","Esfera","C6 Bank","Itaú","Outros"].map((v) => (
                    <option key={v} value={v === "Itaú" ? "Itau" : v} style={{ background: "#12051D" }}>{v}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  Quantidade de pontos
                </label>
                <input
                  type="number"
                  placeholder="Ex: 150.000"
                  className="input-dark"
                  value={pontos}
                  onChange={(e) => setPontos(e.target.value)}
                  required
                  min={0}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="input-dark"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/50">WhatsApp</label>
                <input
                  type="text"
                  placeholder="(51) 99999-9999"
                  className="input-dark"
                  value={whats}
                  onChange={(e) => setWhats(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/50">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="input-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <label className="sm:col-span-2 flex cursor-pointer items-start gap-3 text-xs text-white/35 mt-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-teal-500"
                />
                Autorizo o contato via WhatsApp conforme a LGPD.
              </label>

              <button
                type="submit"
                disabled={loading || !consent}
                className="sm:col-span-2 btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:shadow-none"
              >
                {loading ? "Processando..." : "Obter cotação"}
              </button>
            </form>
          </FadeIn>

        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white text-yah-900 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-1">
                  Yah Milhas
                </p>
                <h3 className="text-lg font-bold">Resumo da cotação</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Valor em destaque */}
            <div className="mx-6 mb-4 rounded-xl bg-emerald-50 border border-emerald-100 px-5 py-4 text-center">
              <p className="text-xs text-slate-500 mb-1">Valor estimado</p>
              <p className="text-3xl font-extrabold text-emerald-600">
                {valor
                  ? `R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                  : "—"}
              </p>
            </div>

            {/* Detalhes */}
            <div className="mx-6 mb-4 space-y-2">
              {[
                { label: "Companhia / Banco", value: cia },
                { label: "Pontos", value: pontos ? Number(pontos).toLocaleString("pt-BR") : "" },
                { label: "Nome", value: nome },
                { label: "WhatsApp", value: whats },
                { label: "E-mail", value: email },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-slate-500">{label}</span>
                  <span className="font-medium text-right ml-4">{value || "—"}</span>
                </div>
              ))}
            </div>

            <p className="mx-6 mb-4 text-xs text-slate-400">
              * Estimativa baseada em CPM padrão. Valores podem variar conforme disponibilidade. Validade: 24h.
            </p>

            {/* Botões */}
            <div className="flex flex-col gap-3 px-6 pb-6">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-teal-400 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Negociar agora
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}