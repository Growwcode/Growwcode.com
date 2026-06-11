import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import CustomSoftwareDevelopmentPage from './pages/CustomSoftwareDevelopmentPage.jsx'
import WebDevelopmentServicesPage from './pages/WebDevelopmentServicesPage.jsx'
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage.jsx'
import ReactDevelopmentCompanyPage from './pages/ReactDevelopmentCompanyPage.jsx'
import AWSCloudServicesPage from './pages/AWSCloudServicesPage.jsx'
import AiMlProjectsPage from './pages/AiMlProjectsPage.jsx'
import AiAgentsPage from './pages/AiAgentsPage.jsx'
import ItConsultingPage from './pages/ItConsultingPage.jsx'
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
            <Route path="/project-work" element={<PortfolioPage />} />
            <Route path="/portfolio" element={<Navigate to="/project-work" replace />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/custom-software-development" element={<CustomSoftwareDevelopmentPage />} />
            <Route path="/web-development-services" element={<WebDevelopmentServicesPage />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/react-development-company" element={<ReactDevelopmentCompanyPage />} />
            <Route path="/aws-cloud-services" element={<AWSCloudServicesPage />} />
            <Route path="/ai-ml-projects" element={<AiMlProjectsPage />} />
            <Route path="/ai-agents" element={<AiAgentsPage />} />
            <Route path="/it-consulting" element={<ItConsultingPage />} />
          </Routes>
        </main>
        <ContactNowNotch />
      </div>
    </BrowserRouter>
  )
}

export default App
