import { useState } from 'react'

// Comentários positivos do Google - Rating 4.6 ⭐ (131 avaliações)
const testimonials = [
  {
    name: 'Pedro Henrique',
    text: 'Equipe Caluar com todo suporte nesse processo. Aulas teóricas explicadas com clareza e paciência. Aulas práticas com muita calma, paciência e comprometimento. Consegui tirar minha primeira habilitação de primeira. Só tenho a agradecer!',
    rating: 5,
  },
  {
    name: 'Josilene Barreto',
    text: 'Super recomendo! Ótima experiência durante todo esse processo. Os instrutores Ian e Washington são extremamente pacientes, atenciosos e didáticos. Me senti confiante e bem preparada para dirigir. Atendimento de qualidade e profissionalismo do início ao fim!',
    rating: 5,
  },
  {
    name: 'Daiane Mara',
    text: 'Super indico a Auto Escola Caluar. Minha instrutora Luciana Pereira é nota 1000. Ensina com muita clareza e tem o coração gigante. Indicaria ela de olhos fechados. Ensina muito bem com amor e carinho pela profissão.',
    rating: 5,
  },
  {
    name: 'Cristiane Silva',
    text: 'Gratidão a Equipe Caluar! Tirei minhas 2 habilitações pela Caluar e sempre vou indicar. Agradeço aos instrutores Alípio, Lucas e Luciana. Deus abençoe sempre a toda Equipe Caluar!',
    rating: 5,
  },
  {
    name: 'laah neves',
    text: 'Sou imensamente grato à Autoescola Caluar por todo o suporte e profissionalismo. A equipe é extremamente atenciosa, os instrutores são pacientes e realmente se importam com o aprendizado dos alunos. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'Aline Raquel',
    text: 'Imensa gratidão à equipe CALUAR. O processo foi conduzido com extrema competência, profissionalismo e organização. Agradecimento especial ao Alípio pelas aulas teóricas e ao Lucas pela paciência, dedicação e incentivos. Aprovada de primeira!',
    rating: 5,
  },
  {
    name: 'Maria Xavier',
    text: 'Agradeço a todos os envolvidos, especialmente minha instrutora Luciana. Iniciei sem saber nada e graças a Deus consegui minha tão sonhada CNH. Não desistam, sejam persistentes. Obrigada Caluar!',
    rating: 5,
  },
  {
    name: 'Junior Silva',
    text: 'Auto Escola Caluar está de parabéns! Ótima auto escola para tirar CNH, de confiança. Troquei de categoria nela com excelentes professores. Conquistei minha CNH D com professor Washington, passei de primeira na banca!',
    rating: 5,
  },
  {
    name: 'Carlos Gabriel',
    text: 'Agradeço imensamente à escola e todos envolvidos, especialmente ao professor Ian, que foi um excelente profissional. Muito obrigado por acreditar no meu potencial e no resultado positivo do exame. Vocês são nota 10!',
    rating: 5,
  },
  {
    name: 'Alline Veloso',
    text: 'Através da Caluar conquistei minhas categorias A, B e D. Sou muito grata a todos os profissionais que me incentivaram, principalmente ao instrutor Washington que nunca me deixou desanimar. Excelente auto escola, recomendo de olhos fechados!',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const handlePrev = () => setCurrentIndex(Math.max(0, currentIndex - 1))
  const handleNext = () => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))

  // Se não houver comentários adicionados, mostrar placeholder
  if (testimonials.length === 0) {
    return (
      <section id="avaliacoes" className="bg-light py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-tx-muted font-inter">
            Seção de testimonials - Aguardando comentários do Google...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="avaliacoes" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with score */}
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-600 mb-3">
              Avaliações
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary leading-tight">
              O que dizem nossos alunos
            </h2>
          </div>
          {/* Google Score Card - 4.6 com 1 estrela parcial */}
          <div className="flex items-center gap-5 bg-white border border-border rounded-lg p-5 flex-shrink-0">
            <div className="text-4xl font-manrope font-800 text-primary leading-none">4.6</div>
            <div>
              <div className="flex gap-0.5 items-center">
                {/* 4 estrelas completas */}
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-lg text-amber-400">★</span>
                ))}
                {/* 1 estrela parcial (60% preenchida) */}
                <div className="relative inline-block w-5 h-5">
                  <span className="text-lg text-gray-300 absolute">★</span>
                  <div className="overflow-hidden" style={{ width: '60%' }}>
                    <span className="text-lg text-amber-400">★</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-tx-muted font-300 mt-2">131 avaliações</div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div>
          <div className="overflow-hidden mb-8">
            <div
              className="flex gap-5 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.67)}%)`
              }}
            >
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="flex-0 w-full md:w-1/3"
                >
                  <div className="bg-white border border-border rounded-lg p-7 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Stars */}
                    <StarRating rating={test.rating} />

                    {/* Quote text */}
                    <p className="text-base font-inter font-300 text-tx-muted italic my-5 flex-grow">
                      "{test.text}"
                    </p>

                    {/* Name */}
                    <div>
                      <p className="font-manrope font-700 text-primary">{test.name}</p>
                      <p className="text-xs text-tx-muted">via Google</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 disabled:opacity-50 hover:bg-primary hover:border-primary hover:text-white"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {Array(Math.ceil(testimonials.length / itemsPerView))
                .fill(0)
                .map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-6 h-2 bg-primary rounded-full'
                        : 'w-2 h-2 bg-border rounded-full hover:bg-primary'
                    }`}
                  />
                ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-11 h-11 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 disabled:opacity-50 hover:bg-primary hover:border-primary hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
