import type { Categoria } from './types'

export const CATEGORIAS: Categoria[] = [
  {
    sigla: 'A',
    titulo: 'Categoria A — Moto',
    itens: [
      'Pista própria de treinamento para motociclistas',
      'Instrutores especializados e acompanhamento próximo',
      'Treinamento pré-exame para mais confiança',
      'Aulas flexíveis pela manhã, tarde e noite',
      'Processo mais seguro para quem nunca pilotou',
    ],
  },
  {
    sigla: 'B',
    titulo: 'Categoria B — Carro',
    itens: [
      'Frota moderna com duplo comando',
      'Instrutores preparados para ensinar no seu ritmo',
      'Aulas flexíveis pela manhã, tarde e noite',
      'Mais segurança e tranquilidade durante o aprendizado',
      'Atendimento próximo do início ao fim do processo',
    ],
  },
  {
    sigla: 'AB',
    titulo: 'Categoria AB — Moto e Carro',
    itens: [
      'Tire moto e carro no mesmo processo',
      'Mais praticidade para sua rotina',
      'Melhor custo-benefício para conquistar as duas categorias',
      'Processo unificado e acompanhado',
      'Mais liberdade e mais oportunidades para você',
    ],
  },
  {
    sigla: 'D',
    titulo: 'Categoria D — Ônibus e Transporte de Passageiros',
    itens: [
      'Categoria profissional para transporte de passageiros',
      'Ideal para ônibus, vans e oportunidades profissionais',
      'Permite dirigir caminhões, tratores e máquinas agrícolas',
      'Possibilidade de recolocação e crescimento profissional',
      'Processo acompanhado do início ao fim',
      'Treinamento em veículo moderno',
    ],
  },
  {
    sigla: 'R',
    titulo: 'Renovação e Reciclagem de CNH',
    itens: [
      'Renovação da CNH comum ou suspensa',
      'Curso obrigatório para condutores infratores',
      'Modalidade presencial e EAD',
      'Processo simplificado e orientado',
      'Certificado reconhecido pelo DETRAN',
    ],
  },
  {
    sigla: 'S',
    titulo: 'Cursos Especializados',
    itens: [
      'MOPP: Transporte de Produtos Perigosos',
      'TCP: Transporte Coletivo de Passageiros',
      'Transporte Escolar: Modalidade especializada',
      'Emergência: Veículos de Emergência',
      'Carga Indivisível: Especialização profissional',
    ],
  },
]
