import { useEffect, useRef, useState } from 'react'
import { Icone } from '../icons'
import { DEPOIMENTOS } from '../../data/depoimentos'
import { NOTA_GOOGLE, TOTAL_AVALIACOES } from '../../data/stats'
import { useCarousel } from '../../hooks/useCarousel'

/** Itens visiveis por viewport, igual a referencia (linha 824). */
const itensPorView = (largura: number) => (largura <= 960 ? 1 : 3)

/**
 * Secao .sec.avs (referencia, linhas 579-622).
 * O passo de deslocamento do track e medido do DOM real (largura do
 * primeiro .rev + 17px do gap), igual ao vanilla JS original (linha 837).
 */
export default function Avaliacoes() {
  const { indice, maxIndice, irPara, anterior, proximo } = useCarousel(
    DEPOIMENTOS.length,
    itensPorView
  )

  const trackRef = useRef<HTMLDivElement>(null)
  const [passo, setPasso] = useState(0)

  useEffect(() => {
    const medir = () => {
      const card = trackRef.current?.querySelector<HTMLElement>('.rev')
      if (card) setPasso(card.offsetWidth + 17)
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  return (
    <section className="sec avs" id="avaliacoes">
      <div className="c">
        <div className="avs-top">
          <div className="avs-score">
            <div className="gscore">{NOTA_GOOGLE}</div>
            <div className="ginfo">
              <div className="gstars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icone nome="estrela" key={i} />
                ))}
              </div>
              <div className="gcnt">+{TOTAL_AVALIACOES} avaliações no Google</div>
            </div>
          </div>
          <div className="avs-head">
            <span className="chip">Mais do que alunos aprovados</span>
            <h2 className="t-head">O que nossos alunos dizem</h2>
            <p>
              Veja o que alunos reais falam sobre o atendimento, a experiência e a confiança de
              aprender com quem acompanha você de verdade.
            </p>
          </div>
        </div>

        <div className="car-wrap">
          <div
            className="car-track"
            ref={trackRef}
            style={{ transform: `translateX(-${indice * passo}px)` }}
          >
            {DEPOIMENTOS.map((dep) => (
              <div className="rev" key={dep.nome}>
                <div className="rev-top">
                  <div className="rav" style={{ background: dep.corAvatar }}>
                    {dep.iniciais}
                  </div>
                  <div>
                    <div className="rname">{dep.nome}</div>
                    <div className="rdate">{dep.papel}</div>
                  </div>
                </div>
                <div className="rstars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icone nome="estrela" key={i} />
                  ))}
                </div>
                <p className="rtext">{dep.texto}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="car-ctrl">
          <button className="cbtn" onClick={anterior} aria-label="Avaliação anterior">
            <Icone nome="seta-esq" />
          </button>
          <button className="cbtn" onClick={proximo} aria-label="Próxima avaliação">
            <Icone nome="seta-dir" />
          </button>
        </div>

        <div className="cdots">
          {Array.from({ length: maxIndice + 1 }).map((_, i) => (
            <div
              className={`cdot${i === indice ? ' on' : ''}`}
              key={i}
              onClick={() => irPara(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
