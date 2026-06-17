import { useState } from 'react'
import Carousel from '../ui/Carousel'
import Lightbox from '../ui/Lightbox'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Turma Caluar' },
    { src: '/images/gallery-2.jpg', alt: 'Aula Pratica' },
    { src: '/images/gallery-3.jpg', alt: 'Aprovado' },
  ]

  return (
    <section id="galeria" className="bg-dark py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12 text-white">Nossa Galeria</h2>
        <Carousel itemsPerView={3}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className="px-2 cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <img src={img.src} alt={img.alt} className="rounded-lg h-64 object-cover w-full" />
            </div>
          ))}
        </Carousel>
        
        <Lightbox isOpen={lightboxIndex !== null} onClose={() => setLightboxIndex(null)}>
          {lightboxIndex !== null && (
            <img src={images[lightboxIndex].src} alt="Gallery" className="w-full rounded-lg" />
          )}
        </Lightbox>
      </div>
    </section>
  )
}
