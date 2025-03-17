
import React, { useEffect, useRef } from 'react';
import './Technologies.css';
import { Code, Briefcase, Layout, Globe } from 'lucide-react';

const Technologies = () => {
  const sectionRef = useRef(null);

  const technologies = [
    {
      category: "Engineering Tools",
      icon: <Layout size={24} />,
      skills: ["SolidWorks", "AutoCAD", "MATLAB", "ANSYS"]
    },
    {
      category: "Business Skills",
      icon: <Briefcase size={24} />,
      skills: ["Market Research", "Financial Analysis", "Strategic Planning", "Project Management"]
    },
    {
      category: "Programming",
      icon: <Code size={24} />,
      skills: ["Python", "R", "SQL", "Excel VBA"]
    },
    {
      category: "Languages",
      icon: <Globe size={24} />,
      skills: ["English", "German", "Hindi", "Tamil"]
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
              }, 100 * index);
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
    <section id="technologies" ref={sectionRef} className="technologies-section">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">Technologies & Skills</h2>
        
        <div className="skills-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="skills-card animate-on-scroll"
            >
              <div className="category-header">
                <div className="category-icon">{tech.icon}</div>
                <h3>{tech.category}</h3>
              </div>
              <ul className="skills-list">
                {tech.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-check">✓</span>
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;