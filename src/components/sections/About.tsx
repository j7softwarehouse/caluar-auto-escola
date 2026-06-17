export default function About() {
  return (
    <section id="sobre" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12">Sobre a Caluar</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-tx-muted mb-6">
              Desde 2002, a Caluar tem transformado vidas através da formação de condutores qualificados.
            </p>
            <p className="text-lg text-tx-muted">
              Credenciada pelo DETRAN-MG, oferecemos todas as categorias com estrutura moderna e instrutores especializados.
            </p>
          </div>
          <img src="/images/about.jpg" alt="Caluar" className="rounded-lg shadow-lg h-96 object-cover" />
        </div>
      </div>
    </section>
  )
}
