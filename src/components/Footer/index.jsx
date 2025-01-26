import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section" data-aos="fade-up" data-aos-delay="0">
            <h3>About Us</h3>
            <p>
              We're dedicated to empowering businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#features">Features <FaArrowRight /></a></li>
              <li><a href="#about">About <FaArrowRight /></a></li>
              <li><a href="#testimonials">Testimonials <FaArrowRight /></a></li>
              <li><a href="#pricing">Pricing <FaArrowRight /></a></li>
              <li><a href="#blog">Blog <FaArrowRight /></a></li>
            </ul>
          </div>

          <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Documentation <FaArrowRight /></a></li>
              <li><a href="#">Support Center <FaArrowRight /></a></li>
              <li><a href="#">Privacy Policy <FaArrowRight /></a></li>
              <li><a href="#">Terms of Service <FaArrowRight /></a></li>
              <li><a href="#">Contact Us <FaArrowRight /></a></li>
            </ul>
          </div>

          <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
