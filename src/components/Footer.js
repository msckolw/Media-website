import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>NoBias Media</h3>
          <p>Delivering unbiased news and analysis from around the world.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <address>
            <p>123 News Street</p>
            <p>Media City, MC 12345</p>
            <p>United States</p>
            <p>Email: info@nobiasmedia.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NoBias Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 