import { useState } from 'react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  const fechar = () => setAberto(false)

  return (
    <>
      <nav>
        <div className="nav-w">
          <a href="#" className="nav-logo">
            <img src="/logos/logo_caluar.jpeg" alt="Caluar" />
          </a>
          <ul className="nav-ul">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contato" className="btn btn-am" style={{ padding: '9px 20px', fontSize: '.875rem' }}>
                Fale conosco
              </a>
            </li>
          </ul>
          <button className="bur" id="bur" onClick={() => setAberto((v) => !v)} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className={`mob${aberto ? ' on' : ''}`} id="mob">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={fechar}>
            {link.label}
          </a>
        ))}
        <a href="#contato" className="btn btn-am" onClick={fechar}>
          Fale conosco
        </a>
      </div>
    </>
  )
}
