import { CATEGORIAS } from '../../data/categorias'
import { waLink } from '../../data/contato'
import { Icone } from '../icons'

/**
 * Secao .sec.serv (referencia, linhas 495-538).
 * Divergencia deliberada: id="servicos" (nao "categorias") para casar com o link da Navbar.
 */
export default function Categorias() {
  return (
    <section className="sec serv" id="servicos">
      <div className="c">
        <div className="serv-head">
          <span className="chip">Tudo que você precisa para sua habilitação</span>
          <h2 className="t-head">
            Da primeira habilitação à <em>carreira profissional</em>
          </h2>
          <p>
            Primeira habilitação, curso teórico, adição e mudança de categoria, renovação,
            reciclagem e cursos especializados para motoristas profissionais.
          </p>
        </div>

        <div className="serv-grid">
          {CATEGORIAS.map((cat) => (
            <div className="serv-card" key={cat.sigla}>
              <div className="serv-cat">{cat.sigla}</div>
              <h3>{cat.titulo}</h3>
              <ul className="serv-list">
                {cat.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href={waLink('Quero saber sobre as categorias da Caluar.')}
            className="btn btn-nv btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone nome="whatsapp" />
            Consultar minha categoria
          </a>
        </div>
      </div>
    </section>
  )
}
