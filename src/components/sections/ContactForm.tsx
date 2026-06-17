import { useState } from 'react'
import Button from '../ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${formData.name}. Email: ${formData.email} | Tel: ${formData.phone}. ${formData.message}`
    const waLink = `https://wa.me/5531988508599?text=${encodeURIComponent(msg)}`
    window.open(waLink, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contato" className="bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-manrope font-700 mb-12 text-primary">Fale com a gente agora</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="seu@email.com"
            required
            className="w-full p-4 border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="(31) 9 9999-9999"
            className="w-full p-4 border border-gray-300 rounded-lg"
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
    </section>
  )
}
