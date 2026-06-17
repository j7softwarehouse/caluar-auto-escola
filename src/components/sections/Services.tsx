const services = [
  { num: 'A', title: 'CNH A', desc: 'Motocicletas e motonetas' },
  { num: 'B', title: 'CNH B', desc: 'Carros de passeio' },
  { num: 'AB', title: 'CNH AB', desc: 'Moto e carro juntos' },
  { num: 'C', title: 'CNH C', desc: 'Caminhoes' },
  { num: 'D', title: 'CNH D', desc: 'Onibus' },
  { num: 'E', title: 'CNH E', desc: 'Carretas' },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Todas as Categorias
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-light border border-border rounded-lg p-8 relative overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 group"
            >
              {/* Large category number in background */}
              <div className="absolute top-0 left-0 right-0 text-8xl font-manrope font-800 text-accent/15 leading-none pointer-events-none translate-y-2">
                {srv.num}
              </div>

              {/* Top orange line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-manrope font-700 text-primary mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-tx-muted font-inter font-300">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
