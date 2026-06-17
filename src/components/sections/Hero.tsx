import Button from '../ui/Button'

export default function Hero() {
  const categories = ['Cat. A', 'Cat. B', 'Cat. AB', 'Cat. C', 'Cat. D', 'Cat. E']

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/img2.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              {/* Badge */}
              <div className="inline-block mb-8 px-4 py-2 rounded-full border border-accent text-accent text-xs font-manrope font-700 uppercase tracking-wide">
                ★ Credenciada DETRAN-MG desde 2002
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-manrope font-800 text-white mb-6 leading-tight tracking-tight">
                Tirar sua CNH pode ser<br />mais facil do que voce imagina
              </h1>

              {/* Subheading */}
              <p className="text-lg font-inter font-400 text-white/80 mb-10 leading-relaxed">
                Aqui voce encontra instrutores <span className="font-600 text-white">pacientes de verdade</span>, parcelamento <span className="font-600 text-white">sem complicacao</span> e a gente <span className="font-600 text-white">cuida de tudo</span> ate voce passar.
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 border border-white/30 rounded-lg text-white text-sm font-manrope font-600 hover:bg-white/10 transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 mb-8">
                <Button
                  href="https://wa.me/5531988508599?text=Quero%20minha%20CNH"
                  variant="accent"
                  size="lg"
                >
                  Quero minha CNH
                </Button>
                <Button href="#sobre" variant="outline" size="lg">
                  Conhecer a escola
                </Button>
              </div>

              {/* Prova Social */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <span className="text-white/70 font-inter text-sm">4.9 no Google</span>
                <span className="text-white/30">|</span>
                <span className="text-white/70 font-inter text-sm">+5.000 alunos formados</span>
                <span className="text-white/30">|</span>
                <span className="text-white/70 font-inter text-sm">+20 anos em Itabirito</span>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Stats Cards */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-manrope font-800 text-white mb-2">23</div>
                  <div className="text-sm font-inter text-white/70 uppercase tracking-wide">Anos de tradição</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-accent/40 rounded-lg p-6 text-center">
                  <div className="text-4xl font-manrope font-800 text-accent mb-2">4.9</div>
                  <div className="text-sm font-inter text-white/70 uppercase tracking-wide">Nota Google</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-manrope font-800 text-white mb-2">5mil+</div>
                  <div className="text-sm font-inter text-white/70 uppercase tracking-wide">Aprovados</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-accent/40 rounded-lg p-6 text-center">
                  <div className="text-4xl font-manrope font-800 text-accent mb-2">100%</div>
                  <div className="text-sm font-inter text-white/70 uppercase tracking-wide">DETRAN-MG</div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-32 bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <div className="text-white font-manrope font-700 text-center">
                    <div className="text-sm">Equipe Caluar</div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-32 bg-gradient-to-br from-accent/70 to-accent flex items-center justify-center">
                  <div className="text-white font-manrope font-700 text-center">
                    <div className="text-sm">Turma aprovada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
