import { useEffect, useRef, useState } from 'react'
import { Icone } from '../icons'
import Lightbox from '../ui/Lightbox'
import { GALERIA } from '../../data/galeria'
import { useCarousel } from '../../hooks/useCarousel'

/** Itens visiveis por viewport, igual a referencia (linhas 866-869). */
const itensPorView = (largura: number) => (largura <= 768 ? 1 : largura <= 1100 ? 2 : 3)

/**
 * Secao .sec.gal (referencia, linhas 624-633) + lightbox global (linha 634,
 * comportamento 894-930). O passo do carousel e medido do DOM real (largura
 * do primeiro .gs-item + 16px do gap de 1rem), igual ao gsGo original (linha
 * 883). Clicar num item abre o lightbox naquele indice.
 */
export default function Galeria() {
  const { indice, maxIndice, irPara, anterior, proximo } = useCarousel(
    GALERIA.length,
    itensPorView
  )

  const trackRef = useRef<HTMLDivElement>(null)
  const [passo, setPasso] = useState(0)
  const [lightboxIndice, setLightboxIndice] = useState<number | null>(null)

  useEffect(() => {
    const medir = () => {
      const item = trackRef.current?.querySelector<HTMLElement>('.gs-item')
      if (item) setPasso(item.offsetWidth + 16)
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  return (
    <section className="sec gal" id="galeria">
      <div className="c">
        <div className="gal-hd">
          <div>
            <span className="chip">Momentos reais</span>
            <h2 className="t-head">
              Nossa galeria de <em style={{ color: 'var(--am)' }}>aprovados</em>
            </h2>
            <p className="sub">Cada foto é uma história de conquista. Clique para ampliar.</p>
          </div>
          <div className="gal-ctrl">
            <button className="gc-btn" onClick={anterior} aria-label="Fotos anteriores">
              <Icone nome="seta-esq" />
            </button>
            <button className="gc-btn" onClick={proximo} aria-label="Próximas fotos">
              <Icone nome="seta-dir" />
            </button>
          </div>
        </div>

        <div className="gs-wrap">
          <div
            className="gs-track"
            ref={trackRef}
            style={{ transform: `translateX(-${indice * passo}px)` }}
          >
            {GALERIA.map((foto, i) => (
              <div className="gs-item" key={foto.src} onClick={() => setLightboxIndice(i)}>
                <div className="gs-img">
                  <img src={foto.src} alt={foto.legenda} />
                </div>
                <div className="gs-cap">
                  <span className="gs-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="gs-lbl">{foto.legenda}</span>
                  <span className="gs-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gs-dots">
          {Array.from({ length: maxIndice + 1 }).map((_, i) => (
            <div
              className={`gs-dot${i === indice ? ' on' : ''}`}
              key={i}
              onClick={() => irPara(i)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        fotos={GALERIA}
        indice={lightboxIndice}
        aoFechar={() => setLightboxIndice(null)}
        aoTrocar={setLightboxIndice}
      />
    </section>
  )
}
