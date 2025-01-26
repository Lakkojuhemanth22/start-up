import React from 'react';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming modern business operations and decision-making processes.",
      author: "John Smith",
      date: "Jan 20, 2024",
      image: "https://source.unsplash.com/800x600/?artificial-intelligence",
    },
    {
      id: 2,
      title: "Sustainable Tech Practices",
      excerpt: "Learn about environmentally conscious approaches to technology development and implementation.",
      author: "Sarah Johnson",
      date: "Jan 18, 2024",
      image: "https://source.unsplash.com/800x600/?sustainability",
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures every modern business should implement to protect digital assets.",
      author: "Mike Wilson",
      date: "Jan 15, 2024",
      image: "https://source.unsplash.com/800x600/?cybersecurity",
    },
  ];

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Latest Insights</h2>
          <p>Stay updated with our latest thoughts on technology, business, and innovation.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <FaCalendar />
                    {post.date}
                  </span>
                  <span>
                    <FaUser />
                    {post.author}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read More
                  <FaArrowRight className="icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
