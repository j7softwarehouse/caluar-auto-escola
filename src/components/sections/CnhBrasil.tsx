import Button from '../ui/Button'

export default function CnhBrasil() {
  return (
    <section className="py-20 bg-accent text-dark">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-manrope font-700 mb-6">CNH Brasil — Gratuita para quem precisa</h2>
        <p className="text-lg mb-8">Programa de habilitacao subsidiada para pessoas em vulnerabilidade</p>
        <Button href="https://wa.me/5531988508599" variant="primary" size="lg">
          Verificar minha elegibilidade
        </Button>
      </div>
    </section>
  )
}
