import { useCallback, useEffect, useState } from 'react'

/**
 * Carousel generico por "itens visiveis por viewport" (spv).
 * Reescrito na Task 13 a partir da logica original em vanilla JS da
 * referencia (docs/caluar_hybrid.html, linhas 824-845): recalcula spv e
 * o indice maximo a cada resize, e prende o indice atual ao novo maximo
 * (senao o track fica deslocado para fora da tela ao encolher a janela).
 */
export function useCarousel(total: number, porView: (largura: number) => number) {
  const [indice, setIndice] = useState(0)
  const [spv, setSpv] = useState(() => porView(typeof window === 'undefined' ? 1440 : window.innerWidth))

  useEffect(() => {
    const onResize = () => setSpv(porView(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [porView])

  const maxIndice = Math.max(0, total - spv)

  useEffect(() => {
    // Ajusta o indice quando maxIndice muda (ex: resize encolhe spv) - padrao
    // documentado pelo proprio React para estado derivado de uma dependencia
    // (https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIndice((atual) => Math.min(atual, maxIndice))
  }, [maxIndice])

  const irPara = useCallback(
    (n: number) => setIndice(Math.max(0, Math.min(n, maxIndice))),
    [maxIndice]
  )

  return {
    indice,
    maxIndice,
    irPara,
    anterior: () => irPara(indice - 1),
    proximo: () => irPara(indice + 1),
  }
}
