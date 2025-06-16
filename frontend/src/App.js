import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage component you'll create next

function App() {
  return (
    <Router>
      {/* Apply a global class for styling */}
      <div className="app-container">
        {/* Potentially add a global Header component here later */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add routes for other pages (Features, Pricing, etc.) here as you create them */}
        </Routes>

        {/* Potentially add a global Footer component here later */}
      </div>
    </Router>
  );
}

export default App;
