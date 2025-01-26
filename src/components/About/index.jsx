import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './About.css';

const About = () => {
  const features = [
    "Premium quality design and code",
    "Regular updates and improvements",
    "Extensive documentation and support",
    "Highly optimized for better performance",
    "Customizable and easy to use",
    "Cross-browser compatibility"
  ];

  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-image">
          <img src="/images/about.svg" alt="About Us" />
        </div>
        
        <div className="about-content">
          <h2>We are ready to help</h2>
          <p className="subtitle">Crafted for Startup, SaaS and Business Sites.</p>
          
          <p className="description">
            We offer a complete startup template with essential pages, components, 
            and sections built with React. Perfect for creating stunning websites 
            for your SaaS, startup, or business.
          </p>

          <div className="feature-list">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <FiCheck className="check-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
