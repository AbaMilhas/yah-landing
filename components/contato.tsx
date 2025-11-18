"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA || "5551999999999";
const MAIL_TO = process.env.NEXT_PUBLIC_MAIL_TO || "contato@yahmilhas.com.br";
const USE_EMAIL_API = process.env.NEXT_PUBLIC_USE_EMAIL_API === "true";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const texto = encodeURIComponent(
      [
        `Olá, sou ${nome || "—"}.`,
        whats ? `Whats: ${whats}` : "",
        email ? `E-mail: ${email}` : "",
        "",
        mensagem || "Quero falar com um especialista da Yah.",
      ]
        .filter(Boolean)
        .join("\n")
    );

    const wa = `https://wa.me/${WA_NUMBER}?text=${texto}`;
    window.open(wa, "_blank");

    if (USE_EMAIL_API) {
      try {
        await fetch("/api/contato", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, whats, email, mensagem }),
        });
      } catch {}
    }

    setLoading(false);
  };

  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
      {/* Título */}
      <div className="mb-8 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-teal-500" />
        <span className="text-xs tracking-widest uppercase text-ink-muted">Contato</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Cartão WhatsApp */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">WhatsApp (resposta rápida)</h3>
          <p className="mt-2 text-sm text-white/70">
            Fale direto com um especialista. Envie sua cotação ou dúvida.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Quero falar com a Yah.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-teal-500 text-white font-semibold px-5 py-2.5 hover:bg-teal-400 transition"
          >
            Abrir WhatsApp
          </a>
          <p className="mt-3 text-xs text-white/50">
            Atendimento humano e ágil.
          </p>
        </div>

        {/* Cartão E-mail + Redes */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">E-mail & Redes</h3>
          <p className="mt-2 text-sm text-white/70">
            Envie detalhado sua necessidade ou acompanhe nossas novidades.
          </p>
          <a
            href={`mailto:${MAIL_TO}?subject=${encodeURIComponent("Contato via site — Yah Milhas")}`}
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-white font-semibold hover:bg-white/10 transition"
          >
            Enviar e-mail
          </a>

          {/* Redes sociais */}
          <div className="mt-6 flex gap-4 text-white/70">
            <a
              href="https://instagram.com/yahmilhas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://facebook.com/yahmilhas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://linkedin.com/company/yahmilhas"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>

          <p className="mt-3 text-xs text-white/50">
            Siga a Yah nas redes e acompanhe oportunidades exclusivas.
          </p>
        </div>

        {/* Formulário */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Falar com especialista</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm mb-1">Nome</label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-yah-900 outline-none focus:border-teal-500"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">WhatsApp</label>
              <input
                type="text"
                placeholder="(51) 99999-9999"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-yah-900 outline-none focus:border-teal-500"
                value={whats}
                onChange={(e) => setWhats(maskPhone(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">E-mail</label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-yah-900 outline-none focus:border-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Mensagem</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-yah-900 outline-none focus:border-teal-500"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Ex.: quero vender milhas / dúvidas sobre transferência / emissão"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex justify-center rounded-xl bg-teal-500 text-white font-semibold px-5 py-2.5 shadow-md hover:bg-teal-400 transition disabled:opacity-60"
            >
              {loading ? "Abrindo Whats..." : "Enviar"}
            </button>

            <p className="text-[11px] text-white/50">
              * Seus dados serão usados apenas para contato/proposta (LGPD).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
