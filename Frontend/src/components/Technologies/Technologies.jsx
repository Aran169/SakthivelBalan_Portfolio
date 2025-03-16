
import React, { useEffect, useRef } from 'react';
import './Technologies.css';

const Technologies = () => {
  const sectionRef = useRef(null);

  const technologies = [
    {
      category: "Engineering Tools",
      skills: [
        { name: "SolidWorks", level: 90 },
        { name: "AutoCAD", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "ANSYS", level: 75 }
      ]
    },
    {
      category: "Business Skills",
      skills: [
        { name: "Market Research", level: 85 },
        { name: "Financial Analysis", level: 75 },
        { name: "Strategic Planning", level: 90 },
        { name: "Project Management", level: 90 }
      ]
    },
    {
      category: "MS Office & Programming",
      skills: [
        { name: "Microsoft Office", level: 90 },
        { name: "Power BI", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Windows,Mac", level: 90 }
      ]
    },
    {
      category: "Languages",
      skills: [
        { name: "English", level: 95 },
        { name: "German(A2)", level: 70 },
        { name: "Hindi", level: 70 },
        { name: "Tamil", level: 100 }
      ]
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
            
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
              }, 300 + (100 * index));
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
              <h3>{tech.category}</h3>
              <div className="skills-list">
                {tech.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
