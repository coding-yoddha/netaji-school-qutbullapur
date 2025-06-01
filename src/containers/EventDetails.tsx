"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";

type EventImage = {
  contentType: string;
  data: string;
};

type EventItem = {
  image: EventImage;
};

type Event = {
  title?: string;
  description?: string;
};

type EventData = {
  eventItems?: EventItem[];
  event?: Event[];
};

interface EventPageProps {
  eventData: EventData;
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
        // opacity={0.1}
      />

      {/* Event Banner */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <Image
          src={`data:${eventItems[0]?.image.contentType};base64,${eventItems[0]?.image.data}`}
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
      </div>

      {/* Image Gallery */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {eventItems.map((img, index) => (
          <Image
            key={index}
            src={`data:${img.image.contentType};base64,${img.image.data}`}
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
