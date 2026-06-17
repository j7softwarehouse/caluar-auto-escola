import { useState } from 'react'
import Button from '../ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Servicos', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-white backdrop-blur-xl py-4 shadow-sm">

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/images/logo.jpeg" alt="Caluar" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu + CTA */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter font-500 transition-colors text-sm text-primary hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Button href="https://wa.me/5531988508599?text=Oi%20Caluar!" variant="accent" size="md">
            Fale conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-medium hover:text-accent">
                {link.label}
              </a>
            ))}
            <Button href="https://wa.me/5531988508599?text=Oi%20Caluar!" variant="accent" className="w-full">
              Fale conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
