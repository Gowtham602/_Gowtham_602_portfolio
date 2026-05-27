import {
  FaWhatsapp,
  FaInstagram
} from "react-icons/fa";

import "../styles/SocialButtons.css";

export default function SocialButtons() {

  return (

    <div className="social-buttons">

      {/* WHATSAPP */}

      <a
        href="https://wa.me/919344783117"
        target="_blank"
        rel="noreferrer"
        className="social-btn whatsapp-btn"
      >

        <FaWhatsapp />

      </a>

      {/* INSTAGRAM */}

      <a
        href="https://instagram.com/gowtham602"
        target="_blank"
        rel="noreferrer"
        className="social-btn instagram-btn"
      >

        <FaInstagram />

      </a>

    </div>
  );
}