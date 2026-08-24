import { DORES } from '../../data/dores'
import { waLink } from '../../data/contato'
import { Icone } from '../icons'

/** Secao .sec.dor (referencia, linhas 448-493). */
export default function Dores() {
  return (
    <section className="sec dor">
      <div className="c">
        <div className="dor-head">
          <span className="chip">Entendemos você</span>
          <h2 className="t-head">
            Muita gente adia a própria liberdade porque nunca dá o primeiro passo.
          </h2>
          <p>
            É medo, insegurança, falta de tempo, dinheiro ou achar que o processo vai ser
            complicado demais. A Caluar nasceu justamente para ajudar pessoas que se sentem
            assim.
          </p>
        </div>

        <div className="dor-grid">
          {DORES.map((dor) => (
            <div className="dor-card" key={dor.titulo}>
              <div className="dor-ic">
                <Icone nome={dor.icone} />
              </div>
              <h3>{dor.titulo}</h3>
              {dor.texto.split('\n\n').map((paragrafo, idx) => (
                <p key={idx}>{paragrafo}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="dor-cta" style={{ marginTop: '2rem' }}>
          <span className="chip" style={{ marginBottom: '.75rem' }}>
            A solução está aqui
          </span>
          <p>
            Descubra como a gente transforma tudo isso em uma experiência simples e acompanhada de
            verdade.
          </p>
          <a
            href={waLink('Quero saber mais sobre os cursos da Caluar.')}
            className="btn btn-am"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone nome="whatsapp" />
            Falar com a Caluar
          </a>
        </div>
      </div>
    </section>
  )
}
