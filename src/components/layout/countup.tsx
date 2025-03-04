"use client";

import { useState, useEffect, useRef } from "react";

export function Counter({ end, duration, title, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const intervalRef = useRef(null); // Store interval reference

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (intervalRef.current) clearInterval(intervalRef.current); // Clear any existing interval
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
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="text-5xl sm:text-6xl text-blue-500 mb-3">{icon}</div>
      <h3 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-md">
        {count}
      </h3>
      <p className="text-lg sm:text-xl text-gray-700 font-medium mt-2">
        {title}
      </p>
    </div>
  );
}
