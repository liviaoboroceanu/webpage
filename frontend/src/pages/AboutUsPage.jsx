import React from 'react';

// --- Image Imports for About Us Page ---
// You will need to replace these with your actual image paths and names
// Make sure to add these images to D:\projects\webpage\frontend\src\assets\images
// Removed aboutUsBanner as it will be CSS-driven

// Replaced direct image imports with placeholder URLs to avoid "Module not found" errors for now
 import characterWithGlasses from '../assets/images/bc8df7da-b082-414f-a341-e6f6ad50758d.png';
 import femaleCharacter from '../assets/images/e14b7cb8-e39d-4ef6-9495-ef302ee21c52.png';

// Removed placeholder imports for the 6 yellow circle icons as they will not be used for now


const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      {/* Navbar will come from App.js if you create a Header component there */}

      <main className="main-content"> {/* Reuse main-content for consistent width/padding */}

        {/* Learning That Works Your Way Banner (Now CSS-driven background) */}
        <section className="about-banner-section">
          {/* The background of this section is handled by CSS (in index.css) */}
          <h2 className="about-banner-text">Learning That Works Your Way<br/>Wherever You Are In Life</h2>
        </section>

        {/* Why We Believe / Smart Study Tool Section */}
        <section className="about-intro-section">
          <div className="about-intro-content">
            <div className="about-intro-text-block">
              <p className="about-intro-paragraph">
                At Acadova, we believe studying should feel clear, personal, and genuinely effective, no matter what you're learning or why.
              </p>
              <p className="about-intro-paragraph">
                Whether you're in high school, at university, taking an online course, studying for your degree, or just picking up a new skill out of curiosity, Acadova was built for you.
              </p>
              <p className="about-intro-paragraph about-highlight-text">
                This isn't just another study tool. It's your smart learning companion, powered by AI and immersive learning, designed to save you time, reduce stress, and help you reach your goals faster.
              </p>
            </div>
            <img
              src= {characterWithGlasses}
              alt="Character with glasses"
              className="about-intro-character"
              
            />
          </div>
          <div className="about-benefits-grid">
  <div className="about-benefit-item">
      <div className="benefit-circle">🧠</div> {/* Mind maps: Brain emoji */}
      <p className="benefit-text">Mind maps, visual connections, and interactive explanations.</p>
  </div>
  <div className="about-benefit-item">
      <div className="benefit-circle">💡</div> {/* Overwhelm/Focus: Lightbulb emoji */}
      <p className="benefit-text">No more overwhelm, focus on the exact logic I needed.</p>
  </div>
   <div className="about-benefit-item">
      <div className="benefit-circle">🎯</div> {/* Missed topics: Target emoji */}
      <p className="benefit-text">No more missed topics, focus on where you are now.</p>
  </div>
  <div className="about-benefit-item">
      <div className="benefit-circle">➡️</div> {/* Study paths: Right arrow emoji */}
      <p className="benefit-text">Study paths that fit your strengths, not what makes sense.</p>
  </div>
  <div className="about-benefit-item">
      <div className="benefit-circle">⏱️</div> {/* Wasted time: Stopwatch emoji */}
      <p className="benefit-text">No more struggling or wasted time, get it done quickly.</p>
  </div>
  <div className="about-benefit-item">
      <div className="benefit-circle">🏆</div> {/* Exams/Results: Trophy emoji */}
      <p className="benefit-text">No more wasted time for your exams, focus on results.</p>
  </div>
</div>
        </section>

        {/* Why We Built Acadova Section */}
        <section className="why-we-built-section">
          <div className="why-we-built-content">
            <div className="why-we-built-text-block">
              <h2 className="section-title why-we-built-title">Why We Built Acadova</h2>
              <p className="why-we-built-paragraph">
                Acadova isn't just a product, it's a movement. We started Acadova because we were tired of seeing brilliant people struggle, not because they weren't smart, but because the system wasn't built for how they learned. We've lived that frustration. That "why doesn't this make sense?" feeling. And we knew it could be different.
              </p>
              <p className="why-we-built-paragraph">
                So we created a space where learning finally fits the learner. Where what you learn isn't measured by how long you study, but by how well you actually understand.
              </p>
              <p className="why-we-built-paragraph why-we-built-highlight">
                We're building more than a study tool. We're building a future where every learner feels seen, supported, and empowered to thrive on their own terms. Because learning should never feel like a battle. With Acadova, it feels like freedom.
              </p>
            </div>
            <img
              src={femaleCharacter}
              alt="Female character in jeans"
              className="why-we-built-character"
              
            />
          </div>
        </section>

      </main>

      {/* Footer will come from App.js if you create a Footer component there */}
    </div>
  );
};

export default AboutUsPage;