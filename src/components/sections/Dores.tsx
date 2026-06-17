import Button from '../ui/Button'

const dores = [
  {
    title: 'Processo sem complicação',
    text: 'Você não precisa enfrentar sozinho a burocracia da habilitação. A equipe da Caluar orienta e resolve com você cada etapa do processo junto ao DETRAN, tornando tudo mais simples, rápido e organizado.'
  },
  {
    title: 'Horários que cabem na sua rotina',
    text: 'Trabalha o dia inteiro? Estuda? Temos horários flexíveis pela manhã, tarde e noite para você conquistar sua CNH sem virar sua rotina de cabeça para baixo.'
  },
  {
    title: 'Mais confiança desde a primeira aula',
    text: 'Aqui você aprende no seu ritmo. Nossos instrutores são pacientes, experientes e preparados para ajudar até quem tem medo de dirigir ou nunca pegou no volante.'
  },
  {
    title: 'Prática com mais segurança',
    text: 'Treine com tranquilidade em veículos modernos, com duplo comando e estrutura preparada para o seu aprendizado. Para moto, você ainda conta com pista própria de treinamento.'
  },
  {
    title: 'Condições que ajudam você a começar agora',
    text: 'Parcelamento facilitado e possibilidade de participação no programa CNH Brasil. Você pode parcelar no cartão ou na nota promissória, com condições pensadas para caber no seu orçamento.'
  },
  {
    title: 'Suporte completo no curso teórico',
    text: 'Aulas presenciais ou on-line na modalidade remota, com transmissão ao vivo de terça a sexta, nos períodos da manhã, tarde ou noite. Tudo para você chegar mais preparado.'
  },
]

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

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {dores.map((dor, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg p-6 fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-manrope font-700 text-primary mb-3 text-base">
                {dor.title}
              </h3>
              <p className="font-inter font-300 text-tx-muted text-sm leading-relaxed">
                {dor.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="bg-gradient-to-r from-primary to-primary-mid rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="font-inter font-400 text-white text-lg">
              A Caluar já ajudou milhares de pessoas exatamente nessa situação.
            </p>
          </div>
          <Button
            href="https://wa.me/5531988508599?text=Quero%20começar%20agora"
            variant="accent"
            size="lg"
          >
            Quero começar agora
          </Button>
        </div>
      </div>
    </section>
  )
}
