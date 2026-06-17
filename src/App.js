import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CredentialsBar from './components/sections/CredentialsBar';
import About from './components/sections/About';
import Differentials from './components/sections/Differentials';
import Services from './components/sections/Services';
import CnhBrasil from './components/sections/CnhBrasil';
import Gallery from './components/sections/Gallery';
import Reviews from './components/sections/Reviews';
import Faq from './components/sections/Faq';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';
import AdminToggle from './components/admin/AdminToggle';
import PromoPopup from './components/ui/PromoPopup';
function App() {
    return (_jsxs(AdminProvider, { children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(CredentialsBar, {}), _jsx(About, {}), _jsx(Differentials, {}), _jsx(Services, {}), _jsx(CnhBrasil, {}), _jsx(Gallery, {}), _jsx(Reviews, {}), _jsx(Faq, {}), _jsx(ContactForm, {}), _jsx(Footer, {}), _jsx(AdminToggle, {}), _jsx(PromoPopup, {})] }));
}
export default App;
//# sourceMappingURL=App.js.map