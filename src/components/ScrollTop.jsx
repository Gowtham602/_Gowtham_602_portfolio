import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => setShow(scrollY > 200);
  }, []);

  return show && (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ⬆
    </button>
  );
}
