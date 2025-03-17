import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "Pawsthetics- Startup Project",
      category: "business",
      image: "/Paw.svg",
      description:
        "Founded and led Pawsthetics, a business designing and make affordable, sustainable prosthetic legs for pets,using recycled plastic.I did market research and networking, meeting with pet owners, veterinarians, and animal welfare organizations to finalize product designs and pricing.",
      technologies: ["SolidWorks", "MATLAB", "Statistical Analysis"],
      link: "#",
    },
    {
      title: "Lean Six Sigma - Framework Development",
      category: "business",
      image: "/Six_Sigma.png",
      description:
        "A complete Lean Six Sigma system was designed for a business to maximize the use of resources and reduce operating disabilities. Comprehensive analysis of current processes was performed, where the main obstacles and areas were determined for improvement.",
      technologies: [
        "Data Analysis",
        "Risk Management",
        "Process Optimization",
      ],
      link: "#",
    },
    {
      title: "Virtual Reality - Based Science Lab",
      category: "engineering",
      image: "/placeholder.svg",
      description:
        "Won first place inside the Smart India Hackathon for developing a Virtual Reality (VR) laboratory aimed at enhancing and getting to know interest of students. Led the integration of VR era to simulate a science lab, supplying hands-on, immersive educational studies.",
      technologies: ["SolidWorks", "MATLAB", "Statistical Analysis"],
      link: "#",
    },
    {
      title: "DESIGN FOR VISUALLY CHALLENGED CHILDREN",
      category: "engineering",
      image: "/placeholder.svg",
      description:
        "The ToyAcron was on the list among the finalists in Toycathon to create new toys for Visually challenged children. Focus on learning and enabling activity through attractive, available products. Creativity, customer-focused problem solving and collaboration to create a solid solution.",
      technologies: [
        "Market Research",
        "Financial Modeling",
        "Strategic Planning",
      ],
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
    <section id='projects' ref={sectionRef} className='projects-section'>
      <div className='section-container'>
        <h2 className='section-title animate-on-scroll'>Projects</h2>

        <div className='projects-filter animate-on-scroll'>
          <div className='filter-buttons'>
            {["all", "engineering", "business"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project, index) => (
            <div key={index} className='project-card animate-on-scroll'>
              <div className='project-image'>
                <img src={project.image} alt={project.title} />
                <div className='project-category'>
                  <span>
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className='project-details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project-technologies'>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
