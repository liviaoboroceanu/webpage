import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container">
      <main className="main-content"> {/* Reuse main-content for consistent width/padding */}
        <section className="privacy-policy-section">
          <h1 className="privacy-page-title">Privacy Policy</h1>

          <div className="policy-intro">
            <p className="policy-paragraph">
              Welcome to Acadova, your personalised AI-powered study companion. Your privacy is important to us, and this policy explains how we handle your data in a clear, transparent manner. We use several layers of encryption, regulation and other data protection laws to keep your information safe and in your control.
            </p>
          </div>

          {/* 1. Who We Are */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">1. Who We Are</h2>
            <p className="policy-paragraph policy-sub-text">
              Registered in England and Wales<br />
              Registered Address: First Floor, 250 Old Street, Darfford, London, UK<br />
              Contact: <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a>
            </p>
          </div>

          {/* 2. What Data We Collect */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">2. What Data We Collect</h2>
            <p className="policy-paragraph policy-sub-text">We collect the following types of data:</p>
            <p className="policy-paragraph policy-sub-text-bold">Information you provide us:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Name, email address, password, your academic interests or study goals, documents or materials you upload (e.g., slides, PDFs, notes)</li>
            </ul>
            <p className="policy-paragraph policy-sub-text-bold">Automatically Collected Data:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Device information: browser type, IP address</li>
              <li className="policy-list-item">Usage data: how you interact with the platform (e.g., features used)</li>
              <li className="policy-list-item">Cookies and similar tracking technologies (see section 7)</li>
            </ul>
            <p className="policy-paragraph policy-sub-text-bold">AI-Personalisation Data:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Learning preferences</li>
              <li className="policy-list-item">Interaction data used to improve personalised suggestions, quizzes, and explanations</li>
            </ul>
          </div>

          {/* 3. How We Use Your Data */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">3. How We Use Your Data</h2>
            <p className="policy-paragraph policy-sub-text">We process your data when we have a lawful basis to do so.</p>
            <p className="policy-paragraph policy-sub-text-bold">Here's how and why:</p>
            <ul className="policy-list">
              <li className="policy-list-item"><span className="policy-list-item-bold">Service Provision - Personalising your study experience:</span> Legitimate interest / Consent</li>
              <li className="policy-list-item"><span className="policy-list-item-bold">Improving platform features & AI accuracy:</span> Legitimate interest / Communicating platform updates, sending optional tips & promotions: Complying with legal obligations / Legal requirement</li>
            </ul>
          </div>

          {/* 4. Your Rights (Under GDPR) */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">4. Your Rights (Under GDPR)</h2>
            <p className="policy-paragraph policy-sub-text">You have the right to your data:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Access – request a copy of your personal data</li>
              <li className="policy-list-item">Rectification – ask to correct inaccurate information</li>
              <li className="policy-list-item">Deletion – ask us to delete your data (right to be forgotten)</li>
              <li className="policy-list-item">Restriction – ask us to limit how we use your data</li>
              <li className="policy-list-item">Withdraw Consent – At any time, without affecting past use</li>
              <li className="policy-list-item">Objection – to our use of your data (e.g., direct marketing)</li>
              <li className="policy-list-item">Email us at <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a> to make any of these requests.</li>
            </ul>
          </div>

          {/* 5. How We Protect Your Data */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">5. How We Protect Your Data</h2>
            <p className="policy-paragraph policy-sub-text">Your data is stored securely, encrypted securely, and only accessible by authorised personnel. We follow best practices including:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Data encryption</li>
              <li className="policy-list-item">Secure cloud storage (AWS, Microsoft)</li>
              <li className="policy-list-item">Access controls</li>
              <li className="policy-list-item">Regular system audits</li>
            </ul>
          </div>

          {/* 6. Third Party Services */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">6. Third Party Services</h2>
            <p className="policy-paragraph policy-sub-text">We use trusted services for cloud, analytics, and AI support. These partners are GDPR-compliant and only access data when strictly necessary. Some services may be located outside the UK/EU, in which case we use safeguards like Standard Contractual Clauses (SCCs).</p>
          </div>

          {/* 7. Cookies & Tracking */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">7. Cookies & Tracking</h2>
            <p className="policy-paragraph policy-sub-text">We use cookies to:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Remember your preference (remember settings, preferences)</li>
              <li className="policy-list-item">Analyse traffic and platform performance</li>
              <li className="policy-list-item">Personalise content and provide features</li>
            </ul>
          </div>

          {/* 8. Data Retention */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">8. Data Retention</h2>
            <p className="policy-paragraph policy-sub-text">We keep your data only as long as necessary:</p>
            <ul className="policy-list">
              <li className="policy-list-item">Account information: Kept as long as you use the platform</li>
              <li className="policy-list-item">Uploaded content: Kept for as long as you use the platform, or until deleted</li>
              <li className="policy-list-item">Anonymised data: Data is anonymised after 12 months of inactivity</li>
            </ul>
          </div>

          {/* 9. Children's Privacy (COPPA) */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">9. Children's Privacy (COPPA)</h2>
            <p className="policy-paragraph policy-sub-text">Acadova is not intended for users under 13 years old without parental consent. If you're a parent or guardian and believe your child has used our platform, please contact us to review or delete their data.</p>
          </div>

          {/* 10. Updates to This Policy */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">10. Updates to This Policy</h2>
            <p className="policy-paragraph policy-sub-text">We may update this policy from time to time. Major changes will be clearly communicated via email or app notifications. You'll always have the option to review and accept updates when they occur.</p>
          </div>

          {/* Contact Us Section at the bottom of the policy */}
          <div className="policy-section-block">
            <h2 className="policy-section-title">Contact Us</h2>
            <p className="policy-paragraph policy-sub-text">Have questions or concerns about your privacy?</p>
            <p className="policy-paragraph policy-sub-text-bold">Live Chat support</p>
            <p className="policy-paragraph policy-sub-text">Email: <a href="mailto:techsupport@acadova.com" className="policy-link">techsupport@acadova.com</a></p>
          </div>

        </section>
      </main>
      {/* Footer is handled by App.js */}
    </div>
  );
};

export default PrivacyPolicyPage;
