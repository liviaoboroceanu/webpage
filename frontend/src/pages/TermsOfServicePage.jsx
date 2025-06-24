import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="terms-of-service-container">
      <main className="main-content"> {/* Reuse main-content for consistent width/padding */}
        <section className="policy-policy-section"> {/* Reusing policy-policy-section for similar styling */}
          <h1 className="privacy-page-title">Terms of Service</h1> {/* Reusing title style */}

          <div className="policy-intro">
            <p className="policy-paragraph">
              Welcome to Acadova, your AI-powered study platform. By using our website (collectively, the "Platform"), you agree to the following Terms of Service. Please read them carefully.
            </p>
          </div>

          {/* 1. Who We Are */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">1. Who We Are</h2>
            <p className="policy-paragraph policy-sub-text">Acadova Ltd</p>
            <p className="policy-paragraph policy-sub-text">Registered in England and Wales</p>
            <p className="policy-paragraph policy-sub-text">Registered Address: First Floor, 250 Old Street, Dartford, London, UK</p>
            <p className="policy-paragraph policy-sub-text">Contact: <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a></p>
          </div>

          {/* 2. Acceptance of Terms */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">2. Acceptance of Terms</h2>
            <p className="policy-paragraph policy-sub-text">
              By accessing or using Acadova, you confirm that you are at least 13 years old and agree to be legally bound by these Terms. If you do not agree, please do not use the platform.
            </p>
          </div>

          {/* 3. What We Offer */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">3. What We Offer</h2>
            <p className="policy-paragraph policy-sub-text-bold">Acadova provides:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Personalised study tools tailored to your learning style</li>
              <li className="policy-list-item">Smart quizzes and personalised study suggestions</li>
              <li className="policy-list-item">Detailed answers and in-depth personalised explanations</li>
              <li className="policy-list-item">A chatbot and AI teacher to guide your studies</li>
              <li className="policy-list-item">Regularly update or improve features regularly. Some features may be in beta and subject to change.</li>
            </ul>
          </div>

          {/* 4. User Responsibilities */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">4. User Responsibilities</h2>
            <p className="policy-paragraph policy-sub-text-bold">You agree to:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Provide accurate information when creating an account</li>
              <li className="policy-list-item">Keep your login credentials confidential</li>
              <li className="policy-list-item">Use the platform for lawful educational purposes only</li>
              <li className="policy-list-item">Not to copy, sell or redistribute any part or features of its features</li>
              <li className="policy-list-item">You are responsible for any content you Upload (notes, documents, PDFs). Make sure you have the right to use and share it.</li>
              <li className="policy-list-item">Email us at <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a> to make any of these requests.</li>
            </ul>
          </div>

          {/* 5. Intellectual Property */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">5. Intellectual Property</h2>
            <p className="policy-paragraph policy-sub-text">
              All content, branding, tools, and code on Acadova are owned by Acadova Ltd or our licensors. You may use the platform for personal learning only.
            </p>
            <p className="policy-paragraph policy-sub-text-bold">You may not:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Copy or redistribute our platform or features</li>
              <li className="policy-list-item">Sell or commercialise any part of Acadova without permission</li>
              <li className="policy-list-item">You retain ownership of your uploaded content, but you grant us a limited licence to use it to provide and improve your experience on Acadova.</li>
            </ul>
          </div>

          {/* 6. Account Termination */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">6. Account Termination</h2>
            <p className="policy-paragraph policy-sub-text">We may suspend or terminate your account if:</p>
            <ul className="policy-list">
              <li className="policy-list-item">You violate these Terms</li>
              <li className="policy-list-item">You misuse or abuse the platform</li>
              <li className="policy-list-item">You provide false information</li>
              <li className="policy-list-item">To dispute termination, contact us at <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a>.</li>
            </ul>
          </div>

          {/* 7. Disclaimers */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">7. Disclaimers</h2>
            <p className="policy-paragraph policy-sub-text">
              Acadova provides tools to support your learning journey but cannot guarantee academic outcomes. You are responsible for how you use the platform.
            </p>
            <p className="policy-paragraph policy-sub-text">
              The platform is provided "as is" and "as available". We do not guarantee the platform will be error-free or uninterrupted, though we work hard to minimise issues.
            </p>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">8. Limitation of Liability</h2>
            <p className="policy-paragraph policy-sub-text">
              To the fullest extent permitted by law, Acadova Ltd is not liable for:
            </p>
            <ul className="policy-list">
              <li className="policy-list-item">Any indirect, incidental, or consequential losses</li>
              <li className="policy-list-item">Damage to your device or content, or exam outcomes</li>
              <li className="policy-list-item">Third-party services or links accessed through our platform</li>
            </ul>
          </div>

          {/* 9. Updates to These Terms */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">9. Updates to These Terms</h2>
            <p className="policy-paragraph policy-sub-text">
              We may update these Terms from time to time. Significant changes will be shared via email or app notifications. Your continued use after updates means you accept the new Terms.
            </p>
          </div>

          {/* 10. Governing Law */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">10. Governing Law</h2>
            <p className="policy-paragraph policy-sub-text">
              These Terms are governed by the laws of England and Wales. Any disputes will be handled in courts located in the UK.
            </p>
          </div>

        </section>
      </main>
      {/* Footer is handled by App.js */}
    </div>
  );
};

export default TermsOfServicePage;