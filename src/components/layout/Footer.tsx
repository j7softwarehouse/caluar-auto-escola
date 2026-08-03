import { CONTATO, anosDeTradicao, waLink } from '../../data/contato'
import { CATEGORIAS } from '../../data/categorias'
import { Icone } from '../icons'

/**
 * Footer (referencia, linhas 748-786).
 * Divergencia deliberada: `.ft-tag` usa anosDeTradicao() em vez do "23 anos" literal da
 * referencia, para nao envelhecer de novo. Links de "Categorias" apontam para #servicos
 * (id real da secao, ver Categorias.tsx), nao #categorias como na referencia. A lista de
 * categorias e gerada a partir de CATEGORIAS (fonte unica de verdade, tambem usada em
 * Contato.tsx) para nunca mais anunciar categorias que a autoescola nao oferece.
 */
export default function Footer() {
  return (
    <footer>
      <div className="c">
        <div className="ft-grid">
          <div className="ft-brand">
            {/* filter:none sobrepoe .ft-brand img (footer.css): logo_caluar_branca.jpg ja e
               branca sobre fundo opaco (mesmo motivo documentado em nav.css); o filtro
               brightness/invert da referencia pressupoe PNG com transparencia e, aplicado a
               este JPEG opaco, produz um retangulo branco solido. */}
            <img src="/logos/logo_caluar_branca.jpg" alt="Caluar" style={{ filter: 'none' }} />
            <p className="ft-tag">
              Centro de Formação de Condutores credenciado pelo DETRAN-MG. Há mais de{' '}
              {anosDeTradicao()} anos formando motoristas responsáveis em Itabirito e região.
            </p>
            <div className="ft-soc">
              <a href={CONTATO.instagram} target="_blank" rel="noopener noreferrer" className="fsl" aria-label="Instagram">
                <Icone nome="instagram" />
              </a>
              <a href={CONTATO.facebook} target="_blank" rel="noopener noreferrer" className="fsl" aria-label="Facebook">
                <Icone nome="facebook" />
              </a>
              <a href={waLink('Vim pelo site da Caluar e quero saber mais.')} target="_blank" rel="noopener noreferrer" className="fsl" aria-label="WhatsApp">
                <Icone nome="whatsapp" />
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h4>Categorias</h4>
            <ul>
              {CATEGORIAS.map((cat) => (
                <li key={cat.sigla}><a href="#servicos">{cat.titulo}</a></li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#sobre">Sobre a Caluar</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>Contato</h4>
            <ul>
              <li><a href={CONTATO.telefoneHref}>{CONTATO.telefone}</a></li>
              <li><a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a></li>
              <li><a href="#">{CONTATO.endereco}</a></li>
              <li><a href="#">{CONTATO.bairroCidade}</a></li>
            </ul>
          </div>
        </div>

        <div className="ft-bot">
          <p className="ft-copy">© 2026 Auto Escola Caluar. Todos os direitos reservados.</p>
          <a href="https://www.j7softwarehouse.com.br" target="_blank" rel="noopener noreferrer" className="ft-by">
            Desenvolvido por <img src="/logos/logo_j7.png" alt="J7 Software House" />
          </a>
        </div>
      </div>
    </footer>
  )
}
