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
              className="absolute top-0 left-0 w-[74%] h-64 object-cover object-top rounded-xl shadow-md"
            />

            {/* Secondary image - bottom right with white border */}
            <img
              src="/images/img3.jpeg"
              alt="Turma Caluar"
              className="absolute bottom-0 right-0 w-[54%] h-40 object-cover object-top rounded-xl shadow-lg border-4 border-white"
            />
          </div>

          {/* Texto (aparece depois mobile) */}
          <div className="order-1 md:order-2">
            <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-4">
              Nossa Historia
            </div>

            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-8 leading-tight">
              Há 24 anos transformando sonhos em liberdade
            </h2>

            <p className="text-base font-inter font-600 text-tx-muted mb-6 leading-relaxed">
              Quem aprende com a Caluar sente a diferença desde o primeiro atendimento.
            </p>

            <p className="text-sm font-inter font-300 text-tx-muted mb-6 leading-relaxed">
              A Caluar nasceu em 2002, em Itabirito, com um propósito simples: ajudar pessoas comuns a conquistarem independência, novas oportunidades, superar medos e receios, tudo com acompanhamento de verdade.
            </p>

            <p className="text-sm font-inter font-300 text-tx-muted mb-6 leading-relaxed">
              Ao longo de mais de 24 anos, a Caluar passou a fazer parte da história de milhares de pessoas em Itabirito, ajudando gerações inteiras a conquistarem mais liberdade, autonomia e oportunidades através de credibilidade e sem enrolação.
            </p>

            <p className="text-sm font-inter font-300 text-tx-muted mb-6 leading-relaxed">
              <span className="font-600 text-tx">Credenciada pelo DETRAN-MG</span> e reconhecida pelo alto índice de aprovação, a Caluar reúne:
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              <li className="text-sm font-inter font-300 text-tx-muted flex gap-3 items-start">
                <span className="text-accent flex-shrink-0 mt-1">•</span>
                <span>Instrutores qualificados e pacientes</span>
              </li>
              <li className="text-sm font-inter font-300 text-tx-muted flex gap-3 items-start">
                <span className="text-accent flex-shrink-0 mt-1">•</span>
                <span>Frota moderna e revisada</span>
              </li>
              <li className="text-sm font-inter font-300 text-tx-muted flex gap-3 items-start">
                <span className="text-accent flex-shrink-0 mt-1">•</span>
                <span>Salas informatizadas</span>
              </li>
              <li className="text-sm font-inter font-300 text-tx-muted flex gap-3 items-start">
                <span className="text-accent flex-shrink-0 mt-1">•</span>
                <span>Motopista própria para treinamento</span>
              </li>
              <li className="text-sm font-inter font-300 text-tx-muted flex gap-3 items-start">
                <span className="text-accent flex-shrink-0 mt-1">•</span>
                <span>Atendimento próximo e humanizado</span>
              </li>
            </ul>

            <p className="text-sm font-inter font-300 text-tx-muted mb-8 leading-relaxed italic">
              Tudo para que você chegue mais preparado, mais tranquilo e mais confiante para conquistar sua CNH.
            </p>

            {/* Pills */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-lg font-manrope font-800 text-primary leading-none">2002</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Fundação</div>
              </div>
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-lg font-manrope font-800 text-primary leading-none">Pista própria</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Motopista</div>
              </div>
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-lg font-manrope font-800 text-primary leading-none">A, B, AB, D</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Categorias</div>
              </div>
              <div className="bg-white border border-border rounded-lg px-4 py-3">
                <div className="text-lg font-manrope font-800 text-primary leading-none">CNH Brasil</div>
                <div className="text-xs text-tx-muted uppercase tracking-wider font-300 mt-1">Programa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
