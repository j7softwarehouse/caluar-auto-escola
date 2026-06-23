const services = [
  {
    num: 'A',
    title: 'Categoria A — Moto',
    color: '#0F1F45',
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
    color: '#1e40af',
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
    color: '#F5A800',
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
    title: 'Categoria D — Ônibus e Transporte de Passageiros',
    color: '#059669',
    list: [
      'Categoria profissional para transporte de passageiros',
      'Ideal para ônibus, vans e oportunidades profissionais',
      'Possibilidade de recolocação e crescimento profissional',
      'Processo acompanhado do início ao fim',
      'Treinamento em veículo moderno'
    ]
  },
  {
    num: 'R',
    title: 'Renovação e Reciclagem de CNH',
    color: '#7c3aed',
    list: [
      'Renovação da CNH comum ou suspensa',
      'Curso obrigatório para condutores infratores',
      'Modalidade presencial e EAD',
      'Processo simplificado e orientado',
      'Certificado reconhecido pelo DETRAN'
    ]
  },
  {
    num: 'E',
    title: 'Cursos Especializados',
    color: '#dc2626',
    list: [
      'MOPP — Transporte de Produtos Perigosos',
      'Transporte Coletivo de Passageiros',
      'Transporte Escolar',
      'Veículos de Emergência',
      'Carga Indivisível'
    ]
  },
]

import Button from '../ui/Button'

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Todas as Categorias
          </h2>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-manrope font-700 text-primary mb-4">
              A solução está aqui
            </h3>
            <p className="text-lg font-inter font-400 text-tx-muted mb-6">
              Descubra como a gente transforma tudo isso em uma experiência simples e acompanhamento de verdade.
            </p>
            <p className="text-base font-inter font-300 text-tx-muted">
              Tudo o que você precisa para conquistar sua habilitação em um só lugar. Primeira habilitação, curso teórico, adição e mudança de categoria, renovação, reciclagem e cursos especializados para motoristas profissionais.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-light border border-border rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-2 hover:border-accent/20 group flex flex-col"
            >
              {/* Top orange line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Category title */}
                <div className="mb-8 pb-6 border-b-2" style={{ borderColor: srv.color }}>
                  <h3 className="text-lg md:text-xl font-manrope font-800 leading-snug" style={{ color: srv.color }}>
                    {srv.title}
                  </h3>
                </div>

                {/* List */}
                <ul className="space-y-3 flex-1">
                  {srv.list.map((item, i) => (
                    <li key={i} className="text-sm md:text-base text-tx-muted font-inter font-300 flex gap-3 items-start leading-relaxed">
                      <span className="text-accent flex-shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button
            href="#contato"
            variant="accent"
            size="lg"
          >
            Descobrir a melhor categoria
          </Button>
        </div>
      </div>
    </section>
  )
}
