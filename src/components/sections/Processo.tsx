import { PROCESSO } from '../../data/processo'

/**
 * Secao .sec.proc (referencia, linhas 563-577).
 * Divergencia deliberada: a referencia tem 4 etapas, o site tem 5 (dado real
 * de producao) - grid e linha conectora em proc.css foram recalculados para
 * 5 colunas (Task 12).
 */
export default function Processo() {
  return (
    <section className="sec proc">
      <div className="c proc-in">
        <div>
          <span className="chip">Um processo acompanhado em cada etapa</span>
          <h2 className="t-head">
            Do cadastro a <em>CNH na mão.</em>
          </h2>
          <p className="sub">Cuidamos de tudo para você se preocupar apenas em aprender.</p>
        </div>

        <div className="proc-steps">
          {PROCESSO.map((etapa) => (
            <div className="pstep" key={etapa.numero}>
              <div className="pnum">{etapa.numero}</div>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
