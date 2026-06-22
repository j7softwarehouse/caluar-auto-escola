const labels = ['ANOS NO MERCADO', 'CONDUTORES FORMADOS', 'NOTA GOOGLE', 'CREDENCIADA DETRAN-MG']
const suffixes = ['+', '+', '⭐', '%']
const staticValues = ['24', '5mil', '4.6', '100']

export default function CredentialsBar() {

  return (
    <>
      <style>{`
        .stat-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #F5A800;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s;
        }
        .stat-item:hover::after {
          transform: scaleX(1);
        }
        .star-icon {
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          vertical-align: -0.2em;
          margin-left: 0.15em;
        }
      `}</style>

      <section className="bg-white border-b border-[rgba(0,0,0,0.07)] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-0">
            {staticValues.map((value, idx) => (
              <div
                key={idx}
                className="stat-item relative px-8 py-7 border-r border-[rgba(0,0,0,0.07)] text-left"
                style={{ borderRight: (idx === staticValues.length - 1 || idx === 2) ? 'none' : '1px solid rgba(0,0,0,0.07)' }}
              >
                <div className="text-4xl md:text-5xl font-manrope font-800 leading-none">
                  <span className="text-[#0F1F45]">{value}</span>
                  {idx === 2 ? (
                    <span className="text-[#F5A800] inline-block">
                      <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </span>
                  ) : (
                    <span className="text-[#F5A800]">{suffixes[idx]}</span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-[#64748b] uppercase tracking-wider font-inter font-light mt-1">
                  {labels[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
