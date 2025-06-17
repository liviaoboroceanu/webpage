import React from 'react';
//importing Image files
import AcadovaLogo from '../assets/images/acadova_logo.jfif';
import NvidiaLogo from '../assets/images/b9d643df-911c-402a-a90f-46e2e218a837.png';
import holder from '../assets/images/f1ea8ef7-c4d2-4ed1-8c93-a2464c48ae23.png';
import aws from '../assets/images/0507bb98-8057-4e50-b70c-641f78fcd8ba.png';
import ladyone from '../assets/images/164b9e88-dcbe-4ad1-9c8a-8cfc24bc9d7e.png';
import ukInovate from '../assets/images/12be6c8b-c9d1-4227-9513-49441c8a5934.png';
import microsoft from '../assets/images/nforceit-partner-microsoft-logo.png';
import qlogo from '../assets/images/0b3657de-1910-4d6b-a8f3-63449cf16e5b.png';
import guyone from '../assets/images/0b88a620-905f-437c-a629-84326c074537.png';
import GoogleLogo from '../assets/images/pngimg.com - google_PNG19644.png';
import DonutChart from '../components/DonutChart';
import BarStatsChart from '../components/BarStatsChart';
import LineGraph from '../components/LineGraph';
import VerticalBarChart from '../components/VerticalBarChart';
import { Link } from 'react-router-dom'; // Add Link if it's not already there


const HomePage = () => {
  // Function to handle the "Try Acadova Now" button click
  const handleTryAcadovaClick = () => {
    window.location.href = 'https://www.acadova.com/';
  };

  // Data for the "Improve results in just 2 weeks" bar chart
  const resultsData = [
    { name: 'Bar1', value: 70, remaining: 30 }, // 70% yellow, 30% gray
    { name: 'Bar2', value: 60, remaining: 40 },
    { name: 'Bar3', value: 85, remaining: 15 },
    { name: 'Bar4', value: 50, remaining: 50 },
    { name: 'Bar5', value: 90, remaining: 10 },
  ]

    const stressData = [
    { name: 'A', value1: 30, value2: 25 },
    { name: 'B', value1: 40, value2: 30 },
    { name: 'C', value1: 35, value2: 20 },
    { name: 'D', value1: 50, value2: 28 },
    { name: 'E', value1: 45, value2: 15 },
    { name: 'F', value1: 60, value2: 22 },
    { name: 'G', value1: 55, value2: 18 },
    { name: 'H', value1: 70, value2: 25 },
    { name: 'I', value1: 65, value2: 10 },
    { name: 'J', value1: 80, value2: 12 },
    { name: 'K', value1: 75, value2: 8 },
    { name: 'L', value1: 90, value2: 15 },
  ];
  
  const retentionData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 40 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 95 },
  ];


  return (
    <div className="home-page-container">
      {/* Navbar Section (Simplified for now, will expand later) */}
      <nav className="navbar">
  <h1 className="navbar-title">Webpage</h1>
  <div className="navbar-links"> {/* New wrapper for links */}
    <Link to="/" className="navbar-link">Home</Link>
    <Link to="/features" className="navbar-link">Features</Link>
    <Link to="/partners" className="navbar-link">Partners</Link>
    <Link to="/about-us" className="navbar-link">About Us</Link>
    <Link to="/contact" className="navbar-link">Contact</Link>
  </div>
</nav>

      <main className="main-content">
        {/* Welcome to Acadova Section */}
        <section className="welcome-section">
          {/* Character Image */}
          <div className="welcome-image-wrapper">
            <img
              src={AcadovaLogo}
              alt="Welcome Character"
              className="welcome-character-image"
              //onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/000000/FFFFFF?text=Error'; }} // Fallback
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
              src={guyone}
              alt="Smiling Character"
              className="try-acadova-character"
              //onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/000000/FFFFFF?text=Error'; }} // Fallback
            />
          </div>
        </section>

        {/* What statistics say? Section */}
        <section className="statistics-section">
            <div className="statistics-image-wrapper">
                <img
                    src={ladyone}
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
                       <BarStatsChart data={resultsData} />
                       <p className="stat-description">Improve results in just 2 weeks</p>
                  
                    </div>
                    <div className="stat-item">
                        <DonutChart percentage={80} />
                        <p className="stat-description">Save up to 80% of your study time</p>
                    </div>
                    <div className="stat-item">
                        <LineGraph data={stressData} />
                        <p className="stat-description">cut exam stress by 60% </p>
                      
                    </div>
                    <div className="stat-item">
                        <VerticalBarChart data={retentionData} />
                        <p className="stat-description">Boost your retention by up to 3x</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Customer Reviews Section (Placeholder for now) */}
        <section className="customer-reviews-section">
          <h2 className="section-title">Customer Reviews</h2>
          <p className="section-description">Customer review content will go here.</p>
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
            <img src={NvidiaLogo} alt="NVIDIA Logo" className="company-logo" />
            <img src={aws} alt="AWS Logo" className="company-logo" />
            <img src={microsoft} alt="Microsoft Logo" className="company-logo" size="400px" />
            <img src={ukInovate} alt="ukinnovate" className="company-logo" />
            <img src={qlogo} alt="q logo" className="company-logo" />
            <img src={holder} alt="blue logo" className="company-logo" />
            <img src={GoogleLogo} alt="Google logo" className="company-logo" />
          </div>
        </section>
      </main>

      {/* Footer Section */}
<footer className="footer">
  <div className="footer-content-wrapper"> {/* New wrapper for layout */}
    <div className="footer-info"> {/* New div for left-aligned info */}
      <p className="footer-company-name">Acadova Limited, {new Date().getFullYear()}</p>
      <p className="footer-email">Email: <a href="mailto:techsupport@acadova.com" className="footer-link">techsupport@acadova.com</a></p>
    </div>
    <div className="footer-links"> {/* Existing div for right-aligned links */}
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms of Service</a>
        <a href="#" className="footer-link">Contact Us</a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HomePage;