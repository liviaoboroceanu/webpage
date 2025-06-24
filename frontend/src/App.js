import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// Import placeholder pages you'll create later
import FeaturesPage from './pages/FeaturesPage'; // Create this file soon
import PartnersPage from './pages/PartnersPage'; // Create this file soon
import AboutUsPage from './pages/AboutUsPage';   // Create this file soon
import ContactPage from './pages/ContactPage';   // Create this file soon
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; 
import TermsOfServicePage from './pages/TermsOfServicePage';
import Header from './components/Header'; // Correct path: Header component is in 'components'
import PricingPage from './pages/PricingPage';
import PaymentDetailsPage from './pages/PaymentDetailsPage';

function App() {
  return (
    <Router>
      {/* Apply a global class for styling */}
      <div className="app-container">
        <Header /> {/* Render your Header component here */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/payment-details/:planName" element={<PaymentDetailsPage />} />
        </Routes>

        {/* Potentially add a global Footer component here later if not already in HomePage */}
      </div>
    </Router>
  );
}

export default App;
