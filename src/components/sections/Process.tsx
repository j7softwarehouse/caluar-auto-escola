export default function Process() {
  const steps = [
    {
      num: '1',
      title: 'Agende sua avaliacao',
      description: 'Entre em contato e escolha o melhor horario para conhecer nossa escola.'
    },
    {
      num: '2',
      title: 'Comece as aulas teóricas',
      description: 'Aprenda as regras de trânsito, sinalizacao e seguranca com instrutores experientes.'
    },
    {
      num: '3',
      title: 'Aulas praticas na pista',
      description: 'Dirija com seguranca sob a orientacao de nossos instrutores credenciados.'
    },
    {
      num: '4',
      title: 'Aprovacao garantida',
      description: 'Com nosso acompanhamento, você estará 100% pronto para passar no DETRAN.'
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
          <h2 className="text-5xl md:text-6xl font-manrope font-800 text-white mb-4 leading-tight">
            Nosso <em className="text-accent italic">processo</em> e simples
          </h2>
          <p className="text-lg font-inter font-300 text-white/45 max-w-2xl mx-auto leading-relaxed">
            Acompanhamos voce do primeiro dia ate conseguir sua CNH com seguranca e confianca.
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
