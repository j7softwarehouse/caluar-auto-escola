import type { Foto } from './types'

/**
 * 9 fotos, sem legenda por decisao do cliente: as fotos serao substituiveis
 * pelo painel admin, entao um texto fixo por imagem ficaria desatualizado.
 */
export const GALERIA: Foto[] = [
  { src: '/images/IMG_0345.webp' },
  { src: '/images/IMG_0334.webp' },
  { src: '/images/IMG_0367.webp' },
  { src: '/images/IMG_1558.webp' },
  { src: '/images/IMG_0373.webp' },
  { src: '/images/IMG_0380.webp' },
  { src: '/images/IMG_1550.webp' },
  { src: '/images/IMG_2314.webp' },
  { src: '/images/IMG_9122.webp' },
]
