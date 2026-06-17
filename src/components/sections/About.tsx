export default function About() {
  return (
    <section id="sobre" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem (aparece primeiro mobile) */}
          <div className="order-2 md:order-1 relative">
            <img
              src="/images/img1.JPG"
              alt="Caluar"
              className="rounded-3xl shadow-lg aspect-video object-cover w-full"
            />
            <div
              className="absolute -bottom-4 -right-4 bg-accent text-dark px-4 py-3 rounded-2xl font-manrope font-700 shadow-lg"
            >
              Desde 2002
            </div>
            <div
              className="absolute -top-6 -left-6 w-80 h-80 border-2 border-primary/15 rounded-3xl pointer-events-none"
            />
          </div>

          {/* Texto (aparece depois mobile) */}
          <div className="order-1 md:order-2">
            <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
              Nossa Historia
            </div>

            <h2 className="text-5xl font-manrope font-800 text-tx mb-6 leading-tight tracking-tight">
              Uma escola que cuida de voce<br />do primeiro dia ate a CNH
            </h2>

            <p className="text-lg font-inter font-400 text-tx-muted mb-6 leading-relaxed">
              Ha mais de duas decadas, a Caluar trabalha com paixao na formacao de <span className="font-600 text-tx">condutores responsaveis e confiantes</span>. Cada aluno e unico, e nos respeitamos isso.
            </p>

            <p className="text-lg font-inter font-400 text-tx-muted mb-6 leading-relaxed">
              <span className="font-600 text-tx">Credenciada pelo DETRAN-MG</span>, possuimos toda a estrutura necessaria e instrutores que realmente se importam com sua aprovacao. Aqui voce nao e numero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
