import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Categoria A - Moto',
    photo: '/images/testimonials/carlos.jpg',
    quote: 'Tinha medo de pilotar, mas com os instrutores da Caluar consegui minha CNH na primeira tentativa. Muito pacientes!',
    rating: 5,
    approved: true
  },
  {
    id: 2,
    name: 'Marina Costa',
    role: 'Categoria B - Carro',
    photo: '/images/testimonials/marina.jpg',
    quote: 'Excelente atendimento, aulas bem estruturadas e a aprovação foi garantida. Recomendo muito!',
    rating: 5,
    approved: true
  },
  {
    id: 3,
    name: 'João Santos',
    role: 'Categoria AB',
    photo: '/images/testimonials/joao.jpg',
    quote: 'Fiz moto e carro com a Caluar. Processo tranquilo, instrutores experientes. Vale cada centavo investido.',
    rating: 5,
    approved: true
  },
  {
    id: 4,
    name: 'Fernanda Oliveira',
    role: 'Primeira Habilitação',
    photo: '/images/testimonials/fernanda.jpg',
    quote: 'Nunca tinha dirigido na vida. Saí daqui segura e confiante. Aprovada na primeira! Obrigada Caluar!',
    rating: 5,
    approved: true
  }
]

export default function TestimonialsWithPhotos() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section id="depoimentos" className="bg-gradient-to-br from-light to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
            Histórias Reais
          </div>
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-4 leading-tight">
            Quem tirou sua CNH com a gente
          </h2>
          <p className="text-lg font-inter font-400 text-tx-muted max-w-2xl mx-auto">
            Dezenas de alunos aprovados. Histórias reais de pessoas que conseguiram sua liberdade de dirigir.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/3 rounded-full translate-x-20 translate-y-20" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-accent/10">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-success text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  ✓ Aprovado
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Quote */}
              <p className="text-2xl md:text-3xl font-manrope font-700 text-primary mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Name & Role */}
              <div className="border-t border-border pt-6">
                <p className="text-xl font-manrope font-800 text-primary mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm font-inter font-400 text-accent uppercase tracking-wide">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Anterior"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'bg-accent w-8'
                    : 'bg-border w-3 hover:bg-primary/30'
                }`}
                aria-label={`Depoimento ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Próximo"
          >
            →
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-sm font-inter font-400 text-tx-muted">
            {current + 1} de {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
