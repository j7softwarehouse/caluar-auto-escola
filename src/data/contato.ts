export const FUNDACAO = 2002

/** 24 em 2026. Derivado para nao envelhecer junto com o site. */
export const anosDeTradicao = (): number => new Date().getFullYear() - FUNDACAO

export const CONTATO = {
  whatsapp: '553135633619',
  telefone: '(31) 3563-3619',
  telefoneHref: 'tel:3135633619',
  email: 'cfccaluar@hotmail.com',
  endereco: 'Rua Domingos Michel, 120',
  bairroCidade: 'Praia, Itabirito/MG',
  horarioSemana: '7h às 20h',
  horarioSabado: '9h às 12h',
  instagram: 'https://www.instagram.com/autoescolacaluar/',
  facebook: 'https://www.facebook.com/autoescolacaluarcfc/',
} as const

export const waLink = (texto: string): string =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`
