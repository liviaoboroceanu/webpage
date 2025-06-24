import React from 'react';
import { Link } from 'react-router-dom'; // For the clickable cards and Contact Us button

const PricingPage = () => {
  return (
    <div className="pricing-page-container">
      <main className="main-content"> {/* Reuse main-content for consistent width/padding */}
        <section className="pricing-header-section">
          <h1 className="pricing-main-title">Choose the Right Plan for You</h1>
        </section>

        <section className="pricing-plans-grid">
          {/* Plan 1: 14 Days Free Trial */}
          <Link to="/payment-details/14-days-free-trial" className="pricing-card-link">
            <div className="pricing-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">€0</h2>
              <p className="plan-period">14 Days Free Trial</p>
              <p className="plan-description">
                Try Acadova free for 14 days and explore every feature included in our Basic Plan
              </p>
              <ul className="plan-features">
                <li><span className="checkmark">✔</span> NeuroLearn AI Chat</li>
                <li><span className="checkmark">✔</span> Quiz Generator</li>
                <li><span className="checkmark">✔</span> Mind Map Tool</li>
                <li><span className="checkmark">✔</span> Unlimited Course & Class Creation</li>
                <li><span className="checkmark">✔</span> Document Uploads</li>
              </ul>
            </div>
          </Link>

          {/* Plan 2: Basic Plan */}
          <Link to="/payment-details/basic-plan" className="pricing-card-link">
            <div className="pricing-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">€10.99 <span>/per month</span></h2>
              <p className="plan-period">Basic Plan</p>
              <p className="plan-description">Includes:</p>
              <ul className="plan-features">
                <li><span className="checkmark">✔</span> NeuroLearn AI Chat</li>
                <li><span className="checkmark">✔</span> Quiz Generator</li>
                <li><span className="checkmark">✔</span> Mind Map Tool</li>
                <li><span className="checkmark">✔</span> Unlimited Course & Class Creation</li>
                <li><span className="checkmark">✔</span> Document Uploads</li>
              </ul>
            </div>
          </Link>

          {/* Plan 3: Premium Plan */}
          <Link to="/payment-details/premium-plan" className="pricing-card-link">
            <div className="pricing-card premium-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">€49.99 <span>/per month</span></h2>
              <p className="plan-period">Premium Plan</p>
              <p className="plan-description">Includes all Basic Plan features but also:</p>
              <ul className="plan-features">
                <li><span className="checkmark">✔</span> AI Avatar Teacher</li>
                <li><span className="checkmark">✔</span> Podcast Generator</li>
                <li><span className="checkmark">✔</span> Multi-Level Quiz Generator</li>
                <li><span className="checkmark">✔</span> Multi-Level Test Generator</li>
                <li><span className="checkmark">✔</span> Download Your Mind Map</li>
              </ul>
            </div>
          </Link>

          {/* Plan 4: Pay as you GO */}
          <Link to="/payment-details/pay-as-you-go" className="pricing-card-link">
            <div className="pricing-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">Pay as you GO</h2>
              <p className="plan-description">
                No need to switch plans and overpay for a Premium Plan. Simply choose his Basic Plan or Premium Plan you want to add to your Basic Plan and pay only for what you need.
              </p>
            </div>
          </Link>

          {/* Plan 5: Build Your Own Plan */}
          <Link to="/payment-details/build-your-own-plan" className="pricing-card-link">
            <div className="pricing-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">Build Your Own Plan</h2>
              <p className="plan-description">
                Only need to generate a podcast from your favourite books, use the AI and your avatar as your teacher. No problem, pay only for the exact tool you use.
              </p>
            </div>
          </Link>

          {/* Plan 6: Enterprise - Link to Contact Us page as per design */}
          <Link to="/contact" className="pricing-card-link">
            <div className="pricing-card">
              <div className="pricing-icon">⚡</div> {/* Lightning bolt icon */}
              <h2 className="plan-price">Enterprise</h2>
              <p className="plan-description">
                For companies with more than 1,000 people
              </p>
            </div>
          </Link>
        </section>

        {/* Bottom Contact Us Section */}
        <section className="pricing-contact-section">
          <Link to="/contact" className="pricing-contact-button">Contact Us</Link>
        </section>
      </main>

      {/* Footer is handled by App.js */}
    </div>
  );
};

export default PricingPage;
