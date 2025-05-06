"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import annualDay from "../../public/annualDay.jpg";

// Mock Response
const eventDetails = {
  title: "Grand Annual Fest 2024",
  description:
    " The Grand Annual Fest was a spectacular celebration of talent and creativity. Students participated in various activities, including cultural performances, sports events, and innovative exhibitions.",
  mainImage: "link",
  eventImages: ["link1", "link2"],
};

export default function EventPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 py-10 px-5 sm:px-10">
      {/* Subtle Confetti Background */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={50}
        // opacity={0.1}
      />

      {/* Event Banner */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <Image
          src={annualDay}
          alt="Event Banner"
          width={1200}
          height={500}
          className="rounded-3xl shadow-lg object-cover w-full h-96"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mt-6 drop-shadow-md">
          Grand Annual Fest 2024
        </h1>
      </div>

      {/* Event Details */}
      <div className="max-w-5xl mx-auto mt-8 p-6 bg-white text-gray-900 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-900">
          Event Highlights
        </h2>
        <p className="text-lg leading-relaxed text-center">
          The Grand Annual Fest was a spectacular celebration of talent and
          creativity. Students participated in various activities, including
          cultural performances, sports events, and innovative exhibitions.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {[annualDay, annualDay, annualDay, annualDay].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Event Image ${index + 1}`}
            width={400}
            height={300}
            className="rounded-2xl shadow-lg object-cover w-full h-64 transition-transform transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}
