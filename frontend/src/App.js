import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage component you'll create next
// Import placeholder pages you'll create later
import FeaturesPage from './pages/FeaturesPage'; // Create this file soon
import PartnersPage from './pages/PartnersPage'; // Create this file soon
import AboutUsPage from './pages/AboutUsPage';   // Create this file soon
import ContactPage from './pages/ContactPage';   // Create this file soon

function App() {
  return (
    <Router>
      {/* Apply a global class for styling */}
      <div className="app-container">
        {/* Potentially add a global Header component here later */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Potentially add a global Footer component here later */}
      </div>
    </Router>
  );
}

export default App;
