import Button from '../ui/Button'

export default function Hero() {
  const categories = ['Cat. A', 'Cat. B', 'Cat. AB', 'Cat. D']

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
                Sua CNH pode estar muito mais perto do que você imagina.
              </h1>

              {/* Subheading */}
              <p className="text-lg font-inter font-400 text-white/80 mb-10 leading-relaxed">
                Pare de adiar sua independência.<br />
                Aprenda a dirigir com quem entende que confiança vem antes da aprovação.
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

              {/* CTA Button - UNICO (sem "Conhecer a escola") */}
              <div className="mb-8">
                <Button
                  href="https://wa.me/5531988508599?text=Quero%20minha%20CNH"
                  variant="accent"
                  size="lg"
                >
                  Quero minha CNH
                </Button>
              </div>

              {/* Prova Social */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <span className="text-white/70 font-inter text-sm">4.6 no Google</span>
                <span className="text-white/30">|</span>
                <span className="text-white/70 font-inter text-sm">+5.000 alunos formados</span>
                <span className="text-white/30">|</span>
                <span className="text-white/70 font-inter text-sm">+20 anos em Itabirito</span>
              </div>
            </div>

            {/* Right Column - Hero Card */}
            <div className="hidden md:flex">
              <div className="bg-white/6 backdrop-blur-md border border-white/12 rounded-2xl p-6 w-full">
                {/* Stats Grid 2x2 */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/7 border border-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-manrope font-800 text-white">24</div>
                    <div className="text-xs font-inter text-white/40 uppercase mt-1">Anos</div>
                  </div>
                  <div className="bg-white/7 border border-accent/25 rounded-lg p-4 text-center">
                    <div className="text-3xl font-manrope font-800 text-accent">4.6</div>
                    <div className="text-xs font-inter text-white/40 uppercase mt-1">Google</div>
                  </div>
                  <div className="bg-white/7 border border-accent/25 rounded-lg p-4 text-center">
                    <div className="text-3xl font-manrope font-800 text-accent">100%</div>
                    <div className="text-xs font-inter text-white/40 uppercase mt-1">DETRAN</div>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg overflow-hidden bg-black/20">
                    <img src="/images/img1.JPG" alt="Equipe Caluar" className="w-full h-24 object-cover brightness-75" />
                    <div className="px-3 py-2 bg-black/30 text-xs text-white/65">Equipe Caluar</div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-black/20">
                    <img src="/images/img3.jpeg" alt="Turma aprovada" className="w-full h-24 object-cover brightness-75" />
                    <div className="px-3 py-2 bg-black/30 text-xs text-white/65">Turma aprovada</div>
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
