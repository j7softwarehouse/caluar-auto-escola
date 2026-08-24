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
          <div className="faq-l">
            <span className="chip">Ainda ficou com alguma dúvida?</span>
            <h2 className="t-head">Perguntas frequentes</h2>
            <p>
              Respondemos as perguntas mais comuns sobre matrícula, aulas, exames, documentos,
              pagamentos e todo o processo da habilitação. Tudo para que você comece sua jornada
              com mais segurança, tranquilidade e confiança.
            </p>
            <div className="faq-img">
              <img src="/images/img14.webp" alt="Aluno da Caluar Auto-Escola" loading="lazy" />
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
