import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import ContactNowNotch from './components/ContactNowNotch.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Analytics from './components/Analytics.jsx'
import Schema from './components/Schema.jsx'
import { GLOBAL_SCHEMA } from './config/schema.js'
import HomePage from './pages/HomePage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import './styles/components.css'

function App() {
  return (
    <BrowserRouter>
      <Schema data={GLOBAL_SCHEMA} />
      <Analytics />
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gc-navy antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <ContactNowNotch />
      </div>
    </BrowserRouter>
  )
}

export default App
