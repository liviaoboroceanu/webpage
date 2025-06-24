import React from 'react';

// Import image for the character. Assume you've saved it in assets/images
// You'll need to save this image and rename it appropriately in File Explorer
import contactCharacter from '../assets/images/acadova_logo.jfif'; // e.g., for the character in the design

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <main className="main-content"> {/* Reuse main-content class for consistent layout */}
        <section className="contact-section">
          <div className="contact-character-wrapper">
            <img
              src={contactCharacter} // Use imported character image
              alt="Contact Character"
              className="contact-character-image"
            />
          </div>
          <div className="contact-bubble-wrapper">
            <div className="speech-bubble">
              <p className="bubble-text-bold">Have a question? An idea? A partnership in mind?</p>
              <p className="bubble-text">We'd love to hear from you.</p>
              <p className="bubble-text">
                Whether you're a student looking for support, an educational institution interested in collaborating,
                or just someone with a great suggestion, feel free to reach out at{' '}
                <a href="mailto:techsupport@acadova.com" className="email-link">techsupport@acadova.com</a>
              </p>
              <p className="bubble-text">You can also chat with us using the chat bubble below. We'll get back to you as soon as possible!</p>
              <p className="bubble-text-bold">The Acadova Team</p>
            </div>
            <div className="chat-bubble-container">
              {/* This is a placeholder for the chat bubble UI */}
              <div className="chat-bubble-content">
                <span className="typing-dots">...</span>
                <div className="send-icon-placeholder"></div> {/* Placeholder for the send icon */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer will be handled by App.js */}
    </div>
  );
};

export default ContactPage;