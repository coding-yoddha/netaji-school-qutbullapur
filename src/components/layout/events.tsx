"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const completedEvents = [
  {
    title: "🏆 Academic Expo",
    date: "2024–25",
    description: "An inspiring showcase of academic brilliance, the expo featured interactive models, research presentations, and subject-based exhibits that highlighted students’ intellectual curiosity and innovation.!",
    color: "bg-gradient-to-r from-blue-700 to-indigo-500",
  },
  {
    title: "Graduation Day",
    date: "2024–25",
    description: "A proud and emotional milestone, Graduation Day honored the achievements of our outgoing students, celebrating their journey with heartfelt speeches, awards, and blessings for a bright future.",
    color: "bg-gradient-to-r from-purple-700 to-pink-500",
  },
  {
    title: "Freshers’ Day",
    date: "2024-25",
    description: "An energetic and warm welcome to new students, Freshers’ Day was filled with performances, fun games, and bonding activities that fostered friendship and excitement.",
    color: "bg-gradient-to-r from-green-700 to-teal-500",
  },
  {
    title: "International Yoga Day",
    date: "2024-25",
    description:
      "Students and staff came together to celebrate health and mindfulness through yoga sessions, emphasizing the importance of wellness and inner balance.",
    color: "bg-gradient-to-r from-orange-600 to-red-500",
  },
  {
    title: "Student Council Election Day",
    date: "2024–25",
    description: "A hands-on lesson in democracy, Election Day saw enthusiastic student participation, campaign speeches, and voting to elect the new student leaders.",
    color: "bg-gradient-to-r from-blue-700 to-indigo-500",
  },
  {
    title: "Graduation Day",
    date: "2024–25",
    description: "A proud and emotional milestone, Graduation Day honored the achievements of our outgoing students, celebrating their journey with heartfelt speeches, awards, and blessings for a bright future.",
    color: "bg-gradient-to-r from-purple-700 to-pink-500",
  },
];

export default function EventsSection() {
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
        <div className="relative h-[350px] overflow-hidden sm:hidden">
          <motion.div
            className="flex flex-col space-y-4"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {completedEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => router.push("/events")}
                className={`w-[220px] p-3 text-xs text-white font-semibold rounded-lg shadow-lg border-2 border-gray-300 cursor-pointer hover:scale-105 transition-transform ${event.color}`}
              >
                {event.title}
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
          {completedEvents.map((event, index) => (
            <div
              key={index}
              onClick={() =>
                router.push(`/events?event=${encodeURIComponent(event.title)}`)
              }
              className={`min-w-[320px] sm:min-w-[400px] flex-shrink-0 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl rounded-xl p-6 text-white shadow-lg border-2 border-gray-300 ${event.color}`}
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-lg font-medium mt-2">{event.date}</p>
              <p className="mt-3">{event.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
