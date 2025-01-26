import React from 'react';
import './Hero.css';
import { FaRocket, FaPlay, FaCheck, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">
            <FaRocket className="subtitle-icon" /> Welcome to SLGT
          </span>
          <h1>
            Free and Open-Source
            <span className="text-gradient"> Template</span> for Startup
          </h1>
          <p>
            A premium startup template built with React that includes all the essential pages,
            components, and sections you need to launch a complete startup website.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <FaCheck className="check-icon" /> Modern Design
            </div>
            <div className="feature-item">
              <FaCheck className="check-icon" /> Fully Responsive
            </div>
            <div className="feature-item">
              <FaCheck className="check-icon" /> Regular Updates
            </div>
          </div>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary btn-with-icon">
              Get Started Free
              <FaArrowRight className="btn-icon-right" />
            </a>
            <button className="btn btn-outline btn-with-icon">
              Star on GitHub
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">20K+</span>
              <span className="stat-label">Downloads</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">User Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src="/images/dashboard-light.png" 
              alt="Dashboard Light" 
              className="dashboard-image light-image"
            />
            <img 
              src="/images/dashboard-dark.png" 
              alt="Dashboard Dark" 
              className="dashboard-image dark-image"
            />
          </div>
          <div className="floating-card card-1">
            <div className="card-icon">📈</div>
            <div className="card-content">
              <span className="card-title">Growth Rate</span>
              <span className="card-value">+147%</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎯</div>
            <div className="card-content">
              <span className="card-title">Conversion</span>
              <span className="card-value">98.5%</span>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <div className="card-content">
              <span className="card-title">Performance</span>
              <span className="card-value">A+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
