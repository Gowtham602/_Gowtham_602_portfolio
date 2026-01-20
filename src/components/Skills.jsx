import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact,
  FaJava, FaPhp, FaGitAlt, FaGithub, FaDatabase
} from "react-icons/fa";
import { SiPostman, SiSwagger, SiSpringboot, SiLaravel } from "react-icons/si";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26", levelText: "Advanced", levelValue: 90 },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6", levelText: "Advanced", levelValue: 85 },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", levelText: "Intermediate", levelValue: 75 },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", levelText: "Intermediate", levelValue: 70 },
      { name: "React.js", icon: FaReact, color: "#61DAFB", levelText: "Learning", levelValue: 55 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396", levelText: "Basic", levelValue: 50 },
      { name: "PHP", icon: FaPhp, color: "#777BB4", levelText: "Intermediate", levelValue: 65 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", levelText: "Advanced", levelValue: 80 },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", levelText: "Learning", levelValue: 45 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", levelText: "Intermediate", levelValue: 70 },
      { name: "GitHub", icon: FaGithub, color: "#ffffff", levelText: "Intermediate", levelValue: 70 },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", levelText: "Intermediate", levelValue: 65 },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D", levelText: "Basic", levelValue: 50 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: FaDatabase, color: "#4479A1", levelText: "Intermediate", levelValue: 65 },
      { name: "XAMPP", icon: FaDatabase, color: "#FB7A24", levelText: "Basic", levelValue: 50 },
    ],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev =>
        prev === skillGroups.length - 1 ? 0 : prev + 1
      );
    }, 3500); //   seconds per card

    return () => clearInterval(timer);
  }, []);

  const group = skillGroups[activeIndex];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-single-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="skill-group-title">{group.title}</h3>

            {/* 20-second visual timer */}
            <div className="timer-bar-bg">
              <motion.div
                className="timer-bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            </div>

            {group.skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-left">
                      <Icon style={{ color: skill.color }} className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-text">{skill.levelText}</span>
                  </div>

                  <div className="progress-bar-bg">
                    <motion.div
                      className="progress-bar-fill"
                      style={{ background: skill.color }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.levelValue}%` }}
                      transition={{ duration: 2 }}
                    />
                  </div>

                  <span className="skill-percent">{skill.levelValue}%</span>
                </div>
              );
            })}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
