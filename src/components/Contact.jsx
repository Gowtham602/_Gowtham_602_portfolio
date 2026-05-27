import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

export default function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(

        "service_munqorq",

        "service_munqorq",

        form.current,

        "YOUR_PUBLIC_KEY"
      )

      .then(

        () => {

          setMessage("Message sent successfully!");

          setLoading(false);

          form.current.reset();
        },

        () => {

          setMessage("Failed to send message");

          setLoading(false);
        }
      );
  };

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        <h2 className="contact-title">
          Contact Me
        </h2>

        <p className="contact-subtitle">
          Feel free to contact me for freelance work.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="contact-input"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="contact-input"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="contact-textarea"
            required
          ></textarea>

          <button
            type="submit"
            className="contact-btn"
          >

            {loading ? "Sending..." : "Send Message"}

          </button>

          {message && (
            <p className="contact-success">
              {message}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}