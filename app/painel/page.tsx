"use client";

import { useEffect, useMemo, useState } from "react";

type Cotacao = {
  cia: string;
  pontos: number;
  nome: string;
  whats: string;
  email: string;
  valor: number;
  criadoEm: string; // ISO
};

type Contato = {
  nome: string;
  whats: string;
  email: string;
  origem?: string; // "form"
  criadoEm: string; // ISO
};

function exportCSV(filename: string, rows: any[]) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv =
    [headers.join(";")]
      .concat(rows.map((r) => headers.map((h) => `${String(r[h] ?? "").replaceAll(";", ",")}`).join(";")))
      .join("\n");

  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

export default function PainelPage() {
  const [cotacoes, setCotacoes] = useState<Cotacao[]>([]);
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [busca, setBusca] = useState("");
  const [filtroCia, setFiltroCia] = useState<string>("");

  useEffect(() => {
    try {
      const cots = JSON.parse(localStorage.getItem("yahmilhas_cotacoes") || "[]");
      const cons = JSON.parse(localStorage.getItem("yahmilhas_contatos") || "[]");
      setCotacoes(Array.isArray(cots) ? cots : []);
      setContatos(Array.isArray(cons) ? cons : []);
    } catch {
      // ignore
    }
  }, []);

  const cias = useMemo(() => {
    const set = new Set(cotacoes.map((c) => c.cia).filter(Boolean));
    return Array.from(set).sort();
  }, [cotacoes]);

  const cotacoesFiltradas = useMemo(() => {
    return cotacoes.filter((c) => {
      const q = busca.toLowerCase();
      const matchBusca =
        !q ||
        c.nome.toLowerCase().includes(q) ||
        c.whats.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.cia.toLowerCase().includes(q);
      const matchCia = !filtroCia || c.cia === filtroCia;
      return matchBusca && matchCia;
    });
  }, [cotacoes, busca, filtroCia]);

  const contatosFiltrados = useMemo(() => {
    const q = busca.toLowerCase();
    return contatos.filter(
      (c) =>
        !q ||
        c.nome.toLowerCase().includes(q) ||
        c.whats.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q)
    );
  }, [contatos, busca]);

  return (
    <main className="min-h-screen bg-yah-900 text-white py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold">Painel — Yah Milhas</h1>
        <p className="text-white/70 mt-1">Histórico local de cotações e contatos capturados.</p>

        {/* Filtros */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, WhatsApp, e-mail, cia..."
            className="rounded-lg bg-white/10 border border-white/20 px-3 py-2 outline-none focus:border-teal-400"
          />
          <select
            value={filtroCia}
            onChange={(e) => setFiltroCia(e.target.value)}
            className="rounded-lg bg-white/10 border border-white/20 px-3 py-2 outline-none focus:border-teal-400"
          >
            <option value="">Todas as cias/bancos</option>
            {cias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button
            className="ml-auto rounded-lg bg-teal-500 text-black font-semibold px-4 py-2 hover:bg-teal-400"
            onClick={() => exportCSV(`cotacoes_${new Date().toISOString().slice(0,10)}.csv`, cotacoesFiltradas)}
          >
            Exportar cotações (CSV)
          </button>
          <button
            className="rounded-lg bg-white text-yah-900 font-semibold px-4 py-2 hover:bg-white/90"
            onClick={() => exportCSV(`contatos_${new Date().toISOString().slice(0,10)}.csv`, contatosFiltrados)}
          >
            Exportar contatos (CSV)
          </button>
        </div>

        {/* Cotações */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3">Cotações</h2>
          <div className="overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Data</th>
                  <th className="text-left p-3">Companhia/Banco</th>
                  <th className="text-right p-3">Pontos</th>
                  <th className="text-right p-3">Valor (R$)</th>
                  <th className="text-left p-3">Nome</th>
                  <th className="text-left p-3">Whats</th>
                  <th className="text-left p-3">E-mail</th>
                </tr>
              </thead>
              <tbody>
                {cotacoesFiltradas.map((c, i) => (
                  <tr key={i} className="odd:bg-white/0 even:bg-white/5">
                    <td className="p-3">{new Date(c.criadoEm).toLocaleString("pt-BR")}</td>
                    <td className="p-3">{c.cia}</td>
                    <td className="p-3 text-right">{c.pontos.toLocaleString("pt-BR")}</td>
                    <td className="p-3 text-right">
                      {c.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="p-3">{c.nome}</td>
                    <td className="p-3">{c.whats}</td>
                    <td className="p-3">{c.email}</td>
                  </tr>
                ))}
                {!cotacoesFiltradas.length && (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-white/60">Sem cotações.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contatos */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">Contatos</h2>
          <div className="overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-3">Data</th>
                  <th className="text-left p-3">Nome</th>
                  <th className="text-left p-3">Whats</th>
                  <th className="text-left p-3">E-mail</th>
                  <th className="text-left p-3">Origem</th>
                </tr>
              </thead>
              <tbody>
                {contatosFiltrados.map((c, i) => (
                  <tr key={i} className="odd:bg-white/0 even:bg-white/5">
                    <td className="p-3">{new Date(c.criadoEm).toLocaleString("pt-BR")}</td>
                    <td className="p-3">{c.nome}</td>
                    <td className="p-3">{c.whats}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.origem || "form"}</td>
                  </tr>
                ))}
                {!contatosFiltrados.length && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-white/60">Sem contatos.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
