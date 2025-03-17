import React, { useEffect, useRef } from "react";
import "./Publications.css";

const Publications = () => {
  const sectionRef = useRef(null);

  const publications = [
    {
      title:
        "Prioritization of barriers of lean six sigma with sustainability cogitations.",
      journal: "AIP Conference Proceedings",
      year: "2022",
      authors:
        "Ben R. Ruben, B.Sakthivel, Sathish P. Guru, J.Sanakyan, V. Sakthivel",
      abstract:
        "This article aims at prioritizing the barriers that hinders deployment of Lean Six Sigma with sustainability cogitations in manufacturing organizations. The barriers were identified from literature and an Interpretive Structural Modeling (ISM) approach was deployed for prioritizing them. ",
      link: "https://pubs.aip.org/aip/acp/article-abstract/2527/1/040012/2828309/Prioritization-of-barriers-of-lean-six-sigma-with",
    },
    {
      title:
        "Thermal Performance Analysis of a Thermosiphon Heat Pipe Working with an Eco-Friendly Refrigerant in Comparison to R134a. ",
      journal: "AIP Conference Proceedings",
      year: "2022",
      authors:
        "Arun Kurien Reji, C. Shanthi, S. Roshan Akthar, B. Sakthivel, A.S. Vidhyaatharan, S. Santhosh",
      abstract:
        "The need for developing better and more effective cooling systems have resulted in an increased focus on cooling approaches involving heat transfer devices like heat pipes.",
      link: "https://pubs.aip.org/aip/acp/article-abstract/2527/1/030014/2828528/Thermal-performance-analysis-of-a-thermosiphon?redirectedFrom=fulltext",
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
      id='publications'
      ref={sectionRef}
      className='publications-section'
    >
      <div className='section-container'>
        <h2 className='section-title animate-on-scroll'>Publications</h2>

        <div className='publications-grid'>
          {publications.map((pub, index) => (
            <div key={index} className='publication-card animate-on-scroll'>
              <span className='publication-year'>{pub.year}</span>
              <h3>{pub.title}</h3>
              <p className='publication-journal'>{pub.journal}</p>
              <p className='publication-authors'>{pub.authors}</p>
              <p className='publication-abstract'>{pub.abstract}</p>
              <a href={pub.link} className='publication-link'>
                Read Publication
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
