import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Pedro Henrique', text: 'Equipe Caluar com todo suporte nesse processo. Aulas teóricas com clareza e paciência. Aulas práticas com muita calma. Consegui tirar minha primeira habilitação.', rating: 5, source: 'Google' },
  { name: 'Josilene Barreto', text: 'Super recomendo! Ótima experiência durante todo esse processo. Os instrutores Ian e Washington são extremamente pacientes e didáticos. Atendimento de qualidade!', rating: 5, source: 'Google' },
  { name: 'Daiane Mara', text: 'Super indico a Auto Escola Caluar. Minha instrutora Luciana Pereira é nota 1000. Ensina com muita clareza e carinho pela profissão.', rating: 5, source: 'Google' },
  { name: 'Cristiane Silva', text: 'Gratidão a Equipe Caluar! Tirei minhas 2 habilitações pela Caluar e sempre vou indicar. Agradeço aos instrutores Alípio, Lucas e Luciana.', rating: 5, source: 'Google' },
  { name: 'Isaah neves', text: 'Imensamente grato à Autoescola Caluar. A equipe é atenciosa, os instrutores são pacientes e se importam com o aprendizado. Recomendo!', rating: 5, source: 'Google' },
  { name: 'Aline Raquel', text: 'Imensa gratidão à equipe CALUAR. O processo foi conduzido com competência, profissionalismo e organização. Aprovada de primeira!', rating: 5, source: 'Google' },
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

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
          {/* Google Score Card */}
          <div className="flex items-center gap-5 bg-white border border-border rounded-lg p-5">
            <div className="text-4xl font-manrope font-800 text-primary leading-none">4.6</div>
            <div>
              <StarRating rating={5} />
              <div className="text-xs text-tx-muted font-300 mt-2">131 avaliações</div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div>
          {/* Cards Container - 3 per view */}
          <div className="mb-8 overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.67)}%)`
              }}
            >
                {reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full md:w-1/3"
                  >
                    <div className="bg-white border border-border rounded-lg p-6 h-full w-full aspect-square flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      {/* Stars */}
                      <div className="mb-3">
                        <StarRating rating={rev.rating} />
                      </div>

                      {/* Quote text */}
                      <p className="text-xs font-inter font-300 text-tx-muted italic mb-auto leading-relaxed line-clamp-6">
                        "{rev.text}"
                      </p>

                      {/* Name & Source */}
                      <div className="pt-3 border-t border-border mt-3">
                        <p className="font-manrope font-700 text-primary text-xs mb-0.5">{rev.name}</p>
                        <p className="text-xs text-tx-muted font-300">via {rev.source}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
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
              className="w-11 h-11 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
