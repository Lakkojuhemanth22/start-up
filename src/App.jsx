import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <Features />
              <About />
              <Testimonials />
              <Pricing />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
