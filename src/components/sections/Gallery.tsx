import { useState } from 'react'
import Lightbox from '../ui/Lightbox'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Turma Caluar' },
    { src: '/images/gallery-2.jpg', alt: 'Aula Pratica' },
    { src: '/images/gallery-3.jpg', alt: 'Aprovado' },
    { src: '/images/img1.JPG', alt: 'Equipe' },
  ]

  const itemsPerView = 3
  const maxIndex = Math.max(0, images.length - itemsPerView)

  const handlePrev = () => setCurrentIndex(Math.max(0, currentIndex - 1))
  const handleNext = () => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))

  return (
    <section id="galeria" className="bg-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with controls */}
        <div className="flex items-center justify-between mb-12 gap-8 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-600 mb-3">
              Galeria
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-white leading-tight">
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
            className="flex gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.67)}%)`
            }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="flex-0 w-full md:w-1/3 cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-xl h-72 object-cover w-full transition-transform duration-300 hover:scale-105"
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
            <img src={images[lightboxIndex].src} alt="Gallery" className="w-full rounded-lg" />
          )}
        </Lightbox>
      </div>
    </section>
  )
}
