import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
// Import your logo here (uncomment after adding the logo file)
// import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setIsMenuOpen(false);
    navigate(`/category/${category.toLowerCase()}`);
  };

  const menuSections = [
    { title: 'Politics', path: '/category/politics' },
    { title: 'Sports', path: '/category/sports' },
    { title: 'Entertainment', path: '/category/entertainment' },
    { title: 'Technology', path: '/category/technology' },
    { title: 'Business', path: '/category/business' },
    { title: 'Health', path: '/category/health' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="menu-container">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-icon">☰</span>
          </button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              {menuSections.map((section, index) => (
                <div 
                  key={index}
                  className="menu-item"
                  onClick={() => handleCategoryClick(section.title)}
                >
                  {section.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/" className="logo">
          <img src="/logo.png" alt="The NoBias Media" className="logo-image" />
          <span className="logo-text">The NoBias Media</span>
        </Link>

        <div className="header-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 