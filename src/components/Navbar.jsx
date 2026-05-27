import { useEffect, useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

import "../styles/Navbar.css";

import ThemeToggle from "./ThemeToggle";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();

  const [active, setActive] = useState("home");

  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);

  // CLOSE MOBILE NAVBAR

  const closeNavbar = () => {

    const navbar = document.getElementById("mainNavbar");

    if (navbar.classList.contains("show")) {

      navbar.classList.remove("show");

    }
  };

  // SCROLL EFFECT

  useEffect(() => {

    const onScroll = () => {

      // ACTIVE SECTION

      sections.forEach((id) => {

        const el = document.getElementById(id);

        if (!el) return;

        const top = el.offsetTop - 120;

        const height = el.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {

          setActive(id);

        }
      });

      // HIDE / SHOW NAVBAR

      if (window.scrollY > lastScrollY.current) {

        setShow(false);

      } else {

        setShow(true);

      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {

      window.removeEventListener("scroll", onScroll);

    };

  }, []);

  return (

    <nav
      className={`navbar navbar-expand-lg fixed-top premium-nav ${
        show ? "nav-show" : "nav-hide"
      }`}
    >

      <div className="container">

        {/* LOGO */}

        <a
          className="navbar-brand brand-text"
          href="#home"
          onClick={closeNavbar}
        >

          Gowtham<span>.</span>

        </a>

        {/* MOBILE TOGGLE */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* NAVBAR MENU */}

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            {sections.map((item) => (

              <li
                className="nav-item"
                key={item}
              >

                <a
                  className={`nav-link premium-link ${
                    active === item ? "active" : ""
                  }`}
                  href={`#${item}`}
                  onClick={closeNavbar}
                >

                  {item.charAt(0).toUpperCase() + item.slice(1)}

                </a>

              </li>

            ))}

            {/* THEME TOGGLE */}

            <li className="nav-item">

              <ThemeToggle />

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}