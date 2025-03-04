"use client";

import { useState, useEffect, useRef } from "react";

export function Counter({ end, duration }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const intervalRef = useRef(null); // Store interval reference

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (intervalRef.current) clearInterval(intervalRef.current); // Clear existing interval
          setCount(0); // Reset count when in view

          let start = 0;
          const stepTime = 16; // ~60 FPS
          const totalFrames = duration / stepTime;
          const increment = end / totalFrames;

          intervalRef.current = setInterval(() => {
            start += increment;
            setCount((prev) => {
              if (prev >= end) {
                clearInterval(intervalRef.current);
                return end;
              }
              return Math.ceil(start);
            });
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current); // Cleanup interval
    };
  }, [end, duration]);

  return (
    <span
      ref={ref}
      className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg relative z-10"
    >
      {count}
    </span>
  );
}
