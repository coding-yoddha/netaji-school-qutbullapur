"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";

type EventItem = {
  imageUrl: string;
};

type Event = {
  title?: string;
  description?: string;
  additionalDesc?: string[];
};

type EventData = {
  eventItems?: EventItem[];
  event?: Event[];
};

interface EventPageProps {
  eventData: EventData;
}

function EventImage({ src, alt, className, width, height }: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-2">
          <svg className="w-8 h-8 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function EventPage({ eventData }: EventPageProps) {
  const eventItems = eventData?.eventItems || [];
  const event = eventData?.event || [];
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
      />

      {/* Event Banner */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <EventImage
          src={eventItems[0]?.imageUrl}
          alt="Event Banner"
          width={1200}
          height={500}
          className="rounded-3xl shadow-lg object-cover w-full h-96"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mt-6 drop-shadow-md">
          {event[0]?.title || "Event Title"}
        </h1>
      </div>

      {/* Event Details */}
      <div className="max-w-5xl mx-auto mt-8 p-6 bg-white text-gray-900 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-900">
          Event Highlights
        </h2>
        <p className="text-lg leading-relaxed text-center">
          {event[0]?.description || ""}
        </p>

        {/* Display additional descriptions if available */}
        {event[0]?.additionalDesc && Array.isArray(event[0].additionalDesc) && event[0].additionalDesc.length > 0 && (
          <div className="mt-6 space-y-4">
            {event[0].additionalDesc.map((desc, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {eventItems.map((img, index) => (
          <EventImage
            key={index}
            src={img.imageUrl}
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
