export default function Footer() {
  return (
    <footer className="bg-yah-900">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div className="space-y-4 lg:col-span-2">
            <img src="/logo-yah-header.png" alt="Yah Milhas" className="h-9 w-auto brightness-0 invert" />
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Banco de milhas com foco em liquidez, transparência e atendimento ágil para quem quer rentabilizar pontos com segurança.
            </p>
            <p className="text-xs text-white/20">CNPJ: 00.000.000/0001-00</p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Navegação</p>
            <ul className="space-y-2 text-sm text-white/40">
              {[
                { href: "#servicos",      label: "Serviços" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#simular",       label: "Simular cotação" },
                { href: "#contato",       label: "Contato" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Contato</p>
            <ul className="space-y-2 text-sm text-white/40">
              <li>
                <a href="https://wa.me/5551995761431" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Formulário</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10" />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/20 sm:flex-row">
          <p>© {new Date().getFullYear()} Yah Milhas — todos os direitos reservados.</p>
          <p>Porto Alegre, RS</p>
        </div>
      </div>
    </footer>
  );
}
