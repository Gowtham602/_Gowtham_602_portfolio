import { useEffect, useState } from "react";

export default function useTypingEffect(
  text,
  speed = 90,
  pause = 1500
) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // deleting
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 1 : speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return displayText;
}
