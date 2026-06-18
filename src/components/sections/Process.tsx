export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Matrícula',
      description: 'Orientamos você sobre documentação, categoria ideal e condições de pagamento para que você comece com segurança e sem dúvidas.'
    },
    {
      num: '02',
      title: 'Aulas Teóricas',
      description: 'Aulas presenciais ou on-line, salas informatizadas e preparação focada no que realmente cai na prova.'
    },
    {
      num: '03',
      title: 'Aulas Práticas',
      description: 'Veículos modernos com duplo comando, motopista própria e instrutores pacientes para você ganhar mais confiança.'
    },
    {
      num: '04',
      title: 'Aprovação',
      description: 'No dia do exame, você conta com apoio da equipe e toda preparação necessária para chegar mais tranquilo, confiante e preparado para a prova.'
    }
  ]

  return (
    <section className="bg-primary relative overflow-hidden py-20">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-3">
            Como funciona
          </div>
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-white mb-4 leading-relaxed">
            Um processo simples, com todo suporte e sem complicação
          </h2>
          <p className="text-base font-inter font-300 text-white/50 max-w-2xl mx-auto mb-2 leading-relaxed">
            Da matrícula até sua CNH em mãos
          </p>
          <p className="text-lg font-inter font-300 text-white/45 max-w-2xl mx-auto leading-relaxed">
            Cuidamos de tudo para você se preocupar apenas em aprender.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-4 gap-0 relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-[30px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent md:block hidden" />

          {steps.map((step, idx) => (
            <div key={idx} className="px-4 text-center relative z-1">
              {/* Step Number Circle */}
              <div className="w-[60px] h-[60px] rounded-full bg-accent/10 border border-accent/22 flex items-center justify-center mx-auto mb-5 transition-all duration-250 hover:bg-accent hover:text-primary hover:shadow-[0_0_0_8px_rgba(245,168,0,0.1)]">
                <div className="font-manrope font-800 text-lg text-accent">
                  {step.num}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-sm font-manrope font-600 text-white mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs font-inter font-300 text-white/42 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
