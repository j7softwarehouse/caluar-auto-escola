import { useState } from 'react'
import Lightbox from '../ui/Lightbox'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const images = [
    { src: '/images/IMG_0334.jpg', alt: 'Turma Caluar' },
    { src: '/images/IMG_0345.jpg', alt: 'Aula Prática' },
    { src: '/images/IMG_0367.jpg', alt: 'Aprovado' },
    { src: '/images/IMG_0373.jpg', alt: 'Turma em ação' },
    { src: '/images/IMG_0380.jpg', alt: 'Aluno dirigindo' },
    { src: '/images/IMG_1550.jpg', alt: 'Equipe Caluar' },
    { src: '/images/IMG_1558.jpg', alt: 'Aula teórica' },
    { src: '/images/IMG_2314.jpg', alt: 'Turma' },
    { src: '/images/IMG_9122.jpg', alt: 'Prática na pista' },
  ]

  const itemsPerView = 3
  const maxIndex = Math.max(0, images.length - itemsPerView)

  const handlePrev = () => setCurrentIndex(Math.max(0, currentIndex - 1))
  const handleNext = () => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set(prev).add(src))
  }

  return (
    <section id="galeria" className="bg-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with controls */}
        <div className="flex items-center justify-between mb-12 gap-8 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-600 mb-3">
              Galeria
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-white leading-relaxed">
              Nossa galeria de aprovados
            </h2>
          </div>
          {/* Controls */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 hover:bg-accent hover:border-accent hover:text-dark"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 hover:bg-accent hover:border-accent hover:text-dark"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)`
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full md:w-1/3 cursor-pointer relative bg-white/5 rounded-xl overflow-hidden"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Placeholder skeleton */}
                {!loadedImages.has(img.src) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse rounded-xl h-96" />
                )}
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(img.src)}
                  className={`rounded-xl h-96 object-cover w-full transition-all duration-300 hover:scale-105 ${
                    loadedImages.has(img.src) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {Array(Math.ceil(images.length / itemsPerView))
            .fill(0)
            .map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-accent rounded-full'
                    : 'w-2 h-2 bg-white/20 rounded-full hover:bg-accent'
                }`}
              />
            ))}
        </div>

        {/* Lightbox */}
        <Lightbox isOpen={lightboxIndex !== null} onClose={() => setLightboxIndex(null)}>
          {lightboxIndex !== null && (
            <img
              src={images[lightboxIndex].src}
              alt="Gallery"
              loading="lazy"
              decoding="async"
              className="w-full rounded-lg"
            />
          )}
        </Lightbox>
      </div>
    </section>
  )
}
