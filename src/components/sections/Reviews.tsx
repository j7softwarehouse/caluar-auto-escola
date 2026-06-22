import { useState, useEffect } from 'react'

const reviews = [
  { name: 'João Silva', text: 'Excelente escola! Aprovei na primeira chance.', rating: 5 },
  { name: 'Maria Santos', text: 'Instrutores muito pacientes e atentos.', rating: 5 },
  { name: 'Pedro Costa', text: 'Prático e teórico de qualidade. Recomendo!', rating: 5 },
  { name: 'Ana Oliveira', text: 'Melhor experiência que tive. Caluar é top!', rating: 5 },
  { name: 'Roberto Lima', text: 'Aprendi muito e passei na primeira tentativa.', rating: 5 },
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

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
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
          {/* Cards Container */}
          <div className="mb-8 flex justify-center">
            <div className="w-full md:w-96 h-96 md:h-96 overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full aspect-square"
                  >
                    <div className="bg-white border border-border rounded-lg p-7 h-full w-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      {/* Stars */}
                      <StarRating rating={rev.rating} />

                      {/* Quote text */}
                      <p className="text-sm font-inter font-300 text-tx-muted italic my-4 flex-grow overflow-hidden">
                        "{rev.text}"
                      </p>

                      {/* Name */}
                      <div>
                        <p className="font-manrope font-700 text-primary text-sm">{rev.name}</p>
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
