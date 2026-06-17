import { useState } from 'react'

const faqs = [
  { q: 'Quanto custa a autoescola?', a: 'Oferecemos pacotes a partir de R$ 1.500. Consulte-nos para detalhes.' },
  { q: 'Quantas aulas preciso?', a: 'Mínimo 20 aulas práticas, conforme legislação DETRAN.' },
  { q: 'Posso parcelar?', a: 'Sim! Oferecemos parcelamento em até 6x sem juros.' },
  { q: 'Qual a taxa de aprovação?', a: 'Nossa taxa é de 95% na primeira tentativa!' },
  { q: 'Vocês têm simulados?', a: 'Sim, inclusos nas aulas e disponíveis on-line 24h.' },
  { q: 'Qual o horário de atendimento?', a: 'Segunda a sábado das 7h às 18h. Domingo fechado.' },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12">Perguntas Frequentes</h2>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-4 flex justify-between items-center font-manrope font-700 text-primary hover:bg-light"
              >
                {item.q}
                <span>{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <div className="px-4 pb-4 text-tx-muted">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
