
import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Master's in International Business and Engineering",
      institution: "SRH University Heidelberg",
      period: "2024 - Present",
      description: "Focusing on the intersection of engineering principles and business strategy in a global context."
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Sri Krishna College of Engineering and Technology",
      period: "2019 - 2023",
      description: "Specialized in design and manufacturing with a focus on sustainable engineering practices."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Bharani Park Matriculation Higher Secondary School",
      period: "2018 - 2019",
      description: "Focused on Physics, Chemistry, and Mathematics with distinction."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="education-section">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">Education</h2>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item animate-on-scroll"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.degree}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;