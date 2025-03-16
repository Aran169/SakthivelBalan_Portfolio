import React, { useEffect, useRef } from "react";
import "./Intro.css";

const Intro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
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
    <section
      id='intro'
      ref={sectionRef}
      className='intro-section animate-on-scroll'
    >
      <div className='section-container'>
        <div className='intro-content'>
          <div className='intro-text'>
            <span className='intro-tag'>
              Mechanical Engineer & Business Analyst
            </span>
            <h1>
              SAKTHIVEL <br /> BALAN
            </h1>
            <p>
              As a mechanical engineer with a passion for business strategy, I'm
              driven to bridge the gap between technical innovation and
              effective business solutions. Currently pursuing a Master's in
              International Business and Engineering, I combine my engineering
              foundation with business insights to create impactful,
              well-rounded approaches to problem-solving.
            </p>
            <div className='intro-buttons'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Sakthivel Balan_CV.pdf"; // Update with the correct path to your resume file
                  link.download = "Sakthivel_Balan_Resume.pdf"; // File name when downloaded
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
              <button
                className='btn btn-secondary'
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className='intro-image'>
            <div className='image-container'>
              <img src='/Sakthivel Balan_Profile.jpg' alt='Sakthivel Balan' />
              <div className='hello-bubble'>
                <div>Hello!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='intro-decoration intro-decoration-1'></div>
      <div className='intro-decoration intro-decoration-2'></div>
    </section>
  );
};

export default Intro;
