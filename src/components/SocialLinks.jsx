import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

import "../styles/SocialLinks.css";

export default function SocialLinks() {

  return (

    <section
      className="social-section"
      id="social"
    >

      <h2 className="social-title">
        Connect With Me
      </h2>

      <div className="social-grid">

        {/* GITHUB */}

        <a
          href="https://github.com/gowtham602"
          target="_blank"
          rel="noreferrer"
          className="social-card github"
        >

          <FaGithub />

          <span>
            GitHub
          </span>

        </a>


        {/* LINKEDIN */}

        <a
          href="http://linkedin.com/in/gowtham602/  "
          target="_blank"
          rel="noreferrer"
          className="social-card linkedin"
        >

          <FaLinkedin />

          <span>
            LinkedIn
          </span>

        </a>

        
        {/* INSTAGRAM */}

        <a
          href="https://instagram.com/_gowtham602"
          target="_blank"
          rel="noreferrer"
          className="social-card instagram"
        >

          <FaInstagram />

          <span>
            Instagram
          </span>

        </a>

      </div>

    </section>
  );
}