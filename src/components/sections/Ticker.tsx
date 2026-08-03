import { TICKER } from '../../data/ticker'

/**
 * Faixa animada .ticker (referencia, linha 438). A animacao @keyframes tk
 * translada -50%, entao a lista precisa estar duplicada no DOM para o loop
 * parecer continuo (a segunda metade retoma exatamente onde a primeira parou).
 */
export default function Ticker() {
  return (
    <div className="ticker">
      <div className="t-track">
        {[...TICKER, ...TICKER].map((item, idx) => (
          <span key={idx}>{item.destaque ? <b>{item.destaque}</b> : item.texto}</span>
        ))}
      </div>
    </div>
  )
}
