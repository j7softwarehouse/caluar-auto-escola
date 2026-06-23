import { useState } from 'react'

const faqs = [
  { q: 'Tenho medo de dirigir, vocês têm instrutores pacientes?', a: 'Com certeza! Sabemos que o medo é normal e nossos instrutores são treinados para isso. Começamos do zero, com respeito ao seu ritmo. Aulas teóricas com foco em confiança, aulas práticas em ambientes controlados (nossa motopista própria), e você no comando. Dezenas de alunos que chegaram com pavor conseguiram sua CNH com a gente. Você não está sozinho nessa.' },
  { q: 'Qual o melhor parcelamento?', a: 'Oferecemos parcelamento em até 12x sem juros. A gente trabalha com você para tornar sua CNH acessível financeiramente. Pacotes a partir de R$ 1.500. Sem surpresas, sem taxas escondidas. Fale conosco no WhatsApp e a gente ajusta o melhor valor para seu caso.' },
  { q: 'Como funcionam as aulas nos fins de semana?', a: 'Oferecemos aulas nas manhãs, tardes e noites. Segunda a sexta: 7h às 20h. Sábados: 9h às 12h. Você escolhe os horários que combinam com sua rotina. Flexibilidade total para quem trabalha ou estuda. Agende com a gente e ajustamos conforme sua disponibilidade.' },
  { q: 'Qual a taxa de aprovação de vocês?', a: 'Nossa taxa é de mais de 90% na primeira tentativa. Isso porque a gente não só ensina: a gente cuida de você do primeiro dia até você passar. Simulados inclusos, plataforma online 24h para treinar, e instrutores que realmente se importam com sua aprovação. Você estará 100% pronto para a prova.' },
  { q: 'Preciso de documentos especiais?', a: 'Você precisa de: RG, CPF, comprovante de endereço e foto 3x4. Se for mudança de categoria ou renovação, leve sua CNH antiga. A gente orienta tudo na matrícula. Nenhuma burocracia desnecessária. Nosso time cuida de toda a parte documental com você.' },
  { q: 'Quanto tempo leva para tirar a CNH?', a: 'Em média, 2 a 3 meses do primeiro atendimento até a CNH em mãos, dependendo da sua disponibilidade. O processo tem 5 etapas: matrícula, exames teóricos, aulas práticas, exame prático e emissão. A gente acelera o máximo possível sem comprometer sua aprendizagem. Alguns conseguem em 45 dias, outros em 4 meses. Depende do seu ritmo.' },
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
