import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Kodaichoco – E-commerce Platform",
    image: "https://picsum.photos/600/400?random=1",
    desc: "Live e-commerce platform with product listing, cart, checkout, and admin workflows.",
    impact: "Reduced checkout issues by 18%",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    live: "https://kodaichoco.com/",
    featured: true,
    details:
      "Built and maintained a production e-commerce platform. Worked on cart logic, checkout flow, UI improvements, and performance optimizations in a real-time environment.",
  },
  {
    title: "Invoice Processing System",
    image: "https://picsum.photos/600/400?random=2",
    desc: "Enterprise invoice scanning and approval system with role-based access.",
    impact: "Improved approval efficiency by 30%",
    tech: ["Laravel", "Blade", "AJAX", "MySQL"],
    featured: false,
    details:
      "Developed invoice upload, scanning, approval workflows, and reporting features used by internal tax teams.",
  },
  {
    title: "Student Management System",
    image: "https://picsum.photos/600/400?random=3",
    desc: "Full-stack app to manage student records using REST APIs.",
    impact: "Handled 1k+ student records efficiently",
    tech: ["React", "Spring Boot", "MongoDB"],
    featured: false,
    details:
      "Implemented CRUD operations, validations, and responsive UI with a scalable backend architecture.",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="project-image">
              {project.featured && <span className="featured-badge">FEATURED</span>}
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <p className="project-impact">🚀 {project.impact}</p>

              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <button
                className="project-btn"
                onClick={() => setActiveProject(project)}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
  <div className="project-modal">
    <motion.div
      className="modal-content"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <button
        className="modal-close"
        onClick={() => setActiveProject(null)}
      >
        ✕
      </button>

      <h3>{activeProject.title}</h3>
      <p>{activeProject.details}</p>

      {activeProject.live && (
        <a
          href={activeProject.live}
          target="_blank"
          rel="noreferrer"
          className="modal-link"
        >
          Visit Live Project
        </a>
      )}
    </motion.div>
  </div>
)}

    </section>
  );
}
