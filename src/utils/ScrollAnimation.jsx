// ScrollAnimation.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - direction: "left" | "right" (default: "left")
 *  - threshold: number (0-1) trigger threshold, default 0.2
 *  - rootMargin: string for IntersectionObserver, default "0px 0px -10% 0px"
 *  - once: boolean - if true, animate only first time (default true)
 *  - className / children
 */
const ScrollAnimation = ({
  children,
  direction = "left",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard: do nothing during SSR or if no browser support
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // If observer API not available, show content immediately
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let didUnobserve = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          if (once && node && !didUnobserve) {
            observer.unobserve(node);
            didUnobserve = true;
          }
        } else if (!once) {
          // If not "once", toggle visibility based on intersection
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    // Cleanup
    return () => {
      if (observer && node && !didUnobserve) {
        try {
          observer.unobserve(node);
        } catch (e) {
          console.log(e);
          
        }
      }
    };
  }, [threshold, rootMargin, once]);

  // Tailwind classes
  const base = "transition-all duration-700 ease-out transform";
  const hidden =
    direction === "left"
      ? "-translate-x-8 opacity-0"
      : "translate-x-8 opacity-0";
  const visibleCls = "translate-x-0 opacity-100";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? visibleCls : hidden} ${className}`}
      aria-hidden={!visible}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
