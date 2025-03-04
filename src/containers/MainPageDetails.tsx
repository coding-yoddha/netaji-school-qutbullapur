import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "../components/ui/carousel";
import { Counter } from "../components/layout/countup";
import schoolIllustration from "../../public/schoolImg1.svg";
import rocketIllustration from "../../public/rocket.svg";

export const MainPageDetails = ({
  images,
  schoolName,
  welcomeMessage,
  aboutText,
  enrollmentStats,
  achievements,
  features,
}) => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-black py-24 flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-r from-blue-50 to-white shadow-xl"
        style={{
          background: "#ffffff",
        }}
      >
        {/* Background Illustrations */}
        <motion.img
          src={rocketIllustration.src}
          alt="School Illustration Left"
          className="absolute bottom-0 left-0 max-w-[40%] lg:max-w-[30%] xl:max-w-[25%] opacity-20 lg:opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />

        <motion.img
          src={schoolIllustration.src}
          alt="School Illustration Right"
          className="absolute bottom-0 right-0 max-w-[40%] lg:max-w-[30%] xl:max-w-[25%] opacity-20 lg:opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />

        {/* Main Content */}
        <motion.div
          className="container relative z-10 px-6 sm:px-12 lg:px-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to <span style={{ color: "#1e90ff" }}>{schoolName}</span>
          </h2>
          <p className="text-xl mb-6 text-gray-700 font-medium">
            {welcomeMessage}
          </p>
          <motion.a
            href="/about"
            className="inline-block px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: "#1E90FF", color: "#1E293B" }}
            whileHover={{ scale: 1.1 }}
          >
            Discover Our Vision
          </motion.a>
        </motion.div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden w-full">
        <div className="text-center w-full max-w-none px-6 sm:px-12 lg:px-20">
          <motion.h2
            className="text-4xl font-extrabold mb-12 relative inline-block bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ color: "black" }}
          >
            <span className="relative z-10">
              Capturing Moments, Creating Memories
            </span>
            <div className="absolute left-1/2 -bottom-2 w-[80%] h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform -translate-x-1/2 rounded-full"></div>
          </motion.h2>

          <motion.div
            className="flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[90%] rounded-lg shadow-lg overflow-hidden">
              <Carousel images={images} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Count Up Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
            Our Enrollment Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Students Enrolled */}
            <Counter
              end={1500}
              duration={3}
              title="Students Enrolled This Year"
              icon="📚"
            />

            {/* Passed Out Students */}
            <Counter
              end={5000}
              duration={3}
              title="Students Graduated"
              icon="🎓"
            />

            {/* Awards Won */}
            <Counter end={50} duration={3} title="Awards Won" icon="🏆" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-blue-600 drop-shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🏆 Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition duration-300 relative overflow-hidden transform hover:-translate-y-2 hover:ring-2 hover:ring-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-blue-600 drop-shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🌟 Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 flex flex-col items-center text-center hover:shadow-2xl transition duration-300 relative overflow-hidden transform hover:-translate-y-2 hover:ring-2 hover:ring-blue-400"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4 text-blue-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
