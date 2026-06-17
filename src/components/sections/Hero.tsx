import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/82 via-primary/65 to-primary/55" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block mb-8 px-4 py-2 rounded-full border border-accent text-accent text-sm font-manrope font-600">
            Desde 2002 em Itabirito/MG
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-manrope font-800 text-white mb-6 leading-tight">
            Sua CNH com quem cuida de voce de verdade
          </h1>

          {/* Subheading */}
          <p className="text-xl font-inter font-300 text-white/80 mb-8 leading-relaxed">
            Instrutores pacientes, aprovacao real e um atendimento que nao te deixa na mao.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="https://wa.me/5531988508599?text=Quero%20minha%20CNH"
              variant="accent"
              size="lg"
            >
              Quero minha CNH
            </Button>
            <Button href="#sobre" variant="outline" size="lg">
              Ver categorias
            </Button>
          </div>

          {/* Decorative border */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 border-2 border-accent/30 rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
