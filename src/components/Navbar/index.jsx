import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaUser, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h2>SLGT</h2>
        </Link>

        <button className={`mobile-menu-btn ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </button>

        <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu} />

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {isOpen && (
            <button className="mobile-close-btn" onClick={closeMenu}>
              <FaTimes />
            </button>
          )}

          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Blogs
            </Link>
          </div>

          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Pages <FaChevronDown className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/about" className="dropdown-link" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/features" className="dropdown-link" onClick={closeMenu}>
                Features
              </Link>
              <Link to="/pricing" className="dropdown-link" onClick={closeMenu}>
                Pricing
              </Link>
              <Link to="/contact" className="dropdown-link" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>

          <div className="auth-buttons">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
              Sign In
            </Link>
            <Link to="/register" className="btn btn-primary" onClick={closeMenu}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
