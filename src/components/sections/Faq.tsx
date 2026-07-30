import { useState } from 'react'
import { FAQ } from '../../data/faq'

const faqs = FAQ.map((item) => ({ q: item.pergunta, a: item.resposta }))

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
            Duvidas?
          </div>
          <h2 className="text-5xl font-manrope font-800 text-tx mb-4 leading-relaxed">
            Ainda ficou com alguma dúvida?
          </h2>
          <p className="text-base font-inter font-300 text-tx-muted mb-6 leading-relaxed">
            Respondemos as perguntas mais comuns sobre matrícula, aulas, exames, documentos, pagamentos e todo o processo da habilitação.
          </p>
          <p className="text-base font-inter font-300 text-tx-muted mb-12 leading-relaxed">
            Tudo para que você comece sua jornada com mais segurança, tranquilidade e confiança.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {faqs.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full py-5 px-0 flex justify-between items-center gap-4 font-manrope font-600 text-lg text-tx hover:text-primary transition-colors text-left"
              >
                {item.q}
                <span className="flex-shrink-0 text-2xl text-tx-muted group-hover:text-primary transition-colors">
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              {open === idx && (
                <div className="pb-5 text-tx-muted font-inter font-400 leading-relaxed">
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
