import { STATS_HERO } from '../../data/stats'
import { waLink } from '../../data/contato'
import { Icone } from '../icons'

const CATEGORIAS = ['Cat. A', 'Cat. B', 'Cat. AB', 'Cat. D']

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/img2.webp" alt="" />
      </div>
      <div className="hero-ov"></div>
      <div className="c" style={{ width: '100%' }}>
        <div className="hero-in">
          <div className="hero-l">
            <div className="hero-chip">
              <span className="chip">Credenciada DETRAN-MG desde 2002</span>
            </div>
            <h1 className="t-disp">Sua CNH pode estar muito mais perto do que você imagina.</h1>
            <p className="hero-sub">
              Pare de adiar sua independência.
              <br />
              Aprenda a dirigir com quem entende que confiança vem antes da aprovação.
            </p>
            <div className="hero-cats">
              {CATEGORIAS.map((cat) => (
                <span key={cat}>{cat}</span>
              ))}
            </div>
            <div className="hero-btns">
              <a
                href={waLink('Oi Caluar, quero minha CNH.')}
                className="btn btn-am btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome="whatsapp" />
                Quero minha CNH
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hc-top">
              {STATS_HERO.map((stat) => (
                <div key={stat.rotulo} className={`hc-stat${stat.destaque ? ' ac' : ''}`}>
                  <div className="hc-num">
                    {stat.valor}
                    <small>{stat.sufixo}</small>
                  </div>
                  <div className="hc-lbl">{stat.rotulo}</div>
                </div>
              ))}
            </div>
            <div className="hc-imgs">
              <div className="hc-img">
                <img src="/images/img3.webp" alt="Equipe Caluar" />
                <span>Equipe Caluar</span>
              </div>
              <div className="hc-img">
                <img src="/images/img13.webp" alt="Turma aprovada" />
                <span>Turma aprovada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
