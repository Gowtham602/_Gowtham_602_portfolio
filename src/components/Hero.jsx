import { motion } from "framer-motion";
import useTypingEffect from "../hooks/useTypingEffect";
import "../styles/Hero.css";

export default function Hero() {
  const typed = useTypingEffect(
    "React & Laravel Developer • Building scalable, high-performance web applications -> ..!",
    80,
    2000
  );

  return (
    <section id="home" className="hero-section">
  {/* LEFT: TEXT */}
  <motion.div
    className="hero-content"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p className="hero-intro">Hi, I’m</p>

    <h1 className="hero-title">
      Gowtham<span>.</span>
    </h1>

    <h2 className="hero-typing">
      {typed}<span className="cursor">|</span>
    </h2>

    <p className="hero-desc">
        I’m a Web Developer with hands-on experience in building
    real-world web applications using React and Laravel.

    Currently working at Ideal Software, Porur, where I contribute
    to a live e-commerce platform and internal enterprise systems.
    I focus on clean UI, performance, and scalable backend logic.

    </p>

    <div className="hero-actions">
      <a href="#projects" className="btn btn-primary">View Projects</a>
      <a href="#contact" className="btn btn-outline">Contact Me</a>
    </div>
  </motion.div>

  {/* RIGHT: IMAGE */}
  <motion.div
    className="hero-avatar"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    <div className="avatar-circle">
      <img src="./profile/profile.png" alt="Gowthams" />
    </div>
  </motion.div>

  <div className="scroll-indicator">
    <span />
  </div>
</section>

  );
}
