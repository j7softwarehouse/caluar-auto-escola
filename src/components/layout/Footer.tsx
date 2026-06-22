export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          {/* Col 1 - Logo & Slogan */}
          <div>
            <div className="mb-4 h-12 w-32">
              <img
                src="/logos/logo_caluar_branca.jpg"
                alt="Caluar Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-sm font-inter text-white/55 leading-relaxed mb-8">
              Formando condutores seguros<br />desde 2002 em Itabirito/MG
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/caluar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-accent hover:text-dark rounded-lg flex items-center justify-center transition-all duration-300 text-white/70"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/caluar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-accent hover:text-dark rounded-lg flex items-center justify-center transition-all duration-300 text-white/70"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="currentColor"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 - Links rápidos */}
          <div>
            <h4 className="font-manrope font-600 text-xs text-white/40 uppercase tracking-widest mb-4">Links rápidos</h4>
            <ul className="text-sm font-inter text-white/65 space-y-3">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-accent transition-colors">Galeria</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 3 - Contato */}
          <div>
            <h4 className="font-manrope font-600 text-xs text-white/40 uppercase tracking-widest mb-4">Contato</h4>
            <div className="space-y-3 text-sm font-inter text-white/65">
              <div>
                <a href="tel:+553135633619" className="hover:text-accent transition-colors">(31) 3563-3619</a>
              </div>
              <div>
                <a href="mailto:cfccaluar@hotmail.com" className="hover:text-accent transition-colors">cfccaluar@hotmail.com</a>
              </div>
              <div>
                <div>Rua Domingos Michel, 120</div>
                <div>Praia, Itabirito/MG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-inter">
            <p className="text-white/35">© 2026 Auto Escola Caluar. Todos os direitos reservados.</p>
            <p className="text-white/45 hover:text-white/65 transition-colors">
              Desenvolvido por J7 Software House
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
