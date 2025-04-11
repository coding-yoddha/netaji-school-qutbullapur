"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-yellow-50 z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle school-themed pattern (books, pencils) */}
          <path
            d="M50 50 L70 70 M80 40 L100 60 M120 80 L140 100"
            stroke="#1E3A8A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="200" cy="200" r="20" fill="#FBBF24" opacity="0.5" />
          <rect
            x="300"
            y="50"
            width="40"
            height="60"
            fill="#1E3A8A"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-6 font-serif text-4xl md:text-5xl"
        >
          Welcome to Netaji High School
        </Typography>

        {/* Custom School-Themed Loader */}
        <motion.div
          className="relative flex items-center justify-center mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {/* Spinning Book Icon */}
          <svg
            className="w-16 h-16 text-indigo-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
            />
          </svg>
          {/* Subtle orbiting pencil */}
          <motion.div
            className="absolute w-4 h-4 bg-yellow-500 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: 30, y: -30 }}
          />
        </motion.div>

        <Typography
          variant="paragraph"
          color="gray"
          className="text-lg md:text-xl font-light"
        >
          Preparing your educational journey...
        </Typography>
      </motion.div>
    </motion.div>
  );
}
