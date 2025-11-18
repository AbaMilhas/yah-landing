"use client";

import React, { useMemo, useState } from "react";

/** Tabela de CPM (R$/milheiro) - ajuste conforme sua precificação */
const CPM: Record<string, number> = {
  Latam: 22.0,
  Smiles: 14.0,
  Azul: 10.0,
  TAP: 37.0,
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

  // Modal
  const [open, setOpen] = useState(false);

  // calcula valor estimado
  const valor = useMemo(() => {
    const qtd = Number(pontos || 0);
    if (!cia || !qtd) return 0;
    const cpm = CPM[cia] ?? CPM["Outros"];
    return Math.round((qtd / 1000) * cpm * 100) / 100;
  }, [cia, pontos]);

  // WhatsApp
  const yahNumber = "5551999999999"; // <-- coloque o número oficial (apenas dígitos)
  const waMessage = useMemo(() => {
    return [
      "Olá! Quero negociar minha cotação ✅",
      `• Companhia/Banco: ${cia}`,
      `• Pontos: ${pontos}`,
      `• Valor estimado: R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
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
      alert("Confirme o consentimento LGPD antes de enviar.");
      return;
    }
    if (!cia || !pontos || !nome || !whats || !email) {
      alert("Preencha todos os campos obrigatórios.");
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
      alert("Não foi possível registrar sua cotação agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="simular"
      className="bg-yah-900 py-16 px-6 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-white">
        Simule sua <span className="text-teal-400">cotação</span>
      </h2>

      <div className="w-full max-w-2xl rounded-2xl bg-white text-yah-900 shadow-xl border border-black/5">
        <form
          onSubmit={submit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-8"
        >
          {/* Companhia aérea */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Companhia aérea ou banco
            </label>
            <select
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
              value={cia}
              onChange={(e) => setCia(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="Latam">Latam</option>
              <option value="Smiles">Smiles</option>
              <option value="Azul">Azul</option>
              <option value="TAP">TAP</option>
              <option value="American Airlines">American Airlines</option>
              <option value="Iberia">Iberia</option>
              <option value="Qatar">Qatar</option>
              <option value="British">British</option>
              <option value="Livelo">Livelo</option>
              <option value="Esfera">Esfera</option>
              <option value="C6 Bank">C6 Bank</option>
              <option value="Itau">Itaú</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          {/* Quantidade de pontos */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Quantidade de pontos
            </label>
            <input
              type="number"
              placeholder="Ex: 150000"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
              value={pontos}
              onChange={(e) => setPontos(e.target.value)}
              required
              min={0}
            />
          </div>

          {/* Nome completo */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp</label>
            <input
              type="text"
              placeholder="(51) 99999-9999"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              required
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* LGPD */}
          <label className="md:col-span-2 flex items-start gap-2 text-sm text-slate-600 mt-2">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
            />
            Autorizo o contato via WhatsApp conforme a LGPD.
          </label>

          {/* Botão */}
          <button
            type="submit"
            disabled={loading || !consent}
            className="md:col-span-2 mt-2 inline-flex justify-center rounded-xl bg-teal-500 text-white font-semibold px-6 py-3 shadow-md hover:bg-teal-400 transition disabled:opacity-60"
          >
            {loading ? "Processando..." : "Obter cotação"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* content */}
          <div className="relative z-10 w-[92%] max-w-lg rounded-2xl bg-white text-yah-900 shadow-2xl border border-black/5">
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <h3 className="text-xl font-bold">Sua cotação</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-slate-800"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-slate-600">Companhia/Banco</span>
                <span className="col-span-2 font-medium">{cia || "—"}</span>

                <span className="text-slate-600">Pontos</span>
                <span className="col-span-2 font-medium">
                  {pontos ? Number(pontos).toLocaleString("pt-BR") : "—"}
                </span>

                <span className="text-slate-600">Valor estimado</span>
                <span className="col-span-2 font-bold text-emerald-700">
                  {valor
                    ? `R$ ${valor.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}`
                    : "—"}
                </span>

                <span className="text-slate-600">Nome</span>
                <span className="col-span-2">{nome || "—"}</span>

                <span className="text-slate-600">WhatsApp</span>
                <span className="col-span-2">{whats || "—"}</span>

                <span className="text-slate-600">E-mail</span>
                <span className="col-span-2">{email || "—"}</span>
              </div>

              <p className="text-xs text-slate-500 pt-2">
                * Cotação estimada com base em tabela padrão (CPM). Valores podem
                variar conforme regras da companhia/banco e disponibilidade. Validade: 24h.
              </p>
            </div>

            <div className="p-6 border-t border-black/5 flex gap-3 justify-end">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                Fechar
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-teal-500 text-white px-4 py-2 font-semibold hover:bg-teal-400"
              >
                Negociar agora
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
