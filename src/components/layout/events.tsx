"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function EventsSection({
  events,
}) {
  const router = useRouter();
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            School Achievements & Milestones
          </span>
        </h2>
        <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-lg max-w-2xl mx-auto">
          Celebrating moments of excellence, passion, and hard work.
        </p>
      </div>

      {/* Scrolling Events Container */}
      <div className="relative w-full flex justify-center">
        {/* Mobile: Vertical Scrolling (Inside Fixed Height Container) */}
        <div className="relative h-[200px] sm:hidden w-full px-4 overflow-hidden">
          <motion.div
            className="flex flex-col space-y-4"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {events?.map((event, index) => (
              <div
                key={index}
                onClick={() => router.push(`/events?eventId=${encodeURIComponent(event.eventId)}`)}
                className={`w-full p-4 text-sm text-white font-medium rounded-lg shadow-lg border border-gray-300 cursor-pointer hover:scale-[1.02] transition-transform ${event.color}`}
              >
                <h3 className="text-base font-semibold">{event.title}</h3>
                <p className="text-sm font-medium mt-1">{event.date}</p>
                <p className="text-sm mt-2 break-words">{event.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Horizontal Scrolling */}
        <motion.div
          className="hidden sm:flex space-x-10"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {events?.map((event, index) => (
            <div
              key={index}
              onClick={() =>
                router.push(`/events?eventId=${encodeURIComponent(event.eventId)}`)
              }
              className={`min-w-[320px] sm:min-w-[400px] flex-shrink-0 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl rounded-xl p-6 text-white shadow-lg border-2 border-gray-300 ${event.color}`}
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-lg font-medium mt-2">{event.date}</p>
              <p className="mt-3 break-words max-w-sm">{event.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
