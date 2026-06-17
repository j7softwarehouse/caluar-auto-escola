import { AdminProvider } from './context/AdminContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import CredentialsBar from './components/sections/CredentialsBar'
import Dores from './components/sections/Dores'
import About from './components/sections/About'
import Differentials from './components/sections/Differentials'
import Services from './components/sections/Services'
import CnhBrasil from './components/sections/CnhBrasil'
import Process from './components/sections/Process'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import Faq from './components/sections/Faq'
import ContactForm from './components/sections/ContactForm'
import Map from './components/sections/Map'
import Footer from './components/layout/Footer'
import AdminToggle from './components/admin/AdminToggle'
import PromoPopup from './components/ui/PromoPopup'

function App() {
  return (
    <AdminProvider>
      <Navbar />
      <Hero />
      <CredentialsBar />
      <Dores />
      <About />
      <Differentials />
      <Services />
      <CnhBrasil />
      <Process />
      <Gallery />
      <Reviews />
      <Faq />
      <ContactForm />
      <Map />
      <Footer />
      <AdminToggle />
      <PromoPopup />
    </AdminProvider>
  )
}

export default App
