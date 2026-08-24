import { useState } from 'react'
import { CONTATO, waLink } from '../../data/contato'
import { CATEGORIAS } from '../../data/categorias'
import { Icone } from '../icons'

/** Secao .sec.form-sec (referencia, linhas 690-727). Envio monta a mensagem e abre o WhatsApp (referencia, linhas 848-855). */
export default function Contato() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensagem, setMensagem] = useState('')

  const enviar = () => {
    const texto = [
      'Olá! Vim pelo site da Caluar.',
      '',
      `Nome: ${nome || 'não informado'}`,
      `Telefone: ${telefone || 'não informado'}`,
      `Categoria: ${categoria || 'não selecionada'}`,
      ...(mensagem ? [`Mensagem: ${mensagem}`] : []),
    ].join('\n')
    window.open(waLink(texto), '_blank')
  }

  return (
    <section className="sec form-sec" id="contato">
      <div className="c">
        <div className="form-grid">
          <div className="form-l">
            <span className="chip">Sua CNH pode começar hoje</span>
            <h2 className="t-head">
              Fale com a equipe da Caluar e descubra a melhor forma de <em>iniciar sua habilitação</em>.
            </h2>
            <p>
              Preencha o formulário e nossa equipe entra em contato em até 24 horas. Se preferir,
              fale diretamente pelos canais abaixo.
            </p>
            <div className="cinfo">
              <div className="ci">
                <div className="ci-ic">
                  <Icone nome="whatsapp" />
                </div>
                <div className="ci-tx">
                  <strong>Telefone e WhatsApp</strong>
                  <a href={waLink('Oi Caluar, quero minha CNH.')} target="_blank" rel="noopener noreferrer">
                    {CONTATO.telefone}
                  </a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">
                  <Icone nome="instagram" />
                </div>
                <div className="ci-tx">
                  <strong>Instagram</strong>
                  <a href={CONTATO.instagram} target="_blank" rel="noopener noreferrer">
                    @autoescolacaluar
                  </a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">
                  <Icone nome="email" />
                </div>
                <div className="ci-tx">
                  <strong>E-mail</strong>
                  <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ic">
                  <Icone nome="local" />
                </div>
                <div className="ci-tx">
                  <strong>Endereço</strong>
                  <span>
                    {CONTATO.endereco}, {CONTATO.bairroCidade}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="fbox">
            <h3>Solicite seu orçamento</h3>
            <p>Resposta em até 24 horas.</p>
            <div className="frow">
              <div className="fg">
                <label>Nome completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="fg">
                <label>WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(31) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </div>
            <div className="fg">
              <label>Categoria desejada</label>
              <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecione</option>
                {CATEGORIAS.map((cat) => (
                  <option key={cat.sigla}>{cat.titulo}</option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label>Mensagem (opcional)</label>
              <textarea
                placeholder="Dúvidas ou informações..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button
              className="btn btn-am btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
              type="button"
              onClick={enviar}
            >
              <Icone nome="whatsapp" />
              Enviar via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
