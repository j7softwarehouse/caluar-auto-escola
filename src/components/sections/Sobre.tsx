import {
  SOBRE_CHIP,
  SOBRE_TITULO_INICIO,
  SOBRE_TITULO_ENFASE,
  SOBRE_PARAGRAFOS,
  SOBRE_PILLS,
} from '../../data/sobre'

/** Secao .sec.sobre (referencia, linhas 540-561). */
export default function Sobre() {
  return (
    <section className="sec sobre" id="sobre">
      <div className="c">
        <div className="sobre-grid">
          <div className="sobre-imgs">
            <div className="sobre-img-lg">
              <img
                src="/images/IMG_1558.webp"
                alt="Turma aprovada no programa CNH Brasil"
                loading="lazy"
              />
            </div>
            <div className="sobre-img-col">
              <div className="sobre-img-sm">
                <img
                  src="/images/img3.webp"
                  alt="Alunos e equipe da Caluar ao lado do carro de aula"
                  loading="lazy"
                />
              </div>
              <div className="sobre-img-sm">
                <img
                  src="/images/img1.webp"
                  alt="Aluno na motopista própria da Caluar"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="sobre-txt">
            <span className="chip">{SOBRE_CHIP}</span>
            <h2 className="t-head">
              {SOBRE_TITULO_INICIO} <em>{SOBRE_TITULO_ENFASE}</em>
            </h2>
            {SOBRE_PARAGRAFOS.map((paragrafo, idx) => (
              <p className="sobre-p" key={idx}>
                {paragrafo}
              </p>
            ))}
            <div className="sobre-pills">
              {SOBRE_PILLS.map((pill) => (
                <div className="spill" key={pill.rotulo}>
                  <strong>{pill.valor}</strong>
                  <span>{pill.rotulo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
