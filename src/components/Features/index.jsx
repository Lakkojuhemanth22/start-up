import React from 'react';
import { FiLayout, FiCode, FiUsers, FiBox, FiSettings, FiLayers } from 'react-icons/fi';
import './Features.css';

const features = [
  {
    icon: <FiLayout />,
    title: "High-quality Design",
    description: "Professional and modern design crafted with attention to detail and user experience."
  },
  {
    icon: <FiCode />,
    title: "Clean Code",
    description: "Well-structured, maintainable code following best practices and coding standards."
  },
  {
    icon: <FiUsers />,
    title: "User Friendly",
    description: "Intuitive interface designed for the best possible user experience and satisfaction."
  },
  {
    icon: <FiBox />,
    title: "Essential Components",
    description: "All the essential components you need to build a complete startup website."
  },
  {
    icon: <FiSettings />,
    title: "Fully Customizable",
    description: "Easily customize the template to match your brand identity and requirements."
  },
  {
    icon: <FiLayers />,
    title: "Regular Updates",
    description: "Continuous updates with new features and improvements to stay up-to-date."
  }
];

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2>Main Features</h2>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
