"use client";

import React, { useState } from "react";
import { useToast, Toast } from "./Toast";
import FadeIn from "./FadeIn";

function maskPhone(v: string) {
  return v
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
    .slice(0, 15);
}

export default function Contato() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast, show } = useToast();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nome || !whats || !email) {
      show("Preencha todos os campos obrigatórios.", "error");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome, whats, email, mensagem,
          origem: "contato",
          criadoEm: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        show("Mensagem enviada! Retornamos em breve.", "success");
        setNome(""); setWhats(""); setEmail(""); setMensagem("");
      } else {
        show("Erro ao enviar. Tente novamente.", "error");
      }
    } catch {
      show("Erro ao enviar. Tente novamente.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="bg-yah-900 py-24">
      <div className="section-divider" />
      <Toast toast={toast} />

      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Esquerda */}
          <FadeIn direction="up" className="space-y-5">
            <span className="tag">Contato</span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Fale com um{" "}
              <span className="gradient-text">especialista</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-sm">
              Compartilhe sua situação de milhas e receba um retorno rápido do nosso time com os próximos passos.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { label: "Resposta", value: "Em até 2h em horário comercial" },
                { label: "Atendimento", value: "Segunda a sexta, 9h–18h" },
                { label: "Canal", value: "WhatsApp + formulário" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-white/35">{label}:</span>
                  <span className="text-white/70">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Direita — formulário */}
          <FadeIn direction="left" delay={100} className="rounded-2xl surface p-6 shadow-card-lg sm:p-8">
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                    Nome <span className="text-teal-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="input-dark"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/50">
                    WhatsApp <span className="text-teal-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={whats}
                    onChange={(e) => setWhats(maskPhone(e.target.value))}
                    placeholder="(51) 99999-9999"
                    className="input-dark"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  E-mail <span className="text-teal-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="input-dark"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  Descreva sua demanda
                </label>
                <textarea
                  rows={4}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Ex: Tenho 150k milhas Latam e quero vender..."
                  className="input-dark resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:opacity-40"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>

              <p className="text-center text-xs text-white/25">
                Seus dados são tratados conforme a LGPD.
              </p>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
