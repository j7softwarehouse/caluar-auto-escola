import { useEffect, useState } from 'react'
import { useAdmin } from '../../context/AdminContext'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const labels = ['Anos de experiencia', 'Nota no Google', 'Categorias']
const suffixes = ['+', '', '']

export default function CredentialsBar() {
  const { state } = useAdmin()
  const ref = useIntersectionObserver()
  const [counts, setCounts] = useState<Record<number, number>>({})

  useEffect(() => {
    if (!ref.current?.classList.contains('is-visible')) return

    state.numbers.forEach((target, idx) => {
      const interval = setInterval(() => {
        setCounts((prev) => {
          const current = prev[idx] || 0
          const next = Math.min(current + Math.ceil(target / 50), target)
          if (next >= target) clearInterval(interval)
          return { ...prev, [idx]: next }
        })
      }, 30)
    })
  }, [ref.current?.classList.contains('is-visible'), state.numbers])

  return (
    <section ref={ref} className="fade-in bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {state.numbers.map((_, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-manrope font-800 text-accent mb-2">
                {idx === 1 ? `${((counts[idx] || 0) / 10).toFixed(1)}` : `${counts[idx] || 0}${suffixes[idx]}`}
              </div>
              <p className="text-sm md:text-base text-white/80">{labels[idx]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
