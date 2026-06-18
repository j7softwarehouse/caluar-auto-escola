import Button from '../ui/Button'

const dores = [
  {
    title: 'Processo sem complicação',
    text: 'Você não precisa enfrentar sozinho a burocracia da habilitação. A equipe da Caluar orienta e resolve com você cada etapa do processo junto ao DETRAN, tornando tudo mais simples, rápido e organizado.',
    icon: 'document'
  },
  {
    title: 'Horários que cabem na sua rotina',
    text: 'Trabalha o dia inteiro? Estuda? Temos horários flexíveis pela manhã, tarde e noite para você conquistar sua CNH sem virar sua rotina de cabeça para baixo.',
    icon: 'clock'
  },
  {
    title: 'Mais confiança desde a primeira aula',
    text: 'Aqui você aprende no seu ritmo. Nossos instrutores são pacientes, experientes e preparados para ajudar até quem tem medo de dirigir ou nunca pegou no volante.',
    icon: 'person'
  },
  {
    title: 'Prática com mais segurança',
    text: 'Treine com tranquilidade em veículos modernos, com duplo comando e estrutura preparada para o seu aprendizado. Para moto, você ainda conta com pista própria de treinamento.',
    icon: 'car'
  },
  {
    title: 'Condições que ajudam você a começar agora',
    text: 'Parcelamento facilitado e possibilidade de participação no programa CNH Brasil. Você pode parcelar no cartão ou na nota promissória, com condições pensadas para caber no seu orçamento.\n\nPorque conquistar sua habilitação também precisa ser possível financeiramente.',
    icon: 'money'
  },
  {
    title: 'Suporte completo no curso teórico',
    text: 'Aulas presenciais ou on-line na modalidade remota, com transmissão ao vivo de terça a sexta, nos períodos da manhã, tarde ou noite.\n\nAlém das aulas, você conta com acompanhamento, revisões e preparação especial para a prova aos sábados. Tudo para você chegar mais preparado, mais confiante e mais próximo da aprovação.',
    icon: 'book'
  },
]

const IconComponent = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    document: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    clock: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    person: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    car: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    money: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    book: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  }
  return icons[type] || icons.document
}

export default function Dores() {
  return (
    <section className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Muita gente adia a própria liberdade.
          </h2>
          <p className="text-lg font-inter font-400 text-tx-muted leading-relaxed mb-6">
            Porque nunca dá o primeiro passo.
          </p>
          <p className="text-base font-inter font-300 text-tx-muted leading-relaxed">
            A verdade é que, quase sempre, o problema não é vontade. É medo, insegurança, falta de tempo, dinheiro ou achar que o processo vai ser complicado demais. A Caluar nasceu justamente para ajudar pessoas que se sentem assim.
          </p>
          <p className="text-base font-inter font-300 text-tx-muted leading-relaxed mt-4">
            Veja como a Caluar facilita sua jornada:
          </p>
        </div>

        {/* Grid de benefícios - 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dores.map((dor, idx) => (
            <div
              key={idx}
              className="bg-white border border-[rgba(0,0,0,0.07)] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-[#F5A800] mb-4 w-11 h-11 bg-[rgba(245,168,0,0.1)] rounded-lg flex items-center justify-center">
                <IconComponent type={dor.icon} />
              </div>
              <h3 className="font-manrope font-600 text-[#0F1F45] mb-2 text-sm">
                {dor.title}
              </h3>
              <p className="font-inter font-300 text-[#64748b] text-xs leading-relaxed">
                {dor.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="bg-[#0F1F45] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div className="flex-1">
            <p className="font-inter font-400 text-white text-lg">
              A Caluar já ajudou milhares de pessoas exatamente nessa situação.
            </p>
          </div>
          <Button
            href="https://wa.me/553135633619?text=Quero%20minha%20CNH"
            variant="accent"
            size="lg"
          >
            Quero minha CNH
          </Button>
        </div>
      </div>
    </section>
  )
}
