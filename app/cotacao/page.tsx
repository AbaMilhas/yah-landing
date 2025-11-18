import Header from "../../components/Header";
import Simular from "../../components/Simular";

export default function CotacaoPage() {
  return (
    <main className="bg-yah-900 text-white min-h-screen">
      <Header />
      {/* hero curtinho para a página dedicada */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Simular <span className="text-teal-500">cotação</span>
        </h1>
        <p className="mt-2 text-ink-muted">
          Milhas negociadas com inteligência — simples, rápido e confiável.
        </p>
      </section>

      <Simular />
    </main>
  );
}
