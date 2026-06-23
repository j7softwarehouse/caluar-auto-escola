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
                Conquiste sua liberdade de dirigir com quem é especialista em aprovação.
              </h1>

              {/* Subheading */}
              <p className="text-lg font-inter font-400 text-white/80 mb-10 leading-relaxed">
                Deixe a insegurança para trás.<br />
                Com nossos instrutores pacientes e 24 anos de experiência, sua aprovação é certa.
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
              <div className="mb-6">
                <Button
                  href="https://wa.me/553135633619?text=Oi%20Caluar,%20quero%20minha%20CNH."
                  variant="accent"
                  size="lg"
                >
                  Quero minha CNH
                </Button>
              </div>

              {/* Facilidade Badge */}
              <div className="text-sm font-inter font-300 text-white/70 flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Parcelamento em até 12x
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Matrícula 100% online
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Primeiras aulas + teste grátis
                </span>
              </div>

            </div>

            {/* Right Column - Hero Card */}
            <div className="hidden md:flex">
              <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 w-full shadow-2xl">
                {/* Stats Grid 2x2 */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-accent/30 transition-all">
                    <div className="text-4xl font-manrope font-800 text-white mb-2">24</div>
                    <div className="text-xs font-inter text-white/50 uppercase tracking-wide">Anos de Confiança</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6 text-center hover:border-accent/50 transition-all">
                    <div className="text-4xl font-manrope font-800 text-accent mb-2">4.6<span className="text-lg ml-1">⭐</span></div>
                    <div className="text-xs font-inter text-white/50 uppercase tracking-wide">Nota Google</div>
                  </div>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-accent/30 transition-all">
                    <div className="text-4xl font-manrope font-800 text-white mb-2">1mil+</div>
                    <div className="text-xs font-inter text-white/50 uppercase tracking-wide">Aprovados</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6 text-center hover:border-accent/50 transition-all">
                    <div className="text-4xl font-manrope font-800 text-accent mb-2">100%</div>
                    <div className="text-xs font-inter text-white/50 uppercase tracking-wide">Detran-MG</div>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg overflow-hidden bg-black/20">
                    <img src="/images/img1.JPG" alt="Motopista Própria" className="w-full h-24 object-cover brightness-75" />
                    <div className="px-3 py-2 bg-black/30 text-xs text-white/65">Motopista Própria</div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-black/20">
                    <img src="/images/img13.jpeg" alt="Turma aprovada" className="w-full h-24 object-cover brightness-75" />
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
