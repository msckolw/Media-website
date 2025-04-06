import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Check if user has already submitted in this session
  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem('popupSubmitted');
    if (!hasSubmitted) {
      setIsOpen(true);
      
      // Set up interval for showing popup every 30 seconds
      const interval = setInterval(() => {
        const stillNotSubmitted = !sessionStorage.getItem('popupSubmitted');
        if (stillNotSubmitted) {
          setIsOpen(true);
        }
      }, 30000);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the form data (you can replace this with your actual submission logic)
      console.log('Form submitted:', {
        ...formData,
        to_email: "manisankar@thenobiasmedia.com"
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
      
      // Store submission status in session storage
      sessionStorage.setItem('popupSubmitted', 'true');
      
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={() => setIsOpen(false)}>×</button>
        <h2>Subscribe to Our Newsletter</h2>
        {submitStatus === 'success' ? (
          <div className="success-message">
            Thank you for subscribing! We'll be in touch soon.
          </div>
        ) : (
          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Subscribe'}
            </button>
            {submitStatus === 'error' && (
              <div className="error-message">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup; 