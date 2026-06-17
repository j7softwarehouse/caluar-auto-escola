import Button from '../ui/Button'

export default function Map() {
  return (
    <section id="mapa" className="bg-primary/10 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 md:order-1">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-accent text-accent text-xs font-manrope font-700 uppercase tracking-wide">
              Visite nossa autoescola
            </div>

            <h2 className="text-5xl md:text-6xl font-manrope font-800 text-tx mb-6 leading-tight">
              Estamos em <em className="italic text-accent">Itabirito/MG</em>
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-lg font-inter font-400 text-tx-muted leading-relaxed">
                  Rua Domingos Michel, 120, Bairro Praia
                </p>
                <p className="text-lg font-inter font-400 text-tx-muted leading-relaxed mt-2">
                  Segunda a sexta: 8h as 18h<br />
                  Sabado: 8h as 12h
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  href="https://wa.me/5531988508599?text=Quero saber mais sobre a Caluar."
                  variant="accent"
                  size="lg"
                >
                  WhatsApp
                </Button>
                <Button
                  href="tel:+5531988508599"
                  variant="outline"
                  size="lg"
                >
                  Telefonar
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6783637850755!2d-43.8631!3d-20.468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3d3d3d3d3d3d3d3%3A0xa3d3d3d3d3d3d3d3!2sRua%20Domingos%20Michel%2C%20120%20-%20Praia%2C%20Itabirito%20-%20MG%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 'none', display: 'block' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
