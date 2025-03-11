"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faculty = [
  {
    name: "Mrs. Asha Sharma",
    role: "Principal",
    image: "/teacher1.png",
    description:
      "A seasoned educator with 25+ years of experience in shaping young minds.",
    qualifications: "M.Ed, B.Ed, PhD in Education",
    quote:
      "Our mission is to inspire every student to achieve their highest potential.",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Science Teacher",
    image: "/teacher1.png",
    description:
      "Expert in Physics and Chemistry, inspiring students to love science.",
    qualifications: "M.Sc in Physics, B.Ed",
  },
  {
    name: "Ms. Meera Gupta",
    role: "Mathematics Teacher",
    image: "/teacher1.png",
    description:
      "Dedicated to making mathematics engaging and understandable for all students.",
    qualifications: "M.Sc in Mathematics, B.Ed",
  },
  {
    name: "Mr. Ajay Singh",
    role: "English Teacher",
    image: "/teacher1.png",
    description:
      "Committed to improving language skills and fostering a love for literature.",
    qualifications: "M.A in English, B.Ed",
  },
];

export default function Faculty() {
  const principal = faculty.find((member) => member.role === "Principal");
  const otherFaculty = faculty.filter((member) => member.role !== "Principal");

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Principal Section */}
        <motion.div
          className="mb-16 p-10 bg-white rounded-2xl shadow-xl border-t-4 border-indigo-500 flex flex-col sm:flex-row items-center gap-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={principal.image}
            alt={principal.name}
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />

          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {principal.name}
            </h3>
            <p className="text-indigo-600 font-medium text-lg mb-4">
              {principal.role}
            </p>
            <p className="text-gray-600 italic mb-6">
              {principal.qualifications}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {principal.description}
            </p>
            <blockquote className="mt-6 text-indigo-700 font-semibold italic border-l-4 border-indigo-500 pl-4">
              "{principal.quote}"
            </blockquote>
          </div>
        </motion.div>

        {/* Faculty Section */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
          Meet Our Faculty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherFaculty.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  {member.qualifications}
                </p>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
