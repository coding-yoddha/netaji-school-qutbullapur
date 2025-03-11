"use client";
import { motion } from "framer-motion";

export function DefaultTimeline() {
  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Journey</h2>
      <div className="relative">
        <div className="border-l-4 border-indigo-600 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
        <div className="space-y-10 max-w-3xl mx-auto">
          {[
            {
              year: "1990",
              event: "School was founded with a vision for quality education.",
            },
            {
              year: "2005",
              event: "Expanded with modern facilities and digital classrooms.",
            },
            {
              year: "2015",
              event: "Recognized as one of the top schools in the city.",
            },
            {
              year: "2023",
              event: "Continued excellence in academics, sports, and arts.",
            },
          ].map((history, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center ${
                index % 2 === 0
                  ? "text-left md:flex-row-reverse"
                  : "text-right md:flex-row"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md w-72 text-gray-700 border border-gray-200">
                <h4 className="text-xl font-bold text-indigo-700">
                  {history.year}
                </h4>
                <p>{history.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
