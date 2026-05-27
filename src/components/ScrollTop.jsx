import { useEffect, useState } from "react";

import "../styles/ScrollTop.css";

export default function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShow(window.scrollY > 300);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>

      {show && (

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          ↑
        </button>

      )}

    </>

  );
}