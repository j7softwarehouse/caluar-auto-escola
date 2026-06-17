export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 py-16">
          {/* Col 1 - Logo & Slogan */}
          <div>
            <h3 className="text-2xl font-manrope font-800 mb-4">CALUAR</h3>
            <p className="text-sm font-inter text-white/55 leading-relaxed mb-6">
              Formando condutores seguros<br />desde 2002 em Itabirito/MG
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/8 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors text-white/50">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-white/8 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors text-white/50">
                in
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
                <a href="tel:+5531988508599" className="hover:text-accent transition-colors">(31) 3563-3619</a>
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
