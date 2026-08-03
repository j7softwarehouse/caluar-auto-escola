/**
 * Faixa animada .ticker. Lista baseada no HighlightsCarousel validado em
 * producao (commit 218e282) - nao a da referencia caluar_hybrid.html.
 * `destaque` = item em amarelo/negrito; itens sem `destaque` usam `texto` (branco).
 * 10 itens (par): alternancia perfeita, sem repeticao interna nem na emenda
 * do loop (ultimo item difere do primeiro da copia seguinte). Os 2 itens
 * finais sao fatos reais ja usados em outras secoes (Dores, Hero/StatsBar),
 * escolhidos para manter espacamento/ritmo do ticker sem itens genericos.
 */
export const TICKER: { destaque?: string; texto?: string }[] = [
  { texto: 'Reciclagem' },
  { destaque: 'Alto Índice de Aprovação' },
  { texto: 'Cursos Especializados' },
  { destaque: 'Motopista Própria' },
  { texto: 'Habilitação A' },
  { destaque: 'Habilitação B' },
  { texto: 'Habilitação AB' },
  { destaque: 'Habilitação D' },
  { texto: 'Transporte ao exame' },
  { destaque: 'Credenciada DETRAN-MG' },
]
