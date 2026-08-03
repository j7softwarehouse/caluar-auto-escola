import { CONTATO, waLink } from '../../data/contato'
import { Icone } from '../icons'

/**
 * Secao .map-sec (referencia, linhas 729-746).
 * Divergencia deliberada: horarios vem de CONTATO (semana 7h-20h, sabado 9h-12h),
 * nao os "8h as 18h / 8h as 12h" da referencia, que sao conteudo desatualizado.
 */
export default function Mapa() {
  return (
    <section className="map-sec">
      <div className="c">
        <div className="map-grid">
          <div className="map-txt">
            <span className="chip">Visite nossa autoescola</span>
            <h2 className="t-head">
              Estamos em <em>Itabirito/MG</em>
            </h2>
            <p>
              {CONTATO.endereco}, {CONTATO.bairroCidade}.
              <br />
              Segunda a sexta {CONTATO.horarioSemana}. Sábado {CONTATO.horarioSabado}.
            </p>
            <div style={{ display: 'flex', gap: '.85rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <a
                href={waLink('Quero saber mais sobre a Caluar.')}
                className="btn btn-am"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome="whatsapp" /> WhatsApp
              </a>
              <a href={CONTATO.telefoneHref} className="btn btn-ot">
                <Icone nome="telefone" /> Ligar
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1!2d-43.804!3d-20.252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzA3LjIiUyA0M8KwNDgnMTQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Caluar Auto-Escola"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
