"use client";

import { DefaultTimeline } from "@/components/layout/timeline";
import { motion } from "framer-motion";
import Image from "next/image";
// import schoolBuilding from "../../public/schoolBuilding.jpg";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-gray-900 py-16 px-6 sm:px-12 lg:px-20">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-indigo-700">Our School</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Inspiring young minds with knowledge, discipline, and a passion for
          lifelong learning.
        </p>
      </motion.div>

      {/* About Our School */}
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <Image
            src={""}
            alt="Our School Building"
            className="rounded-2xl shadow-md object-cover"
            width={500}
            height={350}
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to fostering a nurturing learning environment that
            encourages curiosity, academic excellence, and character
            development.
          </p>
        </div>
      </motion.div>

      {/* School Values */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Excellence",
              desc: "Striving for the best in academics and beyond.",
            },
            {
              title: "Integrity",
              desc: "Upholding honesty, ethics, and strong moral values.",
            },
            {
              title: "Innovation",
              desc: "Encouraging creativity and critical thinking.",
            },
            {
              title: "Community",
              desc: "Building a supportive and inclusive environment.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <DefaultTimeline />
    </section>
  );
}
