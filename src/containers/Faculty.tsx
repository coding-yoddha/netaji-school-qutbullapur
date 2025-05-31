"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/dispatch";
import { getFacultyDetails } from "@/store/slices/dataSlice";
import { RootState } from "@/store/store";

export default function Faculty() {
  const { facultyDetails, loading } = useSelector(
    (state: RootState) => state.schoolDetails
  );
  const dispatch = useAppDispatch();
  const [faculty, setFaculty] = useState<any[]>([]);

  useEffect(() => {
    if (!facultyDetails) {
      dispatch(getFacultyDetails());
    } else {
      setFaculty(facultyDetails);
    }
  }, [facultyDetails, dispatch]);

  if (loading || !faculty || faculty.length === 0) {
    return <div>Loading...</div>;
  }
  
  const principal = faculty?.find((member) => member.position === "Principal");
  const otherFaculty = faculty?.filter((member) => member.position !== "Principal" && member.position !== "Group");
  const groupImages = faculty?.filter((member) => member.position == "Group");

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
            src={`data:${principal.profilePicture.contentType};base64,${principal.profilePicture.data}`}
            alt={principal.personalInfo.firstName}
            width={250}
            height={250}
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />

          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {principal.personalInfo.lastName} {principal.personalInfo.firstName}
            </h3>
            <p className="text-indigo-600 font-medium text-lg mb-4">
              {principal.position}
            </p>
            <p className="text-gray-600 italic mb-6">
              {principal.academicInfo.highestDegree}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {principal.personalInfo.description}
            </p>
            <blockquote className="mt-6 text-indigo-700 font-semibold italic border-l-4 border-indigo-500 pl-4">
              Our mission is to inspire every student to achieve their highest potential.
            </blockquote>
          </div>
        </motion.div>

        {/* Faculty Section */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
          Meet Our Faculty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherFaculty?.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-100 rounded-t-lg overflow-hidden">
                <Image
                  src={`data:${member.profilePicture.contentType};base64,${member.profilePicture.data}`}
                  alt={member.personalInfo.firstName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {member.personalInfo.lastName} {member.personalInfo.firstName}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  {member.academicInfo.highestDegree}
                </p>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {member.personalInfo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
