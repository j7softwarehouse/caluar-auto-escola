export default function About() {
  return (
    <section id="sobre" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Imagens (aparece primeiro mobile) */}
          <div className="order-2 md:order-1 relative h-96 md:h-96">
            {/* Main image - top left */}
            <img
              src="/images/img1.JPG"
              alt="Equipe Caluar"
              className="absolute top-0 left-0 w-[74%] h-64 object-cover rounded-xl shadow-md"
            />

            {/* Secondary image - bottom right with white border */}
            <img
              src="/images/img3.jpeg"
              alt="Turma Caluar"
              className="absolute bottom-0 right-0 w-[54%] h-40 object-cover rounded-xl shadow-lg border-4 border-white"
            />
          </div>

          {/* Texto (aparece depois mobile) */}
          <div className="order-1 md:order-2">
            <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-4">
              Nossa Historia
            </div>

            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-8 leading-tight">
              Uma escola que cuida de voce<br />do primeiro dia ate a CNH
            </h2>

            <p className="text-base font-inter font-300 text-tx-muted mb-6 leading-relaxed">
              Ha mais de duas decadas, a Caluar trabalha com paixao na formacao de <span className="font-600 text-tx">condutores responsaveis e confiantes</span>. Cada aluno e unico, e nos respeitamos isso.
            </p>

            <p className="text-base font-inter font-300 text-tx-muted mb-8 leading-relaxed">
              <span className="font-600 text-tx">Credenciada pelo DETRAN-MG</span>, possuimos toda a estrutura necessaria e instrutores que realmente se importam com sua aprovacao. Aqui voce nao e numero.
            </p>

            {/* Pills */}
            <div className="flex gap-3 flex-wrap">
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-2xl font-manrope font-800 text-primary leading-none">23+</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Anos de exp</div>
              </div>
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-2xl font-manrope font-800 text-accent leading-none">5k+</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Aprovados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
