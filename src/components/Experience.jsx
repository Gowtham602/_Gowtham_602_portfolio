import { motion } from "framer-motion";
import "../styles/Experience.css";

const timelineData = [
  {
    year: "2020 – 2024",
    title: "B.E. Electronics & Communication Engineering",
    place: "IFET College of Engineering, Viluppuram",
    side: "left",
  },
  {
    year: "2023",
    title: "Web Development Internship (2 Months)",
    place: "Globytex, Cuddalore",
    side: "right",
  },
  {
    year: "Dec 2024 – Dec 2025",
    title: "Web Developer",
    place: "HEPL",
    side: "left",
  },
  {
    year: "Jan 2025 – Present",
    title: "Web Developer",
    place: "Ideal Software, Porur",
    side: "right",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        <span className="timeline-line" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.side}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Dot */}
            <span className="timeline-dot" />

            {/* Content */}
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
