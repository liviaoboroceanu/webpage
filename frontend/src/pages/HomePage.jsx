import React from 'react';

const HomePage = () => {
  // Function to handle the "Try Acadova Now" button click
  const handleTryAcadovaClick = () => {
    window.location.href = 'https://www.acadova.com/';
  };

  return (
    <div className="home-page-container">
      {/* Navbar Section (Simplified for now, will expand later) */}
      <nav className="navbar">
        <h1 className="navbar-title">Webpage</h1>
        {/* Navigation links would go here later */}
      </nav>

      <main className="main-content">
        {/* Welcome to Acadova Section */}
        <section className="welcome-section">
          {/* Character Image */}
          <div className="welcome-image-wrapper">
            <img
              src="https://placehold.co/150x150/000000/FFFFFF?text=Character" // Placeholder image for now
              alt="Welcome Character"
              className="welcome-character-image"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/000000/FFFFFF?text=Error'; }} // Fallback
            />
          </div>
          {/* Text Content */}
          <div className="welcome-text-content">
            <h2 className="section-title welcome-title">Welcome to Acadova</h2>
            <p className="section-description">
              Imagine a platform built just for you, designed to understand exactly how you learn, focus, and absorb. It doesn't just give answers, but also shows examples, provides hints, and helps you master every step of the way. No more struggles or wasted time.
            </p>
            <p className="section-description">
              Say goodbye to overwhelm and hello to confidence, clarity, because Acadova is here to make your studies easier.
            </p>
          </div>
        </section>

        {/* Middle Visual Section (Gradient Box) */}
        <section className="middle-visual-section">
          <p className="middle-visual-text">Placeholder for interactive content / visual element</p>
        </section>

        {/* What Do We Offer? Section */}
        <section className="what-we-offer-section">
          <h2 className="section-title">What Do We Offer?</h2>
          <div className="feature-grid">
            {/* Feature Cards */}
            {[
              "Build Your Own Classes", "Upload Your Own Documents", "Smart Class Notes",
              "Chat Box", "Subject Breakdown", "Gap Analysis",
              "AI Avatar Teacher", "Unique Quizzes", "Mind Maps Visualise Topics",
              "Take a Quiz" // Last one has different style in Uizard, handling with extra classes
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${feature === "Take a Quiz" ? 'take-a-quiz-card' : ''}`}
              >
                {feature}
              </div>
            ))}
          </div>
          {/* "Try Acadova Now" Button & Character */}
          <div className="try-acadova-cta">
            <button
              onClick={handleTryAcadovaClick}
              className="try-acadova-button"
            >
              Try Acadova Now
            </button>
            <img
              src="https://placehold.co/150x150/000000/FFFFFF?text=Character2" // Another placeholder image
              alt="Smiling Character"
              className="try-acadova-character"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/000000/FFFFFF?text=Error'; }} // Fallback
            />
          </div>
        </section>

        {/* What statistics say? Section */}
        <section className="statistics-section">
            <div className="statistics-image-wrapper">
                <img
                    src="https://placehold.co/200x200/000000/FFFFFF?text=Character3" // Placeholder for the character with glasses
                    alt="Character with glasses"
                    className="statistics-character-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/000000/FFFFFF?text=Error'; }} // Fallback
                />
            </div>
            <div className="statistics-content">
                <h2 className="section-title">What statistics say?</h2>
                <div className="stats-grid">
                    {/* Placeholder for individual statistics/charts - these would ideally be separate components */}
                    <div className="stat-item">
                        <div className="chart-placeholder">Chart 1 Placeholder</div>
                        <p className="mt-2 text-sm text-gray-300">Improve results in just 2 weeks</p>
                    </div>
                    <div className="stat-item">
                        <div className="chart-placeholder">Chart 2 Placeholder</div>
                        <p className="mt-2 text-sm text-gray-300">Save up to 80% of your study time</p>
                    </div>
                    <div className="stat-item">
                        <div className="chart-placeholder">Chart 3 Placeholder</div>
                        <p className="mt-2 text-sm text-gray-300">Cut exam stress by 60%</p>
                    </div>
                    <div className="stat-item">
                        <div className="chart-placeholder">Chart 4 Placeholder</div>
                        <p className="mt-2 text-sm text-gray-300">Boost your retention by up to 3x</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Customer Reviews Section (Placeholder for now) */}
        <section className="customer-reviews-section">
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-description">Customer review content will go here. This is likely dynamic from the backend.</p>
          {/* Example review cards would be mapped here */}
          <div className="review-grid">
            <div className="review-card">
              <p className="reviewer-name">Reviewer Name 1</p>
              <p className="review-text">"Acadova has transformed my learning! Highly recommend."</p>
            </div>
            <div className="review-card">
              <p className="reviewer-name">Reviewer Name 2</p>
              <p className="review-text">"The AI teacher is a game-changer. So intuitive."</p>
            </div>
            <div className="review-card">
              <p className="reviewer-name">Reviewer Name 3</p>
              <p className="review-text">"Finally, a platform that understands my study style."</p>
            </div>
          </div>
        </section>

        {/* Trusted By Section (Placeholder for now) */}
        <section className="trusted-by-section">
          <h2 className="section-title">Trusted By</h2>
          <div className="logo-grid">
            {/* Placeholder for company logos */}
            <img src="https://placehold.co/100x50/333333/FFFFFF?text=NVIDIA" alt="NVIDIA Logo" className="company-logo" />
            <img src="https://placehold.co/100x50/333333/FFFFFF?text=AWS" alt="AWS Logo" className="company-logo" />
            <img src="https://placehold.co/100x50/333333/FFFFFF?text=Microsoft" alt="Microsoft Logo" className="company-logo" />
            <img src="https://placehold.co/100x50/333333/FFFFFF?text=Google" alt="Google Logo" className="company-logo" />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Acadova. All rights reserved.</p>
        <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;