"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import schoolBuilding from "../../public/schoolBuilding.jpg";

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

      {/* School History & Legacy */}
      <motion.div
        className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 relative">
          <Image
            src={schoolBuilding}
            alt="Our School Building"
            className="rounded-2xl shadow-md object-cover border-4 border-gold-500"
            width={500}
            height={350}
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
            Established in 1985
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Legacy & Values
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Since 1985, our school has been a beacon of knowledge, producing
            outstanding students who go on to achieve great things. We uphold
            the highest standards of education, character, and innovation.
          </p>
          <blockquote className="italic text-lg text-gray-600 border-l-4 border-gold-500 pl-4">
            "Education is not the filling of a pail, but the lighting of a
            fire."
          </blockquote>
        </div>
      </motion.div>

      {/* Campus & Facilities */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          World-Class Campus & Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "🏫 Modern Classrooms",
              desc: "Smart classrooms equipped with the latest technology.",
            },
            {
              title: "⚽ Sports Complex",
              desc: "State-of-the-art facilities for various sports activities.",
            },
            {
              title: "📚 Well-Stocked Library",
              desc: "A vast collection of books and digital resources.",
            },
          ].map((facility, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-gold-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Aarav K.",
              feedback:
                "Netaji High School shaped my future with excellent guidance and learning.",
            },
            {
              name: "Sanya M.",
              feedback:
                "The best decision of my life was studying here. The teachers truly care!",
            },
          ].map((testimony, index) => (
            <motion.div
              key={index}
              className="p-6 bg-blue-50 rounded-lg shadow-md border-l-4 border-blue-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 italic">"{testimony.feedback}"</p>
              <h4 className="mt-4 text-blue-800 font-bold">
                - {testimony.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Ready to Join Us?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Experience the excellence of Netaji High School firsthand. Schedule a
          visit or get in touch today!
        </p>
        <a
          href="/admissions"
          className="bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
        >
          Enroll Now
        </a>
      </motion.div>
    </section>
  );
}
