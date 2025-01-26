import React from 'react';
import { FiCheck } from 'react-icons/fi';
import './Pricing.css';

const pricingPlans = [
  {
    name: "Lite",
    price: "40",
    period: "mo",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates"
    ],
    popular: false
  },
  {
    name: "Basic",
    price: "399",
    period: "mo",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
      "Premium Support",
      "Best for Large Projects"
    ],
    popular: true
  },
  {
    name: "Plus",
    price: "589",
    period: "mo",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
      "Premium Support",
      "Custom Features"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2>Simple and Affordable Pricing</h2>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <FiCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
