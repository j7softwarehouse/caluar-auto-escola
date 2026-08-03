import { waLink } from '../../data/contato'
import { Icone } from '../icons'

/** Botao flutuante .waf (referencia, linha 788). Fica fora de qualquer <section>. */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink('Vim pelo site da Caluar e quero saber mais.')}
      className="waf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <Icone nome="whatsapp" />
    </a>
  )
}
