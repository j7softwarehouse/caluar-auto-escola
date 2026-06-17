import { ReactNode } from 'react'
import { useCarousel } from '../../hooks/useCarousel'

interface CarouselProps {
  children: ReactNode[]
  itemsPerView?: 1 | 2 | 3
  autoPlay?: boolean
}

export default function Carousel({ children, itemsPerView = 3, autoPlay = true }: CarouselProps) {
  const { currentIndex, next, prev, goTo, setIsAutoPlay } = useCarousel(children.length)

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => autoPlay && setIsAutoPlay(true)}
    >
      {/* Items */}
      <div className="flex overflow-hidden">
        {children.map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 transition-all duration-500 ${
              itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
            } ${idx === currentIndex ? 'opacity-100' : 'opacity-50'}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent text-dark rounded-full hover:bg-yellow-400"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent text-dark rounded-full hover:bg-yellow-400"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-accent w-8' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
