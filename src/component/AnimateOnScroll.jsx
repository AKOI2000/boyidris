import { useEffect, useRef, useState } from "react";

function AnimateOnScroll({ children, animation = "fadeUp", once = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target); // stop if once = true
        } else if (!once) {
          setIsVisible(false); // reset only if once = false
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? `show ${animation}` : ""}`}
    >
      {children}
    </div>
  );
}

export default AnimateOnScroll;
