"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/dispatch";
import { getFacultyDetails } from "@/store/slices/dataSlice";
import { RootState } from "@/store/store";

const faculty = [
  {
    name: "Mr. Chintala Mahesh Kumar",
    role: "Principal",
    image: "/founderOne.jpeg",
    description:
      "A dynamic leader with multidisciplinary qualifications and a vision to nurture holistic education through discipline, innovation, and integrity.",
    qualifications: "B.Ed, LLB, LLM, MBA",
    quote:
      "Our mission is to inspire every student to achieve their highest potential.",
  },
  {
    name: "Mrs. Chintala Nandini",
    role: "Academic Incharge",
    image: "/teacher4.jpeg",
    description:
      "A passionate academic coordinator dedicated to maintaining high scholastic standards and supporting students’ academic growth.",
    qualifications: "M.Sc, B.Ed",
  },
  {
    name: "Mr. P. Shiva Kumar",
    role: "Discipline Incharge",
    image: "/teacher3.jpeg",
    description:
      "A committed professional focused on instilling discipline and responsibility, ensuring a respectful and structured school environment.",
    qualifications: "B.Tech",
  },
];

export default function Faculty() {
  const { facultyDetails, loading } = useSelector(
    (state: RootState) => state.schoolDetails
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!facultyDetails) dispatch(getFacultyDetails());
  }, [facultyDetails]);

  const principal = faculty?.find((member) => member.role === "Principal");
  const otherFaculty = faculty?.filter((member) => member.role !== "Principal");

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
            width={250}
            height={250}
            className="w-80 h-80 object-cover rounded-full shadow-lg"
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
              {principal.quote}
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
              <div className="relative w-full h-100 rounded-t-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
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
