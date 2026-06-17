import Card from '../ui/Card'

const services = [
  { title: 'CNH A', desc: 'Motocicletas e motonetas' },
  { title: 'CNH B', desc: 'Carros de passeio' },
  { title: 'CNH AB', desc: 'Moto e carro juntos' },
  { title: 'CNH C', desc: 'Caminhoes' },
  { title: 'CNH D', desc: 'Onibus' },
  { title: 'CNH E', desc: 'Carretas' },
  { title: 'Reciclagem', desc: 'Renovacao de CNH' },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12">Todas as Categorias</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <Card key={idx}>
              <h3 className="text-xl font-manrope font-700 text-primary mb-2">{srv.title}</h3>
              <p className="text-tx-muted text-sm">{srv.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
