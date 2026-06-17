export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-manrope font-700 mb-4">CALUAR</h3>
          <p className="text-sm text-white/80">Centro de Formação de Condutores</p>
        </div>
        <div>
          <h4 className="font-manrope font-700 mb-4">Navegação</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li><a href="#sobre" className="hover:text-accent">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-accent">Serviços</a></li>
            <li><a href="#contato" className="hover:text-accent">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-manrope font-700 mb-4">Categorias</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li><a href="#" className="hover:text-accent">CNH A</a></li>
            <li><a href="#" className="hover:text-accent">CNH B</a></li>
            <li><a href="#" className="hover:text-accent">CNH AB</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-manrope font-700 mb-4">Contato</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>(31) 3563-3619</li>
            <li>cfccaluar@hotmail.com</li>
            <li>Rua Domingos Michel, 120</li>
            <li>Itabirito, MG</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
        <p>© 2024 Caluar Auto Escola. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
