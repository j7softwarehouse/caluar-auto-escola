const services = [
  {
    num: 'A',
    title: 'Categoria A — Moto',
    list: [
      'Pista própria de treinamento para motociclistas',
      'Instrutores especializados e acompanhamento próximo',
      'Treinamento pré-exame para mais confiança',
      'Aulas flexíveis pela manhã, tarde e noite',
      'Processo mais seguro para quem nunca pilotou'
    ]
  },
  {
    num: 'B',
    title: 'Categoria B — Carro',
    list: [
      'Frota moderna com duplo comando',
      'Instrutores preparados para ensinar no seu ritmo',
      'Aulas flexíveis pela manhã, tarde e noite',
      'Mais segurança e tranquilidade durante o aprendizado',
      'Atendimento próximo do início ao fim do processo'
    ]
  },
  {
    num: 'AB',
    title: 'Categoria AB — Moto e Carro',
    list: [
      'Tire moto e carro no mesmo processo',
      'Mais praticidade para sua rotina',
      'Melhor custo-benefício para conquistar as duas categorias',
      'Processo unificado e acompanhado',
      'Mais liberdade e mais oportunidades para você'
    ]
  },
  {
    num: 'D',
    title: 'Categoria D — Onibus e Transporte de Passageiros',
    list: [
      'Categoria profissional para transporte de passageiros',
      'Ideal para ônibus, vans e oportunidades profissionais',
      'Possibilidade de recolocação e crescimento profissional',
      'Processo acompanhado do início ao fim',
      'Treinamento em veículo moderno'
    ]
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Todas as Categorias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-light border border-border rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 group"
            >
              {/* Large category number in background */}
              <div className="absolute top-0 left-0 right-0 text-7xl font-manrope font-800 text-accent/12 leading-none pointer-events-none translate-y-1">
                {srv.num}
              </div>

              {/* Top orange line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base font-manrope font-700 text-primary mb-4">
                  {srv.title}
                </h3>
                <ul className="space-y-2">
                  {srv.list.map((item, i) => (
                    <li key={i} className="text-sm text-tx-muted font-inter font-300 flex gap-3">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
