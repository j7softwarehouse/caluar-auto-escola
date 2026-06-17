import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const items = [
  { title: 'Instrutores Pacientes', desc: 'Cada aluno tem seu tempo. Ensino com calma.' },
  { title: 'Aprovacao Garantida', desc: 'Metodologia focada em confianca e preparacao.' },
  { title: 'Parcelamento Facil', desc: 'Opcoes que cabem no seu bolso.' },
  { title: 'Atendimento Humano', desc: 'Do primeiro contato ate a sua CNH.' },
]

export default function Differentials() {
  const ref = useIntersectionObserver()
  return (
    <section ref={ref} className="fade-in bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-light hover:shadow-lg transition-shadow group">
              <div className="h-1 bg-accent w-0 group-hover:w-full transition-all rounded-full mb-4" />
              <h3 className="font-manrope font-700 text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-tx-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
