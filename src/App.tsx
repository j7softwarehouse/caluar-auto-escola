import { AdminProvider } from './context/AdminContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import HighlightsCarousel from './components/sections/HighlightsCarousel'
import CredentialsBar from './components/sections/CredentialsBar'
import Dores from './components/sections/Dores'
import About from './components/sections/About'
import Differentials from './components/sections/Differentials'
import Services from './components/sections/Services'
import CnhBrasil from './components/sections/CnhBrasil'
import Process from './components/sections/Process'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import TestimonialsWithPhotos from './components/sections/TestimonialsWithPhotos'
import ApprovedGallery from './components/sections/ApprovedGallery'
import Faq from './components/sections/Faq'
import ContactForm from './components/sections/ContactForm'
import CoursesSpecialized from './components/sections/CoursesSpecialized'
import LocationInfo from './components/sections/LocationInfo'
import Footer from './components/layout/Footer'
import AdminToggle from './components/admin/AdminToggle'
import PromoPopup from './components/ui/PromoPopup'

function App() {
  return (
    <AdminProvider>
      <Navbar />
      <Hero />
      <HighlightsCarousel />
      <CredentialsBar />
      <Dores />
      <About />
      <Differentials />
      <Services />
      <CnhBrasil />
      <Process />
      <Gallery />
      <Testimonials />
      <TestimonialsWithPhotos />
      <ApprovedGallery />
      <Faq />
      <ContactForm />
      <CoursesSpecialized />
      <LocationInfo />
      <Footer />
      <AdminToggle />
      <PromoPopup />
    </AdminProvider>
  )
}

export default App
