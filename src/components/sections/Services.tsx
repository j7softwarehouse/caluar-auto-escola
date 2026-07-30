import { useState } from 'react'
import { CATEGORIAS } from '../../data/categorias'

const corPorSigla: Record<string, string> = {
  A: '#0F1F45',
  B: '#1e40af',
  AB: '#F5A800',
  D: '#059669',
  R: '#7c3aed',
  S: '#dc2626',
}

const toSrv = (sigla: string) => {
  const cat = CATEGORIAS.find((c) => c.sigla === sigla)!
  return { num: cat.sigla, title: cat.titulo, color: corPorSigla[cat.sigla], list: cat.itens }
}

const servicesData = {
  categorias: ['A', 'B', 'AB', 'D'].map(toSrv),
  renovacao: ['R'].map(toSrv),
  especializados: ['S'].map(toSrv),
}

const tabs = [
  { id: 'categorias', label: 'Categorias Principais' },
  { id: 'renovacao', label: 'Renovação e Reciclagem' },
  { id: 'especializados', label: 'Cursos Especializados' }
]

export default function Services() {
  const [activeTab, setActiveTab] = useState<'categorias' | 'renovacao' | 'especializados'>('categorias')

  const currentServices = servicesData[activeTab]

  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Todas as Categorias
          </h2>
          <div className="max-w-3xl mx-auto">
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-border pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-3 rounded-lg font-manrope font-600 text-sm md:text-base transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-white'
                  : 'bg-light border border-border text-tx hover:border-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className={`grid md:grid-cols-${activeTab === 'especializados' || activeTab === 'renovacao' ? '1' : '2'} lg:grid-cols-${activeTab === 'especializados' || activeTab === 'renovacao' ? '1' : '2'} gap-8 mb-12`}>
          {currentServices.map((srv, idx) => (
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

      </div>
    </section>
  )
}
