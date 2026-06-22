import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Pedro Henrique', role: 'Aluno', text: 'Equipe Caluar com todo suporte nesse processo. Aulas teóricas com clareza e paciência. Aulas práticas com muita calma. Consegui tirar minha primeira habilitação. Só tenho a agradecer!', rating: 5, initials: 'P' },
  { name: 'Josilene Barreto', role: 'Aluna', text: 'Super recomendo! Ótima experiência durante todo esse processo. Os instrutores Ian e Washington são extremamente pacientes e didáticos. Atendimento de qualidade e profissionalismo do início ao fim!', rating: 5, initials: 'J' },
  { name: 'Daiane Mara', role: 'Aluna', text: 'Super indico a Auto Escola Caluar. Minha instrutora Luciana Pereira é nota 1000. Ensina com muita clareza e tem o coração gigante. Indicaria ela de olhos fechados. Ensina muito bem com amor e carinho pela profissão.', rating: 5, initials: 'D' },
  { name: 'Cristiane Silva', role: 'Aluna', text: 'Gratidão a Equipe Caluar! Tirei minhas 2 habilitações pela Caluar e sempre vou indicar. Agradeço aos instrutores Alípio, Lucas e Luciana. Deus abençoe sempre a toda Equipe Caluar!', rating: 5, initials: 'C' },
  { name: 'Isaah neves', role: 'Aluno', text: 'Imensamente grato à Autoescola Caluar. A equipe é atenciosa, os instrutores são pacientes e se importam com o aprendizado dos alunos. Recomendo de olhos fechados!', rating: 5, initials: 'I' },
  { name: 'Aline Raquel', role: 'Aluna', text: 'Imensa gratidão à equipe CALUAR. O processo foi conduzido com extrema competência, profissionalismo e organização. Agradecimento especial ao Alípio pelas aulas teóricas e ao Lucas pela paciência. Aprovada de primeira!', rating: 5, initials: 'A' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-xs ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}>
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
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentReview = reviews[currentIndex]

  return (
    <section id="avaliacoes" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-600 mb-3">
              Avaliações
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary leading-tight">
              O que dizem nossos alunos
            </h2>
          </div>
          <div className="flex items-center gap-5 bg-white border border-border rounded-lg p-5">
            <div className="text-4xl font-manrope font-800 text-primary leading-none">4.6</div>
            <div>
              <StarRating rating={5} />
              <div className="text-xs text-tx-muted font-300 mt-2">131 avaliações</div>
            </div>
          </div>
        </div>

        {/* Carousel - Horizontal Single Card */}
        <div className="relative">
          {/* Card Container */}
          <div className="mb-8">
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center transition-all duration-500">
              {/* Left - Quotes & Text */}
              <div className="flex-1">
                {/* Large Quote Marks */}
                <div className="text-5xl md:text-6xl text-accent/30 leading-none mb-4">"</div>

                {/* Review Text */}
                <p className="text-base md:text-lg font-inter font-300 text-tx-muted italic mb-6 leading-relaxed">
                  {currentReview.text}
                </p>

                {/* Google Review Badge */}
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 font-500">GOOGLE REVIEW</span>
                  <StarRating rating={currentReview.rating} />
                </div>
              </div>

              {/* Right - Avatar & Info */}
              <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-manrope font-700 text-2xl md:text-3xl">{currentReview.initials}</span>
                </div>
                <div className="text-center md:text-right">
                  <p className="font-manrope font-700 text-primary text-base md:text-lg">{currentReview.name}</p>
                  <p className="text-sm text-tx-muted font-300">{currentReview.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-3 h-2.5 bg-accent'
                      : 'w-2 h-2 bg-gray-400 hover:bg-accent'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border-2 border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
            >
              →
            </button>
          </div>

          {/* Auto-scroll indicator */}
          <div className="text-center mt-6 text-xs text-tx-muted">
            {currentIndex + 1} de {reviews.length}
          </div>
        </div>
      </div>
    </section>
  )
}
