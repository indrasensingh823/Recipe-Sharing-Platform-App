// src/components/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}`);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@recipeplatform.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/submit">Submit a Recipe</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>

        <div className="footer-section feedback-form">
          <h3>Feedback Form</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="feedback"
              placeholder="Your Feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZestyVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;