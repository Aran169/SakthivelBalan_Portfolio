import React, { useEffect, useRef } from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      position: "OPERATIONS ASSOCIATE",
      company: "Flink (Working Student)",
      period: "Dec 2024 - Present",
      description:
        "Ensured Accurate and timely fulfillment of Customer Orders - To enhance customer satisfaction and ensure repeat business. Streamlined order fulfillment processes, improving efficiency and accuracy, and reducing errors to enhance overall warehouse operations.",
    },
    // {
    //   position: "Mechanical Design Engineer",
    //   company: "Global Manufacturing Inc.",
    //   period: "Jul 2020 - Aug 2021",
    //   description:
    //     "Designed mechanical components for industrial automation systems, collaborated with cross-functional teams, and optimized manufacturing processes.",
    // },
    {
      position: "Assistant Engineer",
      company: "Tata Motors",
      period: "Mar 2021 - Apr 2021",
      description:
        "Engaged in hands-on learning at Tata Motors' service area, focusing on car engine mechanics and maintenance procedures I gained great insight through this experience regarding the culture of the company, its business processes, and its management.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='experience' ref={sectionRef} className='experience-section'>
      <div className='section-container'>
        <h2 className='section-title animate-on-scroll'>Work Experience</h2>

        <div className='timeline'>
          <div className='timeline-line'></div>

          {experiences.map((exp, index) => (
            <div key={index} className='timeline-item animate-on-scroll'>
              <div className='timeline-dot'></div>
              <div className='timeline-content'>
                <div className='timeline-header'>
                  <h3>{exp.position}</h3>
                  <span className='timeline-period'>{exp.period}</span>
                </div>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
