import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import StatsBar from './components/sections/StatsBar'
import Dores from './components/sections/Dores'
import Categorias from './components/sections/Categorias'
import Sobre from './components/sections/Sobre'
import Processo from './components/sections/Processo'
import Avaliacoes from './components/sections/Avaliacoes'
import Galeria from './components/sections/Galeria'
import Faq from './components/sections/Faq'
import Contato from './components/sections/Contato'
import Mapa from './components/sections/Mapa'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBar />
      <Dores />
      <Categorias />
      <Sobre />
      <Processo />
      <Avaliacoes />
      <Galeria />
      <Faq />
      <Contato />
      <Mapa />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
