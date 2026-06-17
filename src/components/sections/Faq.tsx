import { useState } from 'react'

const faqs = [
  { q: 'Quanto custa?', a: 'Oferecemos pacotes a partir de R$ 1.500. Temos opcoes para todos os orcamentos e ainda parcelamos sem juros. Fale conosco para ajustarmos o melhor valor para seu caso.' },
  { q: 'Quantas aulas preciso fazer?', a: 'O minimo e 20 aulas praticas, conforme a legislacao DETRAN. Mas cada aluno tem seu ritmo. Alguns precisam de mais aulas e nos oferecemos aulas adicionais sem problema algum.' },
  { q: 'Posso parcelar?', a: 'Sim! Oferecemos parcelamento em ate 12x sem juros. A gente trabalha com voce para tornar sua CNH acessivel financeiramente. Sem surpresas, sem taxas escondidas.' },
  { q: 'Qual a taxa de aprovacao de voces?', a: 'Nossa taxa e de mais de 90% na primeira tentativa. Isso porque a gente nao so ensina: a gente cuida de voce do primeiro dia ate voce passar.' },
  { q: 'Vocês têm simulados?', a: 'Sim! Simulados estao inclusos em todas as aulas e voce ainda tem acesso a plataforma on-line 24h para treinar quando quiser. Voce estara 100% pronto para a prova.' },
  { q: 'Qual o horario de atendimento?', a: 'Segunda a sabado das 7h as 18h. Domingo fechado. Mas voce pode chamar a gente no WhatsApp a qualquer hora que a gente responde rapidinho.' },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
            Duvidas?
          </div>
          <h2 className="text-5xl font-manrope font-800 text-tx mb-4 leading-tight">
            Perguntas Frequentes
          </h2>
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
