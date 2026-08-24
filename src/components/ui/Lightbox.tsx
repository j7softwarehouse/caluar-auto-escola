import { useEffect } from 'react'
import { Icone } from '../icons'
import type { Foto } from '../../data/types'

interface LightboxProps {
  fotos: Foto[]
  indice: number | null
  aoFechar: () => void
  aoTrocar: (n: number) => void
}

/**
 * Lightbox global, reescrito a partir da referencia (docs/caluar_hybrid.html,
 * linha 634 para o markup e linhas 894-930 para o comportamento original em
 * vanilla JS: lbOpen/lbClose/lbShow). Aqui o "aberto" e controlado pelo
 * indice recebido de Galeria (null = fechado).
 *
 * O efeito trava o scroll da pagina (`body.style.overflow = 'hidden'`)
 * enquanto o lightbox esta aberto e SEMPRE restaura no cleanup - inclusive
 * se o componente for desmontado com o lightbox aberto - senao a pagina
 * fica travada permanentemente. O listener de teclado (Esc/setas) so fica
 * ativo enquanto `indice !== null`.
 */
export default function Lightbox({ fotos, indice, aoFechar, aoTrocar }: LightboxProps) {
  useEffect(() => {
    if (indice === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') aoFechar()
      if (e.key === 'ArrowLeft') aoTrocar((indice - 1 + fotos.length) % fotos.length)
      if (e.key === 'ArrowRight') aoTrocar((indice + 1) % fotos.length)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [indice, fotos.length, aoFechar, aoTrocar])

  if (indice === null) return null

  return (
    <div className="lb on">
      <div className="lb-bg" onClick={aoFechar} />
      <div className="lb-inner">
        <button className="lb-close" onClick={aoFechar} aria-label="Fechar">
          <Icone nome="fechar" />
        </button>
        <button
          className="lb-nav lb-prev"
          onClick={() => aoTrocar((indice - 1 + fotos.length) % fotos.length)}
          aria-label="Foto anterior"
        >
          <Icone nome="seta-esq" />
        </button>
        <div className="lb-slides">
          {fotos.map((foto, i) => (
            <div className={`lb-slide${i === indice ? ' on' : ''}`} key={foto.src}>
              <img src={foto.src} alt="Aluno aprovado na Caluar Auto-Escola" />
            </div>
          ))}
        </div>
        <button
          className="lb-nav lb-next"
          onClick={() => aoTrocar((indice + 1) % fotos.length)}
          aria-label="Próxima foto"
        >
          <Icone nome="seta-dir" />
        </button>
        <div className="lb-info">
          <span className="lb-counter">
            {indice + 1} / {fotos.length}
          </span>
        </div>
      </div>
    </div>
  )
}
