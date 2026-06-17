import Button from '../ui/Button'

export default function LocationInfo() {
  return (
    <section className="bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <div>
            <div className="text-accent font-inter font-600 text-xs uppercase tracking-widest mb-4">
              Localização
            </div>
            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-primary mb-4 leading-tight">
              Venha conhecer a Caluar
            </h2>
            <p className="text-lg font-inter font-400 text-tx-muted mb-8 leading-relaxed">
              Estamos prontos para ajudar você a dar o primeiro passo rumo à sua habilitação.
            </p>

            <div className="mb-8">
              <h3 className="font-manrope font-700 text-lg text-primary mb-2">Itabirito/MG</h3>
              <p className="text-base font-inter font-300 text-tx-muted">
                Rua Domingos Michel, 120 – Bairro Praia
              </p>
            </div>

            <div className="mb-10 bg-white border border-border rounded-lg p-6">
              <h4 className="font-manrope font-700 text-primary mb-4">Horários</h4>
              <p className="text-sm font-inter font-300 text-tx-muted mb-2">
                Segunda a sexta-feira: <span className="font-600 text-tx">7h às 20h</span>
              </p>
              <p className="text-sm font-inter font-300 text-tx-muted">
                Sábado: <span className="font-600 text-tx">9h às 12h</span>
              </p>
            </div>

            <p className="text-base font-inter font-300 text-tx-muted mb-8">
              Fale com nossa equipe, tire suas dúvidas e descubra a melhor forma de começar sua CNH.
            </p>

            <div className="flex gap-4">
              <Button
                href="https://wa.me/553135633619?text=Quero agendar uma visita"
                variant="accent"
                size="lg"
              >
                WhatsApp
              </Button>
              <Button
                href="tel:+553135633619"
                variant="outline"
                size="lg"
              >
                Ligar
              </Button>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6783637850755!2d-43.8631!3d-20.468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3d3d3d3d3d3d3d3%3A0xa3d3d3d3d3d3d3d3!2sRua%20Domingos%20Michel%2C%20120%20-%20Praia%2C%20Itabirito%20-%20MG%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
