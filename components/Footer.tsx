export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-muted flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Yah Milhas — todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <a href="#contato" className="hover:text-ink">Contato</a>
          <a href="#emitir" className="hover:text-ink">Emitir</a>
        </div>
      </div>
    </footer>
  );
}
