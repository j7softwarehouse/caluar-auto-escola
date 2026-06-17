import { useState } from 'react'

// INSTRUÇÃO: Adicione aqui os comentários positivos do Google (máx 10)
// Copie direto da página do Google e adicione à lista abaixo
const testimonials = [
  {
    name: 'Nome do Cliente',
    text: 'Adicione aqui o comentário positivo do Google',
    rating: 5,
  },
  // Adicione mais comentários aqui (máximo 10)
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
          {/* Google Score Card */}
          <div className="flex items-center gap-5 bg-white border border-border rounded-lg p-5">
            <div className="text-4xl font-manrope font-800 text-primary leading-none">4.6</div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400">
                    {i < 4 ? '★' : '✩'}
                  </span>
                ))}
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
