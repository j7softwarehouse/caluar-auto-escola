import type { Stat } from './types'
import { anosDeTradicao } from './contato'

/** Barra .stats-bar, abaixo do ticker */
export const STATS: Stat[] = [
  { valor: String(anosDeTradicao()), sufixo: '+', rotulo: 'Anos de tradição' },
  { valor: '7mil', sufixo: '+', rotulo: 'Condutores formados' },
  { valor: '4.6', sufixo: '★', rotulo: 'Nota Google' },
  { valor: '11.000', sufixo: '+', rotulo: 'Clientes' },
]

/**
 * Card do hero (.hc-stat). Mesmos numeros, rotulos curtos.
 * `destaque` corresponde a classe .ac da referencia (fundo ambar).
 */
export const STATS_HERO: (Stat & { destaque: boolean })[] = [
  { valor: String(anosDeTradicao()), sufixo: '+', rotulo: 'Anos de tradição', destaque: false },
  { valor: '4.6', sufixo: '★', rotulo: 'Nota Google', destaque: true },
  { valor: '7mil', sufixo: '+', rotulo: 'Aprovados', destaque: false },
  { valor: '11.000', sufixo: '+', rotulo: 'Clientes', destaque: true },
]

export const NOTA_GOOGLE = '4.6'
export const TOTAL_AVALIACOES = 131
