import { STATS } from '../../data/stats'

/** Barra .stats-bar (referencia, linhas 439-446), logo abaixo do ticker. */
export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="c">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.rotulo}>
              <div className="stat-num">
                {stat.valor}
                <b>{stat.sufixo}</b>
              </div>
              <div className="stat-lbl">{stat.rotulo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
