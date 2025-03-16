
import React, { useEffect } from 'react';
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Publications from "../../components/Publications/Publications";
import Technologies from "../../components/Technologies/Technologies";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import './Index.css';

const Index = () => {
  useEffect(() => {
    // Add scroll-based animation handlers
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <Header />
      
      <main>
        <section id="home" className="home-section">
          <div className="home-content animate-on-scroll">
            <h1>
              Hello, I'm <span className="highlight">Sakthivel</span>
            </h1>
            <p className="subtitle">
              Mechanical Engineer & Business Analyst
            </p>
            <div className="home-buttons">
              <a href="#intro" className="btn btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
        </section>
        
        <Intro />
        <Education />
        <Projects />
        <WorkExperience />
        <Publications />
        <Technologies />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;