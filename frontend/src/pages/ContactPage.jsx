import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls

// Import image for the character. Assume you've saved it in assets/images
import contactCharacter from '../assets/images/acadova_logo.jfif'; // e.g., for the character in the design

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To display success/error messages

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setStatus('Submitting...');

    try {
      // Use the REACT_APP_API_BASE_URL from your .env file
      // The backend endpoint is /contact
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/contact`, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // FastAPI's Form expects this
        }
      });
      
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

      console.log('Form submission response:', response.data);

    } catch (error) {
      console.error('Form submission error:', error.response ? error.response.data : error.message);
      setStatus('Failed to send message. Please try again.');
    }
  };

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

            {/* --- Contact Form (replaces previous chat bubble placeholder) --- */}
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
              <button type="submit" className="form-submit-button">Send Message</button>
              {status && <p className="form-status">{status}</p>}
            </form>

          </div>
        </section>
      </main>

      {/* Footer is handled by App.js */}
    </div>
  );
};

export default ContactPage;
