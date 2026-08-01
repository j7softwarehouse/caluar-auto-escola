import { AdminProvider } from './context/AdminContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import StatsBar from './components/sections/StatsBar'
import Dores from './components/sections/Dores'
import Sobre from './components/sections/Sobre'
import Categorias from './components/sections/Categorias'
import Processo from './components/sections/Processo'
import Galeria from './components/sections/Galeria'
import Avaliacoes from './components/sections/Avaliacoes'
import Faq from './components/sections/Faq'
import ContactForm from './components/sections/ContactForm'
import LocationInfo from './components/sections/LocationInfo'
import Footer from './components/layout/Footer'
import AdminToggle from './components/admin/AdminToggle'
import PromoPopup from './components/ui/PromoPopup'

function App() {
  return (
    <AdminProvider>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBar />
      <Dores />
      <Sobre />
      <Categorias />
      <Processo />
      <Galeria />
      <Avaliacoes />
      <Faq />
      <ContactForm />
      <LocationInfo />
      <Footer />
      <AdminToggle />
      <PromoPopup />
    </AdminProvider>
  )
}

export default App
