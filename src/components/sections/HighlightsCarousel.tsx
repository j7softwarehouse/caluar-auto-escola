const highlights = [
  { text: 'CNH BRASIL', highlight: true },
  { text: 'Reciclagem' },
  { text: 'ALTO ÍNDICE DE APROVAÇÃO', highlight: true },
  { text: 'Transporte ao exame' },
  { text: 'CREDENCIADA DETRAN-MG', highlight: true },
  { text: 'Itabirito/MG' },
  { text: 'HABILITAÇÃO A', highlight: true },
  { text: 'HABILITAÇÃO B' },
  { text: 'HABILITAÇÃO AB' },
  { text: 'HABILITAÇÃO C' },
  { text: 'HABILITAÇÃO D', highlight: true },
]

export default function HighlightsCarousel() {
  return (
    <>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          gap: 2.5rem;
          animation: ticker 28s linear infinite;
          width: max-content;
        }
        .ticker-item {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.32);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ticker-item b {
          color: #F5A800;
          font-weight: 600;
        }
      `}</style>

      <section className="bg-[#1B2B5E] border-t border-b border-[rgba(245,168,0,0.1)] py-[11px] overflow-hidden">
        <div className="ticker-track">
          {[...highlights, ...highlights].map((item, idx) => (
            <span key={idx} className="ticker-item">
              {item.highlight ? <b>{item.text}</b> : item.text}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
