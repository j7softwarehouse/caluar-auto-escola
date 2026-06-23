import { useState } from 'react'
import Button from '../ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.name}. Email: ${formData.email} | Tel: ${formData.phone}. ${formData.message}`
    const waLink = `https://wa.me/553135633619?text=${encodeURIComponent(msg)}`
    window.open(waLink, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contato" className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <div className="flex flex-col justify-center">
            <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-4">
              Contato
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-6 leading-tight">
              Sua CNH pode começar hoje
            </h2>
            <p className="text-lg font-inter font-400 text-tx-muted mb-6">
              Fale com a equipe da Caluar e descubra a melhor forma de iniciar sua habilitação
            </p>
            <p className="text-base text-tx-muted font-inter font-300">
              Preencha o formulário e nossa equipe entra em contato em até 24 horas.
            </p>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="w-full px-5 py-4 border border-border rounded-lg bg-white font-inter text-sm focus:outline-none focus:border-accent transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="seu@email.com"
            required
            className="w-full px-5 py-4 border border-border rounded-lg bg-white font-inter text-sm focus:outline-none focus:border-accent transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="(31) 9 9999-9999"
            className="w-full px-5 py-4 border border-border rounded-lg bg-white font-inter text-sm focus:outline-none focus:border-accent transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
            <Button type="submit" variant="accent" size="lg" className="w-full">
              Enviar via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
