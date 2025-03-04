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
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 text-gray-900 relative">
            Our Enrollment Stats
            <span className="block w-24 h-[3px] bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1: Students Enrolled */}
            <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white p-10 rounded-2xl flex flex-col items-center min-h-[200px]">
              <span className="text-7xl sm:text-8xl font-extrabold relative z-10 text-black drop-shadow-lg">
                <Counter end={1500} duration={3} />
              </span>
              <h3 className="text-2xl font-semibold tracking-wide mt-2 text-center text-black drop-shadow-md">
                Students Enrolled
              </h3>
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-[10rem] font-extrabold text-black opacity-10">
                  1500
                </span>
              </div>
            </div>

            {/* Card 2: Students Graduated */}
            <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white p-10 rounded-2xl flex flex-col items-center min-h-[200px]">
              <span className="text-7xl sm:text-8xl font-extrabold relative z-10 text-black drop-shadow-lg">
                <Counter end={5000} duration={3} />
              </span>
              <h3 className="text-2xl font-semibold tracking-wide mt-2 text-center text-black drop-shadow-md">
                Students Graduated
              </h3>
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-[10rem] font-extrabold text-black opacity-10">
                  5000
                </span>
              </div>
            </div>

            {/* Card 3: Awards Won */}
            <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-400 text-white p-10 rounded-2xl flex flex-col items-center min-h-[200px]">
              <span className="text-7xl sm:text-8xl font-extrabold relative z-10 text-black drop-shadow-lg">
                <Counter end={50} duration={3} />
              </span>
              <h3 className="text-2xl font-semibold tracking-wide mt-2 text-center text-black drop-shadow-md">
                Awards Won
              </h3>
              <div className="absolute inset-0 flex justify-center items-center">
                <span className="text-[10rem] font-extrabold text-black opacity-10">
                  50
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-12 text-black relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="relative z-10">Our Proud Achievements</span>
            <div className="absolute left-1/2 -bottom-1 w-24 h-[3px] bg-blue-500 transform -translate-x-1/2 rounded-full"></div>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-blue-200/50 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.08 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="absolute -bottom-2 right-4 text-6xl opacity-20">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white relative">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-12 text-black relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="relative z-10">Why Choose Us?</span>
            <div className="absolute left-1/2 -bottom-1 w-24 h-[3px] bg-blue-500 transform -translate-x-1/2 rounded-full"></div>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-xl border border-blue-300/50 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative"
                whileHover={{ scale: 1.08 }}
              >
                <div className="text-6xl mb-4 text-blue-500 drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="absolute bottom-2 right-4 text-6xl opacity-10">
                  {feature.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
