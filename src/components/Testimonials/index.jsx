import React from 'react';
import { FaStar } from 'react-icons/fa';
import testimonial1 from '../../assets/testimonial-1.svg';
import testimonial2 from '../../assets/testimonial-2.svg';
import testimonial3 from '../../assets/testimonial-3.svg';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Lead @ Microsoft",
    image: testimonial1,
    content: "This platform has transformed how we handle our development workflow. The AI-powered features are incredibly intuitive and have significantly boosted our team's productivity.",
    stars: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer @ Google",
    image: testimonial2,
    content: "The code quality and performance improvements we've seen since implementing this solution are remarkable. It's like having an extra team member who never sleeps.",
    stars: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CTO @ TechStart",
    image: testimonial3,
    content: "As a startup CTO, finding tools that scale with your team is crucial. This platform has exceeded our expectations in terms of flexibility and developer experience.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>What Our Users Say</h2>
          <p>Join thousands of developers and teams who have transformed their workflow with our AI-powered development tools.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="star-icon filled" />
                  ))}
                </div>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
