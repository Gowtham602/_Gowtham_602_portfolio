import "../styles/Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack React & Laravel application with payments, admin dashboard, and order management.",
    tech: ["React", "Laravel", "MySQL"],
    image: "/projects/ecommerce.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "High-performance personal portfolio with dark/light mode and animations.",
    tech: ["React", "Vite", "Bootstrap"],
    image: "/projects/portfolio.jpg",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
  <h2>Projects</h2>

  <div className="projects-grid">
    <div className="project-card">
      <h3>E-Commerce Platform</h3>
      <p>React + Laravel full-stack application with admin panel.</p>
      <div className="project-tags">
        <span>React</span><span>Laravel</span><span>MySQL</span>
      </div>
      <div className="project-actions">
        <a href="#">Live</a>
        <a href="#">GitHub</a>
      </div>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>High-performance portfolio with animations and dark mode.</p>
      <div className="project-tags">
        <span>React</span><span>Vite</span><span>Bootstrap</span>
      </div>
      <div className="project-actions">
        <a href="#">Live</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  </div>
</section>

  );
}
