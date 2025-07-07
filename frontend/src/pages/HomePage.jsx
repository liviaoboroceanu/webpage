import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

// --- Image Imports for HomePage ---
// !! Ensure these filenames and their exact case match the files in your src/assets/images folder !!
import Acadovalogo from '../assets/images/acadova_logo.jfif'; // Example: Your main Acadova logo if it goes in the navbar
import Nvidialogo from '../assets/images/b9d643df-911c-402a-a90f-46e2e218a837.png'; // Example: NVIDIA Logo
import holder from '../assets/images/f1ea8ef7-c4d2-4ed1-8c93-a2464c48ae23.png'; // Example: AWS Logo
import aws from '../assets/images/0507bb98-8057-4e50-b70c-641f78fcd8ba.png'; // Example: Microsoft Logo
import GoogleLogo from '../assets/images/pngimg.com - google_PNG19644.png'; // Example: Often Google Logo, used as "another" Google here
import ukinovate from '../assets/images/12be6c8b-c9d1-4227-9513-49441c8a5934.png'; // Example: Character for statistics section
import qlogo from '../assets/images/0b3657de-1910-4d6b-a8f3-63449cf16e5b.png'; // Example: UKRI/Innovate UK Logo
import microsoft from '../assets/images/nforceit-partner-microsoft-logo.png'
import guyone from '../assets/images/0b88a620-905f-437c-a629-84326c074537.png'; // guy one
import ladyone from '../assets/images/164b9e88-dcbe-4ad1-9c8a-8cfc24bc9d7e.png';


// Chart Imports
import DonutChart from '../components/DonutChart';
import BarStatsChart from '../components/BarStatsChart';
import LineGraph from '../components/LineGraph';
import VerticalBarChart from '../components/VerticalBarChart';



const HomePage = () => {
  // State for fetching customer reviews
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [reviewsError, setReviewsError] = useState(null);

  // State for new review submission form
  const [newReview, setNewReview] = useState({
    reviewer_name: '',
    review_text: '',
    rating: 5 // Default rating
  });
  const [reviewStatus, setReviewStatus] = useState(''); // To display submission status
  const [showReviewForm, setShowReviewForm] = useState(false); // New state to control form visibility


  // Function to handle the "Try Acadova Now" button click
  const handleTryAcadovaClick = () => {
    window.location.href = 'https://www.acadova.com/';
  };
  
  // Handle input changes for new review form fields
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle new review form submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewStatus('Submitting review...');

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/reviews`, newReview);

      setReviewStatus('Review submitted successfully!');
      setNewReview({ reviewer_name: '', review_text: '', rating: 5 }); // Clear form
      setShowReviewForm(false); // Hide the form after successful submission

      // Refresh the reviews displayed on the page by refetching them
      const updatedReviewsResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews`);
      setReviews(updatedReviewsResponse.data);

      console.log('Review submission response:', response.data);

    } catch (error) {
      console.error('Review submission error:', error.response ? error.response.data : error.message);
      setReviewStatus('Failed to submit review. Please try again.');
    }
  };

  // Data for the "Improve results in just 2 weeks" bar chart
  const resultsData = [
    { name: 'Bar1', value: 70, remaining: 30 }, { name: 'Bar2', value: 60, remaining: 40 },
    { name: 'Bar3', value: 85, remaining: 15 }, { name: 'Bar4', value: 50, remaining: 50 },
    { name: 'Bar5', value: 90, remaining: 10 },
  ];

  // Data for the "Cut exam stress by 60%" line graph
  const stressData = [
    { name: 'A', value1: 30, value2: 25 }, { name: 'B', value1: 40, value2: 30 },
    { name: 'C', value1: 35, value2: 20 }, { name: 'D', value1: 50, value2: 28 },
    { name: 'E', value1: 45, value2: 15 }, { name: 'F', value1: 60, value2: 22 },
    { name: 'G', value1: 55, value2: 18 }, { name: 'H', value1: 70, value2: 25 },
    { name: 'I', value1: 65, value2: 10 }, { name: 'J', value1: 80, value2: 12 },
    { name: 'K', value1: 75, value2: 8 }, { name: 'L', value1: 90, value2: 15 },
  ];

  // Data for the "Boost your retention by up to 3x each time" vertical bar graph
  const retentionData = [
    { name: 'Jan', value: 20 }, { name: 'Feb', value: 40 },
    { name: 'Mar', value: 60 }, { name: 'Apr', value: 80 },
    { name: 'May', value: 95 },
  ];

  // Fetch reviews on component mount using useEffect
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviewsError('Failed to load reviews.');
      } finally {
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this runs once on mount


  return (
    <div className="home-page-container">
      {/* Navbar will be rendered by the Header component in App.js */}

      <main className="main-content">
        {/* Welcome to Acadova Section */}
        <section className="welcome-section">
          {/* Character Image - This should be the 'guyone' character from your imports */}
          <div className="welcome-image-wrapper">
            <img
              src={Acadovalogo} // Using 'guyone' for the Welcome character
              alt="Welcome Character"
              className="welcome-character-image"
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
            {[
              "Build Your Own Classes", "Upload Your Own Documents", "Smart Class Notes",
              "Chat Box", "Subject Breakdown", "Gap Analysis",
              "AI Avatar Teacher", "Unique Quizzes", "Mind Maps Visualise Topics",
              "Take a Quiz"
            ].map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${feature === "Take a Quiz" ? 'take-a-quiz-card' : ''}`}
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="try-acadova-cta">
            <button
              onClick={handleTryAcadovaClick}
              className="try-acadova-button"
            >
              Try Acadova Now
            </button>
            {/* Character next to "Try Acadova Now" button - should be the 'smilingCharacter' */}
            <img
              src={guyone} // Using 'smilingCharacter' for this position
              alt="Smiling Character"
              className="try-acadova-character"
            />
          </div>
        </section>

        {/* What statistics say? Section */}
        <section className="statistics-section">
            <div className="statistics-image-wrapper">
                {/* Character for statistics section - this should be 'ladyone' (character with glasses) */}
                <img
                    src={ladyone} // Using 'ladyone' (character with glasses) for statistics section
                    alt="Character with glasses"
                    className="statistics-character-image"
                />
            </div>
            <div className="statistics-content">
                <h2 className="section-title">What statistics say?</h2>
                <div className="stats-grid">
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
                        <p className="stat-description">Cut exam stress by 60%</p>
                    </div>
                    <div className="stat-item">
                        <VerticalBarChart data={retentionData} />
                        <p className="stat-description">Boost your retention by up to 3x</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Customer Reviews Section (Consolidated with Review Submission) */}
        <section className="customer-reviews-section">
          <h2 className="section-title">Customer Reviews</h2>
          
          {/* "Leave a Review" button or trigger */}
          <div className="leave-review-trigger-wrapper">
            <button
              onClick={() => setShowReviewForm(true)}
              className="leave-review-inline-button"
            >
              Write a Review
            </button>
          </div>

          {loadingReviews && <p className="section-description">Loading reviews...</p>}
          {reviewsError && <p className="section-description error-message">{reviewsError}</p>}
          {!loadingReviews && !reviewsError && reviews.length === 0 && (
            <p className="section-description">No reviews available yet.</p>
          )}
          {!loadingReviews && reviews.length > 0 && (
            <div className="review-grid">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <p className="reviewer-name">{review.reviewer_name}</p>
                  {/* Add star rating display here */}
                  <div className="star-rating-display">
                    {[...Array(5)].map((star, index) => (
                      <span key={index} className={index < review.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>
                  <p className="review-text">"{review.review_text}"</p>
                </div>
              ))}
            </div>
          )}

          {/* Review Submission Form as a Modal/Overlay */}
          {showReviewForm && (
            <div className="review-form-modal-overlay">
              <div className="review-submission-form-container">
                <div className="form-header">
                  <h3 className="form-title">Submit Your Review</h3>
                  <button onClick={() => setShowReviewForm(false)} className="close-form-button">X</button>
                </div>
                <form onSubmit={handleReviewSubmit} className="review-form">
                  <input
                    type="text"
                    name="reviewer_name"
                    placeholder="Your Name"
                    value={newReview.reviewer_name}
                    onChange={handleReviewChange}
                    required
                    className="form-input"
                  />
                  <textarea
                    name="review_text"
                    placeholder="Your Review"
                    value={newReview.review_text}
                    onChange={handleReviewChange}
                    required
                    rows="4"
                    className="form-textarea"
                  ></textarea>
                  <div className="form-rating-group">
                    <label htmlFor="rating" className="form-label">Rating:</label>
                    <select
                      id="rating"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleReviewChange}
                      required
                      className="form-input form-select"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                  <button type="submit" className="form-submit-button">Submit Review</button>
                  {reviewStatus && <p className="form-status">{reviewStatus}</p>}
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Trusted By Section */}
        <section className="trusted-by-section">
          <h2 className="section-title">Trusted By</h2>
          <div className="logo-grid">
            {/* Company Logos - updated with imported variables */}
            <img src={Nvidialogo} alt="NVIDIA Logo" className="company-logo" />
            <img src={holder} alt="AWS Logo" className="company-logo" />
            <img src={microsoft} alt="Microsoft Logo" className="company-logo" />
            <img src={ukinovate} alt="UKRI/Innovate UK Logo" className="company-logo" />
            <img src={qlogo} alt="Cube Logo" className="company-logo" />
            <img src={GoogleLogo} alt="Google Logo" className="company-logo" />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content-wrapper">
          <div className="footer-info">
            <p className="footer-company-name">Acadova Limited, {new Date().getFullYear()}</p>
            <p className="footer-email">Email: <a href="mailto:techsupport@acadova.com" className="footer-link">techsupport@acadova.com</a></p>
          </div>
          <div className="footer-links">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
