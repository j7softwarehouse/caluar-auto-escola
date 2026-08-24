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
  const { indice, anterior, proximo } = useCarousel(GALERIA.length, itensPorView)

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
            <span className="chip">Conquistas reais. Pessoas reais.</span>
            <h2 className="t-head">
              Veja alguns dos alunos que conquistaram{' '}
              <em style={{ color: 'var(--am)' }}>a CNH</em> com a Caluar.
            </h2>
            <p className="sub">
              Cada aprovação representa uma nova fase, mais liberdade e um sonho realizado.
            </p>
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
                  <img src={foto.src} alt="Aluno aprovado na Caluar Auto-Escola" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
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
