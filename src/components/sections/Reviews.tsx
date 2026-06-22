import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Pedro Henrique', role: 'Aluno', text: 'Equipe Caluar com todo suporte nesse processo. Aulas teóricas com clareza e paciência. Aulas práticas com muita calma. Consegui tirar minha primeira habilitação.', rating: 5, initials: 'PH' },
  { name: 'Josilene Barreto', role: 'Aluna', text: 'Super recomendo! Ótima experiência durante todo esse processo. Os instrutores Ian e Washington são extremamente pacientes e didáticos. Atendimento de qualidade!', rating: 5, initials: 'JB' },
  { name: 'Daiane Mara', role: 'Aluna', text: 'Super indico a Auto Escola Caluar. Minha instrutora Luciana Pereira é nota 1000. Ensina com muita clareza e carinho pela profissão.', rating: 5, initials: 'DM' },
  { name: 'Cristiane Silva', role: 'Aluna', text: 'Gratidão a Equipe Caluar! Tirei minhas 2 habilitações pela Caluar e sempre vou indicar. Agradeço aos instrutores.', rating: 5, initials: 'CS' },
  { name: 'Isaah neves', role: 'Aluno', text: 'Imensamente grato à Autoescola Caluar. A equipe é atenciosa, os instrutores são pacientes e se importam com o aprendizado.', rating: 5, initials: 'IN' },
  { name: 'Aline Raquel', role: 'Aluna', text: 'Imensa gratidão à equipe CALUAR. O processo foi conduzido com competência, profissionalismo e organização. Aprovada de primeira!', rating: 5, initials: 'AR' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>
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
        <div className="relative">
          {/* Cards Container - 3 per view */}
          <div className="mb-12 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)`
              }}
            >
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full md:w-1/3"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:bg-white relative">
                    {/* Quote marks */}
                    <div className="text-6xl text-accent opacity-20 absolute -top-4 left-4 leading-none">"</div>

                    {/* Quote text */}
                    <p className="text-sm font-inter font-300 text-tx-muted italic mb-6 leading-relaxed flex-grow pt-4">
                      {rev.text}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      {/* Avatar & Name */}
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-manrope font-700 text-sm">{rev.initials}</span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-manrope font-700 text-primary text-sm">{rev.name}</p>
                          <p className="text-xs text-tx-muted font-300">{rev.role}</p>
                        </div>
                      </div>

                      {/* Google Review Badge */}
                      <div className="flex items-center gap-2 text-xs">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4">
                          <circle cx="12" cy="12" r="11" fill="none" stroke="#4285F4" strokeWidth="1" opacity="0.2"/>
                        </svg>
                        <span className="text-gray-600 font-500">GOOGLE REVIEW</span>
                        <StarRating rating={rev.rating} />
                      </div>
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
              className="w-11 h-11 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array(Math.ceil(reviews.length / itemsPerView))
                .fill(0)
                .map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? 'w-3 h-3 bg-accent'
                        : 'w-2 h-2 bg-gray-300 hover:bg-accent'
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
