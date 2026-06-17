import Carousel from '../ui/Carousel'

const reviews = [
  { name: 'João Silva', text: 'Excelente escola! Aprovei na primeira chance.', rating: 5 },
  { name: 'Maria Santos', text: 'Instrutores muito pacientes e atentos.', rating: 5 },
  { name: 'Pedro Costa', text: 'Prático e teórico de qualidade. Recomendo!', rating: 5 },
  { name: 'Ana Oliveira', text: 'Melhor experiência que tive. Caluar é top!', rating: 5 },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-accent' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12">Avaliações de Alunos</h2>
        <Carousel itemsPerView={3}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-light p-6 rounded-lg h-full">
                <StarRating rating={rev.rating} />
                <p className="text-tx-muted mt-3 mb-4">{rev.text}</p>
                <p className="font-manrope font-700 text-primary">{rev.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
