import type { Pill } from './types'
import { anosDeTradicao } from './contato'

/** Chip do topo, recortado de About.tsx */
export const SOBRE_CHIP = 'Nossa História'

/** O h2 tem uma parte em italico ambar (.sobre-txt h2 em). Dividido em dois
 *  para a Task 11 montar <h2>{INICIO} <em>{ENFASE}</em></h2> sem innerHTML.
 *  Numero de anos derivado de anosDeTradicao() (nao hardcoded) para nao envelhecer. */
export const SOBRE_TITULO_INICIO = `Há ${anosDeTradicao()} anos transformando sonhos`
export const SOBRE_TITULO_ENFASE = 'em liberdade'

export const SOBRE_PARAGRAFOS: string[] = [
  'Quem aprende com a Caluar sente a diferença desde o primeiro atendimento.',
  'A Caluar nasceu em 2002, em Itabirito, com um propósito simples: ajudar pessoas comuns a conquistarem independência, novas oportunidades, superar medos e receios, tudo com acompanhamento de verdade.',
  `Ao longo de mais de ${anosDeTradicao()} anos, a Caluar passou a fazer parte da história de milhares de pessoas em Itabirito, ajudando gerações inteiras a conquistarem mais liberdade, autonomia e oportunidades através de credibilidade e sem enrolação.`,
  'Credenciada pelo DETRAN-MG e reconhecida pelo alto índice de aprovação, a Caluar reúne:',
  'Tudo para que você chegue mais preparado, mais tranquilo e mais confiante para conquistar sua CNH.',
]

export const SOBRE_ITENS: string[] = [
  'Instrutores qualificados e pacientes',
  'Frota moderna e revisada',
  'Salas informatizadas',
  'Motopista própria para treinamento',
  'Atendimento próximo e humanizado',
  'Instrutores Pacientes',
  'Aprovação Garantida',
  'Parcelamento Fácil',
  'Atendimento Humano',
]

export const SOBRE_PILLS: Pill[] = [
  { valor: '2002', rotulo: 'Fundação' },
  { valor: 'Pista própria', rotulo: 'Motopista' },
  { valor: '100%', rotulo: 'Detran-MG' },
]
