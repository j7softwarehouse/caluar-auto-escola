import Button from '../ui/Button'

const dores = [
  { title: 'Tenho medo de nao passar na prova' },
  { title: 'Acho que vou demorar muito' },
  { title: 'Nao sei se consigo pagar' },
  { title: 'Tenho vergonha de errar na aula' },
  { title: 'Nao sei por onde comecar' },
  { title: 'Ja reprovei antes' },
]

export default function Dores() {
  return (
    <section className="bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
            Voce tem medo de reprovar?
          </h2>
          <p className="text-lg font-inter font-400 text-tx-muted max-w-2xl mx-auto leading-relaxed">
            E normal. A maioria dos nossos alunos chegou com o mesmo medo. A diferenca e que aqui a gente cuida disso desde o primeiro dia.
          </p>
        </div>

        {/* Grid de dores */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {dores.map((dor, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-accent rounded-lg p-6 fade-in"
            >
              <p className="font-inter font-500 text-tx text-base">
                {dor.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="bg-gradient-to-r from-primary to-primary-mid rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="font-inter font-400 text-white text-lg">
              A Caluar ja ajudou mais de 5.000 pessoas exatamente nessa situacao.
            </p>
          </div>
          <Button
            href="https://wa.me/5531988508599?text=Quero%20comecar%20agora"
            variant="accent"
            size="lg"
          >
            Quero comecar agora
          </Button>
        </div>
      </div>
    </section>
  )
}
