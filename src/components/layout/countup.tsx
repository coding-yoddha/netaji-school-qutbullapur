"use client";

import { useState, useEffect, useRef } from "react";

export function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Prevents re-running
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // Ensure it runs only once
          setCount(0);

          let start = 0;
          const stepTime = 50; // Slower for smoother effect
          const totalSteps = duration / stepTime;
          const increment = end / totalSteps;

          intervalRef.current = setInterval(() => {
            start += increment;
            setCount(Math.min(Math.ceil(start), end));

            if (start >= end) {
              clearInterval(intervalRef.current);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
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
