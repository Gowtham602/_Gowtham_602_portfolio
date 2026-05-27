import { FaWhatsapp } from "react-icons/fa";

import "../styles/WhatsAppButton.css";

export default function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/919344783117"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >

      <FaWhatsapp />

    </a>

  );
}