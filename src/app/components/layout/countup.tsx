"use client";

import { useState, useEffect, useRef } from "react";

export function Counter({ end, duration, title, icon }) {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false); // ✅ Prevents re-triggering
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          let start = 0;
          const increment = end / (duration * 60);

          let interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(interval);
              setCount(end);
              setHasCounted(true); // ✅ Ensures it runs only once
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasCounted]); // ✅ Dependency ensures count runs only once

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Icon */}
      <div className="text-5xl sm:text-6xl text-blue-500 mb-3">{icon}</div>

      {/* Counter */}
      <h3 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow-md">
        {count}
      </h3>

      {/* Title */}
      <p className="text-lg sm:text-xl text-gray-700 font-medium mt-2">
        {title}
      </p>
    </div>
  );
}
