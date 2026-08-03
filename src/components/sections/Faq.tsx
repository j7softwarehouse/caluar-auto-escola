import { useState } from 'react'
import { FAQ } from '../../data/faq'
import { Icone } from '../icons'

/** Secao .sec.faq (referencia, linhas 656-688). Accordion exclusivo (referencia, linhas 811-818). */
export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section className="sec faq" id="faq">
      <div className="c">
        <div className="faq-grid">
          <div>
            <span className="chip">Tire suas dúvidas</span>
            <h2 className="t-head">Perguntas frequentes</h2>
            <p>Respondemos as dúvidas mais comuns para você chegar com mais segurança à sua primeira aula.</p>
            <div className="faq-img">
              <img src="/images/img14.jpeg" alt="Aluno da Caluar Auto-Escola" />
            </div>
          </div>

          <div className="faq-r">
            {FAQ.map((item, idx) => (
              <div className={`fi${aberto === idx ? ' on' : ''}`} key={item.pergunta}>
                <div className="fq" onClick={() => setAberto(aberto === idx ? null : idx)}>
                  <h3>{item.pergunta}</h3>
                  <button className="ftog" type="button">
                    <Icone nome="mais" />
                  </button>
                </div>
                <div className="fans">
                  <div className="fans-i">{item.resposta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
